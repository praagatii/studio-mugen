import { SERVICES } from '../../data/services'
import BorderGlow from '../BorderGlow/BorderGlow'
import DecryptedText from '../DecryptedText/DecryptedText'

function ServiceIcon({ icon }: { icon: string }) {
  const paths: Record<string, JSX.Element> = {
    code: (
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    ),
    palette: (
      <>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
        <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
        <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
      </>
    ),
    sparkles: (
      <>
        <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
        <path d="M18 18l1 3 3-1-3-1-1-3z" />
        <path d="M6 18l-1 3-3-1 3-1 1-3z" />
      </>
    ),
    play: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
      </>
    ),
  }

  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ opacity: 0.7, flexShrink: 0 }}
    >
      {paths[icon]}
    </svg>
  )
}

export default function Services() {
  return (
    <section
      id="services"
      style={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 'clamp(60px, 8vw, 120px) clamp(20px, 4vw, 48px)',
      }}
    >
      <div
        style={{
          width: 'min(100%, 900px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <span
          className="text-white/30 text-[10px] uppercase tracking-[0.2em] block mb-2"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <DecryptedText
            text="What We Do"
            animateOn="view"
            speed={35}
            maxIterations={8}
            sequential={true}
            revealDirection="start"
            parentClassName=""
          />
        </span>
        <h2
          className="text-white uppercase leading-[0.95] tracking-[0.01em] text-center"
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
          }}
        >
          Services
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(10px, 1.2vw, 16px)',
            width: '100%',
            marginTop: 'clamp(24px, 3vw, 36px)',
          }}
          className="services-grid"
        >
          {SERVICES.map((service) => (
            <BorderGlow
              key={service.title}
              className="service-card"
              backgroundColor="rgba(18, 15, 23, 0.6)"
              glowColor="0 0 100"
              glowIntensity={0.4}
              glowRadius={30}
              borderRadius={20}
              coneSpread={30}
              animated={true}
              colors={['rgba(255,255,255,0.06)', 'rgba(255,255,255,0.03)', 'rgba(255,255,255,0.04)']}
              fillOpacity={0.2}
            >
              <div
                style={{
                  padding: 'clamp(16px, 2vw, 24px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <ServiceIcon icon={service.icon} />
                <h3
                  className="text-white uppercase tracking-wider"
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {service.title}
                </h3>
              </div>
            </BorderGlow>
          ))}
        </div>

        <div
          className="text-white/50 font-light text-center leading-relaxed"
          style={{
            fontSize: 'clamp(0.85rem, 1.4vw, 1rem)',
            maxWidth: '600px',
            marginTop: 'clamp(28px, 4vw, 40px)',
            lineHeight: '1.7',
          }}
        >
          From interfaces to intelligent systems, we craft digital experiences where design, technology, and imagination move as one.
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 767px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
