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
 }, []);

 return (
  <div
   ref={containerRef}
   className='bg-background text-foreground min-h-screen pt-32'
  >
   {/* Hero - Matches About Page Style */}
   <div className='px-6 md:px-16'>
    <div className='max-w-4xl mx-auto'>
     <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className='mb-12'
     >
      <span className='block text-xs font-bold tracking-widest opacity-40 uppercase mb-8'>
       Contact
      </span>
      <h1 className='text-[clamp(1.5rem,3vw,3.5rem)] leading-[1.0] font-display font-medium mb-12 italic'>
       Have a project in mind? Let's create something extraordinary together.
      </h1>
      <p className='text-lg md:text-xl opacity-80 leading-relaxed font-sans'>
       Whether you have a clear vision or just a spark of an idea, we're here to
       help you bring it to life. Reach out and let's start the conversation.
      </p>
     </motion.div>
    </div>
   </div>

   {/* Reusing Contact Component Form - Form part improved in component */}
   <Contact showHeader={false} showFooter={true} />
  </div>
 );
}
