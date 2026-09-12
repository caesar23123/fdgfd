import type { Locale } from '@/lib/i18n/config'

const en = {
  nav: {
    home: 'Home',
    business: 'For business',
    automation: 'Automation',
    language: 'Language',
  },
  social: {
    googlePlay: 'Google Play',
    telegram: 'Telegram',
    email: 'Email',
  },
  common: {
    emailUs: 'Email us',
    telegram: 'Telegram',
  },
  hero: {
    title: 'We are Yulian’s team',
    subtitle:
      'We build games, plus interactive solutions and automation for business. Our projects are below.',
    tags: ['Unity', 'C#', 'Game design', 'Android'],
    cta: 'Projects',
  },
  home: {
    about: {
      eyebrow: '01 — About',
      title: 'We make small games about decisions and consequences',
      facts: [
        {
          title: 'Turn-based mechanics',
          text: 'We love games where you can think: a move, a calculation, a consequence. No timer pressure.',
        },
        {
          title: 'Economy as story',
          text: 'Numbers tell a story as well as dialogue — if you build the right balance and pressure on the player.',
        },
        {
          title: 'Everything by hand',
          text: 'Code, interfaces, balance and art — we build projects end to end and own every screen.',
        },
      ],
    },
    projects: {
      eyebrow: '02 — Projects',
      title: 'The games we make',
      subtitle: 'Small but honest projects: no aggressive monetization or waiting timers.',
    },
    more: {
      eyebrow: '03 — More',
      title: 'How else we can help',
      subtitle:
        'Besides games, we build interactive solutions and automation for business — with the same team and the same attention to detail.',
      business: {
        title: 'For business',
        tagline: 'Interactive solutions on Unity',
        tags: ['3D configurators', 'Training simulators', 'Virtual tours'],
      },
      automation: {
        title: 'Automation',
        tagline: 'Bots, AI agents and integrations',
        tags: ['AI agents', '1C & marketplaces', 'Backend'],
      },
    },
  },
  footer: {
    about:
      'Games, interactive solutions and automation for business. Reach out if you’d like to discuss a project or just say thanks.',
    sections: 'Sections',
    contacts: 'Contacts',
    address: 'Moscow, Primernaya St., 1',
  },
  services: {
    hero: {
      eyebrow: 'Unity for business',
      title: 'Interactive solutions that solve business problems',
      subtitle:
        'We apply game technology beyond games: 3D configurators for e-commerce, staff training simulators, interactive presentations and virtual property tours.',
      tags: ['Unity', 'WebGL', '3D', 'Touch screens'],
    },
    heading: 'Our services',
    items: [
      {
        tag: 'E-commerce',
        title: '3D product configurators',
        text: 'The buyer rotates the product, changes color, material and options right on the site. Fewer returns, higher conversion — the customer sees exactly what they’ll order.',
        points: [
          'Integration into a site or app',
          'Real materials and lighting',
          'Real-time price calculation',
        ],
      },
      {
        tag: 'HR & training',
        title: 'Staff training simulators',
        text: 'Gamified onboarding, safety and sales. Employees practice scenarios in a safe environment while you see progress and mistakes in numbers.',
        points: [
          'Onboarding and workplace safety',
          'Sales and negotiation trainers',
          'Employee stats and progress',
        ],
      },
      {
        tag: 'Real estate',
        title: 'Virtual property tours',
        text: 'Clients walk through an apartment or office before construction even starts: free camera, changeable finishes, the view from the window. Selling off-plan becomes easier.',
        points: [
          'Tours of apartments and offices',
          'Changeable finishes and furniture',
          'Works in a browser and on a tablet',
        ],
      },
      {
        tag: 'B2B & expos',
        title: 'Interactive presentations and booths',
        text: 'Instead of slides — an interactive 3D model of your product on a touch screen. Booth visitors take the unit apart themselves and remember you.',
        points: [
          'Touch kiosks for expos',
          'Exploded 3D product models',
          'Presentations for the sales team',
        ],
      },
    ],
    process: {
      eyebrow: 'How we work',
      title: 'From task to working product',
      steps: [
        {
          title: 'We discuss the task',
          text: 'We figure out which business problem we’re solving: conversion, training, sales. We lock down scenarios and success metrics.',
        },
        {
          title: 'Prototype',
          text: 'We build a working prototype of the key mechanic so you can try the solution before full development begins.',
        },
        {
          title: 'Development',
          text: 'We build the whole product: 3D content, interfaces, logic, integrations with your systems.',
        },
        {
          title: 'Launch and support',
          text: 'We deploy to your platform — site, kiosk, tablet — and support it after launch.',
        },
      ],
    },
    cta: {
      eyebrow: 'Discuss a project',
      title: 'Tell us about the task — we’ll propose a solution and estimate',
      text: 'Write a couple of sentences about your product and what you want to get. We’ll reply with approach options and a rough timeline range.',
    },
  },
  automation: {
    hero: {
      eyebrow: 'Business automation',
      title: 'We automate routine: bots, AI agents and integrations',
      subtitle:
        'We remove manual work from business processes: Telegram bots with AI agents, embedding AI into your products, data parsing, backend development and bridges between 1C, CRM, your site and marketplaces.',
      tags: ['Telegram bots', 'AI agents', '1C', 'Marketplaces', 'API'],
    },
    heading: 'Automation services',
    items: [
      {
        tag: 'Bots & agents',
        title: 'Telegram bots with AI agents',
        text: 'The bot receives requests and questions, and an AI agent on top handles them itself: replies to customers, classifies requests, prepares documents. People step in only for complex cases.',
        points: [
          '24/7 customer support',
          'Request processing and routing',
          'Document flow and notifications',
        ],
      },
      {
        tag: 'AI in product',
        title: 'Embedding AI into your products',
        text: 'We add AI where it truly saves time: assistants inside your service, routine automation via agents and MCP, smart search and content generation from your data.',
        points: [
          'Assistants and chatbots in the product',
          'Agents and MCP for automation',
          'Working with your data and knowledge bases',
        ],
      },
      {
        tag: 'Data',
        title: 'Public data parsing',
        text: 'We collect open data from sites, catalogs and aggregators: competitor prices, assortment, reviews, listings. Delivered in a convenient form — spreadsheets, a database, an API or regular reports.',
        points: [
          'Price and assortment monitoring',
          'Collecting reviews and listings',
          'Scheduled regular exports',
        ],
      },
      {
        tag: 'Development',
        title: 'Backend development',
        text: 'We design and write the server side for your task: APIs for web and mobile apps, user dashboards, integrations with external services, reporting and admin panels.',
        points: [
          'REST APIs and integrations',
          'User dashboards and admin panels',
          'Reliability, logging, monitoring',
        ],
      },
      {
        tag: '1C bridges',
        title: 'Connecting 1C to your systems',
        text: 'We connect 1C to your site, CRM, warehouse and marketplaces, and internal systems to each other. Stock, prices, orders and documents move between systems automatically, with no manual re-entry.',
        points: [
          'Site ↔ 1C: orders, stock, prices',
          'CRM with telephony and 1C',
          'Exchange between internal systems',
        ],
      },
      {
        tag: 'Marketplaces',
        title: 'Marketplace integrations',
        text: 'We sync stock, prices and orders with Wildberries, Ozon and Yandex.Market via their APIs. A product runs out in the warehouse — listings update everywhere automatically, with no delays or fines.',
        points: [
          'Wildberries, Ozon, Yandex.Market',
          'Stock and price synchronization',
          'Automatic order processing',
        ],
      },
    ],
    process: {
      eyebrow: 'How we work',
      title: 'From a manual process to automation',
      steps: [
        {
          title: 'We analyze the process',
          text: 'We look at how the task is handled today: where the manual work is, where time and money leak. We decide what to automate first.',
        },
        {
          title: 'We design the solution',
          text: 'We choose the right stack for the task — a bot, an agent, an integration or a combination. We agree on the data exchange scheme and scenarios.',
        },
        {
          title: 'We implement',
          text: 'We develop and connect to your systems: 1C, CRM, site, marketplaces. We roll out on real data step by step.',
        },
        {
          title: 'We maintain',
          text: 'We monitor the exchanges and agents, refine scenarios and expand automation as your needs grow.',
        },
      ],
    },
    cta: {
      eyebrow: 'Discuss a task',
      title: 'Describe the process — we’ll propose how to automate it',
      text: 'Tell us which routine eats your time: requests, 1C exchange, marketplaces, reports. We’ll reply with a solution scheme and a rough timeline estimate.',
    },
  },
  project: {
    back: 'All projects',
    year: 'Year',
    platform: 'Platform',
    status: 'Status',
    stack: 'Stack',
    about: 'About the project',
    mechanics: 'Mechanics',
    screenshots: 'Screenshots',
    next: 'Next project',
  },
  projects: {
    'economy-strategy': {
      name: 'Life Economy Strategy',
      short: 'Economy strategy',
      tagline: 'A turn-based emulator of life’s economic side',
      status: 'Published',
      description: [
        'A small game that lets you feel like a businessperson and put your financial literacy to the test.',
        'Each turn is a month of life: work, expenses, deposits, loans, stocks and your own business. Decisions add up, and mistakes come out of your own budget.',
      ],
      shotAlts: [
        'Bank screen with stock quotes',
        'Investment offers screen',
        'Lifestyle and expenses screen',
      ],
      features: [
        {
          title: 'Turn-based economy',
          text: 'One turn is one month. Income, expenses and interest are recalculated every turn.',
        },
        {
          title: 'Stock market',
          text: 'Quotes live their own life: hold shares for years or speculate on volatility.',
        },
        {
          title: 'Business and assets',
          text: 'A beauty salon, a tailor shop, an industrial space or your own company — each with its own payback.',
        },
        {
          title: 'Stress and lifestyle',
          text: 'Food, rest and entertainment affect stress, and stress affects your ability to earn.',
        },
      ],
    },
    'city-builder': {
      name: 'Isometric City',
      short: 'City',
      tagline: 'An isometric city-building simulator',
      status: 'In development',
      description: [
        'A calm city-building simulator: you lay out blocks, run roads and make sure the city doesn’t choke on its own growth.',
        'No rush and no timers — just a balance between population, production and money in the city treasury.',
      ],
      shotAlts: ['Isometric city view at night', 'Building construction menu'],
      features: [
        {
          title: 'A living city grid',
          text: 'Every building affects neighboring blocks: noise, logistics and land value.',
        },
        {
          title: 'Resource economy',
          text: 'Production chains from raw materials to finished goods and the city budget.',
        },
        {
          title: 'No timers',
          text: 'The game respects the player’s time: nothing to wait for, nothing to buy to speed up.',
        },
        {
          title: 'Night mode',
          text: 'A separate lighting palette and the city’s mood after sunset.',
        },
      ],
    },
  },
}

export type Dictionary = typeof en

const es: Dictionary = {
  nav: {
    home: 'Inicio',
    business: 'Para empresas',
    automation: 'Automatización',
    language: 'Idioma',
  },
  social: {
    googlePlay: 'Google Play',
    telegram: 'Telegram',
    email: 'Correo',
  },
  common: {
    emailUs: 'Escríbenos',
    telegram: 'Telegram',
  },
  hero: {
    title: 'Somos el equipo de Yulian',
    subtitle:
      'Desarrollamos juegos, además de soluciones interactivas y automatización para empresas. Abajo están nuestros proyectos.',
    tags: ['Unity', 'C#', 'Diseño de juegos', 'Android'],
    cta: 'Proyectos',
  },
  home: {
    about: {
      eyebrow: '01 — Sobre nosotros',
      title: 'Hacemos juegos pequeños sobre decisiones y consecuencias',
      facts: [
        {
          title: 'Mecánicas por turnos',
          text: 'Nos gustan los juegos en los que puedes pensar: un movimiento, un cálculo, una consecuencia. Sin la presión del reloj.',
        },
        {
          title: 'La economía como historia',
          text: 'Los números cuentan una historia tan bien como los diálogos, si construyes el equilibrio y la presión adecuados sobre el jugador.',
        },
        {
          title: 'Todo con nuestras manos',
          text: 'Código, interfaces, equilibrio y arte: hacemos los proyectos de principio a fin y respondemos por cada pantalla.',
        },
      ],
    },
    projects: {
      eyebrow: '02 — Proyectos',
      title: 'Los juegos que hacemos',
      subtitle: 'Proyectos pequeños pero honestos: sin monetización agresiva ni temporizadores de espera.',
    },
    more: {
      eyebrow: '03 — Más',
      title: 'En qué más podemos ayudar',
      subtitle:
        'Además de juegos, creamos soluciones interactivas y automatización para empresas, con el mismo equipo y la misma atención al detalle.',
      business: {
        title: 'Para empresas',
        tagline: 'Soluciones interactivas en Unity',
        tags: ['Configuradores 3D', 'Simuladores de formación', 'Recorridos virtuales'],
      },
      automation: {
        title: 'Automatización',
        tagline: 'Bots, agentes de IA e integraciones',
        tags: ['Agentes de IA', '1C y marketplaces', 'Backend'],
      },
    },
  },
  footer: {
    about:
      'Juegos, soluciones interactivas y automatización para empresas. Escríbenos si quieres hablar de un proyecto o simplemente dar las gracias.',
    sections: 'Secciones',
    contacts: 'Contactos',
    address: 'Moscú, calle Primernaya, 1',
  },
  services: {
    hero: {
      eyebrow: 'Unity para empresas',
      title: 'Soluciones interactivas que resuelven problemas de negocio',
      subtitle:
        'Aplicamos la tecnología de los juegos más allá de los juegos: configuradores 3D para e-commerce, simuladores de formación de personal, presentaciones interactivas y recorridos virtuales inmobiliarios.',
      tags: ['Unity', 'WebGL', '3D', 'Pantallas táctiles'],
    },
    heading: 'Nuestros servicios',
    items: [
      {
        tag: 'E-commerce',
        title: 'Configuradores 3D de productos',
        text: 'El comprador gira el producto, cambia el color, el material y las opciones directamente en la web. Menos devoluciones, mayor conversión: el cliente ve exactamente lo que va a pedir.',
        points: [
          'Integración en una web o aplicación',
          'Materiales e iluminación realistas',
          'Cálculo de precio en tiempo real',
        ],
      },
      {
        tag: 'RR. HH. y formación',
        title: 'Simuladores de formación de personal',
        text: 'Gamificación del onboarding, la seguridad laboral y las ventas. El empleado practica escenarios en un entorno seguro y tú ves el progreso y los errores en cifras.',
        points: [
          'Onboarding y seguridad laboral',
          'Simuladores de ventas y negociación',
          'Estadísticas y progreso de los empleados',
        ],
      },
      {
        tag: 'Inmobiliario',
        title: 'Recorridos virtuales por los inmuebles',
        text: 'El cliente recorre un piso u oficina antes incluso de empezar la obra: cámara libre, cambio de acabados, vistas desde la ventana. Vender sobre plano se vuelve más fácil.',
        points: [
          'Recorridos por pisos y oficinas',
          'Cambio de acabados y mobiliario',
          'Funciona en el navegador y en tableta',
        ],
      },
      {
        tag: 'B2B y ferias',
        title: 'Presentaciones y stands interactivos',
        text: 'En lugar de diapositivas, un modelo 3D interactivo de tu producto en una pantalla táctil. El visitante del stand desmonta la instalación por piezas y te recuerda.',
        points: [
          'Quioscos táctiles para ferias',
          'Modelos 3D despiezables del producto',
          'Presentaciones para el equipo de ventas',
        ],
      },
    ],
    process: {
      eyebrow: 'Cómo trabajamos',
      title: 'De la tarea al producto en funcionamiento',
      steps: [
        {
          title: 'Analizamos la tarea',
          text: 'Averiguamos qué problema de negocio resolvemos: conversión, formación, ventas. Fijamos los escenarios y las métricas de éxito.',
        },
        {
          title: 'Prototipo',
          text: 'Montamos un prototipo funcional de la mecánica clave para que pruebes la solución antes de la desarrollo completo.',
        },
        {
          title: 'Desarrollo',
          text: 'Hacemos el producto completo: contenido 3D, interfaces, lógica e integraciones con tus sistemas.',
        },
        {
          title: 'Lanzamiento y soporte',
          text: 'Lo desplegamos en tu plataforma —web, quiosco, tableta— y lo mantenemos tras el lanzamiento.',
        },
      ],
    },
    cta: {
      eyebrow: 'Hablemos del proyecto',
      title: 'Cuéntanos la tarea y propondremos una solución y un presupuesto',
      text: 'Escribe un par de frases sobre tu producto y lo que quieres conseguir. Responderemos con opciones de enfoque y una horquilla aproximada de plazos.',
    },
  },
  automation: {
    hero: {
      eyebrow: 'Automatización de empresas',
      title: 'Automatizamos la rutina: bots, agentes de IA e integraciones',
      subtitle:
        'Eliminamos el trabajo manual de los procesos de negocio: bots de Telegram con agentes de IA, integración de IA en tus productos, extracción de datos, desarrollo backend y puentes entre 1C, CRM, tu web y los marketplaces.',
      tags: ['Bots de Telegram', 'Agentes de IA', '1C', 'Marketplaces', 'API'],
    },
    heading: 'Servicios de automatización',
    items: [
      {
        tag: 'Bots y agentes',
        title: 'Bots de Telegram con agentes de IA',
        text: 'El bot recibe solicitudes y preguntas, y un agente de IA por encima las gestiona por sí mismo: responde a los clientes, clasifica las solicitudes, prepara documentos. Las personas solo intervienen en los casos complejos.',
        points: [
          'Soporte al cliente 24/7',
          'Procesamiento y enrutamiento de solicitudes',
          'Gestión documental y notificaciones',
        ],
      },
      {
        tag: 'IA en el producto',
        title: 'Integración de IA en tus productos',
        text: 'Añadimos IA donde realmente ahorra tiempo: asistentes dentro de tu servicio, automatización de la rutina mediante agentes y MCP, búsqueda inteligente y generación de contenido a partir de tus datos.',
        points: [
          'Asistentes y chatbots en el producto',
          'Agentes y MCP para la automatización',
          'Trabajo con tus datos y bases de conocimiento',
        ],
      },
      {
        tag: 'Datos',
        title: 'Extracción de información pública',
        text: 'Recopilamos datos abiertos de webs, catálogos y agregadores: precios de la competencia, surtido, reseñas, anuncios. Los entregamos de forma cómoda: hojas de cálculo, base de datos, API o informes periódicos.',
        points: [
          'Monitorización de precios y surtido',
          'Recogida de reseñas y anuncios',
          'Exportaciones periódicas programadas',
        ],
      },
      {
        tag: 'Desarrollo',
        title: 'Desarrollo backend',
        text: 'Diseñamos y programamos la parte servidor para tu tarea: API para web y app móvil, áreas de usuario, integraciones con servicios externos, informes y paneles de administración.',
        points: [
          'API REST e integraciones',
          'Áreas de usuario y paneles de administración',
          'Fiabilidad, registro y monitorización',
        ],
      },
      {
        tag: 'Puentes con 1C',
        title: 'Conexión de 1C con tus sistemas',
        text: 'Conectamos 1C con la web, el CRM, el almacén y los marketplaces, y los sistemas internos entre sí. El stock, los precios, los pedidos y los documentos circulan entre sistemas por sí solos, sin traspaso manual.',
        points: [
          'Web ↔ 1C: pedidos, stock, precios',
          'CRM con telefonía y 1C',
          'Intercambio entre sistemas internos',
        ],
      },
      {
        tag: 'Marketplaces',
        title: 'Integraciones con marketplaces',
        text: 'Sincronizamos stock, precios y pedidos con Wildberries, Ozon y Yandex.Market mediante sus API. Se agota un producto en el almacén y las fichas se actualizan en todas partes por sí solas, sin retrasos ni multas.',
        points: [
          'Wildberries, Ozon, Yandex.Market',
          'Sincronización de stock y precios',
          'Procesamiento automático de pedidos',
        ],
      },
    ],
    process: {
      eyebrow: 'Cómo trabajamos',
      title: 'De un proceso manual a la automatización',
      steps: [
        {
          title: 'Analizamos el proceso',
          text: 'Vemos cómo se resuelve la tarea hoy: dónde está el trabajo manual, dónde se pierde tiempo y dinero. Definimos qué automatizar primero.',
        },
        {
          title: 'Diseñamos la solución',
          text: 'Elegimos la combinación adecuada para la tarea: un bot, un agente, una integración o su combinación. Acordamos el esquema de intercambio de datos y los escenarios.',
        },
        {
          title: 'Implementamos',
          text: 'Desarrollamos y conectamos con tus sistemas: 1C, CRM, web, marketplaces. Lo lanzamos sobre datos reales por etapas.',
        },
        {
          title: 'Damos soporte',
          text: 'Vigilamos el funcionamiento de los intercambios y los agentes, mejoramos los escenarios y ampliamos la automatización a medida que crecen las tareas.',
        },
      ],
    },
    cta: {
      eyebrow: 'Hablemos de la tarea',
      title: 'Describe el proceso y propondremos cómo automatizarlo',
      text: 'Cuéntanos qué rutina te quita tiempo: solicitudes, intercambio con 1C, marketplaces, informes. Responderemos con un esquema de solución y una estimación aproximada de plazos.',
    },
  },
  project: {
    back: 'Todos los proyectos',
    year: 'Año',
    platform: 'Plataforma',
    status: 'Estado',
    stack: 'Stack',
    about: 'Sobre el proyecto',
    mechanics: 'Mecánicas',
    screenshots: 'Capturas',
    next: 'Siguiente proyecto',
  },
  projects: {
    'economy-strategy': {
      name: 'Estrategia económica de la vida',
      short: 'Estrategia económica',
      tagline: 'Un emulador por turnos de la parte económica de la vida',
      status: 'Publicado',
      description: [
        'Un pequeño juego que te permite sentirte empresario y poner a prueba tu educación financiera.',
        'Cada turno es un mes de vida: trabajo, gastos, depósitos, créditos, acciones y tu propio negocio. Las decisiones se acumulan y los errores se pagan de tu propio presupuesto.',
      ],
      shotAlts: [
        'Pantalla del banco con cotizaciones',
        'Pantalla de ofertas de inversión',
        'Pantalla de estilo de vida y gastos',
      ],
      features: [
        {
          title: 'Economía por turnos',
          text: 'Un turno es un mes. Ingresos, gastos e intereses se recalculan cada turno.',
        },
        {
          title: 'Mercado de acciones',
          text: 'Las cotizaciones tienen vida propia: mantén acciones durante años o especula con la volatilidad.',
        },
        {
          title: 'Negocios y activos',
          text: 'Un salón de belleza, un taller, un local industrial o tu propia empresa: cada uno con su propia rentabilidad.',
        },
        {
          title: 'Estrés y estilo de vida',
          text: 'La comida, el descanso y el ocio afectan al estrés, y el estrés afecta a tu capacidad de ganar dinero.',
        },
      ],
    },
    'city-builder': {
      name: 'Ciudad isométrica',
      short: 'Ciudad',
      tagline: 'Un simulador de construcción de ciudades en isometría',
      status: 'En desarrollo',
      description: [
        'Un tranquilo simulador de construcción de ciudades: trazas manzanas, tiendes carreteras y cuidas de que la ciudad no se ahogue con su propio crecimiento.',
        'Sin prisas ni temporizadores: solo el equilibrio entre población, producción y el dinero de las arcas municipales.',
      ],
      shotAlts: ['Vista isométrica de la ciudad de noche', 'Menú de construcción de edificios'],
      features: [
        {
          title: 'Una malla urbana viva',
          text: 'Cada edificio afecta a las manzanas vecinas: ruido, logística y valor del suelo.',
        },
        {
          title: 'Economía de recursos',
          text: 'Cadenas de producción desde la materia prima hasta el producto final y el presupuesto municipal.',
        },
        {
          title: 'Sin temporizadores',
          text: 'El juego respeta el tiempo del jugador: nada que esperar, nada que comprar para acelerar.',
        },
        {
          title: 'Modo nocturno',
          text: 'Una paleta de iluminación propia y el ambiente de la ciudad tras el atardecer.',
        },
      ],
    },
  },
}

const ru: Dictionary = {
  nav: {
    home: 'Главная',
    business: 'Для бизнеса',
    automation: 'Автоматизация',
    language: 'Язык',
  },
  social: {
    googlePlay: 'Google Play',
    telegram: 'Telegram',
    email: 'Почта',
  },
  common: {
    emailUs: 'Написать на почту',
    telegram: 'Telegram',
  },
  hero: {
    title: 'Мы — команда Юлиана',
    subtitle:
      'Разрабатываем игры, а ещё интерактивные решения и автоматизацию для бизнеса. Ниже — наши проекты.',
    tags: ['Unity', 'C#', 'Game design', 'Android'],
    cta: 'Проекты',
  },
  home: {
    about: {
      eyebrow: '01 — О нас',
      title: 'Делаем небольшие игры про решения и последствия',
      facts: [
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
      ],
    },
    projects: {
      eyebrow: '02 — Проекты',
      title: 'Игры, которые мы делаем',
      subtitle: 'Небольшие, но честные проекты: без агрессивной монетизации и таймеров ожидания.',
    },
    more: {
      eyebrow: '03 — Ещё',
      title: 'Чем ещё можем быть полезны',
      subtitle:
        'Кроме игр мы делаем интерактивные решения и автоматизацию для бизнеса — тем же составом и с тем же вниманием к деталям.',
      business: {
        title: 'Для бизнеса',
        tagline: 'Интерактивные решения на Unity',
        tags: ['3D-конфигураторы', 'Симуляторы обучения', 'Виртуальные туры'],
      },
      automation: {
        title: 'Автоматизация',
        tagline: 'Боты, ИИ-агенты и интеграции',
        tags: ['ИИ-агенты', '1С и маркетплейсы', 'Backend'],
      },
    },
  },
  footer: {
    about:
      'Игры, интерактивные решения и автоматизация для бизнеса. Пишите, если хотите обсудить проект или просто сказать спасибо.',
    sections: 'Разделы',
    contacts: 'Контакты',
    address: 'г. Москва, ул. Примерная, д. 1',
  },
  services: {
    hero: {
      eyebrow: 'Unity для бизнеса',
      title: 'Интерактивные решения, которые решают бизнес-задачи',
      subtitle:
        'Мы применяем игровые технологии за пределами игр: 3D-конфигураторы для e-commerce, симуляторы обучения персонала, интерактивные презентации и виртуальные туры по недвижимости.',
      tags: ['Unity', 'WebGL', '3D', 'Сенсорные экраны'],
    },
    heading: 'Наши услуги',
    items: [
      {
        tag: 'E-commerce',
        title: '3D-конфигураторы товаров',
        text: 'Покупатель крутит товар, меняет цвет, материал и комплектацию прямо на сайте. Меньше возвратов, выше конверсия — клиент видит именно то, что закажет.',
        points: [
          'Интеграция в сайт или приложение',
          'Реальные материалы и освещение',
          'Расчёт цены в реальном времени',
        ],
      },
      {
        tag: 'HR и обучение',
        title: 'Симуляторы обучения персонала',
        text: 'Геймификация онбординга, охраны труда и продаж. Сотрудник отрабатывает сценарии в безопасной среде, а вы видите прогресс и ошибки в цифрах.',
        points: [
          'Онбординг и охрана труда',
          'Тренажёры продаж и переговоров',
          'Статистика и прогресс сотрудников',
        ],
      },
      {
        tag: 'Недвижимость',
        title: 'Виртуальные туры по объектам',
        text: 'Клиент проходит по квартире или офису ещё до начала стройки: свободная камера, смена отделки, вид из окна. Продажи на этапе котлована становятся проще.',
        points: [
          'Туры по квартирам и офисам',
          'Смена отделки и меблировки',
          'Работает в браузере и на планшете',
        ],
      },
      {
        tag: 'B2B и выставки',
        title: 'Интерактивные презентации и стенды',
        text: 'Вместо слайдов — интерактивная 3D-модель вашего продукта на сенсорном экране. Посетитель стенда сам разбирает установку по узлам и запоминает вас.',
        points: [
          'Сенсорные киоски для выставок',
          'Разборные 3D-модели продукта',
          'Презентации для отдела продаж',
        ],
      },
    ],
    process: {
      eyebrow: 'Как мы работаем',
      title: 'От задачи до работающего продукта',
      steps: [
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
      ],
    },
    cta: {
      eyebrow: 'Обсудить проект',
      title: 'Расскажите о задаче — предложим решение и оценку',
      text: 'Напишите пару предложений о вашем продукте и о том, что хотите получить. Ответим с вариантами подхода и примерной вилкой по срокам.',
    },
  },
  automation: {
    hero: {
      eyebrow: 'Автоматизация бизнеса',
      title: 'Автоматизируем рутину: боты, ИИ-агенты и интеграции',
      subtitle:
        'Убираем ручную работу из бизнес-процессов: телеграм-боты с ИИ-агентами, встраивание ИИ в ваши продукты, парсинг данных, backend-разработка и мосты между 1С, CRM, сайтом и маркетплейсами.',
      tags: ['Телеграм-боты', 'ИИ-агенты', '1С', 'Маркетплейсы', 'API'],
    },
    heading: 'Услуги автоматизации',
    items: [
      {
        tag: 'Боты и агенты',
        title: 'Телеграм-боты с ИИ-агентами',
        text: 'Бот принимает заявки и вопросы, а ИИ-агент поверх него сам разбирает обращения: отвечает клиентам, классифицирует заявки, готовит документы. Люди подключаются только к сложным случаям.',
        points: [
          'Техподдержка клиентов 24/7',
          'Обработка и маршрутизация заявок',
          'Документооборот и уведомления',
        ],
      },
      {
        tag: 'ИИ в продукте',
        title: 'Встраивание ИИ в ваши продукты',
        text: 'Добавляем ИИ туда, где он реально экономит время: ассистенты внутри вашего сервиса, автоматизация рутины через агентов и MCP, умный поиск и генерация контента по вашим данным.',
        points: [
          'Ассистенты и чат-боты в продукте',
          'Агенты и MCP для автоматизации',
          'Работа с вашими данными и базами знаний',
        ],
      },
      {
        tag: 'Данные',
        title: 'Парсинг публичной информации',
        text: 'Собираем открытые данные из сайтов, каталогов и агрегаторов: цены конкурентов, ассортимент, отзывы, объявления. Отдаём в удобном виде — таблицы, база, API или регулярные отчёты.',
        points: [
          'Мониторинг цен и ассортимента',
          'Сбор отзывов и объявлений',
          'Регулярные выгрузки по расписанию',
        ],
      },
      {
        tag: 'Разработка',
        title: 'Backend-разработка',
        text: 'Проектируем и пишем серверную часть под вашу задачу: API для сайта и мобильного приложения, личные кабинеты, интеграции с внешними сервисами, отчётность и админки.',
        points: [
          'REST API и интеграции',
          'Личные кабинеты и админ-панели',
          'Надёжность, логирование, мониторинг',
        ],
      },
      {
        tag: '1С-мосты',
        title: 'Подключение 1С к вашим системам',
        text: 'Соединяем 1С с сайтом, CRM, складом и маркетплейсами, а внутренние системы — друг с другом. Остатки, цены, заказы и документы ходят между системами сами, без ручного переноса.',
        points: [
          'Сайт ↔ 1С: заказы, остатки, цены',
          'CRM с телефонией и 1С',
          'Обмен между внутренними системами',
        ],
      },
      {
        tag: 'Маркетплейсы',
        title: 'Интеграции с маркетплейсами',
        text: 'Синхронизируем остатки, цены и заказы с Wildberries, Ozon и Яндекс.Маркетом через их API. Товар закончился на складе — карточки обновились везде сами, без просрочек и штрафов.',
        points: [
          'Wildberries, Ozon, Яндекс.Маркет',
          'Синхронизация остатков и цен',
          'Автоматическая обработка заказов',
        ],
      },
    ],
    process: {
      eyebrow: 'Как мы работаем',
      title: 'От ручного процесса до автоматики',
      steps: [
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
      ],
    },
    cta: {
      eyebrow: 'Обсудить задачу',
      title: 'Опишите процесс — предложим, как его автоматизировать',
      text: 'Расскажите, какая рутина отнимает время: заявки, обмен с 1С, маркетплейсы, отчёты. Ответим со схемой решения и примерной оценкой по срокам.',
    },
  },
  project: {
    back: 'Все проекты',
    year: 'Год',
    platform: 'Платформа',
    status: 'Статус',
    stack: 'Стек',
    about: 'О проекте',
    mechanics: 'Механики',
    screenshots: 'Скриншоты',
    next: 'Следующий проект',
  },
  projects: {
    'economy-strategy': {
      name: 'Экономическая стратегия жизни',
      short: 'Экономическая стратегия',
      tagline: 'Пошаговый эмулятор экономической части жизни',
      status: 'Опубликовано',
      description: [
        'Небольшая игра, позволяющая почувствовать себя бизнесменом и подвергнуть испытаниям свою финансовую грамотность.',
        'Каждый ход — это месяц жизни: работа, расходы, вклады, кредиты, акции и собственный бизнес. Решения накапливаются, а ошибки приходится оплачивать из собственного бюджета.',
      ],
      shotAlts: [
        'Экран банка с котировками акций',
        'Экран инвестиционных предложений',
        'Экран образа жизни и расходов',
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
    },
    'city-builder': {
      name: 'Изометрический город',
      short: 'Город',
      tagline: 'Градостроительный симулятор в изометрии',
      status: 'В разработке',
      description: [
        'Спокойный градостроительный симулятор: вы разбиваете кварталы, тянете дороги и следите за тем, чтобы город не задохнулся от собственного роста.',
        'Никакой спешки и таймеров — только баланс между населением, производством и деньгами в городской казне.',
      ],
      shotAlts: ['Изометрический вид города ночью', 'Меню строительства зданий'],
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
    },
  },
}

export const dictionaries: Record<Locale, Dictionary> = { en, es, ru }
