import { motion } from 'framer-motion'

const WHATSAPP_URL = 'https://wa.me/918050056552'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'fixed',
        bottom: 'clamp(20px, 3vw, 32px)',
        right: 'clamp(20px, 3vw, 32px)',
        zIndex: 100,
        width: 'clamp(48px, 5vw, 56px)',
        height: 'clamp(48px, 5vw, 56px)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        background: 'var(--wa-bg)',
        border: '1px solid var(--wa-border)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.04) inset',
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
        e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
        e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.35), 0 0 20px rgba(255,255,255,0.06), 0 0 0 1px rgba(255,255,255,0.1) inset'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--wa-border)'
        e.currentTarget.style.background = 'var(--wa-bg)'
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.04) inset'
      }}
    >
      <svg
        width="clamp(20px, 2.2vw, 24px)"
        height="clamp(20px, 2.2vw, 24px)"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--wa-icon)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transition: 'stroke 0.4s ease' }}
      >
        <path d="M12 2C6.477 2 2 6.477 2 12c0 2.136.663 4.116 1.794 5.745L2.5 21.5l3.755-1.294A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
        <path d="M16.5 14.6c-.3.9-1.1 1.5-1.9 1.7a4.5 4.5 0 01-4.2-.8 11.5 11.5 0 01-3.2-3.8 4.5 4.5 0 01.7-4.5c.3-.3.7-.5 1.1-.5.2 0 .4.1.5.3l.9 1.2c.1.2.2.4.1.6-.1.2-.2.3-.3.5-.2.2-.3.4-.2.6.2.5.5 1 .9 1.4.4.4.9.7 1.4.9.2.1.4 0 .6-.2.1-.1.3-.3.5-.5.2-.2.5-.3.7-.2l1.4.8c.2.1.3.3.3.5.1.2 0 .5-.2.7z" />
      </svg>
    </motion.a>
  )
}
