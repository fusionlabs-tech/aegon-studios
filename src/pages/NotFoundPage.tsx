import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, FilmStrip } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import gsap from 'gsap'

export function NotFoundPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    
    // Simple cinematic glitch effect logic could go here or GSAP Entrance
    const ctx = gsap.context(() => {
      gsap.from('.error-content', {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.1
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground flex items-center justify-center relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-foreground/5 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="error-content mb-8 inline-flex items-center justify-center gap-4 border border-border px-6 py-2 rounded-full bg-foreground/5 backdrop-blur-md">
           <FilmStrip size={20} className="opacity-50" />
           <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-70">Scene Missing</span>
        </div>

        <h1 className="error-content text-[clamp(8rem,30vw,20rem)] leading-[0.8] font-bold font-display opacity-10 select-none">
          404
        </h1>
        
        <div className="error-content max-w-xl mx-auto -mt-4 md:-mt-12 relative">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            CUT TO BLACK
          </h2>
          <p className="text-lg opacity-50 leading-relaxed mb-12">
            The frame you are looking for has been edited out or never existed. 
            Let's get you back to the main sequence.
          </p>

          <Button asChild className="group bg-foreground text-background hover:bg-foreground/90 h-14 px-8 rounded-full font-bold tracking-widest text-sm transition-all duration-300 hover:scale-105">
            <Link to="/" className="flex items-center gap-3">
              <ArrowLeft weight="bold" size={18} className="group-hover:-translate-x-1 transition-transform" />
              RETURN HOME
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
