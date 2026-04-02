import { describe, it, expect } from 'vitest';
import {
  navLinks,
  footerLinks,
  features,
  featureSequence,
  performanceImages,
  performanceImgPositions,
} from '../constants/index.js';

describe('navLinks', () => {
  it('contains 6 navigation items', () => {
    expect(navLinks).toHaveLength(6);
  });

  it('every nav link has a label', () => {
    navLinks.forEach((link) => {
      expect(link).toHaveProperty('label');
      expect(typeof link.label).toBe('string');
      expect(link.label.length).toBeGreaterThan(0);
    });
  });

  it('includes expected labels', () => {
    const labels = navLinks.map((l) => l.label);
    expect(labels).toContain('Store');
    expect(labels).toContain('Mac');
    expect(labels).toContain('iPhone');
  });
});

describe('footerLinks', () => {
  it('contains 5 footer links', () => {
    expect(footerLinks).toHaveLength(5);
  });

  it('every footer link has a label and a link', () => {
    footerLinks.forEach((item) => {
      expect(item).toHaveProperty('label');
      expect(item).toHaveProperty('link');
      expect(typeof item.label).toBe('string');
      expect(typeof item.link).toBe('string');
    });
  });

  it('includes Privacy Policy and Terms of Use', () => {
    const labels = footerLinks.map((l) => l.label);
    expect(labels).toContain('Privacy Policy');
    expect(labels).toContain('Terms of Use');
  });
});

describe('features', () => {
  it('contains 5 feature items', () => {
    expect(features).toHaveLength(5);
  });

  it('every feature has id, icon, highlight, text, and styles', () => {
    features.forEach((f) => {
      expect(f).toHaveProperty('id');
      expect(f).toHaveProperty('icon');
      expect(f).toHaveProperty('highlight');
      expect(f).toHaveProperty('text');
      expect(f).toHaveProperty('styles');
    });
  });

  it('feature ids are unique', () => {
    const ids = features.map((f) => f.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('feature icons point to svg files', () => {
    features.forEach((f) => {
      expect(f.icon).toMatch(/\.svg$/);
    });
  });
});

describe('featureSequence', () => {
  it('contains 5 entries', () => {
    expect(featureSequence).toHaveLength(5);
  });

  it('every entry has videoPath, boxClass, and delay', () => {
    featureSequence.forEach((entry) => {
      expect(entry).toHaveProperty('videoPath');
      expect(entry).toHaveProperty('boxClass');
      expect(entry).toHaveProperty('delay');
    });
  });

  it('videoPath values point to mp4 files', () => {
    featureSequence.forEach((entry) => {
      expect(entry.videoPath).toMatch(/\.mp4$/);
    });
  });

  it('first entry has a delay of 1', () => {
    expect(featureSequence[0].delay).toBe(1);
  });
});

describe('performanceImages', () => {
  it('contains 7 performance images', () => {
    expect(performanceImages).toHaveLength(7);
  });

  it('every image has an id and src', () => {
    performanceImages.forEach((img) => {
      expect(img).toHaveProperty('id');
      expect(img).toHaveProperty('src');
    });
  });

  it('image ids are unique', () => {
    const ids = performanceImages.map((img) => img.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe('performanceImgPositions', () => {
  it('has the same count as performanceImages', () => {
    expect(performanceImgPositions).toHaveLength(performanceImages.length);
  });

  it('every position entry has an id', () => {
    performanceImgPositions.forEach((pos) => {
      expect(pos).toHaveProperty('id');
    });
  });

  it('position ids match performanceImages ids', () => {
    const imgIds = performanceImages.map((img) => img.id);
    const posIds = performanceImgPositions.map((pos) => pos.id);
    expect(posIds).toEqual(expect.arrayContaining(imgIds));
  });
});
