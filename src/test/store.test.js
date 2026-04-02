import { describe, it, expect, beforeEach } from 'vitest';
import useMacbookStore from '../store/index.js';

describe('useMacbookStore', () => {
  beforeEach(() => {
    useMacbookStore.getState().reset();
  });

  it('has correct initial color', () => {
    expect(useMacbookStore.getState().color).toBe('#2e2c2e');
  });

  it('has correct initial scale', () => {
    expect(useMacbookStore.getState().scale).toBe(0.08);
  });

  it('has correct initial texture', () => {
    expect(useMacbookStore.getState().texture).toBe('/videos/feature-1.mp4');
  });

  it('setColor updates the color', () => {
    useMacbookStore.getState().setColor('#ffffff');
    expect(useMacbookStore.getState().color).toBe('#ffffff');
  });

  it('setScale updates the scale', () => {
    useMacbookStore.getState().setScale(0.12);
    expect(useMacbookStore.getState().scale).toBe(0.12);
  });

  it('setTexture updates the texture', () => {
    useMacbookStore.getState().setTexture('/videos/feature-2.mp4');
    expect(useMacbookStore.getState().texture).toBe('/videos/feature-2.mp4');
  });

  it('reset restores all values to defaults', () => {
    useMacbookStore.getState().setColor('#ff0000');
    useMacbookStore.getState().setScale(0.2);
    useMacbookStore.getState().setTexture('/videos/feature-5.mp4');

    useMacbookStore.getState().reset();

    const state = useMacbookStore.getState();
    expect(state.color).toBe('#2e2c2e');
    expect(state.scale).toBe(0.08);
    expect(state.texture).toBe('/videos/feature-1.mp4');
  });
});
