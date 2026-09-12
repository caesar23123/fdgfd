'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { type Locale, defaultLocale, detectLocale, isLocale, STORAGE_KEY } from '@/lib/i18n/config'
import { dictionaries, type Dictionary } from '@/lib/i18n/dictionaries'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  // Resolve the initial language once on the client: a saved choice wins,
  // otherwise fall back to the browser language and finally English.
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null
    setLocaleState(isLocale(stored) ? stored : detectLocale())
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore write failures (private mode, disabled storage)
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: dictionaries[locale] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
