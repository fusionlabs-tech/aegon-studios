import { Hero } from '@/components/Hero'
import { Showreel } from '@/components/Showreel'
import { Portfolio } from '@/components/Portfolio'
import { Services } from '@/components/Services'
import { About } from '@/components/About'
import { Clients } from '@/components/Clients'
import { Contact } from '@/components/Contact'
import { ScrollProgress } from '@/components/ScrollProgress'

function App() {
  return (
    <div className="relative">
      <ScrollProgress />
      <Hero />
      <Showreel />
      <Portfolio />
      <Services />
      <About />
      <Clients />
      <Contact />
    </div>
  )
}

export default App