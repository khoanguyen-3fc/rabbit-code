/**
 * One playable puzzle on one canvas: the engine `Puzzle`, its scene graph, the camera, the hexagon
 * burst, the program runner and the sound cues. Both the coding scene and the tutorial overlay use
 * it.
 *
 * The engine owns the player state machine and the scene graph owns the view, so this module is
 * also the bridge between them: `PlayerView` mirrors position, orientation and sprite state, and
 * runs the two 187.5 ms shadow/offset legs of a hop.
 */

import {
  clonePos,
  Emitter,
  equalPos,
  type EventBus,
  forwardCell,
  type GameEvent,
  type GridPos,
  lerp,
  type Level,
  type Orientation,
  type Program,
  type TilesFile,
} from '../core/assets';
import type { AudioPlayer } from '../core/audio';
import {
  CARROT_EAT_DELAY_MS,
  createRunner,
  JUMP_LEG_MS,
  JUMP_TOTAL_MS,
  type PlayerState,
  type ProgramRunner,
  Puzzle,
  type PuzzlePlayer,
} from '../engine';
import { easeIn, easeOut, HexagonBurst } from '../render/animations';
import { Camera, CanvasResolution, overlayHeightPx } from '../render/camera';
import {
  BACKGROUND_COLOUR,
  buildSceneForLevel,
  playLevelIn,
  playLevelOut,
  render as renderScene,
  type LevelAnimationOptions,
  type PlayerNode,
  type PuzzleNode,
} from '../render/renderer';
import { ActionSequence, CallbackAction, WaitAction, type Action } from '../render/scene-graph';

/** The jump's sprite y offset: sub-pixel, in blockTransform-local units. */
const HOP_OFFSET_UNITS = -0.15;
const SHADOW_SCALE_MIN = 0.6;

/** Mirrors the engine's `Player` onto the `PlayerNode` and owns the hop's view-only tweens. */
class PlayerView {
  private hopMs = -1;
  private lastState: PlayerState;
  private lastOrientation: Orientation;
  private lastPosition: GridPos | null = null;

  constructor(
    private readonly engine: PuzzlePlayer,
    private readonly node: PlayerNode,
    private readonly onHopStart: () => void,
  ) {
    this.lastState = engine.state;
    this.lastOrientation = engine.orientation;
  }

  /**
   * A hop that does not move the player: the level-in/out bracket hops and the tutorial demo hop.
   * It plays the same sprite, shadow and JUMP sound as a real hop.
   */
  startHop(): void {
    this.node.showSprite('jump');
    this.hopMs = 0;
    this.onHopStart();
  }

  /** Re-reads the engine state after a reset, without playing anything. */
  sync(): void {
    this.hopMs = -1;
    this.lastState = this.engine.state;
    this.lastOrientation = this.engine.orientation;
    // Force the copy: a reset can land on the cell we last mirrored while a level animation has
    // left the node's `y` somewhere else entirely.
    this.lastPosition = null;
    this.copyPosition();
  }

  update(dtMs: number): void {
    this.copyPosition();

    if (this.engine.orientation !== this.lastOrientation) {
      this.lastOrientation = this.engine.orientation;
      // the turn callback flips the orientation and restarts the idle frames.
      this.node.setOrientation(this.engine.orientation);
      this.node.showSprite('idle');
    }

    const state = this.engine.state;
    if (state === 'jump' && this.lastState !== 'jump') this.startHop();
    else if (state !== 'jump' && this.lastState === 'jump' && this.hopMs >= 0) this.endHop();
    this.lastState = state;

    this.advanceHop(dtMs);
  }

  /**
   * Mirror the engine's cell onto the node, but only when it actually changes. Writing every frame
   * would fight the level-in and level-out animations: those stagger each node with a `WaitAction`,
   * and during the player's wait nothing tweens its `y`, so an unconditional copy snapped the
   * player back to its resting height while every tile was still off-screen.
   */
  private copyPosition(): void {
    const from = this.engine.position;
    if (this.lastPosition && equalPos(this.lastPosition, from)) return;
    this.lastPosition = clonePos(from);
    this.node.position.x = from.x;
    this.node.position.y = from.y;
    this.node.position.z = from.z;
  }

  /** Two 187.5 ms legs, ease-out then ease-in, on the shadow scale and the sprite's y offset. */
  private advanceHop(dtMs: number): void {
    if (this.hopMs < 0) return;
    this.hopMs += dtMs;
    if (this.hopMs >= JUMP_TOTAL_MS) {
      this.endHop();
      return;
    }
    if (this.hopMs < JUMP_LEG_MS) {
      const t = easeOut(this.hopMs / JUMP_LEG_MS);
      this.node.shadowScale = lerp(1, SHADOW_SCALE_MIN, t);
      this.node.hopOffset = lerp(0, HOP_OFFSET_UNITS, t);
    } else {
      const t = easeIn((this.hopMs - JUMP_LEG_MS) / JUMP_LEG_MS);
      this.node.shadowScale = lerp(SHADOW_SCALE_MIN, 1, t);
      this.node.hopOffset = lerp(HOP_OFFSET_UNITS, 0, t);
    }
  }

  private endHop(): void {
    this.hopMs = -1;
    this.node.hopOffset = 0;
    this.node.shadowScale = 1;
    this.node.showSprite('idle');
  }
}

export interface StageOptions {
  canvas: HTMLCanvasElement;
  level: Level;
  tiles: TilesFile;
  audio: AudioPlayer;
  /** Level drop-in / drop-out; off inside a tutorial, which shows its map at once. */
  levelAnimations?: boolean;
  /** The decorative burst behind the puzzle; the coding scene only. */
  hexagons?: boolean;
  /** The block tray's Blockly host. Its rendered height is cut from the camera's viewport. */
  viewportOverlay?: HTMLElement | null;
  /**
   * Fill drawn before the scene. `null` leaves the canvas transparent, which is what the tutorial
   * card needs: its canvas sits on the purple card and must not paint over it.
   */
  background?: string | null;
}

export class Stage {
  readonly bus: EventBus = new Emitter<GameEvent>();
  readonly puzzle: Puzzle;
  readonly node: PuzzleNode;
  readonly camera = new Camera();
  readonly burst: HexagonBurst | null;

  private readonly ctx: CanvasRenderingContext2D;
  private readonly canvas: HTMLCanvasElement;
  private readonly resolution: CanvasResolution;
  private readonly view: PlayerView;
  private readonly audio: AudioPlayer;
  private readonly viewportOverlay: HTMLElement | null;
  private readonly background: string | null;
  private readonly levelAnimations: boolean;
  private runner: ProgramRunner | null = null;

  constructor(options: StageOptions) {
    const ctx = options.canvas.getContext('2d');
    if (!ctx) throw new Error('2D canvas context unavailable');
    this.ctx = ctx;
    this.canvas = options.canvas;
    this.audio = options.audio;
    this.viewportOverlay = options.viewportOverlay ?? null;
    this.background = options.background === undefined ? BACKGROUND_COLOUR : options.background;
    this.levelAnimations = options.levelAnimations ?? true;

    this.puzzle = new Puzzle(options.level, this.bus);
    this.node = buildSceneForLevel(options.level, { tiles: options.tiles, bus: this.bus });
    this.camera.add(this.node);
    this.burst =
      (options.hexagons ?? true)
        ? new HexagonBurst(this.bus, () => ({
            width: this.canvas.width,
            height: this.canvas.height,
            footerHeight: overlayHeightPx(this.canvas, this.viewportOverlay),
          }))
        : null;
    this.resolution = new CanvasResolution(this.canvas, this.bus);
    this.view = new PlayerView(this.puzzle.player, this.node.player, () => this.audio.play('JUMP'));

    this.bus.on((event) => this.onEvent(event));
  }

  get running(): boolean {
    return this.runner?.running ?? false;
  }

  get activeBlockId(): string | null {
    return this.runner?.activeBlockId ?? null;
  }

  get solved(): boolean {
    return this.puzzle.solved;
  }

  /** One frame: resolution, then the puzzle, then the runner, then the scene graph. */
  update(dtMs: number): void {
    this.resolution.update();
    this.puzzle.update(dtMs);
    this.view.update(dtMs);
    this.camera.update(dtMs);
    this.burst?.update(dtMs);
    this.runner?.step(dtMs);
  }

  render(): void {
    renderScene(this.ctx, this.node, this.camera, {
      behind: this.burst ? [this.burst] : [],
      background: this.background,
    });
  }

  /** fit the puzzle bound into the canvas minus the block tray. */
  fit(): void {
    const overlayPx = overlayHeightPx(this.canvas, this.viewportOverlay);
    this.camera.fit(this.node.bound, this.canvas.width, this.canvas.height - overlayPx);
  }

  /** Play: reset the puzzle, then run this program tree. */
  start(program: Program): void {
    this.stop();
    this.runner = createRunner(program, this.puzzle);
  }

  /** Stop / reset: drop the rest of the program and put the level back to its start state. */
  stop(): void {
    if (this.runner) {
      this.runner.stop();
      this.runner.dispose();
      this.runner = null;
    }
    this.puzzle.reset();
    this.node.reset();
    this.view.sync();
  }

  playIntro(): void {
    if (this.levelAnimations) playLevelIn(this.node, this.animationOptions());
  }

  /**
   * Hops in place, one after another: the tutorial's demo. They move nobody, so
   * they eat no carrot and trip no trigger; the engine only emits their hop events.
   */
  demoHop(count = 1): void {
    const hops: Action[] = [];
    for (let i = 0; i < count; i += 1) hops.push(this.hopInPlaceAction());
    this.node.actions.add(new ActionSequence(hops));
  }

  dispose(): void {
    this.runner?.dispose();
    this.runner = null;
    this.puzzle.dispose();
    this.bus.clear();
  }

  private onEvent(event: GameEvent): void {
    if (event.type === 'canvasResized') {
      this.fit();
      return;
    }
    if (event.type === 'playerJumpStart') {
      this.playCarrotSound(event.player.position, event.player.orientation);
      return;
    }
    // The level-out runs off the win event and emits `levelOutDone` when it ends.
    if (event.type === 'puzzleSolved' && this.levelAnimations) {
      playLevelOut(this.node, this.animationOptions());
    }
  }

  /**
   * CARROT fires 250 ms into the hop, when the carrot one cell ahead is eaten - 125 ms before the
   * landing. Scheduling it with the delay is the same audible moment.
   */
  private playCarrotSound(from: GridPos, orientation: Orientation): void {
    const cell = forwardCell(from, orientation);
    if (this.puzzle.carrots.some((c) => !c.eaten && equalPos(c.pos, cell))) {
      this.audio.play('CARROT', { delayMs: CARROT_EAT_DELAY_MS });
    }
  }

  /**
   * The engine emits the hop event (5) the hexagon burst listens for, the view plays the sprite,
   * shadow and JUMP sound, with `target == position`.
   */
  private hopInPlaceAction(): Action {
    return new ActionSequence([
      new CallbackAction(() => {
        this.puzzle.hopInPlace();
        this.view.startHop();
      }),
      new WaitAction(JUMP_TOTAL_MS),
    ]);
  }

  private animationOptions(): LevelAnimationOptions {
    return {
      hopInPlace: () => this.hopInPlaceAction(),
      playSound: (clip, delayMs) => this.audio.play(clip, { delayMs }),
      bus: this.bus,
    };
  }
}
