/**
 * Easings, the level-in / level-out sequences and the hexagon burst.
 *
 * Note the sign of `y`: projection adds world `y` straight to screen y, so a larger `y` is LOWER on the
 * canvas. Level-in is a rise from 27 units below with a 0.3 unit overshoot; level-out is a 0.3 unit
 * lift followed by a 20 unit fall.
 */

import {
  Action,
  ActionGroup,
  ActionSequence,
  CallbackAction,
  numberTween,
  WaitAction,
  nodeAnchor,
  type Ctx2D,
  type Easing,
  SceneNode,
} from './scene-graph';
import type { ClipName, EventBus, GridPos } from '../core/assets';

// ---------------------------------------------------------------------------
// Easing
// ---------------------------------------------------------------------------

/** Cubic through (0,0), (c1,.), (c2,.), (1,1) evaluated on one axis. */
function bezierAxis(c1: number, c2: number, s: number): number {
  const u = 1 - s;
  return 3 * u * u * s * c1 + 3 * u * s * s * c2 + s * s * s;
}

/**
 * A cubic Bezier easing with `y2` fixed to 1. The parameter `s` with `x(s) == t` is found by
 * Newton-Raphson, falling back to bisection inside the bracket Newton leaves.
 */
/** The bracket Newton leaves behind, and where it stopped. */
interface Bracket {
  s: number;
  lo: number;
  hi: number;
  solved: boolean;
}

/** Up to 8 Newton-Raphson steps against a numeric derivative, narrowing `lo`/`hi` as it goes. */
function newtonSolve(x1: number, x2: number, t: number): Bracket {
  let s = t;
  let lo = 0;
  let hi = 1;
  for (let i = 0; i < 8; i += 1) {
    const g = bezierAxis(x1, x2, s);
    if (Math.abs(g - t) < 1e-6) return { s, lo, hi, solved: true };
    const d = (bezierAxis(x1, x2, s + 1e-6) - g) / 1e-6;
    if (Math.abs(d) < 1e-6) break;
    if (g < t) lo = s;
    else hi = s;
    s -= (g - t) / d;
  }
  return { s, lo, hi, solved: false };
}

/** Up to 8 bisection steps inside the bracket, for the cases Newton did not land. */
function bisect(x1: number, x2: number, t: number, bracket: Bracket): number {
  let { lo, hi } = bracket;
  let s = Math.min(hi, Math.max(lo, bracket.s));
  for (let i = 0; i < 8; i += 1) {
    const g = bezierAxis(x1, x2, s);
    if (Math.abs(g - t) < 1e-6) break;
    if (g < t) lo = s;
    else hi = s;
    s = (lo + hi) / 2;
  }
  return s;
}

function cubicBezier(x1: number, y1: number, x2: number, y2 = 1): Easing {
  return (t: number): number => {
    const bracket = newtonSolve(x1, x2, t);
    const s = bracket.solved ? bracket.s : bisect(x1, x2, t, bracket);
    return bezierAxis(y1, y2, s);
  };
}

/** cubic-bezier(0.4, 0, 1, 1). */
export const easeIn = cubicBezier(0.4, 0, 1);
/** cubic-bezier(0, 0, 0.6, 1). */
export const easeOut = cubicBezier(0, 0, 0.6);
/** cubic-bezier(0.6, 0, 0.4, 1). */
const easeInOut = cubicBezier(0.6, 0, 0.4);

// ---------------------------------------------------------------------------
// Level in / level out
// ---------------------------------------------------------------------------

/** Screen units below rest that every non-cloud node starts the level-in from. */
const LEVEL_IN_DROP_UNITS = 27;
/** Overshoot above rest at the end of the 700 ms rise. */
const LEVEL_OVERSHOOT_UNITS = 0.3;
/** Screen units the level-out fall covers. */
const LEVEL_OUT_FALL_UNITS = 20;
/** Per-cell stagger of both animations. */
const LEVEL_STAGGER_MS = 80;

/** What the two sequences need from a Puzzle, without the renderer depending on this module. */
export interface LevelAnimationTarget {
  /** The puzzle node: it owns the actions and the opacity the level-in restores. */
  readonly node: SceneNode;
  /** Drawn behind everything and animated by opacity only. */
  readonly clouds: readonly SceneNode[];
  /** The player node, which also triggers the BLOCKS_IN / BLOCKS_OUT clip. */
  readonly player: SceneNode;
  /** Map width in cells: the cloud fade and the outro stagger scale with it. */
  readonly mapWidth: number;
}

export interface LevelAnimationOptions {
  /** One hop in place, 375 ms; two of them bracket both sequences. */
  hopInPlace: () => Action;
  playSound?: (clip: ClipName, delayMs: number) => void;
  /** Emits `levelInDone` / `levelOutDone` at the end (events 6 and 7). */
  bus?: EventBus | null;
}

function manhattanToPlayer(node: SceneNode, playerX: number, playerZ: number): number {
  const anchor = nodeAnchor(node);
  return Math.abs(Math.floor(anchor.x) - playerX) + Math.abs(Math.floor(anchor.z) - playerZ);
}

function playerCell(player: SceneNode): { x: number; z: number } {
  const center: GridPos = player.getCenterPosition();
  return { x: Math.floor(center.x), z: Math.floor(center.z) };
}

function staggeredChildren(target: LevelAnimationTarget): SceneNode[] {
  return target.node.children.filter((child) => !target.clouds.includes(child));
}

/**
 * The sequence is: one parallel group (cloud fade-ins, the per-node rise, and
 * a callback that restores the puzzle's opacity on the group's very first tick), two hops in place,
 * 500 ms, then event 6.
 */
export function levelInAction(
  target: LevelAnimationTarget,
  options: LevelAnimationOptions,
): Action {
  const { x: px, z: pz } = playerCell(target.player);
  const parallel: Action[] = [];

  for (const cloud of target.clouds) {
    parallel.push(
      new ActionSequence([
        new CallbackAction(() => {
          cloud.opacity = 0;
        }),
        numberTween(
          LEVEL_STAGGER_MS * target.mapWidth,
          () => 0,
          () => 1,
          (v) => {
            cloud.opacity = v;
          },
        ),
      ]),
    );
  }

  for (const node of staggeredChildren(target)) {
    const restY = node.position.y;
    const distance = manhattanToPlayer(node, px, pz);
    const delayMs = LEVEL_STAGGER_MS * ((distance > 0 ? distance + 1 : 0) + 1);
    const isPlayer = node === target.player;
    parallel.push(
      new ActionSequence([
        new CallbackAction(() => {
          node.position.y = restY + LEVEL_IN_DROP_UNITS;
          // The clip carries the stagger as its own playback delay.
          if (isPlayer && options.playSound) options.playSound('BLOCKS_IN', delayMs);
        }),
        new WaitAction(delayMs),
        numberTween(
          700,
          () => restY + LEVEL_IN_DROP_UNITS,
          () => restY - LEVEL_OVERSHOOT_UNITS,
          (v) => {
            node.position.y = v;
          },
          easeInOut,
        ),
        numberTween(
          180,
          () => restY - LEVEL_OVERSHOOT_UNITS,
          () => restY,
          (v) => {
            node.position.y = v;
          },
          easeInOut,
        ),
      ]),
    );
  }

  // Last member of the group, and a callback finishes on its first update, so the puzzle becomes
  // visible on the group's first tick and the whole rise is seen.
  parallel.push(
    new CallbackAction(() => {
      target.node.opacity = 1;
    }),
  );

  return new ActionSequence([
    new ActionGroup(parallel),
    options.hopInPlace(),
    options.hopInPlace(),
    new WaitAction(500),
    new CallbackAction(() => {
      options.bus?.emit({ type: 'levelInDone' });
    }),
  ]);
}

/** two hops in place, 500 ms, the staggered fall, then event 7. */
export function levelOutAction(
  target: LevelAnimationTarget,
  options: LevelAnimationOptions,
): Action {
  const { x: px, z: pz } = playerCell(target.player);
  const parallel: Action[] = [];

  for (const cloud of target.clouds) {
    parallel.push(
      numberTween(
        LEVEL_STAGGER_MS * target.mapWidth,
        () => 1,
        () => 0,
        (v) => {
          cloud.opacity = v;
        },
      ),
    );
  }

  for (const node of staggeredChildren(target)) {
    const distance = manhattanToPlayer(node, px, pz);
    const delayMs =
      LEVEL_STAGGER_MS * (distance > 0 ? target.mapWidth - distance : target.mapWidth + 2);
    const steps: Action[] = [new WaitAction(delayMs)];
    if (node === target.player && options.playSound) {
      const playSound = options.playSound;
      steps.push(new CallbackAction(() => playSound('BLOCKS_OUT', 54)));
    }
    steps.push(
      // Both endpoints are sampled at tween start, so the fall runs from where the lift ended.
      numberTween(
        180,
        () => node.position.y,
        () => node.position.y - LEVEL_OVERSHOOT_UNITS,
        (v) => {
          node.position.y = v;
        },
        easeInOut,
      ),
      numberTween(
        360,
        () => node.position.y,
        () => node.position.y + LEVEL_OUT_FALL_UNITS,
        (v) => {
          node.position.y = v;
        },
        easeIn,
      ),
    );
    parallel.push(new ActionSequence(steps));
  }

  return new ActionSequence([
    options.hopInPlace(),
    options.hopInPlace(),
    new WaitAction(500),
    new ActionGroup(parallel),
    new CallbackAction(() => {
      options.bus?.emit({ type: 'levelOutDone' });
    }),
  ]);
}

// ---------------------------------------------------------------------------
// Hexagon burst
// ---------------------------------------------------------------------------

const HEXAGON_COLORS: readonly string[] = ['#b0f7ed', '#42decb', '#ffd1e0', '#f9f15f'];

/** the first vertex points straight down the canvas. */
const HEXAGON_START_ANGLE = Math.PI / 2;

/** One hexagon, positioned in canvas px (the burst is not under the camera, so no iso). */
class HexagonNode extends SceneNode {
  color = '#000000';
  radius = 20;
  filled = true;

  protected override renderInternal(ctx: Ctx2D): void {
    const m = this.renderTransform;
    const rx = this.radius * m.m00;
    const ry = this.radius * m.m11;
    ctx.globalAlpha = this.renderOpacity;
    ctx.beginPath();
    ctx.moveTo(
      m.m02 + rx * Math.cos(HEXAGON_START_ANGLE),
      m.m12 + ry * Math.sin(HEXAGON_START_ANGLE),
    );
    for (let i = 1; i <= 6; i += 1) {
      const a = HEXAGON_START_ANGLE + (2 * i * Math.PI) / 6;
      ctx.lineTo(m.m02 + rx * Math.cos(a), m.m12 + ry * Math.sin(a));
    }
    if (this.filled) {
      ctx.fillStyle = this.color;
      ctx.fill();
    } else {
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 3;
      ctx.stroke();
    }
  }
}

/** The canvas area hexagons may spawn in, in canvas px. */
interface BurstViewport {
  width: number;
  height: number;
  /** Height of the Blockly strip along the bottom, excluded from the spawn area. */
  footerHeight: number;
}

/**
 * constructed in CodingScene as `new Tt(bus, 40, 80, 1.5, 3000)` and
 * added before the camera, so it draws behind the puzzle. Event 5 spawns one hexagon, event 2
 * clears them all.
 */
export class HexagonBurst extends SceneNode {
  private readonly pool: HexagonNode[] = [];

  constructor(
    bus: EventBus | null,
    /** Read on every spawn. */
    private readonly viewport: () => BurstViewport,
    private readonly minRadius = 40,
    private readonly maxRadius = 80,
    private readonly endScale = 1.5,
    private readonly fadeMs = 3000,
  ) {
    super();
    bus?.on((event) => {
      if (event.type === 'playerHop') this.spawn();
      else if (event.type === 'puzzleReset') this.reset();
    });
  }

  spawn(): void {
    const hexagon = this.pool.pop() ?? new HexagonNode();
    const viewport = this.viewport();
    hexagon.position.x = 225 + Math.random() * (viewport.width - 450);
    hexagon.position.y = 75 + Math.random() * (viewport.height - viewport.footerHeight - 150);
    hexagon.position.z = 0;
    hexagon.opacity = 1;
    hexagon.color = HEXAGON_COLORS[Math.floor(Math.random() * HEXAGON_COLORS.length)];
    hexagon.radius = this.minRadius + Math.random() * (this.maxRadius - this.minRadius);
    hexagon.filled = Math.random() > 0.5;
    this.add(hexagon);

    this.actions.add(
      new ActionSequence([
        new ActionGroup([
          numberTween(
            this.fadeMs,
            () => 1,
            () => 0,
            (v) => {
              hexagon.opacity = v;
            },
            easeOut,
          ),
          numberTween(
            this.fadeMs,
            () => hexagon.radius,
            () => this.endScale * hexagon.radius,
            (v) => {
              hexagon.radius = v;
            },
            easeOut,
          ),
        ]),
        new CallbackAction(() => {
          this.removeChild(hexagon);
          if (this.pool.length < 10) this.pool.push(hexagon);
        }),
      ]),
    );
  }

  /** recycle up to 10 live hexagons and drop the rest. */
  override reset(): void {
    super.reset();
    for (const child of this.children) {
      if (this.pool.length < 10 && child instanceof HexagonNode) this.pool.push(child);
    }
    this.children.length = 0;
  }
}
