export default function SectionHeading({ eyebrow, title, highlight, description, className = '' }) {
  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      <div className="flex items-center justify-center gap-3">
        <span className="block h-0.5 w-10 rounded-full bg-brand-400" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
          {eyebrow}
        </span>
        <span className="block h-0.5 w-10 rounded-full bg-brand-400" />
      </div>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 md:text-4xl dark:text-white">
        {title}
        {highlight && (
          <>
            {' '}
            <span className="text-brand-600 dark:text-brand-300">{highlight}</span>
          </>
        )}
      </h2>
      {description && <p className="mt-4 text-slate-600 dark:text-slate-300">{description}</p>}
    </div>
  )
}
