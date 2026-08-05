import { useState } from 'react'
import { Mail, Menu, Moon, Sun, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { navLinks, resume } from '../data/resume'
import { useActiveSection } from '../hooks/useActiveSection'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { useTheme } from '../hooks/useTheme'

export function Nav() {
  const activeId = useActiveSection()
  const reducedMotion = usePrefersReducedMotion()
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)

  const linkClass = (id: string) =>
    `text-sm tracking-wide transition-colors ${
      activeId === id ? 'text-mint' : 'text-paper-muted hover:text-paper'
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          className="font-display text-sm font-semibold tracking-[0.12em] text-paper uppercase"
        >
          {resume.name.split(' ')[0]}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className={linkClass(link.id)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle grid h-9 w-9 place-items-center border border-white/10 text-paper-muted transition-colors hover:border-white/25 hover:text-paper"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          </li>
          <li>
            <a
              href={`mailto:${resume.email}`}
              className="btn-primary inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold tracking-wide"
            >
              <Mail size={14} />
              Hire me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-1 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle grid h-9 w-9 place-items-center text-paper"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-paper"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reducedMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/5 bg-ink md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`block py-3 ${linkClass(link.id)}`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={`mailto:${resume.email}`}
                  className="btn-primary inline-flex w-full items-center justify-center gap-2 py-3 text-sm font-semibold"
                  onClick={() => setOpen(false)}
                >
                  <Mail size={16} />
                  Hire me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
