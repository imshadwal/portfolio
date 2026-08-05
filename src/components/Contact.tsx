import { Mail, MapPin, Phone, type LucideIcon } from 'lucide-react'
import { motion } from 'motion/react'
import type { ComponentType, SVGProps } from 'react'
import { resume } from '../data/resume'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { LinkedInIcon } from './LinkedInIcon'
import { SectionHeading } from './SectionHeading'

type ContactIcon = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>

const contacts: {
  id: string
  label: string
  value: string
  href: string | null
  icon: ContactIcon
}[] = [
  {
    id: 'email',
    label: 'Email',
    value: resume.email,
    href: `mailto:${resume.email}`,
    icon: Mail,
  },
  {
    id: 'phone',
    label: 'Phone',
    value: resume.phone,
    href: resume.phoneHref,
    icon: Phone,
  },
  {
    id: 'location',
    label: 'Location',
    value: resume.location,
    href: null,
    icon: MapPin,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: resume.linkedinLabel,
    href: resume.linkedin,
    icon: LinkedInIcon,
  },
]

export function Contact() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-white/5 bg-ink-soft/[0.84] backdrop-blur-[2px]"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading eyebrow="Contact" title="Let’s connect">
          <p className="mt-4 max-w-xl text-paper-muted">
            Open to full stack roles and collaborations. Reach out via email or LinkedIn.
          </p>
        </SectionHeading>

        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
        >
          <motion.a
            href={`mailto:${resume.email}`}
            className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold"
            animate={
              reducedMotion
                ? undefined
                : {
                    boxShadow: [
                      '0 0 0 0 var(--accent-transparent)',
                      '0 0 0 8px var(--accent-pulse)',
                      '0 0 0 0 var(--accent-transparent)',
                    ],
                  }
            }
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Mail size={18} />
            Email me
          </motion.a>
          <a
            href={resume.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold"
          >
            <LinkedInIcon width={18} height={18} />
            LinkedIn
          </a>
        </motion.div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {contacts.map((item, i) => {
            const Icon = item.icon
            const content = (
              <>
                <Icon className="h-5 w-5 shrink-0 text-mint" width={20} height={20} />
                <div>
                  <p className="text-xs tracking-[0.16em] text-paper-muted uppercase">
                    {item.label}
                  </p>
                  <p className="mt-1 text-paper">{item.value}</p>
                </div>
              </>
            )

            return (
              <motion.li
                key={item.id}
                initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: reducedMotion ? 0 : i * 0.06 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.id === 'linkedin' ? '_blank' : undefined}
                    rel={item.id === 'linkedin' ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 transition-colors hover:text-mint"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex items-start gap-4">{content}</div>
                )}
              </motion.li>
            )
          })}
        </ul>
      </div>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-paper-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-display tracking-wide text-paper">
            {resume.name}
          </p>
          <p>
            © {new Date().getFullYear()} · {resume.title} · {resume.location}
          </p>
        </div>
      </footer>
    </section>
  )
}
