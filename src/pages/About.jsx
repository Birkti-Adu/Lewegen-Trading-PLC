import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { team, partners, stats } from '../data'

const values = [
  { title: 'Integrity', desc: 'We conduct all our business activities with honesty, transparency, accountability, and ethical responsibility.', icon: 'shield' },
  { title: 'Excellence', desc: 'We are committed to delivering high-quality services that meet and exceed client expectations.', icon: 'star' },
  { title: 'Customer Focus', desc: 'We place our clients at the center of our operations and continuously seek to understand and respond to their needs.', icon: 'users' },
  { title: 'Innovation', desc: 'We embrace creativity, learning, and continuous improvement to develop effective business solutions and maintain competitiveness.', icon: 'shield' },
  { title: 'Professionalism', desc: 'We uphold high standards of competence, reliability, and respect in all our interactions.', icon: 'star' },
  { title: 'Sustainability', desc: 'We pursue responsible growth that creates long-term economic value while supporting social development and environmental stewardship.', icon: 'bulb' },
  { title: 'Partnership', desc: 'We believe in building strong and mutually beneficial relationships with clients, communities, government institutions, and business partners.', icon: 'shield' },
  { title: 'Social Responsibility', desc: 'As a business initiative established by HDAMA, we are committed to contributing to improved health, well-being, and community development through sustainable income generation.', icon: 'star' },
 ]

const womenStats = [
  { value: '50%', label: 'Women in Leadership' },
  { value: '6+', label: 'Women Leaders' },
  { value: '100%', label: 'Equal Opportunities' },
]

function initials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
}

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Lewegen Trading PLC"
        subtitle="A business initiative established by HDAMA to create sustainable income and expand social impact through quality consultancy, agentship, and transport services."
        primary={{ label: 'Our Story', to: '/about' }}
        secondary={{ label: 'Contact Us', to: '/contact' }}
      />

      {/* Story */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-ink-900 md:text-4xl dark:text-white">Our Story</h2>
            <p className="mt-5 text-slate-600 dark:text-slate-300">
              Lewegen Trading PLC is a business initiative established by the Health Development and Anti-Malaria Association (HDAMA) as a strategic income-generating enterprise designed to strengthen the organization’s long-term financial sustainability and expand its humanitarian and health service delivery programs.
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Our vision is to become a leading and diversified business enterprise in Ethiopia, recognized for excellence, innovation, and sustainable growth while creating lasting social impact through support for humanitarian and development initiatives.
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Our mission is to provide high-quality consultancy, agentship, and transport services that deliver value to clients, foster business growth, and generate sustainable income for health, humanitarian, and community development programs.
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Our core values are integrity, excellence, customer focus, innovation, professionalism, sustainability, partnership, and social responsibility.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand-600 hover:bg-brand-600 hover:shadow-xl hover:shadow-brand-600/30 dark:border-white/10 dark:bg-ink-800 dark:hover:border-brand-600 dark:hover:bg-brand-600">
                  <span className="absolute right-4 top-4 h-2 w-2 rounded-full bg-brand-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-white/20 group-hover:text-white dark:bg-brand-500/15 dark:text-brand-300">
                    <Icon name={v.icon} />
                  </div>

                  <div className="mt-5 transition-transform duration-300 group-hover:-translate-y-0.5">
                    <h3 className="text-lg font-semibold text-brand-600 transition-colors duration-300 group-hover:text-white dark:text-brand-300">
                      {v.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 transition-colors duration-300 group-hover:text-brand-100 dark:text-slate-300">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-ink-600 py-16 text-white shadow-2xl shadow-ink-900/30 ring-1 ring-white/10">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -left-10 top-0 h-64 w-64 rounded-full bg-brand-600 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-accent/40 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100} className="text-center">
              <div className="text-4xl font-bold text-brand-400 md:text-5xl">{stat.value}</div>
              <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Women in Tech */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="grid grid-cols-3 gap-5">
            {womenStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100} className="h-full">
                <div className="group h-full rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-brand-100 p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-200/50 dark:border-white/10 dark:from-ink-800 dark:via-ink-800 dark:to-ink-700">
                  <div className="text-2xl font-bold text-brand-600 transition-transform duration-300 group-hover:scale-110 md:text-3xl dark:text-brand-300">
                    {s.value}
                  </div>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="lg:order-first">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Women Empowerment
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 md:text-4xl dark:text-white">
              Empowering Women in Tech
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              At Company Name, we believe in the power of diversity. Our team proudly
              includes talented women leaders who drive innovation and excellence across every
              department.
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              From C-suite executives to technical architects, our women professionals are shaping
              the future of digital solutions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Team */}
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
              eyebrow="Founding Members"
              title="Meet the Experts Behind Your"
              highlight="Success"
              description="A multidisciplinary team blending strategy, engineering, and design to deliver lasting impact."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 100} className="h-full">
                <div className="group h-full rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-brand-100 p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-brand-200 hover:shadow-xl hover:shadow-brand-200/50 dark:border-white/10 dark:from-ink-900 dark:via-ink-900 dark:to-ink-800 dark:ring-1 dark:ring-white/5">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-xl font-bold text-white transition-transform duration-300 group-hover:scale-110">
                    {initials(member.name)}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-ink-900 dark:text-white">{member.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-brand-600 dark:text-brand-300">{member.role}</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{member.focus}</p>
                </div>
              </Reveal>
            ))}
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

      {/* Partners */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Our Partners"
            title="Trusted by Leading"
            highlight="Organizations"
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner, i) => (
            <Reveal key={partner} delay={i * 60} className="h-full">
              <div className="flex h-20 items-center justify-center rounded-xl border border-slate-100 bg-white px-4 text-center text-sm font-semibold text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:text-brand-600 hover:shadow-md dark:border-white/10 dark:bg-ink-800 dark:text-slate-400 dark:hover:text-brand-300">
                {partner}
              </div>
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
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Let's work together</h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Partner with a team that's committed to your success and long-term growth.
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
