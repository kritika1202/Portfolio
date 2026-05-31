import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import useTypewriter from '../hooks/useTypewriter'

const CODE_LINES = [
  { indent: 0, text: 'const kritika = {',            color: 'text-violet-300' },
  { indent: 1, text: 'role:    "MERN Stack Dev",',   color: 'text-sky-300'    },
  { indent: 1, text: 'stack:   ["React", "Node"],',  color: 'text-sky-300'    },
  { indent: 1, text: 'cgpa:    8.3,',                color: 'text-amber-300'  },
  { indent: 1, text: 'passion: "Building things",',  color: 'text-emerald-300'},
  { indent: 1, text: 'hobbies: ["🏀","🎵","✏️"],',   color: 'text-pink-300'   },
  { indent: 0, text: '}',                            color: 'text-violet-300' },
  { indent: 0, text: '',                             color: ''                },
  { indent: 0, text: 'kritika.build() 🚀',           color: 'text-green-400'  },
]

function CodeWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
      className="animate-float w-full max-w-md"
    >
      <div className="rounded-2xl overflow-hidden glass glow-brand shadow-2xl">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-dark-700/80 border-b border-white/5">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="mx-auto text-xs text-gray-500 font-mono">portfolio.js</span>
        </div>
        {/* Code body */}
        <div className="p-5 font-mono text-sm leading-relaxed">
          {CODE_LINES.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="flex"
            >
              <span className="select-none text-gray-600 w-6 text-right mr-4 text-xs mt-0.5">
                {line.text !== '' ? i + 1 : ''}
              </span>
              <span className={`${line.color} whitespace-pre`}>
                {' '.repeat(line.indent * 2)}{line.text}
              </span>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="flex mt-1"
          >
            <span className="w-6 mr-4" />
            <span className="w-2 h-5 bg-brand-400 animate-blink rounded-sm" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

const ROLES = ['MERN Stack Developer', 'React Enthusiast', 'Problem Solver', 'CSE Graduate']

export default function Hero() {
  const typed = useTypewriter(ROLES, 70, 45, 1800)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-brand-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-accent/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-500/5 blur-[100px] pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-6xl mx-auto section-padding pt-28 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left — text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-300 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Open to opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4"
            >
              Hi, I'm{' '}
              <span className="text-gradient">Kritika</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="h-10 mb-6"
            >
              <p className="text-xl sm:text-2xl text-gray-300 font-medium">
                <span className="text-brand-300">{typed}</span>
                <span className="animate-blink text-brand-400">|</span>
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="text-gray-400 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8"
            >
              B.Tech CSE graduate from LNCT Bhopal with hands-on experience building
              full-stack web apps using the MERN stack. Passionate about clean code,
              real-time systems, and AI-powered tools.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              <a
                href="#projects"
                className="px-7 py-3 rounded-full bg-gradient-to-r from-brand-500 to-accent text-white font-semibold shadow-lg shadow-brand-600/30 hover:shadow-brand-600/50 hover:scale-105 transition-all duration-200"
              >
                View Projects
              </a>
              <a
                href="#connect"
                className="px-7 py-3 rounded-full border border-brand-500/50 text-brand-300 font-semibold hover:bg-brand-500/10 hover:border-brand-400 hover:scale-105 transition-all duration-200"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              {[
                { href: 'https://github.com/kritika1202',          Icon: FiGithub,   label: 'GitHub'    },
                { href: 'https://linkedin.com/in/-kritika-choubey', Icon: FiLinkedin, label: 'LinkedIn'  },
                { href: 'mailto:kritichoubey1202@gmail.com',        Icon: FiMail,     label: 'Email'     },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-300 hover:border-brand-500/50 hover:bg-brand-500/10 transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — animated code window */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <CodeWindow />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.4 }}>
          <FiArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
