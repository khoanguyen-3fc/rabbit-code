/**
 * Camera and canvas resolution.
 *
 * The camera is static: it projects isometrically, scales world units to canvas px, and is
 * repositioned only by `fit` - on scene focus and on every canvas resize. It never
 * follows the player.
 */

import type { EventBus } from '../core/assets';
import { SceneNode, unproject } from './scene-graph';

/** `scale *= 80`: canvas px per world unit before the fit-to-bounds factor. */
const BASE_CAMERA_SCALE = 80;

/** `canvas.width = 2 * clientWidth`. A fixed supersampling factor, not DPR. */
export const BACKING_STORE_SCALE = 2;

/** Puzzle extents in projected (screen) units. */
export interface Box {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export class Camera extends SceneNode {
  constructor() {
    super();
    this.forceIsometric = true;
    this.scale = BASE_CAMERA_SCALE;
  }

  /**
   * scale the bound to fit `viewWidth x viewHeight` preserving aspect, then
   * center it. There is no letterbox border - the canvas always fills its container and the spare
   * space along the shorter axis is split by the centring.
   *
   * `scale` accumulates: each fit multiplies the current scale by the factor that fits the bound at
   * that scale, so repeated calls converge on the same absolute fit.
   */
  fit(bound: Box, viewWidth: number, viewHeight: number): void {
    const w = (bound.right - bound.left) * this.scale;
    const h = (bound.bottom - bound.top) * this.scale;
    if (w > 0 && h > 0) this.scale *= Math.min(viewWidth / w, viewHeight / h);

    const center = {
      sx: viewWidth / 2 - 0.5 * (bound.right + bound.left) * this.scale,
      sy: viewHeight / 2 - 0.5 * (bound.bottom + bound.top) * this.scale,
    };
    // The world point that projects onto the wanted screen center.
    const p = unproject(center);
    this.position.x = p.x;
    this.position.y = p.y;
    this.position.z = p.z;
  }
}

/** The Blockly strip's height in canvas px, subtracted from the camera's usable viewport. */
export function overlayHeightPx(canvas: HTMLCanvasElement, overlay: Element | null): number {
  if (!overlay || canvas.clientHeight === 0) return 0;
  return (canvas.height / canvas.clientHeight) * overlay.getBoundingClientRect().height;
}

/**
 * keeps the backing store at exactly 2x the CSS size and announces the change.
 * One per scene; call `update` every frame.
 */
export class CanvasResolution {
  private lastClientWidth = -1;
  private lastClientHeight = -1;

  constructor(
    private readonly canvas: HTMLCanvasElement,
    private readonly bus: EventBus | null = null,
  ) {}

  /** Returns true when the backing store was resized this call. */
  update(): boolean {
    const { clientWidth, clientHeight } = this.canvas;
    if (clientWidth === this.lastClientWidth && clientHeight === this.lastClientHeight)
      return false;
    this.lastClientWidth = clientWidth;
    this.lastClientHeight = clientHeight;
    this.canvas.width = BACKING_STORE_SCALE * clientWidth;
    this.canvas.height = BACKING_STORE_SCALE * clientHeight;
    if (this.bus) this.bus.emit({ type: 'canvasResized' });
    return true;
  }
}
