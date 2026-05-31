import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiRedux, SiTailwindcss, SiGooglegemini } from 'react-icons/si'
import { VscGitPullRequest } from 'react-icons/vsc'

const PROJECTS = [
  {
    title: 'Studynotion',
    subtitle: 'EdTech Platform',
    year: '2024 – 2025',
    description:
      'A fully-featured online learning platform where instructors can create courses and students can enrol, pay, and track progress. Built with MERN stack from scratch.',
    bullets: [
      'Responsive, component-driven UI with React 18 & Tailwind CSS, reusable components with real-time Redux state.',
      'Built and integrated 11 RESTful APIs using Node.js + Express + MongoDB; async state via Redux Toolkit createAsyncThunk.',
      'Route-level code splitting with React.lazy & Suspense; JWT authentication flow.',
    ],
    tech: [
      { name: 'React',   Icon: SiReact,       color: '#61dafb' },
      { name: 'Node.js', Icon: SiNodedotjs,   color: '#339933' },
      { name: 'MongoDB', Icon: SiMongodb,     color: '#47a248' },
      { name: 'Express', Icon: SiExpress,     color: '#ffffff'  },
      { name: 'Redux',   Icon: SiRedux,       color: '#764abc' },
      { name: 'Tailwind',Icon: SiTailwindcss, color: '#38bdf8' },
    ],
    github: 'https://github.com/kritika1202/Studynotion',
    live:   'https://studynotion.kritika.online',
    gradient: 'from-violet-500/20 to-sky-500/20',
    border:   'hover:border-violet-500/40',
    badge:    'MERN Stack',
  },
  {
    title: 'PR Insight',
    subtitle: 'GitHub PR Automator',
    year: '2025 – 2026',
    description:
      'An AI-powered GitHub bot that intercepts pull-request events via webhooks and automatically posts structured code-review comments using Google Gemini 2.5 Flash.',
    bullets: [
      'Express.js webhook server that intercepts GitHub PR events, parses code diffs in real time, and triggers AI review.',
      'Integrated Gemini 2.5 Flash API with structured prompting to flag bugs, time-complexity issues, and security vulnerabilities.',
      'Auto-posts severity-labelled inline comments to PRs via Octokit, reducing manual review cycles significantly.',
    ],
    tech: [
      { name: 'Node.js', Icon: SiNodedotjs,    color: '#339933' },
      { name: 'Express', Icon: SiExpress,      color: '#ffffff'  },
      { name: 'Gemini',  Icon: SiGooglegemini, color: '#4285f4' },
      { name: 'GitHub',  Icon: VscGitPullRequest, color: '#ffffff' },
    ],
    github: 'https://github.com/kritika1202/PRInsight',
    live:   'https://prinsight.kritika.online',
    gradient: 'from-emerald-500/20 to-cyan-500/20',
    border:   'hover:border-emerald-500/40',
    badge:    'AI + Webhooks',
  },
]

function SectionTitle({ eyebrow, title }) {
  return (
    <div className="text-center mb-14">
      <p className="text-brand-400 text-sm font-semibold tracking-widest uppercase mb-2">{eyebrow}</p>
      <h2 className="text-4xl font-bold text-white">{title}</h2>
      <div className="mt-4 mx-auto w-20 h-0.5 bg-gradient-to-r from-brand-500 to-accent rounded-full" />
    </div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-brand-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto section-padding" ref={ref}>
        <SectionTitle eyebrow="What I've built" title="Featured Projects" />

        <div className="grid lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`relative group glass rounded-2xl p-7 border border-white/5 ${project.border} transition-all duration-300 overflow-hidden cursor-default flex flex-col`}
            >
              {/* Gradient blob inside card */}
              <div className={`absolute -top-10 -right-10 w-48 h-48 rounded-full bg-gradient-to-br ${project.gradient} blur-3xl opacity-60 pointer-events-none`} />

              <div className="flex items-start justify-between mb-4 relative z-10">
                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-brand-500/15 text-brand-300 border border-brand-500/20">
                    {project.badge}
                  </span>
                  <h3 className="text-white text-xl font-bold mt-2 group-hover:text-brand-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{project.subtitle} · {project.year}</p>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-500/40 transition-all"
                  >
                    <FiGithub size={16} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Live demo"
                    className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-500/40 transition-all"
                  >
                    <FiExternalLink size={16} />
                  </a>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4 relative z-10">
                {project.description}
              </p>

              <ul className="space-y-1.5 mb-5 relative z-10 flex-1">
                {project.bullets.map((b, bi) => (
                  <li key={bi} className="flex items-start gap-2 text-gray-500 text-xs leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-400/60 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 relative z-10">
                {project.tech.map(({ name, Icon, color }) => (
                  <span
                    key={name}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-dark-700/60 border border-white/5 text-gray-300 text-xs"
                  >
                    <Icon size={11} style={{ color }} />
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/kritika1202"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-brand-500/40 text-brand-300 text-sm font-medium hover:bg-brand-500/10 hover:border-brand-400 transition-all"
          >
            <FiGithub size={16} />
            See all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
