'use client'

import { Hero } from '@/components/hero'
import { ProjectGrid } from '@/components/project-grid'
import { ServicesGrid } from '@/components/services-grid'
import { useLanguage } from '@/components/language-provider'

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
            {t.home.about.eyebrow}
          </span>
          <h2 className="max-w-2xl text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            {t.home.about.title}
          </h2>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-3">
          {t.home.about.facts.map((fact, i) => (
            <li
              key={fact.title}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6"
            >
              <span className="font-mono text-xs text-primary">{`0${i + 1}`}</span>
              <h3 className="text-lg font-medium text-balance">{fact.title}</h3>
              <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                {fact.text}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <ProjectGrid />

      <ServicesGrid />
    </>
  )
}
