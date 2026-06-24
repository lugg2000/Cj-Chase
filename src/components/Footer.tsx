import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--crimson-dark)',
      padding: '48px 24px 28px',
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        {/* Text logo */}
        <div style={{ marginBottom: 28 }}>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            color: '#fff',
            fontSize: '1.2rem',
            fontWeight: 700,
            letterSpacing: '0.02em',
            lineHeight: 1.2
          }}>
            <span style={{ display: 'block' }}>CJ Chase</span>
            <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 400, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.75, marginTop: 3 }}>Business Solutions</span>
          </div>
        </div>

        {/* Footer nav */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px 24px',
          marginBottom: 28,
          paddingBottom: 24,
          borderBottom: '1px solid rgba(255,255,255,.15)'
        }}>
          {[
            { label: 'Home', href: '/' },
            { label: 'The Data Journey', href: '/journey' },
            { label: 'Services', href: '/services' },
            { label: 'Case Studies', href: '/cases' },
            { label: 'Testimonials', href: '/testimonials' },
            { label: 'Thinking', href: '/thinking' },
            { label: 'About Mark', href: '/story' },
            { label: 'Contact', href: '/contact' },
          ].map(item => (
            <Link
              key={item.label}
              href={item.href}
              style={{
                color: 'rgba(255,255,255,.7)',
                textDecoration: 'none',
                fontFamily: "'Open Sans', sans-serif",
                fontSize: '.78rem',
                fontWeight: 600,
                letterSpacing: '.06em',
                textTransform: 'uppercase'
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p style={{
          color: 'rgba(255,255,255,.55)',
          fontSize: '.8rem',
          lineHeight: 1.7,
          fontFamily: "'Open Sans', sans-serif"
        }}>
          © 2026 CJ Chase Business Solutions Ltd &nbsp;·&nbsp; Reg. No. 11756805 &nbsp;·&nbsp; East Brent, Somerset
          &nbsp;·&nbsp;{' '}
          <a
            href="mailto:mark.lugg@CJChaseBusinessSolutions.com"
            style={{ color: 'rgba(255,255,255,.7)', textDecoration: 'none' }}
          >
            mark.lugg@CJChaseBusinessSolutions.com
          </a>
        </p>
      </div>
    </footer>
  );
}
