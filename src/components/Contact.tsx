import { motion } from 'framer-motion'
import { EnvelopeSimple, InstagramLogo, LinkedinLogo, TwitterLogo, ArrowRight } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ZigzagDivider } from '@/components/ZigzagDivider'

const socialLinks = [
  { icon: InstagramLogo, label: 'Instagram', href: '#' },
  { icon: LinkedinLogo, label: 'LinkedIn', href: '#' },
  { icon: TwitterLogo, label: 'Twitter', href: '#' },
]

export function Contact() {
  return (
    <>
      <div className="bg-background pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center pb-8"
        >
          <h2 className="text-[clamp(3rem,8vw,7rem)] leading-none font-bold tracking-tight font-display text-foreground">
            GET IN TOUCH
          </h2>
        </motion.div>
        <ZigzagDivider color="hsl(var(--foreground))" />
      </div>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="py-24 bg-gradient-to-b from-background to-secondary/30"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] font-bold tracking-tight mb-8 font-display">
                LET'S CREATE SOMETHING AMAZING
              </h3>
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
                  href="mailto:hello@aegonstudios.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="group bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-bold tracking-wider rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
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
                  href="mailto:hello@aegonstudios.com" 
                  className="text-2xl font-display font-bold text-foreground hover:text-accent transition-colors duration-300"
                >
                  hello@aegonstudios.com
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
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary hover:bg-primary text-foreground hover:text-primary-foreground transition-all duration-300 shadow-md hover:shadow-lg"
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
          <p>© 2024 Aegon Studios. All rights reserved.</p>
        </motion.footer>
      </motion.section>
    </>
  )
}
