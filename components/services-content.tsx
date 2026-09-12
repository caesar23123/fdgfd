'use client'

import Image from 'next/image'
import { Mail, Send } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const serviceImages = [
  { image: '/art/service-configurator.png' },
  { image: '/art/service-simulator.png' },
  { image: '/art/service-tour.png' },
  { image: '/art/service-expo.png' },
]

export function ServicesContent() {
  const { t } = useLanguage()
  const services = t.services.items.map((item, i) => ({ ...item, image: serviceImages[i].image }))

  return (
    <main>
      <section className="mx-auto max-w-6xl px-5 pt-40 pb-20">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
            {t.services.hero.eyebrow}
          </span>
          <h1 className="max-w-3xl text-4xl font-medium tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {t.services.hero.title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            {t.services.hero.subtitle}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
            {t.services.hero.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-border px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="services-heading" className="mx-auto max-w-6xl px-5 pb-24">
        <h2 id="services-heading" className="sr-only">
          {t.services.heading}
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative aspect-[16/9] overflow-hidden border-b border-border">
                <Image
                  src={service.image || '/placeholder.svg'}
                  alt={service.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
                  {service.tag}
                </span>
                <h3 className="text-xl font-medium text-balance">{service.title}</h3>
                <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                  {service.text}
                </p>
                <ul className="mt-2 flex flex-col gap-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span aria-hidden="true" className="mt-[7px] size-1.5 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="process-heading" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
              {t.services.process.eyebrow}
            </span>
            <h2
              id="process-heading"
              className="max-w-2xl text-3xl font-medium tracking-tight text-balance sm:text-4xl"
            >
              {t.services.process.title}
            </h2>
          </div>

          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.process.steps.map((step, i) => (
              <li
                key={step.title}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6"
              >
                <span className="font-mono text-xs text-primary">{`0${i + 1}`}</span>
                <h3 className="text-lg font-medium text-balance">{step.title}</h3>
                <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="cta-heading" className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-24">
          <span className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
            {t.services.cta.eyebrow}
          </span>
          <h2
            id="cta-heading"
            className="max-w-2xl text-3xl font-medium tracking-tight text-balance sm:text-4xl"
          >
            {t.services.cta.title}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-pretty text-muted-foreground">
            {t.services.cta.text}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-mono text-xs tracking-widest text-primary-foreground uppercase transition-opacity hover:opacity-90"
            >
              <Mail className="size-4" />
              {t.common.emailUs}
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-mono text-xs tracking-widest text-muted-foreground uppercase transition-colors hover:border-primary/60 hover:text-foreground"
            >
              <Send className="size-4" />
              {t.common.telegram}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
