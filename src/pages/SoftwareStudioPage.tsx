import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
 ArrowUpRight,
 Asterisk,
 CaretLeft,
 CaretRight,
} from '@phosphor-icons/react';
import { getCurrentYear } from '@/utils/date';

const capabilities = [
 'Scalable Applications',
 'User-Centric Architecture',
 'High-Performance APIs',
 'Secure Digital Infrastructure',
 'Responsive Design',
 'Cloud-Native Solutions',
];

const stack = [
 'Product Strategy',
 'UI/UX Design',
 'System Architecture',
 'Cloud Infrastructure',
 'API Engineering',
 'Backend Systems',
 'Frontend Development',
 'Data Security',
 'Quality Assurance',
];

const allProjects = [
 {
  id: 2,
  title: 'Venshack',
  category: 'PRODUCT ENGINEERING',
  image: '/images/projects/venshack.png',
  client: 'Venshack',
  stack: ['PropTech'],
  year: '2024',
  link: 'https://venshack.io',
 },
 {
  id: 3,
  title: 'Rebucom',
  category: 'PRODUCT ENGINEERING',
  image: '/images/projects/rebucom.png',
  client: 'Rebucom',
  stack: ['Logistics', 'SaaS'],
  year: '2024',
  link: 'https://rebucom.com',
 },
 {
  id: 4,
  title: 'Ritease',
  category: 'DOCUMENT MANAGEMENT',
  image: '/images/projects/ritease.png',
  client: 'Ritease',
  stack: ['AI', 'SaaS'],
  year: '2024',
  link: 'https://ritease.com',
 },
 {
  id: 5,
  title: 'Ritemails',
  category: 'AUTOMATION',
  image: '/images/projects/ritemails.png',
  client: 'Ritemails',
  stack: ['AI', 'SaaS'],
  year: '2024',
  link: 'https://ritemails.co.uk',
 },
 {
  id: 7,
  title: 'RiteLedger',
  category: 'FINANCE',
  image: '/images/projects/riteledger.png',
  client: 'RiteLedger',
  stack: ['TypeScript', 'Automation'],
  year: '2024',
  link: 'https://riteledger.co.uk',
 }
];

export function SoftwareStudioPage() {
 const containerRef = useRef<HTMLDivElement>(null);
 const [hoveredProject, setHoveredProject] = useState<number | null>(null);

 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (
  <div ref={containerRef} className='bg-background text-foreground pt-32'>
   {/* Hero - Matches About Page Style */}
   <div className='px-6 md:px-16'>
    <div className='max-w-4xl mx-auto'>
     <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className='mb-24'
     >
      <span className='block text-xs font-bold tracking-widest opacity-40 uppercase mb-8'>
       Apps
      </span>
      <h1 className='text-[clamp(1.5rem,3vw,3.5rem)] leading-[1.0] font-display font-medium mb-12 italic'>
       We build digital products that scale. Precision-engineered software
       solutions for visionary companies.
      </h1>
      <p className='text-lg md:text-xl opacity-80 leading-relaxed font-sans'>
       From high-performance web applications to native mobile experiences, our
       software studio crafts the digital infrastructure for tomorrow. We ensure
       every line of code serves a purpose.
      </p>
     </motion.div>
    </div>
   </div>

   {/* Capabilities - Marquee */}
   <section className='py-16 border-t border-b border-border overflow-hidden'>
    <div className='flex gap-12 animate-marquee whitespace-nowrap'>
     {[...capabilities, ...capabilities].map((cap, i) => (
      <span
       key={i}
       className='flex items-center gap-4 text-xl md:text-2xl font-bold opacity-40'
      >
       {cap}
       <Asterisk size={16} weight='bold' />
      </span>
     ))}
    </div>
   </section>

   {/* Project List - Clean table style */}
    {/* Project List - Bento Grid */}
    <section className='py-24 relative z-10'>
     <div className='px-6 md:px-16 mb-16'>
      <span className='text-[10px] font-bold tracking-[0.4em] opacity-40 block mb-4'>
       SELECTED WORK
      </span>
      <h2 className='text-4xl md:text-6xl font-display font-bold'>
       COMMERCIAL PROJECTS ({allProjects.length.toString().padStart(2, '0')})
      </h2>
     </div>

     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 md:px-16 pb-24'>
      {allProjects.map((project, i) => {
       const isHero = i === 0;
       return (
        <div
         key={project.id}
         className={`flex flex-col gap-4 ${
          isHero ? 'md:col-span-2 lg:col-span-2 md:row-span-2' : 'col-span-1 row-span-1'
         }`}
        >
         {/* Image Tile */}
         <div
          className={`group relative overflow-hidden bg-black border border-border cursor-pointer transition-transform duration-500 hover:scale-[1.01] ${
           isHero ? 'aspect-[4/3] md:aspect-video' : 'aspect-[4/3] md:aspect-video'
          }`}
          onClick={() => window.open(project.link, '_blank')}
         >
          {/* Background Image */}
          <div className='absolute inset-0 bg-[#050505]'>
           <img
            src={project.image}
            alt={project.title}
            className='w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-700 filter grayscale group-hover:grayscale-0 group-hover:scale-105'
           />
          </div>

          {/* Light gradient just at bottom for metadata */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent'></div>

          {/* Small metadata only */}
          <div className='absolute bottom-0 left-0 right-0 z-10 p-4 flex justify-between items-center'>
           <span className='text-[10px] font-bold tracking-widest text-white/70 uppercase'>
            {project.category}
           </span>
           <span className='text-[10px] text-white/50 font-bold'>{project.year}</span>
          </div>
         </div>

         {/* Below image: Title + Button */}
         <div className='flex items-center justify-between gap-2'>
          <h3 className='font-display font-bold text-xs sm:text-sm md:text-base lg:text-lg'>
           {project.title}
          </h3>
          <button
           onClick={() => window.open(project.link, '_blank')}
           className='shrink-0 flex items-center gap-1 px-2.5 py-1.5 border border-border text-[9px] sm:text-[10px] font-bold tracking-widest hover:bg-foreground hover:text-background transition-colors whitespace-nowrap'
          >
           VIEW <ArrowUpRight size={10} weight='bold' />
          </button>
         </div>
        </div>
       );
      })}
     </div>
    </section>

   {/* Core Expertise */}
   <section className='py-24 px-6 md:px-16 border-t border-border'>
    <div className='mb-12'>
     <span className='text-[10px] font-bold tracking-[0.4em] opacity-40 block mb-4'>
      CAPABILITIES
     </span>
     <h2 className='text-3xl md:text-4xl font-display font-bold'>CORE EXPERTISE</h2>
    </div>
    <div className='flex flex-wrap gap-4'>
     {stack.map((tech, i) => (
      <motion.span
       key={i}
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ delay: i * 0.05 }}
       className='px-6 py-4 border border-border text-sm font-bold tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors cursor-default'
      >
       {tech}
      </motion.span>
     ))}
    </div>
   </section>

   {/* Process */}
   <section className='border-t border-border'>
    <div className='px-6 md:px-16 py-16'>
     <span className='text-[10px] font-bold tracking-[0.4em] opacity-40'>
      HOW WE WORK
     </span>
    </div>
    <div className='grid grid-cols-2 lg:grid-cols-4 border-t border-border'>
     {[
      {
       num: '01',
       title: 'DISCOVERY',
       desc: 'We start by deeply understanding your business goals, users, and constraints before writing a single line of code.',
      },
      {
       num: '02',
       title: 'DESIGN & PLAN',
       desc: 'We map out the full system—user flows, architecture, and UI—aligning every decision to your outcomes.',
      },
      {
       num: '03',
       title: 'BUILD & ITERATE',
       desc: 'We ship fast in focused sprints, gathering real feedback at every stage and refining continuously.',
      },
      {
       num: '04',
       title: 'LAUNCH & SCALE',
       desc: 'We deploy with confidence and stay close post-launch—monitoring, optimising, and scaling as you grow.',
      },
     ].map((step, i) => (
      <div
       key={i}
       className={`p-8 md:p-16 ${i < 3 ? 'md:border-r border-b md:border-b-0 border-border' : ''}`}
      >
       <span className='text-6xl font-display font-bold opacity-10 mb-8 block'>
        {step.num}
       </span>
       <h3 className='text-2xl font-display font-bold mb-4'>{step.title}</h3>
       <p className='opacity-40 leading-relaxed'>{step.desc}</p>
      </div>
     ))}
    </div>
   </section>

   {/* CTA */}
   <section className='py-32 px-6 md:px-16 text-center border-t border-border'>
    <h2 className='text-[clamp(2rem,8vw,8rem)] leading-[0.85] font-display font-bold mb-12'>
     BUILD
     <br />
     <span className='text-foreground/20'>WITH US?</span>
    </h2>
    <Link
     to='/contact'
     className='inline-flex items-center gap-4 px-12 py-6 bg-foreground text-background font-bold tracking-widest text-sm hover:scale-105 transition-transform'
    >
     START A PROJECT <ArrowUpRight weight='bold' />
    </Link>
   </section>

   {/* Footer */}
   <footer className='py-8 px-6 md:px-16 border-t border-border'>
    <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
     <div className='text-xs tracking-widest opacity-40'>
      © {getCurrentYear()} AEGON STUDIOS
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
