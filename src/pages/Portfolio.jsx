import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { projects } from '../data'

const categories = ['All', ...new Set(projects.map((p) => p.category))]

function ProjectSlideshow({ title, images }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!images || images.length <= 1) return undefined

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [images])

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className="project-gallery">
      <div className="relative overflow-hidden rounded-2xl border border-brand-100 bg-slate-100 shadow-md">
        <img
          src={images[activeIndex]}
          alt={`${title} ${activeIndex + 1}`}
          className="slide-image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />
        <span className="absolute bottom-4 left-4 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {activeIndex + 1} / {images.length}
        </span>
      </div>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {images.map((image, index) => (
          <button
            key={`${title}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`gallery-thumb ${activeIndex === index ? 'active' : ''}`}
            aria-label={`View image ${index + 1} for ${title}`}
          >
            <img src={image} alt={`${title} thumbnail ${index + 1}`} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)
  const feedbackProject = projects.find((project) => project.id === 'seasonal-feedback')
  const transportProject = projects.find((project) => project.id === 'pharma-logistics')

  return (
    <>
      <PageHero
        eyebrow="Projects (Performed Activities)"
        title="Recent Achievements and Operational Milestones"
        subtitle="Lewegen Trading PLC is pleased to share several recent achievements that demonstrate our growing capacity to deliver reliable consultancy, supply, and transportation services across Ethiopia."
        primary={{ label: 'View Activities', to: '/portfolio' }}
        secondary={{ label: 'Contact Us', to: '/contact' }}
      />

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
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

        {(feedbackProject || transportProject) && (
          <div className="mb-14 grid gap-8 lg:grid-cols-2">
            {feedbackProject && (
              <Reveal className="h-full">
                <div className="project-card h-full overflow-hidden rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-brand-100 p-6 shadow-sm dark:border-white/10 dark:from-ink-800 dark:via-ink-800 dark:to-ink-700">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
                      Consultancy
                    </span>
                    <span className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                      {feedbackProject.duration}
                    </span>
                  </div>
                  <ProjectSlideshow title={feedbackProject.title} images={feedbackProject.images} />
                  <h3 className="mt-6 text-xl font-semibold text-ink-900 dark:text-white">{feedbackProject.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {feedbackProject.detail}
                  </p>
                  <div className="mt-5 space-y-3">
                    {feedbackProject.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {transportProject && (
              <Reveal className="h-full">
                <div className="project-card h-full overflow-hidden rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-brand-100 p-6 shadow-sm dark:border-white/10 dark:from-ink-800 dark:via-ink-800 dark:to-ink-700">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
                      Logistics
                    </span>
                    <span className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                      {transportProject.duration}
                    </span>
                  </div>
                  <ProjectSlideshow title={transportProject.title} images={transportProject.images} />
                  <h3 className="mt-6 text-xl font-semibold text-ink-900 dark:text-white">{transportProject.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {transportProject.detail}
                  </p>
                  <div className="mt-5 space-y-3">
                    {transportProject.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={i * 120} className="h-full">
              <article className="project-card flex h-full flex-col overflow-hidden rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-brand-100 shadow-sm transition-all duration-300 dark:border-white/10 dark:from-ink-800 dark:via-ink-800 dark:to-ink-700">
                {p.thumbnail ? (
                  <div className="relative h-48 overflow-hidden bg-slate-200">
                    <img
                      src={p.thumbnail}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute right-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                      {p.duration}
                    </span>
                  </div>
                ) : (
                  <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-brand-600 to-ink-800 text-2xl font-bold text-white">
                    {p.title.split(' ')[0]}
                    <span className="absolute right-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
                      {p.duration}
                    </span>
                  </div>
                )}
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
              We partner with organizations to deliver reliable, innovative digital solutions with long-term impact.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-xl bg-brand-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-colors hover:bg-brand-700"
              >
                Let&apos;s Talk
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
