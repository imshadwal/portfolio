import { Cloud, Layout, Server } from 'lucide-react'
import { motion } from 'motion/react'
import { resume } from '../data/resume'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { SectionHeading } from './SectionHeading'

const pillarIcons = {
  frontend: Layout,
  apis: Server,
  data: Cloud,
} as const

export function About() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-white/5 bg-ink-soft/80 backdrop-blur-[2px]"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading eyebrow="About" title="Professional summary" />
        <motion.p
          className="mt-8 max-w-3xl text-lg leading-relaxed text-paper-muted"
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          {resume.summaryShort}
        </motion.p>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {resume.pillars.map((pillar, index) => {
            const Icon = pillarIcons[pillar.id as keyof typeof pillarIcons]
            return (
              <motion.li
                key={pillar.id}
                className="border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-mint/30"
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.4,
                  delay: reducedMotion ? 0 : index * 0.08,
                }}
              >
                <Icon className="text-mint" size={22} strokeWidth={1.6} />
                <h3 className="font-display mt-4 text-lg font-semibold text-paper">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-paper-muted">
                  {pillar.line}
                </p>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
