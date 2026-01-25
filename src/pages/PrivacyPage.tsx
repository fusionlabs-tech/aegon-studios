import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Contact } from '@/components/Contact';

export function PrivacyPage() {
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
      PRIVACY <br />
      <span className='text-transparent stroke-text opacity-50'>POLICY</span>
     </h1>
     <p className='text-xl md:text-2xl font-sans opacity-50 leading-relaxed max-w-xl'>
      Your data privacy is our priority.
     </p>
    </div>
   </section>

   <section className='py-24'>
    <div className='container mx-auto px-6 md:px-16'>
     <div className='prose prose-lg prose-invert text-foreground/80 max-w-4xl font-sans'>
      <h3 className='text-2xl font-display font-bold text-foreground mb-6'>
       1. INFORMATION COLLECTION
      </h3>
      <p className='mb-12 leading-relaxed opacity-60'>
       We collect information you provide directly to us, such as when you
       create an account, subscribe to our newsletter, request customer support,
       or otherwise communicate with us.
      </p>

      <h3 className='text-2xl font-display font-bold text-foreground mb-6'>
       2. USE OF INFORMATION
      </h3>
      <p className='mb-12 leading-relaxed opacity-60'>
       We use the information we collect to provide, maintain, and improve our
       services, to develop new services, and to protect Aegon Studios and our
       users.
      </p>

      <h3 className='text-2xl font-display font-bold text-foreground mb-6'>
       3. SHARING OF INFORMATION
      </h3>
      <p className='mb-12 leading-relaxed opacity-60'>
       We do not share your personal information with third parties except as
       described in this policy or with your consent.
      </p>

      <h3 className='text-2xl font-display font-bold text-foreground mb-6'>
       4. DATA SECURITY
      </h3>
      <p className='mb-12 leading-relaxed opacity-60'>
       We take reasonable measures to help protect information about you from
       loss, theft, misuse and unauthorized access, disclosure, alteration and
       destruction.
      </p>
     </div>
    </div>
   </section>

   <Contact />
  </div>
 );
}
