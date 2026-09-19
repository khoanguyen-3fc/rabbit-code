/**
 * The start screen. The cta.svg artwork is the canvas element's own CSS
 * background (game.css `.rc-canvas`) and the scene draws the two sheet-0
 * sprites over it - a teal disc and a play glyph breathing in counter-phase.
 *
 * The click is also the first user gesture, so it is where the audio context is unlocked.
 */

import { assetUrl, type Level } from '../../core/assets';
import { BACKGROUND_COLOUR } from '../../render/renderer';
import { SceneNode, updateTransforms } from '../../render/scene-graph';
import { SpriteNode } from '../../render/sprite';
import type { GameContext } from '../context';
import { Scene } from '../scene';
import { setVisible } from '../ui';
import { LoadingScene } from './loading';

/** `sin(ms * PI/1000)`, a 2000 ms wobble period. */
const WOBBLE_RATE = Math.PI / 1000;

/** `2 * canvas.width / 960`: the sprites scale with the canvas. */
const BASE_SCALE_REFERENCE_WIDTH = 960;

export class TitleScene extends Scene {
  private dismissed = false;
  private readonly onClick: () => void;

  private readonly root = new SceneNode();
  private readonly playWrapper = new SceneNode();
  private readonly playBgWrapper = new SceneNode();
  private baseScale = 1;
  private msElapsed = 0;

  constructor(
    private readonly context: GameContext,
    /** A level the editor made, played instead of the first ladder level. */
    private readonly custom: Level | null = null,
  ) {
    super();
    this.onClick = () => {
      this.context.audio.unlock();
      // the canvas keeps the color and loses the picture.
      this.context.chrome.canvas.style.background = BACKGROUND_COLOUR;
      this.dismissed = true;
    };

    // The disc is anchored on its own center, the glyph 13% of its width right of it.
    const bg = new SpriteNode(['CTA_PLAY_BG']);
    bg.position.x = -bg.getWidth() / 2;
    bg.position.y = bg.getHeight() / 2;
    bg.rasterScale = 2;
    const play = new SpriteNode(['CTA_PLAY']);
    play.position.x = -0.37 * play.getWidth();
    play.position.y = play.getHeight() / 2;
    play.rasterScale = 2;

    this.playBgWrapper.add(bg);
    this.playWrapper.add(play);
    this.root.add(this.playBgWrapper);
    this.root.add(this.playWrapper);
  }

  protected override onFocus(): void {
    // The artwork is a CSS background on the canvas, but its URL has to go
    // through assetUrl so a sub-path deployment resolves it; game.css supplies the rest of the rule.
    this.context.chrome.canvas.style.backgroundImage = `url(${assetUrl('cta.svg')})`;
    this.context.chrome.title.title = this.context.i18n.t('Start Button');
    setVisible(this.context.chrome.title, true);
    this.context.chrome.title.addEventListener('click', this.onClick);
  }

  protected override onBlur(): void {
    this.context.chrome.title.removeEventListener('click', this.onClick);
    setVisible(this.context.chrome.title, false);
  }

  override isFinished(): boolean {
    return this.dismissed;
  }

  override getNextScene(): Scene {
    return new LoadingScene(this.context, this.custom ?? 0);
  }

  /** Placement is rerun every frame, so a resize takes effect immediately. */
  override update(dtMs: number): void {
    this.layout();
    this.msElapsed += dtMs;
    const a = (0.2 * (1 + Math.sin(this.msElapsed * WOBBLE_RATE))) / 2;
    this.playWrapper.scale = this.baseScale * (1 + a);
    this.playBgWrapper.scale = this.baseScale * (1 - a);
  }

  /** `render`: the canvas is cleared, so its CSS background shows through. */
  override render(): void {
    const { ctx } = this.context.chrome;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    updateTransforms(this.root);
    this.root.render(ctx);
  }

  /** both wrappers sit `width/10` above the canvas center. */
  private layout(): void {
    const { canvas } = this.context.chrome;
    const y = canvas.height / 2 - canvas.width / 10;
    for (const wrapper of [this.playWrapper, this.playBgWrapper]) {
      wrapper.position.x = canvas.width / 2;
      wrapper.position.y = y;
    }
    this.baseScale = (2 * canvas.width) / BASE_SCALE_REFERENCE_WIDTH;
  }
}
