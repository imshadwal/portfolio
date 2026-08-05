import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowDownToLine,
  Braces,
  Database,
  Mail,
  Server,
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { resume } from '../data/resume'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { LinkedInIcon } from './LinkedInIcon'

const rotatingRoles = [
  'React dashboards',
  'NestJS APIs',
  'Airflow / BigQuery pipelines',
]

const stackStrip = [
  { label: 'React', icon: Braces },
  { label: 'NestJS', icon: Server },
  { label: 'Data', icon: Database },
]

export function Hero() {
  const reducedMotion = usePrefersReducedMotion()
  const delay = (i: number) => (reducedMotion ? 0 : 0.12 * i)
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    if (reducedMotion) return
    const id = window.setInterval(() => {
      setRoleIndex((i) => (i + 1) % rotatingRoles.length)
    }, 2800)
    return () => window.clearInterval(id)
  }, [reducedMotion])

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden pt-16"
    >
      <div
        className="bg-grid pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-mint/10 blur-3xl"
        animate={
          reducedMotion
            ? undefined
            : { x: [0, 30, 0], y: [0, -20, 0], opacity: [0.35, 0.55, 0.35] }
        }
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="hero-content relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
        <motion.p
          className="mb-5 text-sm font-medium tracking-[0.2em] text-mint uppercase"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay(0) }}
        >
          {resume.title}
        </motion.p>

        <motion.h1
          className="hero-name font-display max-w-full leading-[0.95] font-extrabold tracking-tight text-paper"
          initial={reducedMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: delay(1) }}
        >
          {resume.name
            .toUpperCase()
            .split(' ')
            .map((word) => (
              <span key={word} className="block">
                {word}
              </span>
            ))}
        </motion.h1>

        <motion.div
          className="mt-6 h-1 w-24 origin-left bg-mint"
          initial={reducedMotion ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: delay(2), ease: 'easeOut' }}
        />

        <motion.div
          className="mt-6 flex min-h-[1.75rem] items-center text-base text-mint sm:text-lg"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: delay(2.5) }}
        >
          <span className="mr-2 shrink-0 text-paper-muted">Focused on</span>
          {reducedMotion ? (
            <span className="font-medium">{rotatingRoles[0]}</span>
          ) : (
            <span className="relative block min-w-0 flex-1">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingRoles[roleIndex]}
                  className="absolute inset-y-0 left-0 flex items-center font-medium whitespace-nowrap"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  {rotatingRoles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          )}
        </motion.div>

        <motion.p
          className="mt-5 max-w-xl text-lg text-paper-muted sm:text-xl"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay(3) }}
        >
          {resume.heroSupport}
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: delay(3.5) }}
          aria-label="Core stack"
        >
          {stackStrip.map(({ label, icon: Icon }, index) => (
            <span key={label} className="flex items-center gap-2 text-sm text-paper-muted">
              {index > 0 && (
                <span className="mr-3 text-white/20" aria-hidden="true">
                  ·
                </span>
              )}
              <Icon size={16} className="text-mint" strokeWidth={1.75} />
              {label}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay(4) }}
        >
          <a
            href={`mailto:${resume.email}`}
            className="btn-primary inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold"
          >
            <Mail size={18} />
            Email
          </a>
          <a
            href={resume.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold"
          >
            <LinkedInIcon width={18} height={18} />
            LinkedIn
          </a>
          <a
            href={resume.resumePdf}
            download
            className="btn-secondary inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold"
          >
            <ArrowDownToLine size={18} />
            Download Resume
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] tracking-[0.2em] text-paper-muted uppercase sm:flex"
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay(5) }}
      >
        Scroll to explore
        <motion.span
          animate={reducedMotion ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 1.7, repeat: Infinity }}
        >
          <ArrowDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  )
}
