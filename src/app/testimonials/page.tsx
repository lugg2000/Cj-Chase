import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Testimonials",
  description: "What clients and colleagues say about working with Mark Lugg on data strategy, programme delivery, and transformation.",
};


const testimonials = [
  {
    quote: 'I was lucky enough to find Mark for our interim Project Manager (director) role, and he was so good we kept him for 2 years. He rapidly gained the trust of internal customers, demonstrated his value, immediately grasped the tricky cultural nuances of a globally-distributed 100k-person organisation, and delivered excellent results with humility, professionalism, and good humour.',
    name: 'Tristram Smith',
    title: 'Product Delivery & Org Transformation — AstraZeneca',
  },
  {
    quote: 'Mark brought a unique blend of process orientation, financial acumen, and project management expertise that helped us bring clarity and structure to a complex body of work. He transformed ambiguity into action — developing tools, frameworks, and reporting mechanisms that gave our team visibility, accountability, and direction. What stands out most is his tenacity and scrappiness. He dives in, asks the hard questions, and drives progress with a strong sense of ownership.',
    name: 'Ryan Haydu',
    title: 'Commercial Strategy Leader — AstraZeneca',
  },
  {
    quote: 'Working with Mark was a real pleasure. His energy, enthusiasm and experience was invaluable in keeping our projects on track in a challenging environment. Approachable, super-organised and also a data geek — he was the perfect fit for the job.',
    name: 'Steve Adams',
    title: 'Senior Project Manager — The Met Office',
  },
  {
    quote: 'I enjoyed working with Mark for about three years as we scaled the Consentric product. As the delivery lead, Mark excelled in collaboration, building relationships both internally and with clients. He has a good eye for process and structure, and a talent for simplifying the complex. A pleasure to work with.',
    name: 'Pete Howells',
    title: 'Product Owner — Consentric',
  },
  {
    quote: 'Mark has an exceptional ability to make complex data accessible and actionable. Working with him, I noticed how he connects analytical thinking with real-world strategy. He doesn\'t just process data — he turns it into a compass for business decisions. His collaborative style made our complex project feel manageable and even exciting.',
    name: 'Stuart Bagnell',
    title: 'Senior Director — AstraZeneca',
  },
  {
    quote: 'Mark is one of those rare individuals who can hold the full complexity of a programme in his head while still being grounded enough to ask the obvious question nobody else dared to ask. He had my trust from week one.',
    name: 'Senior Stakeholder',
    title: 'Global Pharma Programme — name withheld',
    anon: true,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero
          eyebrow="Clients & colleagues"
          title="What people say"
          subtitle="Testimonials from enterprise programme leadership, product delivery, and data transformation engagements."
          minHeight={260}
          bgImage="/images/shutterstock_425727901_v2.jpg"
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
            }}>Recent Enterprise & programme engagements</div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: 28,
              marginTop: 32
            }}>
              {testimonials.map((t, i) => (
                <div key={i} style={{
                  background: 'var(--offwhite)',
                  padding: '36px 32px',
                  position: 'relative',
                  borderTop: '3px solid var(--crimson)'
                }}>
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '3.5rem',
                    color: 'var(--crimson)',
                    lineHeight: 1,
                    opacity: 0.3,
                    marginBottom: -12,
                    marginTop: -8
                  }}>"</div>
                  <p style={{
                    fontSize: '.93rem',
                    color: 'var(--text)',
                    lineHeight: 1.82,
                    fontStyle: 'italic',
                    marginBottom: 24,
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 400
                  }}>
                    {t.quote}
                  </p>
                  <div style={{ borderTop: '1px solid var(--mgrey)', paddingTop: 16 }}>
                    <div style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: '.9rem',
                      color: 'var(--text)'
                    }}>{t.name}</div>
                    <div style={{
                      fontSize: '.8rem',
                      color: 'var(--dgrey)',
                      marginTop: 4
                    }}>{t.title}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* LinkedIn CTA */}
            <div style={{
              textAlign: 'center',
              marginTop: 56,
              padding: '40px',
              background: 'var(--lgrey)'
            }}>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.15rem',
                color: 'var(--text)',
                marginBottom: 20
              }}>More recommendations on LinkedIn</p>
              <p style={{ fontSize: '.9rem', color: 'var(--dgrey)', marginBottom: 24 }}>
                The full profile has 20+ recommendations going back to 2009 — across roles in data engineering, product delivery, programme management, and AI.
              </p>
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
                  textDecoration: 'none'
                }}
              >
                View LinkedIn profile
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
