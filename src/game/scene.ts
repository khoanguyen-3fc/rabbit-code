/**
 * Scene base class, the queue that runs them, and the frame-driven delay every scene uses
 * instead of `setTimeout`, so a paused loop pauses the scene's timers too.
 */

/** CSS duration of the `.rc-overlay` drop-in and fly-out. */
export const OVERLAY_TRANSITION_MS = 400;

/**
 * A one-shot countdown advanced by the frame clock. `update` returns true on the single frame the
 * delay elapses.
 */
export class Delay {
  private remainingMs = -1;

  start(durationMs: number): void {
    this.remainingMs = durationMs;
  }

  cancel(): void {
    this.remainingMs = -1;
  }

  update(dtMs: number): boolean {
    if (this.remainingMs < 0) return false;
    this.remainingMs -= dtMs;
    if (this.remainingMs > 0) return false;
    this.remainingMs = -1;
    return true;
  }
}

/**
 * A scene owns its DOM listeners and its part of the canvas. `focus`/`blur` fire once per state
 * change; the scene manager drives `update`/`render` for the front scene only. Overlay scenes
 * (tutorial, progress map) are children of a scene and are driven by it, not by the queue.
 */
export abstract class Scene {
  private focused = false;

  focus(): void {
    if (this.focused) return;
    this.focused = true;
    this.onFocus();
  }

  blur(): void {
    if (!this.focused) return;
    this.focused = false;
    this.onBlur();
  }

  get isFocused(): boolean {
    return this.focused;
  }

  /** The scene manager replaces the scene once this is true. */
  isFinished(): boolean {
    return false;
  }

  /** Enqueued behind this scene when it finishes. */
  getNextScene(): Scene | null {
    return null;
  }

  update(_dtMs: number): void {
    // Scenes that need no per-frame work leave this alone.
  }

  /** Each scene draws to the context it owns; there is one canvas per scene tree. */
  render(): void {
    // Scenes that draw nothing leave this alone.
  }

  dispose(): void {
    this.blur();
  }

  protected onFocus(): void {
    // Optional lifecycle hook.
  }

  protected onBlur(): void {
    // Optional lifecycle hook.
  }
}

/**
 * The scene queue. FIFO, not a stack: the front scene is the live one and
 * `getNextScene` is enqueued at the back.
 */
export class SceneManager {
  private readonly queue: Scene[] = [];

  enqueue(scene: Scene): void {
    this.queue.push(scene);
  }

  get front(): Scene | null {
    return this.queue[0] ?? null;
  }

  /** retire every finished scene, then focus and update the front one. */
  update(dtMs: number): void {
    while (this.queue.length > 0 && this.queue[0].isFinished()) {
      const scene = this.queue[0];
      const next = scene.getNextScene();
      if (next) this.enqueue(next);
      scene.dispose();
      this.queue.shift();
    }
    const front = this.queue[0];
    if (!front) return;
    front.focus();
    front.update(dtMs);
  }

  render(): void {
    this.queue[0]?.render();
  }

  /** Interactive progress-map jump: drop the whole queue and start `scene` instead. */
  replaceAll(scene: Scene): void {
    for (const queued of this.queue.splice(0)) queued.dispose();
    this.enqueue(scene);
  }

  dispose(): void {
    for (const queued of this.queue.splice(0)) queued.dispose();
  }
}
