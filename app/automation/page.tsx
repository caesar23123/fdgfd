import type { Metadata } from 'next'
import Image from 'next/image'
import { Mail, Send } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Автоматизация бизнес-задач — боты, ИИ-агенты, интеграции',
  description:
    'Телеграм-боты с ИИ-агентами, встраивание ИИ в продукты, парсинг данных, backend-разработка, мосты с 1С и интеграции с маркетплейсами Wildberries, Ozon, Яндекс.Маркет.',
}

const services = [
  {
    image: '/art/auto-bot.png',
    alt: 'Иллюстрация телеграм-бота с ИИ-агентом',
    tag: 'Боты и агенты',
    title: 'Телеграм-боты с ИИ-агентами',
    text: 'Бот принимает заявки и вопросы, а ИИ-агент поверх него сам разбирает обращения: отвечает клиентам, классифицирует заявки, готовит документы. Люди подключаются только к сложным случаям.',
    points: ['Техподдержка клиентов 24/7', 'Обработка и маршрутизация заявок', 'Документооборот и уведомления'],
  },
  {
    image: '/art/auto-ai.png',
    alt: 'Иллюстрация встраивания ИИ в продукт',
    tag: 'ИИ в продукте',
    title: 'Встраивание ИИ в ваши продукты',
    text: 'Добавляем ИИ туда, где он реально экономит время: ассистенты внутри вашего сервиса, автоматизация рутины через агентов и MCP, умный поиск и генерация контента по вашим данным.',
    points: ['Ассистенты и чат-боты в продукте', 'Агенты и MCP для автоматизации', 'Работа с вашими данными и базами знаний'],
  },
  {
    image: '/art/auto-parsing.png',
    alt: 'Иллюстрация парсинга публичных данных',
    tag: 'Данные',
    title: 'Парсинг публичной информации',
    text: 'Собираем открытые данные из сайтов, каталогов и агрегаторов: цены конкурентов, ассортимент, отзывы, объявления. Отдаём в удобном виде — таблицы, база, API или регулярные отчёты.',
    points: ['Мониторинг цен и ассортимента', 'Сбор отзывов и объявлений', 'Регулярные выгрузки по расписанию'],
  },
  {
    image: '/art/auto-backend.png',
    alt: 'Иллюстрация backend-разработки',
    tag: 'Разработка',
    title: 'Backend-разработка',
    text: 'Проектируем и пишем серверную часть под вашу задачу: API для сайта и мобильного приложения, личные кабинеты, интеграции с внешними сервисами, отчётность и админки.',
    points: ['REST API и интеграции', 'Личные кабинеты и админ-панели', 'Надёжность, логирование, мониторинг'],
  },
  {
    image: '/art/auto-1c.png',
    alt: 'Иллюстрация моста между 1С и внешними системами',
    tag: '1С-мосты',
    title: 'Подключение 1С к вашим системам',
    text: 'Соединяем 1С с сайтом, CRM, складом и маркетплейсами, а внутренние системы — друг с другом. Остатки, цены, заказы и документы ходят между системами сами, без ручного переноса.',
    points: ['Сайт ↔ 1С: заказы, остатки, цены', 'CRM с телефонией и 1С', 'Обмен между внутренними системами'],
  },
  {
    image: '/art/auto-marketplace.png',
    alt: 'Иллюстрация синхронизации с маркетплейсами',
    tag: 'Маркетплейсы',
    title: 'Интеграции с маркетплейсами',
    text: 'Синхронизируем остатки, цены и заказы с Wildberries, Ozon и Яндекс.Маркетом через их API. Товар закончился на складе — карточки обновились везде сами, без просрочек и штрафов.',
    points: ['Wildberries, Ozon, Яндекс.Маркет', 'Синхронизация остатков и цен', 'Автоматическая обработка заказов'],
  },
]

const steps = [
  {
    title: 'Разбираем процесс',
    text: 'Смотрим, как задача решается сейчас: где ручная работа, где теряется время и деньги. Фиксируем, что автоматизируем в первую очередь.',
  },
  {
    title: 'Проектируем решение',
    text: 'Выбираем связку под задачу — бот, агент, интеграция или их комбинация. Согласовываем схему обмена данными и сценарии.',
  },
  {
    title: 'Внедряем',
    text: 'Разрабатываем и подключаем к вашим системам: 1С, CRM, сайту, маркетплейсам. Запускаем на реальных данных поэтапно.',
  },
  {
    title: 'Сопровождаем',
    text: 'Следим за работой обменов и агентов, дорабатываем сценарии и расширяем автоматизацию по мере роста задач.',
  },
]

export default function AutomationPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-5 pt-40 pb-20">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
            Автоматизация бизнеса
          </span>
          <h1 className="max-w-3xl text-4xl font-medium tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Автоматизируем рутину: боты, ИИ-агенты и интеграции
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            Убираем ручную работу из бизнес-процессов: телеграм-боты с ИИ-агентами, встраивание ИИ
            в ваши продукты, парсинг данных, backend-разработка и мосты между 1С, CRM, сайтом и
            маркетплейсами.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
            <span className="rounded-full border border-border px-3 py-1">Телеграм-боты</span>
            <span className="rounded-full border border-border px-3 py-1">ИИ-агенты</span>
            <span className="rounded-full border border-border px-3 py-1">1С</span>
            <span className="rounded-full border border-border px-3 py-1">Маркетплейсы</span>
            <span className="rounded-full border border-border px-3 py-1">API</span>
          </div>
        </div>
      </section>

      <section aria-labelledby="automation-services-heading" className="mx-auto max-w-6xl px-5 pb-24">
        <h2 id="automation-services-heading" className="sr-only">
          Услуги автоматизации
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

      <section aria-labelledby="automation-process-heading" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
              Как мы работаем
            </span>
            <h2
              id="automation-process-heading"
              className="max-w-2xl text-3xl font-medium tracking-tight text-balance sm:text-4xl"
            >
              От ручного процесса до автоматики
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

      <section aria-labelledby="automation-cta-heading" className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-24">
          <span className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
            Обсудить задачу
          </span>
          <h2
            id="automation-cta-heading"
            className="max-w-2xl text-3xl font-medium tracking-tight text-balance sm:text-4xl"
          >
            Опишите процесс — предложим, как его автоматизировать
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-pretty text-muted-foreground">
            Расскажите, какая рутина отнимает время: заявки, обмен с 1С, маркетплейсы, отчёты.
            Ответим со схемой решения и примерной оценкой по срокам.
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
