import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Typewriter from '../components/Typewriter'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { services, projects, partners, industries, stats } from '../data'
import Lewegen from '../assets/Lewegen.png'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-600 text-white">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -left-24 -top-10 h-96 w-96 rounded-full bg-brand-600 blur-3xl" />
          <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-accent/40 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:py-32 lg:grid-cols-10">
          {/* Left: logo, text, buttons (70%) */}
          <div className="text-center lg:col-span-7 lg:text-left">
            <Reveal>
              <div className="flex items-center gap-3 max-lg:justify-center">
                <span className="h-px w-8 bg-brand-400" />
                <span className="text-sm font-medium tracking-wide text-brand-300">
                  Business Excellence for Sustainable Social Impact
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Lewegen Trading PLC
                <br />
                <Typewriter
                  words={[
                    'Consultancy',
                    'Freight Transport',
                    'Agentship',
                    'Trusted Partnerships',
                    'Sustainable Growth',
                  ]}
                  className="bg-gradient-to-r from-brand-400 to-accent bg-clip-text text-transparent"
                />
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-2xl text-lg text-slate-300 max-lg:mx-auto">
                Lewegen Trading PLC is a business initiative established by HDAMA to generate sustainable income for humanitarian and development programs while delivering quality consultancy, transport, and agentship services.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <Link
                  to="/contact"
                  className="rounded-xl bg-brand-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-700 hover:shadow-xl"
                >
                  Contact Us
                </Link>
                <Link
                  to="/services"
                  className="rounded-xl border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  Explore Services
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right: image placeholder (30%) */}
          <div className="lg:col-span-3">
            <Reveal delay={200} className="relative lg:mr-16">
              <div className="absolute inset-0 -z-10 animate-glow rounded-full bg-brand-500/40 blur-3xl" />
              <div className="mx-auto flex aspect-[3/4] w-full max-w-[420px] animate-float items-center justify-center overflow-hidden rounded-3xl border border-white/15 bg-white/5 text-center backdrop-blur-sm lg:max-w-[460px] lg:scale-[1.08]">
                <img
                  src={Lewegen}
                  alt="Lewegen Trading PLC"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Industries */}
        <div className="relative border-t border-white/10 py-10">
          <p className="text-center text-sm font-medium text-slate-400">
            Trusted by organizations across industries
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 px-6">
            {industries.map((ind, i) => (
              <Reveal key={ind} delay={i * 60}>
                <span className="cursor-default rounded-xl border border-white/10 bg-white/90 px-5 py-2.5 text-sm font-medium text-ink-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-white hover:text-brand-600 hover:shadow-md">
                  {ind}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title="Reliable Business"
            highlight="Solutions"
            description="We provide consulting, freight transport, and agentship services designed to create value, strengthen partnerships, and support sustainable growth."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 100} className="h-full">
              <div className="group h-full rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-brand-100 p-7 shadow-sm transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:border-brand-200 hover:shadow-2xl hover:shadow-brand-200/70 dark:border-white/10 dark:from-ink-800 dark:via-ink-800 dark:to-ink-700">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-500/15 dark:text-brand-300">
                  <Icon name={s.icon} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-brand-700 dark:text-brand-300">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-all hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/40"
          >
            Explore All Services
            <span aria-hidden>&rarr;</span>
          </Link>
        </Reveal>
      </section>

      {/* About teaser with stats */}
      <section className="relative overflow-hidden border-t border-transparent bg-gradient-to-b from-brand-50 via-brand-100 to-brand-100 py-20 pb-36 md:py-28 md:pb-44 dark:border-white/5 dark:from-ink-800 dark:via-ink-700 dark:to-ink-800">
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="About Us"
              title="A Trusted Business"
              highlight="Initiative"
              description="Lewegen Trading PLC is committed to excellence, professionalism, and responsible growth while strengthening humanitarian, health, and community development programs."
            />
          </Reveal>

          <div className="mt-14 grid items-center gap-14 lg:grid-cols-2">
            <div>
              <Reveal>
                <h3 className="text-xl font-semibold text-ink-900 dark:text-white">
                  Why organizations choose us
                </h3>
                <p className="mt-3 text-slate-600 dark:text-slate-300">
                  From strategy to delivery, we bring deep local expertise and global best practices
                  to every engagement.
                </p>
              </Reveal>
              <ul className="mt-6 space-y-3">
                {[
                  { title: 'Integrity', desc: 'We operate with honesty, transparency, and accountability.' },
                  { title: 'Excellence', desc: 'We deliver quality services that exceed client expectations.' },
                  { title: 'Customer Focus', desc: 'We place clients at the center of every decision.' },
                  { title: 'Sustainability', desc: 'We pursue responsible growth that supports communities and the environment.' },
                ].map((item, i) => (
                  <Reveal key={item.title} delay={i * 100}>
                    <li className="group flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-md dark:border-white/10 dark:bg-ink-900 dark:ring-1 dark:ring-white/5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-500/15 dark:text-brand-300">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ink-900 dark:text-white">{item.title}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 100} className="h-full">
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-brand-50/60 p-7 text-center shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100 dark:border-white/10 dark:from-ink-900 dark:to-ink-800 dark:ring-1 dark:ring-white/5">
                    <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-400 to-brand-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="text-4xl font-bold text-brand-600 transition-transform duration-300 group-hover:scale-110 dark:text-brand-300">
                      {stat.value}
                    </div>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="mt-12 flex justify-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-700"
            >
              Discover Our Story
              <span aria-hidden>&rarr;</span>
            </Link>
          </Reveal>
        </div>

        <div className="absolute inset-x-0 bottom-0 leading-[0] text-white dark:text-ink-900">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="block h-[80px] w-full md:h-[110px]"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M0,48 C320,120 520,8 760,40 C1000,72 1180,128 1440,56 L1440,120 L0,120 Z"
            />
          </svg>
        </div>
      </section>

      {/* Lewegen Consultancy */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Lewegen Consultancy"
            title="A Thoughtful Advisory"
            highlight="Approach"
            description="Lewegen Consultancy offers practical business guidance that helps clients make informed decisions, strengthen operations, and pursue long-term growth with confidence."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-brand-100 p-8 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:from-ink-800 dark:via-ink-800 dark:to-ink-700">
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                Lewegen Consultancy is the advisory and support arm of Lewegen Trading PLC, created to help organizations navigate complex business environments with clarity, discipline, and measurable value.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                Our consultancy approach combines local insight with practical execution. We work closely with clients to understand their goals, identify operational challenges, and design solutions that improve performance, strengthen partnerships, and support sustainable growth.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                Whether the need is strategic planning, business facilitation, or professional guidance, Lewegen Consultancy brings a client-focused mindset, ethical standards, and a commitment to delivering reliable results that extend beyond a single engagement.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-ink-800">
              <h3 className="text-xl font-semibold text-ink-900 dark:text-white">What we bring to every engagement</h3>
              <ul className="mt-6 space-y-4">
                {[
                  ['Strategic clarity', 'We help clients define priorities and map practical next steps.'],
                  ['Operational support', 'We provide hands-on guidance that makes delivery more efficient and dependable.'],
                  ['Partnership-driven service', 'We build trusted relationships that encourage collaboration and long-term impact.'],
                  ['Sustainable growth', 'We align recommendations with quality, responsibility, and community value.'],
                ].map(([title, desc]) => (
                  <li key={title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-md dark:border-white/10 dark:bg-ink-900/70">
                    <p className="text-sm font-semibold text-ink-900 dark:text-white">{title}</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Portfolio highlights */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-brand-100 to-brand-100 py-20 pt-36 md:py-28 md:pt-44 dark:from-ink-800 dark:via-ink-700 dark:to-ink-800">
        <div className="absolute inset-x-0 top-0 leading-[0] text-white dark:text-ink-900">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="block h-[80px] w-full md:h-[110px]"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M0,0 L1440,0 L1440,56 C1180,128 1000,72 760,40 C520,8 320,120 0,48 Z"
            />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Our Portfolio"
              title="Featured Solutions That Transform"
              highlight="Organizations"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.id} delay={i * 120} className="h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-ink-900 dark:ring-1 dark:ring-white/5">
                  <div className="flex h-40 items-center justify-center bg-gradient-to-br from-brand-600 to-ink-800 text-xl font-bold text-white">
                    {p.title.split(' ')[0]}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="self-start rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
                      {p.category}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-ink-900 dark:text-white">{p.title}</h3>
                    <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {p.desc}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-white/10 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              View All Projects
              <span aria-hidden>&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Partners marquee */}
      <section className="overflow-hidden py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Our Partners"
            title="Trusted by"
            highlight="Organizations"
            className="mb-10 px-6"
          />
        </Reveal>
        <div className="relative flex w-full overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center gap-4">
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner}-${i}`}
                className="flex h-20 w-56 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white px-6 text-sm font-semibold text-slate-500 shadow-sm dark:border-white/10 dark:bg-ink-800 dark:text-slate-400"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-ink-600 px-8 py-16 text-center text-white shadow-2xl shadow-ink-900/40 ring-1 ring-white/10 md:py-20">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -left-10 top-0 h-64 w-64 rounded-full bg-brand-600 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-accent/40 blur-3xl" />
          </div>
          <Reveal className="relative">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-200">
              Ready to Start?
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
              Let's Build Something Amazing Together
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Partner with us to create innovative digital solutions that drive real results.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-xl bg-brand-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-colors hover:bg-brand-700"
              >
                Get in Touch
              </Link>
              <Link
                to="/portfolio"
                className="rounded-xl border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                View Our Work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
