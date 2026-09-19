/**
 * The three overlay scenes: the progress map, the end screen and the share card. Each drops a card
 * into the chrome's overlay host, owns nothing else, and finishes when its fly-out ends.
 */

import { BACKGROUND_COLOUR } from '../../render/renderer';
import type { GameContext } from '../context';
import { Delay, Scene } from '../scene';
import { Overlay, clone, el, setVisible } from '../ui';
import { LoadingScene } from './loading';

// The progress map: six level icons with the lock,
// the ribbon of a shortest solution and the target block count.
//
// It serves as the level intro overlay for L4-L6 (auto-hiding after 4000 ms) and, with
// `interactive: true`, as the level picker behind the map button.
//
// Both variants finish when the fly-out ends, the same timing a tutorial overlay has.

interface LevelMapOptions {
  /** Marks the rabbit; `null` (the end screen) marks none. */
  currentLevel: number | null;
  /** Adds the close button and makes the icons clickable. */
  interactive?: boolean;
  /** Auto-close delay after the drop-in; the L4-L6 intro passes 4000. */
  autoHideMs?: number;
  onSelect?: (level: number) => void;
}

export class LevelMapScene extends Scene {
  private readonly overlay: Overlay;
  private readonly icons: HTMLElement[] = [];
  private readonly autoHide = new Delay();
  private finished = false;

  constructor(
    private readonly context: GameContext,
    private readonly options: LevelMapOptions,
  ) {
    super();
    const { chrome, i18n, levels } = context;
    this.overlay = new Overlay(chrome.overlayHost, 'rc-map-overlay');
    this.overlay.onBackdropClick = () => this.close();
    this.overlay.onOpened = () => {
      if (options.autoHideMs !== undefined) this.autoHide.start(options.autoHideMs);
    };
    this.overlay.onClosed = () => {
      this.finished = true;
    };

    const card = clone('tpl-map');
    const closeButton = el<HTMLButtonElement>(card, '.rc-x-button');
    if (options.interactive) {
      // The cursor, the hover/press colors and the soft outline on the current level all hang off
      // this class.
      this.overlay.content.classList.add('rc-map-interactive');
      closeButton.addEventListener('click', () => this.close());
    } else {
      closeButton.remove();
    }

    const row = el(card, '.rc-map-levels');
    for (const [index, level] of levels.levels.entries()) {
      row.append(this.buildIcon(index, level.targetBlockCount));
    }
    el(card, '.rc-map-key').innerHTML = i18n.fill('{{Shortest Solution}}');

    this.overlay.content.append(card);
  }

  protected override onFocus(): void {
    this.refresh();
    this.overlay.open();
  }

  override update(dtMs: number): void {
    this.overlay.update(dtMs);
    if (this.autoHide.update(dtMs)) this.close();
  }

  override isFinished(): boolean {
    return this.finished;
  }

  override dispose(): void {
    super.dispose();
    this.overlay.dispose();
  }

  private buildIcon(index: number, targetBlockCount: number): HTMLElement {
    const fragment = clone('tpl-map-level');
    const icon = el<HTMLElement>(fragment, '.rc-level');
    if (index === 0) el(icon, '.rc-level-bar').remove();
    el(icon, '.rc-level-number').textContent = String(index + 1);
    el(icon, '.rc-level-target').textContent = String(targetBlockCount);
    if (this.options.interactive) {
      // A real `<button>` here would need the background and padding overrides the shared reset
      // deliberately leaves alone, so the div carries the semantics instead.
      icon.role = 'button';
      icon.tabIndex = 0;
      icon.addEventListener('click', () => this.select(index));
      icon.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        this.select(index);
      });
    }
    this.icons.push(icon);
    return icon;
  }

  /** the icon states, recomputed every time the map opens. */
  private refresh(): void {
    const { progress, levels } = this.context;
    for (const [index, icon] of this.icons.entries()) {
      const current = index === this.options.currentLevel;
      const unlocked = progress.isUnlocked(index);
      icon.classList.toggle('rc-current', current);
      icon.classList.toggle('rc-unlocked', unlocked);
      icon.classList.toggle('rc-locked', !unlocked && !current);
      icon.classList.toggle(
        'rc-ribbon',
        progress.hasRibbon(index, levels.levels[index].targetBlockCount),
      );
      // The lock is drawn, so it has to be announced as well as guarded in `select`.
      if (this.options.interactive) icon.ariaDisabled = String(!unlocked);
    }
  }

  private select(level: number): void {
    if (!this.context.progress.isUnlocked(level)) return;
    this.close();
    if (level !== this.options.currentLevel) this.options.onSelect?.(level);
  }

  private close(): void {
    this.autoHide.cancel();
    this.overlay.close();
  }
}

// The end screen: the carrot-cake picture, the title and one button back to the level map.
//
// It never finishes: the only way on is picking a level from the map.

export class EndScene extends Scene {
  private mapOverlay: LevelMapScene | null = null;
  private readonly onMapClick: () => void;

  constructor(private readonly context: GameContext) {
    super();
    this.onMapClick = () => this.openMap();
  }

  protected override onFocus(): void {
    const { chrome, i18n } = this.context;
    chrome.endTitle.textContent = i18n.t('Title');
    chrome.endMapButton.addEventListener('click', this.onMapClick);
    setVisible(chrome.end, true);
  }

  protected override onBlur(): void {
    const { chrome } = this.context;
    chrome.endMapButton.removeEventListener('click', this.onMapClick);
    setVisible(chrome.end, false);
    this.mapOverlay?.dispose();
    this.mapOverlay = null;
  }

  override update(dtMs: number): void {
    if (!this.mapOverlay) return;
    this.mapOverlay.update(dtMs);
    if (this.mapOverlay.isFinished()) {
      this.mapOverlay.dispose();
      this.mapOverlay = null;
    }
  }

  override render(): void {
    const { ctx } = this.context.chrome;
    ctx.globalAlpha = 1;
    ctx.fillStyle = BACKGROUND_COLOUR;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  private openMap(): void {
    if (this.mapOverlay) return;
    this.mapOverlay = new LevelMapScene(this.context, {
      // No level is current here, so every unlocked icon is pickable.
      currentLevel: null,
      interactive: true,
      onSelect: (level) => {
        this.context.scenes.replaceAll(new LoadingScene(this.context, level, false));
      },
    });
    this.mapOverlay.focus();
  }
}

// The share overlay: the picture, the three social buttons and a copyable link. The link is the
// page's own URL with a `ds=` source tag naming the channel it was shared through.

/** The channel tag rides on the link as `ds=<source>`. */
function shareLink(source: string): string {
  const url = new URL(window.location.href);
  url.hash = '';
  url.searchParams.set('ds', source);
  return url.toString();
}

const COPIED_MS = 2000;

export class ShareScene extends Scene {
  private readonly overlay: Overlay;
  private finished = false;

  constructor(context: GameContext) {
    super();
    const { chrome, i18n } = context;
    const text = i18n.t('Automatically Replaced Share Text JS');
    const subject = i18n.t('Title');

    this.overlay = new Overlay(chrome.overlayHost, 'rc-share-overlay');
    this.overlay.onBackdropClick = () => this.close();
    this.overlay.onClosed = () => {
      this.finished = true;
    };

    const card = clone('tpl-share');
    const copied = el<HTMLElement>(card, '.rc-share-copied');
    copied.textContent = i18n.t('Share Link Copied');
    el<HTMLButtonElement>(card, '.rc-x-button').addEventListener('click', () => this.close());

    const open = (href: string): void => {
      window.open(href, '_blank', 'noopener,noreferrer');
    };
    const wire = (selector: string, label: string, onClick: () => void): void => {
      const btn = el<HTMLButtonElement>(card, selector);
      btn.title = label;
      btn.addEventListener('click', onClick);
    };
    wire('.rc-share-fb', i18n.t('Share - Facebook'), () =>
      open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink('fb'))}`),
    );
    wire('.rc-share-tw', i18n.t('Share - Twitter'), () => {
      const body = encodeURIComponent(`${text}\n${shareLink('tw')}`);
      open(`https://twitter.com/intent/tweet?text=${body}`);
    });
    wire('.rc-share-em', i18n.t('Share - E-mail'), () => {
      const subjectParam = encodeURIComponent(subject);
      const body = encodeURIComponent(`${text}\n${shareLink('em')}`);
      window.location.href = `mailto:?subject=${subjectParam}&body=${body}`;
    });

    const linkRow = el<HTMLButtonElement>(card, '.rc-share-link');
    el(linkRow, 'span').textContent = shareLink('cl');
    linkRow.addEventListener('click', () => {
      void navigator.clipboard?.writeText(shareLink('cl')).catch(() => undefined);
      copied.classList.remove('rc-hidden');
      window.setTimeout(() => copied.classList.add('rc-hidden'), COPIED_MS);
    });

    this.overlay.content.append(card);
  }

  protected override onFocus(): void {
    this.overlay.open();
  }

  override isFinished(): boolean {
    return this.finished;
  }

  override dispose(): void {
    super.dispose();
    this.overlay.dispose();
  }

  private close(): void {
    this.overlay.close();
  }
}
