import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ArrowDown, Play } from '@phosphor-icons/react'

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (!titleRef.current) return
    
    const letters = titleRef.current.querySelectorAll('.letter')
    
    gsap.fromTo(
      letters,
      { 
        opacity: 0, 
        y: 150, 
        rotateX: -90,
        scale: 0.8,
        filter: 'blur(20px)',
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.8,
        stagger: 0.05,
        ease: 'power4.out',
        delay: 0.3,
      }
    )

    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 2, ease: 'power3.out' }
      )
    }
  }, [])

  const scrollToShowreel = () => {
    document.getElementById('showreel')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[oklch(0.10_0_0)]" />
        
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 3px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 3px)
          `
        }} />
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/3 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 relative z-10 w-full max-w-full overflow-hidden pt-24 md:pt-32">
        <div className="flex flex-col items-center justify-center text-center max-w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8 md:mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-white uppercase">Premium Media Production</span>
            </div>
          </motion.div>

          <h1
            ref={titleRef}
            className="stroke-text text-[clamp(4rem,15vw,28rem)] leading-[0.85] font-bold tracking-[-0.02em] font-display px-4 sm:px-6 md:px-8 w-full"
            style={{ perspective: '1000px', wordBreak: 'keep-all' }}
          >
            {'AEGON'.split('').map((letter, i) => (
              <span 
                key={i} 
                className="letter inline-block" 
                style={{ 
                  display: 'inline-block',
                  transformStyle: 'preserve-3d',
                }}
              >
                {letter}
              </span>
            ))}
            <br />
            {'STUDIOS'.split('').map((letter, i) => (
              <span 
                key={i + 5} 
                className="letter inline-block" 
                style={{ 
                  display: 'inline-block',
                  transformStyle: 'preserve-3d',
                }}
              >
                {letter}
              </span>
            ))}
          </h1>

          <div 
            ref={subtitleRef}
            className="max-w-2xl mx-auto mt-6 md:mt-8 mb-8 md:mb-12 px-4"
          >
            <p className="text-lg md:text-2xl text-white/80 font-light leading-relaxed tracking-wide">
              Crafting <span className="font-semibold text-white">cinematic stories</span> through photography, videography, and immersive experiences
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center items-center px-4"
          >
            <motion.button
              onClick={scrollToShowreel}
              className="group inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-white text-primary rounded-full font-bold tracking-[0.15em] hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 text-sm md:text-base w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play weight="fill" size={20} />
              WATCH SHOWREEL
            </motion.button>

            <motion.button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-white/10 text-white border border-white/30 backdrop-blur-sm rounded-full font-bold tracking-[0.15em] hover:bg-white hover:text-primary hover:border-white transition-all duration-300 text-sm md:text-base w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              VIEW OUR WORK
              <ArrowDown weight="bold" size={20} className="group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.3 }}
            className="grid grid-cols-3 gap-6 md:gap-12 mt-16 md:mt-24 mb-12 md:mb-16 max-w-2xl mx-auto border-t border-white/10 pt-8 md:pt-12 px-4"
          >
            {[
              { number: '500+', label: 'Projects' },
              { number: '150+', label: 'Clients' },
              { number: '8+', label: 'Years' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.5 + index * 0.15 }}
                className="text-center"
              >
                <div className="text-3xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-1 drop-shadow-lg">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-white/60 font-medium tracking-[0.15em] uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.8, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[20]"
      >
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs tracking-[0.2em] uppercase font-bold">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary via-primary to-transparent z-[15] pointer-events-none" />
    </section>
  )
}
