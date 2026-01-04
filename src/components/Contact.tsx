import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  EnvelopeSimple, 
  InstagramLogo, 
  LinkedinLogo, 
  TwitterLogo, 
  ArrowRight, 
  PaperPlaneTilt,
  MapPin,
  Phone
} from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from 'sonner'
import { getCurrentYear } from '@/utils/date'

const socialLinks = [
  { icon: InstagramLogo, label: 'Instagram', href: '#' },
  { icon: LinkedinLogo, label: 'LinkedIn', href: '#' },
  { icon: TwitterLogo, label: 'Twitter', href: '#' },
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success('Message sent! We\'ll get back to you soon.')
    }, 1500)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-background overflow-hidden border-t border-border">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-foreground/5 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-foreground/5 rounded-full blur-[120px] -ml-64 -mb-64" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[clamp(3rem,8vw,6rem)] leading-[0.9] font-bold mb-8 font-display">
              READY TO <br />
              <span className="stroke-text">ELEVATE?</span>
            </h2>
            
            <p className="text-xl opacity-60 mb-12 leading-relaxed max-w-md">
              Whether you have a specific project in mind or just want to explore possibilities, we're here to help you tell your story.
            </p>

            <div className="space-y-8 mb-16">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-foreground/5 flex items-center justify-center border border-border group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                  <EnvelopeSimple size={24} weight="bold" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest opacity-40 uppercase mb-1">Email</div>
                  <div className="text-xl font-semibold">hello@aegonstudios.com</div>
                </div>
              </div>
 
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-foreground/5 flex items-center justify-center border border-border group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                  <Phone size={24} weight="bold" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest opacity-40 uppercase mb-1">Phone</div>
                  <div className="text-xl font-semibold">+1 (555) 123-4567</div>
                </div>
              </div>
 
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-foreground/5 flex items-center justify-center border border-border group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                  <MapPin size={24} weight="bold" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest opacity-40 uppercase mb-1">Studio</div>
                  <div className="text-xl font-semibold">Lagos, Nigeria</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-xs font-bold tracking-widest opacity-40 uppercase">Follow</div>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="opacity-60 hover:opacity-100 transition-opacity"
                    >
                      <Icon size={24} weight="fill" />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card border border-border p-8 md:p-12 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest opacity-40 uppercase ml-1">Full Name</label>
                  <Input 
                    required
                    placeholder="John Doe"
                    className="bg-foreground/5 border-border focus:border-foreground/40 h-14 px-5 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest opacity-40 uppercase ml-1">Email Address</label>
                  <Input 
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="bg-foreground/5 border-border focus:border-foreground/40 h-14 px-5 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest opacity-40 uppercase ml-1">Service Required</label>
                <Select>
                  <SelectTrigger className="bg-foreground/5 border-border focus:border-foreground/40 h-14 px-5 rounded-xl">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border text-foreground">
                    <SelectItem value="photography">Photography</SelectItem>
                    <SelectItem value="video">Video Production</SelectItem>
                    <SelectItem value="events">Event Coverage</SelectItem>
                    <SelectItem value="podcast">Podcast Production</SelectItem>
                    <SelectItem value="branding">Branding</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest opacity-40 uppercase ml-1">Project Details</label>
                <Textarea 
                  required
                  placeholder="Tell us about your project..."
                  className="bg-foreground/5 border-border focus:border-foreground/40 min-h-[150px] p-5 rounded-xl resize-none"
                />
              </div>

              <Button
                disabled={isSubmitting}
                className="w-full bg-foreground text-background hover:bg-foreground/90 h-16 rounded-xl font-bold tracking-widest text-base group overflow-hidden relative transition-colors duration-500"
              >
                <span className={`flex items-center justify-center gap-3 transition-transform duration-500 ${isSubmitting ? '-translate-y-full' : 'translate-y-0'}`}>
                   SEND MESSAGE
                  <PaperPlaneTilt weight="bold" size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <span className={`absolute inset-0 flex items-center justify-center gap-2 transition-transform duration-500 ${isSubmitting ? 'translate-y-0' : 'translate-y-full'}`}>
                  SENDING...
                </span>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="mt-32 text-center opacity-20 text-sm border-t border-border pt-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="tracking-[0.2em] font-bold uppercase transition-colors duration-500">© {getCurrentYear()} AEGON STUDIOS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  )
}
