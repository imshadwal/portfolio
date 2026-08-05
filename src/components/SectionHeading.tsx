import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  children?: ReactNode
}

export function SectionHeading({ eyebrow, title, children }: SectionHeadingProps) {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45 }}
    >
      <p className="text-sm font-medium tracking-[0.2em] text-mint uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-paper sm:text-4xl">
        {title}
      </h2>
      {children}
    </motion.div>
  )
}
