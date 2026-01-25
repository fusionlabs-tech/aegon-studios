import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Contact } from '@/components/Contact';

export function TermsPage() {
 const containerRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (
  <div
   ref={containerRef}
   className='bg-background text-foreground min-h-screen'
  >
   <section className='pt-40 pb-20 border-b border-border'>
    <div className='container mx-auto px-6 md:px-16'>
     <span className='text-[10px] font-bold tracking-[0.4em] uppercase opacity-40 mb-8 block underline decoration-border underline-offset-8'>
      Legal
     </span>
     <h1 className='text-[clamp(4rem,10vw,8rem)] leading-[0.85] font-display font-bold mb-8'>
      TERMS <br />
      <span className='text-transparent stroke-text opacity-50'>
       & CONDITIONS
      </span>
     </h1>
     <p className='text-xl md:text-2xl font-sans opacity-50 leading-relaxed max-w-xl'>
      Guidelines for using our services.
     </p>
    </div>
   </section>

   <section className='py-24'>
    <div className='container mx-auto px-6 md:px-16'>
     <div className='prose prose-lg prose-invert text-foreground/80 max-w-4xl font-sans'>
      <h3 className='text-2xl font-display font-bold text-foreground mb-6'>
       1. ACCEPTANCE OF TERMS
      </h3>
      <p className='mb-12 leading-relaxed opacity-60'>
       By accessing or using our website and services, you agree to be bound by
       these Terms and Conditions and our Privacy Policy. If you do not agree to
       these terms, please do not use our services.
      </p>

      <h3 className='text-2xl font-display font-bold text-foreground mb-6'>
       2. INTELLECTUAL PROPERTY
      </h3>
      <p className='mb-12 leading-relaxed opacity-60'>
       All content, features, and functionality regarding the Service are and
       will remain the exclusive property of Aegon Studios.
      </p>

      <h3 className='text-2xl font-display font-bold text-foreground mb-6'>
       3. USER OBLIGATIONS
      </h3>
      <p className='mb-12 leading-relaxed opacity-60'>
       You agree not to use the Service for any unlawful purpose or in any way
       that interrupts, damages, or impairs the service.
      </p>

      <h3 className='text-2xl font-display font-bold text-foreground mb-6'>
       4. LIMITATION OF LIABILITY
      </h3>
      <p className='mb-12 leading-relaxed opacity-60'>
       In no event shall Aegon Studios, nor its directors, employees, partners,
       agents, suppliers, or affiliates, be liable for any indirect, incidental,
       special, consequential or punitive damages.
      </p>
     </div>
    </div>
   </section>

   <Contact />
  </div>
 );
}
