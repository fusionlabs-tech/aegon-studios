import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Tag } from '@phosphor-icons/react'
import { ZigzagDivider } from '@/components/ZigzagDivider'

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

const featuredPortfolioData: PortfolioItem[] = [
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
  }
]

export function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedWork, setSelectedWork] = useState<PortfolioItem | null>(null)
  const [showAllProjects, setShowAllProjects] = useState(false)

  useEffect(() => {
    if (!containerRef.current || !stickyRef.current) return

    const numWorks = featuredPortfolioData.length
    
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: `+=${(numWorks - 1) * window.innerHeight * 1.8}`,
      pin: stickyRef.current,
      pinSpacing: true,
      anticipatePin: 1,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress
        const newIndex = Math.min(
          Math.floor(progress * numWorks),
          numWorks - 1
        )
        setActiveIndex(newIndex)
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const activeWork = featuredPortfolioData[activeIndex]

  return (
    <>
      <div className="bg-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center py-8"
        >
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] leading-none font-bold tracking-tight font-display text-foreground">
            CASE STUDIES
          </h2>
        </motion.div>
        <ZigzagDivider color="hsl(var(--foreground))" />
      </div>

      <section id="portfolio" className="relative bg-background">
        <div ref={containerRef} className="relative">
          <div ref={stickyRef} className="h-screen w-full overflow-hidden">
            <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 px-6 lg:px-12">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="relative w-full lg:w-[45%] h-[50vh] lg:h-[60vh] overflow-hidden bg-black rounded-lg shadow-2xl flex-shrink-0"
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
                  className="absolute top-4 left-4 z-10"
                >
                  <div className="text-white/70 font-display text-sm tracking-[0.3em] mb-2 font-bold">
                    CASE STUDY
                  </div>
                  <div className="text-white font-display text-[3rem] md:text-[4rem] font-bold tracking-tight leading-none drop-shadow-2xl">
                    {String(activeIndex + 1).padStart(2, '0')}
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                key={`details-${activeIndex}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="flex flex-col justify-center w-full lg:w-[45%] pb-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-6"
                  >
                    <Button
                      onClick={() => setShowAllProjects(true)}
                      size="lg"
                      variant="outline"
                      className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-bold tracking-wider text-sm px-6 py-5 group"
                    >
                      VIEW ALL PROJECTS
                      <ArrowRight weight="bold" className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Button>
                  </motion.div>

                  <Badge className="mb-4 bg-primary text-primary-foreground border-0 font-semibold tracking-wider text-sm">
                    {activeWork.category.toUpperCase()}
                  </Badge>
                  
                  <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground mb-4 leading-tight">
                    {activeWork.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-base md:text-lg lg:text-xl mb-6 leading-relaxed">
                    {activeWork.description}
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-6 pb-6 border-b border-border">
                    <div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                        <Tag weight="bold" size={16} />
                        <span className="font-semibold tracking-wider text-xs">CLIENT</span>
                      </div>
                      <div className="text-foreground font-semibold text-lg">
                        {activeWork.client}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                        <Calendar weight="bold" size={16} />
                        <span className="font-semibold tracking-wider text-xs">YEAR</span>
                      </div>
                      <div className="text-foreground font-semibold text-lg">
                        {activeWork.year}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-xs font-bold tracking-[0.2em] text-muted-foreground mb-3">
                      SERVICES
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeWork.services.map((service, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="px-4 py-2 text-sm border-border font-medium"
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={() => setSelectedWork(activeWork)}
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold tracking-wider text-base px-6 py-5 group w-full lg:w-auto"
                  >
                    VIEW FULL CASE STUDY
                    <ArrowRight weight="bold" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col gap-3">
              {featuredPortfolioData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!containerRef.current) return
                    const containerTop = containerRef.current.offsetTop
                    const scrollProgress = index / (featuredPortfolioData.length - 1)
                    const totalPinDistance = (featuredPortfolioData.length - 1) * window.innerHeight
                    const targetScroll = containerTop + (scrollProgress * totalPinDistance)
                    
                    window.scrollTo({
                      top: targetScroll,
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
                      {featuredPortfolioData[index].title}
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

      {showAllProjects && (
        <AllProjectsModal onClose={() => setShowAllProjects(false)} />
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

const allPortfolioData: PortfolioItem[] = [
  ...featuredPortfolioData,
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
  },
  {
    id: 6,
    title: 'Fashion Week Documentary',
    category: 'video',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea9c7a4e?w=1600&h=1200&fit=crop&q=90',
    description: 'Behind-the-scenes documentary capturing the intensity and creativity of international fashion week.',
    client: 'Fashion Forward Magazine',
    year: '2023',
    services: ['Documentary Film', 'Interviews', 'Color Grading'],
    challenge: 'Document fast-paced environment while maintaining narrative flow.',
    result: 'Festival selection and 1M+ online views.'
  },
  {
    id: 7,
    title: 'Restaurant Brand Launch',
    category: 'photography',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&h=1200&fit=crop&q=90',
    description: 'Complete visual identity for upscale dining establishment including food, interior, and lifestyle photography.',
    client: 'Culinary Arts Group',
    year: '2023',
    services: ['Food Photography', 'Interior Photography', 'Brand Assets'],
    challenge: 'Capture atmosphere and culinary artistry that drives reservations.',
    result: 'Fully booked for first 3 months post-launch.'
  },
  {
    id: 8,
    title: 'Music Festival Coverage',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1600&h=1200&fit=crop&q=90',
    description: 'Multi-day festival documentation with photo and video coverage of performances and atmosphere.',
    client: 'Summer Sounds Festival',
    year: '2024',
    services: ['Event Photography', 'Live Video', 'Social Content'],
    challenge: 'Capture energy of 50+ performances across multiple stages.',
    result: '100K+ social media impressions and complete festival archive.'
  }
]

function AllProjectsModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background z-50 overflow-y-auto"
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
        <div className="max-w-7xl mx-auto">
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors mb-12 font-semibold tracking-wider text-sm flex items-center gap-2"
          >
            ← BACK TO MAIN PORTFOLIO
          </button>

          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-4 leading-tight">
              All Projects
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl">
              Explore our complete collection of work spanning photography, video production, events, and brand campaigns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPortfolioData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90 font-bold"
                    >
                      VIEW PROJECT
                      <ArrowRight weight="bold" className="ml-2" />
                    </Button>
                  </div>
                </div>
                <Badge className="mb-3 bg-primary/10 text-primary border-0 font-semibold tracking-wider text-xs">
                  {project.category.toUpperCase()}
                </Badge>
                <h3 className="text-2xl font-display font-bold text-foreground mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {project.client} • {project.year}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
