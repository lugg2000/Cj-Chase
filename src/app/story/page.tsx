import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Mark",
  description: "Mark Lugg — 20 years in data, from engineer to strategic leader. Founder of CJ Chase Business Solutions.",
};


const timeline = [
  { year: '2004', role: 'Data Engineer', detail: 'Started career building data warehouses from scratch — ETL pipelines, SQL, dimensional modelling.' },
  { year: '2007', role: 'Senior BI Developer', detail: 'Built reporting layers for financial services and retail clients. First exposure to the gap between data that exists and data that\'s trusted.' },
  { year: '2011', role: 'BI Architect / Lead', detail: 'Moved into architecture and team leadership. First time managing a data function rather than just contributing to one.' },
  { year: '2015', role: 'Data Programme Manager', detail: 'Transitioned into programme management. Leading cross-functional data transformation programmes in energy and legal sectors.' },
  { year: '2019', role: 'Founder, CJ Chase Business Solutions', detail: 'Established independent practice. Working with organisations from SME to enterprise on data strategy, programme delivery, and transformation.' },
  { year: '2021', role: 'Senior PM — Met Office', detail: 'Led the delivery of national data products embedded in public and private sector infrastructure.' },
  { year: '2023', role: 'Programme Director — AstraZeneca', detail: 'Led two concurrent $15M programmes. Insourced 202 roles, scaled the analytics function to 250+, delivered $62M in projected savings a year early.' },
  { year: '2025', role: 'MBA — Open University (in progress)', detail: 'Pursuing MBA to formalise 20 years of applied learning with structured academic rigour. Completed PG Certificate with Distinction.' },
];

const credentials = [
  { label: 'MSP Practitioner', sub: 'Managing Successful Programmes' },
  { label: 'PRINCE2 Practitioner', sub: 'Project management' },
  { label: 'MBA', sub: 'Open University (in progress)' },
  { label: 'BSc Business Information Systems', sub: 'Bournemouth University' },
  { label: 'PG Certificate Business Admin', sub: 'Distinction — Open University' },
];

export default function StoryPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero
          eyebrow="About Mark Lugg — 20 years in the making"
          title="Strategic Data & AI Leader · Founder, CJ Chase Business Solutions"
          minHeight={260}
          bgImage="/images/shutterstock_678316639_v2.jpg"
        />

        <section style={{ padding: '72px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 64, alignItems: 'start' }}>

              {/* Main bio */}
              <div>
                <div style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: '.72rem',
                  fontWeight: 700,
                  letterSpacing: '.18em',
                  textTransform: 'uppercase',
                  color: 'var(--crimson)',
                  marginBottom: 12,
                }}>ML</div>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: 16,
                }}>Mark Lugg</h2>
                <div style={{ width: 44, height: 3, background: 'var(--crimson)', marginBottom: 28 }} />

                {[
                  'I started my career as a data engineer — building data warehouses from scratch, writing SQL, designing ETL pipelines. The technical grounding matters, because it means I understand what\'s actually possible.',
                  'But the longer I spent in data, the more I understood that the real constraint was never the technology. The organisations making progress were the ones where a leader had decided data mattered and created the conditions for it to be used well.',
                  'That gap — between technical capability and business leadership — is what eventually drew me into strategic roles, and later into founding CJ Chase Business Solutions in 2019.',
                  'Since then I\'ve worked at the very top of the scale — leading $15M programmes at AstraZeneca, helping create nationally embedded data products at the Met Office — and at the other end, helping a single person cut a day\'s manual work down to five minutes. I bring the same quality of thinking to both.',
                  'I\'m currently pursuing an MBA at the Open University, having completed my Postgraduate Certificate in Business Administration with Distinction — formalising 20 years of applied learning with a structured academic framework.',
                ].map((para, i) => (
                  <p key={i} style={{
                    fontSize: '.97rem',
                    color: 'var(--dgrey)',
                    lineHeight: 1.88,
                    fontWeight: 300,
                    marginBottom: 20
                  }}>{para}</p>
                ))}
              </div>

              {/* Sidebar — photo + credentials + location */}
              <div>
                {/* Headshot */}
                <div style={{ marginBottom: 24 }}>
                  <Image
                    src="/images/Mark.jpg"
                    alt="Mark Lugg — Founder, CJ Chase Business Solutions"
                    width={320}
                    height={340}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      objectFit: 'cover',
                      objectPosition: 'center top'
                    }}
                    priority
                  />
                </div>

                <div style={{
                  background: 'var(--offwhite)',
                  padding: '32px 28px',
                  marginBottom: 28
                }}>
                  <h3 style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: '.78rem',
                    fontWeight: 700,
                    letterSpacing: '.12em',
                    textTransform: 'uppercase',
                    color: 'var(--crimson)',
                    marginBottom: 20
                  }}>Credentials</h3>
                  {credentials.map((c, i) => (
                    <div key={i} style={{
                      paddingBottom: i < credentials.length - 1 ? 14 : 0,
                      marginBottom: i < credentials.length - 1 ? 14 : 0,
                      borderBottom: i < credentials.length - 1 ? '1px solid var(--mgrey)' : 'none'
                    }}>
                      <div style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: '.88rem', color: 'var(--text)' }}>{c.label}</div>
                      <div style={{ fontSize: '.78rem', color: 'var(--dgrey)', marginTop: 2 }}>{c.sub}</div>
                    </div>
                  ))}
                </div>

                <div style={{
                  background: 'var(--crimson)',
                  padding: '28px',
                  color: '#fff'
                }}>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    marginBottom: 12
                  }}>Based in Somerset</h3>
                  <p style={{ fontSize: '.88rem', color: 'rgba(255,255,255,.82)', lineHeight: 1.65, marginBottom: 16 }}>
                    Working with organisations across the UK and internationally. Remote-first with on-site availability.
                  </p>
                  <a href="mailto:mark.lugg@CJChaseBusinessSolutions.com" style={{
                    color: '#fff',
                    fontSize: '.82rem',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}>mark.lugg@CJChaseBusinessSolutions.com</a>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div style={{ marginTop: 72 }}>
              <div style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: '.72rem',
                fontWeight: 700,
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: 'var(--crimson)',
                marginBottom: 12,
              }}>Career timeline</div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                fontWeight: 700,
                color: 'var(--text)',
                marginBottom: 16,
              }}>The journey: 2004 → present</h2>
              <div style={{ width: 44, height: 3, background: 'var(--crimson)', marginBottom: 40 }} />

              <div style={{ position: 'relative', paddingLeft: 32 }}>
                {/* Timeline line */}
                <div style={{
                  position: 'absolute',
                  left: 8,
                  top: 0,
                  bottom: 0,
                  width: 2,
                  background: 'var(--lgrey)'
                }} />

                {timeline.map((item, i) => (
                  <div key={i} style={{
                    position: 'relative',
                    paddingBottom: i < timeline.length - 1 ? 32 : 0,
                    display: 'flex',
                    gap: 24
                  }}>
                    {/* Dot */}
                    <div style={{
                      position: 'absolute',
                      left: -32,
                      top: 4,
                      width: 14,
                      height: 14,
                      background: i === timeline.length - 1 ? 'var(--crimson)' : 'var(--mgrey)',
                      borderRadius: '50%',
                      border: '2px solid #fff',
                      boxShadow: '0 0 0 2px var(--crimson)'
                    }} />
                    <div>
                      <div style={{
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: '.78rem',
                        fontWeight: 700,
                        letterSpacing: '.1em',
                        color: 'var(--crimson)',
                        marginBottom: 4
                      }}>{item.year}</div>
                      <div style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: 'var(--text)',
                        marginBottom: 6
                      }}>{item.role}</div>
                      <p style={{
                        fontSize: '.88rem',
                        color: 'var(--dgrey)',
                        lineHeight: 1.65,
                        fontWeight: 300,
                        maxWidth: 600
                      }}>{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
