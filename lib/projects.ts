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
  links: { label: string; href: string; kind: 'google-play' | 'telegram' | 'mail' }[]
}

export const projects: Project[] = [
  {
    slug: 'economy-strategy',
    name: 'Экономическая стратегия жизни',
    short: 'Экономическая стратегия',
    tagline: 'Пошаговый эмулятор экономической части жизни',
    description: [
      'Небольшая игра, позволяющая почувствовать себя бизнесменом и подвергнуть испытаниям свою финансовую грамотность.',
      'Каждый ход — это месяц жизни: работа, расходы, вклады, кредиты, акции и собственный бизнес. Решения накапливаются, а ошибки приходится оплачивать из собственного бюджета.',
    ],
    icon: '/icons/economy-strategy.png',
    year: '2024',
    platform: 'Android',
    status: 'Опубликовано',
    accentImage: '/art/coins.png',
    shots: [
      { src: '/shots/economy-1.png', alt: 'Экран банка с котировками акций' },
      { src: '/shots/economy-2.png', alt: 'Экран инвестиционных предложений' },
      { src: '/shots/economy-3.png', alt: 'Экран образа жизни и расходов' },
    ],
    features: [
      {
        title: 'Пошаговая экономика',
        text: 'Один ход — один месяц. Доходы, расходы и проценты пересчитываются каждый ход.',
      },
      {
        title: 'Рынок акций',
        text: 'Котировки живут своей жизнью: можно держать бумаги годами или спекулировать на волатильности.',
      },
      {
        title: 'Бизнес и активы',
        text: 'Салон красоты, ателье, промышленное помещение или собственная компания — у каждого своя окупаемость.',
      },
      {
        title: 'Стресс и образ жизни',
        text: 'Питание, отдых и развлечения влияют на стресс, а стресс — на способность зарабатывать.',
      },
    ],
    stack: ['Unity', 'C#', 'Android'],
    links: [
      { label: 'Google Play', href: 'https://play.google.com', kind: 'google-play' },
      { label: 'Telegram', href: 'https://t.me', kind: 'telegram' },
    ],
  },
  {
    slug: 'city-builder',
    name: 'Изометрический город',
    short: 'Город',
    tagline: 'Градостроительный симулятор в изометрии',
    description: [
      'Спокойный градостроительный симулятор: вы разбиваете кварталы, тянете дороги и следите за тем, чтобы город не задохнулся от собственного роста.',
      'Никакой спешки и таймеров — только баланс между населением, производством и деньгами в городской казне.',
    ],
    icon: '/icons/city-builder.png',
    year: '2025',
    platform: 'Android, Web',
    status: 'В разработке',
    accentImage: '/art/workshop.png',
    shots: [
      { src: '/shots/city-1.png', alt: 'Изометрический вид города ночью' },
      { src: '/shots/city-2.png', alt: 'Меню строительства зданий' },
    ],
    features: [
      {
        title: 'Живая сетка города',
        text: 'Каждое здание влияет на соседние кварталы: шум, логистика и стоимость земли.',
      },
      {
        title: 'Экономика ресурсов',
        text: 'Производственные цепочки от сырья до готовой продукции и городского бюджета.',
      },
      {
        title: 'Без таймеров',
        text: 'Игра уважает время игрока: ничего не ждём, ничего не покупаем за ускорение.',
      },
      {
        title: 'Ночной режим',
        text: 'Отдельная палитра освещения и настроение города после заката.',
      },
    ],
    stack: ['Unity', 'C#', 'WebGL'],
    links: [{ label: 'Telegram', href: 'https://t.me', kind: 'telegram' }],
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
