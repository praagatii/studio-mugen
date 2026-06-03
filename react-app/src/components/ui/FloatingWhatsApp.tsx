import { motion } from 'framer-motion'

const WHATSAPP_URL = 'https://wa.me/918050056552?text=Hey%20Mugen%2C%20I%27d%20love%20to%20know%20more%20about%20creating%20a%20website%20for%20my%20brand.'

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
      whileHover={{ scale: 1.05 }}
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
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.12)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.04) inset',
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
        e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
        e.currentTarget.style.boxShadow = '0 6px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1) inset'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
        e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.04) inset'
      }}
    >
      <svg
        width="clamp(20px, 2.2vw, 24px)"
        height="clamp(20px, 2.2vw, 24px)"
        viewBox="0 0 24 24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C6.477 2 2 6.477 2 12c0 2.136.663 4.116 1.794 5.745L2.5 21.5l3.755-1.294A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm4.417 14.181a1.704 1.704 0 01-1.21.574c-.323 0-.666-.094-1.047-.287-.382-.193-.785-.462-1.21-.808a13.116 13.116 0 01-1.696-1.695 8.77 8.77 0 01-.808-1.21c-.193-.382-.287-.725-.287-1.048 0-.421.143-.783.43-1.084.287-.302.575-.453.862-.453.129 0 .258.022.387.065.129.043.247.14.354.29l.787 1.055c.107.15.19.28.247.387.057.108.086.215.086.323 0 .15-.064.322-.193.516s-.258.387-.387.516c-.108.108-.16.226-.16.355 0 .043.01.09.032.14.022.05.057.118.108.204.05.086.107.172.172.258a8.89 8.89 0 00.645.699c.236.236.462.419.677.548.215.13.387.193.516.193.13 0 .247-.05.355-.15.107-.102.247-.258.419-.473.172-.215.333-.376.484-.484.15-.108.28-.161.387-.161.108 0 .215.032.323.096.107.064.225.14.354.226l.999.645c.13.086.225.18.29.28.064.102.096.204.096.31-.001.13-.043.269-.13.419-.086.15-.194.29-.322.419z" />
      </svg>
    </motion.a>
  )
}
