import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import {
 Users,
 Trophy,
 Strategy,
 Eye,
 MicrophoneStage,
 FilmSlate,
} from '@phosphor-icons/react';
import { Contact } from '@/components/Contact';

export function AboutPage() {
 const containerRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  window.scrollTo(0, 0);

  const ctx = gsap.context(() => {
   gsap.from('.reveal-text', {
    y: 100,
    opacity: 0,
    skewY: 7,
    duration: 1.5,
    stagger: 0.2,
    ease: 'power4.out',
   });
  }, containerRef);

  return () => ctx.revert();
 }, []);

 return (
  <div
   ref={containerRef}
   className='min-h-screen bg-background text-foreground'
  >
   {/* Hero Section */}
   <section className='pt-40 pb-24 border-b border-border'>
    <div className='container mx-auto px-6 md:px-16'>
     <div className='max-w-4xl'>
      <h1 className='text-[clamp(4rem,15vw,12rem)] leading-[0.8] font-display font-bold mb-12 animate-title'>
       BEYOND <br />
       <span className='text-transparent stroke-text'>STORYTELLING</span>
      </h1>
      <p className='reveal-text text-2xl md:text-3xl lg:text-4xl text-foreground font-sans leading-tight tracking-normal max-w-2xl'>
       Aegon Studios is a collective of{' '}
       <span className='text-foreground/40 font-bold'>
        cinematic visionaries
       </span>{' '}
       based in Lagos, Nigeria, dedicated to crafting high-fidelity narratives
       for global icons.
      </p>
     </div>
    </div>
   </section>

   {/* Manifesto Section */}
   <section className='py-32 border-b border-border bg-foreground/2'>
    <div className='container mx-auto px-6 md:px-16'>
     <div className='grid lg:grid-cols-2 gap-24 items-start'>
      <div>
       <span className='text-[10px] font-bold tracking-[0.4em] uppercase opacity-40 mb-8 block'>
        Our Philosophy
       </span>
       <h2 className='text-5xl font-display font-bold mb-8'>
        THE PURSUIT OF <br />
        VISUAL PERFECTION
       </h2>
      </div>
      <div className='space-y-8 text-xl text-foreground/60 leading-relaxed font-sans'>
       <p>
        We don't just capture moments; we architect emotions. Founded in 2016,
        Aegon Studios emerged from a desire to bridge the gap between commercial
        efficiency and cinematic artistry.
       </p>
       <p>
        Every project we undertake is governed by a singular principle:{' '}
        <span className='text-foreground font-bold'>Absolute Precision.</span>{' '}
        From the way light falls on a product to the subtle pacing of a final
        cut, we believe that world-class stories are told in the details.
       </p>
      </div>
     </div>
    </div>
   </section>

   {/* Authority Grid */}
   <section className='py-32 border-b border-border'>
    <div className='container mx-auto px-6 md:px-16'>
     <div className='grid md:grid-cols-3 gap-0 border-l border-t border-border'>
      {[
       {
        icon: FilmSlate,
        label: 'PRODUCTION',
        value: '500+ Projects',
        desc:
         'A vast portfolio of cinematic work spanning commercials, film, and digital media.',
       },
       {
        icon: Users,
        label: 'PARTNERSHIPS',
        value: '150+ Clients',
        desc:
         'Trusted by global industry leaders and visionary independent creators.',
       },
       {
        icon: Trophy,
        label: 'RECOGNITION',
        value: '12 Global Awards',
        desc:
         'Honored internationally for excellence in storytelling and visual craft.',
       },
      ].map((stat, i) => (
       <div
        key={i}
        className='p-12 border-b border-r border-border group hover:bg-foreground hover:text-background transition-colors duration-500'
       >
        <stat.icon
         size={40}
         weight='thin'
         className='mb-8 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700'
        />
        <div className='text-xs font-bold tracking-[0.3em] uppercase mb-4 opacity-40'>
         {stat.label}
        </div>
        <div className='text-4xl font-display font-bold mb-4'>{stat.value}</div>
        <p className='opacity-40 text-sm leading-relaxed font-sans'>
         {stat.desc}
        </p>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* Principles */}
   <section className='py-32 bg-background overflow-hidden relative border-b border-border'>
    <div className='container mx-auto px-6 md:px-16'>
     <h2 className='text-center text-[clamp(2.5rem,8vw,6rem)] leading-[0.8] font-display font-bold mb-24 text-transparent stroke-text opacity-50'>
      CORE PRINCIPLES
     </h2>
     <div className='grid lg:grid-cols-2 gap-12'>
      {[
       {
        title: 'RADICAL HONESTY',
        desc:
         'We believe the most powerful stories are the truest ones. We cut through the noise with raw, authentic imagery.',
        icon: Eye,
       },
       {
        title: 'STRATEGIC DEPTH',
        desc:
         'Every frame must serve a purpose. We combine artistic intuition with brand strategy to deliver measurable impact.',
        icon: Strategy,
       },
       {
        title: 'CULTURAL IMPACT',
        desc:
         "We don't follow trends; we create the visuals that define them for years to come.",
        icon: MicrophoneStage,
       },
      ].map((p, i) => (
       <div
        key={i}
        className={`p-16 border border-border bg-foreground/2 hover:border-foreground/20 transition-all ${i === 2 ? 'lg:col-span-2' : ''}`}
       >
        <p.icon size={32} weight='thin' className='mb-8 opacity-40' />
        <h3 className='text-4xl font-display font-bold mb-6'>{p.title}</h3>
        <p className='opacity-40 leading-relaxed max-w-xl font-sans'>
         {p.desc}
        </p>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* Team Visual Bridge */}
   <section className='py-24 border-b border-border'>
    <div className='container mx-auto px-6 md:px-16'>
     <div className='grid grid-cols-2 md:grid-cols-4 gap-1 bg-border border border-border'>
      {[
       '/images/studio_session.png',
       '/images/urban_nights.png',
       '/images/tech_launch.png',
       '/images/podcast_setup.png',
      ].map((img, i) => (
       <div
        key={i}
        className='aspect-[3/4] overflow-hidden group bg-background'
       >
        <img
         src={img}
         className='w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000'
         alt='Team'
        />
       </div>
      ))}
     </div>
    </div>
   </section>

   <Contact />
  </div>
 );
}
