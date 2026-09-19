/**
 * The DOM chrome: the canvas, the title and loading screens, the block tray with the play button,
 * the HUD, the overlay host and the end screen.
 *
 * Icons are `<use>` references into `icon_sprite.svg`, injected once.
 */

import { assetUrl } from '../core/assets';
import { BACKING_STORE_SCALE } from '../render/camera';
import { Delay, OVERLAY_TRANSITION_MS } from './scene';

/** The CSS pair that fades any non-overlay element. */
export function setVisible(element: HTMLElement, visible: boolean): void {
  element.classList.toggle('rc-visible', visible);
  element.classList.toggle('rc-hidden', !visible);
}

/**
 * Finds one element inside a cloned template. Throws rather than returning null, so a template and
 * the code that reads it cannot drift apart silently.
 */
export function el<T extends Element>(root: ParentNode, selector: string): T {
  const found = root.querySelector<T>(selector);
  if (found === null) throw new Error(`template is missing ${selector}`);
  return found;
}

/** Clones a `<template>` by id. */
export function clone(id: string): DocumentFragment {
  const template = document.getElementById(id);
  if (!(template instanceof HTMLTemplateElement)) throw new Error(`missing <template id="${id}">`);
  return template.content.cloneNode(true) as DocumentFragment;
}

function div(className: string, parent?: HTMLElement): HTMLDivElement {
  const element = document.createElement('div');
  element.className = className;
  parent?.append(element);
  return element;
}

/**
 * Injects `icon_sprite.svg` so every `<use href="#hpsvg-...">` resolves. Must finish before the
 * first icon is shown.
 */
export async function injectIconSprite(root: HTMLElement): Promise<void> {
  const response = await fetch(assetUrl('icon_sprite.svg'));
  if (!response.ok) throw new Error(`icon sprite: HTTP ${response.status}`);
  const host = div('rc-svg-sprite', root);
  host.innerHTML = await response.text();
}

/** The 80 px play/stop button and its offset base. */
export class PlayButton {
  readonly wrapper: HTMLDivElement;
  readonly button: HTMLButtonElement;

  constructor(root: ParentNode, title: string) {
    this.wrapper = el(root, '.rc-play-wrapper');
    this.button = el(root, '.rc-play-button');
    this.button.title = title;
  }

  /** Flips the glyph to the stop square. */
  setExecuting(executing: boolean): void {
    this.button.classList.toggle('rc-executing', executing);
  }
}

/**
 * The overflow pill at the top left. Closed it is the kebab alone; the toggle button under it
 * expands the clip and reveals the three entries: level map, search and share.
 */
class OverflowMenu {
  readonly mapButton: HTMLButtonElement;
  private readonly clip: HTMLDivElement;

  readonly searchButton: HTMLButtonElement;
  readonly shareButton: HTMLButtonElement;

  constructor(
    root: ParentNode,
    labels: { menuButton: string; levelMap: string; search: string; share: string },
  ) {
    this.clip = el(root, '.rc-overflow-clip');

    const toggle = el<HTMLButtonElement>(root, '.rc-overflow-toggle');
    toggle.title = labels.menuButton;
    toggle.addEventListener('click', () => this.toggle());

    this.mapButton = el(root, '.rc-overflow-map');
    this.mapButton.title = labels.levelMap;
    this.searchButton = el(root, '.rc-overflow-search');
    this.searchButton.title = labels.search;
    this.shareButton = el(root, '.rc-overflow-share');
    this.shareButton.title = labels.share;
  }

  /** The two classes swap, and the keyframes do the rest. */
  private toggle(): void {
    const expand = this.clip.classList.contains('rc-contracted');
    this.clip.classList.toggle('rc-contracted', !expand);
    this.clip.classList.toggle('rc-expanded', expand);
  }

  /** leaving the coding scene contracts the pill. */
  contract(): void {
    this.clip.classList.remove('rc-expanded');
    this.clip.classList.add('rc-contracted');
  }
}

/** Scroll speed of a held arrow, in workspace px per second. */
const ARROW_SCROLL_PX_PER_SEC = 200;

/**
 * The pair of tray scroll arrows. Blockly's horizontal scrollbar is hidden and the workspace
 * scrolls with these instead, so without them a program longer than the 490 px tray cannot be
 * reached at all.
 *
 * Press sets that direction's flag; release, leaving the button or losing focus clears it, and
 * every listener calls `preventDefault`. The per-frame scroll and the visibility test are driven
 * from `PlayScene.update`.
 */
class ScrollArrows {
  readonly left: HTMLButtonElement;
  readonly right: HTMLButtonElement;
  private scrollingLeft = false;
  private scrollingRight = false;

  /** Both arrows start hidden. */
  constructor(root: ParentNode) {
    this.left = el(root, '.rc-scroll-arrow-left');
    this.right = el(root, '.rc-scroll-arrow-right');

    this.bind(this.left, (held) => {
      this.scrollingLeft = held;
    });
    this.bind(this.right, (held) => {
      this.scrollingRight = held;
    });
  }

  private bind(element: HTMLButtonElement, setHeld: (held: boolean) => void): void {
    for (const type of ['mousedown', 'touchstart'] as const) {
      element.addEventListener(type, (event) => {
        event.preventDefault();
        setHeld(true);
      });
    }
    for (const type of ['mouseup', 'touchend', 'mouseout', 'blur'] as const) {
      element.addEventListener(type, (event) => {
        event.preventDefault();
        setHeld(false);
      });
    }
    // Held Enter or Space scrolls like a held mouse button. `preventDefault` on `mousedown` also
    // suppresses focus, so without this the arrows cannot be driven from the keyboard at all.
    element.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      setHeld(true);
    });
    element.addEventListener('keyup', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      setHeld(false);
    });
  }

  /**
   * One frame. `contentLeft`/`contentWidth` are the padded scrollable area; `getMetrics` carries no
   * `blocksLeft`/`blocksWidth`, so the blocks' own box comes from `getBlocksBoundingBox`, which
   * reports workspace units and is scaled here.
   */
  update(dtMs: number, workspace: BlocklyScrollTarget): void {
    if (this.scrollingLeft || this.scrollingRight) {
      const delta = (ARROW_SCROLL_PX_PER_SEC * dtMs) / 1000;
      const x = this.scrollingLeft ? workspace.scrollX + delta : workspace.scrollX - delta;
      // `scroll` clamps against `startDragMetrics`, so refresh it first.
      workspace.startDragMetrics = workspace.getMetrics();
      // y is 0, not the current scrollY: the tray never scrolls vertically, so the two are equal.
      workspace.scroll(x, 0);
    }

    const metrics = workspace.getMetrics();
    const box = workspace.getBlocksBoundingBox();
    const blocksLeft = box.x * workspace.scale;
    const blocksRight = blocksLeft + box.width * workspace.scale;
    const leftGap = blocksLeft - metrics.viewLeft;
    const rightGap = metrics.viewLeft + metrics.viewWidth - blocksRight;
    const scrollEnd = metrics.contentLeft + metrics.contentWidth - blocksRight - 1;

    if (leftGap < 0) setVisible(this.left, true);
    else if (leftGap > 12) {
      setVisible(this.left, false);
      this.scrollingLeft = false;
    }
    if (rightGap < 40) setVisible(this.right, true);
    else if (rightGap > scrollEnd) {
      setVisible(this.right, false);
      this.scrollingRight = false;
    }
  }
}

/** The part of the workspace the arrows drive, so this file needs no Blockly import. */
interface BlocklyScrollTarget {
  readonly scrollX: number;
  readonly scale: number;
  startDragMetrics: {
    contentLeft: number;
    contentWidth: number;
    viewLeft: number;
    viewWidth: number;
  };
  scroll(x: number, y: number): void;
  /** Workspace units, so callers scale it themselves. */
  getBlocksBoundingBox(): { x: number; y: number; width: number; height: number };
  getMetrics(): {
    contentLeft: number;
    contentWidth: number;
    viewLeft: number;
    viewWidth: number;
  };
}

type OverlayState = 'closed' | 'opening' | 'open' | 'closing';

/**
 * A modal panel: full-size backdrop plus the 480x480 card. The CSS
 * transition runs for `OVERLAY_TRANSITION_MS` in both directions and the state machine is driven by
 * the frame clock rather than `transitionend`, which also fires for bubbled child transitions.
 */
export class Overlay {
  readonly root: HTMLDivElement;
  readonly content: HTMLDivElement;
  onBackdropClick: (() => void) | null = null;
  onOpened: (() => void) | null = null;
  onClosed: (() => void) | null = null;

  private state_: OverlayState = 'closed';
  private readonly delay = new Delay();

  /** Focus returns here when the overlay closes. */
  private restoreFocusTo: HTMLElement | null = null;

  constructor(parent: HTMLElement, extraClass = '') {
    this.root = div(['rc-overlay', 'rc-hidden', extraClass].join(' ').trim(), parent);
    this.root.setAttribute('role', 'dialog');
    this.root.setAttribute('aria-modal', 'true');
    this.content = div('rc-overlay-content', this.root);
    this.content.tabIndex = -1;
    this.root.addEventListener('click', () => this.onBackdropClick?.());
    this.content.addEventListener('click', (event) => event.stopPropagation());
    this.root.addEventListener('keydown', (event) => this.onKeyDown(event));
  }

  /** Escape closes; Tab cycles inside the card instead of walking out into the chrome behind it. */
  private onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.onBackdropClick?.();
      return;
    }
    if (event.key !== 'Tab') return;
    const focusable = [...this.content.querySelectorAll<HTMLElement>('button:not([disabled])')];
    const first = focusable[0];
    const last = focusable.at(-1);
    if (first === undefined || last === undefined) return;
    const onEdge = event.shiftKey
      ? document.activeElement === first
      : document.activeElement === last;
    if (!onEdge) return;
    event.preventDefault();
    (event.shiftKey ? last : first).focus();
  }

  open(): void {
    if (this.state_ === 'open' || this.state_ === 'opening') return;
    this.state_ = 'opening';
    this.root.classList.remove('rc-hidden');
    this.root.classList.add('rc-visible');
    const active = document.activeElement;
    this.restoreFocusTo = active instanceof HTMLElement ? active : null;
    this.content.focus();
    this.delay.start(OVERLAY_TRANSITION_MS);
  }

  close(): void {
    if (this.state_ === 'closed' || this.state_ === 'closing') return;
    this.state_ = 'closing';
    this.root.classList.remove('rc-visible');
    this.root.classList.add('rc-hidden');
    this.restoreFocusTo?.focus();
    this.restoreFocusTo = null;
    this.delay.start(OVERLAY_TRANSITION_MS);
  }

  update(dtMs: number): void {
    if (!this.delay.update(dtMs)) return;
    if (this.state_ === 'opening') {
      this.state_ = 'open';
      this.onOpened?.();
    } else if (this.state_ === 'closing') {
      this.state_ = 'closed';
      this.onClosed?.();
    }
  }

  dispose(): void {
    this.root.remove();
  }
}

/** The persistent DOM the scenes share. */
export class Chrome {
  readonly canvas: HTMLCanvasElement;
  readonly ctx: CanvasRenderingContext2D;
  readonly title: HTMLButtonElement;
  readonly gameUi: HTMLDivElement;
  readonly blocklyHost: HTMLDivElement;
  readonly footer: HTMLDivElement;
  readonly play: PlayButton;
  readonly scrollArrows: ScrollArrows;
  readonly overflow: OverflowMenu;
  readonly overlayHost: HTMLDivElement;
  readonly end: HTMLDivElement;
  readonly endTitle: HTMLHeadingElement;
  readonly endMapButton: HTMLButtonElement;

  private readonly onResize: () => void;

  constructor(
    readonly root: HTMLElement,
    labels: {
      startButton: string;
      levelMap: string;
      menuButton: string;
      search: string;
      share: string;
    },
  ) {
    root.classList.add('rc-root');

    // Read every element out of the fragment before appending it: once appended, the fragment is
    // empty, and querying `root` would also reach anything already there.
    const chrome = clone('tpl-chrome');
    this.canvas = el(chrome, '.rc-canvas');
    this.title = el(chrome, '.rc-title');
    this.gameUi = el(chrome, '.rc-gameui');
    this.footer = el(chrome, '.rc-footer');
    this.blocklyHost = el(chrome, '.rc-blockly');
    this.overlayHost = el(chrome, '.rc-overlays');
    this.end = el(chrome, '.rc-end');
    this.endTitle = el(chrome, '.rc-end-title');
    this.endMapButton = el(chrome, '.rc-end-map');
    this.endMapButton.title = labels.levelMap;
    el<HTMLElement>(chrome, '.rc-end-bg').style.backgroundImage =
      `url(${assetUrl('end_screen_bg.svg')})`;

    this.overflow = new OverflowMenu(chrome, labels);
    this.scrollArrows = new ScrollArrows(chrome);
    this.play = new PlayButton(chrome, labels.startButton);

    root.append(chrome);

    const ctx = this.canvas.getContext('2d');
    if (!ctx) throw new Error('2D canvas context unavailable');
    this.ctx = ctx;

    this.onResize = () => {
      this.updateOverlayScale();
      this.syncCanvasSize();
    };
    window.addEventListener('resize', this.onResize);
    this.updateOverlayScale();
    this.syncCanvasSize();
  }

  /**
   * Keeps the backing store at 2x the CSS size for the scenes that only fill the canvas. A `Stage`
   * has its own `CanvasResolution` doing this per frame; both write the same numbers.
   */
  syncCanvasSize(): void {
    this.canvas.width = BACKING_STORE_SCALE * this.canvas.clientWidth;
    this.canvas.height = BACKING_STORE_SCALE * this.canvas.clientHeight;
  }

  /** Footer height: 64 px without the loop block, 84 px with it. */
  setFooterHeight(px: number): void {
    this.footer.style.height = `${px}px`;
  }

  showGameUi(visible: boolean): void {
    setVisible(this.gameUi, visible);
  }

  /** shrink the 480x480 overlay card to fit a small viewport. */
  updateOverlayScale(): void {
    const fit = Math.min(480, this.root.offsetWidth - 20, this.root.offsetHeight - 20);
    this.root.style.setProperty('--rc-overlay-scale', String(Math.min(1, fit / 480)));
  }

  dispose(): void {
    window.removeEventListener('resize', this.onResize);
  }
}
