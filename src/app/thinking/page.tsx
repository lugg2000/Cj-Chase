import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Thinking",
  description: "Articles on data strategy, AI, and business transformation — published on LinkedIn from 2019 to the present.",
};


const groups = [
  {
    category: 'Getting the foundations right',
    description: 'Written in 2019, these five pieces form the core of Mark\'s thinking on data strategy — what it takes to actually get value from data, and why most organisations get it wrong.',
    articles: [
      {
        title: 'Data is the new gold — so why do we mine with incorrect tools and in the wrong locations?',
        date: 'June 2019',
        summary: 'Companies rush to hire data scientists before laying the foundations. The gold mining metaphor: why surveying the land first matters — covering team composition, GDPR governance, technology choices, and what a proper data foundation actually looks like.',
        url: 'https://www.linkedin.com/pulse/data-new-gold-so-why-do-we-mine-incorrect-tools-wrong-mark-lugg',
      },
      {
        title: 'Here\'s my data, now what\'s my business question?',
        date: 'June 2019',
        summary: 'Why businesses hire data scientists without giving them a problem to solve — and how to work backwards from the right business question rather than forwards from a pile of data.',
        url: 'https://www.linkedin.com/pulse/heres-my-data-now-whats-business-question-mark-lugg',
      },
      {
        title: 'Are we sinking in data?',
        date: 'July 2019',
        summary: 'Before GDPR, organisations collected everything and understood nothing. Why the arrival of data protection regulation was actually the forcing function for proper data strategy.',
        url: 'https://www.linkedin.com/pulse/we-sinking-data-mark-lugg',
      },
      {
        title: 'Is your data biased?',
        date: 'June 2019',
        summary: 'All data is inherently biased. The question is whether you know how much — and whether you\'ve built that into your models. A look at how bias enters data and why it matters for predictive analytics.',
        url: 'https://www.linkedin.com/pulse/your-data-biased-mark-lugg',
      },
      {
        title: 'Four key elements to becoming a data-centric organisation',
        date: 'July 2019',
        summary: 'The distinction between being data driven (acting on data) and data centric (making data a permanent strategic asset). Four practical elements: identifying core data, empowering users, designing processes around data flow, and choosing technology that serves the data.',
        url: 'https://www.linkedin.com/pulse/four-key-elements-becoming-data-centric-organisation-mark-lugg',
      },
    ],
  },
  {
    category: 'AI — understanding it properly',
    description: 'Two pieces on artificial intelligence — separated by five years, but making a consistent point: AI is only as good as the foundations beneath it and the support you give it.',
    articles: [
      {
        title: 'AI is the superstar employee of the future — so why don\'t we give it the right training and support?',
        date: 'July 2019',
        summary: 'AI is the David Beckham of technology — raw talent that needs coaching, tactics, and time. Why organisations set AI up to fail by expecting it to deliver without investment in data quality and ongoing refinement.',
        url: 'https://www.linkedin.com/pulse/ai-future-super-star-employee-so-why-dont-we-give-them-mark-lugg',
      },
      {
        title: 'AI in Education: A Look into a Potential Future',
        date: 'May 2024',
        summary: 'A thought experiment on personalised AI learning aids — and a personal reflection on how AI could have changed the experience of someone who struggled in mainstream education.',
        url: 'https://www.linkedin.com/pulse/ai-education-look-potential-future-mark-lugg-i4kje',
      },
    ],
  },
  {
    category: 'Data in the real world',
    description: 'Two pieces written years apart, both grounded in live events — showing how data principles apply when the stakes are real.',
    articles: [
      {
        title: 'The power of data and insight during the coronavirus outbreak',
        date: 'March 2020',
        summary: 'Written at the start of the pandemic. How data was shaping national strategy, what the COVID Symptom Tracker showed about public data collection, and the GDPR questions raised by health data sharing.',
        url: 'https://www.linkedin.com/pulse/power-data-insight-during-coronavirus-outbreak-mark-lugg',
      },
      {
        title: 'Key Trend in Value Creation — Climate Change Adaptation',
        date: 'September 2025',
        summary: 'Climate adaptation is often overshadowed by mitigation. From Kashmir\'s cricket bat industry to UK local authority planning, why accessible climate data tools are now a business necessity — and what the Met Office Climate Data Portal represents.',
        url: 'https://www.linkedin.com/pulse/key-trend-value-creation-climate-change-adaptation-mark-lugg-pdtwe',
      },
    ],
  },
];

export default function ThinkingPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero
          eyebrow="Published thinking"
          title="Thinking on data, AI and business"
          subtitle="Over 20 years, a consistent thread runs through everything written here: data must be purposeful, governed, and connected to business strategy — not collected for its own sake or deployed without the right foundations."
          minHeight={280}
          bgImage="/images/shutterstock_678316639_v2.jpg"
        />

        <section style={{ padding: '72px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>

            {/* Intro note */}
            <div style={{
              background: 'var(--offwhite)',
              borderLeft: '4px solid var(--crimson)',
              padding: '24px 28px',
              marginBottom: 64,
              maxWidth: 760
            }}>
              <p style={{ fontSize: '.93rem', color: 'var(--dgrey)', lineHeight: 1.78, fontWeight: 300 }}>
                These articles span 2019 to 2025 — from the early days of making the case for data strategy,
                through the AI boom, to current thinking on climate data and adaptation. The views have
                evolved but the core argument hasn't: get the foundations right first.
              </p>
            </div>

            {groups.map((group, gi) => (
              <div key={group.category} style={{
                marginBottom: gi < groups.length - 1 ? 72 : 0
              }}>
                {/* Group header */}
                <div style={{ marginBottom: 32 }}>
                  <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
                    fontWeight: 700,
                    color: 'var(--text)',
                    marginBottom: 10
                  }}>{group.category}</h2>
                  <div style={{ width: 44, height: 3, background: 'var(--crimson)', marginBottom: 14 }} />
                  <p style={{
                    fontSize: '.9rem',
                    color: 'var(--dgrey)',
                    lineHeight: 1.72,
                    fontWeight: 300,
                    maxWidth: 680
                  }}>{group.description}</p>
                </div>

                {/* Articles */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {group.articles.map((article, ai) => (
                    <div key={article.title} style={{
                      display: 'grid',
                      gridTemplateColumns: '88px 1fr auto',
                      gap: '0 28px',
                      padding: '24px 0',
                      borderTop: '1px solid var(--lgrey)',
                      alignItems: 'start'
                    }} className="article-row">
                      {/* Date badge */}
                      <div style={{
                        background: 'var(--offwhite)',
                        border: '1px solid var(--mgrey)',
                        padding: '8px 6px',
                        textAlign: 'center',
                        marginTop: 3
                      }}>
                        <div style={{
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: '.68rem',
                          fontWeight: 700,
                          color: 'var(--crimson)',
                          letterSpacing: '.06em',
                          textTransform: 'uppercase',
                          lineHeight: 1.4
                        }}>{article.date}</div>
                      </div>

                      {/* Title + summary */}
                      <div>
                        <h3 style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          color: 'var(--text)',
                          marginBottom: 8,
                          lineHeight: 1.4
                        }}>{article.title}</h3>
                        <p style={{
                          fontSize: '.88rem',
                          color: 'var(--dgrey)',
                          lineHeight: 1.7,
                          fontWeight: 300,
                          maxWidth: 640
                        }}>{article.summary}</p>
                      </div>

                      {/* Read link */}
                      <div style={{ paddingTop: 4, flexShrink: 0 }}>
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-block',
                            background: 'var(--crimson)',
                            color: '#fff',
                            padding: '9px 16px',
                            fontFamily: "'Open Sans', sans-serif",
                            fontSize: '.72rem',
                            fontWeight: 700,
                            letterSpacing: '.08em',
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          Read on LinkedIn →
                        </a>
                      </div>
                    </div>
                  ))}
                  {/* Close last border */}
                  <div style={{ borderTop: '1px solid var(--lgrey)' }} />
                </div>
              </div>
            ))}

            {/* LinkedIn follow CTA */}
            <div style={{
              background: 'var(--text)',
              padding: '40px 36px',
              marginTop: 64,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 28,
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#fff',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  marginBottom: 8
                }}>Follow on LinkedIn for new articles</h3>
                <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '.88rem', lineHeight: 1.6 }}>
                  New pieces published as thinking develops — on data strategy, AI, and business transformation.
                </p>
              </div>
              <a
                href="https://linkedin.com/in/mark-lugg-6212804"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: 'var(--crimson)',
                  color: '#fff',
                  padding: '12px 28px',
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: '.82rem',
                  fontWeight: 700,
                  letterSpacing: '.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                Follow Mark on LinkedIn
              </a>
            </div>

          </div>
        </section>

        <style>{`
          @media (max-width: 640px) {
            .article-row {
              grid-template-columns: 1fr !important;
              gap: 12px !important;
            }
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
}
