import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { services } from '../data'

const features = {
  consultancy: ['Strategic advisory support', 'Business growth guidance', 'Professional problem solving'],
  freight: ['Reliable transport coordination', 'Efficient logistics planning', 'Cargo movement support'],
  agentship: ['Trusted representation', 'Partner coordination', 'Client-focused support'],
}

const expertiseAreas = [
  {
    title: 'Public Health Program Design and Management',
    items: ['Malaria prevention and control', 'Maternal, newborn, and child health', 'Health systems strengthening', 'Health policy and strategy development'],
  },
  {
    title: 'Education Program Development and Management',
    items: ['School improvement and quality education initiatives', 'Teacher capacity development and training', 'Community health and health education', 'Behavioral change communication and social mobilization'],
  },
  {
    title: 'Research, Learning, and Impact Measurement',
    items: ['Monitoring, evaluation, accountability, and learning (MEAL)', 'Operational research and baseline, midline, and endline studies', 'Feasibility studies and needs assessments', 'Evidence-based planning and implementation'],
  },
  {
    title: 'Strategic and Organizational Support',
    items: ['Strategic planning and organizational capacity development', 'Proposal development and resource mobilization', 'Training, coaching, and technical advisory services', 'Practical solutions for sustainable growth'],
  },
]

const coreValues = [
  { name: 'Integrity', icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3l7 3v5c0 4.2-2.8 7.7-7 10-4.2-2.3-7-5.8-7-10V6l7-3Z" strokeLinecap="round" strokeLinejoin="round" /></svg> },
  { name: 'Excellence', icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m12 3 2.1 5.4L20 10l-5.9 1.6L12 17l-2.1-5.4L4 10l5.9-1.6L12 3Z" strokeLinecap="round" strokeLinejoin="round" /></svg> },
  { name: 'Innovation', icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3v2.5M12 18.5V21M6.5 6.5l1.8 1.8M15.7 15.7l1.8 1.8M3 12h2.5M18.5 12H21M6.5 17.5l1.8-1.8M15.7 8.3l1.8-1.8" strokeLinecap="round" /><circle cx="12" cy="12" r="3.5" /></svg> },
  { name: 'Professionalism', icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M8 4h8l2 4v3a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V8l2-4Z" strokeLinecap="round" strokeLinejoin="round" /><path d="M10 15v4h4v-4" strokeLinecap="round" strokeLinejoin="round" /></svg> },
  { name: 'Partnership', icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M8 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm8 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM4 19c0-3 2.2-4.8 4-4.8S12 16 12 19M12 19c0-3 2.2-4.8 4-4.8s4 1.8 4 4.8" strokeLinecap="round" strokeLinejoin="round" /></svg> },
  { name: 'Equity and Inclusion', icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-6 13c0-2.8 2.2-5 5-5h2c2.8 0 5 2.2 5 5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 8h1M17 8h1" strokeLinecap="round" /></svg> },
  { name: 'Evidence-Based Practice', icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 19V9m7 10V5m7 14v-7" strokeLinecap="round" /><path d="M3 19h18" strokeLinecap="round" /></svg> },
  { name: 'Impact', icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 4c3.3 0 6 2.7 6 6 0 4.3-6 10-6 10S6 14.3 6 10c0-3.3 2.7-6 6-6Z" strokeLinecap="round" strokeLinejoin="round" /></svg> },
]

const consultancyPillars = [
  {
    title: 'Technical Assistance',
    desc: 'We provide practical guidance and tailored support for complex programs and institutional priorities.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7 7h10M7 17h10M7 7v10m10-10v10" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    ),
  },
  {
    title: 'Research & Learning',
    desc: 'We strengthen decision-making through evidence, monitoring, evaluation, and learning-based approaches.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 19V9m7 10V5m7 14v-7" strokeLinecap="round" />
        <path d="M3 19h18" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Training & Capacity Building',
    desc: 'We help teams grow through coaching, professional development, and hands-on knowledge transfer.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 7h16M7 7v10m10-10v10M8 17h8" strokeLinecap="round" />
        <path d="M12 4v3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Sustainable Impact',
    desc: 'Our work is designed to create long-term value for communities, organizations, and partners.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 4c3 0 5.5 2.5 5.5 5.5 0 3.9-5.5 9.5-5.5 9.5S6.5 13.4 6.5 9.5C6.5 6.5 9 4 12 4Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 9.5c.7-.7 1.5-1 2.5-1 1.2 0 2.2.4 3 1" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Consultancy, Freight Transport, and Agentship"
        subtitle="Lewegen Trading PLC delivers professional services that create value for clients while supporting sustainable growth and community impact."
        primary={{ label: 'Explore Services', to: '/services' }}
        secondary={{ label: 'Contact Us', to: '/contact' }}
      />

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="What We Offer"
            title="Services Built for"
            highlight="Impact"
            description="Every service is delivered with professionalism, integrity, and a strong commitment to customer satisfaction."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 100} className="h-full">
              <div className="group h-full rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-brand-100 p-8 shadow-sm transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:border-brand-200 hover:shadow-2xl hover:shadow-brand-200/50 dark:border-white/10 dark:from-ink-800 dark:via-ink-800 dark:to-ink-700">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-100 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-500/15 dark:text-brand-300">
                  <Icon name={s.icon} className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-brand-700 dark:text-brand-300">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{s.desc}</p>
                <ul className="mt-5 space-y-2">
                  {features[s.id].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-ink-800 transition-all duration-300 hover:-translate-x-1 dark:text-slate-200">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-xs text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
                        &#10003;
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Lewegen Consultancy */}
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
              eyebrow="Lewegen Consultancy"
              title="Advancing Health, Education, and"
              highlight="Sustainable Development"
              description="Lewegen Consultancy is a specialized consulting arm of Lewegen Trading PLC, dedicated to providing high-quality technical assistance, advisory, research, training, and capacity-building services."
            />
          </Reveal>

          <div className="mt-14 grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-brand-200 dark:border-white/10 dark:bg-ink-900 dark:ring-1 dark:ring-white/5">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-100/70 blur-3xl" />
                <div className="relative">
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-700 dark:bg-brand-500/15 dark:text-brand-300">Health</span>
                    <span className="rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-700 dark:bg-brand-500/15 dark:text-brand-300">Education</span>
                    <span className="rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-700 dark:bg-brand-500/15 dark:text-brand-300">Sustainable Development</span>
                  </div>

                  <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-brand-100 bg-gradient-to-br from-white via-brand-50 to-brand-100 p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg dark:border-brand-400/20 dark:from-ink-900 dark:via-ink-800 dark:to-brand-500/10">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white shadow-md">
                        LC
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-600 dark:text-brand-300">About Lewegen Consultancy</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Professional advisory with a strong development foundation</p>
                      </div>
                    </div>

                    <div className="mt-5 rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-ink-900/70">
                      <p className="text-lg font-semibold leading-8 text-ink-900 dark:text-white">
                        A consultancy rooted in experience, guided by purpose, and shaped for lasting impact.
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-slate-200">
                    Lewegen Consultancy is a newly established business founded on the rich institutional experience of the Health Development and Anti Malaria Association (HDAMA). For many years, HDAMA has successfully implemented impactful health, community development, and capacity-building programs in partnership with national and international stakeholders.
                  </p>
                  <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                    Building on this strong legacy, we transform years of practical experience, technical expertise, and proven approaches into professional consulting services that help clients achieve sustainable results. Our team includes experienced professionals with deep expertise in public health, education, project management, business research, monitoring and evaluation, organizational development, and institutional strengthening.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-[2rem] border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-brand-100 p-8 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-brand-200 dark:border-white/10 dark:from-ink-800 dark:via-ink-800 dark:to-ink-700">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-sm dark:bg-ink-900 dark:text-brand-300">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.5 5.5l2.8 2.8M15.7 15.7l2.8 2.8M5.5 18.5l2.8-2.8M15.7 8.3l2.8-2.8" strokeLinecap="round" />
                      <circle cx="12" cy="12" r="3.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-600 dark:text-brand-300">Our purpose</p>
                    <h3 className="text-xl font-semibold text-ink-900 dark:text-white">Mission and vision</h3>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="group rounded-2xl border border-slate-100 bg-white/85 p-4 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:shadow-xl dark:border-white/10 dark:bg-ink-900/70">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">Mission</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      To improve health and education outcomes by providing innovative, evidence-based consulting, research, training, and technical advisory services that strengthen institutions, empower communities, and promote sustainable development.
                    </p>
                  </div>
                  <div className="group rounded-2xl border border-slate-100 bg-white/85 p-4 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:shadow-xl dark:border-white/10 dark:bg-ink-900/70">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">Vision</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      To become a leading and trusted consultancy in Ethiopia and Africa, recognized for excellence in health and education consulting, innovation, technical expertise, and lasting development impact.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {consultancyPillars.map((pillar) => (
              <Reveal key={pillar.title}>
                <div className="h-full rounded-2xl border border-slate-100 bg-white/90 p-5 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-ink-900/90">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100 text-lg text-brand-700 dark:bg-brand-500/15 dark:text-brand-300">
                    {pillar.icon}
                  </div>
                  <h4 className="mt-4 text-base font-semibold text-ink-900 dark:text-white">{pillar.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{pillar.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {expertiseAreas.map((area) => (
              <Reveal key={area.title}>
                <div className="h-full rounded-3xl border border-slate-100 bg-white/90 p-7 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-ink-900/90">
                  <h3 className="text-lg font-semibold text-ink-900 dark:text-white">{area.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                        <span className="mt-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-[11px] text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-brand-200 dark:border-white/10 dark:bg-ink-900">
                <h3 className="text-xl font-semibold text-ink-900 dark:text-white">Our core values</h3>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {coreValues.map((value) => (
                    <div key={value.name} className="group rounded-2xl border border-brand-100 bg-brand-50/70 p-3 text-sm font-medium text-brand-700 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-md dark:border-brand-400/20 dark:bg-brand-500/10 dark:text-brand-200">
                      <div className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/80 text-brand-600 transition-transform duration-300 group-hover:rotate-6 dark:bg-ink-900/70 dark:text-brand-300">
                          {value.icon}
                        </span>
                        <span>{value.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-brand-100 p-8 shadow-sm dark:border-white/10 dark:from-ink-800 dark:via-ink-800 dark:to-ink-700">
                <h3 className="text-xl font-semibold text-ink-900 dark:text-white">Why choose Lewegen Consultancy?</h3>
                <ul className="mt-6 space-y-4">
                  {[
                    ['Client-centered guidance', 'We tailor our support to the realities, priorities, and goals of each partner.'],
                    ['Practical and evidence-based solutions', 'Our recommendations are grounded in data, field experience, and proven methodologies.'],
                    ['Reliable execution', 'We focus on helping organizations move from planning to meaningful implementation with clarity.'],
                    ['Lasting partnerships', 'We build relationships that extend beyond a single assignment and support long-term progress.'],
                  ].map(([title, desc]) => (
                    <li key={title} className="rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-md dark:border-white/10 dark:bg-ink-900/70">
                      <p className="text-sm font-semibold text-ink-900 dark:text-white">{title}</p>
                      <p className="mt-1 text-sm leading-7 text-slate-600 dark:text-slate-300">{desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
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

      {/* CTA */}
      <section className="px-6 py-20 md:py-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-ink-600 px-8 py-16 text-center text-white shadow-2xl shadow-ink-900/40 ring-1 ring-white/10 md:py-20">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -left-10 top-0 h-64 w-64 rounded-full bg-brand-600 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-accent/40 blur-3xl" />
          </div>
          <Reveal className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Let's discuss how our services can help your organization grow and innovate.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-xl bg-brand-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-700"
              >
                Start Your Project
              </Link>
              <Link
                to="/portfolio"
                className="rounded-xl border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
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
