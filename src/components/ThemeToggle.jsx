import { useEffect, useState } from 'react'
import Icon from './Icon'

function getInitial() {
  if (typeof document === 'undefined') return false
  return document.documentElement.classList.contains('dark')
}

export default function ThemeToggle({ scrolled }) {
  const [dark, setDark] = useState(getInitial)

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      root.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [dark])

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setDark((v) => !v)}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
        scrolled
          ? 'text-ink-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10'
          : 'text-white hover:bg-white/10'
      }`}
    >
      <Icon name={dark ? 'sun' : 'moon'} className="h-5 w-5" />
    </button>
  )
}
