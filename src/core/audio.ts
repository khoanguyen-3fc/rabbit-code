/**
 * Web Audio clip player. One decoded buffer holds every clip; a clip is a (start, duration) window
 * into it, taken from the audio manifest.
 *
 * Every method is a no-op when Web Audio is unavailable, so callers never need to check.
 */

import { assetUrl, type AudioClip, type ClipName, loadAudioManifest } from './assets';

interface PlayOptions {
  /** Defaults to the clip's own `loop` flag; only MUSIC loops. */
  loop?: boolean;
  delayMs?: number;
  offsetMs?: number;
}

interface WindowWithWebkitAudio extends Window {
  webkitAudioContext?: typeof AudioContext;
}

function createContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  const Ctor = window.AudioContext ?? (window as WindowWithWebkitAudio).webkitAudioContext;
  if (!Ctor) return null;
  try {
    return new Ctor();
  } catch {
    return null;
  }
}

/** `canPlayType("audio/ogg") != "" ? ".ogg" : ".mp3"`. */
function pickFormat(): string {
  return document.createElement('audio').canPlayType('audio/ogg') !== '' ? '.ogg' : '.mp3';
}

const UNLOCK_EVENTS = ['pointerdown', 'touchend', 'keydown'] as const;

export class AudioPlayer {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private buffer: AudioBuffer | null = null;
  private readonly clips = new Map<ClipName, AudioClip>();
  private readonly sources = new Map<ClipName, Set<AudioBufferSourceNode>>();
  private muted = false;
  private pageHidden = false;
  private loading: Promise<void> | null = null;
  private readonly teardown: Array<() => void> = [];

  /** Reads the audio manifest, fetches and decodes the sounds file, arms the unlock handler. Idempotent. */
  load(): Promise<void> {
    this.loading ??= this.loadInternal();
    return this.loading;
  }

  private async loadInternal(): Promise<void> {
    const manifest = await loadAudioManifest();
    for (const clip of manifest.clips) this.clips.set(clip.name, clip);

    const ctx = createContext();
    if (!ctx) return;
    this.ctx = ctx;
    const master = ctx.createGain();
    master.gain.value = 1;
    master.connect(ctx.destination);
    this.master = master;
    this.armUnlock();
    this.watchVisibility();

    const url = assetUrl(`${manifest.file.baseName}${pickFormat()}`);
    const response = await fetch(url);
    if (!response.ok) throw new Error(`audio ${url}: HTTP ${response.status}`);
    this.buffer = await ctx.decodeAudioData(await response.arrayBuffer());
  }

  play(name: ClipName, options: PlayOptions = {}): void {
    const { ctx, master, buffer } = this;
    const clip = this.clips.get(name);
    if (!ctx || !master || !buffer || !clip) return;

    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(master);

    const when = ctx.currentTime + (options.delayMs ?? 0) / 1000;
    const startSec = clip.startMs / 1000;
    const offsetSec = (options.offsetMs ?? 0) / 1000;

    if (options.loop ?? clip.loop) {
      source.loop = true;
      source.loopStart = startSec;
      source.loopEnd = (clip.startMs + clip.durationMs) / 1000;
      source.start(when, startSec + offsetSec);
    } else {
      // The played duration is the whole clip, not shortened by the offset.
      source.start(when, startSec + offsetSec, clip.durationMs / 1000);
    }

    let live = this.sources.get(name);
    if (!live) {
      live = new Set();
      this.sources.set(name, live);
    }
    live.add(source);
    source.onended = () => {
      live.delete(source);
    };
  }

  stop(name: ClipName): void {
    const live = this.sources.get(name);
    if (!live) return;
    for (const source of live) source.stop();
    live.clear();
  }

  stopAll(): void {
    for (const name of this.sources.keys()) this.stop(name);
  }

  /** Master gain 0 / 1; playback keeps running while muted. */
  setMuted(muted: boolean): void {
    this.muted = muted;
    this.applyGain();
  }

  /** Resumes the context; called on the first user gesture, and safe to call again. */
  unlock(): void {
    if (this.ctx?.state === 'suspended') void this.ctx.resume();
  }

  dispose(): void {
    this.stopAll();
    for (const off of this.teardown.splice(0)) off();
    void this.ctx?.close();
    this.ctx = null;
    this.master = null;
    this.buffer = null;
  }

  private applyGain(): void {
    if (this.master) this.master.gain.value = this.muted || this.pageHidden ? 0 : 1;
  }

  /** Browsers start the context suspended until a gesture. */
  private armUnlock(): void {
    const onGesture = (): void => {
      this.unlock();
      for (const type of UNLOCK_EVENTS) document.removeEventListener(type, onGesture, true);
    };
    for (const type of UNLOCK_EVENTS) document.addEventListener(type, onGesture, true);
    this.teardown.push(() => {
      for (const type of UNLOCK_EVENTS) document.removeEventListener(type, onGesture, true);
    });
  }

  /** Mutes while the page is hidden. */
  private watchVisibility(): void {
    const onVisibility = (): void => {
      this.pageHidden = document.visibilityState === 'hidden';
      this.applyGain();
    };
    document.addEventListener('visibilitychange', onVisibility);
    this.teardown.push(() => document.removeEventListener('visibilitychange', onVisibility));
  }
}
