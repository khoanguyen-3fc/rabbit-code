/**
 * Entry point: build the context, queue the title screen and run the frame clock.
 */

import './styles/game.css';
import { bootContext, type GameContext } from './game/context';
import { TitleScene } from './game/scenes/title';

/** dt clamp: a stall is stretched, never fast-forwarded. */
const DT_CLAMP_MS = 100;

interface LoopHooks {
  update(dtMs: number): void;
  render(): void;
}

export class GameLoop {
  private running_ = false;
  private lastMs = 0;
  private frameHandle = 0;
  private readonly onVisibility: () => void;

  constructor(private readonly hooks: LoopHooks) {
    this.onVisibility = () => {
      if (document.hidden) this.stop();
      else this.start();
    };
    document.addEventListener('visibilitychange', this.onVisibility);
  }

  get running(): boolean {
    return this.running_;
  }

  /** Resets the clock first, so a hidden or stalled span never lands in the next `dt`. */
  start(): void {
    if (this.running_) return;
    this.running_ = true;
    this.lastMs = performance.now();
    this.frameHandle = requestAnimationFrame(this.frame);
  }

  stop(): void {
    if (!this.running_) return;
    this.running_ = false;
    cancelAnimationFrame(this.frameHandle);
  }

  dispose(): void {
    this.stop();
    document.removeEventListener('visibilitychange', this.onVisibility);
  }

  private readonly frame = (now: number): void => {
    if (!this.running_) return;
    this.frameHandle = requestAnimationFrame(this.frame);
    const dtMs = Math.min(now - this.lastMs, DT_CLAMP_MS);
    this.lastMs = now;
    this.hooks.update(dtMs);
    this.hooks.render();
  };
}

interface GameSession {
  readonly context: GameContext;
  readonly loop: GameLoop;
  /** Stops the clock and drops every scene, listener and workspace. */
  stop(): void;
}

async function startGame(root: HTMLElement): Promise<GameSession> {
  const context = await bootContext(root);
  context.scenes.enqueue(new TitleScene(context));

  const loop = new GameLoop({
    update: (dtMs) => context.scenes.update(dtMs),
    render: () => context.scenes.render(),
  });
  loop.start();

  return {
    context,
    loop,
    stop(): void {
      loop.dispose();
      context.scenes.dispose();
      context.workspace.dispose();
      context.chrome.dispose();
      context.audio.dispose();
    },
  };
}

const root = document.getElementById('app');
if (root === null) throw new Error('index.html is missing #app');

await startGame(root);
