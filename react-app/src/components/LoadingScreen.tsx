import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MIN_DISPLAY_MS = 1000

function sleep(ms: number) {
  return new Promise<void>(r => setTimeout(r, ms))
}

function waitForAllImages(): Promise<void> {
  const check = () => {
    const imgs = Array.from(document.querySelectorAll('img'))
    return imgs.every(img => img.complete || img.loading === 'lazy')
  }
  if (check()) return Promise.resolve()

  return new Promise<void>(resolve => {
    let pending = Array.from(document.querySelectorAll('img')).filter(
      img => !img.complete && img.loading !== 'lazy',
    )
    if (pending.length === 0) return resolve()

    let remaining = pending.length
    const onDone = () => {
      remaining--
      if (remaining <= 0) resolve()
    }
    for (const img of pending) {
      img.addEventListener('load', onDone, { once: true })
      img.addEventListener('error', onDone, { once: true })
    }
  })
}

function raf(): Promise<void> {
  return new Promise<void>(resolve => requestAnimationFrame(() => resolve()))
}

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [done, setDone] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowVideo(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let cancelled = false

    async function flow() {
      const start = performance.now()

      await Promise.all([
        document.fonts.ready,
        new Promise<void>(resolve => {
          if (document.readyState === 'complete') resolve()
          else window.addEventListener('load', () => resolve(), { once: true })
        }),
      ])
      if (cancelled) return

      await waitForAllImages()
      if (cancelled) return

      for (let i = 0; i < 5; i++) {
        await raf()
        if (cancelled) return
      }

      await sleep(1000)
      if (cancelled) return

      setDone(true)
    }

    flow()

    return () => { cancelled = true }
  }, [onComplete])

  useEffect(() => {
    if (!done) return
    const t = setTimeout(() => onComplete(), 800)
    return () => clearTimeout(t)
  }, [done, onComplete])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loading"
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: '#000' }}
          exit={{
            opacity: 0,
            filter: 'blur(8px)',
            scale: 1.05,
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
          }}
        >
          {showVideo && (
            <motion.video
              autoPlay muted loop playsInline preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: 0.85 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              transition={{ duration: 1.5 }}
            >
              <source src="/load.mp4" type="video/mp4" />
            </motion.video>
          )}

          <motion.div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 50% 35% at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 60%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.8) 100%)',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
