import { motion } from 'framer-motion'

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const groupVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function TechStack() {
  return (
    <motion.section
      id="technology"
      className="section relative w-full min-h-screen overflow-hidden"
      initial={{ opacity: 0.6 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="absolute inset-0 z-1 pointer-events-none" style={{ background: 'var(--section-overlay)' }} />

      <div className="absolute z-2" style={{ top: 'clamp(8%, 10vw, 15%)', left: '4%', maxWidth: '75%' }}>
        <motion.h1
          className="text-white uppercase leading-[0.95] tracking-[0.01em] text-left"
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(2.2rem, 7vw, 5rem)',
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
          className="text-white/30 font-light text-left mt-3 max-w-[540px] leading-relaxed"
          style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1.05rem)' }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          The tools, frameworks, and systems we use to turn ideas into digital experiences.
        </motion.p>
      </div>

      <div
        className="absolute z-2"
        style={{
          top: 'clamp(38%, 45vw, 50%)',
          left: '4%',
          right: '4%',
          bottom: 'clamp(4%, 6vw, 8%)',
          overflowY: 'auto',
        }}
      >
        <motion.div
          className="text-white"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 'clamp(16px, 2vw, 24px)',
            paddingRight: '8px',
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-5% 0px' }}
        >
          {groups.map((group) => (
            <motion.div
              key={group.label}
              variants={groupVariants}
              style={{
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '8px',
                padding: 'clamp(16px, 2vw, 22px)',
                background: 'rgba(255,255,255,0.015)',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
                transition: 'border-color 0.3s ease, background 0.3s ease',
              }}
              whileHover={{ borderColor: 'rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.03)' }}
            >
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 'clamp(0.55rem, 0.65vw, 0.65rem)',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.3)',
                  marginBottom: '14px',
                  fontWeight: 400,
                }}
              >
                {group.label}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {group.items.map((name, i) => (
                  <motion.span
                    key={name}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.03, ease: 'easeOut' }}
                    whileHover={{ y: -2, scale: 1.02 }}
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 'clamp(0.7rem, 0.85vw, 0.8rem)',
                      fontWeight: 300,
                      letterSpacing: '0.04em',
                      color: 'rgba(255,255,255,0.6)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: '4px',
                      padding: '4px 12px',
                      background: 'rgba(255,255,255,0.02)',
                      cursor: 'default',
                      transition: 'color 0.3s ease, border-color 0.3s ease, background 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.95)'
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                    }}
                  >
                    {name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
