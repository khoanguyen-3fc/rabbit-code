/**
 * The scene graph and the per-frame transform pass, plus the
 * action system every node owns.
 *
 * A node carries a 3D grid position, a uniform scale and an opacity; the transform pass composes
 * parent into child and writes a 2x3 matrix plus an inherited opacity onto each node. Actions live
 * here because every node has an `ActionManager` that its `update` drives; the easing curves that
 * drive tweens are in animations.ts.
 *
 * The isometric projection lives here too, with the depth sort that uses it:
 * `iso(x, y, z) = (x - z, (x + z) / 2 + y)` in world units, `+y` pointing DOWN on screen. One world
 * unit is one grid cell edge, and a cell's footprint is a 128x64 diamond.
 */

import { addPos, clonePos, lerp, pos, type GridPos, type Orientation } from '../core/assets';

export interface ScreenPoint {
  sx: number;
  sy: number;
}

/** world -> screen, in world units. */
export function project(p: GridPos): ScreenPoint {
  return { sx: p.x - p.z, sy: (p.x + p.z) / 2 + p.y };
}

/**
 * Inverse of `project`, in world units. `y = 0` is the only way it is ever called; at other
 * heights it subtracts the height so that `project(unproject(p, y)) === p`.
 */
export function unproject(s: ScreenPoint, y = 0): GridPos {
  const v = s.sy - y;
  return { x: s.sx / 2 + v, y, z: v - s.sx / 2 };
}

/** tie-break inside one cell - props first, player facing away last. */
export const DRAW_RANK = {
  prop: 0,
  tile: 1,
  /** Player facing down or right, i.e. toward the viewer. */
  playerFront: 2,
  carrot: 3,
  /** Player facing up or left, i.e. away from the viewer. */
  playerBack: 4,
} as const;

type DrawRank = (typeof DRAW_RANK)[keyof typeof DRAW_RANK];

export function playerDrawRank(o: Orientation): DrawRank {
  return o === 'down' || o === 'right' ? DRAW_RANK.playerFront : DRAW_RANK.playerBack;
}

/**
 * Sort key for the per-frame draw order. Ascending; far and low cells first.
 * `anchor` is the node's `objectAnchor` when it has one, else its center position.
 *
 * Sorting on this key is equivalent to the comparator
 * `1000 * ((b.y - a.y) + (floor(a.x) + floor(a.z)) - (floor(b.x) + floor(b.z))) + (rankA - rankB)`.
 */
export function depthKey(anchor: GridPos, rank: number): number {
  return 1000 * (Math.floor(anchor.x) + Math.floor(anchor.z) - anchor.y) + rank;
}

// ---------------------------------------------------------------------------
// 2x3 render matrix. No rotation is ever applied, but the ops are general.
// ---------------------------------------------------------------------------

interface Matrix2x3 {
  m00: number;
  m10: number;
  m01: number;
  m11: number;
  m02: number;
  m12: number;
}

function identityMatrix(): Matrix2x3 {
  return { m00: 1, m10: 0, m01: 0, m11: 1, m02: 0, m12: 0 };
}

function copyMatrix(from: Matrix2x3, into: Matrix2x3): void {
  into.m00 = from.m00;
  into.m10 = from.m10;
  into.m01 = from.m01;
  into.m11 = from.m11;
  into.m02 = from.m02;
  into.m12 = from.m12;
}

function translateMatrix(m: Matrix2x3, tx: number, ty: number): void {
  m.m02 += m.m00 * tx + m.m01 * ty;
  m.m12 += m.m10 * tx + m.m11 * ty;
}

function scaleMatrix(m: Matrix2x3, sx: number, sy: number): void {
  m.m00 *= sx;
  m.m10 *= sx;
  m.m01 *= sy;
  m.m11 *= sy;
}

// ---------------------------------------------------------------------------
// Actions
// ---------------------------------------------------------------------------

export type Easing = (t: number) => number;

/** the default easing of every tween. */
export const LINEAR: Easing = (t) => t;

/**
 * the first `update` runs `onStart`; every `update` then either runs `onFinish`
 * (once) when the action is already finished, or `onUpdate`.
 */
export class Action {
  private started = false;
  private notified = false;

  update(dt: number): void {
    if (!this.started) {
      this.started = true;
      this.onStart();
    }
    if (this.isFinished()) {
      if (!this.notified) {
        this.notified = true;
        this.onFinish();
      }
      return;
    }
    this.onUpdate(dt);
  }

  isFinished(): boolean {
    return true;
  }

  protected onStart(): void {
    // Nothing by default; subclasses override.
  }
  protected onUpdate(_dt: number): void {
    // Nothing by default; subclasses override.
  }
  protected onFinish(): void {
    // Nothing by default; subclasses override.
  }
}

/** Finished from the start, so the callback runs on its first `update`. */
export class CallbackAction extends Action {
  constructor(private readonly fn: () => void) {
    super();
  }

  protected override onFinish(): void {
    this.fn();
  }
}

/**
 * one member per frame. The next member's first `update` is the following
 * frame, and a tween's overshoot past its duration is dropped rather than carried over.
 */
export class ActionSequence extends Action {
  private index = 0;

  constructor(private readonly actions: readonly Action[]) {
    super();
  }

  override isFinished(): boolean {
    return this.index >= this.actions.length;
  }

  protected override onUpdate(dt: number): void {
    const action = this.actions[this.index];
    action.update(dt);
    if (action.isFinished()) this.index += 1;
  }
}

/** every member advances each frame; finished when all are. */
export class ActionGroup extends Action {
  constructor(private readonly actions: readonly Action[]) {
    super();
  }

  override isFinished(): boolean {
    return this.actions.every((a) => a.isFinished());
  }

  protected override onUpdate(dt: number): void {
    for (const action of this.actions) action.update(dt);
  }
}

/**
 * `from`/`to` are sampled on the first update, so an endpoint may depend on
 * where the previous action left the value.
 */
class Tween<T> extends Action {
  private elapsed = 0;
  // `Action.update` always runs `onStart` before the first `onUpdate`, which is the only reader.
  private from!: T;
  private to!: T;

  constructor(
    private readonly durationMs: number,
    private readonly fromFn: () => T,
    private readonly toFn: () => T,
    private readonly interpolate: (from: T, to: T, t: number) => T,
    private readonly onValue: (value: T) => void,
    private readonly easing: Easing = LINEAR,
  ) {
    super();
  }

  override isFinished(): boolean {
    return this.elapsed >= this.durationMs;
  }

  protected override onStart(): void {
    this.from = this.fromFn();
    this.to = this.toFn();
  }

  protected override onUpdate(dt: number): void {
    this.elapsed += dt;
    const t = this.easing(Math.min(1, this.elapsed / this.durationMs));
    this.onValue(this.interpolate(this.from, this.to, t));
  }
}

export function numberTween(
  durationMs: number,
  fromFn: () => number,
  toFn: () => number,
  onValue: (value: number) => void,
  easing: Easing = LINEAR,
): Tween<number> {
  return new Tween(durationMs, fromFn, toFn, lerp, onValue, easing);
}

/** a tween with no value. */
export class WaitAction extends Action {
  private elapsed = 0;

  constructor(private readonly durationMs: number) {
    super();
  }

  override isFinished(): boolean {
    return this.elapsed >= this.durationMs;
  }

  protected override onUpdate(dt: number): void {
    this.elapsed += dt;
  }
}

/** updates backwards and drops finished actions in the same pass. */
class ActionManager {
  private readonly actions: Action[] = [];

  add(action: Action): void {
    this.actions.push(action);
  }

  update(dt: number): void {
    for (let i = this.actions.length - 1; i >= 0; i -= 1) {
      const action = this.actions[i];
      action.update(dt);
      if (action.isFinished()) this.actions.splice(i, 1);
    }
  }

  clear(): void {
    this.actions.length = 0;
  }

  get size(): number {
    return this.actions.length;
  }
}

// ---------------------------------------------------------------------------
// Node
// ---------------------------------------------------------------------------

/** Either canvas context; the renderer only uses ops both provide. */
export type Ctx2D = CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D;

export class SceneNode {
  /** Grid units, relative to the parent. Mutable: tweens write into it. */
  readonly position: GridPos;
  /** Uniform, applied before recursing, so a child's `position` is in post-scale parent units. */
  scale = 1;
  opacity = 1;
  /** When set, this node and its whole subtree project isometrically. */
  forceIsometric = false;
  /** Overrides the depth-sort anchor only; it does not move the node. */
  objectAnchor: GridPos | null = null;

  readonly children: SceneNode[] = [];
  readonly actions = new ActionManager();

  readonly renderTransform: Matrix2x3 = identityMatrix();
  renderOpacity = 1;
  readonly worldPosition: GridPos = pos(0, 0, 0);

  private readonly initialPosition: GridPos;

  constructor(position: GridPos = pos(0, 0, 0)) {
    this.position = clonePos(position);
    this.initialPosition = clonePos(position);
  }

  add(child: SceneNode): void {
    this.children.push(child);
  }

  /** insert first, so the child draws behind its siblings. */
  addFirst(child: SceneNode): void {
    this.children.unshift(child);
  }

  removeChild(child: SceneNode): void {
    const i = this.children.indexOf(child);
    if (i >= 0) this.children.splice(i, 1);
  }

  /** Children first, then this node's own actions. */
  update(dt: number): void {
    for (const child of this.children) child.update(dt);
    this.actions.update(dt);
  }

  render(ctx: Ctx2D): void {
    if (this.renderOpacity > 0) this.renderInternal(ctx);
    for (const child of this.children) child.render(ctx);
  }

  protected renderInternal(_ctx: Ctx2D): void {
    // A bare node draws nothing; sprite and tile nodes override this.
  }

  /** position back to where the node was built, children reset, actions dropped. */
  reset(): void {
    this.position.x = this.initialPosition.x;
    this.position.y = this.initialPosition.y;
    this.position.z = this.initialPosition.z;
    for (const child of this.children) child.reset();
    this.actions.clear();
  }

  /** Grid units. Overridden by tiles (2) and props (sprite size / 64). */
  getWidth(): number {
    return 0;
  }

  getHeight(): number {
    return 0;
  }

  getCenterPosition(): GridPos {
    return clonePos(this.position);
  }
}

/** the point the depth sort and the intro stagger measure from. */
export function nodeAnchor(node: SceneNode): GridPos {
  return node.objectAnchor ? clonePos(node.objectAnchor) : node.getCenterPosition();
}

/**
 * depth-first, writing `renderTransform`, `worldPosition` and `renderOpacity`.
 * Call once per frame on the root before rendering.
 */
export function updateTransforms(
  node: SceneNode,
  parentMatrix: Matrix2x3 | null = null,
  parentWorld: GridPos | null = null,
  iso = false,
  parentOpacity = 1,
): void {
  const m = node.renderTransform;
  if (parentMatrix) copyMatrix(parentMatrix, m);
  else copyMatrix(identityMatrix(), m);

  const world = parentWorld ? addPos(node.position, parentWorld) : clonePos(node.position);
  node.worldPosition.x = world.x;
  node.worldPosition.y = world.y;
  node.worldPosition.z = world.z;

  const childIso = iso || node.forceIsometric;
  if (childIso) {
    const s = project(node.position);
    translateMatrix(m, s.sx, s.sy);
  } else {
    // z is ignored outside the isometric branch.
    translateMatrix(m, node.position.x, node.position.y);
  }
  scaleMatrix(m, node.scale, node.scale);
  node.renderOpacity = parentOpacity * node.opacity;

  for (const child of node.children) {
    updateTransforms(child, m, node.worldPosition, childIso, node.renderOpacity);
  }
}
