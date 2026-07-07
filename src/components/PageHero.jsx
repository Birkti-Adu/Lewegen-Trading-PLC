import { Link } from 'react-router-dom'
import Reveal from './Reveal'

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80'

function isExternal(to) {
  return typeof to === 'string' && (to.startsWith('mailto:') || to.startsWith('tel:') || to.startsWith('http'))
}

function CtaButton({ cta, variant }) {
  if (!cta) return null

  const base =
    variant === 'primary'
      ? 'rounded-xl bg-brand-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-colors hover:bg-brand-700'
      : 'rounded-xl bg-white px-7 py-3 text-sm font-semibold text-ink-900 transition-colors hover:bg-slate-100'

  if (isExternal(cta.to)) {
    return (
      <a href={cta.to} className={base}>
        {cta.label}
      </a>
    )
  }

  return (
    <Link to={cta.to} className={base}>
      {cta.label}
    </Link>
  )
}

export default function PageHero({ eyebrow, title, subtitle, image = DEFAULT_IMAGE, primary, secondary }) {
  return (
    <section className="px-4 pt-4 md:px-6 md:pt-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl shadow-2xl shadow-ink-900/30 ring-1 ring-white/10">
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/95 via-ink-900/80 to-ink-900/40" />

        <div className="relative px-8 py-20 text-white md:px-14 md:py-28 lg:py-32">
          <div className="max-w-2xl text-left">
            {eyebrow && (
              <Reveal>
                <span className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-200">
                  {eyebrow}
                </span>
              </Reveal>
            )}
            <Reveal delay={100}>
              <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                {title}
              </h1>
            </Reveal>
            {subtitle && (
              <Reveal delay={200}>
                <p className="mt-5 max-w-xl text-lg text-slate-300">{subtitle}</p>
              </Reveal>
            )}
            {(primary || secondary) && (
              <Reveal delay={300}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <CtaButton cta={primary} variant="primary" />
                  <CtaButton cta={secondary} variant="secondary" />
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
