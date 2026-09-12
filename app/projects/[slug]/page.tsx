import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowRight, Mail, Send } from 'lucide-react'
import { GooglePlayIcon } from '@/components/icons/google-play'
import { getProject, projects } from '@/lib/projects'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `${project.name} — Юлиан С.`,
    description: project.tagline,
  }
}

const linkIcons = {
  'google-play': GooglePlayIcon,
  telegram: Send,
  mail: Mail,
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const next = projects[(projects.findIndex((p) => p.slug === slug) + 1) % projects.length]

  return (
    <article>
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <Image
            src={project.shots[0].src || '/placeholder.svg'}
            alt=""
            fill
            priority
            sizes="100vw"
            className="scale-110 object-cover blur-2xl"
          />
          <div className="absolute inset-0 bg-background/80" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 pt-32 pb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-muted-foreground uppercase transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" />
            Все проекты
          </Link>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
            <span className="relative size-20 shrink-0 overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/50 sm:size-24">
              <Image
                src={project.icon || '/placeholder.svg'}
                alt=""
                fill
                sizes="96px"
                className="object-cover"
              />
            </span>
            <div className="min-w-0">
              <h1 className="text-3xl leading-tight font-medium tracking-tight text-balance sm:text-5xl">
                {project.name}
              </h1>
              <p className="mt-3 text-base text-pretty text-muted-foreground sm:text-lg">
                {project.tagline}
              </p>
            </div>
          </div>

          <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
            <Meta label="Год" value={project.year} />
            <Meta label="Платформа" value={project.platform} />
            <Meta label="Статус" value={project.status} />
            <Meta label="Стек" value={project.stack.join(' · ')} />
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            {project.links.map((link) => {
              const Icon = linkIcons[link.kind]
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <Icon className="size-4" />
                  {link.label}
                </a>
              )
            })}
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-5">
            <span className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
              О проекте
            </span>
            {project.description.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-pretty">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-border">
            <Image
              src={project.accentImage || '/placeholder.svg'}
              alt=""
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <span className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
          Механики
        </span>
        <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature.title} className="flex flex-col gap-3 bg-card p-6">
              <h2 className="text-lg font-medium text-balance">{feature.title}</h2>
              <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                {feature.text}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <span className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
          Скриншоты
        </span>
        <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
          {project.shots.map((shot) => (
            <figure
              key={shot.src}
              className="relative aspect-16/9 w-[85%] shrink-0 snap-center overflow-hidden rounded-2xl border border-border sm:w-[48%] lg:w-[40%]"
            >
              <Image
                src={shot.src || '/placeholder.svg'}
                alt={shot.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 85vw"
                className="object-cover"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <Link
          href={`/projects/${next.slug}`}
          className="group mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-12"
        >
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
              Следующий проект
            </span>
            <span className="text-2xl font-medium text-balance transition-colors group-hover:text-primary sm:text-3xl">
              {next.name}
            </span>
          </div>
          <ArrowRight className="size-6 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
        </Link>
      </section>
    </article>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
        {label}
      </dt>
      <dd className="text-sm">{value}</dd>
    </div>
  )
}
