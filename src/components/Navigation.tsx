import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, Sun, Moon } from '@phosphor-icons/react';
import { useTheme } from '@/context/ThemeContext';

const navLinks = [
 { name: 'Media Studio', path: '/media' },
 { name: 'Software Studio', path: '/software' },
 { name: "Let's Talk", path: '/contact' },
];

export function Navigation() {
 const [isScrolled, setIsScrolled] = useState(false);
 const [isVisible, setIsVisible] = useState(true);
 const [lastScrollY, setLastScrollY] = useState(0);
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 const location = useLocation();
 const { theme, toggleTheme } = useTheme();

 useEffect(() => {
  const handleScroll = () => {
   const currentScrollY = window.scrollY;

   if (currentScrollY > 100) {
    setIsVisible(currentScrollY < lastScrollY);
    setIsScrolled(true);
   } else {
    setIsVisible(true);
    setIsScrolled(false);
   }

   setLastScrollY(currentScrollY);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
 }, [lastScrollY]);

 return (
  <>
   <motion.nav
    initial={{ y: -100 }}
    animate={{ y: isVisible ? 0 : -100 }}
    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
     isScrolled
      ? 'bg-background/80 backdrop-blur-xl border-b border-border'
      : 'bg-transparent'
    }`}
   >
    <div className='px-6 md:px-16'>
     <div className='flex items-center justify-between h-20'>
      <Link
       to='/'
       className='text-xl font-bold tracking-[0.2em] font-display flex items-center gap-2'
      >
       <div className='w-8 h-8 bg-foreground flex items-center justify-center text-background text-sm transition-colors duration-500'>
        A
       </div>
       <span className='hidden sm:block'>AEGON &nbsp; STUDIOS</span>
      </Link>

      <div className='flex items-center gap-12'>
       <div className='hidden md:flex items-center gap-12'>
        {navLinks.map((link) => (
         <Link
          key={link.name}
          to={link.path}
          className='text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 hover:opacity-100 transition-opacity'
         >
          {link.name}
         </Link>
        ))}
       </div>

       <div className='h-4 w-px bg-border hidden md:block' />

       <button
        onClick={toggleTheme}
        className='p-2 hover:bg-foreground/5 rounded-full transition-colors relative group'
        aria-label='Toggle Theme'
       >
        <AnimatePresence mode='wait'>
         {theme === 'dark' ? (
          <motion.div
           key='moon'
           initial={{ rotate: -90, opacity: 0 }}
           animate={{ rotate: 0, opacity: 1 }}
           exit={{ rotate: 90, opacity: 0 }}
           transition={{ duration: 0.2 }}
          >
           <Moon size={20} weight='bold' />
          </motion.div>
         ) : (
          <motion.div
           key='sun'
           initial={{ rotate: -90, opacity: 0 }}
           animate={{ rotate: 0, opacity: 1 }}
           exit={{ rotate: 90, opacity: 0 }}
           transition={{ duration: 0.2 }}
          >
           <Sun size={20} weight='bold' />
          </motion.div>
         )}
        </AnimatePresence>
       </button>

       <button
        className='md:hidden p-2'
        onClick={() => setIsMobileMenuOpen(true)}
       >
        <List size={24} />
       </button>
      </div>
     </div>
    </div>
   </motion.nav>

   <AnimatePresence>
    {!isVisible && isScrolled && (
     <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      className='fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-8 bg-background/10 backdrop-blur-md border border-border py-8 px-3 rounded-l-2xl shadow-xl'
     >
      {navLinks.map((link) => (
       <Link
        key={link.name}
        to={link.path}
        className='text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 hover:opacity-100 transition-opacity [writing-mode:vertical-rl] rotate-180 hover:text-foreground'
       >
        {link.name}
       </Link>
      ))}
     </motion.div>
    )}
   </AnimatePresence>

   <AnimatePresence>
    {isMobileMenuOpen && (
     <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 z-[100] bg-background flex flex-col p-12'
     >
      <div className='flex justify-between items-center mb-16'>
       <span className='font-display font-bold tracking-widest text-xl'>
        MENU
       </span>
       <div className='flex items-center gap-6'>
        <button
         onClick={toggleTheme}
         className='p-2 hover:bg-foreground/5 rounded-full transition-colors'
         aria-label='Toggle Theme'
        >
         {theme === 'dark' ? (
          <Moon size={24} weight='bold' />
         ) : (
          <Sun size={24} weight='bold' />
         )}
        </button>
        <button onClick={() => setIsMobileMenuOpen(false)}>
         <X size={32} />
        </button>
       </div>
      </div>

      <div className='flex flex-col gap-12'>
       {navLinks.map((link, i) => (
        <motion.div
         key={link.name}
         initial={{ x: -20, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ delay: i * 0.1 }}
        >
         <Link
          to={link.path}
          className='text-5xl font-display font-bold tracking-tighter'
          onClick={() => setIsMobileMenuOpen(false)}
         >
          {link.name}
         </Link>
        </motion.div>
       ))}
      </div>

      <div className='mt-auto grid grid-cols-2 gap-8 border-t border-white/10 pt-12'>
       <div>
        <p className='text-[10px] font-bold tracking-widest opacity-30 uppercase mb-4'>
         Email
        </p>
        <p className='font-bold'>hello@aegon.com</p>
       </div>
       <div>
        <p className='text-[10px] font-bold tracking-widest opacity-30 uppercase mb-4'>
         Location
        </p>
        <p className='font-bold'>Lagos, Nigeria</p>
       </div>
      </div>
     </motion.div>
    )}
   </AnimatePresence>
  </>
 );
}
