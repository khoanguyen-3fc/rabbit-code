// Fetches the four pre-built files we need out of the scratch-blocks tarball (Apache-2.0).
//
// Not an npm dependency: installing it drags in ~200 packages we never run, all of which npm audit
// flags. The hash below is pinned, so a change at the registry fails the build.
//
// We concatenate the compiled sources rather than use the package's own dist/, which is a webpack
// development build wrapping every module in eval() - blocked by any CSP without 'unsafe-eval'.
//
// msg/scratch_msgs.js is left out: 1.08 MB of translations nothing reads unless the host asks for
// another language.

import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { gunzipSync } from 'node:zlib';

const VERSION = '1.3.0';
const TARBALL = `https://registry.npmjs.org/scratch-blocks/-/scratch-blocks-${VERSION}.tgz`;
const INTEGRITY =
  'sha512-RvTTClge6htuEml1nt77lh6VxLPkXK/GIeOPgeOzV6qyLquarsisIy+17F79CW/1E3rc8myE9JwC3iwKMcENgw==';

/** Order matters: each file reads the globals the previous one defined. */
const PARTS = [
  'blockly_compressed_horizontal.js',
  'blocks_compressed.js',
  'blocks_compressed_horizontal.js',
  'msg/messages.js',
];

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const target = join(root, 'public/vendor/scratch-blocks-horizontal.js');

if (existsSync(target)) process.exit(0);

const archive = Buffer.from(await (await fetch(TARBALL)).arrayBuffer());
const digest = `sha512-${createHash('sha512').update(archive).digest('base64')}`;
if (digest !== INTEGRITY) {
  throw new Error(`scratch-blocks ${VERSION}: expected ${INTEGRITY}, got ${digest}`);
}

/** Tar: a 512-byte header per entry (name at 0, octal size at 124), then contents padded to 512. */
function untar(buffer, wanted) {
  const found = new Map();
  for (let at = 0; at + 512 <= buffer.length; ) {
    // Both fields are NUL-padded, so everything from the first NUL on is padding.
    const name = buffer.toString('utf8', at, at + 100).split('\0')[0];
    if (name === '') break; // two zero blocks end the archive
    const size = Number.parseInt(
      buffer
        .toString('utf8', at + 124, at + 136)
        .split('\0')[0]
        .trim(),
      8,
    );
    at += 512;
    if (wanted.has(name)) found.set(name, buffer.subarray(at, at + size).toString('utf8'));
    at += Math.ceil(size / 512) * 512;
  }
  return found;
}

const entries = untar(gunzipSync(archive), new Set(PARTS.map((p) => `package/${p}`)));
for (const part of PARTS) {
  if (!entries.has(`package/${part}`))
    throw new Error(`scratch-blocks ${VERSION}: missing ${part}`);
}

// Drop comment-only lines: they are per-file headers, misleading once the files are joined.
const strip = (src) =>
  src
    .split('\n')
    .filter((line) => !line.startsWith('//'))
    .join('\n');
const out = PARTS.map((p) => strip(entries.get(`package/${p}`))).join('\n');

mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, out);
console.log(
  `vendor: scratch-blocks ${VERSION} -> public/vendor/scratch-blocks-horizontal.js` +
    ` (${(out.length / 1048576).toFixed(2)} MB)`,
);
