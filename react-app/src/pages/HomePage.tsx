import { useEffect, useRef, useState, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, useScroll, useTransform } from 'framer-motion'
import Lenis from 'lenis'
import { Skiper30 } from '../components/sections/Skiper30'
import TechStack from '../components/sections/TechStack'
import Services from '../components/sections/Services'
import BorderGlow from '../components/BorderGlow/BorderGlow'
import FloatingWhatsApp from '../components/ui/FloatingWhatsApp'
import { saveLead, type Lead } from '../data/saveLead'
import mugenLogo from '../assets/mugen.png'
import blackholeImg from '../assets/blackhole.png'
import rutamBg from '../assets/rutam bg.png'
import srirangaBg from '../assets/sriranga bg.png'
import rutamOverlay from '../assets/rutam overlay.png'
import srirangaOverlay from '../assets/sriranga overlay.png'
import rutamBgMobile from '../assets/rutam-bg-mobile.png'
import srirangaBgMobile from '../assets/sriranga-bg-mobile.png'
import rutamOverlayMobile from '../assets/rutam-overlay-mobile.png'
import srirangaOverlayMobile from '../assets/sriranga-overlay-mobile.png'

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


function InquiryForm() {
  const [form, setForm] = useState({ company: '', name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    const lead: Lead = { ...form, projectType: '', createdAt: new Date().toISOString() }
    saveLead(lead)
    setSubmitted(true)
  }, [form])

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#111',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '6px',
    padding: '8px 12px',
    color: '#fff',
    fontSize: '0.85rem',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 300,
    outline: 'none',
    transition: 'border-color 0.3s ease',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'rgba(255,255,255,0.4)',
    marginBottom: '4px',
    fontFamily: "'Montserrat', sans-serif",
  }

  if (submitted) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          padding: 'clamp(16px, 2vw, 24px)',
          background: '#111',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p className="text-white font-light" style={{ fontSize: '1rem', fontFamily: "'Montserrat', sans-serif" }}>Thank you for reaching out.</p>
        <p className="text-white/50 font-light" style={{ fontSize: '0.85rem', fontFamily: "'Montserrat', sans-serif" }}>We&apos;ll get back to you shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: 'clamp(16px, 2vw, 24px)' }}>
      <div>
        <label style={labelStyle}>Company Name</label>
        <input name="company" value={form.company} onChange={handleChange} placeholder="Company name" style={inputStyle} onFocus={e => { e.target.style.borderColor = 'rgba(255,255,255,0.3)' }} onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)' }} />
      </div>
      <div>
        <label style={labelStyle}>Name *</label>
        <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" style={inputStyle} onFocus={e => { e.target.style.borderColor = 'rgba(255,255,255,0.3)' }} onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)' }} />
      </div>
      <div>
        <label style={labelStyle}>Email *</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" style={inputStyle} onFocus={e => { e.target.style.borderColor = 'rgba(255,255,255,0.3)' }} onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)' }} />
      </div>
      <div>
        <label style={labelStyle}>Phone / WhatsApp</label>
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 234 567 890" style={inputStyle} onFocus={e => { e.target.style.borderColor = 'rgba(255,255,255,0.3)' }} onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)' }} />
      </div>
      <div>
        <label style={labelStyle}>Message *</label>
        <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Tell us about your project..." rows={3} style={{ ...inputStyle, resize: 'vertical', minHeight: '60px' }} onFocus={e => { e.target.style.borderColor = 'rgba(255,255,255,0.3)' }} onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)' }} />
      </div>
      <button type="submit" style={{ marginTop: '2px', padding: '10px 20px', background: '#222', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '6px', color: '#fff', fontSize: '0.75rem', fontFamily: "'Montserrat', sans-serif", fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.15em', cursor: 'pointer', transition: 'background 0.3s ease, border-color 0.3s ease' }}
        onMouseEnter={e => { e.currentTarget.style.background = '#333'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)' }}
        onMouseLeave={e => { e.currentTarget.style.background = '#222'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}>
        Send Inquiry
      </button>
    </form>
  )
}

function RutamSrirangaSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const [showSrirangaBtn, setShowSrirangaBtn] = useState(false)

  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      setShowSrirangaBtn(v > 0.28)
    })
    return () => unsub()
  }, [scrollYProgress])

  const rutamBgOpa = useTransform(scrollYProgress, (v) => {
    if (v < 0.18) return 1
    if (v > 0.28) return 0
    return 1 - (v - 0.18) / 0.1
  })
  const srirangaBgOpa = useTransform(scrollYProgress, (v) => {
    if (v < 0.18) return 0
    if (v > 0.28) return 1
    return (v - 0.18) / 0.1
  })
  const dissolveBlur = useTransform(scrollYProgress, (v) => {
    if (v < 0.18 || v > 0.28) return 'blur(0px)'
    const t = (v - 0.18) / 0.1
    const px = t < 0.5 ? t * 8 : (1 - t) * 8
    return `blur(${px}px)`
  })
  const rutamOverlayY = useTransform(scrollYProgress, (v) => {
    if (v < 0.12) return '0%'
    if (v > 0.38) return '-120%'
    return `${((v - 0.12) / 0.26) * -120}%`
  })
  const srirangaOverlayY = useTransform(scrollYProgress, (v) => {
    if (v < 0.18) return '100%'
    if (v > 0.42) return '0%'
    const t = (v - 0.18) / 0.24
    return `${(1 - t) * 100}%`
  })
  const srirangaBtnOpa = useTransform(scrollYProgress, (v) => {
    if (v < 0.28) return 0
    if (v > 0.38) return 1
    return (v - 0.28) / 0.1
  })
  const srirangaBtnPE = useTransform(scrollYProgress, (v) => v > 0.28 ? 'auto' : 'none')

  return (
    <div ref={sectionRef} id="rutam-sriranga" className="relative w-full max-md:h-[200vh] h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <picture>
          <source media="(max-width: 767px)" srcSet={rutamBgMobile} />
          <motion.img
            src={rutamBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
            style={{ opacity: rutamBgOpa, filter: dissolveBlur, zIndex: 0 }}
          />
        </picture>
        <picture>
          <source media="(max-width: 767px)" srcSet={srirangaBgMobile} />
          <motion.img
            src={srirangaBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
            style={{ opacity: srirangaBgOpa, filter: dissolveBlur, zIndex: 1 }}
          />
        </picture>
        <motion.div
          className="absolute left-0 w-full pointer-events-none select-none"
          style={{ zIndex: 2, bottom: '-5%' }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
        >
          <picture>
            <source media="(max-width: 767px)" srcSet={rutamOverlayMobile} />
            <motion.img
              src={rutamOverlay}
              alt=""
              className="w-full max-md:object-cover object-contain"
              style={{ y: rutamOverlayY }}
            />
          </picture>
        </motion.div>
        <motion.div
          className="absolute left-0 w-full pointer-events-none select-none"
          style={{ zIndex: 2, bottom: '-8%' }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity, delay: 0.5 }}
        >
          <picture>
            <source media="(max-width: 767px)" srcSet={srirangaOverlayMobile} />
            <motion.img
              src={srirangaOverlay}
              alt=""
              className="w-full max-md:object-cover object-contain"
              style={{ y: srirangaOverlayY }}
            />
          </picture>
        </motion.div>
        {!showSrirangaBtn && (
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 z-10"
            style={{ bottom: 'clamp(8%, 10vh, 12%)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <BorderGlow
              backgroundColor="#000"
              glowColor="0 0 100"
              glowIntensity={0.4}
              glowRadius={30}
              borderRadius={16}
              coneSpread={30}
              animated={true}
              colors={['rgba(255,255,255,0.06)', 'rgba(255,255,255,0.03)', 'rgba(255,255,255,0.04)']}
              fillOpacity={1}
            >
              <a
                href="https://neo-rutam-87uz.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white uppercase tracking-widest"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 'clamp(0.75rem, 1vw, 1rem)',
                  fontWeight: 400,
                  textDecoration: 'none',
                  padding: 'clamp(12px, 1.4vw, 16px) clamp(24px, 3vw, 40px)',
                }}
              >
                Visit Site
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px', display: 'inline', verticalAlign: 'middle' }}>
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </a>
            </BorderGlow>
          </motion.div>
        )}
        {showSrirangaBtn && (
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 z-10"
            style={{ bottom: 'clamp(8%, 10vh, 12%)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <BorderGlow
              backgroundColor="#000"
              glowColor="0 0 100"
              glowIntensity={0.4}
              glowRadius={30}
              borderRadius={16}
              coneSpread={30}
              animated={true}
              colors={['rgba(255,255,255,0.06)', 'rgba(255,255,255,0.03)', 'rgba(255,255,255,0.04)']}
              fillOpacity={1}
            >
              <a
                href="https://sriranga-plum.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white uppercase tracking-widest"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 'clamp(0.75rem, 1vw, 1rem)',
                  fontWeight: 400,
                  textDecoration: 'none',
                  padding: 'clamp(12px, 1.4vw, 16px) clamp(24px, 3vw, 40px)',
                }}
              >
                Visit Site
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px', display: 'inline', verticalAlign: 'middle' }}>
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </a>
            </BorderGlow>
          </motion.div>
        )}
      </div>
    </div>
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
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="relative z-10">
      <Helmet>
        <title>Mugen Studios — Cinematic Digital Experiences</title>
        <meta name="description" content="Mugen is a creative studio crafting cinematic digital experiences, immersive branding, and visually driven products. We blend design, storytelling, and technology to create timeless, atmospheric work." />
        <link rel="canonical" href="https://studio-mugen.com/" />
        <meta property="og:title" content="Mugen Studios — Cinematic Digital Experiences" />
        <meta property="og:url" content="https://studio-mugen.com/" />
      </Helmet>

      <motion.section
        id="hero"
        ref={heroRef}
        className="section w-full h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity: heroOpacity, position: 'relative', zIndex: 2 }}
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

      <Services />

      <Skiper30 />

      <RutamSrirangaSection />

      <SectionFadeIn id="portfolio">
        <SectionOverlay />
        <div
          className="relative z-2 w-full h-full flex flex-col"
          style={{
            padding: 'clamp(160px, 16vh, 200px) clamp(28px, 5vw, 56px)',
            minHeight: '100vh',
            gap: 'clamp(24px, 4vw, 48px)',
          }}
        >
          <div style={{ maxWidth: '75%' }}>
            <h1
              className="text-white uppercase leading-[0.95] tracking-[0.01em] text-left"
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 'clamp(2.8rem, 8vw, 7.5rem)',
              }}
            >
              GENESIS
            </h1>
            <p
              className="text-white font-light text-left mt-3 max-w-[560px] leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)' }}
            >
              Branding, web design, and creative direction for ambitious businesses. We create digital experiences that blend strategy, aesthetics, and technology to leave a lasting impression.
            </p>
          </div>
          <TechStack />
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
                fontSize: 'clamp(2.8rem, 8vw, 7.5rem)',
              }}
            >
              BUILT WITHOUT LIMITS
            </h1>
            <p
              className="text-white font-light text-left mt-3 max-w-[560px] leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)' }}
            >
              We help brands launch websites, visual identities, and digital experiences that feel premium, memorable, and intentional. Every project is crafted to strengthen presence, build trust, and create lasting impact.
            </p>
        </div>
      </SectionFadeIn>

      <SectionFadeIn
        id="contact"
        style={{ background: 'var(--section-bg)' }}
      >
        <div
          className="relative z-2 w-full h-full flex flex-col"
          style={{
            padding: 'clamp(60px, 8vw, 120px) clamp(20px, 4vw, 48px)',
            minHeight: '100vh',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 'clamp(24px, 4vw, 48px)',
              alignItems: 'flex-start',
              width: '100%',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ flex: '1 1 500px', minWidth: 0 }}>
              <h1
                className="text-white uppercase leading-[0.95] tracking-[0.01em] text-left"
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: 'clamp(2.8rem, 8vw, 7.5rem)',
                  overflowWrap: 'break-word',
                  wordBreak: 'break-word',
                }}
              >
                Let&rsquo;s build something unforgettable.
              </h1>
              <div
                className="text-white font-light text-left mt-4 max-w-[560px] leading-relaxed"
                style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)' }}
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
            <div style={{ flex: '1 1 280px', minWidth: 0 }}>
              <BorderGlow
                backgroundColor="#000"
                glowColor="0 0 100"
                glowIntensity={0.4}
                glowRadius={30}
                borderRadius={20}
                coneSpread={30}
                animated={true}
                colors={['rgba(255,255,255,0.06)', 'rgba(255,255,255,0.03)', 'rgba(255,255,255,0.04)']}
                fillOpacity={1}
              >
                <InquiryForm />
              </BorderGlow>
            </div>
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
