import { useState } from 'react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'

const contactInfo = [
  {
    label: 'Phone',
    value: '+251911733290',
    href: 'tel:+251911733290',
    icon: (
      <path d="M3 5a2 2 0 0 1 2-2h2.5l1.5 5-2 1.5a11 11 0 0 0 5 5l1.5-2 5 1.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 5z" />
    ),
  },
  {
    label: 'Email',
    value: 'endalbek@gmail.com',
    href: 'mailto:endalbek@gmail.com',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
  },
  {
    label: 'Location',
    value: 'Addis Ababa, Ethiopia',
    href: null,
    icon: (
      <>
        <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="We would love to hear from you. Reach out for consultancy, transport, or agentship support in Ethiopia."
        primary={{ label: 'Email Us', to: 'mailto:endalbek@gmail.com' }}
        secondary={{ label: 'Call Us', to: 'tel:+251911733290' }}
      />

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Info */}
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="text-2xl font-bold text-ink-900 dark:text-white">Get in touch</h2>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                Reach out through any of the channels below, or send us a message and we'll get back
                to you as soon as possible.
              </p>
            </Reveal>
            <div className="mt-8 space-y-5">
              {contactInfo.map((item, i) => {
                const content = (
                  <div className="group flex items-start gap-4 rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-brand-100 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-200/50 dark:border-white/10 dark:from-ink-800 dark:via-ink-800 dark:to-ink-700">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-500/15 dark:text-brand-300">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {item.icon}
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-0.5 font-medium text-ink-900 dark:text-white">{item.value}</p>
                    </div>
                  </div>
                )
                return (
                  <Reveal key={item.label} delay={i * 100}>
                    {item.href ? (
                      <a href={item.href} className="block">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </Reveal>
                )
              })}
            </div>

            <Reveal delay={300} className="mt-8 overflow-hidden rounded-2xl border border-slate-100 shadow-sm dark:border-white/10">
              <iframe
                title="Company Name location"
                src="https://www.google.com/maps?q=Addis+Ababa,+Ethiopia&output=embed"
                className="h-56 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <Reveal delay={150} className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-ink-800">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-ink-900 dark:text-white">Message sent!</h3>
                  <p className="mt-2 max-w-sm text-sm text-slate-600 dark:text-slate-300">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-xl border border-slate-200 px-6 py-2.5 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-brand-400 dark:hover:text-brand-300"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full Name" name="name" value={form.name} onChange={handleChange} placeholder="Jane Doe" />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                    />
                  </div>
                  <Field
                    label="Subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                  />
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-800 dark:text-slate-200">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 dark:border-white/10 dark:bg-ink-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-brand-500/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

function Field({ label, name, type = 'text', value, onChange, placeholder }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink-800 dark:text-slate-200">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 dark:border-white/10 dark:bg-ink-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-brand-500/30"
      />
    </div>
  )
}
