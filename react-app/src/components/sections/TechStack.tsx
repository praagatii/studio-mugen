import { motion } from 'framer-motion'

const iconSlugs: Record<string, string> = {
  'React': 'react',
  'Next.js': 'nextdotjs',
  'JavaScript': 'javascript',
  'TypeScript': 'typescript',
  'HTML5': 'html5',
  'CSS3': 'css3',
  'Tailwind CSS': 'tailwindcss',
  'GSAP': 'greensock',
  'Framer Motion': 'framer',
  'Three.js': 'threedotjs',
  'Node.js': 'nodedotjs',
  'Java': 'openjdk',
  'Spring Boot': 'springboot',
  'Maven': 'apachemaven',
  'REST APIs': '',
  'MongoDB': 'mongodb',
  'PostgreSQL': 'postgresql',
  'Firebase': 'firebase',
  'Supabase': 'supabase',
  'AWS': 'amazonwebservices',
  'OpenAI API': 'openai',
  'LLM Integration': '',
  'Automation Workflows': '',
  'Figma': 'figma',
  'Canva': 'canva',
  'Adobe Creative Suite': 'adobe',
}

const groups = [
  {
    label: 'Frontend Experience',
    items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    label: 'Motion & Interaction',
    items: ['GSAP', 'Framer Motion', 'Three.js'],
  },
  {
    label: 'Backend Systems',
    items: ['Node.js', 'Java', 'Spring Boot', 'Maven', 'REST APIs'],
  },
  {
    label: 'Database & Cloud',
    items: ['MongoDB', 'PostgreSQL', 'Firebase', 'Supabase', 'AWS'],
  },
  {
    label: 'AI & Automation',
    items: ['OpenAI API', 'LLM Integration', 'Automation Workflows'],
  },
  {
    label: 'Design & Brand',
    items: ['Figma', 'Canva', 'Adobe Creative Suite'],
  },
]

const groupVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

function TechIcon({ name }: { name: string }) {
  const slug = iconSlugs[name]
  return (
    <span
      className="group relative flex flex-col items-center gap-1"
      style={{ cursor: 'default' }}
    >
      <span
        className="flex items-center justify-center"
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '8px',
          border: '1px solid var(--card-border)',
          background: 'var(--card-bg)',
          transition: 'border-color 0.25s ease, background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
          e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
          e.currentTarget.style.transform = 'translateY(-2px)'
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.3)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--card-border)'
          e.currentTarget.style.background = 'var(--card-bg)'
          e.currentTarget.style.transform = 'translateY(0px)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        {slug ? (
          <img
            src={`https://cdn.simpleicons.org/${slug}`}
            alt={name}
            loading="lazy"
            style={{
              width: '22px',
              height: '22px',
              objectFit: 'contain',
              pointerEvents: 'none',
              filter: 'brightness(0.85)',
              transition: 'filter 0.25s ease',
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none'
            }}
          />
        ) : (
          <span
            style={{
              fontSize: '0.65rem',
              fontWeight: 400,
              color: 'var(--text-secondary)',
              lineHeight: 1.1,
              textAlign: 'center' as const,
              padding: '2px',
            }}
          >
            {name}
          </span>
        )}
      </span>
      <span
        className="opacity-0 group-hover:opacity-100"
        style={{
          fontSize: '0.55rem',
          fontFamily: "'Montserrat', sans-serif",
          letterSpacing: '0.06em',
          textTransform: 'uppercase' as const,
          color: 'var(--text-secondary)',
          whiteSpace: 'nowrap' as const,
          transition: 'opacity 0.2s ease',
          position: 'absolute' as const,
          top: 'calc(100% + 4px)',
          pointerEvents: 'none' as const,
        }}
      >
        {name}
      </span>
    </span>
  )
}

export default function TechStack() {
  return (
    <motion.section
      id="technology"
      className="section relative w-full overflow-hidden"
      style={{ minHeight: '100vh' }}
      initial={{ opacity: 0.6 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="absolute inset-0 z-1 pointer-events-none" style={{ background: 'var(--section-overlay)' }} />

      <div style={{ padding: 'clamp(80px, 12vw, 140px) 4% clamp(48px, 6vw, 80px)', position: 'relative', zIndex: 2 }}>
        <motion.h1
          className="text-white uppercase leading-[0.95] tracking-[0.01em] text-left"
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(3.5rem, 12vw, 8rem)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Technology
        </motion.h1>
        <p
          className="text-white/30 font-light text-left leading-relaxed"
          style={{
            fontSize: 'clamp(0.85rem, 1.2vw, 1.05rem)',
            maxWidth: '540px',
            marginTop: 'clamp(8px, 1.2vw, 16px)',
          }}
        >
          The tools, frameworks, and systems we use to turn ideas into digital experiences.
        </p>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 'clamp(16px, 1.8vw, 24px)',
            marginTop: 'clamp(40px, 6vw, 80px)',
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-5% 0px' }}
        >
          {groups.map((group) => (
            <motion.div
              key={group.label}
              variants={groupVariants}
              style={{
                border: '1px solid var(--card-border)',
                borderRadius: '8px',
                padding: 'clamp(20px, 2.5vw, 28px)',
                background: 'var(--card-bg)',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
                transition: 'border-color 0.3s ease, background 0.3s ease',
              }}
              whileHover={{
                borderColor: 'rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.03)',
                y: -2,
              }}
            >
              <p
                className="text-white/30"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 'clamp(0.55rem, 0.65vw, 0.65rem)',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  marginBottom: 'clamp(14px, 1.8vw, 20px)',
                  fontWeight: 400,
                }}
              >
                {group.label}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {group.items.map((name) => (
                  <TechIcon key={name} name={name} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
