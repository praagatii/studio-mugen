const row1 = [
  'react', 'nextdotjs', 'typescript', 'javascript',
  'html5', 'css3', 'tailwindcss', 'framer',
  'threedotjs', 'figma', 'greensock',
]

const row2 = [
  'nodedotjs', 'mongodb', 'postgresql', 'firebase',
  'supabase', 'amazonwebservices', 'python',
  'openjdk', 'springboot', 'apachemaven', 'openai',
]

function MarqueeRow({
  slugs,
  direction,
  duration = 60,
}: {
  slugs: string[]
  direction: 'left' | 'right'
  duration?: number
}) {
  const animName = direction === 'right' ? 'marquee-right' : 'marquee-left'
  return (
    <div style={{ overflow: 'hidden', width: '100%', maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)' }}>
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          gap: 'clamp(48px, 6vw, 80px)',
          width: 'fit-content',
          animation: `${animName} ${duration}s linear infinite`,
          willChange: 'transform',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.animationPlayState = 'paused'
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.animationPlayState = 'running'
        }}
      >
        {[...slugs, ...slugs].map((slug, i) => (
          <img
            key={`${slug}-${i}`}
            src={`https://cdn.simpleicons.org/${slug}`}
            alt=""
            loading="lazy"
            style={{
              width: 'clamp(28px, 3vw, 36px)',
              height: 'clamp(28px, 3vw, 36px)',
              objectFit: 'contain',
              filter: 'brightness(0) invert(1)',
              opacity: 0.7,
              flexShrink: 0,
              transition: 'opacity 0.3s ease',
              pointerEvents: 'none',
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none'
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function TechStack() {
  return (
    <section
      id="technology"
      style={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'clamp(20px, 2.5vw, 32px)',
        padding: 'clamp(40px, 6vw, 80px) 0',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'var(--section-overlay)',
          zIndex: 1,
        }}
      />

      <p
        className="text-white/30"
        style={{
          position: 'relative',
          zIndex: 2,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 'clamp(0.55rem, 0.65vw, 0.65rem)',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          fontWeight: 400,
        }}
      >
        Technologies Used
      </p>

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(12px, 1.5vw, 20px)',
        }}
      >
        <MarqueeRow slugs={row1} direction="right" duration={50} />
        <MarqueeRow slugs={row2} direction="left" duration={55} />
      </div>
    </section>
  )
}
