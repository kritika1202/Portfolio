import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BsBriefcaseFill } from 'react-icons/bs'
import { HiAcademicCap } from 'react-icons/hi'

const EXPERIENCES = [
  {
    type: 'work',
    company: 'Oasis InfoByte',
    role: 'Full Stack Developer Intern',
    period: 'May 2024 – Jul 2024',
    location: 'Remote',
    tech: ['React.js', 'Material UI', 'Express.js', 'Axios', 'MVEL', 'OAuth2', 'MySQL'],
    bullets: [
      'Built a secure config management portal using React and Express.js, integrating OAuth2 authentication and CORS-aware internal routing for controlled API access.',
      'Re-architected a legacy MySQL config model into an output-first design, using an MVEL rule engine to generate configurations on demand, replacing static storage with dynamic evaluation.',
      'Delivered a self-serve CRUD interface for the ops team, enabling independent rule deployment and eliminating recurring developer involvement in config changes.',
    ],
    logoImg: '/logos/oasis.jpg',
    logoPad: 'p-1',
  },
  {
    type: 'work',
    company: 'Salesforce',
    role: 'Virtual Internship — Salesforce Developer',
    period: 'Aug 2023 – Oct 2023',
    location: 'Virtual',
    tech: ['Salesforce CRM', 'Apex', 'SOQL', 'Flow Builder', 'Trailhead'],
    bullets: [
      'Completed a structured internship applying Apex, SOQL, Flow Builder, and CRM data modelling to design and simulate real-world business solutions.',
      'Earned 80+ Trailhead badges including the Salesforce Developer Superbadge, demonstrating strong proficiency in platform capabilities and best practices.',
      'Developed a functional CRM-based solution by configuring custom objects, validation rules, and automated workflows with robust data handling and security controls.',
    ],
    logoImg: '/logos/salesforce.png',
    logoPad: 'p-1.5',
  },
  {
    type: 'education',
    company: 'LNCT Bhopal',
    role: 'B.Tech — Computer Science & Engineering',
    period: '2021 – 2025',
    location: 'Bhopal, India',
    tech: ['CGPA: 8.3 / 10'],
    bullets: [
      'Graduated with a strong academic record, specialising in Data Structures & Algorithms, DBMS, OOP, and Operating Systems.',
      'Actively built real-world projects across the full stack using MERN, integrating third-party APIs and AI services.',
    ],
    logoImg: '/logos/lnct.jpg',
    logoPad: 'p-1',
  },
]

function Logo({ item }) {
  return (
    <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md flex-shrink-0 overflow-hidden ${item.logoPad}`}>
      <img
        src={item.logoImg}
        alt={item.company}
        className="w-full h-full object-contain"
      />
    </div>
  )
}

function SectionTitle({ eyebrow, title }) {
  return (
    <div className="text-center mb-14">
      <p className="text-brand-400 text-sm font-semibold tracking-widest uppercase mb-2">{eyebrow}</p>
      <h2 className="text-4xl font-bold text-white">{title}</h2>
      <div className="mt-4 mx-auto w-20 h-0.5 bg-gradient-to-r from-brand-500 to-accent rounded-full" />
    </div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/8 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto section-padding" ref={ref}>
        <SectionTitle eyebrow="Where I've been" title="Experience & Education" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-brand-500/60 via-accent/30 to-transparent hidden md:block" />

          <div className="space-y-6">
            {EXPERIENCES.map((item, i) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="md:pl-16 relative"
              >
                {/* Small timeline dot */}
                <div className="absolute left-0 top-6 hidden md:flex w-10 h-10 rounded-full bg-dark-800 border-2 border-brand-500/50 items-center justify-center text-brand-400 -translate-y-2">
                  {item.type === 'education'
                    ? <HiAcademicCap size={16} />
                    : <BsBriefcaseFill size={14} />
                  }
                </div>

                <div className="glass rounded-2xl p-6 hover:border-brand-500/40 transition-all duration-200 group">
                  {/* Card header: logo + title + date */}
                  <div className="flex items-start gap-4 mb-4">
                    <Logo item={item} />
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                        <div>
                          <h3 className="text-white font-semibold text-base leading-snug group-hover:text-brand-300 transition-colors">
                            {item.role}
                          </h3>
                          <p className="text-brand-400 font-semibold text-sm mt-0.5">{item.company}</p>
                        </div>
                        <div className="text-sm text-gray-500 sm:text-right flex-shrink-0">
                          <p className="font-medium text-gray-400">{item.period}</p>
                          <p>{item.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {item.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-full text-xs bg-brand-500/10 border border-brand-500/20 text-brand-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
