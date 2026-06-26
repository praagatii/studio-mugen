import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import SEO from '../components/SEO'
import ProjectHero from '../components/sections/ProjectHero'
import { PROJECTS } from '../data/projects'

const SHOW_PROJECTS = PROJECTS.slice(0, 2)

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

export default function ProjectsPage() {
  useLenis()
  const location = useLocation()

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null
    if (!state?.scrollTo) {
      window.scrollTo(0, 0)
      return
    }
    const el = document.getElementById(state.scrollTo)
    if (!el) return
    const lenis = (window as any).lenis
    if (lenis) {
      lenis.scrollTo(el, { offset: -80, duration: 1.4 })
    }
  }, [location.state])

  return (
    <div className="relative z-10">
      <SEO
        title="Projects"
        description="Explore Mugen Studios' portfolio of cinematic digital experiences, branding, and visual identity projects."
        path="/projects"
      />

      {SHOW_PROJECTS.map((project) => (
        <ProjectHero key={project.id} project={project} />
      ))}


    </div>
  )
}
