export const locales = ['en', 'es', 'ru'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

/** Short label shown inside the switcher */
export const localeNames: Record<Locale, string> = {
  en: 'EN',
  es: 'ES',
  ru: 'RU',
}

/** Full, native language name — used for accessible labels/titles */
export const localeFullNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  ru: 'Русский',
}

export const STORAGE_KEY = 'ys-locale'

export function isLocale(value: string | null | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value)
}

/** Pick the best matching locale from the browser, falling back to English. */
export function detectLocale(): Locale {
  if (typeof navigator === 'undefined') return defaultLocale
  const candidates =
    navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language]
  for (const candidate of candidates) {
    const code = candidate.toLowerCase().split('-')[0]
    if (isLocale(code)) return code
  }
  return defaultLocale
}
