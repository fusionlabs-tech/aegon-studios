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
 'React',
 'Next.js',
 'TypeScript',
 'Node.js',
 'React Native',
 'PostgreSQL',
 'MongoDB',
 'Shopify',
 'AWS',
];

const allProjects = [
 {
  id: 1,
  title: 'PAYMENT GATEWAY',
  category: 'WEB APP',
  image: '/images/tech_launch.png',
  client: 'Paystack',
  stack: ['React', 'Node.js'],
  year: '2024',
  link: 'https://paystack.com',
 },
 {
  id: 2,
  title: 'TELEMEDICINE SUITE',
  category: 'MOBILE + WEB',
  image: '/images/urban_nights.png',
  client: 'Prima Health',
  stack: ['React Native', 'Next.js'],
  year: '2024',
  link: '#',
 },
 {
  id: 3,
  title: 'GLOBAL E-COMMERCE',
  category: 'SHOPIFY',
  image: '/images/luxury_car.png',
  client: 'Wild Fashion',
  stack: ['Shopify', 'React'],
  year: '2023',
  link: '#',
 },
 {
  id: 4,
  title: 'IMMERSIVE PORTFOLIO',
  category: 'WEB',
  image: '/images/studio_session.png',
  client: 'Antidote',
  stack: ['Next.js', 'Three.js'],
  year: '2023',
  link: '#',
 },
 {
  id: 5,
  title: 'ENTERPRISE CRM',
  category: 'WEB APP',
  image: '/images/event_summit.png',
  client: 'Moniepoint',
  stack: ['React', 'MongoDB'],
  year: '2024',
  link: '#',
 },
 {
  id: 6,
  title: 'DIAGNOSTICS APP',
  category: 'MOBILE',
  image: '/images/podcast_setup.png',
  client: 'Heva Health',
  stack: ['React Native', 'Firebase'],
  year: '2023',
  link: '#',
 },
 // Page 2
 {
  id: 7,
  title: 'DEFI EXCHANGE',
  category: 'WEB APP',
  image: '/images/tech_launch.png',
  client: 'BitTech',
  stack: ['React', 'Rust'],
  year: '2024',
  link: '#',
 },
 {
  id: 8,
  title: 'DELIVERY NETWORK',
  category: 'MOBILE',
  image: '/images/urban_nights.png',
  client: 'FastEats',
  stack: ['Flutter', 'Go'],
  year: '2024',
  link: '#',
 },
 {
  id: 9,
  title: 'PROPERTY MANAGER',
  category: 'SAAS',
  image: '/images/luxury_car.png',
  client: 'PropCo',
  stack: ['Next.js', 'PostgreSQL'],
  year: '2023',
  link: '#',
 },
 {
  id: 10,
  title: 'B2B MARKETPLACE',
  category: 'WEB',
  image: '/images/studio_session.png',
  client: 'TradeHub',
  stack: ['Vue.js', 'Laravel'],
  year: '2023',
  link: '#',
 },
 {
  id: 11,
  title: 'LOGISTICS TRACKER',
  category: 'MOBILE',
  image: '/images/event_summit.png',
  client: 'ShipIt',
  stack: ['React Native', 'Node.js'],
  year: '2024',
  link: '#',
 },
 {
  id: 12,
  title: 'AI ASSISTANT',
  category: 'WEB APP',
  image: '/images/podcast_setup.png',
  client: 'Intellect',
  stack: ['React', 'Python'],
  year: '2024',
  link: '#',
 },
];

const ITEMS_PER_PAGE = 6;

export function SoftwareStudioPage() {
 const containerRef = useRef<HTMLDivElement>(null);
 const [hoveredProject, setHoveredProject] = useState<number | null>(null);
 const [page, setPage] = useState(0);

 const visibleProjects = allProjects.slice(
  page * ITEMS_PER_PAGE,
  (page + 1) * ITEMS_PER_PAGE,
 );
 const hasMore = (page + 1) * ITEMS_PER_PAGE < allProjects.length;

 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 const handleNext = () => {
  setPage((prev) => prev + 1);
 };

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
   <section className='py-24'>
    <div className='px-6 md:px-16 mb-16'>
     <div className='flex justify-between items-end'>
      <div>
       <span className='text-[10px] font-bold tracking-[0.4em] opacity-40 block mb-4'>
        SELECTED WORK
       </span>
       <h2 className='text-4xl md:text-6xl font-display font-bold'>
        PROJECTS ({allProjects.length.toString().padStart(2, '0')})
       </h2>
      </div>
     </div>
    </div>

    <div className='border-t border-border'>
     {visibleProjects.map((project, i) => (
      <motion.div
       key={project.id}
       className='group border-b border-border cursor-pointer relative overflow-hidden'
       onMouseEnter={() => setHoveredProject(project.id)}
       onMouseLeave={() => setHoveredProject(null)}
       onClick={() => window.open(project.link, '_blank')}
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       viewport={{ once: true }}
       transition={{ delay: 0.05 }}
      >
       {/* Hover Image */}
       <motion.div
        className='absolute right-16 top-1/2 -translate-y-1/2 w-[350px] aspect-[16/10] pointer-events-none z-10'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
         opacity: hoveredProject === project.id ? 1 : 0,
         scale: hoveredProject === project.id ? 1 : 0.8,
        }}
        transition={{ duration: 0.4 }}
       >
        <img
         src={project.image}
         alt={project.title}
         className='w-full h-full object-cover'
        />
       </motion.div>

       <div className='px-6 md:px-16 py-8 md:py-10 flex items-center justify-between relative'>
        <div className='flex items-center gap-8 md:gap-16'>
         <span className='text-sm font-bold opacity-20 w-8'>
          {project.id.toString().padStart(2, '0')}
         </span>
         <div>
          <h3 className='text-2xl md:text-3xl font-display font-bold group-hover:translate-x-4 transition-transform'>
           {project.title}
          </h3>
         </div>
        </div>
        <div className='flex items-center gap-6 md:gap-12'>
         <span className='text-[10px] font-bold tracking-widest text-[var(--accent-software)]'>
          {project.category}
         </span>
         <div className='hidden md:flex gap-2'>
          {project.stack.map((tech, j) => (
           <span
            key={j}
            className='text-[9px] font-bold tracking-widest px-2 py-1 border border-border opacity-40'
           >
            {tech}
           </span>
          ))}
         </div>
         <span className='hidden md:block opacity-40 text-sm'>
          {project.year}
         </span>
         <ArrowUpRight
          size={24}
          weight='bold'
          className='opacity-0 group-hover:opacity-100 transition-opacity'
         />
        </div>
       </div>
      </motion.div>
     ))}
    </div>

    <div className='px-6 md:px-16 pt-12 flex justify-between items-center border-b border-border pb-12'>
     <button
      onClick={() => setPage((p) => Math.max(0, p - 1))}
      disabled={page === 0}
      className='flex items-center gap-2 px-6 py-3 border border-border text-xs font-bold tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-foreground rounded-full'
     >
      <CaretLeft weight='bold' size={16} /> Previous
     </button>

     <span className='text-[10px] font-bold tracking-widest opacity-40 uppercase'>
      Page {page + 1} of {Math.ceil(allProjects.length / ITEMS_PER_PAGE)}
     </span>

     <button
      onClick={() =>
       setPage((p) =>
        Math.min(Math.ceil(allProjects.length / ITEMS_PER_PAGE) - 1, p + 1),
       )
      }
      disabled={!hasMore}
      className='flex items-center gap-2 px-6 py-3 border border-border text-xs font-bold tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-foreground rounded-full'
     >
      Next <CaretRight weight='bold' size={16} />
     </button>
    </div>
   </section>

   {/* Tech Stack */}
   <section className='py-24 px-6 md:px-16'>
    <div className='mb-12'>
     <span className='text-[10px] font-bold tracking-[0.4em] opacity-40 block mb-4'>
      TECHNOLOGIES
     </span>
     <h2 className='text-3xl md:text-4xl font-display font-bold'>OUR STACK</h2>
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
    <div className='grid md:grid-cols-3 border-t border-border'>
     {[
      {
       num: '01',
       title: 'ARCHITECTURE',
       desc: 'Designing scalable and secure systems.',
      },
      {
       num: '02',
       title: 'ENGINEERING',
       desc: 'Clean code, rigorous testing, and best practices.',
      },
      {
       num: '03',
       title: 'DEPLOYMENT',
       desc: 'CI/CD pipelines and performance monitoring.',
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
