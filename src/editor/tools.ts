/**
 * What a click does to the level.
 *
 * Every tool takes the level and a cell and returns a short line saying what happened, which the
 * status area reads out. Nothing here touches the DOM or the canvas.
 */

import { pos, turnRight, type GridPos, type Level } from '../core/assets';

/** The cube gid the editor paints. The tileset has seventeen; they differ only in their art. */
const CUBE_GID = 23;
/** The one water gid. Water is a cube the rabbit cannot stand on. */
const WATER_GID = 152;
/** The one carrot gid. */
const CARROT_GID = 67;

/** A cube sits on the ground layer; what stands on it is one layer above. */
const GROUND_Y = 0;

export type ToolName = 'cube' | 'water' | 'carrot' | 'start' | 'erase';

export const TOOLS: ReadonlyArray<{ name: ToolName; label: string; hint: string }> = [
  { name: 'cube', label: 'Cube', hint: 'Lay a cube the rabbit can stand on' },
  { name: 'water', label: 'Water', hint: 'Lay a water cube the rabbit cannot cross' },
  { name: 'carrot', label: 'Carrot', hint: 'Put a carrot on the cube under the pointer' },
  { name: 'start', label: 'Start', hint: 'Move the rabbit here, or click it again to turn it' },
  { name: 'erase', label: 'Erase', hint: 'Take away the carrot, or the cube when there is none' },
];

const sameCell = (a: GridPos, b: GridPos): boolean => a.x === b.x && a.z === b.z;

/** The cube at a cell, if there is one. Cubes live on the ground layer. */
function cubeAt(level: Level, cell: GridPos): Level['tiles'][number] | undefined {
  return level.tiles.find((tile) => tile.pos.x === cell.x && tile.pos.z === cell.z);
}

function carrotAt(level: Level, cell: GridPos): Level['carrots'][number] | undefined {
  return level.carrots.find((carrot) => sameCell(carrot.pos, cell));
}

/** Lays a cube, replacing whatever kind is already there. */
function layCube(
  level: Level,
  cell: GridPos,
  gid: number,
  type: 'passable' | 'unpassable',
): string {
  const existing = cubeAt(level, cell);
  if (existing) {
    if (existing.gid === gid) return 'Already that kind of cube';
    existing.gid = gid;
    existing.type = type;
    return `Changed the cube at ${cell.x}, ${cell.z}`;
  }
  level.tiles.push({ pos: pos(cell.x, GROUND_Y, cell.z), gid, type });
  return `Laid a cube at ${cell.x}, ${cell.z}`;
}

function placeCarrot(level: Level, cell: GridPos): string {
  if (!cubeAt(level, cell)) return 'A carrot needs a cube under it';
  if (carrotAt(level, cell)) return 'There is already a carrot here';
  level.carrots.push({ pos: pos(cell.x, cell.y, cell.z), gid: CARROT_GID });
  return `Put a carrot at ${cell.x}, ${cell.z}`;
}

/** Moves the start, or turns it a quarter when it is already on this cell. */
function placeStart(level: Level, cell: GridPos): string {
  if (sameCell(level.start.pos, cell)) {
    level.start.orientation = turnRight(level.start.orientation);
    return `The rabbit faces ${level.start.orientation}`;
  }
  if (!cubeAt(level, cell)) return 'The rabbit needs a cube to stand on';
  level.start.pos = pos(cell.x, cell.y, cell.z);
  return `Moved the rabbit to ${cell.x}, ${cell.z}`;
}

/** Takes the carrot first, so one tool clears a stack without clearing too much at once. */
function erase(level: Level, cell: GridPos): string {
  const carrot = carrotAt(level, cell);
  if (carrot) {
    level.carrots = level.carrots.filter((each) => each !== carrot);
    return `Took the carrot at ${cell.x}, ${cell.z}`;
  }
  const cube = cubeAt(level, cell);
  if (!cube) return 'Nothing here to take away';
  if (sameCell(level.start.pos, cell)) return 'The rabbit is standing there';
  level.tiles = level.tiles.filter((each) => each !== cube);
  return `Took the cube at ${cell.x}, ${cell.z}`;
}

/** Applies a tool in place and returns what to show in the status area. */
export function applyTool(tool: ToolName, level: Level, cell: GridPos): string {
  switch (tool) {
    case 'cube':
      return layCube(level, cell, CUBE_GID, 'passable');
    case 'water':
      return layCube(level, cell, WATER_GID, 'unpassable');
    case 'carrot':
      return placeCarrot(level, cell);
    case 'start':
      return placeStart(level, cell);
    case 'erase':
      return erase(level, cell);
  }
}
