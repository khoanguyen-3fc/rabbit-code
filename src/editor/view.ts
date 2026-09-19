/**
 * The editing canvas: the level drawn by the game's own renderer, and the cell under the pointer.
 *
 * Nothing here runs the game. `buildSceneForLevel` with no event bus gives a static tree, so the
 * view redraws only when the level changes.
 */

import { pos, type GridPos, type Level, type TilesFile } from '../core/assets';
import { Camera, CanvasResolution, type Box } from '../render/camera';
import { buildSceneForLevel, render, type PuzzleNode } from '../render/renderer';
import { project, unproject } from '../render/scene-graph';

/**
 * The plane the editor picks on. A cube at `y` has its top face at `y - 1`, and the ground layer
 * is `y = 0`, so the surface the pointer lands on is `y = -1`.
 */
const GROUND_TOP_Y = -1;

/** Half a cell of air around the map, so the outermost cubes are not flush with the edge. */
const FIT_MARGIN = 1;

/** Backing-store px. The store is twice the CSS size, so this is a one pixel line on screen. */
const GRID_LINE_PX = 2;

export class EditorView {
  private readonly camera = new Camera();
  private readonly resolution: CanvasResolution;
  private readonly ctx: CanvasRenderingContext2D;
  private puzzle: PuzzleNode | null = null;

  constructor(
    private readonly canvas: HTMLCanvasElement,
    private readonly tiles: TilesFile,
  ) {
    const ctx = canvas.getContext('2d');
    if (ctx === null) throw new Error('the editor canvas has no 2d context');
    this.ctx = ctx;
    this.resolution = new CanvasResolution(canvas);
  }

  /**
   * Redraws the level, then the grid with `hover` picked out. The old tree is detached first:
   * `render` only ever adds the puzzle to the camera, so leaving it attached would draw every past
   * version underneath this one.
   */
  draw(level: Level, hover: GridPos | null = null): void {
    this.resolution.update();
    if (this.puzzle) this.camera.removeChild(this.puzzle);
    this.puzzle = buildSceneForLevel(level, { tiles: this.tiles, bus: null });
    this.fit(level);
    render(this.ctx, this.puzzle, this.camera);
    this.drawGrid(level, hover);
  }

  /** A grid point in backing-store pixels. */
  private toPixel(point: GridPos): { x: number; y: number } {
    const origin = project(this.camera.position);
    const p = project(point);
    return { x: origin.sx + this.camera.scale * p.sx, y: origin.sy + this.camera.scale * p.sy };
  }

  /**
   * The cell edges on the ground plane, and the cell under the pointer filled in.
   *
   * It is drawn over the level rather than under it, so the grid stays readable across cubes that
   * are already placed. Sprites leave `globalAlpha` at their own opacity, so it is reset first.
   */
  private drawGrid(level: Level, hover: GridPos | null): void {
    const ctx = this.ctx;
    ctx.globalAlpha = 1;
    ctx.lineWidth = GRID_LINE_PX;
    ctx.strokeStyle = 'rgb(19 92 104 / 22%)';

    ctx.beginPath();
    for (let x = 0; x <= level.width; x += 1) {
      const from = this.toPixel(pos(x, GROUND_TOP_Y, 0));
      const to = this.toPixel(pos(x, GROUND_TOP_Y, level.height));
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
    }
    for (let z = 0; z <= level.height; z += 1) {
      const from = this.toPixel(pos(0, GROUND_TOP_Y, z));
      const to = this.toPixel(pos(level.width, GROUND_TOP_Y, z));
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
    }
    ctx.stroke();

    if (hover === null) return;
    const corners = [
      this.toPixel(pos(hover.x, GROUND_TOP_Y, hover.z)),
      this.toPixel(pos(hover.x + 1, GROUND_TOP_Y, hover.z)),
      this.toPixel(pos(hover.x + 1, GROUND_TOP_Y, hover.z + 1)),
      this.toPixel(pos(hover.x, GROUND_TOP_Y, hover.z + 1)),
    ];
    ctx.beginPath();
    ctx.moveTo(corners[0].x, corners[0].y);
    for (const corner of corners.slice(1)) ctx.lineTo(corner.x, corner.y);
    ctx.closePath();
    ctx.fillStyle = 'rgb(255 255 255 / 45%)';
    ctx.fill();
    ctx.strokeStyle = '#135c68';
    ctx.stroke();
  }

  /**
   * Fits the map rectangle rather than the scene bound, so the view does not jump as cubes are
   * added and removed. `Camera.fit` multiplies the scale it already has, so the scale is reset
   * first and repeated fits land in the same place.
   */
  private fit(level: Level): void {
    const corners = [
      project(pos(0, GROUND_TOP_Y, 0)),
      project(pos(level.width, GROUND_TOP_Y, 0)),
      project(pos(0, GROUND_TOP_Y, level.height)),
      project(pos(level.width, GROUND_TOP_Y, level.height)),
    ];
    const bound: Box = {
      left: Math.min(...corners.map((c) => c.sx)) - FIT_MARGIN,
      right: Math.max(...corners.map((c) => c.sx)) + FIT_MARGIN,
      top: Math.min(...corners.map((c) => c.sy)) - FIT_MARGIN,
      bottom: Math.max(...corners.map((c) => c.sy)) + FIT_MARGIN,
    };
    this.camera.scale = 1;
    this.camera.fit(bound, this.canvas.width, this.canvas.height);
  }

  /**
   * The cell under a pointer event, or null when the pointer is outside the map.
   *
   * Each axis is scaled by its own rect dimension: the backing store is a whole number of pixels
   * while the element's box is fractional, so one shared factor drifts on a non-integer width.
   */
  cellAt(event: { clientX: number; clientY: number }, level: Level): GridPos | null {
    const rect = this.canvas.getBoundingClientRect();
    const origin = project(this.camera.position);
    const sx =
      (((event.clientX - rect.left) / rect.width) * this.canvas.width - origin.sx) /
      this.camera.scale;
    const sy =
      (((event.clientY - rect.top) / rect.height) * this.canvas.height - origin.sy) /
      this.camera.scale;

    const world = unproject({ sx, sy }, GROUND_TOP_Y);
    const x = Math.floor(world.x);
    const z = Math.floor(world.z);
    // Written as a rejection so a NaN coordinate - a collapsed canvas gives rect.width 0 - falls
    // out here rather than becoming a cell.
    if (!(x >= 0 && z >= 0 && x < level.width && z < level.height)) return null;
    return pos(x, GROUND_TOP_Y, z);
  }
}
