import { useMemo, useState } from 'react'
import {
  Cloud,
  Code2,
  Database,
  FileJson,
  GitBranch,
  Globe2,
  Layout,
  Languages,
  RefreshCw,
  Server,
  ShieldCheck,
  UploadCloud,
  Workflow,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import type { IconType } from 'react-icons'
import {
  SiAngular,
  SiApacheairflow,
  SiBitbucket,
  SiBootstrap,
  SiCouchbase,
  SiCss,
  SiCursor,
  SiDocker,
  SiGit,
  SiGithub,
  SiGithubcopilot,
  SiGooglebigquery,
  SiGooglecloud,
  SiGooglecloudstorage,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJira,
  SiMui,
  SiNestjs,
  SiNodedotjs,
  SiPassport,
  SiPostgresql,
  SiReact,
  SiReacthookform,
  SiRedux,
  SiSass,
  SiStorybook,
  SiSwagger,
  SiTailwindcss,
  SiTanstack,
  SiTestinglibrary,
  SiTypescript,
  SiVite,
  SiZod,
} from 'react-icons/si'
import { resume, type SkillIconId } from '../data/resume'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { SectionHeading } from './SectionHeading'

const iconMap: Record<SkillIconId, LucideIcon> = {
  code: Code2,
  layout: Layout,
  server: Server,
  database: Database,
  workflow: Workflow,
  cloud: Cloud,
  wrench: Wrench,
}

type SkillIcon = IconType | LucideIcon

const skillIcons: Record<string, SkillIcon> = {
  TypeScript: SiTypescript,
  'JavaScript (ES6+)': SiJavascript,
  HTML5: SiHtml5,
  CSS3: SiCss,
  SCSS: SiSass,
  'React.js': SiReact,
  Angular: SiAngular,
  Redux: SiRedux,
  NgRx: SiAngular,
  'Tailwind CSS': SiTailwindcss,
  'TanStack React Query': SiTanstack,
  'React Hook Form': SiReacthookform,
  Zod: SiZod,
  Vite: SiVite,
  'Material UI': SiMui,
  Bootstrap: SiBootstrap,
  Storybook: SiStorybook,
  Jest: SiJest,
  'React Testing Library': SiTestinglibrary,
  'Node.js': SiNodedotjs,
  NestJS: SiNestjs,
  'RESTful APIs': Globe2,
  'Swagger/OpenAPI': SiSwagger,
  'Passport.js (JWT/OAuth)': SiPassport,
  'class-validator': ShieldCheck,
  'Internationalization (i18n)': Languages,
  PostgreSQL: SiPostgresql,
  Couchbase: SiCouchbase,
  'Google BigQuery': SiGooglebigquery,
  NoSQL: Database,
  'Apache Airflow': SiApacheairflow,
  'ETL Pipelines': Workflow,
  'Data Integration': GitBranch,
  'BigQuery → GCS → Couchbase ETL': SiGooglebigquery,
  'Batch Upserts': UploadCloud,
  'Sync Metadata': RefreshCw,
  'Google Cloud Platform (GCP)': SiGooglecloud,
  'Google Cloud Storage': SiGooglecloudstorage,
  Docker: SiDocker,
  'Docker Compose': SiDocker,
  Git: SiGit,
  GitHub: SiGithub,
  Bitbucket: SiBitbucket,
  Jira: SiJira,
  'GitHub Copilot': SiGithubcopilot,
  Cursor: SiCursor,
  'Visual Studio Code': Code2,
}

const featuredStack = [
  'React.js',
  'TypeScript',
  'NestJS',
  'Node.js',
  'Couchbase',
  'Google BigQuery',
  'Apache Airflow',
  'Google Cloud Platform (GCP)',
] as const

const filterTabs = [
  { id: 'all', label: 'All', groupIds: null },
  { id: 'frontend', label: 'Frontend', groupIds: ['languages', 'frontend'] },
  { id: 'backend', label: 'Backend', groupIds: ['backend', 'databases'] },
  { id: 'data', label: 'Data', groupIds: ['data', 'databases'] },
  { id: 'cloud', label: 'Cloud', groupIds: ['cloud'] },
  { id: 'tools', label: 'Tools', groupIds: ['tools'] },
] as const

type FilterId = (typeof filterTabs)[number]['id']

export function Skills() {
  const reducedMotion = usePrefersReducedMotion()
  const [filter, setFilter] = useState<FilterId>('all')

  const visibleGroups = useMemo(() => {
    const tab = filterTabs.find((t) => t.id === filter)!
    if (!tab.groupIds) return resume.skillGroups
    const ids = new Set(tab.groupIds)
    return resume.skillGroups.filter((g) => ids.has(g.id))
  }, [filter])

  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-white/5 bg-ink-soft/[0.82] backdrop-blur-[2px]"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading eyebrow="Skills" title="Technical toolkit" />

        <motion.div
          className="mt-10"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
        >
          <p className="mb-4 text-xs tracking-[0.16em] text-paper-muted uppercase">
            Featured stack
          </p>
          <ul className="flex flex-wrap gap-3">
            {featuredStack.map((skill) => {
              const SkillIcon = skillIcons[skill] ?? FileJson
              return (
                <li
                  key={skill}
                  className="flex items-center gap-2.5 border border-mint/20 bg-mint/[0.06] px-4 py-2.5 text-sm font-medium text-paper"
                >
                  <SkillIcon className="text-mint" size={22} aria-hidden="true" />
                  {skill.replace('Google Cloud Platform (GCP)', 'GCP').replace('Google BigQuery', 'BigQuery').replace('Apache Airflow', 'Airflow').replace('React.js', 'React')}
                </li>
              )
            })}
          </ul>
        </motion.div>

        <div
          className="mt-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Skill categories"
        >
          {filterTabs.map((tab) => {
            const active = filter === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                className={`px-3.5 py-2 text-sm transition-colors ${
                  active
                    ? 'bg-mint text-ink'
                    : 'border border-white/10 text-paper-muted hover:border-mint/40 hover:text-paper'
                }`}
                onClick={() => setFilter(tab.id)}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        <div className="mt-10 space-y-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {visibleGroups.map((group, groupIndex) => {
                const Icon = iconMap[group.icon]
                return (
                  <div key={group.id}>
                    <div className="mb-4 flex items-center gap-3">
                      <Icon className="text-mint" size={20} strokeWidth={1.75} />
                      <h3 className="font-display text-lg font-semibold text-paper">
                        {group.label}
                      </h3>
                    </div>
                    <ul className="flex flex-wrap gap-2">
                      {group.skills.map((skill, i) => {
                        const SkillIcon = skillIcons[skill] ?? FileJson
                        return (
                          <motion.li
                            key={skill}
                            className="group/skill flex items-center gap-2 border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-paper-muted transition-colors hover:border-mint/40 hover:bg-mint/[0.04] hover:text-paper"
                            initial={
                              reducedMotion ? false : { opacity: 0, scale: 0.92 }
                            }
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.25,
                              delay: reducedMotion ? 0 : 0.015 * i + groupIndex * 0.03,
                            }}
                            whileHover={reducedMotion ? undefined : { y: -2 }}
                          >
                            <SkillIcon
                              className="shrink-0 text-mint/75 transition-colors group-hover/skill:text-mint"
                              size={16}
                              aria-hidden="true"
                            />
                            <span>{skill}</span>
                          </motion.li>
                        )
                      })}
                    </ul>
                  </div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
