/**
 * The loading screen: preload what the next level needs, show for at least 1000 ms,
 * then hand over to the coding scene.
 *
 * The sprite sheets are rasterized inside this screen's own minimum-display window, and a sheet
 * whose sprites are all cached is neither downloaded nor rasterized again.
 */

import {
  assetUrl,
  getSprite,
  type Level,
  type LevelManifest,
  pos,
  preload,
  spriteNames,
  unloadSheet,
  usedSheetIndices,
} from '../../core/assets';
import { BACKGROUND_COLOUR } from '../../render/renderer';
import {
  Action,
  ActionGroup,
  ActionSequence,
  CallbackAction,
  numberTween,
  SceneNode,
  updateTransforms,
  WaitAction,
} from '../../render/scene-graph';
import { rasterizeKey, SpriteNode } from '../../render/sprite';
import { loadLevelForManifest, loadTutorialLevel, type GameContext } from '../context';
import { Scene } from '../scene';
import { PlayScene } from './play';

/** `shared-sprite.svg`, needed by every level. */
const SHARED_SHEET_INDEX = 1;

/** Minimum time the loading screen stays up. */
const MIN_VISIBLE_MS = 1000;

/** Six sheet-0 sprites; the LOADING_* keys name the slot, not the glyph drawn. */
const LETTER_SPRITES = [
  'LOADING_G1',
  'LOADING_O1',
  'LOADING_O2',
  'LOADING_G2',
  'LOADING_L',
  'LOADING_E',
] as const;

/** the 48-frame carrot above the letters. */
const CARROT_FRAMES = Array.from({ length: 48 }, (_, index) => `CARROT_${index + 1}`);

/** `Hu = 240 / (Gu.length - 1)`: the letter pitch in sprite units. */
const LETTER_PITCH = 240 / (LETTER_SPRITES.length - 1);

/** the group is 240 sprite units wide at full size. */
const GROUP_REFERENCE_WIDTH = 240;

/** Baseline of the carrot and the letter row inside the group. */
const ROW_OFFSET_Y = 100;

/** rest between two runs of the letter bounce. */
const LETTER_CYCLE_REST_MS = 375;

/** letter i starts `125 * (i + 1)` ms into the run. */
const LETTER_STAGGER_MS = 125;

/** one letter's scale tween, 1 -> 1.2 -> 0.8 -> 1 with the default easing. */
function letterBounce(letter: SceneNode): Action {
  const write = (value: number): void => {
    letter.scale = value;
  };
  return new ActionSequence([
    numberTween(
      125,
      () => 1,
      () => 1.2,
      write,
    ),
    numberTween(
      125,
      () => 1.2,
      () => 0.8,
      write,
    ),
    numberTween(
      300,
      () => 0.8,
      () => 1,
      write,
    ),
  ]);
}

/** Sprites rasterized per frame; a loading screen can afford a large budget. */
const RASTER_BUDGET_PER_FRAME = 40;

/** MUSIC starts once per page load, 1000 ms after the sounds file decodes. */
let musicStarted = false;

/** Sheets whose every sprite is already in the raster cache, so their SVG is not needed again. */
const rasterizedSheets = new Set<number>();

export class LoadingScene extends Scene {
  private msVisible = 0;
  private assetsReady = false;
  private rasterQueue: string[] = [];
  private readonly rasterFailures: string[] = [];
  private pendingSheets: number[] = [];
  private level: Level | null = null;
  private introLevel: Level | null = null;

  /** The carrot and the six letter wrappers. */
  private readonly sprites = new SceneNode();
  private readonly letters: SceneNode[] = [];

  constructor(
    private readonly context: GameContext,
    private readonly puzzleIndex: number,
    /** False when the interactive map jumped straight to this level. */
    private readonly showIntroOverlay = true,
  ) {
    super();

    // The sprite node's position is its bottom-left corner, so the carrot hangs above the row.
    const carrot = new SpriteNode(CARROT_FRAMES);
    carrot.scale = 2;
    carrot.position.x = (-carrot.scale * carrot.getWidth()) / 2;
    carrot.position.y = ROW_OFFSET_Y - (carrot.scale * carrot.getHeight()) / 2;
    this.sprites.add(carrot);

    let x = -GROUP_REFERENCE_WIDTH / 2;
    for (const name of LETTER_SPRITES) {
      const wrapper = new SceneNode(pos(x, ROW_OFFSET_Y, 0));
      const glyph = new SpriteNode([name]);
      glyph.position.x = -glyph.getWidth() / 2;
      glyph.position.y = glyph.getHeight() / 2;
      wrapper.add(glyph);
      this.sprites.add(wrapper);
      this.letters.push(wrapper);
      x += LETTER_PITCH;
    }
  }

  private get manifest(): LevelManifest {
    return this.context.levels.levels[this.puzzleIndex];
  }

  protected override onFocus(): void {
    this.startLetterCycle();
    void this.load();
  }

  /** `onBlur`: the looping action chain is dropped. */
  protected override onBlur(): void {
    this.sprites.actions.clear();
  }

  override update(dtMs: number): void {
    this.msVisible += dtMs;
    this.layout();
    this.sprites.update(dtMs);
    this.drainRasterQueue();
  }

  override isFinished(): boolean {
    return this.assetsReady && this.rasterQueue.length === 0 && this.msVisible >= MIN_VISIBLE_MS;
  }

  override getNextScene(): Scene | null {
    if (!this.level) return null;
    return new PlayScene(
      this.context,
      this.manifest,
      this.level,
      this.introLevel,
      this.showIntroOverlay,
    );
  }

  /** `render`: the flat fill, then the sprite group. */
  override render(): void {
    const { ctx } = this.context.chrome;
    ctx.globalAlpha = 1;
    ctx.fillStyle = BACKGROUND_COLOUR;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    updateTransforms(this.sprites);
    this.sprites.render(ctx);
  }

  /** the group is centered on the canvas and shrinks with a narrow one. */
  private layout(): void {
    const { canvas } = this.context.chrome;
    this.sprites.scale =
      Math.min(GROUP_REFERENCE_WIDTH, 0.8 * canvas.width) / GROUP_REFERENCE_WIDTH;
    this.sprites.position.x = canvas.width / 2;
    this.sprites.position.y = canvas.height / 2;
  }

  /** the six staggered bounces, 375 ms of rest, then the whole thing again. */
  private startLetterCycle(): void {
    const branches = this.letters.map(
      (letter, index) =>
        new ActionSequence([new WaitAction(LETTER_STAGGER_MS * (index + 1)), letterBounce(letter)]),
    );
    this.sprites.actions.add(
      new ActionSequence([
        new ActionGroup(branches),
        new WaitAction(LETTER_CYCLE_REST_MS),
        new CallbackAction(() => this.startLetterCycle()),
      ]),
    );
  }

  private async load(): Promise<void> {
    const manifest = this.manifest;
    // What the map actually draws from, not the manifest's preload list: that list omits sheet 10
    // for L4 and sheet 2 for L5, and a missing sheet makes its props silently invisible.
    const used = await usedSheetIndices(manifest.mapFile);
    const sheets = [...new Set([SHARED_SHEET_INDEX, ...manifest.spriteSheetIds, ...used])].filter(
      (index) => !rasterizedSheets.has(index),
    );
    try {
      const [level, introLevel] = await Promise.all([
        loadLevelForManifest(manifest, this.context.tiles),
        this.loadIntroLevel(manifest),
        preload(sheets),
        this.startAudio(),
        this.preloadEndScreen(),
      ]);
      this.level = level;
      this.introLevel = introLevel;
      this.rasterQueue = rasterKeysForSheets(sheets);
      this.pendingSheets = sheets;
      this.assetsReady = true;
    } catch (error) {
      console.error(`level ${manifest.id} failed to load`, error);
    }
  }

  private loadIntroLevel(manifest: LevelManifest): Promise<Level | null> {
    const intro = manifest.introOverlay;
    if (intro?.kind !== 'tutorial') return Promise.resolve(null);
    const tutorial = this.context.levels.tutorials[intro.tutorialIndex];
    return loadTutorialLevel(tutorial, this.context.tiles);
  }

  private async startAudio(): Promise<void> {
    try {
      await this.context.audio.load();
    } catch (error) {
      console.warn('audio unavailable', error);
      return;
    }
    if (musicStarted) return;
    musicStarted = true;
    this.context.audio.play('MUSIC', { loop: true, delayMs: 1000 });
  }

  /** the end screen's picture is fetched while the last level loads. */
  private preloadEndScreen(): Promise<void> {
    if (this.puzzleIndex !== this.context.levels.levels.length - 1) return Promise.resolve();
    return new Promise<void>((resolve) => {
      const image = new Image();
      image.onload = () => resolve();
      image.onerror = () => resolve();
      image.src = assetUrl('end_screen_bg.svg');
    });
  }

  private drainRasterQueue(): void {
    for (let i = 0; i < RASTER_BUDGET_PER_FRAME; i += 1) {
      const key = this.rasterQueue.pop();
      if (key === undefined) break;
      if (!rasterizeKey(key)) this.rasterFailures.push(key);
    }
    if (this.rasterQueue.length > 0 || this.pendingSheets.length === 0) return;
    // Unloading frees the decoded SVG, and a sprite that is not cached by then can never be drawn
    // again. So only drop sheets once every one of their sprites really did rasterize; a failure
    // here would otherwise show up much later as a silently invisible prop.
    if (this.rasterFailures.length > 0) {
      console.warn(
        `${this.rasterFailures.length} sprites failed to rasterize, keeping their sheets loaded:`,
        this.rasterFailures.slice(0, 8),
      );
      this.pendingSheets = [];
      return;
    }
    for (const index of this.pendingSheets.splice(0)) {
      rasterizedSheets.add(index);
      unloadSheet(index);
    }
  }
}

function rasterKeysForSheets(indices: readonly number[]): string[] {
  const wanted = new Set(indices);
  return spriteNames().filter((key) => {
    const rect = getSprite(key);
    return rect !== undefined && wanted.has(rect.sheetIndex);
  });
}
