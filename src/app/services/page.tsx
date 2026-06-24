import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services",
  description: "Data strategy, programme delivery, organisational transformation, and AI readiness. Every engagement shaped around what you actually need.",
};


const services = [
  {
    title: 'Data Strategy & Foundations',
    tagline: 'For organisations where data exists but isn\'t trusted, connected, or acted on.',
    items: [
      'Data strategy & roadmap definition',
      'BI maturity assessments',
      'Data governance frameworks',
      'Defining metrics & single sources of truth',
      'Data architecture design (Kimball, Data Mesh)',
    ],
  },
  {
    title: 'Programme & Project Delivery',
    tagline: 'End-to-end delivery leadership for data and technology programmes.',
    items: [
      'Programme management (Director level)',
      'Agile / hybrid delivery',
      'Vendor selection & management',
      'Stakeholder & executive engagement',
      'Rescuing stalled projects',
    ],
  },
  {
    title: 'Organisational Transformation',
    tagline: 'Restructuring, insourcing, scaling or right-sizing data and analytics functions.',
    items: [
      'Target operating model design',
      'Insourcing & team scaling',
      'Foundational business reviews',
      'Process & operational improvement',
    ],
  },
  {
    title: 'AI Readiness & Delivery',
    tagline: 'Bridging the gap between AI ambition and AI reality.',
    items: [
      'AI readiness assessment',
      'AI programme delivery & management',
      'Output testing & validation',
      'Requirements & product direction',
      'Fractional AI advisory',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero
          eyebrow="What I do"
          title="No organisation too large, no problem too small"
          subtitle="From a growing business needing better reports to a global organisation running AI programmes — the engagement is shaped around what you actually need."
          minHeight={300}
          bgImage="/images/shutterstock_678316639_v2.jpg"
        />

        <section style={{ padding: '72px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: '.72rem',
              fontWeight: 700,
              letterSpacing: '.18em',
              textTransform: 'uppercase',
              color: 'var(--crimson)',
              marginBottom: 12,
            }}>How I can help</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
              fontWeight: 700,
              color: 'var(--text)',
              marginBottom: 16,
            }}>Services</h2>
            <div style={{ width: 44, height: 3, background: 'var(--crimson)', marginBottom: 28 }} />
            <p style={{ maxWidth: 760, fontSize: '1.02rem', color: 'var(--dgrey)', lineHeight: 1.82, fontWeight: 300, marginBottom: 48 }}>
              I work across the full data maturity journey — from foundations to AI delivery. Every engagement starts with understanding your specific challenge, not selling a pre-packaged solution.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 24
            }}>
              {services.map(service => (
                <div key={service.title} style={{
                  background: 'var(--offwhite)',
                  padding: '32px 28px',
                  borderTop: '3px solid var(--crimson)'
                }}>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--text)',
                    marginBottom: 12
                  }}>{service.title}</h3>
                  <p style={{
                    fontSize: '.88rem',
                    color: 'var(--dgrey)',
                    lineHeight: 1.65,
                    marginBottom: 20,
                    fontStyle: 'italic'
                  }}>{service.tagline}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {service.items.map(item => (
                      <li key={item} style={{
                        display: 'flex',
                        gap: 10,
                        marginBottom: 8,
                        fontSize: '.88rem',
                        color: 'var(--text)',
                        lineHeight: 1.5
                      }}>
                        <span style={{ color: 'var(--crimson)', fontWeight: 700, flexShrink: 0 }}>→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Free conversation box */}
            <div style={{
              background: 'var(--offwhite)',
              borderLeft: '4px solid var(--crimson)',
              padding: '28px 32px',
              marginTop: 40
            }}>
              <p style={{ fontSize: '.95rem', color: 'var(--text)', lineHeight: 1.82 }}>
                <strong>Every engagement begins with a free conversation.</strong> I don't lead with a methodology — I lead with questions. What decisions are you trying to make better? What's getting in the way? The initial meeting costs you nothing.
              </p>
            </div>

            <div style={{ textAlign: 'center', marginTop: 44 }}>
              <Link href="/contact" style={{
                display: 'inline-block',
                border: '2px solid var(--crimson)',
                color: 'var(--crimson)',
                padding: '14px 32px',
                fontFamily: "'Open Sans', sans-serif",
                fontSize: '.82rem',
                fontWeight: 700,
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                textDecoration: 'none'
              }}>
                Book a free initial conversation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
