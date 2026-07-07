import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { projects } from '../data'

const categories = ['All', ...new Set(projects.map((p) => p.category))]

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        title="Solutions That Transform Organizations"
        subtitle="Discover our flagship solutions designed for efficiency, scalability, and measurable impact."
        primary={{ label: 'View Projects', to: '/portfolio' }}
        secondary={{ label: 'Contact Sales', to: '/contact' }}
      />

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        {/* Filter */}
        <Reveal className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-xl px-5 py-2 text-sm font-semibold transition-colors ${
                active === cat
                  ? 'bg-brand-600 text-white'
                  : 'border border-slate-200 bg-white text-ink-700 hover:border-brand-300 hover:text-brand-600 dark:border-white/10 dark:bg-ink-800 dark:text-slate-300 dark:hover:border-brand-400 dark:hover:text-brand-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={i * 120} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-brand-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-brand-200 hover:shadow-xl hover:shadow-brand-200/50 dark:border-white/10 dark:from-ink-800 dark:via-ink-800 dark:to-ink-700">
                <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-brand-600 to-ink-800 text-2xl font-bold text-white">
                  {p.title.split(' ')[0]}
                  <span className="absolute right-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
                    {p.duration}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span className="self-start rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
                    {p.category}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-ink-900 dark:text-white">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{p.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-white/10 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-ink-600 px-8 py-16 text-center text-white shadow-2xl shadow-ink-900/40 ring-1 ring-white/10 md:py-20">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -left-10 top-0 h-64 w-64 rounded-full bg-brand-600 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-accent/40 blur-3xl" />
          </div>
          <Reveal className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
              Want to see your idea here?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              We partner with organizations to deliver reliable, innovative digital solutions with
              long-term impact.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-xl bg-brand-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-colors hover:bg-brand-700"
              >
                Let's Talk
              </Link>
              <Link
                to="/services"
                className="rounded-xl border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
