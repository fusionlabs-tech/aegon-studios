import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ArrowDown } from '@phosphor-icons/react'

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  
  useEffect(() => {
    if (!titleRef.current) return
    
    const letters = titleRef.current.querySelectorAll('.letter')
    
    gsap.fromTo(
      letters,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power3.out',
        delay: 0.3,
      }
    )
  }, [])

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary to-background overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, oklch(0.20 0.01 264 / 0.03) 2px, oklch(0.20 0.01 264 / 0.03) 4px)`
        }} />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium tracking-wide text-foreground">Premium Media Production</span>
          </div>
        </motion.div>

        <h1
          ref={titleRef}
          className="text-[clamp(3.5rem,12vw,10rem)] leading-[0.9] font-bold tracking-tight mb-8 font-display"
        >
          {'AEGON STUDIO'.split('').map((letter, i) => (
            <span key={i} className="letter inline-block" style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}>
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Crafting cinematic stories through photography, videography, and immersive experiences
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.button
            onClick={scrollToPortfolio}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-full font-bold tracking-wider hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW OUR WORK
            <ArrowDown weight="bold" className="group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}
