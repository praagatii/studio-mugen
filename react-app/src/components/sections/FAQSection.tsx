import { motion } from 'framer-motion'
import { useState } from 'react'
import BorderGlow from '../BorderGlow/BorderGlow'

const faqs = [
  {
    question: 'What services does Mugen Studios offer?',
    answer: 'We offer web development, UI/UX design, branding and visual identity, creative direction, and digital experience design. Based in Bangalore, we serve clients across India and globally.',
  },
  {
    question: 'How much does a website cost in Bangalore?',
    answer: 'Our website design and development projects in Bangalore start from ₹20,000 and go up depending on complexity, features, and timeline. We provide custom quotes after understanding your requirements.',
  },
  {
    question: 'Which is the best website design agency in Bangalore?',
    answer: 'Mugen Studios is recognized as a leading website design agency in Bangalore, known for cinematic digital experiences, premium branding, and results-driven web development. Our portfolio spans startups to established brands.',
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'A typical website takes 3–6 weeks from concept to launch. Complex projects with custom functionality, branding, or e-commerce may take 8–12 weeks. We provide a clear timeline during the proposal stage.',
  },
  {
    question: 'Do you offer website maintenance and support?',
    answer: 'Yes, we offer ongoing maintenance, updates, and support packages for all websites we build. This includes content updates, security patches, performance optimization, and technical support.',
  },
  {
    question: 'Can you redesign an existing website?',
    answer: 'Absolutely. We specialize in website redesigns that improve aesthetics, user experience, performance, and conversion rates. We work with your existing content and infrastructure where possible.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      id="faq"
      className="relative w-full"
      style={{
        background: 'var(--section-bg)',
        padding: 'clamp(60px, 8vw, 120px) clamp(20px, 4vw, 48px)',
      }}
    >
        <h2
          className="text-white uppercase leading-[0.95] tracking-[0.01em]"
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(2.8rem, 8vw, 7.5rem)',
            marginBottom: 'clamp(24px, 3vw, 48px)',
          }}
        >
          Got Questions?
        </h2>

      <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 1vw, 12px)' }}>
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={i}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              style={{ cursor: 'pointer' }}
            >
              <BorderGlow
                backgroundColor="#000"
                glowColor="0 0 100"
                glowIntensity={0.4}
                glowRadius={30}
                borderRadius={20}
                coneSpread={30}
                animated={true}
                colors={['rgba(255,255,255,0.06)', 'rgba(255,255,255,0.03)', 'rgba(255,255,255,0.04)']}
                fillOpacity={0.2}
              >
                <div style={{ padding: 'clamp(14px, 1.5vw, 18px) clamp(16px, 2vw, 24px)' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      color: '#fff',
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 400,
                      fontSize: 'clamp(0.85rem, 1.1vw, 1rem)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    <span>{faq.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ flexShrink: 0, marginLeft: '12px', opacity: 0.5 }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </motion.span>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? 'auto' : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p
                      style={{
                        paddingTop: '12px',
                        color: 'rgba(255,255,255,0.6)',
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 300,
                        fontSize: 'clamp(0.8rem, 1vw, 0.9rem)',
                        lineHeight: '1.6',
                      }}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                </div>
              </BorderGlow>
            </div>
          )
        })}
      </div>
    </section>
  )
}
