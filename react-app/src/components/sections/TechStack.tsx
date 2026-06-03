import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'

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

export default function TechStack() {
  const { theme } = useTheme()
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
            fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          The Technology
          <br />
          Behind Mugen
        </motion.h1>
        <motion.p
          className="text-white/30 font-light text-left leading-relaxed"
          style={{
            fontSize: 'clamp(0.85rem, 1.2vw, 1.05rem)',
            maxWidth: '540px',
            marginTop: 'clamp(8px, 1.2vw, 16px)',
          }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          The tools, frameworks, and systems we use to turn ideas into digital experiences.
        </motion.p>

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
                borderColor: 'var(--border-color)',
                background: theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.7)',
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
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.items.map((name) => (
                  <span
                    key={name}
                    className="text-white/60"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 'clamp(0.7rem, 0.85vw, 0.8rem)',
                      fontWeight: 300,
                      letterSpacing: '0.04em',
                      border: '1px solid var(--card-border)',
                      borderRadius: '4px',
                      padding: '5px 14px',
                      cursor: 'default',
                      background: 'var(--card-bg)',
                      transition: 'color 0.3s ease, border-color 0.3s ease, background 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--text-primary)'
                      e.currentTarget.style.borderColor = 'var(--border-color)'
                      e.currentTarget.style.background = 'var(--card-bg)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-secondary)'
                      e.currentTarget.style.borderColor = 'var(--card-border)'
                      e.currentTarget.style.background = 'var(--card-bg)'
                    }}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
