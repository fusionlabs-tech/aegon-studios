import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation(options: {
  trigger?: string
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'custom'
  start?: string
  duration?: number
  stagger?: number
  delay?: number
  customAnimation?: gsap.TweenVars
} = {}) {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current
    const {
      animation = 'fadeIn',
      start = 'top 80%',
      duration = 0.8,
      stagger = 0,
      delay = 0,
      customAnimation
    } = options

    let fromVars: gsap.TweenVars = {}
    let toVars: gsap.TweenVars = {
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start,
      }
    }

    if (customAnimation) {
      fromVars = customAnimation.from || {}
      toVars = { ...toVars, ...customAnimation.to }
    } else {
      switch (animation) {
        case 'fadeIn':
          fromVars = { opacity: 0 }
          toVars = { ...toVars, opacity: 1 }
          break
        case 'slideUp':
          fromVars = { opacity: 0, y: 60 }
          toVars = { ...toVars, opacity: 1, y: 0 }
          break
        case 'slideLeft':
          fromVars = { opacity: 0, x: 60 }
          toVars = { ...toVars, opacity: 1, x: 0 }
          break
        case 'slideRight':
          fromVars = { opacity: 0, x: -60 }
          toVars = { ...toVars, opacity: 1, x: 0 }
          break
        case 'scale':
          fromVars = { opacity: 0, scale: 0.8 }
          toVars = { ...toVars, opacity: 1, scale: 1 }
          break
      }
    }

    const children = element.querySelectorAll('[data-animate]')
    if (children.length > 0 && stagger > 0) {
      toVars.stagger = stagger
      gsap.fromTo(children, fromVars, toVars)
    } else {
      gsap.fromTo(element, fromVars, toVars)
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [options])

  return elementRef
}
