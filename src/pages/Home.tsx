import { Hero } from '@/components/Hero'
import { Showreel } from '@/components/Showreel'
import { Portfolio } from '@/components/Portfolio'
import { Clients } from '@/components/Clients'
import { Testimonials } from '@/components/Testimonials'
import { Contact } from '@/components/Contact'

export function Home() {
  return (
    <>
      <Hero />
      <Showreel />
      <Clients />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  )
}
