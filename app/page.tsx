import { Hero } from '@/components/hero'
import { ProjectGrid } from '@/components/project-grid'
import { ServicesGrid } from '@/components/services-grid'

const facts = [
  {
    title: 'Пошаговые механики',
    text: 'Нам нравятся игры, где можно подумать: ход, расчёт, последствие. Без давления таймера.',
  },
  {
    title: 'Экономика как сюжет',
    text: 'Числа рассказывают историю не хуже диалогов — если выстроить верный баланс и давление на игрока.',
  },
  {
    title: 'Всё своими руками',
    text: 'Код, интерфейсы, баланс и арт — мы делаем проекты целиком и отвечаем за каждый экран.',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
            01 — О нас
          </span>
          <h2 className="max-w-2xl text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            Делаем небольшие игры про решения и последствия
          </h2>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-3">
          {facts.map((fact, i) => (
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
