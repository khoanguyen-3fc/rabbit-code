<img src="public/favicon.svg" alt="" width="72" align="right" />

# Rabbit Code

A browser rewrite of the 2017 Google Doodle "Celebrating 50 years of Kids Coding". A rabbit walks
an isometric grid and eats carrots; you program it with Scratch-style blocks - hop forward, turn
left, turn right, repeat. Six levels and three tutorials.

The original is gone from google.com as a playable page. This runs it again, from a rewrite rather
than a copy of the bundle - no runtime dependencies, no game engine.

|                                                                                  |                                                                                                                |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| ![The last level, with the block tray below the board](screenshots/gameplay.jpg) | ![A level open in the editor, with the grid and the cell under the pointer picked out](screenshots/editor.jpg) |
| ![A tutorial card](screenshots/tutorial.jpg)                                     | ![The level map](screenshots/level-map.jpg)                                                                    |

## Roadmap

The goal is a course that teaches a child to program. The game is the part that already works;
these are the things standing between it and a course.

**A level editor.** Six levels is one sitting. Teaching needs a lot more of them, and hand-editing
map files is not a way to write a curriculum. A first version is in, described below: it lays
cubes, water, carrots and the rabbit, plays the result and writes a Tiled map back out. It cannot
place props yet, choose which blocks a level offers, resize the grid, or read a map back in.

**Three stars a level.** One for finishing it, one for the shortest route, one for the shortest
program. A level can be replayed to improve on them. The third already half exists - the level map
draws a ribbon when a level is solved in no more blocks than its target - so this is mostly a
matter of counting hops as well as blocks, and showing all three.

**More blocks.** Move, turn, repeat and the start hat cover sequencing, loops, and working out why
your own program did the wrong thing. That is a genuine first lesson and it is where the block set
stops. Conditionals and variables are the next step, and a conditional needs something to ask
about - the rabbit currently cannot see whether a carrot is ahead of it.

## How it works

The game is two halves that share an event bus.

- **The scene** is Canvas 2D. Sprites are rasterized from SVG sheets at load time and blitted, with
  a hand-written scene graph, tween system and depth sort. No WebGL. The isometric projection is
  `iso(x, y, z) = (x - z, (x + z) / 2 + y)` in world units, one unit per grid cell.
- **The block tray** is [scratch-blocks](https://github.com/scratchfoundation/scratch-blocks) 1.3.0,
  the last release that still ships the horizontal renderer the doodle used. It is loaded as a
  classic script rather than bundled, because its Closure build needs top-level `this` to be
  `window`.

Pressing play walks the block tree into an AST, hands it to a runner that issues one action per
frame, and the renderer draws whatever the puzzle state says.

## Why it's different

Most doodle preservation projects rehost the original bundle. This one does not ship it:

- The artwork, audio, level maps and translations are Google's. `npm run setup` downloads them from
  google.com at build time, so no asset file is committed here. The screenshots above are the one
  exception.
- The same script fetches the original `logo17.html` and `logo17.2.js`, so the untouched original
  is playable next to this one at `/logos/2017/logo17/logo17.html`.
- `scratch-blocks` comes from the npm tarball, hash-pinned, and is unpacked without a tar binary.

Four behaviors the library does not have were rebuilt: the drop shadow under every block,
disabled-block rendering, `.wav`-only sound loading, and the 84 px rounded tray strip.

## Requirements

- Node 20 or newer
- A network connection on the first `npm run dev` or `npm run build` (the asset download)

## Install

```sh
git clone https://github.com/khoanguyen-3fc/rabbit-code.git
cd rabbit-code
npm install
```

## Usage

```sh
npm run dev       # asset download, then a dev server
npm run build     # tsc --noEmit, then a production build into dist/
npm run preview   # serve dist/
npm run format    # prettier
```

`predev` and `prebuild` both run `npm run setup`, which downloads 45 asset files into
`public/logos/` and vendors scratch-blocks into `public/vendor/`. Both are gitignored and both are
skipped if already present.

For a sub-path deployment:

```sh
npm run build -- --base=/rabbit-code/
```

## Level editor

`/editor.html` on the dev server. It keeps a list of levels in `localStorage` and opens one on a
canvas with five tools: cube, water, carrot, the rabbit's start, and erase. Click or drag to paint.
Clicking the rabbit where it already stands turns it a quarter.

Each row in the list can play its level or export it. Play opens the game at
`/?custom=<id>`, which reads the level out of `localStorage` instead of the ladder; the level is
not part of the ladder, so finishing it unlocks nothing and leads nowhere. Export writes the same
Tiled map format the shipped levels use, so the file drops straight into `public/logos/2017/logo17/`.

The editor itself is not in `npm run build` - with no Vite config, `index.html` is the only entry
point built. `?custom=` is part of the game, so a deployed build still plays a level that is
already in that browser's storage; there is just no page there to author one.

## Localization

`?hl=` picks a language, as the original did - `?hl=vi`, `?hl=ar`, and so on for 88 of them. English
is compiled in; the rest sit in one lazily-imported chunk, so a default load carries none of it.
That is 68 kB gzip saved on every visit that does not ask for a translation.

## Design notes

- **No runtime dependencies.** `npm audit` reports nothing because there is nothing to audit; the
  three devDependencies are Vite, TypeScript and Prettier.
- **UI markup lives in `<template>` elements**, not in `createElement` calls. `index.html` holds
  five of them, cloned by `clone(id)` and read with a throwing `el(root, selector)` so a template
  and the code behind it cannot drift apart silently.
- **The level data is compiled in**, not fetched - `src/data/extracted.ts` holds values taken
  as-is, `src/data/derived.ts` holds everything worked out from them. The split is deliberate: it
  keeps "this is what the data says" separate from "this is what we concluded".
- **Strict TypeScript**, no `any`, no `@ts-ignore`, `noUnusedLocals` and `noUnusedParameters` on.

## Credits and licensing

The code is released under the MIT License. See [LICENSE](LICENSE).

Everything under `src/data/` is not covered by it, and neither are the files `npm run setup`
downloads. Those are level layouts, sprite atlas tables, color palettes, artwork, audio and the
translations for 88 languages, all Google's work and not mine to license. If you fork this, that
restriction travels with you.
