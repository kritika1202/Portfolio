import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiTailwindcss, SiRedux, SiPython, SiGit, SiPostman,
} from 'react-icons/si'
import { FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa'

const SKILL_GROUPS = [
  {
    label: 'Languages',
    items: [
      { name: 'JavaScript', Icon: SiJavascript, color: '#f7df1e' },
      { name: 'Java',       Icon: FaJava,        color: '#f89820' },
      { name: 'Python',     Icon: SiPython,      color: '#3776ab' },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { name: 'React.js',     Icon: SiReact,       color: '#61dafb' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38bdf8' },
      { name: 'Redux',        Icon: SiRedux,       color: '#764abc' },
      { name: 'HTML5',        Icon: FaHtml5,       color: '#e34f26' },
      { name: 'CSS3',         Icon: FaCss3Alt,     color: '#264de4' },
    ],
  },
  {
    label: 'Backend & DB',
    items: [
      { name: 'Node.js',   Icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js',Icon: SiExpress,   color: '#ffffff'  },
      { name: 'MongoDB',   Icon: SiMongodb,   color: '#47a248' },
      { name: 'MySQL',     Icon: SiMysql,     color: '#00758f' },
    ],
  },
  {
    label: 'Tools',
    items: [
      { name: 'Git',     Icon: SiGit,     color: '#f05032' },
      { name: 'Postman', Icon: SiPostman, color: '#ff6c37' },
    ],
  },
]

const CERTIFICATIONS = [
  { org: 'Wipro TalentNext',       title: 'Java Full Stack'                      },
  { org: 'Infosys Springboard',    title: 'Programming in Java'                  },
  { org: 'Infosys Springboard',    title: 'Web Development (HTML, CSS, JS)'      },
  { org: 'Cisco',                  title: 'CCNA — Cisco Certified Network Assoc.'},
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

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, delay } },
})

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-brand-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto section-padding" ref={ref}>
        <SectionTitle eyebrow="Get to know me" title="About Me" />

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Bio */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="glass rounded-2xl p-8 h-full">
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate full-stack developer and recent B.Tech CSE graduate
                (CGPA 8.3) from LNCT Bhopal. I love turning ideas into clean, scalable
                web applications — from architecting RESTful APIs to building interactive
                React UIs.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                During my internship at <span className="text-brand-300 font-medium">Oasis InfoByte</span> I
                rebuilt a legacy config system with a dynamic MVEL rule engine, and at
                <span className="text-brand-300 font-medium"> Salesforce</span> I
                earned 80+ Trailhead badges while building CRM automations.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Basketball 🏀', 'Singing 🎵', 'Sketching ✏️', 'Dancing 💃', 'Cooking 🍳'].map((h) => (
                  <span
                    key={h}
                    className="px-3 py-1 rounded-full bg-dark-700 border border-white/5 text-gray-400 text-sm"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={fadeUp(0.08)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="text-white font-semibold text-lg mb-5">Certifications</h3>
              <div className="space-y-3">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.title}
                    className="flex items-start gap-3 p-3 rounded-xl bg-dark-700/60 border border-white/5"
                  >
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br from-brand-500 to-accent flex-shrink-0 flex items-center justify-center">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L4 7L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <div>
                      <p className="text-white text-sm font-medium">{cert.title}</p>
                      <p className="text-gray-500 text-xs">{cert.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <h3 className="text-center text-white font-semibold text-xl mb-8">Tech Stack</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_GROUPS.map((group, gi) => (
              <motion.div
                key={group.label}
                variants={fadeUp(0.05 + gi * 0.04)}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="glass rounded-2xl p-5"
              >
                <p className="text-brand-300 text-xs font-semibold tracking-wider uppercase mb-4">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(({ name, Icon, color }) => (
                    <motion.div
                      key={name}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-dark-700/60 border border-white/5 text-sm text-gray-300 cursor-default"
                    >
                      <Icon size={14} style={{ color }} />
                      <span>{name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
