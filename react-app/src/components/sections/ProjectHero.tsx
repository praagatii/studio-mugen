import { PROJECTS } from '../../data/projects'

export default function ProjectHero({
  project,
}: {
  project: (typeof PROJECTS)[0]
}) {
  return (
    <section
      id={project.id}
      className="relative w-full h-screen overflow-hidden"
    >
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.5)' }} />
      <img
        src={project.img}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 160% 100% at 0% 100%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 35%, transparent 65%)',
        }}
      />
      <div
        className="absolute z-10 project-hero-text"
        style={{
          bottom: '12%',
          left: '4%',
          maxWidth: '75%',
        }}
      >
        <span
          className="text-white/30 text-[10px] uppercase tracking-[0.2em] block"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {project.year} &mdash; {project.category}
        </span>
        <h2
          className="text-white uppercase leading-[0.95] mt-2"
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          }}
        >
          {project.title}
        </h2>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-2 border border-white/30 text-white text-xs uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Visit Site
          </a>
        )}
      </div>
    </section>
  )
}
