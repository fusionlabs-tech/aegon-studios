import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const clients = [
  'Nike',
  'Adidas',
  'Apple',
  'Samsung',
  'Sony',
  'Netflix',
  'Spotify',
  'Tesla',
  'Amazon',
  'Microsoft',
  'Google',
  'Adobe'
]

export function Clients() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!marqueeRef.current) return

    const marquee = marqueeRef.current
    const items = marquee.querySelectorAll('.marquee-item')
    const itemWidth = items[0]?.getBoundingClientRect().width || 0
    const totalWidth = itemWidth * items.length

    gsap.to(marquee, {
      x: -totalWidth,
      duration: 30,
      ease: 'none',
      repeat: -1,
    })
  }, [])

  return (
    <section className="py-24 bg-primary overflow-hidden">
      <div className="mb-12 text-center">
        <h2 className="text-[clamp(2.5rem,6vw,4rem)] leading-none font-bold tracking-tight font-display text-primary-foreground">
          TRUSTED BY
        </h2>
        <p className="text-primary-foreground/70 text-lg mt-4">
          Collaborating with industry-leading brands
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary to-transparent z-10" />
        
        <div className="flex overflow-hidden">
          <div ref={marqueeRef} className="flex gap-16 pr-16">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="marquee-item flex-shrink-0 text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300"
              >
                <span className="text-4xl md:text-5xl font-display font-bold tracking-wider whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
