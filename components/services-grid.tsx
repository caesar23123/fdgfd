'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export function ServicesGrid() {
  const { t } = useLanguage()

  const directions = [
    {
      href: '/services',
      image: '/art/service-configurator.png',
      alt: t.home.more.business.title,
      title: t.home.more.business.title,
      tagline: t.home.more.business.tagline,
      tags: t.home.more.business.tags,
    },
    {
      href: '/automation',
      image: '/art/auto-bot.png',
      alt: t.home.more.automation.title,
      title: t.home.more.automation.title,
      tagline: t.home.more.automation.tagline,
      tags: t.home.more.automation.tags,
    },
  ]

  return (
    <section id="more" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-24">
      <div className="flex flex-col gap-3">
        <span className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
          {t.home.more.eyebrow}
        </span>
        <h2 className="text-3xl font-medium tracking-tight text-balance sm:text-4xl">
          {t.home.more.title}
        </h2>
        <p className="max-w-xl leading-relaxed text-pretty text-muted-foreground">
          {t.home.more.subtitle}
        </p>
      </div>

      <ul className="mt-12 grid gap-5 md:grid-cols-2">
        {directions.map((direction) => (
          <li key={direction.href}>
            <Link
              href={direction.href}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <div className="relative aspect-16/9 overflow-hidden border-b border-border">
                <Image
                  src={direction.image || '/placeholder.svg'}
                  alt={direction.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-5">
                <div className="flex items-start gap-4">
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg leading-snug font-medium text-balance">
                      {direction.title}
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {direction.tagline}
                    </span>
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-2 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                  {direction.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border px-2.5 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
