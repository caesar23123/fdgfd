'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { ArrowDown } from 'lucide-react'
import { TriangleField } from '@/components/triangle-field'

const arts = [
  { src: '/art/inventor.png', alt: 'Изобретатель за чертежами', pos: 'left-[4%] top-[26%]', size: 'w-28 sm:w-36 lg:w-48', depth: 26 },
  { src: '/art/desk.png', alt: 'Рабочий стол разработчика', pos: 'left-[16%] bottom-[6%]', size: 'w-24 sm:w-32 lg:w-40', depth: 40 },
  { src: '/art/coins.png', alt: 'Золотые монеты', pos: 'right-[5%] top-[30%]', size: 'w-28 sm:w-36 lg:w-44', depth: 32 },
  { src: '/art/workshop.png', alt: 'Мастерская', pos: 'right-[15%] bottom-[8%]', size: 'w-24 sm:w-32 lg:w-40', depth: 20 },
]

export function Hero() {
  const layerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const layer = layerRef.current
    if (!layer) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    const target = { x: 0, y: 0 }
    const current = { x: 0, y: 0 }

    const tick = () => {
      current.x += (target.x - current.x) * 0.06
      current.y += (target.y - current.y) * 0.06
      const items = layer.querySelectorAll<HTMLElement>('[data-depth]')
      items.forEach((el) => {
        const d = Number(el.dataset.depth ?? 20)
        el.style.transform = `translate3d(${current.x * d}px, ${current.y * d}px, 0)`
      })
      raf = requestAnimationFrame(tick)
    }

    const onMove = (e: PointerEvent) => {
      target.x = (e.clientX / window.innerWidth) * 2 - 1
      target.y = (e.clientY / window.innerHeight) * 2 - 1
    }

    window.addEventListener('pointermove', onMove)
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pt-28 pb-20">
      <TriangleField />

      <div ref={layerRef} className="pointer-events-none absolute inset-0 hidden sm:block">
        {arts.map((art, i) => (
          <div
            key={art.src}
            data-depth={art.depth}
            className={`absolute ${art.pos} ${art.size} will-change-transform`}
          >
            <div className="animate-float-soft overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50">
              <Image
                src={art.src || '/placeholder.svg'}
                alt={art.alt}
                width={400}
                height={400}
                priority={i === 0}
                className="size-full object-cover opacity-80"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="glass flex size-20 items-center justify-center rounded-2xl border border-primary/40 shadow-2xl shadow-black/40 sm:size-24">
          <span className="text-4xl font-medium tracking-tight text-primary sm:text-5xl">YS</span>
        </div>

        <h1 className="mt-8 text-4xl font-medium tracking-tight text-balance sm:text-6xl lg:text-7xl">
          Мы — команда Юлиана
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
          Разрабатываем игры, а ещё интерактивные решения и автоматизацию для бизнеса. Ниже —
          наши проекты.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
          <span className="rounded-full border border-border px-3 py-1">Unity</span>
          <span className="rounded-full border border-border px-3 py-1">C#</span>
          <span className="rounded-full border border-border px-3 py-1">Game design</span>
          <span className="rounded-full border border-border px-3 py-1">Android</span>
        </div>

        <a
          href="#projects"
          onClick={(e) => {
            const target = document.getElementById('projects')
            if (!target) return
            e.preventDefault()
            const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
            target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
          }}
          className="mt-12 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-xs tracking-widest text-muted-foreground uppercase transition-colors hover:border-primary/60 hover:text-foreground"
        >
          Проекты
          <ArrowDown className="size-3.5" />
        </a>
      </div>
    </section>
  )
}
