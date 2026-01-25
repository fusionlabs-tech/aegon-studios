import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { EnvelopeSimple, MapPin, PaperPlaneTilt } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { Contact } from '@/components/Contact';

export function ContactPage() {
 const containerRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  window.scrollTo(0, 0);

  const ctx = gsap.context(() => {
   gsap.fromTo(
    '.hero-title',
    { y: '100%' },
    { y: '0%', duration: 1.2, ease: 'power4.out', delay: 0.3 },
   );
   gsap.fromTo(
    '.hero-sub',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, delay: 0.8 },
   );
  }, containerRef);

  return () => ctx.revert();
 }, []);

 return (
  <div
   ref={containerRef}
   className='bg-background text-foreground min-h-screen'
  >
   {/* Hero */}
   <section className='min-h-[60vh] flex flex-col justify-end pt-40 pb-16 px-6 md:px-16 border-b border-border'>
    <div className='overflow-hidden mb-8'>
     <h1 className='hero-title text-[clamp(3rem,18vw,16rem)] leading-[0.85] font-display font-bold tracking-tighter'>
      LET'S
      <br />
      <span className='text-foreground/20'>TALK</span>
     </h1>
    </div>
    <p className='hero-sub text-xl md:text-2xl opacity-50 max-w-xl leading-relaxed font-sans'>
     Have a project in mind? Let's create something extraordinary together.
    </p>
   </section>

   {/* Reusing Contact Component Form */}
   <Contact showHeader={true} showFooter={true} />
  </div>
 );
}
