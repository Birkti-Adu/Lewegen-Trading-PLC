import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import Lewegen from '../assets/Lewegen.png'
import { news } from '../data'

const categories = ['All', ...new Set(news.map((n) => n.category))]

export default function News() {
  const [active, setActive] = useState('All')

  const [featured, ...rest] = news
  const list = active === 'All' ? rest : rest.filter((n) => n.category === active)
  const showFeatured = active === 'All' || featured.category === active

  return (
    <>
      <PageHero
        eyebrow="News & Updates"
        title="The Latest From Lewegen Trading PLC"
        subtitle="Breaking news, milestones, and updates from Lewegen Trading PLC as we grow trusted partnerships and deliver sustainable impact."
        primary={{ label: 'Read Updates', to: '/news' }}
        secondary={{ label: 'Contact Sales', to: '/contact' }}
      />

      {showFeatured && (
        <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-24">
          <Reveal>
            <article className="group grid overflow-hidden rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-brand-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-200/50 lg:grid-cols-2 dark:border-white/10 dark:from-ink-800 dark:via-ink-800 dark:to-ink-700">
              <div className="relative min-h-56 overflow-hidden bg-gradient-to-br from-brand-600 to-ink-800">
                <img src={Lewegen} alt="Lewegen Trading PLC" className="h-full w-full object-cover" />
                <span className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
                  Featured
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
                    {featured.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Icon name="calendar" className="h-4 w-4" />
                    {featured.date}
                  </span>
                  <span>&middot;</span>
                  <span>{featured.readTime}</span>
                </div>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink-900 md:text-3xl dark:text-white">
                  {featured.title}
                </h2>
                <p className="mt-3 text-slate-600 dark:text-slate-300">{featured.excerpt}</p>
                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {featured.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Latest Stories"
            title="Insights, Updates &"
            highlight="Announcements"
            description="Stay up to date with what we are building, learning, and sharing across the industry."
          />
        </Reveal>

        <Reveal className="mb-12 mt-10 flex flex-wrap justify-center gap-3">
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

        {list.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((item, i) => (
              <Reveal key={item.id} delay={i * 120} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-brand-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-brand-200 hover:shadow-xl hover:shadow-brand-200/50 dark:border-white/10 dark:from-ink-800 dark:via-ink-800 dark:to-ink-700">
                  <div className="flex h-40 items-center justify-center bg-gradient-to-br from-brand-600 to-ink-800 text-xl font-bold text-white">
                    {item.title.split(' ')[0]}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                      <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
                        {item.category}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Icon name="calendar" className="h-3.5 w-3.5" />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-ink-900 dark:text-white">{item.title}</h3>
                    <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {item.excerpt}
                    </p>
                    <div className="mt-4 space-y-2 border-t border-brand-100 pt-4 text-sm leading-6 text-slate-600 dark:border-white/10 dark:text-slate-300">
                      {item.body.slice(0, 2).map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-brand-100 pt-4 dark:border-white/10">
                      <span className="text-xs text-slate-500 dark:text-slate-400">{item.readTime}</span>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                      >
                        Read more
                        <span aria-hidden>&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-500 dark:text-slate-400">No stories in this category yet.</p>
        )}
      </section>

      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-ink-600 px-8 py-16 text-center text-white shadow-2xl shadow-ink-900/40 ring-1 ring-white/10 md:py-20">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -left-10 top-0 h-64 w-64 rounded-full bg-brand-600 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-accent/40 blur-3xl" />
          </div>
          <Reveal className="relative">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-200">Stay in the loop</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">Never Miss an Update</h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Get the latest product news, insights, and announcements delivered straight to you.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-xl bg-brand-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-colors hover:bg-brand-700"
              >
                Subscribe
              </Link>
              <Link
                to="/about"
                className="rounded-xl border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                About Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
