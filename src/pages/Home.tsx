import { useRef } from 'react'
import { Hero } from '@/components/Hero'
import { Portfolio } from '@/components/Portfolio'
import { Clients } from '@/components/Clients'
import { Contact } from '@/components/Contact'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Trophy, Users, Globe, FilmSlate } from '@phosphor-icons/react'

export function Home() {
  return (
    <main className="relative">
      <Hero />
      <Clients />
      <Portfolio />
      <StatsSection />
      <ServicesTeaser />
      <Contact />
    </main>
  )
}

function StatsSection() {
  const containerRef = useRef(null)
  
  return (
    <section ref={containerRef} className="py-32 bg-secondary/20 relative border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {[
            { icon: FilmSlate, value: '500+', label: 'Projects Completed', desc: 'Crafting high-impact visual stories for global brands and independent creators.' },
            { icon: Users, value: '150+', label: 'Happy Clients', desc: 'Trusted by industry leaders to deliver cinematic excellence across all platforms.' },
            { icon: Trophy, value: '12', label: 'Global Awards', desc: 'Recognized for innovation and storytelling in top-tier international competitions.' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <stat.icon size={48} weight="thin" className="mb-8 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              <div className="text-6xl font-display font-bold mb-4 tracking-tighter">{stat.value}</div>
              <div className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-white/40">{stat.label}</div>
              <p className="text-white/40 group-hover:text-white/60 transition-colors leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesTeaser() {
  return (
    <section className="py-40 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-[clamp(3rem,10vw,8rem)] leading-[0.85] font-bold tracking-widest mb-12">
              BEYOND <br />
              <span className="stroke-text">THE LENS</span>
            </h2>
            <div className="space-y-12">
              {[
                { title: 'Cinematic Production', desc: 'High-end film and video production with a focus on visual storytelling and emotional resonance.' },
                { title: 'Editorial Photography', desc: 'Fashion and product photography that demands attention and communicates brand essence.' },
                { title: 'Brand Direction', desc: 'Strategic creative direction to ensure visual consistency across all media channels.' }
              ].map((service, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 1, ease: "easeOut" }}
                  className="group cursor-pointer border-l border-white/10 pl-8 hover:border-white transition-colors"
                >
                  <h3 className="text-3xl font-bold mb-4 group-hover:translate-x-4 transition-transform duration-500">{service.title}</h3>
                  <p className="text-white/40 group-hover:text-white/70 transition-colors leading-relaxed max-w-md">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] bg-zinc-900 group overflow-hidden">
             <img 
               src="/images/studio_session.png" 
               className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
               alt="Studio"
             />
             <div className="absolute inset-0 border-[40px] border-background pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
