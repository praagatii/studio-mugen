export interface ServiceItem {
  title: string
  description: string
  icon: string
}

export const SERVICES: ServiceItem[] = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern frameworks. Performance-optimized, responsive, and accessible by default.',
    icon: 'code',
  },
  {
    title: 'UI/UX Design',
    description: 'Interface design that balances aesthetics with usability. From wireframes to polished pixel-perfect mockups.',
    icon: 'palette',
  },
  {
    title: 'Brand Identity',
    description: 'Visual identity systems including logos, color palettes, typography, and brand guidelines for cohesive storytelling.',
    icon: 'sparkles',
  },
  {
    title: 'Motion Design',
    description: 'Animations and micro-interactions that bring interfaces to life. Subtle details that elevate the user experience.',
    icon: 'play',
  },
]
