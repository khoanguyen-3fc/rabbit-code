/**
 * The world nodes (Tile, PurpleTile, Carrot, Prop, TriggerableProp, Player, Puzzle) and the frame
 * entry points that draw them.
 *
 * `buildSceneForLevel` turns a `Level` into a `PuzzleNode` - the same tree the
 * game runs, so a level can be rendered without a running puzzle. `render` fills the background,
 * runs the transform pass and draws the tree with the per-frame depth sort.
 * Advancing time is the caller's job: call `camera.update(dt)` (or `puzzle.update(dt)`) first.
 */

import {
  addPos,
  clonePos,
  equalPos,
  type EventBus,
  gidTable,
  gridKey,
  type GridPos,
  type Level,
  type LevelProp,
  type Orientation,
  ORIENTATION_DELTA,
  pos,
  type PropTrigger,
  type PropType,
  type SolidTileType,
  type TileDef,
  type TilesFile,
} from '../core/assets';
import {
  ActionSequence,
  CallbackAction,
  DRAW_RANK,
  SceneNode,
  WaitAction,
  depthKey,
  nodeAnchor,
  playerDrawRank,
  project,
  type Ctx2D,
  type ScreenPoint,
  updateTransforms,
} from './scene-graph';
import { SpriteNode } from './sprite';
import { Camera, type Box } from './camera';
import {
  levelInAction,
  levelOutAction,
  type LevelAnimationOptions,
  type LevelAnimationTarget,
} from './animations';

/** The flat scene background. */
export const BACKGROUND_COLOUR = '#98eae0';

/** Every drawable's sprite child sits under a node with this offset and scale. */
const BLOCK_TRANSFORM_OFFSET = pos(0.5, 0, 1.5);
/** 1/64: one sprite pixel per world unit / 64. */
const BLOCK_TRANSFORM_SCALE = 0.015625;

/** 225 ms after the player leaves the exit cell. */
const EXIT_TRIGGER_DELAY_MS = 225;
/** The carrot vanishes 250 ms into the 375 ms hop that takes it. */
const CARROT_EAT_DELAY_MS = 250;

function frameRange(prefix: string, from: number, to: number): string[] {
  const keys: string[] = [];
  for (let i = from; i <= to; i += 1) keys.push(`${prefix}_${i}`);
  return keys;
}

// Frame lists built in code rather than read from a gid. All live on sheet 1, shared-sprite.svg.
const PURPLE_DARK_LEFT = frameRange('PURPLE_DARK_LEFT', 0, 8);
const PURPLE_LIGHT_LEFT = frameRange('PURPLE_LIGHT_LEFT', 0, 12);
const PURPLE_DARK_RIGHT = frameRange('PURPLE_DARK_RIGHT', 0, 6);
const PURPLE_LIGHT_RIGHT = frameRange('PURPLE_LIGHT_RIGHT', 0, 6);
const PURPLE_DARK_TOP = frameRange('PURPLE_DARK_TOP', 0, 9);
const PURPLE_LIGHT_TOP = frameRange('PURPLE_LIGHT_TOP', 0, 6);

const CARROT_FRAMES = ['CARROT'];
const CARROT_SHADOW_FRAMES = ['CARROT_SHADOW'];
const CARROT_EAT_FRAMES = frameRange('CARROT_EAT', 1, 12);

const BUNNY_DIRECTION: Readonly<Record<Orientation, string>> = {
  left: 'WEST',
  up: 'NORTH',
  down: 'SOUTH',
  right: 'EAST',
};

type PlayerSpriteKind = 'idle' | 'jump';

/** jump is frames 1..9, idle 10..18; `BUNNY_*_0` is the Tiled marker only. */
function bunnyFrames(orientation: Orientation, kind: PlayerSpriteKind): string[] {
  const dir = BUNNY_DIRECTION[orientation];
  return kind === 'jump' ? frameRange(`BUNNY_${dir}`, 1, 9) : frameRange(`BUNNY_${dir}`, 10, 18);
}

/** left and right share one shadow, up and down the other. */
function shadowFrame(orientation: Orientation): string {
  return orientation === 'up' || orientation === 'down' ? 'SHADOW_RIGHT' : 'SHADOW_LEFT';
}

// ---------------------------------------------------------------------------
// Tiles
// ---------------------------------------------------------------------------

type TileNodeType = SolidTileType | 'carrot';

/** a cube at a grid cell, 2 x 2 world units. */
class TileNode extends SceneNode {
  readonly blockTransform: SceneNode;
  readonly sprite: SpriteNode;

  constructor(
    sprite: SpriteNode,
    position: GridPos,
    readonly tileType: TileNodeType = 'passable',
  ) {
    super(position);
    this.blockTransform = new SceneNode(BLOCK_TRANSFORM_OFFSET);
    this.blockTransform.scale = BLOCK_TRANSFORM_SCALE;
    this.add(this.blockTransform);
    this.sprite = sprite;
    this.blockTransform.add(sprite);
  }

  override getWidth(): number {
    return 2;
  }

  override getHeight(): number {
    return 2;
  }

  override getCenterPosition(): GridPos {
    return addPos(this.position, pos(0.5, 0, 0.5));
  }
}

/**
 * a cube with three pink face overlays that animate away the first time the
 * bunny stands on it. The four sprites are exactly coincident; child order is base, right, top,
 * left.
 */
class PurpleTileNode extends TileNode {
  readonly leftFace: SpriteNode;
  readonly rightFace: SpriteNode;
  readonly topFace: SpriteNode;
  purple = true;

  constructor(
    sprite: SpriteNode,
    position: GridPos,
    bus: EventBus | null = null,
    darkLeft?: boolean,
    darkRight?: boolean,
    darkTop?: boolean,
  ) {
    super(sprite, position, 'passable');
    // Checkerboard parity. A negative sum falls on the `!odd` branch.
    const odd = (position.x + position.y + position.z) % 2 === 1;
    const left = darkLeft ?? !odd;
    const right = darkRight ?? !odd;
    const top = darkTop ?? odd;

    this.leftFace = new SpriteNode(left ? PURPLE_DARK_LEFT : PURPLE_LIGHT_LEFT);
    this.rightFace = new SpriteNode(right ? PURPLE_DARK_RIGHT : PURPLE_LIGHT_RIGHT);
    this.topFace = new SpriteNode(top ? PURPLE_DARK_TOP : PURPLE_LIGHT_TOP);
    for (const face of [this.leftFace, this.rightFace, this.topFace]) {
      face.playing = false;
      face.loop = false;
    }
    this.blockTransform.add(this.rightFace);
    this.blockTransform.add(this.topFace);
    this.blockTransform.add(this.leftFace);

    bus?.on((event) => {
      if (event.type !== 'playerLanded' && event.type !== 'playerJumpStart') return;
      const p = event.player.position;
      if (p.x === this.position.x && p.y === this.position.y - 1 && p.z === this.position.z) {
        this.trigger();
      }
    });
  }

  /** All three faces start together but end at different times. */
  trigger(): void {
    if (!this.purple) return;
    this.purple = false;
    this.leftFace.play();
    this.rightFace.play();
    this.topFace.play();
  }

  override reset(): void {
    super.reset();
    this.purple = true;
    for (const face of [this.leftFace, this.rightFace, this.topFace]) {
      face.seek(0);
      face.playing = false;
    }
  }
}

/** a carrot pickup, its bobbing shadow and the eat animation. */
class CarrotNode extends TileNode {
  readonly shadowAnchor: SceneNode;
  readonly shadow: SpriteNode;
  readonly eatSprite: SpriteNode;
  eaten = false;

  /** Seconds, seeded per column so neighboring carrots bob out of phase. */
  private bobTime: number;

  constructor(
    position: GridPos,
    bus: EventBus | null = null,
    private readonly onEaten?: () => void,
  ) {
    super(new SpriteNode(CARROT_FRAMES), position, 'carrot');
    this.bobTime = 0.7 * position.x;

    this.eatSprite = new SpriteNode(CARROT_EAT_FRAMES, pos(-74, 0, -110));
    this.eatSprite.opacity = 0;
    this.eatSprite.playing = false;
    this.eatSprite.loop = false;
    this.blockTransform.add(this.eatSprite);

    this.shadow = new SpriteNode(CARROT_SHADOW_FRAMES, pos(0, 0, 32));
    this.shadowAnchor = new SceneNode(pos(0, 0, -64));
    this.shadowAnchor.add(this.shadow);
    // First child of the block transform, so it draws under the carrot.
    this.blockTransform.addFirst(this.shadowAnchor);

    bus?.on((event) => {
      if (event.type !== 'playerJumpStart') return;
      const target = addPos(event.player.position, ORIENTATION_DELTA[event.player.orientation]);
      if (!equalPos(target, this.position)) return;
      this.actions.add(
        new ActionSequence([
          new WaitAction(CARROT_EAT_DELAY_MS),
          new CallbackAction(() => this.eat()),
        ]),
      );
    });
  }

  /** Hides the carrot and its shadow and plays the eat burst. */
  eat(): void {
    if (this.eaten) return;
    this.eaten = true;
    this.sprite.opacity = 0;
    this.shadow.opacity = 0;
    this.eatSprite.opacity = 1;
    this.eatSprite.play();
    this.onEaten?.();
  }

  override update(dt: number): void {
    super.update(dt);
    this.bobTime += dt / 1000;
    this.sprite.position.y = 8 * Math.sin(2 * this.bobTime) - 10;
    this.shadowAnchor.scale = (8 + Math.sin(2 * this.bobTime)) / 18;
  }

  override reset(): void {
    super.reset();
    this.eaten = false;
    this.sprite.opacity = 1;
    this.shadow.opacity = 1;
    this.eatSprite.seek(0);
    this.eatSprite.opacity = 0;
    this.eatSprite.playing = false;
  }
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

/** a Tiled object. Its size in px overrides the atlas size of its frames. */
class PropNode extends SceneNode {
  sprite: SpriteNode;

  constructor(
    position: GridPos,
    sprite: SpriteNode,
    readonly propType: PropType,
  ) {
    super(position);
    this.sprite = sprite;
    this.sprite.scale = BLOCK_TRANSFORM_SCALE;
    this.add(this.sprite);
  }

  /** only one sprite is a child at a time. */
  protected setSprite(sprite: SpriteNode): void {
    if (sprite === this.sprite) return;
    this.removeChild(this.sprite);
    this.add(sprite);
    this.sprite = sprite;
  }

  override getWidth(): number {
    return this.sprite.scale * this.sprite.getWidth();
  }

  override getHeight(): number {
    return this.sprite.scale * this.sprite.getHeight();
  }

  override getCenterPosition(): GridPos {
    return addPos(this.sprite.getCenterPosition(), this.position);
  }

  override reset(): void {
    super.reset();
    this.opacity = 1;
  }
}

/**
 * a prop the bunny sets off. The forward animation plays once on trigger; with
 * `loopAfterFrame` a looping tail takes over, otherwise `retriggerable` rewinds it. The reverse
 * animation is the forward frames reversed at whatever fps makes it last 187.5 ms.
 */
class TriggerablePropNode extends PropNode {
  readonly forwardSprite: SpriteNode;
  readonly backwardsSprite: SpriteNode;
  readonly loopSprite: SpriteNode | null;
  triggered = false;

  readonly enterTriggerPosition: GridPos | null;
  readonly exitTriggerPosition: GridPos | null;
  readonly reverseTriggerPosition: GridPos | null;

  private readonly firstVisible: boolean;

  constructor(
    position: GridPos,
    frames: readonly string[],
    size: { width: number; height: number },
    mirrored: boolean,
    trigger: PropTrigger,
    bus: EventBus | null = null,
  ) {
    const forwardCount = trigger.loopAfterFrame ?? frames.length;
    const forwardFrames = frames.slice(0, forwardCount);
    const loopFrames = frames.slice(forwardCount);
    const forward = new SpriteNode(forwardFrames, pos(0, 0, 0), size.width, size.height, mirrored);
    super(position, forward, 'triggerable');

    this.firstVisible = trigger.firstVisible;
    this.forwardSprite = forward;
    this.forwardSprite.opacity = this.firstVisible ? 1 : 0;
    this.forwardSprite.playing = false;
    this.forwardSprite.loop = false;

    this.backwardsSprite = new SpriteNode(
      forwardFrames.slice().reverse(),
      pos(0, 0, 0),
      size.width,
      size.height,
      mirrored,
    );
    // 187.5 ms whatever the frame count.
    this.backwardsSprite.fps = (this.forwardSprite.durationMs / 375) * 48;
    this.backwardsSprite.scale = BLOCK_TRANSFORM_SCALE;
    this.backwardsSprite.playing = false;
    this.backwardsSprite.loop = false;
    this.backwardsSprite.onEnd = () => {
      this.backwardsSprite.opacity = 0;
    };

    if (loopFrames.length > 0) {
      this.loopSprite = new SpriteNode(loopFrames, pos(0, 0, 0), size.width, size.height, mirrored);
      this.loopSprite.scale = BLOCK_TRANSFORM_SCALE;
      const loop = this.loopSprite;
      this.forwardSprite.onEnd = () => {
        loop.seek(0);
        this.setSprite(loop);
      };
    } else {
      this.loopSprite = null;
      // `retriggerable` is only read when there is no loop tail.
      if (trigger.retriggerable) this.forwardSprite.onEnd = () => this.reset();
    }

    const center = this.getCenterPosition();
    const defaulted =
      !trigger.enterTrigger && !trigger.exitTrigger && !trigger.reverseTrigger
        ? pos(Math.floor(center.x), Math.ceil(center.y), Math.floor(center.z))
        : null;
    this.enterTriggerPosition = trigger.enterTrigger ? clonePos(trigger.enterTrigger) : null;
    this.exitTriggerPosition = trigger.exitTrigger
      ? clonePos(trigger.exitTrigger)
      : defaulted && clonePos(defaulted);
    this.reverseTriggerPosition = trigger.reverseTrigger
      ? clonePos(trigger.reverseTrigger)
      : defaulted && clonePos(defaulted);

    if (bus) this.listen(bus);
  }

  private listen(bus: EventBus): void {
    const enter = this.enterTriggerPosition;
    const exit = this.exitTriggerPosition;
    const reverse = this.reverseTriggerPosition;
    bus.on((event) => {
      if (event.type === 'playerLanded') {
        if (enter && equalPos(event.player.position, enter) && !this.triggered) this.trigger();
        return;
      }
      if (event.type !== 'playerJumpStart') return;
      if (exit && equalPos(event.player.position, exit)) {
        this.actions.add(
          new ActionSequence([
            new WaitAction(EXIT_TRIGGER_DELAY_MS),
            new CallbackAction(() => {
              if (!this.triggered) this.trigger();
            }),
          ]),
        );
      }
      if (reverse) {
        const target = addPos(event.player.position, ORIENTATION_DELTA[event.player.orientation]);
        if (equalPos(target, reverse) && this.triggered) this.reverse();
      }
    });
  }

  trigger(): void {
    this.triggered = true;
    this.setSprite(this.forwardSprite);
    this.forwardSprite.seek(0);
    this.forwardSprite.play();
    this.forwardSprite.opacity = 1;
  }

  reverse(): void {
    this.triggered = false;
    this.setSprite(this.backwardsSprite);
    this.backwardsSprite.seek(0);
    this.backwardsSprite.play();
    this.backwardsSprite.opacity = 1;
  }

  override reset(): void {
    super.reset();
    this.triggered = false;
    this.setSprite(this.forwardSprite);
    this.forwardSprite.seek(0);
    this.forwardSprite.playing = false;
    this.forwardSprite.opacity = this.firstVisible ? 1 : 0;
  }
}

// ---------------------------------------------------------------------------
// Player
// ---------------------------------------------------------------------------

/**
 * The player's visual half. The state machine lives in the engine and drives this node through
 * `setOrientation`, `showSprite`, `hopOffset` and `shadowScale`.
 */
export class PlayerNode extends SceneNode {
  readonly blockTransform: SceneNode;
  /** The node the jump scales; its child is the shadow sprite for the current orientation. */
  readonly shadow: SceneNode;

  private readonly sprites = new Map<string, SpriteNode>();
  private readonly shadowSprites = new Map<Orientation, SpriteNode>();
  private currentSprite: SpriteNode;
  private currentShadow: SpriteNode;
  private orientation_: Orientation;
  private readonly initialOrientation: Orientation;

  constructor(position: GridPos, orientation: Orientation = 'right') {
    super(position);
    this.orientation_ = orientation;
    this.initialOrientation = orientation;

    this.blockTransform = new SceneNode(BLOCK_TRANSFORM_OFFSET);
    this.blockTransform.scale = BLOCK_TRANSFORM_SCALE;
    this.add(this.blockTransform);

    for (const o of ['left', 'up', 'down', 'right'] as const) {
      for (const kind of ['idle', 'jump'] as const) {
        const sprite = new SpriteNode(bunnyFrames(o, kind));
        sprite.loop = false;
        this.sprites.set(`${o}${kind}`, sprite);
      }
      this.shadowSprites.set(o, new SpriteNode([shadowFrame(o)], pos(2, 0, 2)));
    }

    this.shadow = new SceneNode(pos(0, 0, -32));
    this.blockTransform.add(this.shadow);
    this.currentShadow = this.shadowFor(orientation);
    this.shadow.add(this.currentShadow);

    this.currentSprite = this.spriteFor(orientation, 'idle');
    // The resting pose is the last idle frame.
    this.currentSprite.seek(this.currentSprite.frames.length - 1);
    this.blockTransform.add(this.currentSprite);
  }

  private spriteFor(orientation: Orientation, kind: PlayerSpriteKind): SpriteNode {
    const sprite = this.sprites.get(`${orientation}${kind}`);
    if (!sprite) throw new Error(`no player sprite for ${orientation}${kind}`);
    return sprite;
  }

  private shadowFor(orientation: Orientation): SpriteNode {
    const sprite = this.shadowSprites.get(orientation);
    if (!sprite) throw new Error(`no player shadow for ${orientation}`);
    return sprite;
  }

  get orientation(): Orientation {
    return this.orientation_;
  }

  /** The visible sprite only changes on the next `showSprite`. */
  setOrientation(orientation: Orientation): void {
    this.orientation_ = orientation;
  }

  get sprite(): SpriteNode {
    return this.currentSprite;
  }

  /** swap the body sprite and re-attach the matching shadow, from frame 0. */
  showSprite(kind: PlayerSpriteKind): void {
    const next = this.spriteFor(this.orientation_, kind);
    if (next !== this.currentSprite) {
      this.blockTransform.removeChild(this.currentSprite);
      this.blockTransform.add(next);
      this.currentSprite = next;
    }
    next.seek(0);
    const shadow = this.shadowFor(this.orientation_);
    if (shadow !== this.currentShadow) {
      this.shadow.removeChild(this.currentShadow);
      this.shadow.add(shadow);
      this.currentShadow = shadow;
    }
  }

  /**
   * The jump's vertical sprite offset, in blockTransform-local units (= sprite px = 1/64 world
   * unit). The tween is 0 -> -0.15 -> 0, which is sub-pixel; the visible arc is in the frames.
   */
  set hopOffset(value: number) {
    this.currentSprite.position.y = value;
  }

  get hopOffset(): number {
    return this.currentSprite.position.y;
  }

  set shadowScale(value: number) {
    this.shadow.scale = value;
  }

  get shadowScale(): number {
    return this.shadow.scale;
  }

  /** The 2 x 2 unit footprint of a tile. */
  override getWidth(): number {
    return 2;
  }

  override getHeight(): number {
    return 2;
  }

  override getCenterPosition(): GridPos {
    return addPos(this.position, pos(0.5, 0, 0.5));
  }

  override reset(): void {
    super.reset();
    this.orientation_ = this.initialOrientation;
    this.showSprite('idle');
    this.currentSprite.seek(this.currentSprite.frames.length - 1);
    this.shadow.scale = 1;
  }
}

// ---------------------------------------------------------------------------
// Puzzle
// ---------------------------------------------------------------------------

function drawRank(node: SceneNode): number {
  // Carrot before Tile: CarrotNode extends TileNode.
  if (node instanceof PlayerNode) return playerDrawRank(node.orientation);
  if (node instanceof CarrotNode) return DRAW_RANK.carrot;
  if (node instanceof TileNode) return DRAW_RANK.tile;
  return DRAW_RANK.prop;
}

/**
 * the whole level as one node. Children are added tiles, then props in object
 * order, then the player - the order the level-in and level-out sequences walk.
 */
export class PuzzleNode extends SceneNode {
  readonly clouds: PropNode[] = [];
  readonly foregroundProps: PropNode[] = [];
  readonly bound: Box;

  constructor(
    readonly tileGrid: Map<string, TileNode>,
    props: readonly PropNode[],
    readonly player: PlayerNode,
    /** In cells: the level-in cloud fade and the level-out stagger scale with it. */
    readonly mapWidth: number,
  ) {
    super();
    for (const prop of props) {
      if (prop.propType === 'cloud') this.clouds.push(prop);
      else this.foregroundProps.push(prop);
    }
    for (const tile of tileGrid.values()) this.add(tile);
    for (const prop of props) this.add(prop);
    this.add(player);
    this.bound = computeBound(tileGrid, props);
  }

  /** Clouds first and unsorted, then everything else by depth. */
  override render(ctx: Ctx2D): void {
    for (const cloud of this.clouds) cloud.render(ctx);

    const sortable: SceneNode[] = [...this.tileGrid.values(), this.player, ...this.foregroundProps];
    const keyed = sortable.map((node) => ({
      node,
      key: depthKey(nodeAnchor(node), drawRank(node)),
    }));
    keyed.sort((a, b) => a.key - b.key);
    for (const entry of keyed) entry.node.render(ctx);
  }
}

/**
 * in projected screen units: every tile contributes its footprint corners,
 * every prop its drawn box; the result is expanded by 0.5 on each side. Clouds count too.
 */
function computeBound(tileGrid: ReadonlyMap<string, TileNode>, props: readonly PropNode[]): Box {
  const points: ScreenPoint[] = [];
  for (const prop of props) {
    const p = project(prop.position);
    points.push(
      { sx: p.sx, sy: p.sy - prop.getHeight() },
      { sx: p.sx + prop.getWidth(), sy: p.sy },
    );
  }
  for (const tile of tileGrid.values()) {
    const p = project(tile.position);
    const halfW = tile.getWidth() / 2;
    const halfH = tile.getHeight() / 2;
    points.push({ sx: p.sx - halfW, sy: p.sy - halfH }, { sx: p.sx + halfW, sy: p.sy + halfH });
  }
  if (points.length === 0) return { top: -0.5, right: 0.5, bottom: 0.5, left: -0.5 };

  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  for (const p of points) {
    if (p.sx < minX) minX = p.sx;
    if (p.sy < minY) minY = p.sy;
    if (p.sx > maxX) maxX = p.sx;
    if (p.sy > maxY) maxY = p.sy;
  }
  return { top: minY - 0.5, right: maxX + 0.5, bottom: maxY + 0.5, left: minX - 0.5 };
}

// ---------------------------------------------------------------------------
// Building a scene from a Level
// ---------------------------------------------------------------------------

interface SceneBuildOptions {
  /** The gid -> frames and gid -> type table. */
  tiles: TilesFile;
  /**
   * When given, carrots, purple tiles and triggerable props subscribe to it. Leave it out for a
   * static preview.
   */
  bus?: EventBus | null;
}

/** An unknown gid yields no frames, which the `SpriteNode` constructor then rejects. */
function framesForGid(table: ReadonlyMap<number, TileDef>, gid: number): string[] {
  return table.get(gid)?.frames ?? [];
}

function propTypeForGid(table: ReadonlyMap<number, TileDef>, gid: number): PropType {
  return table.get(gid)?.type ?? 'prop';
}

const NO_TRIGGER: PropTrigger = {
  enterTrigger: null,
  exitTrigger: null,
  reverseTrigger: null,
  firstVisible: false,
  retriggerable: false,
  loopAfterFrame: null,
};

function buildProp(
  prop: LevelProp,
  table: ReadonlyMap<number, TileDef>,
  bus: EventBus | null,
): PropNode {
  const frames = framesForGid(table, prop.gid);
  const type = propTypeForGid(table, prop.gid);
  let node: PropNode;
  if (type === 'triggerable') {
    node = new TriggerablePropNode(
      prop.position,
      frames,
      prop.size,
      prop.mirrored,
      prop.trigger ?? NO_TRIGGER,
      bus,
    );
  } else {
    const sprite = new SpriteNode(
      frames,
      pos(0, 0, 0),
      prop.size.width,
      prop.size.height,
      prop.mirrored,
    );
    node = new PropNode(prop.position, sprite, type);
  }
  if (prop.objectAnchor) node.objectAnchor = clonePos(prop.objectAnchor);
  return node;
}

type TileTable = ReadonlyMap<number, TileDef>;
type TileGrid = Map<string, TileNode>;

/** Is the node occupying `p` a carrot? */
function carrotAt(grid: TileGrid, p: GridPos): boolean {
  return grid.get(gridKey(p)) instanceof CarrotNode;
}

/** Pass 1: carrots, then the water cubes they can sit beside. */
function addCarrotsAndWater(
  grid: TileGrid,
  level: Level,
  table: TileTable,
  bus: EventBus | null,
): void {
  for (const carrot of level.carrots) {
    grid.set(gridKey(carrot.pos), new CarrotNode(carrot.pos, bus));
  }
  for (const tile of level.tiles) {
    if (tile.type !== 'unpassable') continue;
    const sprite = new SpriteNode(framesForGid(table, tile.gid));
    grid.set(gridKey(tile.pos), new TileNode(sprite, tile.pos, 'unpassable'));
  }
}

/** Pass 2: the walkable cubes, purple where a carrot sits directly on top. */
function addPassableTiles(
  grid: TileGrid,
  level: Level,
  table: TileTable,
  bus: EventBus | null,
): void {
  for (const tile of level.tiles) {
    if (tile.type !== 'passable') continue;
    const frames = framesForGid(table, tile.gid);
    const above = pos(tile.pos.x, tile.pos.y - 1, tile.pos.z);
    const node = carrotAt(grid, above)
      ? new PurpleTileNode(new SpriteNode(frames), tile.pos, bus)
      : new TileNode(new SpriteNode(frames), tile.pos, 'passable');
    grid.set(gridKey(tile.pos), node);
  }
}

/** The start tile turns purple when a carrot sits on any of its four orthogonal neighbors. */
function startTileGoesPurple(grid: TileGrid, start: GridPos, p: GridPos): boolean {
  if (start.x !== p.x || start.y + 1 !== p.y || start.z !== p.z) return false;
  // The deltas are grid-orthogonal; they only look diagonal on screen.
  return (
    carrotAt(grid, pos(p.x + 1, p.y - 1, p.z)) ||
    carrotAt(grid, pos(p.x - 1, p.y - 1, p.z)) ||
    carrotAt(grid, pos(p.x, p.y - 1, p.z + 1)) ||
    carrotAt(grid, pos(p.x, p.y - 1, p.z - 1))
  );
}

/**
 * Pass 3: the start-tile and corner rules, each of which forces a purple tile with a dark left
 * face, then the water-face hiding. The two rules are separate tests, not an else.
 */
function applyPurpleRules(
  grid: TileGrid,
  level: Level,
  table: TileTable,
  bus: EventBus | null,
): void {
  const start = level.start.pos;
  for (const tile of level.tiles) {
    if (tile.type !== 'passable') continue;
    const { x, y, z } = tile.pos;
    const key = gridKey(tile.pos);
    const south = grid.get(gridKey(pos(x, y, z + 1)));
    const east = grid.get(gridKey(pos(x + 1, y, z)));

    const isCorner = !south && east !== undefined && grid.has(gridKey(pos(x - 1, y, z + 1)));
    if (startTileGoesPurple(grid, start, tile.pos) || isCorner) {
      const frames = framesForGid(table, tile.gid);
      grid.set(key, new PurpleTileNode(new SpriteNode(frames), tile.pos, bus, true));
    }

    // Applied to the tile actually in the grid: the rule above may have replaced the one read.
    const kept = grid.get(key);
    if (kept instanceof PurpleTileNode) {
      if (south?.tileType === 'unpassable') kept.leftFace.opacity = 0;
      if (east?.tileType === 'unpassable') kept.rightFace.opacity = 0;
    }
  }
}

/** The tile grid of a level, in three passes. */
function buildTileGrid(level: Level, table: TileTable, bus: EventBus | null): TileGrid {
  const grid: TileGrid = new Map();
  addCarrotsAndWater(grid, level, table, bus);
  addPassableTiles(grid, level, table, bus);
  applyPurpleRules(grid, level, table, bus);
  return grid;
}

/**
 * Build the renderable tree for a level. The result can be drawn directly; the game calls
 * it with an event bus so carrots, purple tiles and triggerable props react to the player.
 */
export function buildSceneForLevel(level: Level, options: SceneBuildOptions): PuzzleNode {
  const table = gidTable(options.tiles);
  const bus = options.bus ?? null;
  const player = new PlayerNode(level.start.pos, level.start.orientation);
  const grid = buildTileGrid(level, table, bus);
  const props = level.props.map((prop) => buildProp(prop, table, bus));
  return new PuzzleNode(grid, props, player, level.width);
}

// ---------------------------------------------------------------------------
// Level animations
// ---------------------------------------------------------------------------

function animationTarget(puzzle: PuzzleNode): LevelAnimationTarget {
  return {
    node: puzzle,
    clouds: puzzle.clouds,
    player: puzzle.player,
    mapWidth: puzzle.mapWidth,
  };
}

/**
 * Hide the puzzle and queue the level-in. The callback wrapper means the sequence is built on the
 * first update, not during construction.
 */
export function playLevelIn(puzzle: PuzzleNode, options: LevelAnimationOptions): void {
  puzzle.opacity = 0;
  puzzle.actions.add(
    new CallbackAction(() => {
      puzzle.actions.add(levelInAction(animationTarget(puzzle), options));
    }),
  );
}

/** Queue the level-out; the caller runs it on `puzzleSolved`. */
export function playLevelOut(puzzle: PuzzleNode, options: LevelAnimationOptions): void {
  puzzle.actions.add(levelOutAction(animationTarget(puzzle), options));
}

export type { LevelAnimationOptions };

// ---------------------------------------------------------------------------
// Frame entry points
// ---------------------------------------------------------------------------

interface RenderOptions {
  /** Fill drawn before everything else; `null` skips it (a transparent scene). */
  background?: string | null;
  /** Canvas-space nodes drawn behind the puzzle, e.g. the hexagon burst. */
  behind?: readonly SceneNode[];
}

/**
 * One frame. Fills the background, runs the transform pass over the camera's subtree and draws it.
 * `puzzle` is parented to `camera` on the first call, which is where the camera's isometric
 * projection and its fitted scale come from.
 */
export function render(
  ctx: Ctx2D,
  puzzle: PuzzleNode,
  camera: Camera,
  options: RenderOptions = {},
): void {
  if (!camera.children.includes(puzzle)) camera.add(puzzle);

  const background = options.background === undefined ? BACKGROUND_COLOUR : options.background;
  // Sprites leave `globalAlpha` at their own opacity; reset it before painting the whole canvas.
  ctx.globalAlpha = 1;
  if (background === null) {
    // A transparent canvas still has to be erased every frame, or each frame of an animation
    // composites over the last one. `clearRect` is what a fill would otherwise have done.
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  } else {
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  if (options.behind) {
    for (const node of options.behind) {
      updateTransforms(node);
      node.render(ctx);
    }
  }

  updateTransforms(camera);
  camera.render(ctx);
}
