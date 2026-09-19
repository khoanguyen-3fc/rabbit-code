/**
 * Editor entry point: a list of the levels this browser holds, and an editing view for one of them.
 *
 * The two views swap inside `#app`. Neither uses the game's chrome - the editor needs a canvas and
 * some controls, not the block tray - but both clone their markup from the templates in
 * editor.html the same way the game does.
 */

import '../styles/editor.css';
import { loadTiles, type Level, type TilesFile } from '../core/assets';
import { clone, el } from '../game/ui';
import { deleteLevel, newLevel, nextLevelId, readLevels, saveLevel } from './storage';
import { EditorView } from './view';

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

    const edit = el<HTMLButtonElement>(row, '.rc-ed-edit');
    edit.setAttribute('aria-label', `Edit ${level.title}`);
    edit.addEventListener('click', () => showEditor(root, tiles, level));

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

  root.append(view);

  // The canvas has no layout box until it is in the document, and its size is what the view fits.
  const editorView = new EditorView(canvas, tiles);
  editorView.draw(level);
  status.textContent = `${level.title}: ${level.tiles.length} cubes, ${level.carrots.length} carrots`;

  const redraw = (): void => {
    editorView.draw(level);
  };
  window.addEventListener('resize', redraw);

  canvas.addEventListener('pointermove', (event) => {
    const cell = editorView.cellAt(event, level);
    status.textContent = cell === null ? 'Outside the map' : `Cell ${cell.x}, ${cell.z}`;
  });
}

const root = document.getElementById('app');
if (root === null) throw new Error('editor.html is missing #app');

const tiles = await loadTiles();
showList(root, tiles);
