import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Camera, VideoCamera, Microphone, Calendar, Buildings, Sparkle } from '@phosphor-icons/react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Camera,
    title: 'Photography',
    description: 'Stunning visuals that capture your brand essence through editorial, product, and lifestyle photography',
    number: '01'
  },
  {
    icon: VideoCamera,
    title: 'Videography',
    description: 'Cinematic storytelling with commercial videos, music videos, and documentary-style content',
    number: '02'
  },
  {
    icon: Buildings,
    title: 'Studio Sessions',
    description: 'Professional studio environment with state-of-the-art equipment for controlled shoots',
    number: '03'
  },
  {
    icon: Calendar,
    title: 'Event Coverage',
    description: 'Comprehensive documentation of your events with photo and video coverage',
    number: '04'
  },
  {
    icon: Microphone,
    title: 'Podcast Production',
    description: 'Multi-camera podcast recording with professional audio and video post-production',
    number: '05'
  },
  {
    icon: Sparkle,
    title: 'Brand Content',
    description: 'Complete content creation services to elevate your brand across all platforms',
    number: '06'
  }
]

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const titleY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  useEffect(() => {
    if (!sectionRef.current) return

    const serviceItems = sectionRef.current.querySelectorAll('.service-item')

    serviceItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { 
          opacity: 0, 
          y: 100,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1,
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        const triggerElement = trigger.vars.trigger
        if (triggerElement && typeof triggerElement !== 'string' && 'closest' in triggerElement) {
          if ((triggerElement as Element).closest('#services-section')) {
            trigger.kill()
          }
        }
      })
    }
  }, [])

  return (
    <motion.section 
      id="services-section"
      ref={sectionRef}
      className="relative py-32 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div 
          ref={titleRef}
          style={{ opacity: titleOpacity, y: titleY }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <div className="text-muted-foreground font-semibold tracking-[0.3em] mb-6 text-sm">
              WHAT WE OFFER
            </div>
            <h2 className="text-[clamp(4rem,12vw,10rem)] leading-none font-bold tracking-tight font-display mb-8">
              SERVICES
            </h2>
            <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive media production services tailored to bring your creative vision to life
            </p>
          </motion.div>
        </motion.div>

        <div className="max-w-7xl mx-auto space-y-0">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0
            
            return (
              <motion.div
                key={service.title}
                className="service-item relative border-t border-border/40 last:border-b py-12 md:py-16 group"
              >
                <div className={`grid md:grid-cols-12 gap-8 items-center ${isEven ? '' : 'md:grid-flow-dense'}`}>
                  <div className={`md:col-span-2 ${isEven ? '' : 'md:col-start-11 md:text-right'}`}>
                    <motion.div 
                      className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-primary/5 group-hover:bg-primary transition-all duration-700 group-hover:scale-110 group-hover:rotate-6"
                    >
                      <Icon 
                        size={48} 
                        weight="duotone" 
                        className="text-primary group-hover:text-primary-foreground transition-colors duration-700"
                      />
                    </motion.div>
                  </div>

                  <div className={`md:col-span-8 ${isEven ? 'md:col-start-3' : 'md:col-start-3 md:text-right'}`}>
                    <motion.div className="space-y-4">
                      <div className="flex items-baseline gap-4 justify-start">
                        <span className="text-[8rem] md:text-[12rem] font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary/20 to-primary/5 leading-none group-hover:from-primary/40 group-hover:to-primary/20 transition-all duration-700">
                          {service.number}
                        </span>
                      </div>
                      
                      <h3 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-none tracking-tight group-hover:text-primary transition-colors duration-500">
                        {service.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl">
                        {service.description}
                      </p>
                    </motion.div>
                  </div>
                </div>

                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  initial={false}
                />
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </motion.section>
  )
}
