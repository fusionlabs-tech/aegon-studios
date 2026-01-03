import { motion } from 'framer-motion'
import { EnvelopeSimple, InstagramLogo, LinkedinLogo, TwitterLogo, ArrowRight } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const socialLinks = [
  { icon: InstagramLogo, label: 'Instagram', href: '#' },
  { icon: LinkedinLogo, label: 'LinkedIn', href: '#' },
  { icon: TwitterLogo, label: 'Twitter', href: '#' },
]

export function Contact() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] font-bold tracking-tight mb-8 font-display">
              LET'S CREATE SOMETHING AMAZING
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
              Ready to bring your vision to life? Get in touch and let's discuss how we can elevate your brand.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.a
                href="mailto:hello@aegonstudio.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="group bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-7 text-lg font-bold tracking-wider rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <EnvelopeSimple size={24} weight="bold" className="mr-3" />
                  GET IN TOUCH
                  <ArrowRight size={24} weight="bold" className="ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12"
            >
              <p className="text-sm text-muted-foreground mb-4 tracking-wider uppercase">Or reach us at</p>
              <a 
                href="mailto:hello@aegonstudio.com" 
                className="text-2xl font-display font-bold text-foreground hover:text-accent transition-colors duration-300"
              >
                hello@aegonstudio.com
              </a>
            </motion.div>

            <Separator className="my-12" />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center items-center gap-6"
            >
              <p className="text-sm text-muted-foreground tracking-wider uppercase">Follow Us</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary hover:bg-accent text-foreground hover:text-accent-foreground transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <Icon size={24} weight="fill" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-24 text-center text-sm text-muted-foreground"
      >
        <p>© 2024 Aegon Studio. All rights reserved.</p>
      </motion.footer>
    </section>
  )
}
