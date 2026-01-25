import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ArrowUpRight, Asterisk, Play } from '@phosphor-icons/react';

// Brand/Client logos data
const brands = [
 // Row 1
 { id: 1, name: 'Paystack', logo: 'PAYSTACK' },
 { id: 2, name: 'Flutterwave', logo: 'FLUTTERWAVE' },
 { id: 3, name: 'Moniepoint', logo: 'MONIEPOINT' },
 { id: 4, name: 'Kuda Bank', logo: 'KUDA' },
 { id: 5, name: 'PiggyVest', logo: 'PIGGYVEST' },
 { id: 6, name: 'Cowrywise', logo: 'COWRYWISE' },
 { id: 7, name: 'Carbon', logo: 'CARBON' },
 { id: 8, name: 'Risevest', logo: 'RISEVEST' },
 // Row 2
 { id: 9, name: 'Interswitch', logo: 'INTERSWITCH' },
 { id: 10, name: 'Andela', logo: 'ANDELA' },
 { id: 11, name: 'Bolt', logo: 'BOLT' },
 { id: 12, name: 'Jumia', logo: 'JUMIA' },
 { id: 13, name: 'Bamboo', logo: 'BAMBOO' },
 { id: 14, name: 'Piggyvest', logo: 'PIGGYVEST' },
 { id: 15, name: 'Opay', logo: 'OPAY' },
 { id: 16, name: 'Chipper', logo: 'CHIPPER' },
 // Row 3
 { id: 17, name: 'MTN', logo: 'MTN' },
 { id: 18, name: 'Access Bank', logo: 'ACCESS' },
 { id: 19, name: 'GTBank', logo: 'GTBANK' },
 { id: 20, name: 'UBA', logo: 'UBA' },
 { id: 21, name: 'Zenith', logo: 'ZENITH' },
 { id: 22, name: 'First Bank', logo: 'FIRSTBANK' },
 { id: 23, name: 'Sterling', logo: 'STERLING' },
 { id: 24, name: 'Wema', logo: 'WEMA' },
 // Row 4
 { id: 25, name: 'Dangote', logo: 'DANGOTE' },
 { id: 26, name: 'Globacom', logo: 'GLO' },
 { id: 27, name: 'Airtel', logo: 'AIRTEL' },
 { id: 28, name: '9mobile', logo: '9MOBILE' },
 { id: 29, name: 'Nestle', logo: 'NESTLE' },
 { id: 30, name: 'Unilever', logo: 'UNILEVER' },
 { id: 31, name: 'Total', logo: 'TOTAL' },
 { id: 32, name: 'Shell', logo: 'SHELL' },
];

// Featured projects data with descriptions and matched tags
const featuredProjects = [
 {
  id: 1,
  title: 'Urban Nights',
  category: 'Websites & Photography',
  type: 'MEDIA',
  image: '/images/urban_nights.png',
  description:
   'A bold vision needs a strong launch. We crafted a high-performance, story-driven campaign that cut through the noise and connected with the audience.',
  link: '#',
  tags: ['Content Production', 'Events & Experiences'],
 },
 {
  id: 2,
  title: 'FinTech Dashboard',
  category: 'Web Application',
  type: 'SOFTWARE',
  image: '/images/tech_launch.png',
  description:
   'Building the future of fintech. We designed and developed a comprehensive dashboard that scales with millions of transactions daily.',
  link: '#',
  tags: ['Software Engineering', 'Strategy & Direction'],
 },
 {
  id: 3,
  title: 'Studio Session',
  category: 'Video Production',
  type: 'MEDIA',
  image: '/images/studio_session.png',
  description:
   'By blending crafted visuals with digital experiences, we elevated the brand into a dynamic showcase—bridging art and technology.',
  link: '#',
  tags: ['Content Production', 'Strategy & Direction'],
 },
 {
  id: 4,
  title: 'E-Commerce Platform',
  category: 'Shopify & Custom Dev',
  type: 'SOFTWARE',
  image: '/images/luxury_car.png',
  description:
   'A seamless shopping experience that converts. We built an e-commerce platform that increased sales by 300% in the first quarter.',
  link: '#',
  tags: ['Software Engineering', 'Strategy & Direction'],
 },
];

export function Home() {
 const containerRef = useRef<HTMLDivElement>(null);
 const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);
 const [curtainOpen, setCurtainOpen] = useState(false);

 useEffect(() => {
  window.scrollTo(0, 0);

  // Trigger curtain open after short delay
  const timer = setTimeout(() => setCurtainOpen(true), 300);

  const ctx = gsap.context(() => {
   // Staggered title reveal (after curtain opens)
   const tl = gsap.timeline({ delay: 1.2 });

   tl
    .fromTo(
     '.title-line',
     { y: '100%', rotateX: -90 },
     { y: '0%', rotateX: 0, duration: 1.2, stagger: 0.1, ease: 'power4.out' },
    )
    .fromTo(
     '.hero-caption',
     { opacity: 0, y: 30 },
     { opacity: 1, y: 0, duration: 0.8 },
     '-=0.5',
    )
    .fromTo(
     '.hero-cta',
     { opacity: 0 },
     { opacity: 1, duration: 0.6 },
     '-=0.3',
    );
  }, containerRef);

  return () => {
   ctx.revert();
   clearTimeout(timer);
  };
 }, []);

 return (
  <div ref={containerRef} className='bg-background text-foreground'>
   {/* Curtain Reveal Animation */}
   <div className='fixed inset-0 z-[100] pointer-events-none flex'>
    <motion.div
     className='w-1/2 h-full bg-foreground'
     initial={{ x: 0 }}
     animate={{ x: curtainOpen ? '-100%' : 0 }}
     transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
    />
    <motion.div
     className='w-1/2 h-full bg-foreground'
     initial={{ x: 0 }}
     animate={{ x: curtainOpen ? '100%' : 0 }}
     transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
    />
   </div>

   {/* HERO SECTION REDESIGN */}
   {/* Full-Screen Hero with Background Image to reduce emptiness */}
   <section className='h-screen relative overflow-hidden flex flex-col justify-between'>
    {/* Background Image Layer */}
    <div className='absolute inset-0 z-0'>
     <img
      src='/images/studio_session.png'
      alt='Studio Background'
      className='w-full h-full object-cover opacity-20 grayscale scale-105 animate-pulse-slow'
     />
     <div className='absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40' />
     <div className='absolute inset-0 bg-[url("https://grainy-gradients.vercel.app/noise.svg")] opacity-20'></div>
    </div>

    {/* Content Layer */}
    <div className='relative z-10 h-full flex flex-col justify-between px-6 md:px-16 py-8 md:py-12'>
     {/* Top Bar (Date/Loc) */}
     <div className='flex justify-between items-start pt-24 md:pt-32 border-b border-border/10 pb-8'>
      <div className='flex gap-8 md:gap-16'>
       <div>
        <span className='block text-[10px] tracking-widest opacity-50 mb-1'>
         EST.
        </span>
        <span className='font-bold text-sm'>2016</span>
       </div>
       <div>
        <span className='block text-[10px] tracking-widest opacity-50 mb-1'>
         BASED
        </span>
        <span className='font-bold text-sm'>LAGOS</span>
       </div>
      </div>
      <div className='hidden md:block'>
       <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse inline-block mr-2' />
       <span className='text-[10px] tracking-widest opacity-50'>
        AVAILABLE FOR WORK
       </span>
      </div>
     </div>

     {/* Middle: Main Title - Centered & Massive */}
     <div className='flex-1 flex flex-col justify-center items-center text-center'>
      <div className='overflow-hidden'>
       <h1 className='title-line text-[15vw] leading-[0.8] font-display font-bold tracking-tighter text-foreground select-none whitespace-nowrap'>
        AEGON
       </h1>
      </div>
      <div className='overflow-hidden'>
       <h1 className='title-line text-[15vw] leading-[0.8] font-display font-bold tracking-tighter text-transparent stroke-text select-none whitespace-nowrap opacity-50'>
        STUDIOS
       </h1>
      </div>
     </div>

     {/* Bottom: Intro & CTA */}
     <div className='hero-cta grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-border/10 pt-8'>
      <div className='md:col-span-8'>
       <p className='text-xl md:text-3xl lg:text-4xl font-display leading-tight max-w-4xl'>
        Digital content and design solutions for the world's most{' '}
        <span className='text-foreground font-bold italic'>ambitious</span>{' '}
        brands.
       </p>
      </div>
      <div className='md:col-span-4 flex justify-end items-end'>
       <Link
        to='/contact'
        className='group flex items-center gap-4 bg-foreground text-background px-8 py-4 rounded-full font-bold tracking-widest hover:scale-105 transition-transform'
       >
        START PROJECT <ArrowUpRight weight='bold' size={20} />
       </Link>
      </div>
     </div>
    </div>
   </section>

   {/* Intro Text & Brands Section */}
   <section className='py-24 border-t border-border'>
    {/* Large Intro Text */}
    <div className='px-6 md:px-16 mb-24 max-w-5xl'>
     <h2 className='text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.9] font-display font-bold tracking-tight mb-8'>
      We craft digital experiences that define the future.
     </h2>
     <p className='text-sm md:text-base opacity-60 max-w-xl leading-relaxed'>
      Partnering with visionary companies to build brands, products, and stories
      that leave a lasting impact through design and technology.
     </p>
    </div>

    {/* Trusted By Header */}
    <div className='px-6 md:px-16 mb-8 flex items-center'>
     <span className='text-sm opacity-40'>
      Trusted by{' '}
      <span className='opacity-100 font-bold text-foreground'>
       {hoveredBrand || 'Visionaries'}
      </span>
      {hoveredBrand && (
       <ArrowUpRight size={14} weight='bold' className='inline ml-1' />
      )}
     </span>
    </div>

    {/* Brands Grid - 8 Columns */}
    <div className='px-6 md:px-16'>
     <div className='grid grid-cols-4 lg:grid-cols-8 gap-[1px] bg-border border border-border'>
      {brands.map((brand) => (
       <a
        key={brand.id}
        href='#'
        className='group bg-background p-6 flex items-center justify-center aspect-[3/2] hover:bg-foreground/5 transition-colors relative overflow-hidden'
        onMouseEnter={() => setHoveredBrand(brand.name)}
        onMouseLeave={() => setHoveredBrand(null)}
       >
        {/* Hover Diagonal Pattern Overlay */}
        <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-foreground'>
         <svg width='100%' height='100%'>
          <defs>
           <pattern
            id='diagonal-stripe'
            width='4'
            height='4'
            patternUnits='userSpaceOnUse'
            patternTransform='rotate(45)'
           >
            <rect
             width='2'
             height='4'
             transform='translate(0,0)'
             fill='currentColor'
             fillOpacity='0.1'
            ></rect>
           </pattern>
          </defs>
          <rect width='100%' height='100%' fill='url(#diagonal-stripe)'></rect>
         </svg>
        </div>

        <span className='text-[10px] md:text-xs font-bold tracking-widest opacity-30 group-hover:opacity-100 transition-opacity z-10'>
         {brand.logo}
        </span>
       </a>
      ))}
     </div>
    </div>
   </section>

   {/* Featured Projects - Sticky Stack */}
   <section className='border-t border-border'>
    <div className='px-6 md:px-16 py-8 md:py-16 border-b border-border'>
     {/* Title - Matches Basement Studio size/weight */}
     <h2 className='text-4xl md:text-6xl font-display font-medium tracking-tight'>
      Featured Projects
     </h2>
    </div>

    <div>
     {featuredProjects.map((project, i) => (
      <div
       key={project.id}
       className='sticky top-0 h-[50vh] min-h-[500px] w-full bg-background border-b border-border flex flex-col justify-center overflow-hidden'
       style={{ zIndex: i + 1 }}
      >
       {/* Explicit Grid Lines */}
       <div className='w-full h-full border-t border-border'>
        <div className='grid grid-cols-1 lg:grid-cols-2 h-full'>
         {/* Left Col - Image (50/50 split) */}
         <div className='relative h-[50vh] lg:h-full border-b lg:border-b-0 lg:border-r border-border group overflow-hidden'>
          <img
           src={project.image}
           alt={project.title}
           className='absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105'
          />
          <div className='absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500' />
         </div>

         {/* Right Col - Info */}
         <div className='h-[50vh] lg:h-full flex flex-col p-6 md:p-8 relative bg-background'>
          {/* Top Row: Description (Left) & Title (Right) */}
          <div className='flex justify-between items-start w-full gap-8'>
           {/* Description - Top Left */}
           <div className='pt-1'>
            <p className='text-[13px] font-sans font-medium text-foreground/80 leading-snug max-w-[220px] hidden md:block'>
             {project.description}
            </p>
           </div>

           {/* Title - Top Right - Matches Basement Size (approx 4xl-5xl) */}
           <div className='text-right'>
            <h3 className='text-3xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight tracking-tight mb-2 text-foreground'>
             {project.title}
            </h3>
           </div>
          </div>

          {/* Mobile Description */}
          <p className='text-sm font-sans opacity-70 leading-relaxed max-w-sm md:hidden mt-8'>
           {project.description}
          </p>

          {/* Bottom Tags - Pushed to bottom left & DYNAMIC */}
          <div className='absolute bottom-8 left-8'>
           <div className='flex flex-col gap-1'>
            {/* Map through dynamic tags */}
            {project.tags.map((tag, t) => (
             <span
              key={t}
              className='text-[13px] font-bold text-foreground/50 block'
             >
              {tag}
             </span>
            ))}
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     ))}
    </div>
   </section>

   {/* Capabilities Section */}
   <section className='border-t border-border'>
    <div className='px-6 md:px-16 py-24 md:py-32'>
     <span className='block mb-8 text-xs font-bold tracking-widest opacity-40 uppercase'>
      Capabilities
     </span>
     <h2 className='text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] font-display font-medium max-w-4xl'>
      We're here to create the extraordinary.
      <br />
      <span className='opacity-40'>
       No shortcuts, just bold, precision-engineered work that elevates the game
       & leaves a mark.
      </span>
     </h2>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-border border-t border-border'>
     {[
      {
       title: 'Software Engineering',
       description:
        'We build robust, scalable digital infrastructure. From high-performance web applications to native mobile solutions, our software studio engineers the foundation for your digital growth.',
       tags: [
        'Web Development',
        'Mobile Applications',
        'Frontend Engineering',
        'Technical Architecture',
       ],
      },
      {
       title: 'Strategy & Direction',
       description:
        "Guidance that clarifies the chaos. We fuse data-driven digital strategy with world-class art direction to define your brand's path and ensure every output creates impact.",
       tags: [
        'Digital Strategy',
        'Creative Direction',
        'Brand Identity',
        'Product Roadmap',
       ],
      },
      {
       title: 'Content Production',
       description:
        'Visuals that arrest attention. Our digital studio captures and crafts premium photography and video content, managing everything from pre-production to the final edit.',
       tags: [
        'Photography',
        'Commercial Video',
        'Post-Production',
        'Motion Graphics',
       ],
      },
      {
       title: 'Events & Experiences',
       description:
        'Amplifying the moment. We extend the lifespan of your physical events through cinematic coverage and live content strategies that bring the energy of the room to the world.',
       tags: [
        'Event Coverage',
        'Live Activations',
        'Recap Films',
        'Experience Design',
       ],
      },
     ].map((capability, i) => (
      <div
       key={i}
       className='p-8 md:p-12 flex flex-col justify-between h-full bg-background'
      >
       <div>
        <h3 className='text-xl md:text-2xl font-display font-bold mb-4'>
         {capability.title}
        </h3>
        <p className='text-sm opacity-60 leading-relaxed mb-8'>
         {capability.description}
        </p>
       </div>
       <div className='flex flex-wrap gap-2'>
        {capability.tags.map((tag, t) => (
         <span
          key={t}
          className='px-2 py-1 text-[10px] font-bold uppercase tracking-wider border border-border/50 text-foreground/60'
         >
          {tag}
         </span>
        ))}
       </div>
      </div>
     ))}
    </div>
   </section>

   {/* Contact Section */}
   <section className='border-t border-border relative overflow-hidden'>
    <div className='px-6 md:px-16 pt-24 pb-12 md:pt-32 md:pb-16 relative z-10'>
     <span className='block mb-8 text-xs font-bold tracking-widest opacity-40 uppercase'>
      Contact
     </span>
     <h2 className='text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] font-display font-medium mb-8'>
      Let's make an
      <br />
      impact together.
      <br />
      <a
       href='mailto:hello@aegon.studios'
       className='underline decoration-2 underline-offset-8 hover:opacity-70 transition-opacity'
      >
       hello@aegon.studios
      </a>
      <br />
      <span className='block text-lg md:text-xl font-normal opacity-40 mt-8 mb-4'>
       or
      </span>
      <Link
       to='/contact'
       className='inline-flex items-center gap-2 px-8 py-3 bg-foreground text-background text-sm font-bold tracking-widest rounded-full hover:scale-105 transition-transform'
      >
       USE THE FORM <ArrowUpRight weight='bold' />
      </Link>
     </h2>
    </div>

    {/* Massive Footer Text */}
    <div className='w-full overflow-hidden leading-none select-none'>
     <div className='text-[clamp(5rem,25vw,30rem)] font-display font-bold tracking-tighter text-center leading-none text-foreground flex justify-center'>
      AEGON
     </div>
    </div>
   </section>

   {/* Minimal Footer */}
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
