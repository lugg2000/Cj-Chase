interface HeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  minHeight?: number | string;
  bgImage?: string;
  bgColor?: string;
}

export default function Hero({ eyebrow, title, subtitle, minHeight = 420, bgImage, bgColor }: HeroProps) {
  return (
    <div style={{
      position: 'relative',
      minHeight,
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden'
    }}>
      {bgImage ? (
        <div aria-hidden="true" style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundRepeat: 'no-repeat',
          filter: 'grayscale(30%) brightness(0.6)'
        }} />
      ) : (
        <div aria-hidden="true" style={{
          position: 'absolute',
          inset: 0,
          background: bgColor || 'linear-gradient(135deg, #5c0018 0%, #800020 60%, #9a1030 100%)'
        }} />
      )}
      {/* Crimson overlay for image heroes */}
      {bgImage && (
        <div aria-hidden="true" style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--crimson-hero)'
        }} />
      )}
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        padding: '64px 24px',
      }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        color: '#fff'
      }}>
        {eyebrow && (
          <div style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: '.72rem',
            fontWeight: 700,
            letterSpacing: '.18em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,.72)',
            marginBottom: 14
          }}>
            {eyebrow}
          </div>
        )}
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)',
          fontWeight: 700,
          lineHeight: 1.18,
          marginBottom: subtitle ? 20 : 0
        }}>
          {title}
        </h1>
        {subtitle && (
          <>
            <div style={{
              width: 52,
              height: 3,
              background: 'rgba(255,255,255,.45)',
              margin: '20px 0'
            }} />
            <p style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 300,
              fontSize: '1.02rem',
              lineHeight: 1.72,
              color: 'rgba(255,255,255,.88)',
              maxWidth: 680
            }}>
              {subtitle}
            </p>
          </>
        )}
      </div>
      </div>
    </div>
  );
}
