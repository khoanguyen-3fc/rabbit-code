/**
 * Authored levels, kept in the browser.
 *
 * A map file cannot carry a level's id, title, allowed blocks, target block count or sheet ids, so
 * the whole `Level` is stored rather than the map, and `exportTiled` runs only when a file is
 * asked for.
 *
 * Every read and write is guarded the same way the progress store is: `localStorage` throws on
 * access in some privacy modes and on write when the quota is full, and neither must lose the
 * level being edited.
 */

import { pos, type Level } from '../core/assets';

/** Bumping the suffix invalidates old records instead of trying to migrate them. */
const STORAGE_KEY = 'rabbit-code:levels:1';

/** Side of a new level, in cells. */
export const NEW_LEVEL_SIZE = 8;

interface LevelRecord {
  version: 1;
  levels: Level[];
}

function isLevel(value: unknown): value is Level {
  if (typeof value !== 'object' || value === null) return false;
  const level = value as Partial<Level>;
  return (
    typeof level.id === 'string' &&
    typeof level.width === 'number' &&
    typeof level.height === 'number' &&
    Array.isArray(level.tiles) &&
    Array.isArray(level.carrots) &&
    Array.isArray(level.props) &&
    typeof level.start === 'object' &&
    level.start !== null
  );
}

function isRecord(value: unknown): value is LevelRecord {
  if (typeof value !== 'object' || value === null) return false;
  const record = value as Partial<LevelRecord>;
  return record.version === 1 && Array.isArray(record.levels) && record.levels.every(isLevel);
}

/** Every stored level, oldest first. Empty when nothing is stored or storage is unreadable. */
export function readLevels(): Level[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) return [];
    const parsed: unknown = JSON.parse(raw);
    return isRecord(parsed) ? parsed.levels : [];
  } catch {
    return [];
  }
}

/** Replaces the whole list. Returns false when storage refused it, so the caller can say so. */
export function writeLevels(levels: readonly Level[]): boolean {
  const record: LevelRecord = { version: 1, levels: [...levels] };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    return true;
  } catch {
    return false;
  }
}

export function readLevel(id: string): Level | null {
  return readLevels().find((level) => level.id === id) ?? null;
}

/** Adds the level, or replaces the one already stored under its id. */
export function saveLevel(level: Level): boolean {
  const levels = readLevels();
  const at = levels.findIndex((stored) => stored.id === level.id);
  if (at === -1) levels.push(level);
  else levels[at] = level;
  return writeLevels(levels);
}

export function deleteLevel(id: string): boolean {
  return writeLevels(readLevels().filter((level) => level.id !== id));
}

/** `custom-1`, then the first suffix no stored level is using. */
export function nextLevelId(): string {
  const taken = new Set(readLevels().map((level) => level.id));
  for (let n = 1; ; n += 1) {
    const id = `custom-${n}`;
    if (!taken.has(id)) return id;
  }
}

/**
 * An empty level: no cubes and no carrots, with the player standing where the first cube will go.
 * The start is one layer above the ground, which is where an entity on a cube sits.
 */
export function newLevel(id: string): Level {
  return {
    id,
    title: id,
    width: NEW_LEVEL_SIZE,
    height: NEW_LEVEL_SIZE,
    tiles: [],
    carrots: [],
    start: { pos: pos(0, -1, 0), orientation: 'right' },
    goal: { kind: 'allCarrotsEaten' },
    props: [],
    allowedBlocks: [
      'logo17_for_loop',
      'logo17_move_forward',
      'logo17_turn_right',
      'logo17_turn_left',
    ],
    targetBlockCount: 0,
    spriteSheetIds: [],
  };
}
