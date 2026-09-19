/**
 * Animated sprite node and the per-sprite offscreen rasterizer.
 *
 * A sprite is a frame list of atlas keys played at 24 fps. Sheets are never drawn straight to the
 * target canvas: each atlas rect is rasterized once into its own offscreen canvas with a 5 px bleed
 * on every side, which the draw call compensates for.
 */

import { clonePos, getSheet, getSprite, pos, type GridPos, type SpriteRect } from '../core/assets';
import { SceneNode, type Ctx2D } from './scene-graph';

/** Every rect is rasterized with this much margin per side. */
const SHEET_BLEED_PX = 5;

const SPRITE_FPS = 24;

type RasterCanvas = HTMLCanvasElement | OffscreenCanvas;

const rasters = new Map<string, RasterCanvas>();

function rasterKey(rect: SpriteRect, scale: number): string {
  return `${rect.sheetIndex},${rect.x},${rect.y},${rect.w},${rect.h},${scale}`;
}

interface RasterTarget {
  canvas: RasterCanvas;
  ctx: Ctx2D;
}

function createRasterTarget(width: number, height: number): RasterTarget | null {
  if (typeof OffscreenCanvas !== 'undefined') {
    const canvas = new OffscreenCanvas(width, height);
    const ctx = canvas.getContext('2d');
    return ctx ? { canvas, ctx } : null;
  }
  if (typeof document === 'undefined') return null;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  return ctx ? { canvas, ctx } : null;
}

/**
 * The cached raster of one atlas rect, or `null` while its sheet is still loading, in which case
 * the caller skips the draw. The cache is never evicted.
 */
function getRaster(rect: SpriteRect, scale = 1): RasterCanvas | null {
  const key = rasterKey(rect, scale);
  const cached = rasters.get(key);
  if (cached) return cached;

  const sheet = getSheet(rect.sheetIndex);
  if (!sheet) return null;

  const bleed = 2 * SHEET_BLEED_PX;
  const target = createRasterTarget(
    Math.ceil((rect.w + bleed) * scale),
    Math.ceil((rect.h + bleed) * scale),
  );
  if (!target) return null;

  target.ctx.scale(scale, scale);
  target.ctx.drawImage(
    sheet,
    rect.x - SHEET_BLEED_PX,
    rect.y - SHEET_BLEED_PX,
    rect.w + bleed,
    rect.h + bleed,
    0,
    0,
    rect.w + bleed,
    rect.h + bleed,
  );
  rasters.set(key, target.canvas);
  return target.canvas;
}

/**
 * Rasterize one atlas key ahead of time.
 * Returns false while the key's sheet is not decoded yet.
 */
export function rasterizeKey(key: string, scale = 1): boolean {
  const rect = getSprite(key);
  if (!rect) return false;
  return getRaster(rect, scale) !== null;
}

/**
 * A frame list played at `fps`. The node's position is the sprite's BOTTOM-LEFT corner: it extends
 * `+width` right and `-height` up, in the parent's post-scale units.
 */
export class SpriteNode extends SceneNode {
  fps = SPRITE_FPS;
  loop = true;
  playing = true;
  frameIndex = 0;
  elapsedTime = 0;
  mirror: boolean;
  /** 2 makes the offscreen raster twice the atlas size, for sprites drawn above 1:1. */
  rasterScale = 1;
  onEnd: (() => void) | null = null;

  private ended = false;
  private readonly explicitWidth: number | null;
  private readonly explicitHeight: number | null;

  constructor(
    public readonly frames: readonly string[],
    position: GridPos = pos(0, 0, 0),
    width: number | null = null,
    height: number | null = null,
    mirror = false,
  ) {
    super(position);
    // Width and height read frame 0, so an empty frame list is rejected here rather than leaving
    // `durationMs` at 0 and `frameIndex` NaN, which would silently never draw.
    if (frames.length === 0) throw new Error('a SpriteNode needs at least one frame');
    this.explicitWidth = width;
    this.explicitHeight = height;
    this.mirror = mirror;
  }

  /** the drawn width in sprite px, frame 0's atlas width unless overridden. */
  override getWidth(): number {
    if (this.explicitWidth !== null) return this.explicitWidth;
    return getSprite(this.frames[0])?.w ?? 0;
  }

  override getHeight(): number {
    if (this.explicitHeight !== null) return this.explicitHeight;
    return getSprite(this.frames[0])?.h ?? 0;
  }

  get durationMs(): number {
    return (1000 / this.fps) * this.frames.length;
  }

  /** jump to a frame and clear the ended flag. */
  seek(frame: number): void {
    this.frameIndex = frame;
    this.elapsedTime = (frame / this.fps) * 1000;
    this.ended = false;
  }

  /** `play` only sets the flag; owners clear `playing` directly. */
  play(): void {
    this.playing = true;
  }

  override update(dt: number): void {
    super.update(dt);
    if (!this.playing) return;
    if (!this.ended) {
      this.elapsedTime += dt;
      const duration = this.durationMs;
      if (this.loop) {
        this.elapsedTime %= duration;
      } else if (this.elapsedTime >= duration) {
        // Clamped one ms short of the end, so a non-looping sprite holds its last frame.
        this.elapsedTime = Math.min(this.elapsedTime, duration - 1);
        this.ended = true;
        if (this.onEnd) this.onEnd();
      }
    }
    this.frameIndex = Math.floor((this.elapsedTime / 1000) * this.fps) % this.frames.length;
  }

  /** the sprite's horizontal center in iso. */
  override getCenterPosition(): GridPos {
    const w = this.getWidth();
    const p = clonePos(this.position);
    p.x += (this.scale * w) / 4;
    p.z -= (this.scale * w) / 4;
    return p;
  }

  /** Draws the current frame's raster, or nothing while its sheet is still loading. */
  protected override renderInternal(ctx: Ctx2D): void {
    const rect = getSprite(this.frames[this.frameIndex]);
    if (!rect) return;

    ctx.globalAlpha = this.renderOpacity;
    const m = this.renderTransform;
    let c = this.getWidth() * m.m00;
    let e = this.getHeight() * m.m11;
    const bx = Math.floor((this.mirror ? -1 : 1) * (m.m02 + c / 2));
    const by = Math.floor(m.m12 - e / 2);
    c = Math.floor(c);
    e = Math.floor(e);

    const raster = getRaster(rect, this.rasterScale);
    if (!raster) return;

    // The 5 px bleed per side, scaled into destination px.
    const g = (2 * SHEET_BLEED_PX * c) / rect.w;
    if (this.mirror) ctx.scale(-1, 1);
    ctx.drawImage(raster, bx - (c + g) / 2, by - (e + g) / 2, c + g, e + g);
    if (this.mirror) ctx.scale(-1, 1);
  }
}
