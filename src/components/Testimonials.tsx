import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Quotes, Star } from '@phosphor-icons/react'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Creative Director',
    company: 'Luxe Street Apparel',
    content: 'Working with Aegon Studios was transformative for our brand. Their ability to capture the essence of our vision while pushing creative boundaries resulted in a campaign that exceeded all expectations. The attention to detail and professionalism is unmatched.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=90',
    rating: 5
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'CEO',
    company: 'InnovateTech',
    content: 'Aegon Studios took our complex technical product and crafted a visual narrative that resonated emotionally with our audience. The cinematography was stunning, and the storytelling was compelling. Our launch campaign was a resounding success thanks to their vision.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=90',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'Global Business Forum',
    content: 'The team at Aegon Studios delivered exceptional event coverage under tight deadlines. Their multi-camera setup captured every important moment, and the same-day edits allowed us to share content in real-time. Absolute professionals from start to finish.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=90',
    rating: 5
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Head of Content',
    company: 'Startup Stories Media',
    content: 'Our podcast production quality skyrocketed after partnering with Aegon Studios. Their audio engineering and video production expertise created a broadcast-quality experience that our guests and audience absolutely love. We couldn\'t be happier with the results.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=90',
    rating: 5
  },
  {
    id: 5,
    name: 'Jessica Park',
    role: 'Brand Manager',
    company: 'Prestige Motors',
    content: 'Aegon Studios brought automotive artistry to life through their lens. Every shot captures the luxury and performance that defines our brand. The final deliverables were nothing short of spectacular, and our brand engagement metrics prove it.',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&q=90',
    rating: 5
  },
  {
    id: 6,
    name: 'Michael Foster',
    role: 'Editor-in-Chief',
    company: 'Fashion Forward Magazine',
    content: 'The documentary work from Aegon Studios is cinema-quality. They captured the intensity and creativity of Fashion Week in a way that tells a compelling story. The festival selection and massive viewership are testament to their incredible talent.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=90',
    rating: 5
  },
  {
    id: 7,
    name: 'Amanda Silva',
    role: 'Operations Director',
    company: 'Culinary Arts Group',
    content: 'Aegon Studios captured our restaurant\'s atmosphere and culinary excellence perfectly. The food photography is mouthwatering, and the interior shots showcase our ambiance beautifully. We were fully booked for months after the campaign launched.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&q=90',
    rating: 5
  }
]

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !scrollContainerRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const sectionHeight = section.offsetHeight
      const viewportHeight = window.innerHeight

      const sectionTop = rect.top
      const sectionBottom = rect.bottom

      if (sectionBottom < 0 || sectionTop > viewportHeight) {
        return
      }

      const scrollableRange = sectionHeight + viewportHeight
      const scrolled = viewportHeight - sectionTop
      const progress = Math.max(0, Math.min(1, scrolled / scrollableRange))

      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollX = scrollProgress * 100

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Star weight="fill" size={32} className="text-foreground" />
            <Star weight="fill" size={32} className="text-foreground" />
            <Star weight="fill" size={32} className="text-foreground" />
            <Star weight="fill" size={32} className="text-foreground" />
            <Star weight="fill" size={32} className="text-foreground" />
          </div>
          <h2 className="text-[clamp(3rem,8vw,7rem)] leading-none font-bold tracking-tight font-display text-foreground mb-6">
            CLIENT LOVE
          </h2>
          <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Hear from the brands and creators who trust us to bring their vision to life
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </motion.div>

        <div 
          ref={scrollContainerRef}
          className="flex gap-8 px-6 py-4"
          style={{
            transform: `translateX(-${scrollX}%)`,
            transition: 'transform 0.1s linear'
          }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0 w-[90vw] md:w-[500px] lg:w-[600px]"
            >
              <Card className="h-full border-2 border-border bg-card hover:border-foreground/20 transition-all duration-300 hover:shadow-2xl group">
                <CardContent className="p-8 md:p-10 flex flex-col h-full">
                  <div className="mb-6">
                    <Quotes weight="fill" size={48} className="text-primary opacity-20 group-hover:opacity-40 transition-opacity" />
                  </div>

                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} weight="fill" size={20} className="text-primary" />
                    ))}
                  </div>

                  <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8 flex-grow">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-border">
                    <Avatar className="w-14 h-14 md:w-16 md:h-16 ring-2 ring-primary/10">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="text-lg font-bold bg-primary text-primary-foreground">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-foreground font-bold text-lg md:text-xl">
                        {testimonial.name}
                      </div>
                      <div className="text-muted-foreground text-sm md:text-base">
                        {testimonial.role}
                      </div>
                      <div className="text-muted-foreground text-xs md:text-sm font-semibold tracking-wider">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center mt-16 px-6"
      >
        <p className="text-muted-foreground text-sm md:text-base tracking-wider">
          SCROLL TO EXPLORE MORE TESTIMONIALS
        </p>
      </motion.div>
    </section>
  )
}
