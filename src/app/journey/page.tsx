import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The Data Journey",
  description: "A framework for organisational data maturity — the five stages every organisation moves through, and the four pillars that need to develop together.",
};


const eyebrowStyle = {
  fontFamily: "'Open Sans', sans-serif",
  fontSize: '.72rem',
  fontWeight: 700 as const,
  letterSpacing: '.18em',
  textTransform: 'uppercase' as const,
  color: 'var(--crimson)',
  marginBottom: 12,
};

const sectionTitleStyle = {
  fontFamily: "'Playfair Display', serif",
  fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
  fontWeight: 700 as const,
  color: 'var(--text)',
  marginBottom: 16,
};

const ruleStyle = {
  width: 44,
  height: 3,
  background: 'var(--crimson)',
  marginBottom: 28,
};

const stages = [
  {
    num: 1,
    label: 'Unaware',
    headline: '"We have data somewhere"',
    body: 'Decisions are made primarily on experience and instinct. Data is rarely the first thing anyone reaches for. When someone needs a number, they ask the person most likely to have it — and that person has a spreadsheet nobody else knows about. Systems collect data automatically, but nobody has deliberately decided what to collect or why. The most revealing sign: the answer to your most important business question lives in one person\'s spreadsheet.',
  },
  {
    num: 2,
    label: 'Opportunistic',
    headline: '"We have reports. Nobody quite trusts them."',
    body: 'Reports and dashboards exist, but different teams have different numbers for the same thing. Meetings regularly spend time arguing about whose version is correct before getting to the actual discussion. The data team is permanently busy responding to requests, but the outputs are questioned more than they\'re acted on. Data is used reactively — when a question arises, an answer is found. Nothing is joined up. Each effort stands alone. The root cause is almost always the same: problems fixed at the report level rather than at source.',
  },
  {
    num: 3,
    label: 'Standard',
    headline: '"We\'re doing the right things. It\'s just slow."',
    body: 'The reports are trusted now — getting here took time, difficult conversations, and at least one project that felt like it would never end. The data team is good but overwhelmed. The queue of requests never empties. The frustration at this stage is specific: data is being produced after decisions are made, to explain or justify them, rather than before, to inform and improve them. It is confirmation rather than insight. Stage Three, done properly, delivers genuine competitive advantage.',
  },
  {
    num: 4,
    label: 'Enterprise',
    headline: '"Data influences how we make decisions"',
    body: 'The data function is involved in planning conversations, not just reporting reviews. Senior leaders bring problems, not just report requests. Predictive analytics is being used in at least some areas — the business is beginning to forecast rather than just describe. There is a funded, leadership-backed programme for data. A roadmap exists. The data team is starting to shape industry conversations, not just internal ones.',
  },
  {
    num: 5,
    label: 'Transformative',
    headline: '"Data is how we compete"',
    body: 'Data strategy and business strategy are the same document — written together and reviewed together. The data team is not a support function; it builds capability that creates value directly, sometimes for customers. AI is not a project — it is an operating capability. The organisation\'s competitive advantage is partly traceable to data assets that took years to build and cannot be quickly replicated. Most organisations won\'t reach Stage Five. That\'s not a failure — the goal is to be on the right step and keep moving.',
  },
];

const pillars = [
  {
    title: 'Business Objectives',
    body: 'Whether data is connected to how you think about goals and decisions — or just collected as a by-product of operations.',
  },
  {
    title: 'People & Culture',
    body: 'Whether your organisation has the mindset and behaviours that make data stick — or whether it reverts to instinct when it matters most.',
  },
  {
    title: 'Process',
    body: 'Whether you have the structure and discipline to manage data reliably — or whether quality erodes because nobody owns it.',
  },
  {
    title: 'Technology',
    body: 'Whether your tools are genuinely fit for your ambitions — or whether the platform is ahead of the foundations it\'s meant to serve.',
  },
];

export default function JourneyPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero
          eyebrow="A framework for organisational data maturity"
          title="The data journey every organisation is on"
          subtitle="Understanding where you are — honestly — is the first step to moving forward. Most organisations are at a different stage in different departments. The journey is not a single line."
          minHeight={320}
          bgImage="/images/shutterstock_678316639_v2.jpg"
        />

        <section style={{ padding: '72px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>

            {/* Four pillars */}
            <div style={eyebrowStyle}>The foundations</div>
            <h2 style={sectionTitleStyle}>Four pillars that need to move together</h2>
            <div style={ruleStyle} />
            <p style={{ maxWidth: 760, fontSize: '1.02rem', color: 'var(--dgrey)', lineHeight: 1.82, fontWeight: 300, marginBottom: 40 }}>
              The journey is built on four things every organisation needs to develop together. An organisation strong in one and weak in the others will find itself stuck — often unable to identify exactly why.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: 48,
              marginBottom: 48,
              alignItems: 'center'
            }} className="pillars-layout">
              {/* Diagram */}
              <div style={{ flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Data_Journey_Image.PNG"
                  alt="Four pillars diagram: Business Objectives, People, Process, and Technology all feeding into Valuable Data at the centre"
                  style={{ width: 320, maxWidth: '100%', display: 'block' }}
                />
              </div>
              {/* Text descriptions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {pillars.map(pillar => (
                  <div key={pillar.title} style={{
                    background: 'var(--offwhite)',
                    padding: '20px 24px',
                    borderLeft: '3px solid var(--crimson)',
                    display: 'flex',
                    gap: 16,
                    alignItems: 'flex-start'
                  }}>
                    <div>
                      <h4 style={{
                        fontFamily: "'Open Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: '.92rem',
                        color: 'var(--text)',
                        marginBottom: 6
                      }}>{pillar.title}</h4>
                      <p style={{ fontSize: '.87rem', color: 'var(--dgrey)', lineHeight: 1.65 }}>{pillar.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <style>{`
              @media (max-width: 700px) {
                .pillars-layout { grid-template-columns: 1fr !important; }
                .pillars-layout img { width: 260px !important; margin: 0 auto; }
              }
            `}</style>

            {/* Pull quote */}
            <div style={{
              background: 'var(--crimson)',
              padding: '36px 40px',
              marginBottom: 72
            }}>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                color: '#fff',
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                fontStyle: 'italic',
                lineHeight: 1.6,
                maxWidth: 720
              }}>
                "An organisation strong in one pillar and weak in the others will find itself stuck, often unable to identify exactly why."
              </p>
            </div>

            {/* 5 stages */}
            <div style={eyebrowStyle}>The five stages of maturity</div>
            <h2 style={sectionTitleStyle}>Where does your organisation sit?</h2>
            <div style={ruleStyle} />
            <p style={{ maxWidth: 760, fontSize: '1.02rem', color: 'var(--dgrey)', lineHeight: 1.82, fontWeight: 300, marginBottom: 40 }}>
              Most people recognise elements of two adjacent stages. If that's you, start with the lower of the two — it's always more useful to fix the floor than to build higher on an uncertain foundation.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {stages.map((stage, i) => (
                <div key={stage.num} style={{
                  display: 'flex',
                  gap: 0,
                  borderBottom: i < stages.length - 1 ? '1px solid var(--mgrey)' : 'none',
                  padding: '32px 0'
                }}>
                  <div style={{
                    flexShrink: 0,
                    width: 88,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    paddingRight: 24
                  }}>
                    <div style={{
                      width: 48,
                      height: 48,
                      background: 'var(--crimson)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      flexShrink: 0
                    }}>{stage.num}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: '.72rem',
                      fontWeight: 700,
                      letterSpacing: '.14em',
                      textTransform: 'uppercase',
                      color: 'var(--crimson)',
                      marginBottom: 6
                    }}>{stage.label}</div>
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'var(--text)',
                      marginBottom: 12,
                      fontStyle: 'italic'
                    }}>{stage.headline}</h3>
                    <p style={{
                      fontSize: '.93rem',
                      color: 'var(--dgrey)',
                      lineHeight: 1.82,
                      fontWeight: 300,
                      maxWidth: 760
                    }}>{stage.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* AI urgency section */}
            <div style={{ marginTop: 72, paddingTop: 56, borderTop: '2px solid var(--lgrey)' }}>
              <div style={eyebrowStyle}>Why it matters now</div>
              <h2 style={sectionTitleStyle}>AI makes the foundations urgent, not optional</h2>
              <div style={ruleStyle} />
              <div style={{ maxWidth: 780 }}>
                <p style={{ fontSize: '.96rem', color: 'var(--dgrey)', lineHeight: 1.88, fontWeight: 300, marginBottom: 16 }}>
                  AI is not magic. It is pattern recognition at scale, operating on the data you give it. The urgent question is not whether AI will change your industry — it is simpler: <strong style={{ color: 'var(--text)' }}>if you deployed AI against the data your organisation currently has, what would it produce?</strong>
                </p>
                <p style={{ fontSize: '.93rem', color: 'var(--dgrey)', lineHeight: 1.88, fontWeight: 300, marginBottom: 16 }}>
                  The organisations getting genuine commercial value from AI are almost universally the ones that invested in their data foundations first. Not because they were especially prescient — because the foundation work had its own commercial return, and by the time AI became accessible, they had something ready for it.
                </p>
                <p style={{ fontSize: '.93rem', color: 'var(--dgrey)', lineHeight: 1.88, fontWeight: 300 }}>
                  Most organisations deploying AI right now are doing so on inadequate foundations. The result isn't obviously wrong outputs — it's plausible-sounding, professionally formatted, apparently authoritative wrong outputs. The kind that get included in board papers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div style={{ background: 'var(--crimson)', padding: '56px 24px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 700, marginBottom: 12 }}>
                Not sure where your organisation sits?
              </h2>
              <p style={{ color: 'rgba(255,255,255,.82)', fontWeight: 300, lineHeight: 1.7, maxWidth: 520 }}>
                I've been helping organisations identify where they are on the data journey — and what to do next — for over 20 years. Let's have an honest conversation.
              </p>
            </div>
            <Link href="/contact" style={{
              display: 'inline-block',
              background: '#fff',
              color: 'var(--crimson)',
              padding: '14px 32px',
              fontFamily: "'Open Sans', sans-serif",
              fontSize: '.82rem',
              fontWeight: 700,
              letterSpacing: '.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              whiteSpace: 'nowrap'
            }}>
              Get in touch
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
