import { useEffect, useRef, useState } from 'react'
import { BriefcaseBusiness, ChevronDown, GraduationCap } from 'lucide-react'
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react'
import { resume } from '../data/resume'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import abesLogo from '../assets/abes.jpeg'
import globalLogicLogo from '../assets/globallogic.png'
import { SectionHeading } from './SectionHeading'

const companyLogos = {
  napses: {
    src: '/logos/mvprockets.svg',
    alt: 'MVP Rockets logo',
    crop: false,
  },
  globallogic: {
    src: globalLogicLogo,
    alt: 'GlobalLogic logo',
    crop: false,
  },
} as const

const journey = [
  ...resume.experience.map((job) => ({
    id: job.id,
    type: 'work' as const,
    title: job.role,
    place: job.company,
    period: job.period,
    details: job.bullets as readonly string[],
    logo: companyLogos[job.id as keyof typeof companyLogos],
  })),
  {
    id: 'education',
    type: 'education' as const,
    title: resume.education.degree,
    place: resume.education.school,
    period: resume.education.period,
    details: [] as readonly string[],
    logo: {
      src: abesLogo,
      alt: 'ABES Engineering College logo',
      crop: false,
    },
  },
]

function JourneyItem({
  item,
  index,
  reducedMotion,
}: {
  item: (typeof journey)[number]
  index: number
  reducedMotion: boolean
}) {
  const [expanded, setExpanded] = useState(false)
  const [active, setActive] = useState(false)
  const articleRef = useRef<HTMLElement>(null)
  const Icon = item.type === 'work' ? BriefcaseBusiness : GraduationCap
  const alignLeft = index % 2 === 0
  const preview = item.details.slice(0, 2)
  const rest = item.details.slice(2)
  const visibleDetails = expanded ? item.details : preview

  useEffect(() => {
    const el = articleRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: '-35% 0px -35% 0px', threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.article
      ref={articleRef}
      className={`relative grid pl-14 md:grid-cols-2 md:pl-0 ${
        alignLeft ? '' : 'md:[&>div:first-child]:col-start-2'
      }`}
      initial={reducedMotion ? false : { opacity: 0, x: alignLeft ? -28 : 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: reducedMotion ? 0 : 0.08 }}
    >
      <div
        className={`group relative border border-white/10 bg-ink-soft/80 p-6 backdrop-blur-sm transition-colors hover:border-mint/30 sm:p-7 ${
          active ? 'border-mint/35' : ''
        } ${alignLeft ? 'md:mr-12 md:text-right' : 'md:ml-12 md:text-left'}`}
      >
        <div
          className={`mb-4 flex flex-wrap items-center gap-3 ${
            alignLeft ? 'md:justify-end' : ''
          }`}
        >
          <span className="inline-flex items-center gap-2 border border-mint/20 bg-mint/5 px-3 py-1 text-xs font-medium tracking-[0.12em] text-mint uppercase">
            <Icon size={14} />
            {item.type}
          </span>
          <span className="text-sm text-paper-muted">{item.period}</span>
        </div>

        <div
          className={`flex items-center gap-4 ${
            alignLeft ? 'md:flex-row-reverse' : ''
          }`}
        >
          <span className="logo-frame grid h-16 w-16 shrink-0 place-items-center overflow-hidden border border-white/10 bg-white p-1">
            <img
              src={item.logo.src}
              alt={item.logo.alt}
              className={`logo-image h-full w-full ${
                item.logo.crop ? 'object-cover object-left' : 'object-contain'
              }`}
              loading="lazy"
              onError={(event) => {
                event.currentTarget.parentElement?.classList.add('hidden')
              }}
            />
          </span>
          <div className="min-w-0">
            <h3 className="font-display text-xl font-semibold text-paper sm:text-2xl">
              {item.title}
            </h3>
            <p className="mt-1 text-mint">{item.place}</p>
          </div>
        </div>

        {visibleDetails.length > 0 && (
          <ul className="mt-5 space-y-3 text-left">
            <AnimatePresence initial={false}>
              {visibleDetails.map((detail) => (
                <motion.li
                  key={detail}
                  className="flex gap-3 text-sm leading-relaxed text-paper-muted sm:text-base"
                  initial={reducedMotion ? false : { opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={reducedMotion ? undefined : { opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 bg-mint/70"
                    aria-hidden="true"
                  />
                  <span>{detail}</span>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        )}

        {rest.length > 0 && (
          <button
            type="button"
            className={`mt-4 inline-flex items-center gap-1 text-sm font-medium text-mint transition-opacity hover:opacity-80 ${
              alignLeft ? 'md:ml-auto' : ''
            }`}
            aria-expanded={expanded}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? 'Show less' : `Show more (${rest.length})`}
            <ChevronDown
              size={16}
              className={`transition-transform ${expanded ? 'rotate-180' : ''}`}
            />
          </button>
        )}
      </div>

      <span
        className="absolute top-7 left-[13px] z-10 grid h-4 w-4 place-items-center rounded-full bg-ink ring-4 ring-ink md:left-1/2 md:-translate-x-1/2"
        aria-hidden="true"
      >
        <span
          className={`h-3 w-3 rounded-full bg-mint ${
            active && !reducedMotion
              ? 'animate-pulse shadow-[0_0_18px_var(--accent-glow-strong)]'
              : 'shadow-[0_0_18px_var(--accent-glow)]'
          }`}
        />
      </span>
    </motion.article>
  )
}

export function Journey() {
  const reducedMotion = usePrefersReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.7', 'end 0.85'],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative scroll-mt-20 overflow-hidden border-t border-white/5 bg-ink/[0.72] backdrop-blur-[2px]"
    >
      <div className="section-orb section-orb-right" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading eyebrow="My journey" title="Education to experience">
          <p className="mt-4 max-w-2xl text-paper-muted">
            A continuous path from engineering fundamentals to building reliable
            products across frontend, backend, and data systems.
          </p>
        </SectionHeading>

        <div className="relative mt-16">
          <div
            className="absolute top-0 bottom-0 left-5 w-px bg-white/10 md:left-1/2"
            aria-hidden="true"
          />
          <motion.div
            className="absolute top-0 left-5 w-px origin-top bg-gradient-to-b from-mint via-mint/60 to-mint/20 md:left-1/2"
            style={
              reducedMotion
                ? { scaleY: 1, height: '100%' }
                : { scaleY: lineScale, height: '100%' }
            }
            aria-hidden="true"
          />

          <div className="space-y-12 md:space-y-4">
            {journey.map((item, index) => (
              <JourneyItem
                key={item.id}
                item={item}
                index={index}
                reducedMotion={reducedMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
