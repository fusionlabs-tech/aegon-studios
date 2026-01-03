import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

gsap.registerPlugin(ScrollTrigger)

export type PortfolioCategory = 'all' | 'photography' | 'video' | 'events' | 'podcast' | 'brand'

export interface PortfolioItem {
  id: number
  title: string
  category: PortfolioCategory
  image: string
  description: string
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: 'Urban Nights Campaign',
    category: 'photography',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=1000&fit=crop',
    description: 'Fashion photography for luxury streetwear brand'
  },
  {
    id: 2,
    title: 'Tech Product Launch',
    category: 'video',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=1000&fit=crop',
    description: 'Commercial video production'
  },
  {
    id: 3,
    title: 'Corporate Summit 2024',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=1000&fit=crop',
    description: 'Full event coverage and documentation'
  },
  {
    id: 4,
    title: 'Founders Talk Podcast',
    category: 'podcast',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=1000&fit=crop',
    description: 'Multi-camera podcast recording'
  },
  {
    id: 5,
    title: 'Luxury Auto Brand',
    category: 'brand',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop',
    description: 'Complete brand visual identity'
  },
  {
    id: 6,
    title: 'Editorial Portrait Series',
    category: 'photography',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1000&fit=crop',
    description: 'Studio portrait photography'
  },
  {
    id: 7,
    title: 'Music Video Production',
    category: 'video',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=1000&fit=crop',
    description: 'Cinematic music video shoot'
  },
  {
    id: 8,
    title: 'Fashion Week Backstage',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea3c0b01?w=800&h=1000&fit=crop',
    description: 'Behind-the-scenes event photography'
  },
  {
    id: 9,
    title: 'Tech Insights Podcast',
    category: 'podcast',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=1000&fit=crop',
    description: 'Professional podcast studio session'
  }
]

const categories = [
  { value: 'all' as const, label: 'All Work' },
  { value: 'photography' as const, label: 'Photography' },
  { value: 'video' as const, label: 'Video' },
  { value: 'events' as const, label: 'Events' },
  { value: 'podcast' as const, label: 'Podcast' },
  { value: 'brand' as const, label: 'Brand Work' }
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all')
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  const filteredItems = activeCategory === 'all'
    ? portfolioData
    : portfolioData.filter(item => item.category === activeCategory)

  useEffect(() => {
    if (!titleRef.current) return

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        }
      }
    )
  }, [])

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2
          ref={titleRef}
          className="text-[clamp(3rem,8vw,6rem)] leading-none font-bold tracking-tight mb-4 font-display text-center"
        >
          OUR WORK
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          A showcase of our creative excellence across various mediums
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <motion.button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge
                variant={activeCategory === cat.value ? 'default' : 'outline'}
                className={`px-6 py-2 text-sm font-semibold tracking-wide cursor-pointer transition-all duration-300 ${
                  activeCategory === cat.value
                    ? 'bg-accent text-accent-foreground border-accent shadow-lg'
                    : 'hover:border-accent/50'
                }`}
              >
                {cat.label}
              </Badge>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-card">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <Badge className="w-fit mb-3 bg-accent text-accent-foreground border-0 font-semibold">
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </Badge>
                      <h3 className="text-2xl font-display font-bold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
