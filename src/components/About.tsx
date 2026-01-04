import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '150+', label: 'Visionary Clients' },
  { value: '12', label: 'Global Awards' },
  { value: '∞', label: 'Artistic Pursuit' }
]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!statsRef.current) return

    const statItems = statsRef.current.querySelectorAll('.stat-item')

    gsap.fromTo(
      statItems,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 75%',
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
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--foreground) 1px, transparent 0)`
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] leading-none font-bold tracking-tight mb-6 font-display">
              ABOUT AEGON STUDIOS
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                We are a collective of visual storytellers, passionate about transforming brands and moments 
                into unforgettable visual experiences. Based at the intersection of creativity and technology, 
                we craft content that resonates.
              </p>
              <p>
                From intimate studio sessions to large-scale event productions, our team brings technical 
                excellence and artistic vision to every project. We don't just capture images—we create 
                narratives that connect, inspire, and endure.
              </p>
              <p>
                Our approach combines cinematic techniques with contemporary aesthetics, ensuring your 
                story is told with the impact it deserves. We believe great content is born from collaboration, 
                attention to detail, and an unwavering commitment to quality.
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.4 + index * 0.1,
                  ease: "backOut"
                }}
                 whileHover={{ scale: 1.05, y: -5 }}
                className="stat-item text-center p-8 bg-card backdrop-blur-sm border border-border group transition-all duration-500 hover:shadow-xl hover:border-foreground/20"
              >
                <div className="text-[clamp(2.5rem,5vw,4rem)] font-display font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold tracking-[0.3em] opacity-40 uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
