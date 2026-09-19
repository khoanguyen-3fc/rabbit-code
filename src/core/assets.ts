/**
 * The domain model, and the typed loaders that produce it.
 *
 * The shapes below are shared by the renderer, the engine, the block bridge and the scenes. The
 * data itself is compiled in from src/data/ rather than fetched, so there is no file to load. The
 * types cover only the fields that are read.
 */

// ===========================================================================
// Domain model
// ===========================================================================

// ---------------------------------------------------------------------------
// Grid
// ---------------------------------------------------------------------------

/**
 * A position in grid space: `x` is the column, `z` the row, `y` the layer height.
 * `y` grows DOWNWARD, so one level up is `y - 1`. Fractions are fine; the player's
 * position is lerped between cells during a hop.
 */
export interface GridPos {
  x: number;
  y: number;
  z: number;
}

export function pos(x: number, y: number, z: number): GridPos {
  return { x, y, z };
}

export function clonePos(p: GridPos): GridPos {
  return { x: p.x, y: p.y, z: p.z };
}

export function addPos(a: GridPos, b: GridPos): GridPos {
  return { x: a.x + b.x, y: a.y + b.y, z: a.z + b.z };
}

export function equalPos(a: GridPos, b: GridPos): boolean {
  return a.x === b.x && a.y === b.y && a.z === b.z;
}

export function distancePos(a: GridPos, b: GridPos): number {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const dz = a.z - b.z;
  return Math.hypot(dx, dy, dz);
}

/** Key of the tile grid map; each component is rounded. */
export function gridKey(p: GridPos): string {
  return `${Math.round(p.x)}:${Math.round(p.y)}:${Math.round(p.z)}`;
}

// ---------------------------------------------------------------------------
// Orientation
// ---------------------------------------------------------------------------

export type Orientation = 'left' | 'up' | 'down' | 'right';

/**
 * Facing -> grid delta. On screen: right = down-right, left = up-left,
 * up = up-right, down = down-left.
 */
export const ORIENTATION_DELTA: Readonly<Record<Orientation, GridPos>> = {
  left: { x: -1, y: 0, z: 0 },
  up: { x: 0, y: 0, z: -1 },
  down: { x: 0, y: 0, z: 1 },
  right: { x: 1, y: 0, z: 0 },
};

/** One quarter turn anticlockwise. */
const TURN_LEFT: Readonly<Record<Orientation, Orientation>> = {
  left: 'down',
  up: 'left',
  right: 'up',
  down: 'right',
};

/** One quarter turn clockwise. */
const TURN_RIGHT: Readonly<Record<Orientation, Orientation>> = {
  left: 'up',
  up: 'right',
  right: 'down',
  down: 'left',
};

export function turnLeft(o: Orientation): Orientation {
  return TURN_LEFT[o];
}

export function turnRight(o: Orientation): Orientation {
  return TURN_RIGHT[o];
}

/** The cell one step ahead, same height. */
export function forwardCell(p: GridPos, o: Orientation): GridPos {
  return addPos(p, ORIENTATION_DELTA[o]);
}

// ---------------------------------------------------------------------------
// Tiles
// ---------------------------------------------------------------------------

/**
 * Tile type of a gid. A gid with no type is a plain decor prop,
 * which the runtime calls `"prop"`.
 */
type TileType = 'passable' | 'unpassable' | 'carrot' | 'player' | 'triggerable' | 'cloud';

/** `null` = untyped decor prop. */
export type GidType = TileType | null;

/** Type of a prop instance: the gid's type, or `"prop"` when the gid has none. */
export type PropType = TileType | 'prop';

/** The two cube types a tile layer may place. */
export type SolidTileType = 'passable' | 'unpassable';

// ---------------------------------------------------------------------------
// Level - the authored level format.
// Tiled import/export converts to and from it; it is not the Tiled schema.
// ---------------------------------------------------------------------------

/** One cube cell. Its top face is at `y - 1`; an entity standing on it has `y - 1`. */
export interface LevelTile {
  pos: GridPos;
  /** Tileset gid; joins the tile table. */
  gid: number;
  type: SolidTileType;
}

/** A carrot sits at standing height, one level above the cube that carries it. */
interface LevelCarrot {
  pos: GridPos;
  gid: number;
}

interface LevelStart {
  /** Standing height, i.e. the floor cube's `y` minus 1. */
  pos: GridPos;
  orientation: Orientation;
}

/** Win condition. There is exactly one: every carrot eaten. */
interface LevelGoal {
  kind: 'allCarrotsEaten';
}

/** Trigger fields of a `triggerable` prop. Cells are at standing height. */
export interface PropTrigger {
  enterTrigger: GridPos | null;
  exitTrigger: GridPos | null;
  reverseTrigger: GridPos | null;
  firstVisible: boolean;
  retriggerable: boolean;
  /** Frame index where the forward animation ends and the loop begins; `null` = no loop part. */
  loopAfterFrame: number | null;
}

export interface LevelProp {
  /** Unique inside its level. */
  id: number;
  gid: number;
  /** Bottom-left of the sprite, in grid units. */
  position: GridPos;
  /** Drawn size in sprite pixels; overrides the atlas size of the gid's frames. */
  size: { width: number; height: number };
  mirrored: boolean;
  /** Overrides the prop's center for the depth sort only. */
  objectAnchor: GridPos | null;
  /** Only meaningful when the gid's type is `triggerable`. */
  trigger: PropTrigger | null;
}

export interface Level {
  /** Manifest id, e.g. `"L1"`. */
  id: string;
  title: string;
  /** Map size in cells. */
  width: number;
  height: number;
  tiles: LevelTile[];
  carrots: LevelCarrot[];
  start: LevelStart;
  goal: LevelGoal;
  props: LevelProp[];
  /** Block types the toolbox offers. */
  allowedBlocks: readonly BlockType[];
  /** Ribbon threshold only: a solve of `<= targetBlockCount` blocks earns the ribbon. */
  targetBlockCount: number;
  /** Sheets to preload and pre-rasterize; indices into `SheetsFile.sheets`. */
  spriteSheetIds: readonly number[];
}

// ---------------------------------------------------------------------------
// Program (AST)
// ---------------------------------------------------------------------------

/** The five Blockly block types. */
export type BlockType =
  | 'logo17_run_code'
  | 'logo17_for_loop'
  | 'logo17_move_forward'
  | 'logo17_turn_left'
  | 'logo17_turn_right';

export const BLOCK_TYPES: readonly BlockType[] = [
  'logo17_run_code',
  'logo17_for_loop',
  'logo17_move_forward',
  'logo17_turn_left',
  'logo17_turn_right',
];

interface ProgramNodeBase {
  /** Blockly block id, for the run highlight. Null on the synthetic root. */
  blockId: string | null;
}

/** The hat's stack, and a loop body. */
interface SequenceNode extends ProgramNodeBase {
  kind: 'sequence';
  body: ProgramNode[];
}

interface RepeatNode extends ProgramNodeBase {
  kind: 'repeat';
  /** `TIMES` input value; a cleared field means 0 iterations. */
  count: number;
  body: ProgramNode[];
}

interface MoveForwardNode extends ProgramNodeBase {
  kind: 'moveForward';
}

interface TurnLeftNode extends ProgramNodeBase {
  kind: 'turnLeft';
}

interface TurnRightNode extends ProgramNodeBase {
  kind: 'turnRight';
}

export type ProgramNode =
  | SequenceNode
  | RepeatNode
  | MoveForwardNode
  | TurnLeftNode
  | TurnRightNode;

/** A whole program: the sequence hanging off the hat block. */
export type Program = SequenceNode;

/**
 * Score of a program: every node except the root sequence, a repeat counting as one
 * (the number field is not counted).
 */
export function countBlocks(program: Program): number {
  let n = 0;
  const walk = (nodes: readonly ProgramNode[]): void => {
    for (const node of nodes) {
      n += 1;
      if (node.kind === 'sequence' || node.kind === 'repeat') walk(node.body);
    }
  };
  walk(program.body);
  return n;
}

// ---------------------------------------------------------------------------
// Events
// ---------------------------------------------------------------------------

/** What the event 3 / 4 payload is read for. The Player satisfies it structurally. */
export interface PlayerSnapshot {
  readonly position: GridPos;
  readonly orientation: Orientation;
}

/** The numeric event bus ids, one variant each. */
export type GameEvent =
  /** 1: every carrot eaten. */
  | { type: 'puzzleSolved' }
  /** 2: puzzle reset. */
  | { type: 'puzzleReset' }
  /** 3: end of a hop that moved the player. */
  | { type: 'playerLanded'; player: PlayerSnapshot }
  /** 4: start of a hop that moves the player. */
  | { type: 'playerJumpStart'; player: PlayerSnapshot }
  /** 5: first hop after reset, and the end of every hop, moving or not. */
  | { type: 'playerHop' }
  /** 6: level-in animation finished. */
  | { type: 'levelInDone' }
  /** 7: level-out animation finished. */
  | { type: 'levelOutDone' }
  /** 8: canvas client size changed. */
  | { type: 'canvasResized' };

type Listener<T> = (event: T) => void;

/** Listeners run synchronously in registration order. */
export class Emitter<T> {
  private readonly listeners: Listener<T>[] = [];

  /** Returns an unsubscribe function. */
  on(fn: Listener<T>): () => void {
    this.listeners.push(fn);
    return () => this.off(fn);
  }

  off(fn: Listener<T>): void {
    const i = this.listeners.indexOf(fn);
    if (i >= 0) this.listeners.splice(i, 1);
  }

  /** Dispatches over a copy, so a listener may unsubscribe itself or others while running. */
  emit(event: T): void {
    for (const fn of this.listeners.slice()) fn(event);
  }

  clear(): void {
    this.listeners.length = 0;
  }

  get size(): number {
    return this.listeners.length;
  }
}

/** One bus per scene. */
export type EventBus = Emitter<GameEvent>;

/** Linear interpolation; the tween legs and the hop offsets both use it. */
export function lerp(from: number, to: number, t: number): number {
  return from + (to - from) * t;
}

// ===========================================================================
// Loaders and the in-memory cache, for the generated data files and the SVG sprite sheets.
// ===========================================================================

// ---------------------------------------------------------------------------
// Sprite atlas
// ---------------------------------------------------------------------------

/** One atlas entry: a rect in one vertical-strip SVG sheet. `w`/`h` may be fractional. */
export interface SpriteRect {
  sheet: string;
  sheetIndex: number;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface AtlasFile {
  sprites: Record<string, SpriteRect>;
}

// ---------------------------------------------------------------------------
// Sprite sheets
// ---------------------------------------------------------------------------

interface SheetRef {
  index: number;
  filename: string;
  note?: string;
}

/** Per-map sheet usage. The `preload*` fields are absent on tutorials. */
interface SheetMapUsage {
  file: string;
  preloadSheetIndices?: number[];
  preloadSheets?: string[];
  usedSheetIndices: number[];
  usedSheets: string[];
  gids: number[];
  unknownGids: number[];
}

export interface SheetsFile {
  sheets: SheetRef[];
  levels: SheetMapUsage[];
  tutorials: SheetMapUsage[];
}

// ---------------------------------------------------------------------------
// Tile definitions
// ---------------------------------------------------------------------------

export interface TileDef {
  /** Join key: the tile-layer value, or `object.gid & 0x0FFFFFFF`. */
  gid: number;
  tilesetId: number;
  type: GidType;
  /** Player start facing; present on gids 7-10 only. */
  orientation?: Orientation;
  image: string;
  imageDir: string;
  imageWidth: number;
  imageHeight: number;
  frameCount: number;
  /** Atlas keys in animation order; resolve each with `getSprite`. */
  frames: string[];
}

export interface TilesFile {
  gidMapping: {
    firstgid: number;
    typeEnum: GidType[];
    tilesetTypeEnum: string[];
  };
  tiles: TileDef[];
}

// ---------------------------------------------------------------------------
// The authored level manifest
// ---------------------------------------------------------------------------

export interface BlocklyColourGroup {
  primary: string;
  secondary: string;
  tertiary: string;
  turn?: string;
  turnSecondary?: string;
}

/** 37 groups: 10 block categories plus flat UI colors and opacities. */
export type BlocklyColourValue = BlocklyColourGroup | string | number;

export interface BlocklyWorkspaceOptions {
  comments: boolean;
  disable: boolean;
  collapse: boolean;
  media: string;
  hasSounds: boolean;
  readOnly: boolean;
  rtl: boolean;
  scrollbars: boolean;
  /** Toolbox XML; the tutorial entry is the template `{{spec.toolboxXml}}`. */
  toolbox: string;
  trashcan: boolean;
  horizontalLayout: boolean;
  toolboxPosition: string;
  sounds: boolean;
  grid: { spacing: number; length: number; colour: string; snap: boolean };
  colours: Record<string, string | number>;
  /** Tutorial values are the template `{{spec.workspaceScale}}`. */
  zoom: {
    startScale: number | string;
    maxScale: number | string;
    minScale: number | string;
  };
}

interface ToolboxBlock {
  type: string;
  id?: string;
  /** Shadow presets per input, e.g. `TIMES: { type: "math_whole_number", NUM: 4 }`. */
  shadows?: Record<string, { type: string; NUM: number }>;
}

export interface ManifestWorkspace {
  startBlockId: string;
  deletable: boolean;
  movable: boolean;
  x: number;
  y: number;
  /** Block types pre-connected under the hat (tutorial 3 only). */
  preplacedNext: string[];
}

type IntroOverlay =
  | { kind: 'tutorial'; tutorialIndex: number }
  | { kind: 'progressMap'; autoHideMs: number };

export interface LevelManifest {
  /** `0..5`, or `null` for a custom level. */
  puzzleIndex: number | null;
  id: string;
  /** Relative to the asset base, e.g. `"L1.json"`. */
  mapFile: string;
  /** Ribbon threshold only. */
  targetBlockCount: number;
  spriteSheetIds: number[];
  /** Duplicate of the filenames; safe to delete once nothing reads it. */
  spriteSheets: string[];
  toolboxXml: string;
  toolboxBlocks: ToolboxBlock[];
  workspace: ManifestWorkspace;
  introOverlay: IntroOverlay | null;
  blocklyFooterHeightPx: number;
}

/**
 * A block-type list the workspace must match, nested for a loop body: T3's pattern is
 * `["logo17_run_code", ["logo17_for_loop", "logo17_move_forward"]]`.
 */
export type AstMatchPattern = readonly (string | AstMatchPattern)[];

export interface TutorialScreen {
  /** HTML with `{{Message Key}}` placeholders. */
  textTemplate: string;
  textKeys: string[];
  showBlocklyDiv: boolean;
  blockPickupPredicate: string[] | null;
  astMatchPattern: AstMatchPattern | null;
  disableBlockTypes: string[];
  enableBlockTypes: string[];
}

export interface TutorialManifest {
  tutorialIndex: number;
  id: string;
  mapFile: string;
  forPuzzleIndex: number;
  workspaceScale: number;
  workspaceXml: string;
  workspace: ManifestWorkspace;
  toolboxXml: string;
  toolboxBlocks: ToolboxBlock[];
  screens: TutorialScreen[];
}

export interface LevelsFile {
  colours: Record<string, BlocklyColourValue>;
  workspaces: { coding: BlocklyWorkspaceOptions; tutorial: BlocklyWorkspaceOptions };
  levels: LevelManifest[];
  tutorials: TutorialManifest[];
}

// ---------------------------------------------------------------------------
// Audio manifest
// ---------------------------------------------------------------------------

export type ClipName = 'BLOCKS_IN' | 'BLOCKS_OUT' | 'CARROT' | 'JUMP' | 'MUSIC';

interface AudioPlayCall {
  delayMs: number | null;
  loop: boolean;
}

/** Offsets into the single sounds file. */
export interface AudioClip {
  name: ClipName;
  startMs: number;
  durationMs: number;
  endMs: number;
  loop: boolean;
  playCalls: AudioPlayCall[];
}

export interface AudioFile {
  file: {
    basePath: string;
    baseName: string;
    formats: string[];
  };
  clips: AudioClip[];
}

// ---------------------------------------------------------------------------
// Loading and caching
// ---------------------------------------------------------------------------

/** Compiled in from src/data, not fetched. */
import {
  atlas as atlasData,
  audio as audioData,
  levels as levelsData,
  sheets as sheetsData,
  tiles as tilesData,
} from '../data/derived';

/**
 * Every asset lives under one directory. `BASE_URL` makes a sub-path build work
 * (`vite build --base=/rabbit-code/`), and this is the only place the deploy path is read.
 */
const basePath = `${import.meta.env.BASE_URL}logos/2017/logo17/`;

/** Absolute URL of an asset, e.g. `assetUrl('L1.json')`. */
export function assetUrl(relativePath: string): string {
  return basePath + relativePath;
}

const jsonCache = new Map<string, Promise<unknown>>();

/**
 * Fetch and cache a JSON asset by its name under the asset base, e.g. `'L1.json'`.
 * Concurrent calls for one path share a single request.
 */
export function loadJson<T>(relativePath: string): Promise<T> {
  const url = assetUrl(relativePath);
  const cached = jsonCache.get(url);
  if (cached !== undefined) return cached as Promise<T>;
  const request = fetch(url).then((response) => {
    if (!response.ok) throw new Error(`asset ${url}: HTTP ${response.status}`);
    return response.json() as Promise<unknown>;
  });
  jsonCache.set(url, request);
  return request as Promise<T>;
}

let atlasFile: AtlasFile | null = null;
let sheetsFile: SheetsFile | null = null;

export function loadAtlas(): Promise<AtlasFile> {
  atlasFile = atlasData;
  return Promise.resolve(atlasFile);
}

function loadSheets(): Promise<SheetsFile> {
  sheetsFile = sheetsData;
  return Promise.resolve(sheetsFile);
}

export function loadTiles(): Promise<TilesFile> {
  return Promise.resolve(tilesData);
}

export function loadLevels(): Promise<LevelsFile> {
  return Promise.resolve(levelsData);
}

export function loadAudioManifest(): Promise<AudioFile> {
  return Promise.resolve(audioData);
}

/** Atlas rect of a sprite key; `undefined` before `loadAtlas` resolves or for an unknown key. */
export function getSprite(name: string): SpriteRect | undefined {
  return atlasFile ? atlasFile.sprites[name] : undefined;
}

/** All sprite keys. Empty before `loadAtlas` resolves. */
export function spriteNames(): string[] {
  return atlasFile ? Object.keys(atlasFile.sprites) : [];
}

// ---- SVG sheets ----

const sheetRequests = new Map<number, Promise<HTMLImageElement>>();
const sheetImages = new Map<number, HTMLImageElement>();

function decodeImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`sheet ${url} failed to load`));
    image.src = url;
  });
}

/**
 * Every sheet a map actually draws from, keyed by map file name.
 *
 * Do not use the level's `spriteSheetIds`. That list is incomplete: L4 draws from sheet 10 and L5
 * from sheet 2 without listing either. A missing sheet only skips the draw, so props would appear
 * or not depending on which levels had been played. Scanning the map makes it deterministic.
 */
export async function usedSheetIndices(mapFile: string): Promise<number[]> {
  const file = await loadSheets();
  const name = mapFile.split('/').pop();
  const usage = [...file.levels, ...file.tutorials].find((m) => m.file === name);
  return usage ? usage.usedSheetIndices : [];
}

function sheetIndexOf(file: SheetsFile, filename: string): number {
  const entry = file.sheets.find((s) => s.filename === filename);
  if (!entry) throw new Error(`unknown sprite sheet "${filename}"`);
  return entry.index;
}

/**
 * Load and decode one SVG sheet by its index in `SheetsFile.sheets`. Cached; concurrent calls
 * share one request. Sheets are drawn to offscreen rasters, never straight to the main canvas.
 */
function loadSheet(index: number): Promise<HTMLImageElement> {
  const pending = sheetRequests.get(index);
  if (pending !== undefined) return pending;
  const request = loadSheets()
    .then((file) => {
      const entry = file.sheets.find((s) => s.index === index);
      if (!entry) throw new Error(`unknown sprite sheet index ${index}`);
      return decodeImage(assetUrl(entry.filename));
    })
    .then((image) => {
      sheetImages.set(index, image);
      return image;
    });
  sheetRequests.set(index, request);
  return request;
}

/** The decoded sheet, or `undefined` while it is still loading or after `unloadSheet`. */
export function getSheet(index: number): HTMLImageElement | undefined {
  return sheetImages.get(index);
}

/** Drop a decoded sheet once every sprite on it is rasterized. */
export function unloadSheet(index: number): void {
  sheetImages.delete(index);
  sheetRequests.delete(index);
}

/** Resolves when every named sheet - index or filename - is decoded. */
export async function preload(sheets: readonly (number | string)[]): Promise<void> {
  const file = await loadSheets();
  const indices = sheets.map((s) => (typeof s === 'number' ? s : sheetIndexOf(file, s)));
  await Promise.all(indices.map(loadSheet));
}

// ---------------------------------------------------------------------------
// Tile table helpers
// ---------------------------------------------------------------------------

/** gid -> tile definition; the engine and the renderer both need this lookup. */
export function gidTable(tiles: TilesFile): Map<number, TileDef> {
  return new Map(tiles.tiles.map((tile) => [tile.gid, tile]));
}
