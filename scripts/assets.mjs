// Downloads the doodle's own asset files into public/logos/, if they are not already there.
//
// These files belong to Google. We fetch them at build time instead of committing them, so the
// repository holds none of their content. public/logos/ is gitignored for the same reason.
//
// The original page and its bundle come down too, at the paths they use on google.com, so the
// original game is playable next to ours at /logos/2017/logo17/logo17.html. Its bundle asks for
// /logos/2017/logo17/... absolute paths, which is why the tree keeps that exact shape.

import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ORIGIN = 'https://www.google.com';
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const target = join(root, 'public/logos');

/** Paths under the origin. They double as the paths we write, so the tree matches google.com. */
const ASSETS = [
  'L1.json',
  'L2.json',
  'L3.json',
  'L4.json',
  'L5.json',
  'L6.json',
  'T1.json',
  'T2.json',
  'T3.json',
  'level1_tileset.json',
  'click.wav',
  'delete.wav',
  'sounds.mp3',
  'sounds.ogg',
  'handclosed.cur',
  'handdelete.cur',
  'handopen.cur',
  'sprites.png',
  'control_repeat.svg',
  'cta.svg',
  'dropdown-arrow-dark.svg',
  'dropdown-arrow.svg',
  'end_screen_bg.svg',
  'icon_sprite.svg',
  'loading-sprite.svg',
  'move_forward.svg',
  'shared-sprite.svg',
  'start_rabbit.svg',
  'turn_left.svg',
  'turn_right.svg',
  'zoom-in.svg',
  'zoom-out.svg',
  'zoom-reset.svg',
  'one-sprite.svg',
  'one-six-sprite.svg',
  'two-sprite.svg',
  'three-sprite.svg',
  'three-five-sprite.svg',
  'four-sprite.svg',
  'four-five-sprite.svg',
  'four-six-sprite.svg',
  'five-sprite.svg',
  'six-sprite.svg',
].map((name) => `/logos/2017/logo17/${name}`);

/** The original game itself, so it can be played from this build. */
const ORIGINAL = ['/logos/2017/logo17/logo17.html', '/logos/doodles/2017/logo17/logo17.2.js'];

const files = [...ASSETS, ...ORIGINAL];

// Every file is content-addressed by name and never changes, so one present file means the set is
// present. Delete public/logos to force a re-fetch.
if (files.every((p) => existsSync(join(root, 'public', p)))) process.exit(0);

async function download(path) {
  const out = join(root, 'public', path);
  if (existsSync(out)) return 0;
  const response = await fetch(ORIGIN + path);
  if (!response.ok) throw new Error(`${path}: HTTP ${response.status}`);
  const body = Buffer.from(await response.arrayBuffer());
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, body);
  return body.length;
}

const queue = [...files];
// A few at a time rather than 45 at once. Each worker keeps its own total: `bytes += await ...`
// from several workers would lose updates, because the read and the write straddle an await.
const totals = await Promise.all(
  Array.from({ length: 6 }, async () => {
    let mine = 0;
    for (let path = queue.shift(); path !== undefined; path = queue.shift()) {
      mine += await download(path);
    }
    return mine;
  }),
);
const bytes = totals.reduce((a, b) => a + b, 0);

console.log(
  `assets: ${files.length} files in ${target.replace(root + '/', '')} (${(bytes / 1048576).toFixed(1)} MB)`,
);
