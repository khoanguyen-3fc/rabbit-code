/**
 * The coding scene: the level on the canvas, the
 * shared Blockly workspace in the tray, one play/stop button, and the win hand-over.
 */

import {
  clearAndSeed,
  clearHighlight,
  highlightBlock,
  workspaceToProgram,
} from '../../blocks/workspace';
import {
  countBlocks,
  type GameEvent,
  type Level,
  type LevelManifest,
  type Program,
} from '../../core/assets';
import type { GameContext } from '../context';
import { Delay, Scene } from '../scene';
import { Stage } from '../stage';
import { EndScene, LevelMapScene, ShareScene } from './overlays';
import { LoadingScene } from './loading';
import { TutorialScene } from './tutorial';

/** Wait between the level-out animation and the scene ending. */
const OUTRO_HOLD_MS = 1000;

export class PlayScene extends Scene {
  private readonly stage: Stage;
  private readonly unsubscribe: () => void;
  private intro: Scene | null = null;
  private mapOverlay: LevelMapScene | null = null;
  private program: Program = { kind: 'sequence', blockId: null, body: [] };
  /** The tree passed to the runner at play time, so the score ignores mid-run workspace edits. */
  private ranProgram: Program | null = null;
  private executing = false;
  private solved = false;
  private finished = false;
  private lastHighlight: string | null = null;
  private readonly outroHold = new Delay();

  private readonly onPlayClick: () => void;
  private readonly onMapClick: () => void;
  private readonly onShareClick: () => void;
  private readonly onSearchClick: () => void;
  private shareOverlay: ShareScene | null = null;
  private readonly onWorkspaceChange: (event: Blockly.Events.Abstract) => void;

  constructor(
    private readonly context: GameContext,
    private readonly manifest: LevelManifest,
    level: Level,
    introLevel: Level | null,
    showIntroOverlay: boolean,
  ) {
    super();
    const { chrome, tiles, audio } = context;
    this.stage = new Stage({
      canvas: chrome.canvas,
      level,
      tiles,
      audio,
      viewportOverlay: chrome.blocklyHost,
    });
    this.unsubscribe = this.stage.bus.on((event) => this.onGameEvent(event));
    if (showIntroOverlay) this.intro = this.buildIntro(introLevel);

    this.onPlayClick = () => this.togglePlay();
    this.onMapClick = () => this.openMap();
    this.onShareClick = () => this.openShare();
    // The search button opens a Google search for the game title.
    this.onSearchClick = () => {
      const q = encodeURIComponent(this.context.i18n.t('Title'));
      window.open(`https://www.google.com/search?q=${q}`, '_blank', 'noopener,noreferrer');
    };
    this.onWorkspaceChange = (event) => {
      if (event.type !== Blockly.Events.UI)
        this.program = workspaceToProgram(this.context.workspace);
    };
  }

  protected override onFocus(): void {
    const { chrome, workspace } = this.context;
    // Dev-only handle for the browser smoke tests. The coding HUD shows no carrot count, so a test
    // has no other way to watch a run progress.
    if (import.meta.env.DEV) {
      (globalThis as { __rcStage?: Stage }).__rcStage = this.stage;
    }
    chrome.setFooterHeight(this.manifest.blocklyFooterHeightPx);
    workspace.updateToolbox(this.manifest.toolboxXml);
    clearAndSeed(workspace, this.manifest.workspace);
    chrome.play.setExecuting(false);
    this.program = workspaceToProgram(workspace);
    workspace.addChangeListener(this.onWorkspaceChange);

    chrome.play.button.addEventListener('click', this.onPlayClick);
    chrome.overflow.mapButton.addEventListener('click', this.onMapClick);
    chrome.overflow.shareButton.addEventListener('click', this.onShareClick);
    chrome.overflow.searchButton.addEventListener('click', this.onSearchClick);

    this.stage.fit();
    this.stage.playIntro();
    // With no intro overlay the tray is up from the start.
    if (!this.intro) this.showGameUi();
  }

  protected override onBlur(): void {
    const { chrome, workspace } = this.context;
    workspace.removeChangeListener(this.onWorkspaceChange);
    chrome.play.button.removeEventListener('click', this.onPlayClick);
    chrome.overflow.mapButton.removeEventListener('click', this.onMapClick);
    chrome.overflow.shareButton.removeEventListener('click', this.onShareClick);
    chrome.overflow.searchButton.removeEventListener('click', this.onSearchClick);
    this.shareOverlay?.dispose();
    this.shareOverlay = null;
    clearHighlight(workspace);
    chrome.showGameUi(false);

    this.mapOverlay?.dispose();
    this.mapOverlay = null;
    this.context.chrome.overflow.contract();
    this.intro?.dispose();
    this.intro = null;
    this.unsubscribe();
    this.stage.dispose();
  }

  override update(dtMs: number): void {
    this.stage.update(dtMs);
    this.syncHighlight();
    // Held-arrow scroll and arrow visibility, both per frame.
    this.context.chrome.scrollArrows.update(dtMs, this.context.workspace);

    if (this.intro?.isFocused) {
      this.intro.update(dtMs);
      if (this.intro.isFinished()) {
        this.intro.dispose();
        this.intro = null;
        this.showGameUi();
      }
    }
    if (this.shareOverlay) {
      this.shareOverlay.update(dtMs);
      if (this.shareOverlay.isFinished()) {
        this.shareOverlay.dispose();
        this.shareOverlay = null;
        this.context.chrome.overflow.contract();
      }
    }
    if (this.mapOverlay) {
      this.mapOverlay.update(dtMs);
      if (this.mapOverlay.isFinished()) {
        this.mapOverlay.dispose();
        this.mapOverlay = null;
        // the map's blur contracts the overflow pill behind it.
        this.context.chrome.overflow.contract();
      }
    }
    if (this.outroHold.update(dtMs)) this.finished = true;
  }

  override render(): void {
    this.stage.render();
    // The tutorial draws its own canvas inside the overlay card.
    if (this.intro?.isFocused) this.intro.render();
  }

  override isFinished(): boolean {
    return this.finished;
  }

  override getNextScene(): Scene | null {
    const index = this.manifest.puzzleIndex;
    // A custom level is not part of the ladder and leads nowhere.
    if (index === null) return null;
    if (index < this.context.levels.levels.length - 1) {
      return new LoadingScene(this.context, index + 1);
    }
    return new EndScene(this.context);
  }

  private buildIntro(introLevel: Level | null): Scene | null {
    const intro = this.manifest.introOverlay;
    if (!intro) return null;
    if (intro.kind === 'progressMap') {
      return new LevelMapScene(this.context, {
        currentLevel: this.manifest.puzzleIndex,
        autoHideMs: intro.autoHideMs,
      });
    }
    if (!introLevel) return null;
    const tutorial = this.context.levels.tutorials[intro.tutorialIndex];
    return new TutorialScene(this.context, tutorial, introLevel);
  }

  private onGameEvent(event: GameEvent): void {
    switch (event.type) {
      case 'levelInDone':
        // The overlay takes over once the level has dropped in.
        if (this.intro) this.intro.focus();
        else this.showGameUi();
        return;
      case 'puzzleSolved':
        this.onSolved();
        return;
      case 'levelOutDone':
        this.context.chrome.showGameUi(false);
        this.outroHold.start(OUTRO_HOLD_MS);
        return;
      case 'canvasResized':
        Blockly.svgResize(this.context.workspace);
        return;
      default:
        return;
    }
  }

  /**
   * The score is the block count of the program that solved it - the tree handed
   * to the runner, not the live workspace. The workspace stays editable during a run, so scoring
   * `this.program` would count mid-run edits.
   */
  private onSolved(): void {
    this.solved = true;
    clearHighlight(this.context.workspace);
    const index = this.manifest.puzzleIndex;
    const scored = this.ranProgram ?? this.program;
    if (index !== null) this.context.progress.recordSolve(index, countBlocks(scored));
  }

  private togglePlay(): void {
    // Clicking play between the win and the outro would strand the scene.
    if (this.solved) return;
    const { chrome, workspace } = this.context;
    if (!this.executing && countBlocks(this.program) > 0) {
      this.executing = true;
      chrome.play.setExecuting(true);
      Blockly.hideChaff();
      this.ranProgram = this.program;
      this.stage.start(this.program);
      return;
    }
    this.executing = false;
    chrome.play.setExecuting(false);
    this.ranProgram = null;
    this.stage.stop();
    clearHighlight(workspace);
    this.lastHighlight = null;
  }

  private openShare(): void {
    if (this.shareOverlay) return;
    this.shareOverlay = new ShareScene(this.context);
    this.shareOverlay.focus();
  }

  private openMap(): void {
    if (this.mapOverlay) return;
    this.mapOverlay = new LevelMapScene(this.context, {
      currentLevel: this.manifest.puzzleIndex,
      interactive: true,
      onSelect: (level) => {
        this.context.scenes.replaceAll(new LoadingScene(this.context, level, false));
      },
    });
    this.mapOverlay.focus();
  }

  private syncHighlight(): void {
    const { workspace } = this.context;
    const blockId = this.stage.activeBlockId;
    if (blockId === this.lastHighlight) return;
    this.lastHighlight = blockId;
    if (blockId !== null && workspace.getBlockById(blockId)) highlightBlock(workspace, blockId);
    else clearHighlight(workspace);
  }

  /** Blockly was injected while the tray was hidden, so its size is read when it appears. */
  private showGameUi(): void {
    this.context.chrome.showGameUi(true);
    Blockly.svgResize(this.context.workspace);
  }
}
