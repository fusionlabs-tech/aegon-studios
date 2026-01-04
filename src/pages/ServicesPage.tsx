import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Camera, VideoCamera, Microphone, Calendar, Buildings, Sparkle, CheckCircle, ArrowRight } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Camera,
    title: 'Photography',
    shortDesc: 'Stunning visuals that capture your brand essence',
    description: 'Our photography services combine technical excellence with artistic vision to create images that tell your story. From editorial and commercial shoots to product photography and lifestyle imagery, we bring your brand to life through compelling visuals.',
    features: [
      'Editorial & Commercial Photography',
      'Product & Lifestyle Shoots',
      'Brand Identity Photography',
      'Portrait & Headshot Sessions',
      'Fashion & Beauty Photography',
      'Architectural Photography'
    ],
    number: '01',
    process: [
      'Initial consultation and creative brief',
      'Location scouting and styling direction',
      'Professional shoot with art direction',
      'Post-production and retouching',
      'Final delivery in multiple formats'
    ],
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=600&fit=crop&q=90'
  },
  {
    icon: VideoCamera,
    title: 'Videography',
    shortDesc: 'Cinematic storytelling that moves audiences',
    description: 'We create video content that captivates and converts. Our videography services span from commercial productions and music videos to documentary-style storytelling. Every frame is crafted with intention, delivering visual narratives that resonate with your audience.',
    features: [
      'Commercial & Promotional Videos',
      'Music Video Production',
      'Documentary Filmmaking',
      'Brand Story Videos',
      'Social Media Content',
      'Corporate Videos & Interviews'
    ],
    number: '02',
    process: [
      'Concept development and storyboarding',
      'Pre-production planning and logistics',
      'Multi-camera shoot with cinema-grade equipment',
      'Professional editing and color grading',
      'Sound design and final delivery'
    ],
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop&q=90'
  },
  {
    icon: Buildings,
    title: 'Studio Sessions',
    shortDesc: 'Professional environment for controlled excellence',
    description: 'Our state-of-the-art studio provides the perfect controlled environment for your creative projects. Equipped with professional lighting, backdrops, and all necessary gear, we ensure optimal conditions for producing stunning content that exceeds expectations.',
    features: [
      'Fully Equipped Professional Studio',
      'Multiple Backdrop Options',
      'Professional Lighting Setup',
      'Green Screen Capabilities',
      'Product Photography Studio',
      'Audio Recording Booth'
    ],
    number: '03',
    process: [
      'Studio availability consultation',
      'Equipment and setup configuration',
      'Dedicated technical support during session',
      'Real-time monitoring and adjustments',
      'Post-production services available'
    ],
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop&q=90'
  },
  {
    icon: Calendar,
    title: 'Event Coverage',
    shortDesc: 'Comprehensive documentation of your moments',
    description: 'From corporate conferences to private celebrations, we provide complete event coverage that captures the energy, emotion, and essence of your occasion. Our experienced team works seamlessly to document every important moment without being intrusive.',
    features: [
      'Corporate Event Documentation',
      'Wedding & Private Celebrations',
      'Conference & Seminar Coverage',
      'Product Launch Events',
      'Multi-Camera Event Coverage',
      'Live Streaming Services'
    ],
    number: '04',
    process: [
      'Event planning and timeline review',
      'Site visit and technical assessment',
      'Multi-angle coverage during event',
      'Fast turnaround editing',
      'Highlight reels and full coverage delivery'
    ],
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&q=90'
  },
  {
    icon: Microphone,
    title: 'Podcast Production',
    shortDesc: 'Professional audio-visual podcast recording',
    description: 'Elevate your podcast with our professional production services. We handle everything from multi-camera video recording to pristine audio capture, editing, and post-production, ensuring your content sounds and looks exceptional across all platforms.',
    features: [
      'Multi-Camera Video Recording',
      'Professional Audio Capture',
      'Soundproof Recording Environment',
      'Live Streaming Capability',
      'Full Post-Production Services',
      'Distribution-Ready Deliverables'
    ],
    number: '05',
    process: [
      'Pre-production consultation and setup',
      'Professional recording session',
      'Audio mixing and mastering',
      'Video editing with graphics',
      'Platform-optimized delivery'
    ],
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=600&fit=crop&q=90'
  },
  {
    icon: Sparkle,
    title: 'Brand Content',
    shortDesc: 'Complete content strategy and creation',
    description: 'We develop comprehensive content strategies that elevate your brand across all touchpoints. From social media content to full-scale campaigns, we create cohesive visual narratives that build brand recognition and drive engagement with your audience.',
    features: [
      'Content Strategy Development',
      'Social Media Content Creation',
      'Brand Campaign Production',
      'Influencer Content Collaboration',
      'User-Generated Content Curation',
      'Multi-Platform Content Distribution'
    ],
    number: '06',
    process: [
      'Brand audit and strategy session',
      'Content calendar development',
      'Multi-format content production',
      'Platform optimization',
      'Performance tracking and iteration'
    ],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&q=90'
  }
]

export function ServicesPage() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const titleY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  useEffect(() => {
    window.scrollTo(0, 0)
    
    if (!sectionRef.current) return

    const serviceItems = sectionRef.current.querySelectorAll('.service-item')

    serviceItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { 
          opacity: 0, 
          y: 100,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1,
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        const triggerElement = trigger.vars.trigger
        if (triggerElement && typeof triggerElement !== 'string' && 'closest' in triggerElement) {
          if ((triggerElement as Element).closest('#services-page')) {
            trigger.kill()
          }
        }
      })
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1500))

    toast.success('Message sent successfully! We\'ll get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
    setIsSubmitting(false)
  }

  return (
    <div id="services-page" className="min-h-screen bg-background">
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
              WHAT WE OFFER
            </div>
            <h1 className="text-[clamp(4rem,12vw,10rem)] leading-none font-bold tracking-tight font-display mb-8">
              OUR SERVICES
            </h1>
            <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed">
              Comprehensive media production services tailored to bring your creative vision to life with precision, artistry, and technical excellence
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.section 
        ref={sectionRef}
        className="relative py-16 bg-background overflow-hidden"
      >
        <div className="container mx-auto px-6 relative">
          <div className="max-w-7xl mx-auto space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon
              
              return (
                <motion.div
                  key={service.title}
                  className="service-item relative"
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                      <div className="flex items-start gap-6">
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="relative flex-shrink-0 w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group"
                        >
                          <Icon size={40} weight="duotone" className="text-primary relative z-10" />
                          {hoveredService === index && (
                            <motion.div 
                              layoutId="service-hover-bg"
                              className="absolute inset-0 bg-primary rounded-2xl"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                        </motion.div>
                        <div className="flex-1">
                          <div className="text-6xl font-display font-bold text-primary/20 mb-2">
                            {service.number}
                          </div>
                          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-none tracking-tight mb-4">
                            {service.title}
                          </h2>
                          <p className="text-xl text-muted-foreground font-semibold">
                            {service.shortDesc}
                          </p>
                        </div>
                      </div>

                      {hoveredService === index && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95, y: 20 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: 20 }}
                          transition={{ duration: 0.3 }}
                          className="relative aspect-video rounded-2xl overflow-hidden border-2 border-primary lg:hidden"
                        >
                          <img 
                            src={service.image} 
                            alt={`${service.title} in action`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                        </motion.div>
                      )}

                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>

                      <div>
                        <h3 className="text-2xl font-display font-bold mb-6">What's Included</h3>
                        <div className="grid gap-4">
                          {service.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center gap-3"
                            >
                              <CheckCircle size={24} weight="fill" className="text-primary flex-shrink-0" />
                              <span className="text-foreground">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:sticky lg:top-32">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredService === index ? 1 : 0.4 }}
                        transition={{ duration: 0.3 }}
                        className="relative aspect-video rounded-2xl overflow-hidden border-2 border-border mb-8 hidden lg:block"
                      >
                        <img 
                          src={service.image} 
                          alt={`${service.title} in action`}
                          className="w-full h-full object-cover transition-transform duration-500"
                          style={{
                            transform: hoveredService === index ? 'scale(1.05)' : 'scale(1)'
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                        {hoveredService === index && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute inset-0 ring-4 ring-primary rounded-2xl"
                          />
                        )}
                      </motion.div>

                      <div className="bg-secondary/30 rounded-3xl p-8 border-2 border-border">
                        <h3 className="text-3xl font-display font-bold mb-6">Our Process</h3>
                        <div className="space-y-4">
                          {service.process.map((step, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-4 p-4 rounded-xl hover:bg-background/50 transition-colors"
                            >
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                                {idx + 1}
                              </div>
                              <p className="text-muted-foreground flex-1 pt-1">{step}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {index < services.length - 1 && (
                    <div className="mt-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-gradient-to-b from-background to-primary/5"
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
                LET'S CREATE
              </h2>
              <p className="text-xl text-muted-foreground">
                Ready to bring your vision to life? Get in touch and let's discuss your project
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-6 bg-card border-2 border-border rounded-3xl p-8 md:p-12"
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
                  <Label htmlFor="service" className="text-base font-semibold">Service of Interest</Label>
                  <Input
                    id="service"
                    type="text"
                    placeholder="Photography, Videography, etc."
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="h-12 text-base"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-base font-semibold">Project Details</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project, timeline, and vision..."
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
