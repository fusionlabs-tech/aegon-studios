import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ArrowDown, Play, ArrowRight } from '@phosphor-icons/react'
import { ShowreelLightbox } from './ShowreelLightbox'
import Magnetic from './ui/magnetic'
import { getCurrentYear } from '@/utils/date'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const title1Ref = useRef<HTMLSpanElement>(null)
  const title2Ref = useRef<HTMLSpanElement>(null)
  
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, -100])
  const y2 = useTransform(scrollY, [0, 500], [0, 100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Left Column Animations
    tl.fromTo('.hero-badge', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    )
    .fromTo('.hero-desc',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.8"
    )
    .fromTo('.hero-cta', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1 }, 
      "-=0.8"
    )
    .fromTo('.hero-stat',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
      "-=0.8"
    )

    // Right Column Title Animation (Cinematic Reveal)
    tl.fromTo('.hero-title',
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, ease: "power4.out" },
      0.5 // Start at same time as badge
    )
    .fromTo('.hero-subtitle',
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, ease: "power4.out" },
      "-=1.2"
    )
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 md:pt-40"
    >
      {/* Background Cinematic Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-foreground/5 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-foreground/5 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Abstract Lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center"
      >
        {/* Top: Monumental Title */}
        <div className="flex flex-col items-center mb-12 relative overflow-hidden">
           <div className="relative z-10">
             <div className="overflow-hidden">
              <span className="hero-title block text-[clamp(5rem,15vw,18rem)] leading-[0.8] font-sans font-thin tracking-tighter text-foreground">
                AEGON
              </span>
             </div>
             <div className="overflow-hidden">
              <span className="hero-subtitle block text-[clamp(1.5rem,4vw,4rem)] leading-none font-bold tracking-[0.6em] opacity-20">
                STUDIOS
              </span>
             </div>
           </div>
        </div>

        {/* Middle: Content */}
        <div className="flex flex-col items-center max-w-3xl">
          <div className="mb-8 overflow-hidden">
             <motion.div className="hero-badge flex items-center gap-3 px-4 py-1.5 rounded-full border border-border bg-foreground/5 backdrop-blur-sm w-fit">
              <span className="w-2 h-2 rounded-full bg-foreground animate-ping" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-70">Aegon Studios &copy; {getCurrentYear()}</span>
            </motion.div>
          </div>

          <div className="mb-12 overflow-hidden">
            <p className="hero-desc text-xl md:text-3xl opacity-80 font-light leading-relaxed tracking-wide">
              Crafting <span className="font-medium">cinematic narratives</span> for the world's most ambitious brands.
            </p>
          </div>

          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <ShowreelLightbox>
              <Magnetic>
                <button className="group relative flex items-center gap-4 px-10 py-5 bg-foreground text-background font-bold tracking-widest text-sm rounded-none overflow-hidden transition-all duration-500 active:scale-95">
                  <span className="relative z-10 flex items-center gap-3">
                    <Play weight="fill" /> WATCH SHOWREEL
                  </span>
                </button>
              </Magnetic>
            </ShowreelLightbox>

            <Magnetic>
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-3 px-6 py-5 opacity-60 hover:opacity-100 font-bold tracking-widest text-sm transition-opacity"
              >
                EXPLORE WORK <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Magnetic>
          </div>

          {/* Bottom: Stats */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            {[
              { label: 'PROJECTS', value: '500+' },
              { label: 'CLIENTS', value: '150+' },
              { label: 'AWARDS', value: '12' }
            ].map((stat, i) => (
              <div key={i} className="hero-stat flex flex-col items-center">
                <span className="text-xs font-bold tracking-widest opacity-30 mb-2 uppercase">{stat.label}</span>
                <span className="text-4xl font-display font-bold transition-colors duration-500">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating Stats */}


      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-4 group cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">SCROLL TO EXPLORE</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-foreground/20 to-transparent group-hover:from-foreground transition-colors" />
      </motion.div>
    </section>
  )
}
