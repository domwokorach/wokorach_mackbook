import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer.jsx';
import { footerLinks } from '../constants/index.js';

describe('Footer', () => {
  it('renders the Apple logo', () => {
    render(<Footer />);
    const logo = screen.getByAltText('Apple logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/logo.svg');
  });

  it('renders the shop info text', () => {
    render(<Footer />);
    expect(
      screen.getByText(/More ways to shop/i)
    ).toBeInTheDocument();
  });

  it('renders the copyright notice', () => {
    render(<Footer />);
    expect(
      screen.getByText(/Copyright © 2026 Apple Inc/i)
    ).toBeInTheDocument();
  });

  it('renders all footer links', () => {
    render(<Footer />);
    footerLinks.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it('footer links have correct href attributes', () => {
    render(<Footer />);
    footerLinks.forEach(({ label, link }) => {
      const anchor = screen.getByText(label).closest('a');
      expect(anchor).toHaveAttribute('href', link);
    });
  });

  it('renders a <footer> element', () => {
    const { container } = render(<Footer />);
    expect(container.querySelector('footer')).not.toBeNull();
  });

  it('renders a horizontal rule divider', () => {
    const { container } = render(<Footer />);
    expect(container.querySelector('hr')).not.toBeNull();
  });
});
