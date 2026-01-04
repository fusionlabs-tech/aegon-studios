import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Tag } from '@phosphor-icons/react'

gsap.registerPlugin(ScrollTrigger)

export type PortfolioCategory = 'photography' | 'video' | 'events' | 'podcast' | 'brand'

export interface PortfolioItem {
  id: number
  title: string
  category: PortfolioCategory
  image: string
  description: string
  client: string
  year: string
  services: string[]
  challenge: string
  result: string
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: 'Urban Nights Campaign',
    category: 'photography',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&h=1200&fit=crop&q=90',
    description: 'A striking fashion photography campaign that captured the essence of luxury streetwear in urban landscapes.',
    client: 'Luxe Street Apparel',
    year: '2024',
    services: ['Fashion Photography', 'Editorial Shooting', 'Post-Production'],
    challenge: 'Create compelling visuals that bridge high fashion with street culture authenticity.',
    result: '300% increase in social engagement and sold-out collection launch.'
  },
  {
    id: 2,
    title: 'Tech Product Launch',
    category: 'video',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1600&h=1200&fit=crop&q=90',
    description: 'Cinematic commercial video production showcasing next-generation technology with stunning visual storytelling.',
    client: 'InnovateTech',
    year: '2024',
    services: ['Commercial Production', 'Motion Graphics', 'Sound Design'],
    challenge: 'Translate complex technology into emotionally resonant visual narratives.',
    result: '5M+ views across platforms and successful product launch campaign.'
  },
  {
    id: 3,
    title: 'Corporate Summit 2024',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&h=1200&fit=crop&q=90',
    description: 'Comprehensive event coverage capturing the energy and insights of industry leaders and innovators.',
    client: 'Global Business Forum',
    year: '2024',
    services: ['Event Coverage', 'Multi-Camera Setup', 'Same-Day Edits'],
    challenge: 'Deliver real-time content while maintaining cinematic quality standards.',
    result: 'Complete documentation delivered within 24 hours of event close.'
  },
  {
    id: 4,
    title: 'Founders Talk Podcast',
    category: 'podcast',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1600&h=1200&fit=crop&q=90',
    description: 'Professional multi-camera podcast production bringing intimate conversations to life with broadcast quality.',
    client: 'Startup Stories Media',
    year: '2024',
    services: ['Podcast Recording', 'Audio Engineering', 'Video Production'],
    challenge: 'Create an intimate yet professional atmosphere for genuine conversations.',
    result: 'Top 10 business podcast with consistent weekly releases.'
  },
  {
    id: 5,
    title: 'Luxury Auto Campaign',
    category: 'brand',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&h=1200&fit=crop&q=90',
    description: 'Complete brand visual identity development showcasing automotive excellence through photography and film.',
    client: 'Prestige Motors',
    year: '2023',
    services: ['Brand Photography', 'Video Production', 'Creative Direction'],
    challenge: 'Capture the essence of luxury and performance in every frame.',
    result: 'Brand awareness increased by 250% in target demographics.'
  }
]

export function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedWork, setSelectedWork] = useState<PortfolioItem | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const items = portfolioData.length
    const scrollHeight = items * window.innerHeight

    portfolioData.forEach((_, index) => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: `top+${index * window.innerHeight} top`,
        end: `top+${(index + 1) * window.innerHeight} top`,
        onEnter: () => setActiveIndex(index),
        onEnterBack: () => setActiveIndex(index),
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const activeWork = portfolioData[activeIndex]

  return (
    <>
      <section id="portfolio" className="relative bg-background">
        <div
          ref={containerRef}
          style={{ height: `${portfolioData.length * 100}vh` }}
          className="relative"
        >
          <div className="sticky top-0 h-screen w-full overflow-hidden">
            <div className="absolute inset-0 grid lg:grid-cols-2 gap-0">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="relative w-full h-full overflow-hidden bg-black"
              >
                <motion.div
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
                  className="w-full h-full"
                >
                  <img
                    src={activeWork.image}
                    alt={activeWork.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent lg:bg-gradient-to-r lg:from-black/40 lg:to-transparent"
                />

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute top-8 left-8 z-10"
                >
                  <div className="text-white/40 font-display text-sm md:text-base tracking-[0.3em] mb-2">
                    CASE STUDY
                  </div>
                  <div className="text-white font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
                    {String(activeIndex + 1).padStart(2, '0')}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute bottom-8 left-8 right-8 lg:hidden"
                >
                  <Badge className="mb-4 bg-white text-primary border-0 font-semibold tracking-wider">
                    {activeWork.category.toUpperCase()}
                  </Badge>
                  <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-3 leading-tight">
                    {activeWork.title}
                  </h3>
                  <p className="text-white/80 text-base md:text-lg mb-4 max-w-lg">
                    {activeWork.description}
                  </p>
                  <Button
                    onClick={() => setSelectedWork(activeWork)}
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 font-bold tracking-wider"
                  >
                    VIEW CASE STUDY
                    <ArrowRight weight="bold" className="ml-2" />
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                key={`details-${activeIndex}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="hidden lg:flex flex-col justify-center px-12 xl:px-20 bg-background"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Badge className="mb-6 bg-primary text-primary-foreground border-0 font-semibold tracking-wider text-sm">
                    {activeWork.category.toUpperCase()}
                  </Badge>
                  
                  <h3 className="text-6xl xl:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
                    {activeWork.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-lg xl:text-xl mb-8 leading-relaxed max-w-xl">
                    {activeWork.description}
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-8 pb-8 border-b border-border">
                    <div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                        <Tag weight="bold" size={16} />
                        <span className="font-semibold tracking-wider">CLIENT</span>
                      </div>
                      <div className="text-foreground font-semibold text-lg">
                        {activeWork.client}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                        <Calendar weight="bold" size={16} />
                        <span className="font-semibold tracking-wider">YEAR</span>
                      </div>
                      <div className="text-foreground font-semibold text-lg">
                        {activeWork.year}
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="text-sm font-semibold tracking-wider text-muted-foreground mb-3">
                      SERVICES
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeWork.services.map((service, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="px-4 py-2 text-sm border-border"
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="text-sm font-semibold tracking-wider text-muted-foreground mb-3">
                      THE CHALLENGE
                    </div>
                    <p className="text-foreground leading-relaxed">
                      {activeWork.challenge}
                    </p>
                  </div>

                  <div className="mb-10">
                    <div className="text-sm font-semibold tracking-wider text-muted-foreground mb-3">
                      THE RESULT
                    </div>
                    <p className="text-foreground font-semibold leading-relaxed">
                      {activeWork.result}
                    </p>
                  </div>

                  <Button
                    onClick={() => setSelectedWork(activeWork)}
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold tracking-wider group"
                  >
                    VIEW FULL CASE STUDY
                    <ArrowRight weight="bold" className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col gap-3">
              {portfolioData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    window.scrollTo({
                      top: containerRef.current!.offsetTop + (index * window.innerHeight),
                      behavior: 'smooth'
                    })
                  }}
                  className="group relative"
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'bg-white w-12 h-2'
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-semibold">
                      {portfolioData[index].title}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedWork && (
        <WorkDetailsModal work={selectedWork} onClose={() => setSelectedWork(null)} />
      )}
    </>
  )
}

function WorkDetailsModal({ work, onClose }: { work: PortfolioItem; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/95 z-50 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="min-h-screen py-20 px-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-6xl mx-auto">
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors mb-8 font-semibold tracking-wider text-sm flex items-center gap-2"
          >
            ← BACK TO PORTFOLIO
          </button>

          <Badge className="mb-6 bg-white text-primary border-0 font-semibold tracking-wider">
            {work.category.toUpperCase()}
          </Badge>

          <h2 className="text-6xl md:text-8xl font-display font-bold text-white mb-6 leading-tight">
            {work.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-white/60 text-sm font-semibold tracking-wider mb-2">CLIENT</div>
              <div className="text-white text-xl font-semibold">{work.client}</div>
            </div>
            <div>
              <div className="text-white/60 text-sm font-semibold tracking-wider mb-2">YEAR</div>
              <div className="text-white text-xl font-semibold">{work.year}</div>
            </div>
            <div>
              <div className="text-white/60 text-sm font-semibold tracking-wider mb-2">CATEGORY</div>
              <div className="text-white text-xl font-semibold">{work.category}</div>
            </div>
          </div>

          <img
            src={work.image}
            alt={work.title}
            className="w-full h-[60vh] object-cover rounded-lg mb-12"
          />

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-white text-2xl font-display font-bold mb-4">The Challenge</h3>
              <p className="text-white/80 leading-relaxed text-lg">{work.challenge}</p>
            </div>
            <div>
              <h3 className="text-white text-2xl font-display font-bold mb-4">The Result</h3>
              <p className="text-white font-semibold leading-relaxed text-lg">{work.result}</p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-white text-2xl font-display font-bold mb-6">Services Provided</h3>
            <div className="flex flex-wrap gap-3">
              {work.services.map((service, idx) => (
                <Badge
                  key={idx}
                  className="px-6 py-3 text-base bg-white/10 text-white border-white/20"
                >
                  {service}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
