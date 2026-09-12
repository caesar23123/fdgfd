import Link from 'next/link'
import { Mail, MapPin, Send } from 'lucide-react'
import { projects } from '@/lib/projects'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-3">
          <span className="flex size-11 items-center justify-center rounded-[11px] border border-primary/40 bg-secondary text-lg font-medium tracking-tight text-primary">
            YS
          </span>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Игры, интерактивные решения и автоматизация для бизнеса. Пишите, если хотите обсудить
            проект или просто сказать спасибо.
          </p>
        </div>

        <nav aria-label="Разделы сайта" className="flex flex-col gap-3">
          <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
            Разделы
          </span>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link href="/" className="text-muted-foreground transition-colors hover:text-foreground">
                Главная
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Для бизнеса
              </Link>
            </li>
            <li>
              <Link
                href="/automation"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Автоматизация
              </Link>
            </li>
            {projects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {project.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
            Контакты
          </span>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Send className="size-4" />
                Telegram
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4" />
                hello@example.com
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=%D0%B3.+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C+%D1%83%D0%BB.+%D0%9F%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%2C+%D0%B4.+1"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <MapPin className="size-4" />
                г. Москва, ул. Примерная, д. 1
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-5 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
          © {new Date().getFullYear()} Yulian S.
        </p>
      </div>
    </footer>
  )
}
