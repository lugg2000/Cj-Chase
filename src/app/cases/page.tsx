import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Case Studies",
  description: "$62M in savings at AstraZeneca, nationally embedded data products at the Met Office — real outcomes at every scale.",
};


const cases = [
  {
    org: 'AstraZeneca',
    period: '2023–2025',
    role: 'Programme Director Level',
    headline: '$62M in savings — a year ahead of schedule',
    challenge: 'AstraZeneca needed to insource 202 outsourced data & analytics roles across a globally distributed organisation of 100,000+ people, while simultaneously building a commercial data foundation for self-service reporting for thousands of global users. Two concurrent programmes with a combined budget of ~$15M, at director level with full financial accountability.',
    stats: [
      { value: '$62M', label: 'projected benefit' },
      { value: '$15M', label: 'concurrent budget' },
      { value: '202', label: 'roles insourced' },
    ],
    outcome: 'The insourcing programme delivered a full year ahead of schedule — scaling the analytics function from 77 to 250+ people and establishing governance, team structures, and engagement models to absorb that talent sustainably. The commercial reporting programme built a trusted data foundation for self-service analytics, standardising KPIs and enabling faster commercial decisions. Four business units were aligned around a shared analytics vision and a multi-year strategy, shifting the function to a consultative, ROI-driven model.',
    outcomes: [
      { value: '77 → 250+', label: 'Analytics team' },
      { value: 'Full year', label: 'ahead of schedule' },
    ],
  },
  {
    org: 'The Met Office',
    period: '2021–2023',
    role: 'Senior Project Manager',
    headline: 'From internal data to nationally embedded digital products',
    challenge: 'The Met Office had world-class science but a fragmented data landscape — internal systems that weren\'t talking to each other, and a product portfolio that hadn\'t kept pace with user expectations or commercial opportunity. The brief was to build genuinely useful digital data products, not just reports.',
    stats: [
      { value: 'National', label: 'digital products' },
      { value: 'B2B & B2G', label: 'markets served' },
      { value: '3', label: 'concurrent streams' },
    ],
    outcome: 'Delivered three concurrent product programmes, each embedding Met Office data into national infrastructure and commercial workflows. Products moved from internal tools to externally viable, revenue-generating assets with real uptake in the public and private sectors. Established the delivery framework for ongoing product development.',
    outcomes: [
      { value: 'National', label: 'product embedding' },
      { value: 'Commercial', label: 'revenue generated' },
    ],
  },
];

export default function CasesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero
          eyebrow="Real work, real outcomes"
          title="Results at every scale"
          subtitle="From saving one person a day's work a month to delivering $62M in savings at a global enterprise — every engagement gets the same quality of thinking."
          minHeight={300}
          bgImage="/images/shutterstock_425727901_v2.jpg"
        />

        <section style={{ padding: '72px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            {cases.map((c, i) => (
              <div key={c.org} style={{
                marginBottom: i < cases.length - 1 ? 72 : 0,
                paddingBottom: i < cases.length - 1 ? 72 : 0,
                borderBottom: i < cases.length - 1 ? '2px solid var(--lgrey)' : 'none'
              }}>
                {/* Header */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 16,
                  alignItems: 'flex-start',
                  marginBottom: 32
                }}>
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <div style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: '.72rem',
                      fontWeight: 700,
                      letterSpacing: '.18em',
                      textTransform: 'uppercase',
                      color: 'var(--crimson)',
                      marginBottom: 8
                    }}>{c.org} · {c.period} · {c.role}</div>
                    <h2 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 'clamp(1.4rem, 2.8vw, 1.9rem)',
                      fontWeight: 700,
                      color: 'var(--text)',
                      lineHeight: 1.25
                    }}>{c.headline}</h2>
                  </div>
                  {/* Stats */}
                  <div style={{
                    display: 'flex',
                    gap: 20,
                    flexWrap: 'wrap'
                  }}>
                    {c.stats.map(stat => (
                      <div key={stat.label} style={{
                        background: 'var(--crimson)',
                        padding: '16px 20px',
                        textAlign: 'center',
                        minWidth: 90
                      }}>
                        <div style={{
                          fontFamily: "'Playfair Display', serif",
                          color: '#fff',
                          fontSize: '1.4rem',
                          fontWeight: 700,
                          lineHeight: 1.1
                        }}>{stat.value}</div>
                        <div style={{
                          color: 'rgba(255,255,255,.75)',
                          fontSize: '.7rem',
                          letterSpacing: '.06em',
                          textTransform: 'uppercase',
                          marginTop: 4
                        }}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }} className="case-grid">
                  <div>
                    <h3 style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: '.78rem',
                      fontWeight: 700,
                      letterSpacing: '.12em',
                      textTransform: 'uppercase',
                      color: 'var(--crimson)',
                      marginBottom: 12
                    }}>The Challenge</h3>
                    <p style={{ fontSize: '.93rem', color: 'var(--dgrey)', lineHeight: 1.82, fontWeight: 300 }}>
                      {c.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: '.78rem',
                      fontWeight: 700,
                      letterSpacing: '.12em',
                      textTransform: 'uppercase',
                      color: 'var(--crimson)',
                      marginBottom: 12
                    }}>The Outcome</h3>
                    <p style={{ fontSize: '.93rem', color: 'var(--dgrey)', lineHeight: 1.82, fontWeight: 300, marginBottom: 20 }}>
                      {c.outcome}
                    </p>
                    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                      {c.outcomes.map(o => (
                        <div key={o.label} style={{
                          background: 'var(--offwhite)',
                          padding: '12px 16px',
                          borderLeft: '3px solid var(--crimson)'
                        }}>
                          <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)' }}>{o.value}</div>
                          <div style={{ fontSize: '.76rem', color: 'var(--dgrey)', marginTop: 2 }}>{o.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <style>{`
                  @media (max-width: 700px) {
                    .case-grid { grid-template-columns: 1fr !important; }
                  }
                `}</style>
              </div>
            ))}

            {/* Smaller engagements */}
            <div style={{
              background: 'var(--offwhite)',
              padding: '40px 36px',
              marginTop: 72,
              borderLeft: '4px solid var(--crimson)'
            }}>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.2rem',
                fontWeight: 700,
                color: 'var(--text)',
                marginBottom: 16
              }}>Smaller engagements matter too</h3>
              <p style={{ fontSize: '.93rem', color: 'var(--dgrey)', lineHeight: 1.82, fontWeight: 300, maxWidth: 720 }}>
                Not every engagement is a $15M programme. I've helped a single person in a one-person PMO cut a full day's manual work down to five minutes. I've helped growing businesses build their first trusted reporting layer. The scale changes. The quality of thinking doesn't.
              </p>
              <div style={{ marginTop: 24 }}>
                <Link href="/contact" style={{
                  display: 'inline-block',
                  background: 'var(--crimson)',
                  color: '#fff',
                  padding: '12px 24px',
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: '.82rem',
                  fontWeight: 700,
                  letterSpacing: '.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none'
                }}>
                  Talk about your challenge
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
