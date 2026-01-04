import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Briefcase } from '@phosphor-icons/react'
import { getCurrentYear } from '@/utils/date'

gsap.registerPlugin(ScrollTrigger)

export type PortfolioCategory = 'all' | 'photography' | 'video' | 'events' | 'podcast' | 'brand'

export interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
  description: string
  client: string
  year: string
  size?: 'large' | 'medium' | 'small'
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: 'Urban Nights Campaign',
    category: 'photography',
    image: '/images/urban_nights.png',
    description: 'A striking fashion photography campaign that captured the essence of luxury streetwear in urban landscapes.',
    client: 'Luxe Street Apparel',
    year: getCurrentYear(),
    size: 'large'
  },
  {
    id: 2,
    title: 'Tech Product Launch',
    category: 'video',
    image: '/images/tech_launch.png',
    description: 'Cinematic commercial video production showcasing next-generation technology with stunning visual storytelling.',
    client: 'InnovateTech',
    year: getCurrentYear(),
    size: 'medium'
  },
  {
    id: 3,
    title: `Corporate Summit ${getCurrentYear()}`,
    category: 'events',
    image: '/images/event_summit.png',
    description: 'Comprehensive event coverage capturing the energy and insights of industry leaders.',
    client: 'Global Business Forum',
    year: getCurrentYear(),
    size: 'small'
  },
  {
    id: 4,
    title: 'Founders Talk Podcast',
    category: 'podcast',
    image: '/images/podcast_setup.png',
    description: 'Professional multi-camera podcast production bringing intimate conversations to life.',
    client: 'Startup Stories Media',
    year: getCurrentYear(),
    size: 'medium'
  },
  {
    id: 5,
    title: 'Luxury Auto Campaign',
    category: 'brand',
    image: '/images/luxury_car.png',
    description: 'Complete brand visual identity development showcasing automotive excellence.',
    client: 'Prestige Motors',
    year: '2023',
    size: 'small'
  },
  {
    id: 6,
    title: 'Studio Creative Session',
    category: 'photography',
    image: '/images/studio_session.png',
    description: 'A deep dive into experimental studio lighting and minimalist composition.',
    client: 'Vanguard Collective',
    year: '2023',
    size: 'large'
  }
]

export function Portfolio() {
  const [filter, setFilter] = useState<PortfolioCategory>('all')
  const sectionRef = useRef<HTMLElement>(null)

  const filteredItems = filter === 'all' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === filter)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.section-title', {
        scrollTrigger: {
          trigger: '.section-title',
          start: 'top 80%',
        },
        y: 100,
        opacity: 0,
        rotateX: -45,
        duration: 1.2,
        ease: 'power4.out'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="portfolio" className="py-32 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="section-title text-[clamp(3rem,10vw,8rem)] leading-[0.85] font-bold mb-8">
              SELECTED <br />
              <span className="stroke-text">WORKS</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-2">
            {['all', 'photography', 'video', 'brand', 'events'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as PortfolioCategory)}
                className={`text-[10px] font-bold tracking-[0.3em] uppercase py-2 transition-all border-b-2 ${
                  filter === cat ? 'border-foreground text-foreground' : 'border-transparent opacity-30 hover:opacity-60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <PortfolioCard key={item.id} item={item} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-24 flex justify-center">
          <Link to="/archive">
            <Button 
              className="group px-12 py-8 bg-foreground text-background font-bold tracking-[0.2em] rounded-none hover:opacity-90 transition-all duration-500"
            >
              VIEW FULL ARCHIVE <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function PortfolioCard({ item, index }: { item: PortfolioItem, index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 1.2, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={`group cursor-pointer ${
        item.size === 'large' ? 'md:col-span-2' : ''
      }`}
    >
      <div className={`relative overflow-hidden mb-6 bg-card border border-border ${
        item.size === 'large' ? 'aspect-[16/9]' : 'aspect-[4/5]'
      }`}>
        <motion.img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8 text-center">
          <p className="text-white text-sm leading-relaxed tracking-wider">
            {item.description}
          </p>
        </div>
      </div>
      
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="text-3xl font-bold mb-2 transition-colors tracking-widest whitespace-nowrap overflow-hidden">
            {item.title}
          </h3>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold tracking-[0.4em] opacity-40 uppercase">
              {item.client} &mdash; {item.year}
            </span>
          </div>
        </div>
        <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 shrink-0">
          <ArrowRight weight="bold" />
        </div>
      </div>
    </motion.div>
  )
}
