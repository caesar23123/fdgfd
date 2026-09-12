import type { Metadata } from 'next'
import Image from 'next/image'
import { Mail, Send } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Интерактивные решения для бизнеса — Unity-разработка',
  description:
    '3D-конфигураторы товаров, симуляторы обучения персонала, интерактивные презентации и виртуальные туры. Unity-разработка для e-commerce, B2B и недвижимости.',
}

const services = [
  {
    image: '/art/service-configurator.png',
    alt: 'Иллюстрация 3D-конфигуратора товара',
    tag: 'E-commerce',
    title: '3D-конфигураторы товаров',
    text: 'Покупатель крутит товар, меняет цвет, материал и комплектацию прямо на сайте. Меньше возвратов, выше конверсия — клиент видит именно то, что закажет.',
    points: ['Интеграция в сайт или приложение', 'Реальные материалы и освещение', 'Расчёт цены в реальном времени'],
  },
  {
    image: '/art/service-simulator.png',
    alt: 'Иллюстрация симулятора обучения персонала',
    tag: 'HR и обучение',
    title: 'Симуляторы обучения персонала',
    text: 'Геймификация онбординга, охраны труда и продаж. Сотрудник отрабатывает сценарии в безопасной среде, а вы видите прогресс и ошибки в цифрах.',
    points: ['Онбординг и охрана труда', 'Тренажёры продаж и переговоров', 'Статистика и прогресс сотрудников'],
  },
  {
    image: '/art/service-tour.png',
    alt: 'Иллюстрация виртуального тура по квартире',
    tag: 'Недвижимость',
    title: 'Виртуальные туры по объектам',
    text: 'Клиент проходит по квартире или офису ещё до начала стройки: свободная камера, смена отделки, вид из окна. Продажи на этапе котлована становятся проще.',
    points: ['Туры по квартирам и офисам', 'Смена отделки и меблировки', 'Работает в браузере и на планшете'],
  },
  {
    image: '/art/service-expo.png',
    alt: 'Иллюстрация интерактивного выставочного стенда',
    tag: 'B2B и выставки',
    title: 'Интерактивные презентации и стенды',
    text: 'Вместо слайдов — интерактивная 3D-модель вашего продукта на сенсорном экране. Посетитель стенда сам разбирает установку по узлам и запоминает вас.',
    points: ['Сенсорные киоски для выставок', 'Разборные 3D-модели продукта', 'Презентации для отдела продаж'],
  },
]

const steps = [
  {
    title: 'Обсуждаем задачу',
    text: 'Разбираемся, какую бизнес-задачу решаем: конверсия, обучение, продажи. Фиксируем сценарии и метрики успеха.',
  },
  {
    title: 'Прототип',
    text: 'Собираем рабочий прототип ключевой механики, чтобы вы потрогали решение до начала полной разработки.',
  },
  {
    title: 'Разработка',
    text: 'Делаем продукт целиком: 3D-контент, интерфейсы, логика, интеграции с вашими системами.',
  },
  {
    title: 'Запуск и поддержка',
    text: 'Разворачиваем на вашей площадке — сайт, киоск, планшет — и сопровождаем после запуска.',
  },
]

export default function ServicesPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-5 pt-40 pb-20">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
            Unity для бизнеса
          </span>
          <h1 className="max-w-3xl text-4xl font-medium tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Интерактивные решения, которые решают бизнес-задачи
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            Мы применяем игровые технологии за пределами игр: 3D-конфигураторы для e-commerce,
            симуляторы обучения персонала, интерактивные презентации и виртуальные туры по
            недвижимости.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
            <span className="rounded-full border border-border px-3 py-1">Unity</span>
            <span className="rounded-full border border-border px-3 py-1">WebGL</span>
            <span className="rounded-full border border-border px-3 py-1">3D</span>
            <span className="rounded-full border border-border px-3 py-1">Сенсорные экраны</span>
          </div>
        </div>
      </section>

      <section aria-labelledby="services-heading" className="mx-auto max-w-6xl px-5 pb-24">
        <h2 id="services-heading" className="sr-only">
          Наши услуги
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
                  alt={service.alt}
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
              Как мы работаем
            </span>
            <h2
              id="process-heading"
              className="max-w-2xl text-3xl font-medium tracking-tight text-balance sm:text-4xl"
            >
              От задачи до работающего продукта
            </h2>
          </div>

          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
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
            Обсудить проект
          </span>
          <h2
            id="cta-heading"
            className="max-w-2xl text-3xl font-medium tracking-tight text-balance sm:text-4xl"
          >
            Расскажите о задаче — предложим решение и оценку
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-pretty text-muted-foreground">
            Напишите пару предложений о вашем продукте и о том, что хотите получить. Ответим с
            вариантами подхода и примерной вилкой по срокам.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-mono text-xs tracking-widest text-primary-foreground uppercase transition-opacity hover:opacity-90"
            >
              <Mail className="size-4" />
              Написать на почту
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-mono text-xs tracking-widest text-muted-foreground uppercase transition-colors hover:border-primary/60 hover:text-foreground"
            >
              <Send className="size-4" />
              Telegram
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
