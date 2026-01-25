import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowUpRight, Play, Asterisk } from '@phosphor-icons/react';

const services = [
 'Cinematic Production',
 'Editorial Photography',
 'Event Coverage',
 'Podcast Production',
 'Brand Direction',
 'Motion Graphics',
];

const work = [
 {
  id: 1,
  title: 'URBAN NIGHTS',
  category: 'PHOTOGRAPHY',
  image: '/images/urban_nights.png',
  client: 'Luxe Street Apparel',
  year: '2024',
 },
 {
  id: 2,
  title: 'STUDIO SESSION',
  category: 'VIDEO',
  image: '/images/studio_session.png',
  client: 'Vanguard Collective',
  year: '2024',
 },
 {
  id: 3,
  title: 'SUMMIT EVENT',
  category: 'EVENTS',
  image: '/images/event_summit.png',
  client: 'Global Forum',
  year: '2024',
 },
 {
  id: 4,
  title: 'FOUNDERS PODCAST',
  category: 'PODCAST',
  image: '/images/podcast_setup.png',
  client: 'Startup Stories',
  year: '2024',
 },
 {
  id: 5,
  title: 'LUXURY AUTO',
  category: 'VIDEO',
  image: '/images/luxury_car.png',
  client: 'Prestige Motors',
  year: '2023',
 },
 {
  id: 6,
  title: 'TECH LAUNCH',
  category: 'PHOTOGRAPHY',
  image: '/images/tech_launch.png',
  client: 'InnovateTech',
  year: '2024',
 },
];

export function MediaStudioPage() {
 const containerRef = useRef<HTMLDivElement>(null);
 const [hoveredWork, setHoveredWork] = useState<number | null>(null);

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
  <div ref={containerRef} className='bg-background text-foreground'>
   {/* Hero */}
   <section className='min-h-[80vh] flex flex-col justify-end pt-40 pb-16 px-6 md:px-16 border-b border-border'>
    <div className='mb-8'>
     <span className='text-[10px] font-bold tracking-[0.4em] opacity-40'>
      (01) MEDIA STUDIO
     </span>
    </div>
    <div className='overflow-hidden mb-8'>
     <h1 className='hero-title text-[clamp(3rem,15vw,14rem)] leading-[0.85] font-display font-bold tracking-tighter'>
      CINEMATIC
      <br />
      <span className='text-foreground/20'>VISION</span>
     </h1>
    </div>
    <p className='hero-sub text-xl md:text-2xl opacity-50 max-w-2xl leading-relaxed'>
     We craft visual narratives that move people. From editorial photography to
     cinematic production, every frame is intentional.
    </p>
   </section>

   {/* Services - Horizontal list */}
   <section className='py-16 border-b border-border overflow-hidden'>
    <div className='flex gap-12 animate-marquee whitespace-nowrap'>
     {[...services, ...services].map((service, i) => (
      <span
       key={i}
       className='flex items-center gap-4 text-xl md:text-2xl font-bold opacity-40'
      >
       {service}
       <Asterisk size={16} weight='bold' />
      </span>
     ))}
    </div>
   </section>

   {/* Work Grid */}
   <section className='py-24 px-6 md:px-16'>
    <div className='flex justify-between items-end mb-16'>
     <div>
      <span className='text-[10px] font-bold tracking-[0.4em] opacity-40 block mb-4'>
       SELECTED WORK
      </span>
      <h2 className='text-4xl md:text-6xl font-display font-bold'>PORTFOLIO</h2>
     </div>
     <span className='text-6xl md:text-8xl font-display font-bold opacity-10'>
      {work.length.toString().padStart(2, '0')}
     </span>
    </div>

    <div className='grid md:grid-cols-2 gap-x-8 gap-y-16 mb-16'>
     {work.map((project, i) => (
      <Link to={`/project/${project.id}`} key={project.id}>
       <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, delay: i * 0.1 }}
        className='group cursor-pointer'
        onMouseEnter={() => setHoveredWork(project.id)}
        onMouseLeave={() => setHoveredWork(null)}
       >
        <div className='aspect-[4/3] overflow-hidden mb-6 relative'>
         <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-700 ${
           hoveredWork === project.id ? 'scale-105 grayscale-0' : 'grayscale'
          }`}
         />
         <div className='absolute inset-0 bg-foreground/10 group-hover:opacity-0 transition-opacity' />

         {/* Play button for videos */}
         <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
          <div className='w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center'>
           <Play weight='fill' size={24} />
          </div>
         </div>
        </div>

        <div className='flex justify-between items-start'>
         <div>
          <span className='text-[10px] font-bold tracking-widest text-[var(--accent-media)] mb-2 block'>
           {project.category}
          </span>
          <h3 className='text-2xl md:text-3xl font-display font-bold mb-1'>
           {project.title}
          </h3>
          <p className='text-sm opacity-40'>
           {project.client} — {project.year}
          </p>
         </div>
         <ArrowUpRight
          size={24}
          weight='bold'
          className='opacity-0 group-hover:opacity-100 transition-opacity'
         />
        </div>
       </motion.div>
      </Link>
     ))}
    </div>

    <div className='flex justify-center'>
     <Link
      to='/archive'
      className='px-8 py-4 border border-border text-sm font-bold tracking-widest hover:bg-foreground hover:text-background transition-colors uppercase'
     >
      View All Projects
     </Link>
    </div>
   </section>

   {/* Process */}
   <section className='border-t border-border'>
    <div className='px-6 md:px-16 py-16'>
     <span className='text-[10px] font-bold tracking-[0.4em] opacity-40'>
      HOW WE WORK
     </span>
    </div>
    <div className='grid md:grid-cols-3 border-t border-border'>
     {[
      {
       num: '01',
       title: 'DISCOVERY',
       desc: 'Understanding your vision and objectives.',
      },
      {
       num: '02',
       title: 'PRODUCTION',
       desc: 'Executing with precision and creativity.',
      },
      {
       num: '03',
       title: 'DELIVERY',
       desc: 'Final assets optimized for all platforms.',
      },
     ].map((step, i) => (
      <div
       key={i}
       className={`p-8 md:p-16 ${i < 2 ? 'border-r border-border' : ''}`}
      >
       <span className='text-6xl font-display font-bold opacity-10 mb-8 block'>
        {step.num}
       </span>
       <h3 className='text-2xl font-display font-bold mb-4'>{step.title}</h3>
       <p className='opacity-40'>{step.desc}</p>
      </div>
     ))}
    </div>
   </section>

   {/* CTA */}
   <section className='py-32 px-6 md:px-16 text-center border-t border-border'>
    <h2 className='text-[clamp(2rem,8vw,8rem)] leading-[0.85] font-display font-bold mb-12'>
     HAVE A<br />
     <span className='text-foreground/20'>PROJECT?</span>
    </h2>
    <Link
     to='/contact'
     className='inline-flex items-center gap-4 px-12 py-6 bg-foreground text-background font-bold tracking-widest text-sm hover:scale-105 transition-transform'
    >
     LET'S TALK <ArrowUpRight weight='bold' />
    </Link>
   </section>

   {/* Footer */}
   <footer className='py-8 px-6 md:px-16 border-t border-border'>
    <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
     <div className='text-xs tracking-widest opacity-40'>
      © 2024 AEGON STUDIOS
     </div>
     <div className='flex gap-8 text-xs tracking-widest opacity-40'>
      <Link to='/privacy' className='hover:opacity-100 transition-opacity'>
       PRIVACY
      </Link>
      <Link to='/terms' className='hover:opacity-100 transition-opacity'>
       TERMS
      </Link>
     </div>
    </div>
   </footer>
  </div>
 );
}
