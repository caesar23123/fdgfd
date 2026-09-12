import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/projects'

export function ProjectGrid() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-[25px]">
      <div className="flex flex-col gap-3">
        <span className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
          02 — Проекты
        </span>
        <h2 className="text-3xl font-medium tracking-tight text-balance sm:text-4xl">
          Игры, которые мы делаем
        </h2>
        <p className="max-w-xl leading-relaxed text-pretty text-muted-foreground">
          Небольшие, но честные проекты: без агрессивной монетизации и таймеров ожидания.
        </p>
      </div>

      <ul className="mt-12 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <div className="relative aspect-16/9 overflow-hidden border-b border-border">
                <Image
                  src={project.shots[0].src || '/placeholder.svg'}
                  alt={project.shots[0].alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-5">
                <div className="flex items-start gap-4">
                  <span className="relative size-12 shrink-0 overflow-hidden rounded-xl border border-border">
                    <Image
                      src={project.icon || '/placeholder.svg'}
                      alt=""
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg leading-snug font-medium text-balance">
                      {project.name}
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {project.tagline}
                    </span>
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-2 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                  <span className="rounded-full border border-border px-2.5 py-1">
                    {project.year}
                  </span>
                  <span className="rounded-full border border-border px-2.5 py-1">
                    {project.platform}
                  </span>
                  <span className="rounded-full border border-primary/40 px-2.5 py-1 text-primary">
                    {project.status}
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
