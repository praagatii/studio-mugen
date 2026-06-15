import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MIN_DISPLAY_MS = 2000

function sleep(ms: number) {
  return new Promise<void>(r => setTimeout(r, ms))
}

function waitForImages(): Promise<void> {
  const imgs = Array.from(document.querySelectorAll('img:not([loading="lazy"])'))
  const pending = imgs.filter(img => !img.complete)
  if (pending.length === 0) return Promise.resolve()
  return Promise.all(
    pending.map(
      img =>
        new Promise<void>(resolve => {
          img.addEventListener('load', () => resolve(), { once: true })
          img.addEventListener('error', () => resolve(), { once: true })
        }),
    ),
  ).then(() => {})
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

      await document.fonts.ready
      if (cancelled) return

      await waitForImages()
      if (cancelled) return

      await new Promise<void>(resolve => requestAnimationFrame(resolve))
      if (cancelled) return

      await new Promise<void>(resolve => requestAnimationFrame(resolve))
      if (cancelled) return

      const elapsed = performance.now() - start
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed)
      await sleep(remaining)

      if (cancelled) return
      setDone(true)
      await sleep(800)

      if (cancelled) return
      onComplete()
    }

    flow()
    return () => { cancelled = true }
  }, [onComplete])

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
