/**
 * The level engine: puzzle state, the program runner that drives it, and the Tiled map format
 * the levels are authored in. No DOM, no canvas.
 */

import {
  type BlockType,
  clonePos,
  distancePos,
  Emitter,
  equalPos,
  type EventBus,
  forwardCell,
  type GameEvent,
  type GidType,
  gidTable,
  gridKey,
  type GridPos,
  type Level,
  type LevelProp,
  type LevelTile,
  type Orientation,
  type PlayerSnapshot,
  pos,
  type Program,
  type ProgramNode,
  type PropTrigger,
  type TileDef,
  type TilesFile,
  turnLeft,
  turnRight,
} from './core/assets';

// Mutable puzzle state: the tile grid, the carrots and the player, driven by `update(dtMs)`.
//
// Purple tiles and triggerable props are scene-graph nodes that listen on the bus themselves, so
// they live in src/render/renderer.ts, not here; this module only emits the events they react to.
//
// No DOM, no canvas. The renderer reads the state and listens on the same event bus; the program
// runner below issues one action at a time and waits for the player to be idle again.
//
// Timing: one action of a sequence advances per frame and a tween's overshoot beyond its duration
// is discarded, so a jump costs `2 + 2 * ceil(187.5 / dt)` frames (26 frames, about 433 ms at
// 60 Hz) and a turn `1 + ceil(187.5 / dt)`.

// --- constants ---------------------------------------------------------------------------------

/** Total duration of the jump position tween. */
export const JUMP_TOTAL_MS = 375;
/** Each half of the split shadow/hop tweens; the pair decides when the jump ends. */
export const JUMP_LEG_MS = 187.5;
/** Turn wait before the orientation flips. */
const TURN_MS = 187.5;
/** Delay from jump start to the carrot being counted. */
export const CARROT_EAT_DELAY_MS = 250;
/** `distance(from, target) > 0.1` gates events 3 and 4. */
const MOVED_THRESHOLD = 0.1;

// --- tile grid ----------------------------------------------------------------------------------

/** The three types the grid holds. */
type GridTileType = 'passable' | 'unpassable' | 'carrot';

interface PuzzleTile {
  readonly pos: GridPos;
  readonly gid: number;
  readonly type: GridTileType;
}

type TileGrid = ReadonlyMap<string, PuzzleTile>;

/**
 * carrots and `unpassable` cubes first, then the `passable` cubes, all keyed by
 * `gridKey`. Carrots sit at standing height, one level above the cube that carries them.
 */
export function buildTileGrid(level: Level): Map<string, PuzzleTile> {
  const grid = new Map<string, PuzzleTile>();
  for (const carrot of level.carrots) {
    grid.set(gridKey(carrot.pos), { pos: clonePos(carrot.pos), gid: carrot.gid, type: 'carrot' });
  }
  for (const tile of level.tiles) {
    if (tile.type !== 'unpassable') continue;
    grid.set(gridKey(tile.pos), { pos: clonePos(tile.pos), gid: tile.gid, type: 'unpassable' });
  }
  for (const tile of level.tiles) {
    if (tile.type !== 'passable') continue;
    grid.set(gridKey(tile.pos), { pos: clonePos(tile.pos), gid: tile.gid, type: 'passable' });
  }
  return grid;
}

interface MoveResolution {
  /** Where the hop ends; equal to `from` when the move is blocked. */
  target: GridPos;
  /** Whether events 3 and 4 fire, i.e. `distance > 0.1`. */
  moved: boolean;
}

/**
 * Target cell of `logo17_move_forward`. A blocked move still hops
 * in place: the caller plays the same animation, only the events are suppressed.
 *
 * A step up by one is real (the head cell must be free); a floor one level lower is **blocked**, and
 * a carrot at floor level is blocked for the same reason. A step down never happens.
 */
function resolveMoveTarget(
  grid: TileGrid,
  from: GridPos,
  orientation: Orientation,
): MoveResolution {
  const p = forwardCell(from, orientation);
  const head = grid.get(gridKey(pos(from.x, from.y - 1, from.z)));
  const body = grid.get(gridKey(p));
  const floor = grid.get(gridKey(pos(p.x, p.y + 1, p.z)));

  let target = from;
  if (body && body.type !== 'carrot') {
    if (body.type === 'passable' && !head) target = pos(p.x, p.y - 1, p.z);
  } else if (floor?.type === 'passable') {
    target = p;
  }

  return { target: clonePos(target), moved: distancePos(from, target) > MOVED_THRESHOLD };
}

// --- player ---------------------------------------------------------------------------------------

export type PlayerState = 'idle' | 'jump' | 'turning';

class Player implements PlayerSnapshot {
  /** Fractional while a hop is in flight. */
  position: GridPos;
  orientation: Orientation;
  state: PlayerState = 'idle';
  /** Gates the extra event 5 at the start of the first jump after a reset. */
  firstJump = true;

  constructor(
    readonly startPosition: GridPos,
    readonly startOrientation: Orientation,
  ) {
    this.position = clonePos(startPosition);
    this.orientation = startOrientation;
  }

  reset(): void {
    this.position = clonePos(this.startPosition);
    this.orientation = this.startOrientation;
    this.state = 'idle';
    this.firstJump = true;
  }
}

export type { Player as PuzzlePlayer };

type JumpAction = {
  kind: 'jump';
  phase: 'start' | 'group' | 'end';
  from: GridPos;
  to: GridPos;
  moved: boolean;
  /** Feeds the 375 ms position tween. */
  groupElapsedMs: number;
  /** Feeds the current 187.5 ms leg of the split tweens. */
  legElapsedMs: number;
  leg: number;
};

type TurnAction = {
  kind: 'turn';
  phase: 'wait' | 'end';
  direction: 'left' | 'right';
  elapsedMs: number;
};

type PlayerAction = JumpAction | TurnAction;

/** The callback fires the frame after the wait crosses `ms`. */
interface Timer {
  elapsedMs: number;
  durationMs: number;
  waited: boolean;
  fn: () => void;
}

// --- puzzle -------------------------------------------------------------------------------------

interface PuzzleCarrot {
  readonly pos: GridPos;
  readonly gid: number;
  eaten: boolean;
}

export class Puzzle {
  readonly bus: EventBus;
  readonly grid: Map<string, PuzzleTile>;
  readonly carrots: PuzzleCarrot[];
  readonly player: Player;

  private solved_ = false;
  private action: PlayerAction | null = null;
  private timers: Timer[] = [];
  private readonly unsubscribe: () => void;

  constructor(
    readonly level: Level,
    bus: EventBus = new Emitter(),
  ) {
    this.bus = bus;
    this.grid = buildTileGrid(level);
    this.carrots = level.carrots.map((carrot) => ({
      pos: clonePos(carrot.pos),
      gid: carrot.gid,
      eaten: false,
    }));
    this.player = new Player(clonePos(level.start.pos), level.start.orientation);
    this.unsubscribe = bus.on((event) => this.onEvent(event));
  }

  /** Every carrot eaten. */
  get solved(): boolean {
    return this.solved_;
  }

  get carrotsEaten(): number {
    return this.carrots.reduce((n, carrot) => n + (carrot.eaten ? 1 : 0), 0);
  }

  get isPlayerIdle(): boolean {
    return this.action === null && this.player.state === 'idle';
  }

  /**
   * Issues the jump of `logo17_move_forward`. Call it only while the player is idle; the returned
   * resolution says where the hop will end and whether it counts as a move.
   */
  moveForward(): MoveResolution {
    const resolution = resolveMoveTarget(this.grid, this.player.position, this.player.orientation);
    this.action = {
      kind: 'jump',
      phase: 'start',
      from: clonePos(this.player.position),
      to: resolution.target,
      moved: resolution.moved,
      groupElapsedMs: 0,
      legElapsedMs: 0,
      leg: 0,
    };
    return resolution;
  }

  /** The state flips to `turning` at once, the orientation only after 187.5 ms. */
  turn(direction: 'left' | 'right'): void {
    this.player.state = 'turning';
    this.action = { kind: 'turn', phase: 'wait', direction, elapsedMs: 0 };
  }

  turnLeft(): void {
    this.turn('left');
  }

  turnRight(): void {
    this.turn('right');
  }

  /**
   * The decorative hop in place, used by the level-in, level-out and
   * tutorial intro sequences. `target == position`, so events 3 and 4 stay
   * silent and only event 5 fires - once at the start if this is the first hop after a reset, and
   * once at the end of the hop, 375 ms later.
   *
   * The player state machine is not involved: the hop is view-only, and the caller owns its sprite,
   * shadow and JUMP sound. This is the engine half, so the event-5 gating stays in one place.
   */
  hopInPlace(): void {
    if (this.player.firstJump) {
      this.player.firstJump = false;
      this.bus.emit({ type: 'playerHop' });
    }
    this.timers.push({
      elapsedMs: 0,
      durationMs: JUMP_TOTAL_MS,
      waited: false,
      fn: () => this.bus.emit({ type: 'playerHop' }),
    });
  }

  /**
   * One frame. Timers (carrot eating, the end of a decorative hop) advance before the player.
   */
  update(dtMs: number): void {
    this.updateTimers(dtMs);
    this.updateAction(dtMs);
  }

  /** Everything back to the start state, then the reset event. */
  reset(): void {
    this.player.reset();
    this.action = null;
    this.timers = [];
    for (const carrot of this.carrots) carrot.eaten = false;
    this.solved_ = false;
    this.bus.emit({ type: 'puzzleReset' });
  }

  /** Drops the puzzle's own bus listener. */
  dispose(): void {
    this.unsubscribe();
  }

  private updateTimers(dtMs: number): void {
    if (this.timers.length === 0) return;
    const live: Timer[] = [];
    for (const timer of this.timers) {
      if (!timer.waited) {
        timer.elapsedMs += dtMs;
        if (timer.elapsedMs >= timer.durationMs) timer.waited = true;
        live.push(timer);
      } else {
        timer.fn();
      }
    }
    this.timers = live;
  }

  private updateAction(dtMs: number): void {
    const action = this.action;
    if (!action) return;
    if (action.kind === 'jump') this.updateJump(action, dtMs);
    else this.updateTurn(action, dtMs);
  }

  /** `start` emits and hands over, `group` tweens the two legs, `end` snaps and clears. */
  private updateJump(action: JumpAction, dtMs: number): void {
    switch (action.phase) {
      case 'start':
        this.player.state = 'jump';
        if (action.moved) this.bus.emit({ type: 'playerJumpStart', player: this.player });
        if (this.player.firstJump) {
          this.player.firstJump = false;
          this.bus.emit({ type: 'playerHop' });
        }
        action.phase = 'group';
        return;
      case 'group': {
        action.groupElapsedMs += dtMs;
        action.legElapsedMs += dtMs;
        const t = Math.min(1, action.groupElapsedMs / JUMP_TOTAL_MS);
        this.player.position = {
          x: action.from.x + (action.to.x - action.from.x) * t,
          y: action.from.y + (action.to.y - action.from.y) * t,
          z: action.from.z + (action.to.z - action.from.z) * t,
        };
        if (action.legElapsedMs >= JUMP_LEG_MS) {
          // The overshoot is discarded, not carried into the next leg.
          action.legElapsedMs = 0;
          action.leg += 1;
          if (action.leg >= 2) action.phase = 'end';
        }
        return;
      }
      case 'end':
        this.player.position = clonePos(action.to);
        this.player.state = 'idle';
        this.action = null;
        if (action.moved) this.bus.emit({ type: 'playerLanded', player: this.player });
        this.bus.emit({ type: 'playerHop' });
    }
  }

  /** Waits out `TURN_MS`, then applies the quarter turn on the following frame. */
  private updateTurn(action: TurnAction, dtMs: number): void {
    if (action.phase === 'wait') {
      action.elapsedMs += dtMs;
      if (action.elapsedMs >= TURN_MS) action.phase = 'end';
      return;
    }
    this.player.orientation =
      action.direction === 'left'
        ? turnLeft(this.player.orientation)
        : turnRight(this.player.orientation);
    this.player.state = 'idle';
    this.action = null;
  }

  private onEvent(event: GameEvent): void {
    if (event.type === 'playerLanded') this.checkSolved();
    else if (event.type === 'playerJumpStart') this.startCarrotEat(event.player);
  }

  /** Win check on event 3: no carrot left uneaten, once per solve. */
  private checkSolved(): void {
    if (this.solved_) return;
    if (this.carrots.some((carrot) => !carrot.eaten)) return;
    this.solved_ = true;
    this.bus.emit({ type: 'puzzleSolved' });
  }

  /** The carrot one cell ahead is counted 250 ms into the hop. */
  private startCarrotEat(player: PlayerSnapshot): void {
    const cell = forwardCell(player.position, player.orientation);
    const carrot = this.carrots.find((c) => !c.eaten && equalPos(c.pos, cell));
    if (!carrot) return;
    this.timers.push({
      elapsedMs: 0,
      durationMs: CARROT_EAT_DELAY_MS,
      waited: false,
      fn: () => {
        carrot.eaten = true;
      },
    });
  }
}

// Runs the AST one step at a time.
//
// `createRunner` returns a runner that has already started. Each frame, call `puzzle.update(dt)`
// first and `runner.step(dt)` second, so an action a node pushes runs on the next frame.
//
// A runner is tied to the program it was built with, so editing during a run needs a new one.

/** Every timed node - a move, a turn, a loop iteration - waits at least this long. */
const MIN_EXECUTION_TIME_MS = 333;

type RunEndReason =
  /** The root generator ran out: the program ended. */
  | 'completed'
  /** The puzzle was solved: the rest of the program is dropped. */
  | 'solved'
  /** `stop`, i.e. the second press of the play button. */
  | 'stopped';

interface RuntimeNode {
  readonly source: ProgramNode | null;
  readonly blockId: string | null;
  readonly minExecutionTimeMs: number;
  readonly children: RuntimeNode[];
  readonly count: number;
  parent: RuntimeNode | null;
  started: boolean;
  elapsedMs: number;
  generator: Generator<RuntimeNode, void, void> | null;
}

function buildNode(
  source: ProgramNode | null,
  body: readonly ProgramNode[],
  parent: RuntimeNode | null,
): RuntimeNode {
  // The root, like the `run_code` hat, costs no time and is never highlighted;
  // a nested sequence is a plain container and is treated the same way.
  const isTimed = source !== null && source.kind !== 'sequence';
  const node: RuntimeNode = {
    source,
    blockId: isTimed && source ? source.blockId : null,
    minExecutionTimeMs: isTimed ? MIN_EXECUTION_TIME_MS : 0,
    children: [],
    count: source?.kind === 'repeat' ? source.count : 0,
    parent,
    started: false,
    elapsedMs: 0,
    generator: null,
  };
  for (const child of body) {
    node.children.push(
      buildNode(
        child,
        child.kind === 'sequence' || child.kind === 'repeat' ? child.body : [],
        node,
      ),
    );
  }
  return node;
}

/** `reset`: clears started/elapsed down the tree and regenerates the generators. */
function resetNode(node: RuntimeNode): void {
  node.started = false;
  node.elapsedMs = 0;
  for (const child of node.children) {
    resetNode(child);
    child.generator = makeGenerator(child);
  }
}

/**
 * `getNextNodeGenerator`. A loop yields its children once per
 * iteration and then yields itself, so it pays `minExecutionTimeMs` again after every iteration:
 * `333 + N * (body + 333)` ms in total, and `N = 0` costs 333 ms with no body.
 */
function* makeGenerator(node: RuntimeNode): Generator<RuntimeNode, void, void> {
  if (node.source?.kind === 'repeat') {
    for (let i = 0; i < node.count; i++) {
      for (const child of node.children) yield child;
      resetNode(node);
      yield node;
    }
    return;
  }
  for (const child of node.children) yield child;
}

function isFinished(node: RuntimeNode, puzzle: Puzzle): boolean {
  if (node.elapsedMs < node.minExecutionTimeMs) return false;
  // A player-control node also waits for the player to be idle again.
  if (node.source && node.source.kind !== 'repeat' && node.source.kind !== 'sequence')
    return puzzle.isPlayerIdle;
  return true;
}

function startNode(node: RuntimeNode, puzzle: Puzzle): void {
  node.started = true;
  const source = node.source;
  if (!source) return;
  switch (source.kind) {
    case 'moveForward':
      puzzle.moveForward();
      return;
    case 'turnLeft':
      puzzle.turnLeft();
      return;
    case 'turnRight':
      puzzle.turnRight();
      return;
    default:
      return;
  }
}

export interface ProgramRunner {
  /** `true` while a node is active; `false` before `start` and after the program ends. */
  readonly running: boolean;
  /** Block to glow this frame, `null` when nothing is active. */
  readonly activeBlockId: string | null;
  /** Set once the run is over; `null` while it is running. */
  readonly endReason: RunEndReason | null;
  /** Reset the tree and make the root active. Does not touch the puzzle. */
  start(): void;
  /** One frame. Call after `puzzle.update(dt)`. */
  step(dtMs: number): void;
  /** drop the rest of the program. The player finishes the hop it is in. */
  stop(): void;
  /** Drops the runner's bus listener. */
  dispose(): void;
}

/**
 * A blocked `move_forward` does not end the run: there is no failure state, the hop plays in place
 * and the next block starts.
 */
export function createRunner(program: Program, puzzle: Puzzle): ProgramRunner {
  const root = buildNode(null, program.body, null);
  let active: RuntimeNode | null = null;
  let endReason: RunEndReason | null = null;
  let activeBlockId: string | null = null;

  const finish = (reason: RunEndReason): void => {
    active = null;
    activeBlockId = null;
    endReason = reason;
  };

  const unsubscribe = puzzle.bus.on((event) => {
    if (event.type === 'puzzleSolved' && active) finish('solved');
  });

  const runner: ProgramRunner = {
    get running(): boolean {
      return active !== null;
    },
    get activeBlockId(): string | null {
      return activeBlockId;
    },
    get endReason(): RunEndReason | null {
      return endReason;
    },
    start(): void {
      resetNode(root);
      root.generator = makeGenerator(root);
      active = root;
      activeBlockId = null;
      endReason = null;
    },
    step(dtMs: number): void {
      if (!active) return;
      // Climb out of finished nodes, descending into the next child or back to the parent.
      while (active && isFinished(active, puzzle)) {
        const node: RuntimeNode = active;
        node.generator ??= makeGenerator(node);
        const next: IteratorResult<RuntimeNode, void> = node.generator.next();
        active = next.done ? node.parent : next.value;
      }
      if (!active) {
        finish('completed');
        return;
      }
      if (active.started) {
        // A node's first `update` is the frame after `start`, so the 333 ms count begins one
        // frame late.
        active.elapsedMs += dtMs;
        return;
      }
      startNode(active, puzzle);
      activeBlockId = active.blockId;
    },
    stop(): void {
      finish('stopped');
    },
    dispose(): void {
      unsubscribe();
    },
  };

  runner.start();
  return runner;
}

// Tiled map <-> `Level`.
//
// Decodes the Tiled 1.0.2 JSON the shipped maps are in, with properties in the Tiled 1.0 object
// form. The tile-layer loop walks the full rectangle, so a non-square map decodes correctly; every
// shipped map is square.

// --- Tiled JSON ------------------------------------------------------------------------------------

type TiledPropertyValue = string | number | boolean;

interface TiledObject {
  id: number;
  /** Tile gid, flip bits included. */
  gid?: number;
  x: number;
  y: number;
  width: number;
  height: number;
  name?: string;
  type?: string;
  rotation?: number;
  visible?: boolean;
  properties?: Record<string, TiledPropertyValue>;
  propertytypes?: Record<string, string>;
}

interface TiledLayerCommon {
  name: string;
  opacity?: number;
  visible?: boolean;
  x?: number;
  y?: number;
  offsetx?: number;
  /** Layer height in px; `offsety / tileheight` is the grid `y`. */
  offsety?: number;
}

interface TiledTileLayer extends TiledLayerCommon {
  type: 'tilelayer';
  width: number;
  height: number;
  data: number[];
}

interface TiledObjectLayer extends TiledLayerCommon {
  type: 'objectgroup';
  draworder?: string;
  objects: TiledObject[];
}

type TiledLayer = TiledTileLayer | TiledObjectLayer;

export interface TiledMap {
  type: 'map';
  version: number;
  tiledversion: string;
  orientation: string;
  renderorder: string;
  width: number;
  height: number;
  tilewidth: number;
  tileheight: number;
  nextobjectid: number;
  tilesets: Array<{ firstgid: number; source: string }>;
  layers: TiledLayer[];
}

/** The version string the shipped maps carry. */
const TILED_VERSION = '1.0.2';
/** The external tileset every map shares. */
const TILESET_SOURCE = 'level1_tileset.json';
/** Tile size in px; `y * TILE_HEIGHT` is a layer's `offsety`. */
const TILE_WIDTH = 128;
const TILE_HEIGHT = 64;

/** Object gids are masked with this; tile-layer gids are not. */
const GID_MASK = 0x0fffffff;
/** Only the horizontal flip bit is honored. */
const FLIP_HORIZONTAL = 0x80000000;

// --- import ------------------------------------------------------------------------------------------

interface TiledImportMeta {
  id?: string;
  title?: string;
  allowedBlocks?: readonly BlockType[];
  targetBlockCount?: number;
  spriteSheetIds?: readonly number[];
}

/** object properties carry vectors as a JSON string. */
function parseVec3(value: TiledPropertyValue | undefined): GridPos | null {
  if (typeof value !== 'string') return null;
  let parsed: unknown;
  try {
    parsed = JSON.parse(value);
  } catch {
    // A malformed property is dropped rather than failing the whole load.
    return null;
  }
  if (typeof parsed !== 'object' || parsed === null) return null;
  const record = parsed as Record<string, unknown>;
  const { x, y, z } = record;
  // Only numbers are valid, so a non-numeric member drops the property the same as a missing one.
  // Checking merely "is defined" would build a vector from a string and push NaN downstream.
  if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') return null;
  return pos(x, y, z);
}

function parseTrigger(properties: Record<string, TiledPropertyValue>): PropTrigger {
  const loopAfterFrame = properties.loopAfterFrame;
  return {
    enterTrigger: parseVec3(properties.enterTrigger),
    exitTrigger: parseVec3(properties.exitTrigger),
    reverseTrigger: parseVec3(properties.reverseTrigger),
    firstVisible: properties.firstVisible === true,
    retriggerable: properties.retriggerable === true,
    loopAfterFrame: typeof loopAfterFrame === 'number' ? loopAfterFrame : null,
  };
}

interface TileLayerSink {
  tiles: LevelTile[];
  carrots: Level['carrots'];
  starts: Level['start'][];
}

function readTileLayer(
  layer: TiledTileLayer,
  y: number,
  byGid: Map<number, TileDef>,
  sink: TileLayerSink,
): void {
  for (let row = 0; row < layer.height; row++) {
    for (let col = 0; col < layer.width; col++) {
      const gid = layer.data[row * layer.width + col];
      const def = byGid.get(gid);
      // gid 0 and any gid outside the tileset are empty cells and are skipped.
      if (!def) continue;
      const cell = pos(col, y, row);
      if (def.type === 'passable' || def.type === 'unpassable')
        sink.tiles.push({ pos: cell, gid, type: def.type });
      else if (def.type === 'carrot') sink.carrots.push({ pos: cell, gid });
      else if (def.type === 'player' && def.orientation !== undefined) {
        sink.starts.push({ pos: cell, orientation: def.orientation });
      }
    }
  }
}

function readObjectLayer(
  layer: TiledObjectLayer,
  y: number,
  tileHeight: number,
  byGid: Map<number, TileDef>,
): LevelProp[] {
  const props: LevelProp[] = [];
  for (const object of layer.objects) {
    if (object.gid === undefined) continue;
    const gid = object.gid & GID_MASK;
    const def = byGid.get(gid);
    // An object gid must be a tileset gid. An unknown one would otherwise become a prop that draws
    // nothing and, when its type should have been `triggerable`, lose its scripted behavior
    // silently.
    if (!def) throw new Error(`object ${object.id}: gid ${gid} is not in the tileset`);
    const properties = object.properties ?? {};
    props.push({
      id: object.id,
      gid,
      // Tiled anchors an isometric tile object bottom-center, the engine draws bottom-left
      // so shift by: x = (x - w/4) / tileheight, z = (y + w/4) / tileheight.
      position: pos(
        (object.x - object.width / 4) / tileHeight,
        y,
        (object.y + object.width / 4) / tileHeight,
      ),
      size: { width: object.width, height: object.height },
      mirrored: (object.gid & FLIP_HORIZONTAL) !== 0,
      objectAnchor: parseVec3(properties.objectAnchor),
      trigger: def.type === 'triggerable' ? parseTrigger(properties) : null,
    });
  }
  return props;
}

/**
 * Decodes a Tiled map into a `Level`. Everything outside the map file - id, title, toolbox, target
 * block count, sheets - comes from the manifest and is passed in `meta`.
 *
 * A second `player` tile throws. With no player tile the start defaults to `(0, 0, 0)` facing
 * right; that cell has no floor in any real map. An object gid missing from the tileset throws as
 * well (`readObjectLayer`), while a missing tile-layer gid is skipped.
 */
export function importTiled(map: TiledMap, tiles: TilesFile, meta: TiledImportMeta = {}): Level {
  const byGid = gidTable(tiles);
  const levelTiles: LevelTile[] = [];
  const carrots: Level['carrots'] = [];
  const props: LevelProp[] = [];
  const starts: Level['start'][] = [];

  for (const layer of map.layers) {
    const y = layer.offsety ? layer.offsety / map.tileheight : 0;
    // Only these two layer kinds are read, so an `imagelayer` or `group` is decoration, not a
    // load failure.
    if (layer.type === 'tilelayer') {
      readTileLayer(layer, y, byGid, { tiles: levelTiles, carrots, starts });
    } else if (layer.type === 'objectgroup') {
      props.push(...readObjectLayer(layer, y, map.tileheight, byGid));
    }
  }
  if (starts.length > 1)
    throw new Error(`${starts.length} player tiles; a map must have exactly one`);
  const start = starts[0];

  return {
    id: meta.id ?? 'custom',
    title: meta.title ?? meta.id ?? 'custom',
    width: map.width,
    height: map.height,
    tiles: levelTiles,
    carrots,
    start: start ?? { pos: pos(0, 0, 0), orientation: 'right' },
    goal: { kind: 'allCarrotsEaten' },
    props,
    allowedBlocks: meta.allowedBlocks ?? [
      'logo17_for_loop',
      'logo17_move_forward',
      'logo17_turn_right',
      'logo17_turn_left',
    ],
    targetBlockCount: meta.targetBlockCount ?? 0,
    spriteSheetIds: meta.spriteSheetIds ?? [],
  };
}

// --- export ------------------------------------------------------------------------------------------

/** One entry of a tile layer, before it is written into that layer's `data` array. */
interface LayerCell {
  y: number;
  x: number;
  z: number;
  gid: number;
}

function playerGid(tiles: TilesFile, orientation: Orientation): number {
  const def = tiles.tiles.find(
    (tile) => tile.type === 'player' && tile.orientation === orientation,
  );
  if (!def) throw new Error(`no player gid for orientation ${orientation}`);
  return def.gid;
}

/** Vectors go back out as JSON strings, which is the form `parseVec3` reads. */
function propertiesOf(prop: LevelProp): Pick<TiledObject, 'properties' | 'propertytypes'> {
  const properties: Record<string, TiledPropertyValue> = {};
  const propertytypes: Record<string, string> = {};
  const addVec = (name: string, value: GridPos | null): void => {
    if (!value) return;
    properties[name] = JSON.stringify(value);
    propertytypes[name] = 'string';
  };

  addVec('objectAnchor', prop.objectAnchor);
  const trigger = prop.trigger;
  if (trigger) {
    addVec('enterTrigger', trigger.enterTrigger);
    addVec('exitTrigger', trigger.exitTrigger);
    addVec('reverseTrigger', trigger.reverseTrigger);
    if (trigger.firstVisible) {
      properties.firstVisible = true;
      propertytypes.firstVisible = 'bool';
    }
    if (trigger.retriggerable) {
      properties.retriggerable = true;
      propertytypes.retriggerable = 'bool';
    }
    if (trigger.loopAfterFrame !== null) {
      properties.loopAfterFrame = trigger.loopAfterFrame;
      propertytypes.loopAfterFrame = 'int';
    }
  }
  return Object.keys(properties).length === 0 ? {} : { properties, propertytypes };
}

/**
 * Writes a `Level` back out as a Tiled map: one tile layer per height with the ground first, one
 * object layer per prop height in the order the props are stored, and the shared external tileset.
 * `importTiled` reads the result back to an equal `Level`, apart from the five fields a map file
 * has nowhere to put - id, title, allowedBlocks, targetBlockCount and spriteSheetIds - which the
 * caller passes back in as `meta`.
 *
 * Layer names, `draworder` and object `name`/`type`/`rotation` are regenerated rather than
 * preserved, since nothing reads them back.
 */
export function exportTiled(level: Level, tiles: TilesFile): TiledMap {
  const byGid = gidTable(tiles);
  // A gid whose type does not match the array it sits in would re-import into a different array,
  // so it is rejected here rather than silently moving on the next load.
  const checkGid = (gid: number, expected: GidType, where: string): void => {
    const def = byGid.get(gid);
    if (!def) throw new Error(`${where} uses gid ${gid}, which is not in the tileset`);
    if (def.type !== expected) throw new Error(`${where} uses a ${def.type} gid, not ${expected}`);
  };
  for (const tile of level.tiles) checkGid(tile.gid, tile.type, `tile at ${gridKey(tile.pos)}`);
  for (const carrot of level.carrots) {
    checkGid(carrot.gid, 'carrot', `carrot at ${gridKey(carrot.pos)}`);
  }

  const cells: LayerCell[] = [
    ...level.tiles.map((tile) => ({ ...tile.pos, gid: tile.gid })),
    ...level.carrots.map((carrot) => ({ ...carrot.pos, gid: carrot.gid })),
    { ...level.start.pos, gid: playerGid(tiles, level.start.orientation) },
  ];

  // Descending y puts the ground layer first, which is the order the shipped maps use.
  const tileHeights = [...new Set(cells.map((cell) => cell.y))].sort((a, b) => b - a);
  const layers: TiledLayer[] = tileHeights.map((y, index) => {
    const data = new Array<number>(level.width * level.height).fill(0);
    for (const cell of cells) {
      if (cell.y !== y) continue;
      const col = Math.round(cell.x);
      const row = Math.round(cell.z);
      // The layer is exactly `data[width * height]`. A cell outside that rectangle has no slot, and
      // writing one anyway drops it or leaves holes that serialize as `null`, which is not a gid.
      if (col < 0 || col >= level.width || row < 0 || row >= level.height) {
        const size = `${level.width}x${level.height}`;
        throw new Error(`cell ${gridKey(cell)} is outside the ${size} map`);
      }
      data[row * level.width + col] = cell.gid;
    }
    return {
      type: 'tilelayer',
      name: `Tile Layer ${index + 1}`,
      width: level.width,
      height: level.height,
      opacity: 1,
      visible: true,
      x: 0,
      y: 0,
      ...(y === 0 ? {} : { offsetx: 0, offsety: y * TILE_HEIGHT }),
      data,
    };
  });

  const propHeights: number[] = [];
  for (const prop of level.props) {
    if (!propHeights.includes(prop.position.y)) propHeights.push(prop.position.y);
  }
  for (const [index, y] of propHeights.entries()) {
    layers.push({
      type: 'objectgroup',
      name: `Object Layer ${index + 1}`,
      draworder: 'topdown',
      opacity: 1,
      visible: true,
      x: 0,
      y: 0,
      ...(y === 0 ? {} : { offsetx: 0, offsety: y * TILE_HEIGHT }),
      objects: level.props
        .filter((prop) => prop.position.y === y)
        .map((prop) => ({
          id: prop.id,
          gid: prop.mirrored ? prop.gid + FLIP_HORIZONTAL : prop.gid,
          x: prop.position.x * TILE_HEIGHT + prop.size.width / 4,
          y: prop.position.z * TILE_HEIGHT - prop.size.width / 4,
          width: prop.size.width,
          height: prop.size.height,
          name: '',
          type: '',
          rotation: 0,
          visible: true,
          ...propertiesOf(prop),
        })),
    });
  }

  const maxId = level.props.reduce((max, prop) => Math.max(max, prop.id), 0);
  return {
    type: 'map',
    version: 1,
    tiledversion: TILED_VERSION,
    orientation: 'isometric',
    renderorder: 'right-down',
    width: level.width,
    height: level.height,
    tilewidth: TILE_WIDTH,
    tileheight: TILE_HEIGHT,
    nextobjectid: maxId + 1,
    tilesets: [{ firstgid: tiles.gidMapping.firstgid, source: TILESET_SOURCE }],
    layers,
  };
}
