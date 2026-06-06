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
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'clamp(40px, 5vw, 64px)',
        padding: 'clamp(80px, 12vw, 140px) 0',
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

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 4%' }}>
        <h1
          className="text-white uppercase leading-[0.95] tracking-[0.01em]"
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(3.5rem, 12vw, 8rem)',
          }}
        >
          Technology
        </h1>
        <p
          className="text-white font-light mt-3 leading-relaxed"
          style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.4rem)',
            maxWidth: '560px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          The tools, frameworks, and systems we use to turn ideas into digital experiences.
        </p>
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(32px, 4vw, 48px)',
        }}
      >
        <MarqueeRow slugs={row1} direction="right" duration={50} />
        <MarqueeRow slugs={row2} direction="left" duration={55} />
      </div>
    </section>
  )
}
