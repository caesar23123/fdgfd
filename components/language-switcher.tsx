'use client'

import { locales, localeNames, localeFullNames } from '@/lib/i18n/config'
import { useLanguage } from '@/components/language-provider'
import { cn } from '@/lib/utils'

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage()
  const activeIndex = locales.indexOf(locale)

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className={cn(
        'relative flex items-center rounded-xl border border-border bg-secondary p-1',
        className,
      )}
    >
      {/* Sliding highlight — moves under the active language */}
      <span
        aria-hidden="true"
        className="absolute top-1 bottom-1 left-1 rounded-lg bg-primary shadow-sm transition-transform duration-300 ease-out"
        style={{
          width: `calc((100% - 0.5rem) / ${locales.length})`,
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />
      {locales.map((code) => {
        const active = code === locale
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            aria-label={localeFullNames[code]}
            title={localeFullNames[code]}
            className={cn(
              'relative z-10 flex-1 rounded-lg px-2.5 py-1.5 text-center font-mono text-[11px] font-medium tracking-widest uppercase transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
              active ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {localeNames[code]}
          </button>
        )
      })}
    </div>
  )
}
