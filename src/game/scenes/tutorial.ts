/**
 * A tutorial overlay: its own 480x480 card with its own canvas, its own Blockly
 * workspace and a declarative screen list from the manifest's `tutorials[]`.
 *
 * The step clock is the frame clock, not `transitionend`, so the demo hop always starts 500 ms
 * after the drop-in ends (~900 ms after focus) rather than whenever a child transition bubbles.
 */

import {
  type AstMatchPattern,
  countBlocks,
  type GameEvent,
  type Level,
  type Program,
  type ProgramNode,
  type TutorialManifest,
  type TutorialScreen,
} from '../../core/assets';
import {
  HAT_BLOCK_TYPE,
  clearAndSeed,
  createWorkspace,
  setEnabledBlockTypes,
  workspaceToProgram,
} from '../../blocks/workspace';
import type { GameContext } from '../context';
import { Delay, Scene } from '../scene';
import { Stage } from '../stage';
import { Overlay, PlayButton, clone, el, setVisible } from '../ui';

/** Delay between the drop-in and the two demo hops. */
const DEMO_HOP_DELAY_MS = 500;

/** How long the "Done" screen stays up after the win before the card flies out. */
const DONE_HOLD_MS = 1600;

const TYPE_BY_KIND = {
  moveForward: 'logo17_move_forward',
  turnLeft: 'logo17_turn_left',
  turnRight: 'logo17_turn_right',
  repeat: 'logo17_for_loop',
} as const;

function nodePattern(node: ProgramNode): string | AstMatchPattern {
  if (node.kind === 'sequence') return node.body.map(nodePattern);
  if (node.kind !== 'repeat') return TYPE_BY_KIND[node.kind];
  // An empty loop is the bare type string, which never matches a nested pattern.
  if (node.body.length === 0) return TYPE_BY_KIND.repeat;
  return [TYPE_BY_KIND.repeat, ...node.body.map(nodePattern)];
}

/** The hat's type followed by the blocks under it. */
function programPattern(program: Program): AstMatchPattern {
  return [HAT_BLOCK_TYPE, ...program.body.map(nodePattern)];
}

/** deep equality where a string never matches an array. */
function patternEquals(a: AstMatchPattern, b: AstMatchPattern): boolean {
  if (a.length !== b.length) return false;
  return a.every((left, index) => {
    const right = b[index];
    if (Array.isArray(left) !== Array.isArray(right)) return false;
    if (Array.isArray(left) && Array.isArray(right)) return patternEquals(left, right);
    return left === right;
  });
}

export class TutorialScene extends Scene {
  private readonly overlay: Overlay;
  private readonly canvas: HTMLCanvasElement;
  private readonly text: HTMLDivElement;
  private readonly blocklyWrapper: HTMLDivElement;
  private readonly blocklyHost: HTMLDivElement;
  private readonly carrotButton: HTMLButtonElement;
  private readonly play: PlayButton;
  private readonly stage: Stage;
  private readonly workspace: Blockly.WorkspaceSvg;

  private readonly hopDelay = new Delay();
  private readonly doneDelay = new Delay();
  private screens: TutorialScreen[] = [];
  private activeScreen: TutorialScreen | null = null;
  private program: Program = { kind: 'sequence', blockId: null, body: [] };
  private executing = false;
  private solved = false;
  private finished = false;
  private hopPlayed = false;

  private readonly onChange: (event: Blockly.Events.Abstract) => void;

  constructor(
    private readonly context: GameContext,
    private readonly tutorial: TutorialManifest,
    level: Level,
  ) {
    super();
    this.overlay = new Overlay(context.chrome.overlayHost, 'rc-tut-overlay');
    this.overlay.onBackdropClick = () => this.close();
    this.overlay.onOpened = () => {
      Blockly.svgResize(this.workspace);
      if (!this.hopPlayed) this.hopDelay.start(DEMO_HOP_DELAY_MS);
    };
    this.overlay.onClosed = () => {
      this.finished = true;
    };

    const card = clone('tpl-tutorial');
    this.canvas = el(card, '.rc-tut-canvas');
    this.text = el(card, '.rc-tut-text');
    this.blocklyWrapper = el(card, '.rc-tut-blockly-wrapper');
    this.blocklyHost = el(card, '.rc-tut-blockly');
    this.carrotButton = el(card, '.rc-tut-carrot');
    this.carrotButton.title = context.i18n.t('Continue Button');
    this.play = new PlayButton(card, context.i18n.t('Start Button'));
    const closeButton = el<HTMLButtonElement>(card, '.rc-x-button');
    closeButton.title = context.i18n.t('Skip Button Hover');
    closeButton.addEventListener('click', () => this.close());

    this.overlay.content.append(card);

    // No drop-in animation and no hexagons: the tutorial map is up at once.
    this.stage = new Stage({
      canvas: this.canvas,
      level,
      tiles: context.tiles,
      audio: context.audio,
      levelAnimations: false,
      hexagons: false,
      // The tutorial canvas sits on the purple card and paints no background of its own.
      background: null,
    });
    this.stage.bus.on((event) => this.onGameEvent(event));

    this.workspace = createWorkspace(this.blocklyHost, {
      toolbox: tutorial.toolboxXml,
      options: context.levels.workspaces.tutorial,
      // From the manifest: 1 for T1/T2, 0.7 for T3. T2's hat plus two blocks is 204 px wide at
      // scale 1, so the row fits the card's 346x182 workspace unclamped.
      scale: tutorial.workspaceScale,
    });

    this.onChange = (event) => {
      if (event.type === Blockly.Events.UI) return;
      this.program = workspaceToProgram(this.workspace);
      if (event.type === Blockly.Events.BLOCK_MOVE) this.checkPattern();
    };

    this.play.button.addEventListener('click', () => this.togglePlay());
    this.carrotButton.addEventListener('click', () => this.advance());
  }

  protected override onFocus(): void {
    clearAndSeed(this.workspace, this.tutorial.workspace);
    this.program = workspaceToProgram(this.workspace);
    this.workspace.addChangeListener(this.onChange);
    this.play.setExecuting(false);
    this.stage.fit();
    this.screens = [...this.tutorial.screens];
    this.advance();
    this.overlay.open();
  }

  protected override onBlur(): void {
    this.workspace.removeChangeListener(this.onChange);
  }

  override update(dtMs: number): void {
    this.overlay.update(dtMs);
    this.stage.update(dtMs);
    if (this.hopDelay.update(dtMs)) {
      this.hopPlayed = true;
      this.stage.demoHop(2);
    }
    if (this.doneDelay.update(dtMs)) this.close();
  }

  override render(): void {
    this.stage.render();
  }

  override isFinished(): boolean {
    return this.finished;
  }

  override dispose(): void {
    super.dispose();
    this.stage.dispose();
    this.workspace.dispose();
    this.overlay.dispose();
  }

  /** take the next screen off the front of the list. */
  private advance(): void {
    this.activeScreen = this.screens.shift() ?? null;
    if (this.activeScreen) this.showScreen(this.activeScreen);
  }

  /** the text, which control is visible, and the flyout's disabled blocks. */
  private showScreen(screen: TutorialScreen): void {
    this.text.innerHTML = this.context.i18n.fill(screen.textTemplate);
    setVisible(this.blocklyWrapper, screen.showBlocklyDiv);
    setVisible(this.carrotButton, !screen.showBlocklyDiv);
    setEnabledBlockTypes(this.workspace, screen.disableBlockTypes, false);
    setEnabledBlockTypes(this.workspace, screen.enableBlockTypes, true);
  }

  private checkPattern(): void {
    const pattern = this.activeScreen?.astMatchPattern;
    if (!pattern) return;
    if (patternEquals(programPattern(this.program), pattern)) this.advance();
  }

  private onGameEvent(event: GameEvent): void {
    if (event.type !== 'puzzleSolved') return;
    // The win jumps to the LAST screen, skipping whatever is still queued.
    this.solved = true;
    const done = this.tutorial.screens.at(-1);
    this.screens = [];
    this.activeScreen = done ?? null;
    if (done) this.showScreen(done);
    this.doneDelay.start(DONE_HOLD_MS);
  }

  private togglePlay(): void {
    if (this.solved) return;
    if (!this.executing && countBlocks(this.program) > 0) {
      this.executing = true;
      this.play.setExecuting(true);
      Blockly.hideChaff();
      this.stage.start(this.program);
      return;
    }
    this.executing = false;
    this.play.setExecuting(false);
    this.stage.stop();
  }

  /** the skip and the post-win close both just start the fly-out. */
  private close(): void {
    this.hopDelay.cancel();
    Blockly.hideChaff();
    this.overlay.close();
  }
}
