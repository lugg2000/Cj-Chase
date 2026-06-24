import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Mark Lugg to discuss your data challenge or opportunity. The first conversation is always free.",
};


export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero
          eyebrow="Let's talk"
          title="The first conversation is always free"
          subtitle="Whether you're a growing business or a global enterprise — if data is either a problem or an opportunity, I'd like to hear about it."
          minHeight={260}
          bgImage="/images/shutterstock_678316639_v2.jpg"
        />

        <section style={{ padding: '72px 24px' }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>

            <div style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: '.72rem',
              fontWeight: 700,
              letterSpacing: '.18em',
              textTransform: 'uppercase',
              color: 'var(--crimson)',
              marginBottom: 12,
            }}>Get in touch</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.4rem, 2.8vw, 1.9rem)',
              fontWeight: 700,
              color: 'var(--text)',
              marginBottom: 16,
            }}>Start the conversation</h2>
            <div style={{ width: 44, height: 3, background: 'var(--crimson)', marginBottom: 28 }} />
            <p style={{ fontSize: '.97rem', color: 'var(--dgrey)', lineHeight: 1.88, fontWeight: 300, marginBottom: 48, maxWidth: 680 }}>
              I work with organisations of every size across data strategy, programme delivery, and AI readiness. Every engagement starts with a conversation — no obligation, no sales pitch, just an honest discussion about where you are and what the next step might look like.
            </p>

            {/* Contact methods */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 24,
              marginBottom: 40
            }}>
              {[
                {
                  icon: '✉',
                  label: 'Email',
                  value: 'mark.lugg@CJChaseBusinessSolutions.com',
                  href: 'mailto:mark.lugg@CJChaseBusinessSolutions.com',
                  cta: 'Send an email',
                  external: false,
                },
                {
                  icon: '🔗',
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/mark-lugg-6212804',
                  href: 'https://linkedin.com/in/mark-lugg-6212804',
                  cta: 'Connect on LinkedIn',
                  external: true,
                },
              ].map(item => (
                <div key={item.label} style={{
                  background: 'var(--offwhite)',
                  padding: '32px 28px',
                  borderTop: '3px solid var(--crimson)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: '1.3rem' }} aria-hidden="true">{item.icon}</span>
                    <span style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: '.72rem',
                      fontWeight: 700,
                      letterSpacing: '.12em',
                      textTransform: 'uppercase',
                      color: 'var(--crimson)'
                    }}>{item.label}</span>
                  </div>
                  <div style={{
                    fontSize: '.88rem',
                    color: 'var(--dgrey)',
                    wordBreak: 'break-all',
                    lineHeight: 1.5
                  }}>{item.value}</div>
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    style={{
                      display: 'inline-block',
                      marginTop: 'auto',
                      background: 'var(--crimson)',
                      color: '#fff',
                      padding: '10px 20px',
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: '.78rem',
                      fontWeight: 700,
                      letterSpacing: '.08em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      alignSelf: 'flex-start'
                    }}
                  >
                    {item.cta}
                  </a>
                </div>
              ))}
            </div>

            {/* Location + what to expect */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 24
            }}>
              <div style={{
                background: 'var(--offwhite)',
                padding: '28px 32px',
                borderLeft: '4px solid var(--crimson)'
              }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: 12
                }}>Based in Somerset</h3>
                <p style={{ fontSize: '.9rem', color: 'var(--dgrey)', lineHeight: 1.72 }}>
                  East Brent, Somerset. Remote-first with on-site availability across the UK and internationally.
                </p>
              </div>

              <div style={{
                background: 'var(--crimson)',
                padding: '28px 32px',
                color: '#fff'
              }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  marginBottom: 12
                }}>What to expect</h3>
                <p style={{ fontSize: '.88rem', color: 'rgba(255,255,255,.88)', lineHeight: 1.72 }}>
                  The first conversation is always free, with no obligation. I'll ask where you are, what's getting in the way, and what the right next step might be. Sometimes that's working with me. Sometimes it's something else — and I'll tell you that honestly.
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
