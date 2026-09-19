/**
 * scratch-blocks 1.3.0 ships no typings, so this declares the surface this project uses.
 *
 * It is an ambient global rather than a module: `public/vendor/scratch-blocks-horizontal.js` is loaded by a
 * classic <script> tag in index.html (see scripts/vendor.mjs for why), so `Blockly` is a real
 * global by the time any module runs. Anything not listed here is not used; add to it rather than
 * reaching for `any`.
 */

declare namespace Blockly {
  interface RGB {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary?: string;
  }

  /**
   * The palette the whole editor reads. scratch-blocks has no theme object: block and chrome
   * colors are read from here at render time, so changing it re-colors the next render.
   * `Blockly.inject` calls `overrideColours` itself with its `colors` option.
   */
  type ColourTable = Record<string, RGB | string | number> & {
    /** Opacity of the translucent drag silhouette. Typed so it is not read as an `RGB`. */
    insertionMarkerOpacity?: number;
    overrideColours(patch: Record<string, RGB | string | number>): void;
  };
  const Colours: ColourTable;

  /** Block constructors by type, as `defineBlocksWithJsonArray` fills it. */
  const Blocks: Record<string, unknown>;

  const Scrollbar: {
    /** Feeds the flyout height: `(tallestBlock + 1.5*MARGIN) * scale + scrollbarThickness`. */
    scrollbarThickness: number;
  };

  /** Editor UI strings from msg/messages.js (context menu, ARIA labels). */
  const Msg: Record<string, string>;

  function defineBlocksWithJsonArray(definitions: readonly object[]): void;
  interface AudioManager {
    load(sources: readonly string[], name: string): void;
    preload(): void;
  }

  /** A field on a block. Only the parts `workspace.ts` patches are declared. */
  interface Field {
    /** Redraws the field's SVG text from its current value. */
    render_(): void;
  }

  const FieldTextInput: {
    prototype: Field & {
      /** Returns the closure `WidgetDiv` runs when the editor closes. */
      widgetDispose_(this: Field): () => void;
    };
  };

  function inject(container: Element | string, options: object): WorkspaceSvg;
  namespace inject {
    /** Patched in workspace.ts to load only the `.wav` files that ship with the assets. */
    let loadSounds_: (path: string, workspace: WorkspaceSvg) => void;
  }
  function svgResize(workspace: WorkspaceSvg): void;
  function hideChaff(opt_allowToolbox?: boolean): void;

  namespace Xml {
    function textToDom(text: string): Element;
    function domToBlock(xmlBlock: Element, workspace: Workspace): BlockSvg;
    /** Unlike `domToBlock`, this reads each top block's `x`/`y` attributes. */
    function domToWorkspace(xml: Element, workspace: Workspace): string[];
    function blockToDom(block: Block, opt_noId?: boolean): Element;
  }

  namespace Events {
    /** Base event; `type` is compared against the constants below. */
    class Abstract {
      type: string;
      blockId?: string;
      workspaceId?: string;
    }
    const BLOCK_MOVE: string;
    /** scratch-blocks has no `isUiEvent`; a UI event is one whose `type` is this. */
    const UI: string;
    const BLOCK_CREATE: string;
    const BLOCK_DELETE: string;
    const BLOCK_CHANGE: string;
  }

  class Block {
    id: string;
    type: string;
    getNextBlock(): BlockSvg | null;
    getInputTargetBlock(name: string): BlockSvg | null;
    getFieldValue(name: string): string | null;
    setDisabled(disabled: boolean): void;
    setDeletable(deletable: boolean): void;
    setMovable(movable: boolean): void;
    moveBy(dx: number, dy: number): void;
    dispose(healStack?: boolean): void;
  }

  class BlockSvg extends Block {
    previousConnection: Connection | null;
    nextConnection: Connection | null;
    initSvg(): void;
    render(opt_bubble?: boolean): void;
    updateColour(): void;
    isInsertionMarker(): boolean;
    getSvgRoot(): SVGGElement;
    getColourSecondary(): string;
    /** scratch-blocks' run highlight. `setHighlighted` exists on WorkspaceSvg but is never defined
     * on the block, so calling `WorkspaceSvg.highlightBlock` throws. */
    setGlowBlock(glowing: boolean): void;
    setGlowStack(glowing: boolean): void;
    workspace: WorkspaceSvg | null;
    rendered: boolean;
    disabled: boolean;
    getChildren(): BlockSvg[];
    getSurroundParent(): BlockSvg | null;
    /** The rendered size in workspace units. */
    getHeightWidth(): { height: number; width: number };
  }

  class Connection {
    isConnected(): boolean;
    targetBlock(): BlockSvg | null;
  }

  class Workspace {
    getTopBlocks(ordered: boolean): BlockSvg[];
    getBlockById(id: string): BlockSvg | null;
    getAllBlocks(): BlockSvg[];
    clear(): void;
    addChangeListener(callback: (event: Events.Abstract) => void): unknown;
    removeChangeListener(handle: unknown): void;
  }

  interface Metrics {
    contentHeight: number;
    contentWidth: number;
    contentTop: number;
    contentLeft: number;
    viewHeight: number;
    viewWidth: number;
    viewTop: number;
    viewLeft: number;
  }

  interface Flyout {
    getWorkspace(): WorkspaceSvg;
  }

  class WorkspaceSvg extends Workspace {
    scale: number;
    /** Injection options; `readOnly` is writable and is how a workspace is locked. */
    options: { readOnly: boolean; disabledPatternId?: string };
    scrollX: number;
    scrollY: number;
    getParentSvg(): SVGSVGElement;
    getCanvas(): SVGGElement;
    /** `scroll` clamps against this, so it must be refreshed before every call. */
    startDragMetrics: Metrics;
    getMetrics(): Metrics;
    /** The blocks' own box, in workspace units - scale it before comparing with metrics. */
    getBlocksBoundingBox(): { x: number; y: number; width: number; height: number };
    getFlyout(): Flyout | null;
    getAudioManager(): AudioManager;
    scroll(x: number, y: number): void;
    resize(): void;
    render(): void;
    updateToolbox(toolbox: string): void;
    dispose(): void;
  }
}
