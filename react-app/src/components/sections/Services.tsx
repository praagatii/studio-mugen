import { SERVICES } from '../../data/services'
import BorderGlow from '../ui/BorderGlow'

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
          What We Do
        </span>
        <h2
          className="text-white uppercase leading-[0.95] tracking-[0.01em] text-center"
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          }}
        >
          Services
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(16px, 2vw, 24px)',
            width: '100%',
            marginTop: 'clamp(32px, 5vw, 48px)',
          }}
        >
          {SERVICES.map((service) => (
            <BorderGlow
              key={service.title}
              className="service-card"
              backgroundColor="rgba(18, 15, 23, 0.6)"
              borderRadius={20}
              glowRadius={30}
              coneSpread={30}
              colors={['#c084fc', '#f472b6', '#38bdf8']}
              fillOpacity={0.3}
            >
              <div
                style={{
                  padding: 'clamp(24px, 3vw, 36px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <ServiceIcon icon={service.icon} />
                <h3
                  className="text-white uppercase tracking-wider"
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-white/60 font-light leading-relaxed"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                  }}
                >
                  {service.description}
                </p>
              </div>
            </BorderGlow>
          ))}
        </div>

        <div
          className="text-white/50 font-light text-left leading-relaxed"
          style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
            maxWidth: '680px',
            marginTop: 'clamp(36px, 5vw, 56px)',
            textAlign: 'center',
            lineHeight: '1.8',
          }}
        >
          Every project begins with a conversation. Whether you need a complete digital experience or a refined visual identity, we work closely with you to bring your vision to life — blending craft, technology, and intent into something that lasts.
        </div>
      </div>
    </section>
  )
}
