'use client'

import { useEffect, useRef } from 'react'

type Tri = {
  x: number
  y: number
  size: number
  rot: number
  spin: number
  depth: number
  alpha: number
  drift: number
}

export function TriangleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let dpr = 1
    let tris: Tri[] = []
    let raf = 0
    let t = 0

    const pointer = { x: 0, y: 0 }
    const eased = { x: 0, y: 0 }

    const build = () => {
      const count = width < 640 ? 9 : width < 1100 ? 14 : 20
      tris = Array.from({ length: count }, () => {
        const depth = 0.25 + Math.random() * 0.95
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          size: 40 + Math.random() * 190 * depth,
          rot: Math.random() * Math.PI * 2,
          spin: (Math.random() - 0.5) * 0.0007,
          depth,
          alpha: 0.06 + Math.random() * 0.16,
          drift: Math.random() * Math.PI * 2,
        }
      })
    }

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      build()
    }

    const draw = () => {
      t += 1
      eased.x += (pointer.x - eased.x) * 0.045
      eased.y += (pointer.y - eased.y) * 0.045

      ctx.clearRect(0, 0, width, height)

      for (const tri of tris) {
        const px = eased.x * 90 * tri.depth
        const py = eased.y * 70 * tri.depth
        const wobble = reduced ? 0 : Math.sin(t * 0.004 + tri.drift) * 12 * tri.depth
        const rot = tri.rot + (reduced ? 0 : t * tri.spin) + eased.x * 0.25 * tri.depth

        const cx = tri.x + px
        const cy = tri.y + py + wobble
        const r = tri.size / 2

        ctx.save()
        ctx.translate(cx, cy)
        ctx.rotate(rot)
        ctx.beginPath()
        for (let i = 0; i < 3; i++) {
          const a = (i / 3) * Math.PI * 2 - Math.PI / 2
          const x = Math.cos(a) * r
          const y = Math.sin(a) * r
          if (i === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.closePath()

        const grad = ctx.createLinearGradient(-r, -r, r, r)
        grad.addColorStop(0, `rgba(110, 231, 232, ${tri.alpha})`)
        grad.addColorStop(1, `rgba(56, 132, 158, ${tri.alpha * 0.35})`)
        ctx.fillStyle = grad
        ctx.fill()

        ctx.lineWidth = 1
        ctx.strokeStyle = `rgba(160, 240, 240, ${tri.alpha * 0.9})`
        ctx.stroke()
        ctx.restore()
      }

      raf = requestAnimationFrame(draw)
    }

    const onPointerMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPointerMove)
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_-10%,oklch(0.28_0.05_215)_0%,oklch(0.18_0.02_240)_45%,oklch(0.14_0.004_250)_100%)]" />
      <canvas ref={canvasRef} className="absolute inset-0 size-full blur-[2px]" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_45%,transparent_0%,oklch(0.14_0.004_250/0.75)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  )
}
