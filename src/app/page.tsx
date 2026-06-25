import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

const sectionStyle = {
  padding: '72px 24px',
  maxWidth: 1100,
  margin: '0 auto',
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

const introStyle = {
  maxWidth: 760,
  fontSize: '1.02rem',
  color: 'var(--dgrey)',
  lineHeight: 1.82,
  fontWeight: 300 as const,
  marginBottom: 40,
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <Hero
          eyebrow="Strategic Data & AI Leadership · Programme Delivery · Business Transformation"
          title="Helping organisations turn data into their most powerful asset"
          subtitle="20+ years guiding businesses through transformative data journeys — from building the foundations to leading enterprise AI delivery. Whatever stage you're at, I can help you take the next step."
          minHeight={260}
          bgImage="/images/shutterstock_678316639_v2.jpg"
        />

        {/* Stats bar */}
        <div style={{ background: 'var(--text)', padding: '32px 24px' }}>
          <div style={{
            maxWidth: 900,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
            textAlign: 'center'
          }}>
            {[
              { value: '$62M', label: 'AstraZeneca savings' },
              { value: '20+', label: 'Years experience' },
              { value: '250+', label: 'Analytics team scaled to' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                  fontWeight: 700,
                  color: '#fff',
                  lineHeight: 1.1
                }}>{stat.value}</div>
                <div style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: '.78rem',
                  color: 'rgba(255,255,255,.6)',
                  letterSpacing: '.08em',
                  textTransform: 'uppercase',
                  marginTop: 6
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Career highlights */}
        <div style={{ background: 'var(--offwhite)', padding: '28px 24px' }}>
          <div style={{
            maxWidth: 900,
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            alignItems: 'center',
            justifyContent: 'space-around'
          }}>
            {[
              { role: 'Programme Director', org: 'AstraZeneca', sector: 'Pharma' },
              { role: 'Senior PM / Data Products', org: 'Met Office', sector: 'Public Sector' },
              { role: 'Various senior roles', org: 'Energy · Legal · Privacy', sector: '' },
              { role: 'MBA', org: 'Open University', sector: '(in progress)' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '8px 16px' }}>
                <div style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: '.88rem',
                  fontWeight: 600,
                  color: 'var(--text)'
                }}>{item.org}</div>
                <div style={{
                  fontSize: '.78rem',
                  color: 'var(--dgrey)',
                  marginTop: 2
                }}>{item.role}</div>
                {item.sector && (
                  <div style={{ fontSize: '.72rem', color: 'var(--crimson)', marginTop: 2, fontWeight: 600 }}>{item.sector}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Who I work with */}
        <section style={{ padding: '72px 24px' }}>
          <div style={sectionStyle}>
            <div style={eyebrowStyle}>Who I work with</div>
            <h2 style={sectionTitleStyle}>Enterprise or SME — the fundamentals are the same</h2>
            <div style={ruleStyle} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'start' }}>
              <div>
                <p style={{ ...introStyle, marginBottom: 20 }}>
                  Whether you're a growing business wondering why the numbers never quite agree, or a global organisation standing up an AI factory — the underlying challenge is the same. Data that isn't trusted can't be acted on.
                </p>
                <p style={{ ...introStyle, marginBottom: 20 }}>
                  I've worked at both ends of that spectrum. I've helped a one-person PMO cut a day's manual work down to five minutes, and I've led programmes saving $62M at one of the world's largest pharmaceutical companies.
                </p>
                <p style={{ ...introStyle, marginBottom: 0, fontStyle: 'italic' }}>
                  The thinking is the same. The scale is different.
                </p>
              </div>
              <div style={{
                background: 'var(--offwhite)',
                borderLeft: '4px solid var(--crimson)',
                padding: '32px 28px',
                borderRadius: 2
              }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: 20
                }}>How I can help</h3>
                {[
                  'Data strategy & roadmap definition',
                  'Programme management at director level',
                  'AI readiness assessment & delivery',
                  'Organisational transformation',
                  'BI maturity & governance frameworks',
                  'Rescuing stalled data projects',
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    gap: 10,
                    marginBottom: 12,
                    fontSize: '.9rem',
                    color: 'var(--text)',
                    lineHeight: 1.5
                  }}>
                    <span style={{ color: 'var(--crimson)', fontWeight: 700, flexShrink: 0 }}>→</span>
                    {item}
                  </div>
                ))}
                <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid var(--mgrey)' }}>
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
                    textDecoration: 'none',
                    cursor: 'pointer'
                  }}>
                    Start the conversation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value escalator */}
        <section style={{ background: 'var(--offwhite)', padding: '72px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={eyebrowStyle}>The value of data</div>
            <h2 style={sectionTitleStyle}>Where are you on the escalator?</h2>
            <div style={ruleStyle} />
            <p style={introStyle}>
              Every organisation is spending money on data. The question is what level of return it's getting. There are four levels — and most businesses are stuck at the first two without knowing it.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
              {[
                { num: '1', label: 'Data exists', desc: 'You have reports. Nobody quite trusts them. Dashboards are built by one team and questioned by another.' },
                { num: '2', label: 'Data is used', desc: 'Reports are trusted. The data team is busy. Outputs explain past decisions rather than informing future ones.' },
                { num: '3', label: 'Data informs strategy', desc: 'The data function is involved in planning, not just reporting. Predictive analytics is starting to emerge.' },
                { num: '4', label: 'Data is the competitive edge', desc: 'Data strategy and business strategy are the same document. AI is an operating capability, not a project.' },
              ].map(level => (
                <div key={level.num} style={{
                  background: '#fff',
                  border: '2px solid var(--crimson)',
                  padding: '28px 24px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: -1,
                    left: 20,
                    background: 'var(--crimson)',
                    color: '#fff',
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    width: 32,
                    height: 32,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>{level.num}</div>
                  <h4 style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: '.92rem',
                    color: 'var(--text)',
                    marginTop: 24,
                    marginBottom: 10
                  }}>{level.label}</h4>
                  <p style={{ fontSize: '.88rem', color: 'var(--dgrey)', lineHeight: 1.65 }}>{level.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <Link href="/journey" style={{
                display: 'inline-block',
                border: '2px solid var(--crimson)',
                color: 'var(--crimson)',
                padding: '12px 28px',
                fontFamily: "'Open Sans', sans-serif",
                fontSize: '.82rem',
                fontWeight: 700,
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                textDecoration: 'none'
              }}>
                Explore the full data maturity framework
              </Link>
            </div>
          </div>
        </section>

        {/* CTA band */}
        <div style={{
          background: 'var(--crimson)',
          padding: '56px 24px'
        }}>
          <div style={{
            maxWidth: 900,
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 32,
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                color: '#fff',
                fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                fontWeight: 700,
                marginBottom: 12
              }}>Not sure where your organisation sits?</h2>
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
