import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import logo from '../assets/logo.png'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/news', label: 'News & Updates' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function NavItem({ to, label, end, scrolled }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `group relative text-sm font-medium transition-colors ${
          scrolled
            ? isActive
              ? 'text-brand-600 dark:text-brand-300'
              : 'text-ink-700 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300'
            : isActive
              ? 'text-white'
              : 'text-slate-300 hover:text-white'
        }`
      }
    >
      {({ isActive }) => (
        <>
          {label}
          <span
            className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full transition-all duration-300 ease-out ${
              scrolled ? 'bg-brand-600' : 'bg-white'
            } ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
          />
        </>
      )}
    </NavLink>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-transparent' : 'bg-ink-600 shadow-lg shadow-black/30'
      }`}
    >
      <nav
        className={`mx-auto flex items-center justify-between transition-all duration-300 ease-out ${
          scrolled
            ? 'mt-3 max-w-5xl rounded-full border border-white/60 bg-white/70 px-6 py-3 shadow-lg shadow-slate-900/5 ring-1 ring-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-ink-800/70 dark:ring-white/10'
            : 'max-w-7xl px-6 py-4'
        }`}
      >
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white/5 p-0 sm:h-18 sm:w-18">
            <img
              src={logo}
              alt="Lewegen Trading PLC logo"
              className="h-full w-full object-cover"
            />
          </div>
          <span
            className={`text-lg font-bold tracking-tight ${scrolled ? 'text-ink-900 dark:text-white' : 'text-white'}`}
          >
            Lewegen<span className={scrolled ? 'text-brand-600 dark:text-brand-300' : 'text-brand-400'}> Trading PLC</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavItem
              key={link.to}
              to={link.to}
              label={link.label}
              end={link.to === '/'}
              scrolled={scrolled}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle scrolled={scrolled} />

          <Link
            to="/contact"
            className="hidden rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 md:inline-block"
          >
            Get Started
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors md:hidden ${
              scrolled ? 'text-ink-800 dark:text-slate-200' : 'text-white'
            }`}
          >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="absolute inset-x-4 top-full mt-2 overflow-hidden rounded-2xl border border-slate-100 bg-white/95 shadow-xl backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-ink-800/95">
          <div className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-sm font-medium ${
                    isActive
                      ? 'bg-brand-50 text-brand-600 dark:bg-white/10 dark:text-brand-300'
                      : 'text-ink-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-brand-600 px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
