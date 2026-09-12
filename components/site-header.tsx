'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bot, Briefcase, Mail, Send } from 'lucide-react'
import { GooglePlayIcon } from '@/components/icons/google-play'
import { projects } from '@/lib/projects'
import { cn } from '@/lib/utils'

const socials = [
  { href: 'https://play.google.com', label: 'Google Play', Icon: GooglePlayIcon },
  { href: 'https://t.me', label: 'Telegram', Icon: Send },
  { href: 'mailto:hello@example.com', label: 'Почта', Icon: Mail },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Основная навигация"
        className="glass mx-auto flex max-w-6xl items-center gap-2 rounded-2xl border border-border px-2 py-2 shadow-lg shadow-black/30 sm:gap-3 sm:px-3"
      >
        <ul className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto py-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-3 sm:overflow-visible sm:py-0 [&::-webkit-scrollbar]:hidden">
          <li>
            <DockButton
              href="/"
              active={pathname === '/'}
              label="Главная"
              tooltip="Главная"
            >
              <span className="font-sans text-lg font-medium tracking-tight text-primary sm:text-xl">
                YS
              </span>
            </DockButton>
          </li>

          <li>
            <DockButton
              href="/services"
              active={pathname === '/services'}
              label="Для бизнеса"
              tooltip="Для бизнеса"
            >
              <Briefcase className="size-5 text-primary" />
            </DockButton>
          </li>

          <li>
            <DockButton
              href="/automation"
              active={pathname === '/automation'}
              label="Автоматизация"
              tooltip="Автоматизация"
            >
              <Bot className="size-5 text-primary" />
            </DockButton>
          </li>

          {projects.map((project) => (
            <li key={project.slug}>
              <DockButton
                href={`/projects/${project.slug}`}
                active={pathname === `/projects/${project.slug}`}
                label={project.name}
                tooltip={project.short}
              >
                <Image
                  src={project.icon || '/placeholder.svg'}
                  alt=""
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </DockButton>
            </li>
          ))}
        </ul>

        <ul className="flex shrink-0 items-center gap-1 border-l border-border pl-1.5 sm:border-l-0 sm:pl-0">
          {socials.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <Icon className="size-[18px]" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

function DockButton({
  href,
  active,
  label,
  tooltip,
  children,
}: {
  href: string
  active: boolean
  label: string
  tooltip: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      aria-current={active ? 'page' : undefined}
      className="group relative block shrink-0 focus-visible:outline-none"
    >
      <span
        className={cn(
          'relative flex size-11 items-center justify-center overflow-hidden rounded-xl border bg-secondary transition-all duration-200 sm:size-12',
          'group-hover:-translate-y-0.5 group-hover:border-primary/60 group-focus-visible:ring-2 group-focus-visible:ring-ring',
          active ? 'border-primary/70 ' : 'border-border',
        )}
      >
        {children}
      </span>
      <span
        role="tooltip"
        className="pointer-events-none absolute top-full left-1/2 z-10 mt-3 -translate-x-1/2 translate-y-1 rounded-lg border border-border bg-popover px-2.5 py-1 font-mono text-[11px] whitespace-nowrap text-popover-foreground opacity-0 shadow-lg transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100"
      >
        {tooltip}
      </span>
    </Link>
  )
}
