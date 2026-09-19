/**
 * Everything a scene needs and nothing that belongs to one scene: the DOM chrome, the loaded data
 * files, audio, i18n, saved progress, the shared coding workspace and the scene queue. The two
 * stores the context owns - messages and progress - are defined here too, since nothing else
 * constructs them.
 *
 * Boot order matters: `defineLogo17Blocks` resolves its icon URLs and tooltips once, at definition
 * time, so i18n must be loaded before it runs.
 */

import en from '../data/locales/en';
import {
  BLOCK_TYPES,
  type BlockType,
  type Level,
  type LevelManifest,
  type LevelsFile,
  loadAtlas,
  loadJson,
  loadLevels,
  loadTiles,
  preload,
  type TilesFile,
  type TutorialManifest,
} from '../core/assets';
import { AudioPlayer } from '../core/audio';
import { importTiled, type TiledMap } from '../engine';
import { applyPalette, createWorkspace, defineLogo17Blocks } from '../blocks/workspace';
import { SceneManager } from './scene';
import { Chrome, injectIconSprite } from './ui';

// Message lookup. English is compiled in as the base and the requested locale is overlaid on it,
// which covers both the locales that ship no `messages` table and one that fails to load. The other
// 87 sit in one lazy chunk, fetched only when `hl=` names one, so a default load carries none of
// them.
//
// Text direction is set once, on the game root, rather than embedded per string: that is what a DOM
// UI needs, and the canvas draws no text.

const DEFAULT_LOCALE = 'en';

/** Shape of one `data/i18n/*.json`; `messages` is absent for locales that only carry placeholders. */
interface LocaleFile {
  locale: string;
  dir?: string;
  messages?: Record<string, string>;
  /** Geo variants, e.g. `en` -> `"UK, AU"`. The base table wins; variants are not selected. */
  messageVariants?: Record<string, Record<string, string>>;
}

/** The inline block icons a tutorial text can carry. */
const IMAGE_TOKENS: ReadonlyArray<readonly [string, string]> = [
  ['[FORWARD_IMAGE]', 'hpsvg-tut_forward_block'],
  ['[ROTATE_IMAGE]', 'hpsvg-tut_turn_block'],
  ['[PLAY_IMAGE]', 'hpsvg-tut_play_block'],
  ['[LOOP_IMAGE]', 'hpsvg-tut_loop_block'],
  ['[RIBBON_IMAGE]', 'hpsvg-ribbon_unlocked'],
];

export interface I18n {
  readonly locale: string;
  readonly dir: 'ltr' | 'rtl';
  /** The translation, or the key itself when it is not in the table. */
  t(key: string): string;
  /** Resolves `{{Message Key}}` placeholders, then the `[..._IMAGE]` tokens, into HTML. */
  fill(template: string): string;
}

/** `hl=` from the hash, else the query, else English. */
function localeFromLocation(): string {
  const source = location.hash.length > 1 ? location.hash : location.search;
  return /[&?#]hl=([^&]+)/.exec(source)?.[1] ?? DEFAULT_LOCALE;
}

async function loadLocaleFile(locale: string): Promise<LocaleFile | null> {
  try {
    const { locales } = await import('../data/locales/rest');
    return (locales[locale] as LocaleFile | undefined) ?? null;
  } catch {
    // Offline or a failed chunk: English is already in hand, so the game still runs.
    return null;
  }
}

export async function loadI18n(locale: string = localeFromLocation()): Promise<I18n> {
  const base = en as LocaleFile;
  const requested = locale === DEFAULT_LOCALE ? null : await loadLocaleFile(locale);
  const messages: Record<string, string> = { ...base.messages, ...requested?.messages };
  const dir = requested?.dir ?? base.dir;

  const t = (key: string): string => messages[key] ?? key;

  return {
    locale: requested ? locale : DEFAULT_LOCALE,
    dir: dir === 'rtl' ? 'rtl' : 'ltr',
    t,
    fill(template: string): string {
      let text = template.replace(/\{\{([^{}]+)\}\}/g, (_match, key: string) => t(key));
      for (const [token, symbolId] of IMAGE_TOKENS) {
        text = text.replace(
          token,
          `<svg class="rc-inline-icon"><use href="#${symbolId}"></use></svg>`,
        );
      }
      return text;
    },
  };
}

// Unlocked levels and the best block count per level, as one versioned JSON record. Every read and
// write is guarded: `localStorage` throws on access in some privacy modes and on write when the
// quota is full, and neither must break the game.

export const LEVEL_COUNT = 6;

/** Bumping the suffix invalidates old records instead of trying to migrate them. */
const STORAGE_KEY = 'rabbit-code:progress:1';

/** `-1` = never solved, otherwise the fewest blocks ever used. */
const UNSOLVED = -1;

interface ProgressRecord {
  version: 1;
  scores: number[];
}

function defaultScores(): number[] {
  return new Array<number>(LEVEL_COUNT).fill(UNSOLVED);
}

function isProgressRecord(value: unknown): value is ProgressRecord {
  if (typeof value !== 'object' || value === null) return false;
  const record = value as Partial<ProgressRecord>;
  if (record.version !== 1 || !Array.isArray(record.scores)) return false;
  return record.scores.length === LEVEL_COUNT && record.scores.every((s) => typeof s === 'number');
}

function readScores(): number[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) return defaultScores();
    const parsed: unknown = JSON.parse(raw);
    return isProgressRecord(parsed) ? [...parsed.scores] : defaultScores();
  } catch {
    return defaultScores();
  }
}

export class ProgressStore {
  private readonly scores = readScores();

  /** Fewest blocks used to solve `level`, or `-1`. */
  score(level: number): number {
    return this.scores[level] ?? UNSOLVED;
  }

  /** the LAST solved index, so a map jump unlocks everything before it. */
  get highestSolved(): number {
    for (let i = this.scores.length - 1; i >= 0; i -= 1) {
      if (this.scores[i] > 0) return i;
    }
    return -1;
  }

  isUnlocked(level: number): boolean {
    return level <= this.highestSolved + 1;
  }

  /** The ribbon: solved at or below the level's target count. */
  hasRibbon(level: number, targetBlockCount: number): boolean {
    const score = this.score(level);
    return score > 0 && score <= targetBlockCount;
  }

  /** keeps the minimum per level, then writes the whole record. */
  recordSolve(level: number, blockCount: number): void {
    if (level < 0 || level >= LEVEL_COUNT) return;
    const previous = this.scores[level];
    if (previous === UNSOLVED || blockCount < previous) this.scores[level] = blockCount;
    const record: ProgressRecord = { version: 1, scores: this.scores };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    } catch {
      // Full quota or a storage-less context: the in-memory progress still holds for this session.
    }
  }
}

export interface GameContext {
  readonly chrome: Chrome;
  readonly audio: AudioPlayer;
  readonly i18n: I18n;
  readonly levels: LevelsFile;
  readonly tiles: TilesFile;
  readonly progress: ProgressStore;
  /** The one coding workspace, injected once and re-seeded per level. */
  readonly workspace: Blockly.WorkspaceSvg;
  readonly scenes: SceneManager;
}

/**
 * The loading-screen sheet, loading-sprite.svg. It carries the CTA sprites and the loading
 * screen's carrot and letters, so it loads at boot rather than in LoadingScene - those two screens
 * are what would otherwise be blank while it arrives.
 */
const LOADING_SCREEN_SHEET_INDEX = 0;

export async function bootContext(root: HTMLElement): Promise<GameContext> {
  const [, , tiles, levels, i18n] = await Promise.all([
    injectIconSprite(root),
    loadAtlas(),
    loadTiles(),
    loadLevels(),
    loadI18n(),
    preload([LOADING_SCREEN_SHEET_INDEX]),
  ]);

  // The block definitions read their category colors out of the palette, so it is loaded first.
  applyPalette(levels.colours);
  defineLogo17Blocks(i18n.t, levels.colours);
  root.dir = i18n.dir;
  document.documentElement.lang = i18n.locale;

  const chrome = new Chrome(root, {
    startButton: i18n.t('Start Button'),
    levelMap: i18n.t('Level Map Hover'),
    menuButton: i18n.t('Menu button Hover'),
    search: i18n.t('Search - Icon'),
    share: i18n.t('Share'),
  });

  const workspace = createWorkspace(chrome.blocklyHost, {
    // Levels 4 to 6 share this set, and it is also the one the title screen shows.
    toolbox: levels.levels[3].toolboxXml,
    options: levels.workspaces.coding,
  });

  return {
    chrome,
    audio: new AudioPlayer(),
    i18n,
    levels,
    tiles,
    progress: new ProgressStore(),
    workspace,
    scenes: new SceneManager(),
  };
}

function isBlockType(type: string): type is BlockType {
  return (BLOCK_TYPES as readonly string[]).includes(type);
}

/** The toolbox's block types, which is what `Level.allowedBlocks` records. */
function allowedBlocks(toolboxBlocks: ReadonlyArray<{ type: string }>): BlockType[] {
  return toolboxBlocks.map((block) => block.type).filter(isBlockType);
}

/** Fetches a Tiled map and converts it to a `Level`. */
export async function loadLevelForManifest(
  manifest: LevelManifest,
  tiles: TilesFile,
): Promise<Level> {
  const map = await loadJson<TiledMap>(manifest.mapFile);
  return importTiled(map, tiles, {
    id: manifest.id,
    allowedBlocks: allowedBlocks(manifest.toolboxBlocks),
    targetBlockCount: manifest.targetBlockCount,
    spriteSheetIds: manifest.spriteSheetIds,
  });
}

export async function loadTutorialLevel(
  tutorial: TutorialManifest,
  tiles: TilesFile,
): Promise<Level> {
  const map = await loadJson<TiledMap>(tutorial.mapFile);
  return importTiled(map, tiles, {
    id: tutorial.id,
    allowedBlocks: allowedBlocks(tutorial.toolboxBlocks),
  });
}
