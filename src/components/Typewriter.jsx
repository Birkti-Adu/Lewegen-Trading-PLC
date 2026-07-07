import { useEffect, useState } from 'react'

const TYPE_SPEED = 90
const DELETE_SPEED = 45
const HOLD_DELAY = 1500

export default function Typewriter({ words = [], className = '' }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (words.length === 0) return

    const current = words[index % words.length]

    if (!deleting && text === current) {
      const hold = setTimeout(() => setDeleting(true), HOLD_DELAY)
      return () => clearTimeout(hold)
    }

    if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    const next = deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)
    const timer = setTimeout(() => setText(next), deleting ? DELETE_SPEED : TYPE_SPEED)
    return () => clearTimeout(timer)
  }, [text, deleting, index, words])

  return (
    <span className="inline-flex items-baseline">
      <span className={className}>{text || '\u00A0'}</span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block w-[3px] self-stretch animate-blink bg-brand-400"
      />
    </span>
  )
}
