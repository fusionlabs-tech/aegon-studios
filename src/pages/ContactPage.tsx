import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Contact } from '@/components/Contact'
import { getCurrentYear } from '@/utils/date'
import { 
  InstagramLogo, 
  LinkedinLogo, 
  TwitterLogo,
  EnvelopeSimple,
  Phone,
  MapPin
} from '@phosphor-icons/react'

export function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="pt-40 pb-20 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-[clamp(4rem,15vw,12rem)] leading-[0.8] font-bold mb-12 animate-title">
              LET'S <br />
              <span className="stroke-text">CONNECT</span>
            </h1>
            <p className="text-2xl md:text-4xl opacity-50 leading-tight tracking-normal max-w-2xl">
              We're ready to amplify your <span className="font-bold underline decoration-foreground/20 underline-offset-8">visual story</span>. Reach out to start a conversation about your next project.
            </p>
          </div>
        </div>
      </section>

      {/* Info Grid */}
      <section className="py-24 border-b border-border bg-foreground/[0.02]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <div className="flex items-center gap-4 opacity-40 mb-8">
                 <div className="h-px w-12 bg-foreground/20" />
                 <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Inquiries</span>
              </div>
              <div className="group cursor-pointer">
                <p className="text-[10px] font-bold tracking-widest opacity-40 uppercase mb-2">Email</p>
                <p className="text-2xl font-bold transition-colors">hello@aegonstudios.com</p>
              </div>
              <div className="group cursor-pointer">
                <p className="text-[10px] font-bold tracking-widest opacity-40 uppercase mb-2">Phone</p>
                <p className="text-2xl font-bold transition-colors">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 opacity-40 mb-8">
                 <div className="h-px w-12 bg-foreground/20" />
                 <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Offices</span>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest opacity-40 uppercase mb-2">Los Angeles</p>
                <p className="text-2xl font-bold">Arts District, CA</p>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest opacity-40 uppercase mb-2">New York</p>
                 <p className="text-2xl font-bold opacity-40">Opening {parseInt(getCurrentYear()) + 1}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 opacity-40 mb-8">
                 <div className="h-px w-12 bg-foreground/20" />
                 <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Social</span>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { icon: InstagramLogo, label: 'Instagram', handle: '@aegonstudios' },
                  { icon: LinkedinLogo, label: 'LinkedIn', handle: 'Aegon Studios' },
                  { icon: TwitterLogo, label: 'Twitter', handle: '@aegonstudios' }
                ].map((social, i) => (
                  <a key={i} href="#" className="group flex items-center justify-between border-b border-border pb-4 hover:border-foreground/20 transition-colors">
                    <div className="flex items-center gap-4">
                       <social.icon size={20} weight="thin" className="opacity-40 group-hover:opacity-100 transition-opacity" />
                       <span className="text-sm font-bold tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity">{social.label}</span>
                    </div>
                    <span className="text-xs opacity-20 group-hover:opacity-60 transition-opacity">{social.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reusing existing Contact Form component */}
      <section className="py-20">
        <Contact />
      </section>
    </div>
  )
}
