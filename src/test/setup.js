import '@testing-library/jest-dom';

// Mock gsap to avoid animation side effects in tests
vi.mock('gsap', () => ({
  default: {
    registerPlugin: vi.fn(),
    to: vi.fn(),
    from: vi.fn(),
    fromTo: vi.fn(),
    set: vi.fn(),
    timeline: vi.fn(() => ({
      to: vi.fn().mockReturnThis(),
      from: vi.fn().mockReturnThis(),
      fromTo: vi.fn().mockReturnThis(),
    })),
  },
  ScrollTrigger: { create: vi.fn(), refresh: vi.fn() },
}));

vi.mock('gsap/all', () => ({
  ScrollTrigger: { create: vi.fn(), refresh: vi.fn() },
}));

vi.mock('@gsap/react', () => ({
  useGSAP: vi.fn((fn) => fn()),
}));

// Mock canvas / WebGL for Three.js
HTMLCanvasElement.prototype.getContext = vi.fn(() => null);
