/**
 * Everything that touches scratch-blocks: the block definitions, the patches the library needs,
 * the workspace itself, and reading the AST back off it.
 */

import {
  assetUrl,
  type BlocklyColourGroup,
  type BlocklyColourValue,
  type BlocklyWorkspaceOptions,
  type BlockType,
  type ManifestWorkspace,
  type Program,
  type ProgramNode,
} from '../core/assets';

// The five block definitions.
//
// They go through `defineBlocksWithJsonArray`, which wraps each entry in an `init` that calls
// `jsonInit`: scratch-blocks 1.3.0's Block constructor only calls `init`, so a bare
// `Blockly.Blocks[type] = {json}` is never read. Entries key off `type`.
//
// The number shadow is `math_whole_number`, which scratch-blocks already defines.

/** The hat: the only stack the program reader walks. */
export const HAT_BLOCK_TYPE: BlockType = 'logo17_run_code';

/** Tooltip message keys; the hat has no tooltip. */
const BLOCK_TOOLTIP_KEYS: Readonly<Record<BlockType, string | null>> = {
  logo17_run_code: null,
  logo17_for_loop: 'Loop Hover',
  logo17_move_forward: 'Forward Block Hover',
  logo17_turn_left: 'Turn Left Hover',
  logo17_turn_right: 'Turn Right Hover',
};

type Translate = (key: string) => string;

/** Icon size on every block. */
const ICON_PX = 40;

/** `flip_rtl` is scratch-blocks' spelling; Blockly renamed it to `flipRtl` later. */
function icon(file: string, flipRtl: boolean): object {
  const arg: Record<string, unknown> = {
    type: 'field_image',
    src: assetUrl(file),
    width: ICON_PX,
    height: ICON_PX,
  };
  if (flipRtl) arg.flip_rtl = true;
  return arg;
}

/**
 * `DURATION` is a permanently empty socket: the AST walker never reads it and no toolbox fills it.
 * It stays because an input the renderer knows about is part of the block's measured shape.
 */
function duration(): object {
  return { type: 'input_value', name: 'DURATION', check: 'Number' };
}

/**
 * Registers the blocks on `Blockly.Blocks`. Call once, after i18n is loaded: the icon URLs and the
 * four tooltips are resolved here, at definition time, so a caller without a translator would show
 * the message keys themselves.
 */
export function defineLogo17Blocks(
  translate: Translate,
  colours: Record<string, BlocklyColourValue>,
): void {
  // Read from the level manifest rather than `Blockly.Colours`: `overrideColours` copies only keys the
  // table already has, and it has no `motion.turn`/`motion.turnSecondary`, so the turn blocks would
  // silently fall back to the green of `motion.primary`.
  const group = (name: string): BlocklyColourGroup => {
    const value = colours[name];
    if (typeof value !== 'object') throw new Error(`colours.${name} is not a group`);
    return value;
  };
  const motion = group('motion');
  const control = group('control');
  const event = group('event');
  const turn = motion.turn ?? motion.primary;
  const turnSecondary = motion.turnSecondary ?? motion.secondary;
  const tooltip = (type: BlockType): string => {
    const key = BLOCK_TOOLTIP_KEYS[type];
    return key === null ? '' : translate(key);
  };

  const definitions: object[] = [];
  const define = (type: string, json: object): void => {
    definitions.push({ type, ...json });
  };

  define('logo17_run_code', {
    message0: '%1',
    args0: [icon('start_rabbit.svg', true)],
    inputsInline: true,
    // No previousStatement: this is a hat, and the horizontal renderer caps it from that alone.
    nextStatement: null,
    category: null,
    colour: event.primary,
    colourSecondary: event.secondary,
    enableContextMenu: false,
  });

  // SUBSTACK is listed first: the horizontal renderer places the mouth, icon and value socket from
  // the block's metrics rather than from row order.
  define('logo17_for_loop', {
    message0: '%1 %2 %3',
    args0: [
      { type: 'input_statement', name: 'SUBSTACK' },
      icon('control_repeat.svg', true),
      { type: 'input_value', name: 'TIMES', check: 'Number' },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    category: null,
    colour: control.primary,
    colourSecondary: control.secondary,
    colourTertiary: control.tertiary,
    enableContextMenu: false,
    tooltip: tooltip('logo17_for_loop'),
  });

  // The move and turn arrows mean an absolute direction, so they do not flip in RTL.
  define('logo17_move_forward', {
    message0: '%1 %2',
    args0: [icon('move_forward.svg', false), duration()],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    category: null,
    colour: motion.primary,
    colourSecondary: motion.secondary,
    colourTertiary: motion.tertiary,
    enableContextMenu: false,
    tooltip: tooltip('logo17_move_forward'),
  });

  for (const [type, file, key] of [
    ['logo17_turn_left', 'turn_left.svg', 'logo17_turn_left'],
    ['logo17_turn_right', 'turn_right.svg', 'logo17_turn_right'],
  ] as const) {
    define(type, {
      message0: '%1 %2',
      args0: [icon(file, false), duration()],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      category: null,
      colour: turn,
      colourSecondary: turnSecondary,
      colourTertiary: turnSecondary,
      enableContextMenu: false,
      tooltip: tooltip(key),
    });
  }

  Blockly.defineBlocksWithJsonArray(definitions);
}

// Three behaviors scratch-blocks does not provide: a drop shadow under every block, disabled
// rendering, and `.wav`-only sounds. Each patches a prototype, so one call covers every workspace.
// `applyPalette` calls all three before the first `Blockly.inject`.

// Drop shadow. Each block gets two extra paths behind its own, filled with its secondary color and
// offset down by 3, each clipped to one half of the block. The halves exist so we can hide the top
// one once the block is attached: a block mid-row casts a shadow below the row, not onto its
// neighbor.
const SHADOW_OFFSET_Y = 3;

/** Half the shadow, plus the clip rect that cuts it to that half. */
interface ShadowHalf {
  path: SVGPathElement;
  clipRect: SVGRectElement;
}

interface ShadowedBlock extends Blockly.BlockSvg {
  rcShadowTop?: ShadowHalf;
  rcShadowBottom?: ShadowHalf;
}

const SVG_NS = 'http://www.w3.org/2000/svg';

let shadowPatched = false;
let serial = 0;

function createHalf(group: SVGGElement, id: string, className: string): ShadowHalf {
  const clip = document.createElementNS(SVG_NS, 'clipPath');
  clip.setAttribute('id', id);
  const clipRect = document.createElementNS(SVG_NS, 'rect');
  clip.append(clipRect);

  const path = document.createElementNS(SVG_NS, 'path');
  path.setAttribute('class', className);
  path.setAttribute('clip-path', `url(#${id})`);
  path.setAttribute('transform', `translate(0,${SHADOW_OFFSET_Y})`);

  // Both go behind the block's own path, which `initSvg` has already appended.
  group.prepend(clip, path);
  return { path, clipRect };
}

/**
 * Idempotent; the patch is on the prototype, so one call covers every workspace. Call before any
 * workspace is injected.
 */
export function installBlockShadow(): void {
  if (shadowPatched) return;
  shadowPatched = true;

  const proto = Blockly.BlockSvg.prototype;
  const { initSvg, render } = proto;

  proto.initSvg = function (this: ShadowedBlock): void {
    initSvg.call(this);
    const group = this.getSvgRoot();
    const suffix = serial++;
    this.rcShadowBottom = createHalf(group, `rcShadowBottom${suffix}`, 'rcShadowPathBottom');
    this.rcShadowTop = createHalf(group, `rcShadowTop${suffix}`, 'rcShadowPathTop');
  };

  proto.render = function (this: ShadowedBlock, bubble?: boolean): void {
    render.call(this, bubble);
    const top = this.rcShadowTop;
    const bottom = this.rcShadowBottom;
    if (top === undefined || bottom === undefined) return;

    const blockPath = this.getSvgRoot().querySelector('.blocklyPath');
    const d = blockPath?.getAttribute('d');
    if (d === null || d === undefined) return;

    const { width, height } = this.getHeightWidth();
    // 1.5x the width so the clip never cuts the shadow short where the block's own path overhangs.
    const clipWidth = width + 0.5 * width;

    // Set here rather than in `updateColour`, which scratch-blocks calls during construction -
    // before `initSvg` has created these paths. An unset `fill` renders black, not invisible.
    const color = this.getColourSecondary();
    for (const half of [top, bottom]) half.path.setAttribute('fill', color);

    bottom.path.setAttribute('d', d);
    bottom.clipRect.setAttribute('y', String(height / 2));
    bottom.clipRect.setAttribute('width', String(clipWidth));
    bottom.clipRect.setAttribute('height', String(height));

    top.path.setAttribute('d', d);
    top.clipRect.setAttribute('y', '0');
    top.clipRect.setAttribute('width', String(clipWidth));
    top.clipRect.setAttribute('height', String(height / 2));

    // An attached block casts no shadow onto the neighbor it is attached to.
    const attached = this.previousConnection?.isConnected() === true;
    top.path.setAttribute('fill-opacity', attached ? '0' : '1');

    // An insertion marker is one translucent silhouette: both halves take its opacity so they blend
    // into it rather than painting a solid half over it.
    if (this.isInsertionMarker()) {
      const opacity = String(Blockly.Colours.insertionMarkerOpacity ?? 0.3);
      for (const half of [top, bottom]) half.path.setAttribute('fill-opacity', opacity);
    }
  };
}

// Disabled rendering, used by the tutorials to lock a block in the flyout. scratch-blocks ships the
// hatch pattern and the CSS rule but not the code joining them: `updateDisabled` is an empty stub
// and `setDisabled` only sets a flag. This marks the group and swaps the fill to the hatch, then
// recurses into children, because disabling a block disables everything inside it.
const DISABLED_CLASS = 'blocklyDisabled';

interface DisableableBlock extends Blockly.BlockSvg {
  disabled: boolean;
  rendered: boolean;
  getChildren(): DisableableBlock[];
  getSurroundParent(): DisableableBlock | null;
  updateColour(): void;
}

let disabledPatched = false;

/** A block is drawn disabled if it is disabled itself or sits inside one that is. */
function isEffectivelyDisabled(block: DisableableBlock): boolean {
  let current: DisableableBlock | null = block;
  while (current !== null) {
    if (current.disabled) return true;
    current = current.getSurroundParent();
  }
  return false;
}

function updateDisabled(block: DisableableBlock): void {
  const group = block.getSvgRoot();
  const path = group.querySelector('.blocklyPath');
  if (path instanceof SVGElement) {
    if (isEffectivelyDisabled(block)) {
      group.classList.add(DISABLED_CLASS);
      const patternId = block.workspace?.options.disabledPatternId;
      if (patternId !== undefined) path.setAttribute('fill', `url(#${patternId})`);
    } else {
      group.classList.remove(DISABLED_CLASS);
      block.updateColour();
    }
  }
  for (const child of block.getChildren()) updateDisabled(child);
}

/** Idempotent; the patch is on the prototype, so one call covers every workspace. */
export function installDisabledRendering(): void {
  if (disabledPatched) return;
  disabledPatched = true;

  const proto = Blockly.BlockSvg.prototype as unknown as DisableableBlock;
  const base = proto.setDisabled;

  proto.setDisabled = function (this: DisableableBlock, disabled: boolean): void {
    if (this.disabled === disabled) return;
    base.call(this, disabled);
    if (this.rendered) updateDisabled(this);
  };
}

// Sounds. scratch-blocks offers each one as .mp3, .wav and .ogg and lets the browser pick; only
// the .wav files ship here, so the other four 404 and the browser throws NotSupportedError. This
// patches the list down. Waiting for the first gesture is the library's own logic: browsers refuse
// to load audio before the user interacts with the page.
let soundsPatched = false;

/** Idempotent, and must run before the first `Blockly.inject`. */
export function installSounds(): void {
  if (soundsPatched) return;
  soundsPatched = true;

  Blockly.inject.loadSounds_ = function (path: string, workspace: Blockly.WorkspaceSvg): void {
    const audio = workspace.getAudioManager();
    audio.load([`${path}click.wav`], 'click');
    audio.load([`${path}delete.wav`], 'delete');

    const unlock = (): void => {
      document.removeEventListener('mousemove', unlock, true);
      document.removeEventListener('touchstart', unlock, true);
      audio.preload();
    };
    document.addEventListener('mousemove', unlock, true);
    document.addEventListener('touchstart', unlock, true);
  };
}

// The loop count keeps its old text after the editor closes. Typing sets `text_` and re-renders,
// but the editor is over the field so nothing is seen; closing calls `setText` with the same
// string, which returns early and never redraws. The value is right - only the drawing is stale -
// so the program runs the number you typed while the block shows the number you replaced.
let fieldRedrawPatched = false;

/** Idempotent, and must run before the first `Blockly.inject`. */
export function installFieldRedraw(): void {
  if (fieldRedrawPatched) return;
  fieldRedrawPatched = true;

  const proto = Blockly.FieldTextInput.prototype;
  const base = proto.widgetDispose_;

  proto.widgetDispose_ = function (this: Blockly.Field): () => void {
    const close = base.call(this);
    return (): void => {
      close();
      // `forceRerender` does not redraw the text here; `render_` is what replaces the text node.
      this.render_();
    };
  };
}

// ==========================================================================
// The workspace
// ==========================================================================

/** Fixed scale, no zooming. */
const CODING_WORKSPACE_SCALE = 0.7;

/** Cursors and icons: the scratch-blocks media set, which ships with the assets. */
const DEFAULT_MEDIA_PATH = `${import.meta.env.BASE_URL}logos/2017/logo17/`;

/** Each workspace's own colors, so we can re-apply them when it takes over. */
const workspaceColours = new WeakMap<Blockly.WorkspaceSvg, Record<string, string | number>>();

/**
 * The only colors that differ between the coding and tutorial workspaces. `Blockly.Colours` is
 * global, so these would leak from whichever workspace was injected last. We paint them per
 * workspace instead. The rest are the same for both, so the global table is safe.
 */
const PER_WORKSPACE_COLOURS = ['workspace', 'flyout', 'scrollbar'] as const;

/** Loads the palette and installs our patches. Run this once, before creating any workspace. */
export function applyPalette(colours: Record<string, BlocklyColourValue>): void {
  Blockly.Colours.overrideColours(colours as Record<string, Blockly.RGB | string | number>);
  // scratch-blocks does not do any of these.
  installBlockShadow();
  installDisabledRendering();
  installSounds();
  installFieldRedraw();
  // 5, not the scratch-blocks default of 11. This feeds the flyout height: 11 makes the flyout
  // 6 px too tall and pushes its blocks up by 6 px.
  Blockly.Scrollbar.scrollbarThickness = 5;
}

/** Re-applies this workspace's colors. scratch-blocks repaints them whenever it rebuilds. */
function activateWorkspace(ws: Blockly.WorkspaceSvg): void {
  const colours = workspaceColours.get(ws);
  if (colours !== undefined) styleWorkspaceChrome(ws, colours);
}

interface CreateWorkspaceOptions {
  /** scratch-blocks wants an XML string, which the manifest already stores. */
  toolbox: string;
  /** `levels.workspaces.coding` or `.tutorial`, straight from the manifest. */
  options: BlocklyWorkspaceOptions;
  /** Same value for start, min and max, so the user cannot zoom. */
  scale?: number;
  media?: string;
}

/** Scale comes from the caller: tutorial entries in the manifest hold a placeholder, not a number. */
export function createWorkspace(
  container: HTMLElement,
  options: CreateWorkspaceOptions,
): Blockly.WorkspaceSvg {
  const { grid, horizontalLayout, toolboxPosition, scrollbars, trashcan, colours } =
    options.options;
  const scale = options.scale ?? CODING_WORKSPACE_SCALE;

  // Hold back the three that clash; inject would push them into the global table.
  const sharedColours = Object.fromEntries(
    Object.entries(colours).filter(([key]) => !PER_WORKSPACE_COLOURS.includes(key as never)),
  );

  const ws = Blockly.inject(container, {
    toolbox: options.toolbox,
    media: options.media ?? DEFAULT_MEDIA_PATH,
    colours: sharedColours,
    horizontalLayout,
    toolboxPosition,
    scrollbars,
    trashcan,
    grid,
    sounds: options.options.sounds,
    comments: options.options.comments,
    collapse: options.options.collapse,
    disable: options.options.disable,
    readOnly: options.options.readOnly,
    rtl: options.options.rtl,
    zoom: { startScale: scale, maxScale: scale, minScale: scale },
  });
  workspaceColours.set(ws, colours);
  styleWorkspaceStrip(ws, colours);
  styleWorkspaceChrome(ws, colours);
  return ws;
}

/** The rounded strip the blocks sit in. */
const WORKSPACE_STRIP_HEIGHT_PX = 84;
const WORKSPACE_STRIP_RADIUS_PX = 42;

/** Both workspaces share one document, so their clip paths need different ids. */
let stripSerial = 0;

function svgChild(
  parent: Element,
  tag: string,
  attributes: Record<string, string | number>,
): SVGElement {
  const element = document.createElementNS(SVG_NS, tag);
  for (const [name, value] of Object.entries(attributes)) element.setAttribute(name, String(value));
  parent.append(element);
  return element;
}

/**
 * The workspace color fills an 84 px rounded strip instead of the whole host, the blocks are
 * clipped to that strip, and a filter lays a 2 px shadow along its top edge. scratch-blocks draws
 * a plain full-size rect instead.
 */
function styleWorkspaceStrip(
  ws: Blockly.WorkspaceSvg,
  colours: Record<string, string | number>,
): void {
  const svg = ws.getParentSvg();
  const group = ws.getCanvas().parentNode;
  if (!(group instanceof SVGElement)) return;
  const background = svg.querySelector('.blocklyMainBackground');
  if (!(background instanceof SVGElement)) return;

  // Let the host show through below the strip: the game canvas, or the tutorial card.
  svg.style.backgroundColor = 'transparent';

  const shape = {
    height: `${WORKSPACE_STRIP_HEIGHT_PX}px`,
    width: '100%',
    rx: `${WORKSPACE_STRIP_RADIUS_PX}px`,
  };
  for (const [name, value] of Object.entries(shape)) background.setAttribute(name, value);
  background.style.fill = String(colours.workspace ?? '');
  // scratch-blocks strokes a grid over the background; it should be invisible here.
  background.style.stroke = 'none';

  const suffix = stripSerial++;
  const clipId = `rcWorkspaceClip${suffix}`;
  svgChild(svgChild(group, 'clipPath', { id: clipId }), 'rect', shape);
  group.setAttribute('clip-path', `url(#${clipId})`);

  const defs = svg.querySelector('defs');
  if (!defs) return;
  const filterId = `rcInsetShadow${suffix}`;
  const filter = svgChild(defs, 'filter', { id: filterId });
  svgChild(filter, 'feOffset', { dy: 2 });
  svgChild(filter, 'feComposite', { operator: 'out', in: 'SourceGraphic', result: 'inverse' });
  svgChild(filter, 'feFlood', {
    'flood-color': 'black',
    'flood-opacity': 0.6,
    result: 'color',
  });
  svgChild(filter, 'feComposite', {
    operator: 'in',
    in: 'color',
    in2: 'inverse',
    result: 'shadow',
  });
  svgChild(filter, 'feComposite', { operator: 'over', in: 'shadow', in2: 'SourceGraphic' });
  group.setAttribute('filter', `url(#${filterId})`);
}

/** Flyout background and scrollbars. scratch-blocks repaints these, so we set them every time. */
function styleWorkspaceChrome(
  ws: Blockly.WorkspaceSvg,
  colours: Record<string, string | number>,
): void {
  // A horizontal flyout has its own <svg>, outside the main workspace's.
  const flyoutSvg = ws.getFlyout()?.getWorkspace().getParentSvg();
  const flyoutBackground = flyoutSvg?.querySelector('.blocklyFlyoutBackground');
  if (flyoutBackground instanceof SVGElement) {
    flyoutBackground.style.fill = String(colours.flyout ?? '');
  }
  for (const root of [ws.getParentSvg(), flyoutSvg]) {
    for (const handle of root?.querySelectorAll('.blocklyScrollbarHandle') ?? []) {
      if (handle instanceof SVGElement) handle.style.fill = String(colours.scrollbar ?? '');
    }
  }
}

function escapeXml(value: string): string {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;');
}

/**
 * Clears the workspace and places the hat block. The hat is the only stack we read a program
 * from, and it is pinned so the player cannot move or delete it.
 *
 * We build XML because that is what scratch-blocks reads; it has no serialization module.
 */
export function clearAndSeed(ws: Blockly.WorkspaceSvg, seed: ManifestWorkspace): Blockly.Block {
  activateWorkspace(ws);
  ws.clear();

  // Tutorial 3 starts with a move block already attached.
  let inner = '';
  let close = '';
  for (const type of seed.preplacedNext) {
    inner += `<next><block type="${escapeXml(type)}">`;
    close = '</block></next>' + close;
  }

  const xml =
    `<xml><block type="${HAT_BLOCK_TYPE}" id="${escapeXml(seed.startBlockId)}"` +
    ` deletable="${seed.deletable}" movable="${seed.movable}"` +
    ` x="${seed.x}" y="${seed.y}">${inner}${close}</block></xml>`;

  // Use domToWorkspace, not domToBlock: only it reads the x/y attributes that place the block.
  Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), ws);
  const block = ws.getBlockById(seed.startBlockId);
  if (block === null) throw new Error(`seed block ${seed.startBlockId} was not created`);

  Blockly.svgResize(ws);
  scrollSeedIntoView(ws);
  return block;
}

/**
 * Centers the blocks in the 84 px strip, which ends up at -87.
 *
 * We measure with getBlocksBoundingBox because getMetrics reports the padded scroll area, not the
 * blocks. scroll clamps against startDragMetrics, so refresh that first.
 */
function scrollSeedIntoView(ws: Blockly.WorkspaceSvg): void {
  const box = ws.getBlocksBoundingBox();
  const top = (WORKSPACE_STRIP_HEIGHT_PX - box.height * ws.scale) / 2 - box.y * ws.scale;
  ws.startDragMetrics = ws.getMetrics();
  ws.scroll(0, top);
}

/**
 * Enables or disables flyout blocks. Tutorial toolboxes give each block an id equal to its type.
 * A disabled block cannot be dragged out.
 */
export function setEnabledBlockTypes(
  ws: Blockly.WorkspaceSvg,
  types: readonly string[],
  enabled: boolean,
): void {
  const flyout = ws.getFlyout();
  if (flyout === null) return;
  const flyoutWs = flyout.getWorkspace();
  for (const type of types) flyoutWs.getBlockById(type)?.setDisabled(!enabled);
}

// Run highlight, using the scratch-blocks glow. Do not use `WorkspaceSvg.highlightBlock`: it is
// leftover Blockly code calling `block.setHighlighted`, which scratch-blocks never defines.
/** The block currently glowing, so the previous one can be cleared without a workspace scan. */
const glowing = new WeakMap<Blockly.WorkspaceSvg, Blockly.BlockSvg>();

/**
 * Highlights the block a node just started on, clearing the previous one. Passing an id that is no
 * longer on the workspace clears the highlight instead of throwing. The hat is never highlighted:
 * its node finishes in the same frame it starts, so nothing calls this with the hat's id.
 */
export function highlightBlock(ws: Blockly.WorkspaceSvg, blockId: string): void {
  const block = ws.getBlockById(blockId);
  if (block === null) {
    clearHighlight(ws);
    return;
  }
  const previous = glowing.get(ws);
  if (previous === block) return;
  previous?.setGlowBlock(false);
  block.setGlowBlock(true);
  glowing.set(ws, block);
}

/** Clears the highlight: on stop, on reset, and when the program runs out. */
export function clearHighlight(ws: Blockly.WorkspaceSvg): void {
  const previous = glowing.get(ws);
  if (previous === undefined) return;
  // The block may already have been disposed with the workspace it was on.
  if (previous.workspace !== null) previous.setGlowBlock(false);
  glowing.delete(ws);
}

// Workspace -> `Program` AST. Only the hat's stack is read; any other top-level stack neither runs
// nor counts.

/** Hat block ids the program reader accepts. */
const HAT_BLOCK_IDS = new Set(['start_block_id', 'tutorial_start_block_id']);

/** Thrown on a block type the walker does not know; the tree built so far is kept. */
class UnknownBlockTypeError extends Error {}

/**
 * Iterations of a loop block. The manifest guarantees a `field_number` with `min: 0, precision: 1`
 * in `TIMES`, so the value is a non-negative integer; a cleared field reads as `NaN` and means 0.
 * Reading the field directly gives the same result as scanning descendants for the first shadow,
 * for every toolbox here.
 */
function loopCount(block: Blockly.Block): number {
  const times = block.getInputTargetBlock('TIMES');
  if (times === null) return 0;
  const value: unknown = times.getFieldValue('NUM');
  const count = Number.parseInt(String(value), 10);
  return Number.isNaN(count) ? 0 : count;
}

/**
 * Walks a `next` chain into `out`. A node is appended only after its body has been walked, so an
 * unknown type inside a loop drops the loop node too.
 */
function walkChain(first: Blockly.Block | null, out: ProgramNode[]): void {
  let block = first;
  while (block !== null) {
    const id = block.id;
    switch (block.type) {
      case 'logo17_for_loop': {
        const body: ProgramNode[] = [];
        walkChain(block.getInputTargetBlock('SUBSTACK'), body);
        out.push({ kind: 'repeat', blockId: id, count: loopCount(block), body });
        break;
      }
      case 'logo17_move_forward':
        out.push({ kind: 'moveForward', blockId: id });
        break;
      case 'logo17_turn_left':
        out.push({ kind: 'turnLeft', blockId: id });
        break;
      case 'logo17_turn_right':
        out.push({ kind: 'turnRight', blockId: id });
        break;
      default:
        throw new UnknownBlockTypeError(block.type);
    }
    block = block.getNextBlock();
  }
}

/**
 * The program hanging off the hat. Returns an empty program when no hat is on the workspace or
 * nothing is attached to it. Only the first matching hat counts.
 */
export function workspaceToProgram(ws: Blockly.Workspace): Program {
  const hat = ws.getTopBlocks(false).find((block) => HAT_BLOCK_IDS.has(block.id));
  if (hat === undefined) return { kind: 'sequence', blockId: null, body: [] };

  const program: Program = { kind: 'sequence', blockId: hat.id, body: [] };
  try {
    walkChain(hat.getNextBlock(), program.body);
  } catch (error) {
    if (!(error instanceof UnknownBlockTypeError)) throw error;
  }
  return program;
}
