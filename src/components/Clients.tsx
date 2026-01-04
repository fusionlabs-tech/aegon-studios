import { useRef, useEffect } from 'react'
import gsap from 'gsap'

const clients = [
  'Netflix', 'Tesla', 'Apple', 'Nike', 'Adidas', 'Samsung', 'Sony', 'Spotify', 'Amazon', 'Adobe', 'Microsoft', 'Google'
]

export function Clients() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    const totalWidth = marquee.scrollWidth / 2

    gsap.to(marquee, {
      x: -totalWidth,
      duration: 40,
      ease: 'none',
      repeat: -1,
      runBackwards: false
    })
  }, [])

  return (
    <section className="py-20 bg-background border-y border-border overflow-hidden">
      <div className="flex items-center">
        <div ref={marqueeRef} className="flex whitespace-nowrap gap-20 items-center">
          {[...clients, ...clients].map((client, i) => (
            <div key={i} className="flex items-center gap-20">
               <span className="text-[clamp(2rem,5vw,4rem)] font-display font-bold opacity-10 hover:opacity-40 transition-opacity uppercase tracking-widest cursor-default">
                {client}
              </span>
              <div className="w-2 h-2 rounded-full bg-foreground/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
