'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navItems = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'journey', label: 'The Data Journey', href: '/journey' },
  { id: 'services', label: 'Services', href: '/services' },
  { id: 'cases', label: 'Case Studies', href: '/cases' },
  { id: 'testimonials', label: 'Testimonials', href: '/testimonials' },
  { id: 'thinking', label: 'Thinking', href: '/thinking' },
  { id: 'story', label: 'About Mark', href: '/story' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header style={{
      background: 'var(--crimson)',
      position: 'sticky',
      top: 0,
      zIndex: 200,
      boxShadow: '0 2px 12px rgba(0,0,0,.3)'
    }}>
      <div style={{
        maxWidth: 1400,
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 76,
        gap: 24
      }}>
        {/* Logo — fixed width so nav always gets remaining space */}
        <Link
          href="/"
          aria-label="CJ Chase Business Solutions — home"
          style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}
        >
          <Image
            src="/images/Color_logo_-_no_background.svg"
            alt="CJ Chase Business Solutions"
            width={180}
            height={56}
            style={{ height: 56, width: 'auto' }}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" style={{ display: 'flex', gap: 0, flexWrap: 'nowrap' }} className="desktop-nav">
          {navItems.map(item => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.id}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                style={{
                  borderBottom: isActive ? '3px solid #fff' : '3px solid transparent',
                  color: isActive ? '#fff' : 'rgba(255,255,255,.88)',
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: '.72rem',
                  letterSpacing: '.04em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  cursor: 'pointer',
                  padding: '8px 9px',
                  textDecoration: 'none',
                  display: 'block',
                  whiteSpace: 'nowrap',
                  transition: 'color .2s, background .2s'
                }}
                onMouseEnter={e => {
                  (e.target as HTMLAnchorElement).style.color = '#fff';
                  (e.target as HTMLAnchorElement).style.background = 'rgba(255,255,255,.1)';
                }}
                onMouseLeave={e => {
                  (e.target as HTMLAnchorElement).style.color = isActive ? '#fff' : 'rgba(255,255,255,.88)';
                  (e.target as HTMLAnchorElement).style.background = 'none';
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'none',
            flexDirection: 'column',
            gap: 5,
            padding: 8,
            flexShrink: 0
          }}
        >
          <span style={{ display: 'block', width: 24, height: 2, background: '#fff' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: '#fff' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: '#fff' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav id="mobile-menu" aria-label="Mobile navigation" style={{
          background: 'var(--crimson-dark)',
          padding: '12px 0'
        }}>
          {navItems.map(item => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.id}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '10px 24px',
                  color: isActive ? '#fff' : 'rgba(255,255,255,.85)',
                  textDecoration: 'none',
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: '.85rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '.05em',
                  background: isActive ? 'rgba(255,255,255,.1)' : 'transparent'
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}

      <style>{`
        @media (max-width: 1060px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
