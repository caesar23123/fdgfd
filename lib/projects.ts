import type { Locale } from '@/lib/i18n/config'
import { dictionaries } from '@/lib/i18n/dictionaries'

export type ProjectLinkKind = 'google-play' | 'telegram' | 'mail'

/** Language-independent project data (assets, links, meta). */
type ProjectBase = {
  slug: string
  icon: string
  year: string
  platform: string
  accentImage: string
  shotSrcs: string[]
  stack: string[]
  links: { label: string; href: string; kind: ProjectLinkKind }[]
}

/** Fully resolved project for a given locale. */
export type Project = {
  slug: string
  name: string
  short: string
  tagline: string
  description: string[]
  icon: string
  year: string
  platform: string
  status: string
  accentImage: string
  shots: { src: string; alt: string }[]
  features: { title: string; text: string }[]
  stack: string[]
  links: { label: string; href: string; kind: ProjectLinkKind }[]
}

const projectBases: ProjectBase[] = [
  {
    slug: 'economy-strategy',
    icon: '/icons/economy-strategy.png',
    year: '2024',
    platform: 'Android',
    accentImage: '/art/coins.png',
    shotSrcs: ['/shots/economy-1.png', '/shots/economy-2.png', '/shots/economy-3.png'],
    stack: ['Unity', 'C#', 'Android'],
    links: [
      { label: 'Google Play', href: 'https://play.google.com', kind: 'google-play' },
      { label: 'Telegram', href: 'https://t.me', kind: 'telegram' },
    ],
  },
  {
    slug: 'city-builder',
    icon: '/icons/city-builder.png',
    year: '2025',
    platform: 'Android, Web',
    accentImage: '/art/workshop.png',
    shotSrcs: ['/shots/city-1.png', '/shots/city-2.png'],
    stack: ['Unity', 'C#', 'WebGL'],
    links: [{ label: 'Telegram', href: 'https://t.me', kind: 'telegram' }],
  },
]

/** Slugs are language-independent — used for static params. */
export const projectSlugs = projectBases.map((base) => base.slug)

export function getProjects(locale: Locale): Project[] {
  const content = dictionaries[locale].projects
  return projectBases.map((base) => {
    const c = content[base.slug as keyof typeof content]
    return {
      slug: base.slug,
      icon: base.icon,
      year: base.year,
      platform: base.platform,
      accentImage: base.accentImage,
      stack: base.stack,
      links: base.links,
      name: c.name,
      short: c.short,
      tagline: c.tagline,
      status: c.status,
      description: c.description,
      features: c.features,
      shots: base.shotSrcs.map((src, i) => ({ src, alt: c.shotAlts[i] ?? '' })),
    }
  })
}

export function getProject(slug: string, locale: Locale) {
  return getProjects(locale).find((p) => p.slug === slug)
}
