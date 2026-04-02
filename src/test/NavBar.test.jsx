import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import NavBar from '../components/NavBar.jsx';
import { navLinks } from '../constants/index.js';

describe('NavBar', () => {
  it('renders the Apple logo', () => {
    render(<NavBar />);
    const logo = screen.getByAltText('Apple logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/logo.svg');
  });

  it('renders all navigation links', () => {
    render(<NavBar />);
    navLinks.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it('renders the search button', () => {
    render(<NavBar />);
    expect(screen.getByAltText('Search')).toBeInTheDocument();
  });

  it('renders the cart button', () => {
    render(<NavBar />);
    expect(screen.getByAltText('Cart')).toBeInTheDocument();
  });

  it('renders inside a <header> element', () => {
    const { container } = render(<NavBar />);
    expect(container.querySelector('header')).not.toBeNull();
  });

  it('renders a <nav> element inside the header', () => {
    const { container } = render(<NavBar />);
    expect(container.querySelector('nav')).not.toBeNull();
  });
});
