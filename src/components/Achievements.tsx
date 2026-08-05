import {
  BookOpen,
  Building2,
  Clapperboard,
  PenLine,
  UsersRound,
} from 'lucide-react'
import { motion } from 'motion/react'
import { SiInstagram } from 'react-icons/si'
import { resume } from '../data/resume'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { SectionHeading } from './SectionHeading'

const highlightIcons = [Building2, Clapperboard, UsersRound, PenLine]

export function Achievements() {
  const reducedMotion = usePrefersReducedMotion()
  const { achievements } = resume

  return (
    <section
      id="achievements"
      className="scroll-mt-20 border-t border-white/5 bg-ink/[0.72] backdrop-blur-[2px]"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading eyebrow="Achievements" title="Beyond the codebase">
          <p className="mt-4 max-w-2xl text-paper-muted">
            Community building, brand partnerships, published writing, and social
            media work alongside full stack engineering.
          </p>
        </SectionHeading>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <motion.div
            className="max-w-2xl border-l-2 border-mint pl-6"
            initial={reducedMotion ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs tracking-[0.16em] text-paper-muted uppercase">
              Founder · Community
            </p>
            <h3 className="font-display mt-2 text-2xl font-semibold text-paper sm:text-3xl">
              {achievements.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-paper-muted sm:text-lg">
              {achievements.summary}
            </p>
            <a
              href={achievements.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-6 inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium"
            >
              <SiInstagram size={15} />
              @theuntoldphrase
            </a>
          </motion.div>

          <ul className="grid grid-cols-2 gap-3">
            {achievements.stats.map((stat, index) => (
              <motion.li
                key={stat.label}
                className="border border-white/10 bg-ink-soft/65 px-4 py-6"
                initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.4,
                  delay: reducedMotion ? 0 : index * 0.1,
                }}
              >
                <p className="font-display text-2xl font-bold text-paper sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-paper-muted sm:text-sm">
                  {stat.label}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.p
          className="mt-16 text-xs tracking-[0.16em] text-paper-muted uppercase"
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Published author
        </motion.p>

        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {achievements.publications.map((book, index) => (
            <motion.li
              key={book.title}
              className="group flex gap-4 border border-white/10 bg-ink-soft/55 p-5 transition-colors hover:border-mint/35"
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.4,
                delay: reducedMotion ? 0 : 0.06 * index,
              }}
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center border border-white/10 text-mint transition-transform group-hover:-translate-y-1">
                <BookOpen size={18} strokeWidth={1.7} />
              </span>
              <div className="min-w-0">
                <p className="font-display text-lg font-semibold text-paper">
                  {book.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-paper-muted">
                  {book.note}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>

        <motion.p
          className="mt-16 text-xs tracking-[0.16em] text-paper-muted uppercase"
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Selected milestones
        </motion.p>

        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {achievements.highlights.map((item, index) => {
            const Icon = highlightIcons[index % highlightIcons.length]
            return (
              <motion.li
                key={item}
                className="group flex min-h-24 gap-4 border border-white/10 bg-ink-soft/55 p-5 transition-colors hover:border-mint/35"
                initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.4,
                  delay: reducedMotion ? 0 : 0.06 * index,
                }}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center border border-white/10 text-mint transition-transform group-hover:-translate-y-1">
                  <Icon size={18} strokeWidth={1.7} />
                </span>
                <span className="self-center text-sm leading-relaxed text-paper-muted sm:text-base">
                  {item}
                </span>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
