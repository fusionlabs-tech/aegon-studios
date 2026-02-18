import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export function AboutPage() {
 return (
  <div className='bg-background text-foreground min-h-screen pt-32 pb-24 px-6 md:px-16'>
   <div className='max-w-4xl mx-auto'>
    {/* Header */}
    <motion.div
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.8 }}
     className='mb-24'
    >
     <span className='block text-xs font-bold tracking-widest opacity-40 uppercase mb-8'>
      About Us
     </span>
     <h1 className='text-[clamp(1.5rem,3vw,3.5rem)] leading-[1.0] font-display font-medium mb-12 italic'>
      Aegon Studios is a dynamic content production and software studio headquartered in
      Lagos, Nigeria.
     </h1>
     <p className='text-lg md:text-xl opacity-80 leading-relaxed font-sans'>
      Our production capabilities span commercials, explainer videos,
      thought-leadership content, still photography, documentaries and event
      coverage. We have achieved a global reach, with projects engaging millions
      across multiple industries, including Financial Technology (Fintech),
      Manufacturing/FMCG, architecture/real estate, to mention a few.
     </p>
    </motion.div>

    {/* Evolution */}
    <motion.div
     initial={{ opacity: 0, y: 20 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.8 }}
     className='mb-24 grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-border pt-12'
    >
     <div className='col-span-4'>
      <h2 className='text-sm font-bold tracking-widest uppercase opacity-40'>
       Evolution
      </h2>
     </div>
     <div className='col-span-8'>
      <p className='text-base md:text-lg opacity-80 leading-relaxed font-sans'>
       In the years following our founding in 2017, we have evolved from
       creating conversion-driven content for advertising agencies and personal
       brands into a documentary-focused company.
      </p>
     </div>
    </motion.div>

    {/* Mission */}
    <motion.div
     initial={{ opacity: 0, y: 20 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.8 }}
     className='mb-24 grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-border pt-12'
    >
     <div className='col-span-4'>
      <h2 className='text-sm font-bold tracking-widest uppercase opacity-40'>
       Our Mission
      </h2>
     </div>
     <div className='col-span-8 space-y-8'>
      <p className='text-base md:text-lg opacity-80 leading-relaxed font-sans'>
       Our mission is to help brands and builders connect with, convince and
       convert their audiences into raving fans through effective video
       documentary storytelling. Through our creativity, brands and builders
       (people who are doing exceptional work within and outside corporate
       organisations) can tell and own their stories.
      </p>
      <p className='text-base md:text-lg opacity-80 leading-relaxed font-sans'>
       We are very passionate about the care and attention to detail that we pay
       to our work, and we constantly seek to remind ourselves of how much fun
       it is to see our clients smile at their own stories, especially when we
       perfectly interpret their content dreams through our lenses.
      </p>
     </div>
    </motion.div>

    {/* Contact */}
    <motion.div
     initial={{ opacity: 0, y: 20 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.8 }}
     className='grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-border pt-12'
    >
     <div className='col-span-4'>
      <h2 className='text-sm font-bold tracking-widest uppercase opacity-40'>
       Contact
      </h2>
     </div>
     <div className='col-span-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
       <div>
        <h3 className='font-display font-bold text-xl mb-4'>Office</h3>
        <p className='opacity-60 leading-relaxed'>
         37 Musa Akor Close,
         <br />
         Ikeja, Lagos.
        </p>
       </div>

       <div>
        <h3 className='font-display font-bold text-xl mb-4'>Team</h3>
        <div className='space-y-6'>
         <div>
          <p className='font-bold mb-1'>Cyrus Agbo</p>
          <a
           href='mailto:cyrus@aegon-studios.com'
           className='opacity-60 hover:opacity-100 transition-opacity flex items-center gap-2'
          >
           cyrus@aegon-studios.com <ArrowUpRightIcon size={14} />
          </a>
         </div>
         <div>
          <p className='font-bold mb-1'>Sharon Williams</p>
          <a
           href='mailto:sharon@aegon-studios.com'
           className='opacity-60 hover:opacity-100 transition-opacity flex items-center gap-2'
          >
           sharon@aegon-studios.com <ArrowUpRightIcon size={14} />
          </a>
         </div>
        </div>
       </div>
      </div>
     </div>
    </motion.div>

    {/* CTA */}
    <div className='mt-32 border-t border-border pt-16 text-center'>
     <h2 className='text-[clamp(2rem,4vw,3.5rem)] font-display font-medium mb-8'>
      Ready to tell your story?
     </h2>
     <Link
      to='/contact'
      className='inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background text-sm font-bold tracking-widest rounded-full hover:scale-105 transition-transform'
     >
      START A PROJECT <ArrowUpRightIcon weight='bold' />
     </Link>
    </div>
   </div>
  </div>
 );
}
