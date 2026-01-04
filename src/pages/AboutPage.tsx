import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Target, 
  Lightbulb, 
  Users, 
  Trophy, 
  Heart, 
  Rocket,
  CheckCircle,
  ArrowRight
} from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '150+', label: 'Happy Clients' },
  { value: '8+', label: 'Years Experience' },
  { value: '15+', label: 'Awards Won' }
]

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We pursue perfection in every frame, every edit, every project. Our commitment to quality is unwavering, ensuring that each piece of content we create meets the highest standards of professional production.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We stay ahead of industry trends, constantly exploring new techniques, technologies, and creative approaches. Innovation drives us to push boundaries and deliver content that stands out in a crowded digital landscape.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Great work is born from great partnerships. We believe in working closely with our clients, treating every project as a collaborative journey where your vision and our expertise combine to create something extraordinary.'
  },
  {
    icon: Heart,
    title: 'Authenticity',
    description: 'We create content that feels genuine and resonates with real people. Every story we tell is rooted in authenticity, capturing the true essence of brands, moments, and experiences without artifice or pretense.'
  },
  {
    icon: Trophy,
    title: 'Results',
    description: 'Beautiful content is just the beginning—we focus on creating work that drives real results for our clients. From brand awareness to audience engagement, we measure success by the impact our content creates.'
  },
  {
    icon: Rocket,
    title: 'Growth',
    description: 'We grow with our clients, adapting and scaling our services to meet evolving needs. As your business expands, we\'re there to ensure your visual content grows in sophistication, reach, and effectiveness.'
  }
]

const teamMembers = [
  {
    role: 'Creative Direction',
    description: 'Visionaries who conceptualize and guide every project from inception to completion, ensuring creative excellence and brand alignment.'
  },
  {
    role: 'Cinematography',
    description: 'Skilled operators behind the lens, crafting stunning visuals with cinema-grade equipment and an eye for compelling composition.'
  },
  {
    role: 'Post-Production',
    description: 'Expert editors and colorists who transform raw footage into polished, professional content that captivates audiences.'
  },
  {
    role: 'Audio Production',
    description: 'Sound engineers and designers who ensure every project has crystal-clear audio and immersive soundscapes.'
  },
  {
    role: 'Production Management',
    description: 'Coordinators who handle logistics, scheduling, and client communication to ensure seamless project execution.'
  },
  {
    role: 'Creative Strategy',
    description: 'Strategists who develop content plans that align with brand objectives and resonate with target audiences.'
  }
]

const capabilities = [
  'Full-Service Production House',
  'State-of-the-Art Studio Facility',
  'Cinema-Grade Equipment',
  'Professional Editing Suites',
  'Color Grading & VFX',
  'Sound Design & Mixing',
  'Multi-Camera Productions',
  'Drone Cinematography',
  'Live Streaming Services',
  '24/7 Client Support',
  'Global Project Delivery',
  'End-to-End Content Solutions'
]

export function AboutPage() {
  const statsRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)

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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1500))

    toast.success('Thank you for reaching out! We\'ll be in touch soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="text-muted-foreground font-semibold tracking-[0.3em] mb-6 text-sm">
              WHO WE ARE
            </div>
            <h1 className="text-[clamp(4rem,12vw,10rem)] leading-none font-bold tracking-tight font-display mb-8">
              ABOUT US
            </h1>
            <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed">
              A collective of visual storytellers passionate about transforming brands and moments into unforgettable experiences
            </p>
          </motion.div>
        </div>
      </motion.div>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 text-lg md:text-xl leading-relaxed text-muted-foreground"
            >
              <p className="text-2xl md:text-3xl font-semibold text-foreground leading-tight">
                We are Aegon Studios—where creativity meets technical excellence, and every project becomes a masterpiece.
              </p>
              
              <p>
                Founded on the belief that exceptional visual content has the power to transform brands, inspire audiences, and create lasting impact, we've built a production house that combines cinematic artistry with cutting-edge technology. Our studio is more than just a facility—it's a creative playground where ideas come to life.
              </p>
              
              <p>
                Based at the intersection of innovation and storytelling, we've spent years perfecting our craft across photography, videography, event coverage, podcast production, and comprehensive brand content creation. Every member of our team brings specialized expertise, unwavering dedication, and a genuine passion for visual storytelling.
              </p>
              
              <p>
                From intimate studio sessions to large-scale commercial productions, from fast-paced event coverage to meticulously planned brand campaigns, we approach each project with the same commitment to excellence. We don't just capture images and footage—we craft visual narratives that connect with audiences on an emotional level, driving engagement and delivering measurable results.
              </p>
              
              <p>
                Our approach is collaborative and client-focused. We take the time to understand your vision, your brand, your audience, and your objectives. This deep understanding informs every creative decision we make, ensuring that the final product not only meets but exceeds your expectations.
              </p>
              
              <p className="text-2xl md:text-3xl font-semibold text-foreground leading-tight">
                We believe great content is born from the perfect blend of technical mastery, creative vision, and authentic storytelling.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[clamp(3rem,8vw,6rem)] leading-none font-bold tracking-tight font-display mb-6">
              BY THE NUMBERS
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our track record speaks to our commitment to excellence and client satisfaction
            </p>
          </motion.div>

          <motion.div
            ref={statsRef}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "backOut"
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="stat-item text-center p-8 rounded-2xl bg-background backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-500 hover:shadow-xl"
              >
                <div className="text-[clamp(2.5rem,5vw,4rem)] font-display font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[clamp(3rem,8vw,6rem)] leading-none font-bold tracking-tight font-display mb-6">
              OUR VALUES
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every project we undertake
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="p-8 rounded-2xl bg-secondary/30 border-2 border-border hover:border-primary transition-all duration-500 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500"
                  >
                    <Icon size={32} weight="duotone" className="text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </motion.div>
                  <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[clamp(3rem,8vw,6rem)] leading-none font-bold tracking-tight font-display mb-6">
              OUR TEAM
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Diverse specialists working together to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-background border border-border hover:border-primary transition-all duration-300"
              >
                <h3 className="text-xl font-display font-bold mb-3">
                  {member.role}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[clamp(3rem,8vw,6rem)] leading-none font-bold tracking-tight font-display mb-6">
              CAPABILITIES
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need for world-class content production
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border hover:border-primary transition-colors"
              >
                <CheckCircle size={24} weight="fill" className="text-primary flex-shrink-0" />
                <span className="font-semibold">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-background"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-[clamp(3rem,8vw,6rem)] leading-none font-bold tracking-tight font-display mb-6">
                GET IN TOUCH
              </h2>
              <p className="text-xl text-muted-foreground">
                Let's discuss how we can help bring your vision to life
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-6 bg-secondary/30 border-2 border-border rounded-3xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-semibold">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-semibold">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12 text-base"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-semibold">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-base font-semibold">Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="General Inquiry, Partnership, etc."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="h-12 text-base"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-base font-semibold">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us what's on your mind..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="text-base resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-bold tracking-wide group"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </>
                )}
              </Button>
            </motion.form>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
