import { useEffect, useState } from 'react'
import { navLinks } from '../data/resume'

type SectionId = (typeof navLinks)[number]['id']

export function useActiveSection() {
  const [activeId, setActiveId] = useState<SectionId | 'home'>('home')

  useEffect(() => {
    const ids = ['home', ...navLinks.map((l) => l.id)] as const
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id as SectionId | 'home')
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return activeId
}
