import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Camera, VideoCamera, Microphone, Calendar, Buildings, Sparkle } from '@phosphor-icons/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Camera,
    title: 'Photography',
    description: 'Stunning visuals that capture your brand essence through editorial, product, and lifestyle photography'
  },
  {
    icon: VideoCamera,
    title: 'Videography',
    description: 'Cinematic storytelling with commercial videos, music videos, and documentary-style content'
  },
  {
    icon: Buildings,
    title: 'Studio Sessions',
    description: 'Professional studio environment with state-of-the-art equipment for controlled shoots'
  },
  {
    icon: Calendar,
    title: 'Event Coverage',
    description: 'Comprehensive documentation of your events with photo and video coverage'
  },
  {
    icon: Microphone,
    title: 'Podcast Production',
    description: 'Multi-camera podcast recording with professional audio and video post-production'
  },
  {
    icon: Sparkle,
    title: 'Brand Content',
    description: 'Complete content creation services to elevate your brand across all platforms'
  }
]

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardsRef.current) return

    const cards = cardsRef.current.querySelectorAll('.service-card')

    gsap.fromTo(
      cards,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 70%',
        }
      }
    )
  }, [])

  return (
    <motion.section 
      ref={sectionRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="py-24 bg-secondary/30"
    >
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-[clamp(3rem,8vw,6rem)] leading-none font-bold tracking-tight mb-4 font-display"
          >
            SERVICES
          </h2>
          <p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Comprehensive media production services tailored to bring your creative vision to life
          </p>
        </motion.div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="service-card"
              >
                <Card className="h-full border-2 hover:border-primary transition-all duration-500 bg-background shadow-lg hover:shadow-2xl group">
                  <CardHeader className="pb-4">
                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/5 group-hover:bg-primary transition-colors duration-500">
                      <Icon 
                        size={32} 
                        weight="duotone" 
                        className="text-primary group-hover:text-primary-foreground transition-colors duration-500"
                      />
                    </div>
                    <CardTitle className="text-2xl font-display tracking-tight">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
