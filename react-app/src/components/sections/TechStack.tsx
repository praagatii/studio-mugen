import { motion } from 'framer-motion'

const engineering = ['React', 'JavaScript', 'Node.js', 'Java', 'Spring Boot', 'Maven']
const motionTools = ['Framer', 'GSAP']
const design = ['Canva']

function TechCard({ name, index }: { name: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -4, scale: 1.02 }}
      style={{
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '6px',
        padding: '10px 18px',
        background: 'rgba(255,255,255,0.02)',
        cursor: 'default',
        transition: 'border-color 0.3s ease, background 0.3s ease',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: 'clamp(0.75rem, 0.9vw, 0.85rem)',
        fontWeight: 300,
        letterSpacing: '0.06em',
        color: 'rgba(255,255,255,0.7)',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
        e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
        e.currentTarget.style.color = 'rgba(255,255,255,0.95)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
        e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
        e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
      }}
    >
      {name}
    </motion.div>
  )
}

function TechGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ marginBottom: 'clamp(32px, 4vw, 48px)' }}
    >
      <p
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 'clamp(0.6rem, 0.7vw, 0.7rem)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.25)',
          marginBottom: '14px',
        }}
      >
        {label}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {items.map((name, i) => (
          <TechCard key={name} name={name} index={i} />
        ))}
      </div>
    </motion.div>
  )
}

export default function TechStack() {
  return (
    <motion.section
      id="technology"
      className="section relative w-full min-h-screen overflow-hidden"
      style={{ background: 'var(--section-bg)' }}
      initial={{ opacity: 0.6 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--section-overlay)' }} />

      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '4%',
          maxWidth: '75%',
        }}
      >
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
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 'clamp(8%, 10vw, 15%)',
          left: '4%',
          maxWidth: '75%',
        }}
      >
        <TechGroup label="Engineering" items={engineering} />
        <TechGroup label="Experience & Motion" items={motionTools} />
        <TechGroup label="Design" items={design} />
      </div>
    </motion.section>
  )
}
