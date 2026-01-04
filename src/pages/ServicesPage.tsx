import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { 
  Camera, 
  VideoCamera, 
  Microphone, 
  Calendar, 
  ArrowRight,
  Lightning,
  Monitor,
  BoundingBox
} from '@phosphor-icons/react'
import { Contact } from '@/components/Contact'

const services = [
  {
    id: '01',
    title: 'CINEMATIC PRODUCTION',
    icon: VideoCamera,
    desc: 'High-fidelity film and video production utilizing industry-standard 8K cinema workflows and advanced storytelling techniques.',
    tags: ['Commercial', 'Music Videos', 'Documentary', 'Brand Films'],
    img: '/images/tech_launch.png'
  },
  {
    id: '02',
    title: 'EDITORIAL PHOTOGRAPHY',
    icon: Camera,
    desc: 'Strategic brand visuals ranging from high-fashion editorial spreads to minimalist product architecture.',
    tags: ['Fashion', 'Product', 'Lifestyle', 'Architecture'],
    img: '/images/urban_nights.png'
  },
  {
    id: '03',
    title: 'IMMERSIVE AUDIO',
    icon: Microphone,
    desc: 'Complete audio-visual production for high-profile podcasts and spatial sound design for digital experiences.',
    tags: ['Podcasts', 'Soundscapes', 'Mixing', 'Mastering'],
    img: '/images/podcast_setup.png'
  },
  {
    id: '04',
    title: 'EVENT ARCHIVE',
    icon: Calendar,
    desc: 'Comprehensive visual documentation for global summits, luxury launches, and industry conferences.',
    tags: ['Keynotes', 'After-movies', 'Live Feeds', 'Interviews'],
    img: '/images/event_summit.png'
  }
]

export function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    
    const ctx = gsap.context(() => {
      gsap.from('.reveal-item', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.reveal-item',
          start: 'top 85%'
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-40 pb-32 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-[clamp(4rem,15vw,12rem)] leading-[0.8] font-bold mb-12 animate-title">
              OUR <br />
              <span className="stroke-text">CAPABILITIES</span>
            </h1>
            <p className="text-2xl md:text-4xl text-foreground/50 leading-tight tracking-normal max-w-2xl">
              We provide a full-spectrum creative suite designed to scale <span className="text-foreground font-bold">visual authority</span> for ambitious brands and creators.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-40">
            {services.map((service, i) => (
              <div key={service.id} className="reveal-item group">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <div className={i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="flex items-center gap-6 mb-12">
                       <span className="text-5xl font-display font-bold opacity-10">{service.id}</span>
                       <div className="h-px flex-1 bg-foreground/10" />
                       <service.icon size={32} weight="thin" className="opacity-40" />
                    </div>
                    <h2 className="text-6xl font-bold mb-8 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-xl opacity-40 leading-relaxed mb-12 max-w-xl">
                      {service.desc}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {service.tags.map(tag => (
                        <span key={tag} className="px-4 py-2 border border-border text-[10px] font-bold tracking-widest uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`relative aspect-[4/3] overflow-hidden bg-zinc-900 ${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <img 
                      src={service.img} 
                      className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
                      alt={service.title}
                    />
                    <div className="absolute inset-0 border-[20px] border-background/20 pointer-events-none group-hover:border-0 transition-all duration-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-foreground/2 border-y border-border">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-[clamp(2.5rem,6vw,4rem)] font-bold mb-24">EXPERIMENTAL WORKFLOW</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Lightning, title: 'DISCOVERY', desc: 'A deep-dive into brand DNA and creative ambition.' },
              { icon: BoundingBox, title: 'EXECUTION', desc: 'Precision production with cinema-grade technologies.' },
              { icon: Monitor, title: 'REFINEMENT', desc: 'Meticulous post-production and emotional calibration.' }
            ].map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 rounded-full border border-border flex items-center justify-center mx-auto mb-8 group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                  <step.icon size={32} weight="thin" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="opacity-40 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}
