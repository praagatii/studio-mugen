import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import mugenLogo from '../assets/mugen.png'

const MIN_DISPLAY_MS = 2000

function preloadAssets(): Promise<void> {
  const assets = [
    '/load.mp4',
  ]

  const promises = assets.map(src => {
    return new Promise<void>((resolve) => {
      if (src.endsWith('.mp4')) {
        const video = document.createElement('video')
        video.preload = 'auto'
        video.oncanplaythrough = () => resolve()
        video.onerror = () => resolve()
        video.src = src
        video.load()
      } else {
        const img = new Image()
        img.onload = () => resolve()
        img.onerror = () => resolve()
        img.src = src
      }
    })
  })

  return Promise.all(promises).then(() => {})
}

export default function LoadingScreen({ onLoaded }: { onLoaded: () => void }) {
  const [loading, setLoading] = useState(true)
  const [showVideo, setShowVideo] = useState(false)
  const readyRef = useRef(false)

  useEffect(() => {
    let mounted = true

    async function start() {
      const loadStart = performance.now()

      await Promise.all([
        preloadAssets(),
        new Promise<void>((resolve) => {
          if (document.readyState === 'complete') {
            resolve()
          } else {
            window.addEventListener('load', () => resolve(), { once: true })
          }
        }),
      ])

      if (!mounted) return

      const elapsed = performance.now() - loadStart
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed)

      await new Promise(resolve => setTimeout(resolve, remaining))

      if (!mounted) return
      readyRef.current = true
      setLoading(false)
      onLoaded()
    }

    start()
    return () => { mounted = false }
  }, [onLoaded])

  useEffect(() => {
    const timer = setTimeout(() => setShowVideo(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: '#000' }}
          exit={{
            opacity: 0,
            filter: 'blur(8px)',
            scale: 1.05,
            transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
          }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 50% 35% at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 60%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
          {showVideo && (
            <motion.video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: 0.5 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1.5 }}
            >
              <source src="/load.mp4" type="video/mp4" />
            </motion.video>
          )}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.8) 100%)' }} />
          <motion.img
            src={mugenLogo}
            alt="Mugen"
            className="relative z-10 block"
            style={{
              width: 'min(55vw, 520px)',
              height: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.04))',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <motion.div
            className="absolute bottom-[12%] left-1/2 -translate-x-1/2"
            style={{
              width: 'clamp(60px, 10vw, 100px)',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.5 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
