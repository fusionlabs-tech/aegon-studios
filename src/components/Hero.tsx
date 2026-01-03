import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ArrowDown, Play } from '@phosphor-icons/react'

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  
  useEffect(() => {
    if (!titleRef.current) return
    
    const letters = titleRef.current.querySelectorAll('.letter')
    
    gsap.fromTo(
      letters,
      { opacity: 0, y: 100, rotateX: -90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.03,
        ease: 'power4.out',
        delay: 0.5,
      }
    )

    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%23000' width='1920' height='1080'/%3E%3C/svg%3E"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
            type="video/mp4"
          />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-primary/60" />
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 4px)`
        }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-bold tracking-widest text-white uppercase">Premium Media Production</span>
          </div>
        </motion.div>

        <h1
          ref={titleRef}
          className="text-[clamp(4rem,15vw,18rem)] leading-[0.85] font-bold tracking-tighter mb-8 font-display text-white drop-shadow-2xl"
          style={{ perspective: '1000px' }}
        >
          {'AEGON'.split('').map((letter, i) => (
            <span 
              key={i} 
              className="letter inline-block" 
              style={{ 
                display: 'inline-block',
                transformStyle: 'preserve-3d'
              }}
            >
              {letter}
            </span>
          ))}
          <br />
          {'STUDIO'.split('').map((letter, i) => (
            <span 
              key={i + 5} 
              className="letter inline-block" 
              style={{ 
                display: 'inline-block',
                transformStyle: 'preserve-3d'
              }}
            >
              {letter}
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="max-w-3xl mb-12"
        >
          <p className="text-2xl md:text-4xl text-white font-light leading-tight tracking-wide">
            Crafting <span className="font-bold text-accent">cinematic stories</span> through photography, videography, and immersive experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-wrap gap-4"
        >
          <motion.button
            onClick={scrollToPortfolio}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-accent text-primary rounded-full font-bold tracking-widest hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 text-base"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW OUR WORK
            <ArrowDown weight="bold" size={20} className="group-hover:translate-y-1 transition-transform" />
          </motion.button>

          <motion.button
            onClick={() => document.getElementById('showreel')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white/10 text-white border-2 border-white/30 backdrop-blur-md rounded-full font-bold tracking-widest hover:bg-white hover:text-primary hover:border-white transition-all duration-300 text-base"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play weight="fill" size={20} />
            WATCH SHOWREEL
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="grid grid-cols-3 gap-8 md:gap-16 mt-24 max-w-3xl border-t border-white/20 pt-12"
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
              transition={{ duration: 0.6, delay: 2.4 + index * 0.15 }}
              className="text-left"
            >
              <div className="text-4xl md:text-6xl font-bold font-display text-white mb-1 drop-shadow-lg">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-white/70 font-medium tracking-wider uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="text-xs tracking-widest uppercase font-bold">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/70 to-transparent" />
        </div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
