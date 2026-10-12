import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/news', label: 'News & Updates' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const services = [
  'Data Analytics & BI',
  'Enterprise Software',
  'AI & Automation',
  'Cloud Architecture',
  'Cybersecurity',
  'Web & Mobile',
]

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-ink-900 via-ink-900 to-ink-800 text-slate-300 shadow-[0_-10px_30px_-12px_rgba(0,0,0,0.25)] ring-1 ring-white/5">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white/5 p-0">
              <img
                src={logo}
                alt="Lewegen Trading PLC logo"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              Lewegen<span className="text-brand-400"> Trading PLC</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
           Lewegen Trading PLC is a business initiative established by the Health Development and Anti-Malaria Association (HDAMA) as a strategic income-generating enterprise designed to strengthen the organization's long-term financial sustainability and expand its humanitarian and health service delivery programs.
          </p>
        </div>

        <div className="relative lg:before:absolute lg:before:-left-5 lg:before:top-0 lg:before:h-full lg:before:w-px lg:before:bg-gradient-to-b lg:before:from-transparent lg:before:via-white/20 lg:before:to-transparent">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-slate-400 transition-colors hover:text-brand-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:before:absolute lg:before:-left-5 lg:before:top-0 lg:before:h-full lg:before:w-px lg:before:bg-gradient-to-b lg:before:from-transparent lg:before:via-white/20 lg:before:to-transparent">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s} className="text-sm text-slate-400">
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:before:absolute lg:before:-left-5 lg:before:top-0 lg:before:h-full lg:before:w-px lg:before:bg-gradient-to-b lg:before:from-transparent lg:before:via-white/20 lg:before:to-transparent">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Get in touch</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
            <li>
              <a href="tel:+251911733290" className="transition-colors hover:text-brand-400">
                +251 911733290
              </a>
            </li>
            <li>
              <a
                href="mailto:endalbek@gmail.com"
                className="transition-colors hover:text-brand-400"
              >
                endalbek@gmail.com
              </a>
            </li>
            <li>Addis Ababa, Ethiopia</li>
          </ul>
        </div>
      </div>

      <div className="relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Lewegen Trading PLC. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
