import { Hero } from '@/components/Hero'
import { Showreel } from '@/components/Showreel'
import { Portfolio } from '@/components/Portfolio'
import { Services } from '@/components/Services'
import { About } from '@/components/About'
import { Clients } from '@/components/Clients'
import { Contact } from '@/components/Contact'
import { ScrollProgress } from '@/components/ScrollProgress'
import { motion } from 'framer-motion'

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <ScrollProgress />
      <Hero />
      <Showreel />
      <Portfolio />
      <Services />
      <About />
      <Clients />
      <Contact />
    </motion.div>
  )
}

export default App