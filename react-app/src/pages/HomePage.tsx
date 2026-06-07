import { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, useScroll, useTransform } from 'framer-motion'
import Lenis from 'lenis'
import Navbar from '../components/nav/Navbar'
import ProjectGallery from '../components/sections/ProjectGallery'

import TechStack from '../components/sections/TechStack'
import FloatingWhatsApp from '../components/ui/FloatingWhatsApp'
import mugenLogo from '../assets/mugen.png'
import blackholeImg from '../assets/blackhole.png'

function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.4, smoothWheel: true })
    ;(window as any).lenis = lenis
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => { lenis.destroy(); delete (window as any).lenis }
  }, [])
}

function SectionOverlay() {
  return (
    <div
      className="absolute inset-0 z-1 pointer-events-none"
      style={{ background: 'var(--section-overlay)' }}
    />
  )
}

function SectionFadeIn({
  children,
  id,
  className = '',
  style = {},
}: {
  children: React.ReactNode
  id?: string
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <motion.section
      id={id}
      className={`section relative w-full min-h-screen overflow-hidden ${className}`}
      style={{ background: 'var(--section-bg)', ...style }}
      initial={{ opacity: 0.6 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.section>
  )
}

export default function HomePage() {
  useLenis()

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (!hash) return
    const el = document.getElementById(hash)
    const l = (window as any).lenis
    if (el && l) {
      setTimeout(() => l.scrollTo(el, { offset: -60 }), 100)
    }
  }, [])

  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])

  return (
    <div className="relative z-10">
      <Helmet>
        <title>Mugen Studios — Cinematic Digital Experiences</title>
        <meta name="description" content="Mugen is a creative studio crafting cinematic digital experiences, immersive branding, and visually driven products. We blend design, storytelling, and technology to create timeless, atmospheric work." />
        <link rel="canonical" href="https://studio-mugen.com/" />
        <meta property="og:title" content="Mugen Studios — Cinematic Digital Experiences" />
        <meta property="og:url" content="https://studio-mugen.com/" />
      </Helmet>
      <Navbar />

      <motion.section
        id="hero"
        ref={heroRef}
        className="section w-full h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity: heroOpacity }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 50% 35% at 50% 50%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 35%, transparent 65%)',
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            width: 'min(60vw, 700px)',
            aspectRatio: '1',
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)',
          }}
        />
        <img
          src={mugenLogo}
          alt="Mugen"
          className="block"
          style={{
            width: 'min(82vw, 980px)',
            height: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 0 24px rgba(255,255,255,0.04))',
          }}
        />
      </motion.section>

      <ProjectGallery />

      <SectionFadeIn id="portfolio">
        <SectionOverlay />
        <div
          className="absolute z-2"
          style={{
            top: '15%',
            left: '4%',
            maxWidth: '75%',
          }}
        >
          <h1
            className="text-white uppercase leading-[0.95] tracking-[0.01em] text-left"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(3.5rem, 12vw, 8rem)',
            }}
          >
            Portfolio
          </h1>
          <p
            className="text-white font-light text-left mt-3 max-w-[560px] leading-relaxed"
            style={{ fontSize: 'clamp(0.95rem, 2vw, 1.4rem)' }}
          >
            Mugen is a creative studio crafting cinematic digital experiences, immersive branding, and visually driven products. We blend design, storytelling, and technology to create work that feels timeless, atmospheric, and intentional.
          </p>
        </div>
      </SectionFadeIn>

      <SectionFadeIn id="about">
        <img
          src={blackholeImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          style={{
            filter: 'grayscale(1) contrast(1.5) brightness(0.95) saturate(0.8)',
            opacity: 0.55,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: [
              'radial-gradient(ellipse at 50% 35%, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.015) 25%, transparent 55%)',
              'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 65%)',
              'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.45) 100%)',
            ].join(', '),
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            boxShadow: 'inset 0 0 200px rgba(0,0,0,0.8)',
          }}
        />
        <SectionOverlay />
        <div
          className="absolute z-2"
          style={{
            top: '15%',
            left: '4%',
            maxWidth: '75%',
          }}
        >
          <h1
            className="text-white uppercase leading-[0.95] tracking-[0.01em] text-left"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(3.5rem, 12vw, 8rem)',
            }}
          >
            BUILT WITHOUT LIMITS
          </h1>
          <p
            className="text-white font-light text-left mt-3 max-w-[560px] leading-relaxed"
            style={{ fontSize: 'clamp(0.95rem, 2vw, 1.4rem)' }}
          >
            Mugen exists at the intersection of art, technology, and atmosphere — creating experiences that are visually striking, emotionally immersive, and built without limits.
          </p>
        </div>
      </SectionFadeIn>

      <TechStack />

      <SectionFadeIn
        id="contact"
        style={{ background: 'var(--section-bg)' }}
      >
        <div
          className="absolute z-2"
          style={{
            top: '15%',
            left: '4%',
            maxWidth: '75%',
          }}
        >
          <h1
            className="text-white uppercase leading-[0.95] tracking-[0.01em] text-left"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(3.5rem, 12vw, 8rem)',
            }}
          >
            Contact
          </h1>
          <div
            className="text-white font-light text-left mt-3 max-w-[560px] leading-relaxed"
            style={{ fontSize: 'clamp(0.95rem, 2vw, 1.4rem)' }}
          >
            <p>developer.mugen@gmail.com</p>
            <p className="mt-2">
              <a
                href="https://www.instagram.com/madeby.mugen"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                madeby.mugen
              </a>
            </p>
            <p className="mt-4">
              <a
                href="https://wa.me/918050056552"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
                style={{ textDecoration: 'none' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--wa-icon)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'stroke 0.4s ease' }}>
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 2.136.663 4.116 1.794 5.745L2.5 21.5l3.755-1.294A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                  <path d="M16.5 14.6c-.3.9-1.1 1.5-1.9 1.7a4.5 4.5 0 01-4.2-.8 11.5 11.5 0 01-3.2-3.8 4.5 4.5 0 01.7-4.5c.3-.3.7-.5 1.1-.5.2 0 .4.1.5.3l.9 1.2c.1.2.2.4.1.6-.1.2-.2.3-.3.5-.2.2-.3.4-.2.6.2.5.5 1 .9 1.4.4.4.9.7 1.4.9.2.1.4 0 .6-.2.1-.1.3-.3.5-.5.2-.2.5-.3.7-.2l1.4.8c.2.1.3.3.3.5.1.2 0 .5-.2.7z" />
                </svg>
                <span className="text-sm tracking-wider uppercase">WhatsApp</span>
              </a>
            </p>
          </div>
        </div>
        <p
          className="absolute bottom-8 left-[4%] text-white/40 text-xs uppercase tracking-wider"
          style={{ fontSize: '0.75rem' }}
        >
          &copy; 2026 Mugen Studios. All rights reserved.
        </p>
      </SectionFadeIn>

      <FloatingWhatsApp />
    </div>
  )
}
