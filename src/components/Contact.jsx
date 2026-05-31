import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiSend, FiGithub, FiLinkedin, FiMail, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'

const SERVICE_ID           = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID          = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const TEMPLATE_ID_REPLY    = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_REPLY
const PUBLIC_KEY           = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const SOCIAL_LINKS = [
  { Icon: FiGithub,   href: 'https://github.com/kritika1202',           label: 'GitHub'   },
  { Icon: FiLinkedin, href: 'https://linkedin.com/in/-kritika-choubey',  label: 'LinkedIn' },
  { Icon: FiMail,     href: 'mailto:kritichoubey1202@gmail.com',         label: 'Email'    },
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

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      // Notify Kritika
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      // Auto-reply to sender
      if (TEMPLATE_ID_REPLY) {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID_REPLY, {
          name:        form.name,
          email:       form.email,
          reply_to:    form.email,
        }, PUBLIC_KEY)
      }
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="connect" className="py-24 relative">
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-600/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-accent/8 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto section-padding" ref={ref}>
        <SectionTitle eyebrow="Say hello" title="Let's Connect" />

        <div className="grid md:grid-cols-5 gap-10">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3 }}
            className="md:col-span-2 flex flex-col justify-between"
          >
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm always open to discussing new opportunities, interesting projects,
                or just a friendly chat about tech. Drop me a message and I'll get
                back to you as soon as possible!
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <FiMail size={15} className="text-brand-400 flex-shrink-0" />
                  <span>kritichoubey1202@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="text-brand-400 flex-shrink-0 text-base">📍</span>
                  <span>Bengaluru, India</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">Find me on</p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-300 hover:border-brand-500/40 hover:bg-brand-500/10 transition-all"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.06 }}
            className="md:col-span-3"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="glass rounded-2xl p-10 flex flex-col items-center justify-center text-center min-h-64"
              >
                <FiCheckCircle size={48} className="text-green-400 mb-4" />
                <h3 className="text-white text-xl font-semibold mb-2">Message sent!</h3>
                <p className="text-gray-400 mb-6">Thanks for reaching out. I'll reply to you soon.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-5 py-2 rounded-full border border-brand-500/40 text-brand-300 text-sm hover:bg-brand-500/10 transition-all"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-7 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full bg-dark-700/60 border border-white/8 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-500/60 focus:bg-dark-700 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5" htmlFor="email">
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full bg-dark-700/60 border border-white/8 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-500/60 focus:bg-dark-700 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Hi Kritika, I'd love to chat about…"
                    className="w-full bg-dark-700/60 border border-white/8 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-500/60 focus:bg-dark-700 transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 text-red-400 text-sm"
                  >
                    <FiAlertCircle size={15} />
                    Something went wrong. Please email me directly.
                  </motion.p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-accent text-white font-semibold shadow-lg shadow-brand-600/25 hover:shadow-brand-600/40 hover:opacity-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <FiSend size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
