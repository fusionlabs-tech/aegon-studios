import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import { getCurrentYear } from '@/utils/date';
import { useTheme } from '@/context/ThemeContext';

// Brand/Client logos data
interface Brand {
 id: number;
 name: string;
 logo: string;
 scale?: number;
}

const brands: Brand[] = [
 { id: 1, name: 'Asus', logo: '/partners/asus.png' },
 { id: 2, name: 'Lifebuoy', logo: '/partners/lifebuoy.png' },
 { id: 3, name: 'Closeup', logo: '/partners/closeup.png', scale: 1.4 },
 {
  id: 4,
  name: 'The Building Practice',
  logo: '/partners/the-building-practice.jpg',
 },
 { id: 5, name: 'Chairborne', logo: '/partners/chairborne.png' },
 {
  id: 6,
  name: 'Chocolate City',
  logo: '/partners/chocolate-city.png',
  scale: 1.4,
 },
 { id: 7, name: 'Palmpay', logo: '/partners/palmpay.png', scale: 1.2 },
 { id: 8, name: 'Guinness', logo: '/partners/guinness.svg' },
 { id: 9, name: 'FCMB', logo: '/partners/fcmb.png' },
 { id: 10, name: 'Ratehawk', logo: '/partners/ratehawk.png' },
 { id: 11, name: 'Diageo', logo: '/partners/diageo.png' },
 { id: 12, name: 'Pepsodent', logo: '/partners/pepsodent.png' },
 { id: 13, name: 'Klasha', logo: '/partners/klasha.png' },
 { id: 14, name: 'Finwerd', logo: '/partners/finwerd.png' },
 {
  id: 15,
  name: 'Consolidated Hallmark',
  logo: '/partners/consolidated-hallmark.png',
  scale: 1.5,
 },
];

function TypewriterSequence({
 setCurtainOpen,
}: {
 setCurtainOpen: (v: boolean) => void;
}) {
 const text1 = 'If you’re going to have a story,';
 const text2 = 'have a big story, or none at all.';

 const [displayedText1, setDisplayedText1] = useState('');
 const [displayedText2, setDisplayedText2] = useState('');
 const [showAuthor, setShowAuthor] = useState(false);

 // Use refs to track index and prevent closure staleness/double-execution
 const index1Ref = useRef(0);
 const index2Ref = useRef(0);
 const startedRef = useRef(false);

 useEffect(() => {
  if (startedRef.current) return;
  startedRef.current = true;

  const typeWriter1 = () => {
   const idx = index1Ref.current;
   if (idx < text1.length) {
    setDisplayedText1((prev) => prev + text1.charAt(idx));
    index1Ref.current++;
    setTimeout(typeWriter1, 50); // Faster speed
   } else {
    setTimeout(typeWriter2, 500); // Reduced pause between lines
   }
  };

  const typeWriter2 = () => {
   const idx = index2Ref.current;
   if (idx < text2.length) {
    setDisplayedText2((prev) => prev + text2.charAt(idx));
    index2Ref.current++;
    setTimeout(typeWriter2, 50); // Faster speed
   } else {
    setTimeout(() => {
     setShowAuthor(true);
     setTimeout(() => setCurtainOpen(true), 3000);
    }, 500);
   }
  };

  typeWriter1();
 }, [setCurtainOpen]);

 return (
  <div className='flex flex-col items-center justify-center px-4 max-w-5xl'>
   <motion.img
    src='/images/logo_w.png'
    alt='Aegon Studios'
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className='h-24 w-auto object-contain mb-8'
   />
   <p className='text-white font-display font-bold tracking-tight text-center text-2xl md:text-5xl leading-tight'>
    {displayedText1}
    {/* Cursor 1: Visible while text1 is typing */}
    {displayedText1.length < text1.length && (
     <span className='inline-block w-[3px] h-[1em] bg-white ml-1 animate-pulse align-text-bottom' />
    )}

    <span className='inline-block w-2 md:w-3'></span>
    <br className='md:hidden' />

    <span className='text-blue-500 italic'>
     {displayedText2}
     {/* Cursor 2: Visible while text2 is typing */}
     {displayedText1.length >= text1.length && !showAuthor && (
      <span className='inline-block w-[3px] h-[1em] bg-blue-500 ml-1 animate-pulse align-text-bottom' />
     )}
    </span>
   </p>

   <motion.span
    initial={{ opacity: 0, y: 10 }}
    animate={{
     opacity: showAuthor ? 0.6 : 0,
     y: showAuthor ? 0 : 10,
    }}
    transition={{ duration: 0.8 }}
    className='text-sm md:text-base mt-8 block font-sans tracking-widest uppercase text-white/80'
   >
    - Joseph Campbell
   </motion.span>
  </div>
 );
}

// Hero Videos Data
const heroVideos = [
 {
  id: 1,
  title: 'URBAN RHYTHM',
  src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
 },
 {
  id: 2,
  title: 'DIGITAL FRONTIER',
  src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
 },
 {
  id: 3,
  title: "NATURE'S CANVAS",
  src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
 },
 {
  id: 4,
  title: 'TECHSPLORATION',
  src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
 },
 {
  id: 5,
  title: 'HUMAN CONNECTION',
  src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
 },
];

export function Home() {
 const { theme } = useTheme();
 const containerRef = useRef<HTMLDivElement>(null);
 const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);

 // Persist intro state (show once every 3 days)
 const [curtainOpen, setCurtainOpen] = useState(() => {
  if (typeof window === 'undefined') return false;
  const stored = localStorage.getItem('intro_seen');
  if (!stored) return false;
  try {
   const { timestamp } = JSON.parse(stored);
   const now = Date.now();
   // 3 days expiry
   if (now - timestamp < 3 * 24 * 60 * 60 * 1000) {
    return true;
   }
  } catch (e) {
   console.error(e);
  }
  return false;
 });

 const handleIntroComplete = (v: boolean) => {
  setCurtainOpen(v);
  if (v) {
   localStorage.setItem(
    'intro_seen',
    JSON.stringify({ timestamp: Date.now() }),
   );
  }
 };

 const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

 // Auto-advance video every 10s
 useEffect(() => {
  if (!curtainOpen) return;
  const interval = setInterval(() => {
   setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length);
  }, 10000);
  return () => clearInterval(interval);
 }, [curtainOpen]);

 useEffect(() => {
  if (!curtainOpen) return;

  const ctx = gsap.context(() => {
   // Staggered title reveal (starts shortly after curtain opens)
   const tl = gsap.timeline({ delay: 0.5 });

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

  return () => ctx.revert();
 }, [curtainOpen]);

 return (
  <div ref={containerRef} className='bg-background text-foreground'>
   {/* Curtain Reveal Animation - Portal to body to override all other z-indexes */}
   {createPortal(
    <motion.div
     className='fixed inset-0 z-[9999] bg-black flex items-center justify-center cursor-default'
     initial={{ opacity: curtainOpen ? 0 : 1 }}
     animate={{ opacity: curtainOpen ? 0 : 1 }}
     transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.2 }}
     style={{ pointerEvents: curtainOpen ? 'none' : 'auto' }}
    >
     <TypewriterSequence setCurtainOpen={handleIntroComplete} />
    </motion.div>,
    document.body,
   )}{' '}
   {/* HERO SECTION REDESIGN - VIDEO CAROUSEL */}
   <div className='bg-black'>
    {/* Navigation Placeholder - Pushes content down so nav doesn't overlap video content */}
    <div className='h-20 md:h-24 bg-black relative z-20'></div>

    <section className='h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)] relative overflow-hidden flex flex-col justify-between bg-black'>
     {/* Video Background Layer */}
     <div className='absolute inset-0 z-0'>
      <AnimatePresence mode='wait'>
       <motion.video
        key={heroVideos[currentVideoIndex].id}
        src={heroVideos[currentVideoIndex].src}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className='w-full h-full object-cover opacity-60'
        autoPlay
        muted
        loop
        playsInline
       />
      </AnimatePresence>
      <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 opacity-90' />
      <div className='absolute inset-0 bg-[url("https://grainy-gradients.vercel.app/noise.svg")] opacity-20 pointer-events-none'></div>
     </div>

     {/* Content Layer */}
     <div className='relative z-10 h-full flex flex-col justify-between px-6 md:px-16 py-8 md:py-12'>
      {/* Top Bar - Video Title (Top Left) */}
      <div className='flex justify-between items-start border-b border-white/10 pb-8'>
       <div className='flex flex-col gap-2'>
        <span className='text-[10px] tracking-widest opacity-50 uppercase text-white'>
         Current Viewing
        </span>
        <AnimatePresence mode='wait'>
         <motion.h2
          key={currentVideoIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='text-xl md:text-3xl font-display font-bold tracking-tight text-white'
         >
          {heroVideos[currentVideoIndex].title}
         </motion.h2>
        </AnimatePresence>
        {/* Progress Bar for video */}
        <motion.div
         key={`progress-${currentVideoIndex}`}
         initial={{ width: '0%' }}
         animate={{ width: '100%' }}
         transition={{ duration: 10, ease: 'linear' }}
         className='h-0.5 bg-white/50 mt-2 w-24 md:w-32'
        />
       </div>
      </div>

      {/* Middle: Empty to let video shine */}
      <div className='flex-1'></div>

      {/* Bottom: Intro Text & CTA */}
      <div className='grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/10 pt-8 items-center'>
       <div className='md:col-span-8'>
        <p className='text-xl md:text-3xl lg:text-4xl font-display font-bold italic leading-tight max-w-5xl text-white tracking-tighter'>
         Documentary, Storytelling, Apps For Brands And Builders.
        </p>
       </div>
       <div className='md:col-span-4 flex justify-end items-end'>
        <Link
         to='/contact'
         className='group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold tracking-widest hover:scale-105 transition-transform'
        >
         START PROJECT <ArrowUpRightIcon weight='bold' size={20} />
        </Link>
       </div>
      </div>
     </div>
    </section>
   </div>
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
       <ArrowUpRightIcon size={14} weight='bold' className='inline ml-1' />
      )}
     </span>
    </div>

    {/* Brands Grid - 5 Columns */}
    <div className='px-6 md:px-16'>
     <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[1px] bg-border border border-border'>
      {brands.map((brand) => (
       <a
        key={brand.id}
        href='#'
        className='group bg-background flex items-center justify-center aspect-[4/3] hover:bg-foreground/5 transition-colors relative overflow-hidden'
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

        {/* White background box for logo */}
        <div className='w-4/5 h-3/4 bg-white flex items-center justify-center p-6 transition-all duration-500 group-hover:scale-105 z-10'>
         <img
          src={brand.logo}
          alt={brand.name}
          className='w-full h-full max-h-[85%] object-contain opacity-70 group-hover:opacity-100 transition-all duration-500 filter grayscale group-hover:grayscale-0'
          style={{ transform: `scale(${brand.scale || 1})` }}
         />
        </div>
       </a>
      ))}
     </div>
    </div>
   </section>
   {/* Capabilities Section */}
   <section className='border-t border-border'>
    <div className='px-6 md:px-16 py-24 md:py-32'>
     <span className='block mb-8 text-xs font-bold tracking-widest opacity-40 uppercase'>
      Capabilities
     </span>
     <h2 className='text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] font-display font-medium max-w-4xl mb-6'>
      We're here to create the extraordinary.
     </h2>
     <p className='text-sm md:text-base font-sans opacity-60 leading-relaxed max-w-2xl'>
      No shortcuts, just bold, precision-engineered work that elevates the game
      & leaves a mark.
     </p>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-border border-t border-border'>
     {[
      {
       title: 'Strategy & Direction',
       description:
        "Guidance that clarifies the chaos. We fuse data-driven insights with world-class art direction to define your brand's narrative and ensure every output creates impact.",
       tags: [
        'Digital Strategy',
        'Creative Direction',
        'Brand Identity',
        'Product Roadmap',
       ],
      },
      {
       title: 'Documentary Storytelling',
       description:
        'Stories that matter. We produce full-length documentaries and brand films that capture the essence of human connection and innovation through a cinematic lens.',
       tags: [
        'Documentaries',
        'Brand Films',
        'Visual Journalism',
        'Docu-Series',
       ],
      },
      {
       title: 'Cinematic Events',
       description:
        'Amplifying the moment. We document physical events through a cinematic lens, creating time-capsule content that extends the lifespan of your experience.',
       tags: [
        'Event Films',
        'Live Coverage',
        'Recap Documentaries',
        'Experience Design',
       ],
      },
      {
       title: 'Software Engineering',
       description:
        'We build precision-engineered digital products. From high-performance web apps to native mobile experiences, our software studio builds the infrastructure for your digital growth.',
       tags: [
        'Web Applications',
        'Mobile Development',
        'Cloud Architecture',
        'Technical Strategy',
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
       USE THE FORM <ArrowUpRightIcon weight='bold' />
      </Link>
     </h2>
    </div>

    {/* Massive Footer Text */}
    <div className='w-full overflow-hidden leading-none select-none'>
     <div className='text-[clamp(5rem,25vw,30rem)] font-display font-bold tracking-tighter text-center leading-none text-foreground flex justify-center items-center h-[1em]'>
      AEG
      <span className='relative flex items-center justify-center'>
       O
       <img
        src={theme === 'dark' ? '/images/logo_w.png' : '/images/logo.png'}
        alt='Logo'
        className='absolute w-[35%] h-auto'
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
       />
      </span>
      N
     </div>
    </div>
   </section>
   {/* Minimal Footer */}
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
