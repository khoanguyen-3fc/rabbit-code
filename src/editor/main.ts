/**
 * Editor entry point: a list of the levels this browser holds, and an editing view for one of them.
 *
 * The two views swap inside `#app`. Neither uses the game's chrome - the editor needs a canvas and
 * some controls, not the block tray - but both clone their markup from the templates in
 * editor.html the same way the game does.
 */

import '../styles/editor.css';
import {
  loadAtlas,
  loadTiles,
  preload,
  type GridPos,
  type Level,
  type TilesFile,
} from '../core/assets';
import { clone, el } from '../game/ui';
import { deleteLevel, newLevel, nextLevelId, readLevels, saveLevel } from './storage';
import { exportTiled } from '../engine';
import { applyTool, TOOLS, type ToolName } from './tools';
import { EditorView } from './view';

/** Hands the browser a file. The object URL is released once the click has been taken. */
function download(name: string, text: string): void {
  const url = URL.createObjectURL(new Blob([text], { type: 'application/json' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  link.click();
  URL.revokeObjectURL(url);
}

function showList(root: HTMLElement, tiles: TilesFile): void {
  root.replaceChildren();
  const view = clone('tpl-ed-list');
  const rows = el<HTMLUListElement>(view, '.rc-ed-rows');
  const empty = el<HTMLElement>(view, '.rc-ed-empty');

  const levels = readLevels();
  empty.hidden = levels.length > 0;

  for (const level of levels) {
    const row = clone('tpl-ed-row');
    el(row, '.rc-ed-name').textContent = level.title;
    el(row, '.rc-ed-size').textContent = `${level.width} by ${level.height}`;

    const play = el<HTMLButtonElement>(row, '.rc-ed-play');
    play.setAttribute('aria-label', `Play ${level.title}`);
    // Relative, so it still resolves when the game is deployed under a sub-path.
    play.addEventListener('click', () => {
      window.location.href = `index.html?custom=${encodeURIComponent(level.id)}`;
    });

    const edit = el<HTMLButtonElement>(row, '.rc-ed-edit');
    edit.setAttribute('aria-label', `Edit ${level.title}`);
    edit.addEventListener('click', () => showEditor(root, tiles, level));

    const save = el<HTMLButtonElement>(row, '.rc-ed-export');
    save.setAttribute('aria-label', `Export ${level.title}`);
    save.addEventListener('click', () => {
      try {
        download(`${level.id}.json`, JSON.stringify(exportTiled(level, tiles), null, 2));
      } catch (error) {
        alert(error instanceof Error ? error.message : 'That level cannot be exported');
      }
    });

    const remove = el<HTMLButtonElement>(row, '.rc-ed-delete');
    remove.setAttribute('aria-label', `Delete ${level.title}`);
    remove.addEventListener('click', () => {
      if (!confirm(`Delete ${level.title}?`)) return;
      deleteLevel(level.id);
      showList(root, tiles);
    });

    rows.append(row);
  }

  el<HTMLButtonElement>(view, '.rc-ed-new').addEventListener('click', () => {
    const level = newLevel(nextLevelId());
    saveLevel(level);
    showEditor(root, tiles, level);
  });

  root.append(view);
}

function showEditor(root: HTMLElement, tiles: TilesFile, level: Level): void {
  root.replaceChildren();
  const view = clone('tpl-ed-edit');
  const canvas = el<HTMLCanvasElement>(view, '.rc-ed-canvas');
  const status = el<HTMLElement>(view, '.rc-ed-status');
  const title = el<HTMLInputElement>(view, '.rc-ed-title');

  title.value = level.title;
  title.addEventListener('input', () => {
    level.title = title.value;
    saveLevel(level);
  });

  el<HTMLButtonElement>(view, '.rc-ed-back').addEventListener('click', () => {
    saveLevel(level);
    showList(root, tiles);
  });

  let tool: ToolName = 'cube';
  const tools = el<HTMLElement>(view, '.rc-ed-tools');
  const buttons = new Map<ToolName, HTMLButtonElement>();
  for (const entry of TOOLS) {
    const button = el<HTMLButtonElement>(clone('tpl-ed-tool'), '.rc-ed-tool');
    button.textContent = entry.label;
    button.title = entry.hint;
    button.addEventListener('click', () => {
      tool = entry.name;
      for (const [name, each] of buttons) {
        each.setAttribute('aria-checked', String(name === tool));
      }
      status.textContent = entry.hint;
    });
    buttons.set(entry.name, button);
    tools.append(button);
  }
  buttons.get(tool)?.setAttribute('aria-checked', 'true');

  root.append(view);

  // The canvas has no layout box until it is in the document, and its size is what the view fits.
  const editorView = new EditorView(canvas, tiles);
  const counts = (): string => `${level.tiles.length} cubes, ${level.carrots.length} carrots`;
  /** The cell the pointer is over, drawn picked out of the grid. */
  let hover: GridPos | null = null;
  editorView.draw(level, hover);
  status.textContent = `${level.title}: ${counts()}`;

  window.addEventListener('resize', () => {
    editorView.draw(level, hover);
  });

  /** A drag lays a run of cubes; each cell is applied once. */
  let painting = false;
  let lastCell = '';

  const paint = (cell: GridPos): void => {
    const key = `${cell.x},${cell.z}`;
    if (key === lastCell) return;
    lastCell = key;
    const said = applyTool(tool, level, cell);
    saveLevel(level);
    status.textContent = `${said}. ${counts()}`;
  };

  canvas.addEventListener('pointerdown', (event) => {
    const cell = editorView.cellAt(event, level);
    painting = true;
    lastCell = '';
    canvas.setPointerCapture(event.pointerId);
    if (cell === null) return;
    hover = cell;
    paint(cell);
    editorView.draw(level, hover);
  });

  canvas.addEventListener('pointermove', (event) => {
    const cell = editorView.cellAt(event, level);
    const moved = (cell?.x ?? -1) !== (hover?.x ?? -1) || (cell?.z ?? -1) !== (hover?.z ?? -1);
    if (painting && cell !== null) paint(cell);
    // Redrawing rebuilds the scene, so it happens when the cell changes rather than every move.
    if (!moved && !painting) return;
    hover = cell;
    editorView.draw(level, hover);
  });

  canvas.addEventListener('pointerleave', () => {
    if (hover === null) return;
    hover = null;
    editorView.draw(level, hover);
  });

  for (const type of ['pointerup', 'pointercancel'] as const) {
    canvas.addEventListener(type, () => {
      painting = false;
    });
  }
}

const root = document.getElementById('app');
if (root === null) throw new Error('editor.html is missing #app');

/**
 * `shared-sprite.svg`. Every gid the editor can place resolves to it.
 *
 * Both of these are needed before anything draws: the atlas turns a sprite key into a rect, and a
 * sprite skips its draw until its sheet is decoded.
 */
const SHARED_SHEET_INDEX = 1;

const [tiles] = await Promise.all([loadTiles(), loadAtlas(), preload([SHARED_SHEET_INDEX])]);
showList(root, tiles);
