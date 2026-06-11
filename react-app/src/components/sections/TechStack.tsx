const row1 = [
  'react', 'nextdotjs', 'typescript', 'javascript',
  'html5', 'css3', 'tailwindcss', 'framer',
  'threedotjs', 'figma', 'greensock',
  'sass', 'vite', 'webpack', 'babel',
  'svelte', 'vue', 'nuxtdotjs', 'storybook',
]

const row2 = [
  'nodedotjs', 'mongodb', 'postgresql', 'firebase',
  'supabase', 'amazonwebservices', 'python',
  'openjdk', 'springboot', 'apachemaven', 'openai',
  'docker', 'redis', 'graphql', 'kubernetes',
  'git', 'nginx', 'terraform', 'elasticsearch',
]

function MarqueeRow({
  slugs,
  direction,
  duration = 80,
}: {
  slugs: string[]
  direction: 'left' | 'right'
  duration?: number
}) {
  const animName = direction === 'right' ? 'marquee-right' : 'marquee-left'
  return (
    <div
      style={{
        overflow: 'hidden',
        width: '100%',
        maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 'clamp(56px, 7vw, 96px)',
          width: 'fit-content',
          animation: `${animName} ${duration}s linear infinite`,
          willChange: 'transform',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.animationPlayState = 'paused'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animationPlayState = 'running'
        }}
      >
        {[...slugs, ...slugs].map((slug, i) => (
          <img
            key={`${slug}-${i}`}
            src={`https://cdn.simpleicons.org/${slug}`}
            alt=""
            loading="lazy"
            style={{
              width: 'clamp(24px, 2.8vw, 32px)',
              height: 'clamp(24px, 2.8vw, 32px)',
              objectFit: 'contain',
              filter: 'brightness(0) invert(1)',
              opacity: 0.55,
              flexShrink: 0,
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
        gap: 'clamp(16px, 2vw, 28px)',
        padding: 'clamp(40px, 6vw, 80px) 0',
        overflow: 'hidden',
      }}
    >
      <p
        className="text-white font-light text-left leading-relaxed"
        style={{
          position: 'relative',
          zIndex: 2,
          fontSize: 'clamp(0.95rem, 2vw, 1.4rem)',
          maxWidth: '560px',
        }}
      >
        Technologies Used
      </p>

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: 'min(90%, 900px)',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(10px, 1.2vw, 16px)',
        }}
      >
        <MarqueeRow slugs={row1} direction="right" duration={80} />
        <MarqueeRow slugs={row2} direction="left" duration={90} />
      </div>
    </section>
  )
}
