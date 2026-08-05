import { useEffect, useRef, useState } from 'react'
import { Layers3, TrendingUp, UsersRound, Zap } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const highlights = [
  {
    value: 4,
    suffix: '+',
    label: 'Years building products',
    icon: Zap,
  },
  {
    value: 10,
    suffix: 'K+',
    label: 'Active users impacted',
    icon: UsersRound,
  },
  {
    value: 20,
    suffix: '%',
    label: 'Engagement improvement',
    icon: TrendingUp,
  },
  {
    value: 3,
    suffix: '',
    label: 'Layers: UI, API & data',
    icon: Layers3,
  },
]

function useCountUp(target: number, active: boolean, reducedMotion: boolean) {
  const [value, setValue] = useState(reducedMotion ? target : 0)

  useEffect(() => {
    if (reducedMotion) {
      setValue(target)
      return
    }
    if (!active) return

    let frame = 0
    const duration = 900
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(target * eased))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, reducedMotion, target])

  return value
}

function HighlightStat({
  value,
  suffix,
  label,
  icon: Icon,
  index,
  reducedMotion,
}: {
  value: number
  suffix: string
  label: string
  icon: typeof Zap
  index: number
  reducedMotion: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const count = useCountUp(value, inView, reducedMotion)

  return (
    <motion.div
      ref={ref}
      className="group relative border-white/5 px-3 py-8 odd:border-r lg:border-r lg:px-6 lg:py-10 lg:last:border-r-0"
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.4,
        delay: reducedMotion ? 0 : index * 0.07,
      }}
    >
      <Icon
        className="mb-3 text-mint/70 transition-transform group-hover:-translate-y-1"
        size={20}
        strokeWidth={1.6}
      />
      <p className="font-display text-3xl font-bold text-paper sm:text-4xl">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-xs text-paper-muted sm:text-sm">{label}</p>
      <span
        className="mt-4 block h-px w-0 bg-mint transition-all duration-300 group-hover:w-10"
        aria-hidden="true"
      />
    </motion.div>
  )
}

export function Highlights() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section
      aria-label="Career highlights"
      className="relative z-10 border-y border-white/5 bg-ink/[0.76] backdrop-blur-[2px]"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">
        {highlights.map((item, index) => (
          <HighlightStat
            key={item.label}
            {...item}
            index={index}
            reducedMotion={reducedMotion}
          />
        ))}
      </div>
    </section>
  )
}
