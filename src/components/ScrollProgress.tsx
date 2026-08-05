import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function ScrollProgress() {
  const reducedMotion = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  })
  const [ready, setReady] = useState(false)

  useEffect(() => setReady(true), [])

  if (!ready) return null

  return (
    <motion.div
      className="pointer-events-none fixed top-16 right-0 left-0 z-30 h-0.5 origin-left bg-mint"
      style={{ scaleX: reducedMotion ? scrollYProgress : scaleX }}
      aria-hidden="true"
    />
  )
}
