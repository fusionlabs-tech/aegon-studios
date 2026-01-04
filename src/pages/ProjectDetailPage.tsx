import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ShareNetwork, Calendar, User, Tag } from '@phosphor-icons/react'
import { archiveData } from '@/data/archiveData'
import { Contact } from '@/components/Contact'

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const project = archiveData.find(p => p.id === Number(id))

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!project) {
      navigate('/archive')
    }
  }, [project, navigate])

  if (!project) return null

  const nextProject = archiveData.find(p => p.id === (project.id % archiveData.length) + 1)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative h-[80vh] overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          src={project.image} 
          className="w-full h-full object-cover grayscale"
          alt={project.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        <div className="absolute inset-0 flex items-end pb-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <Link to="/archive" className="flex items-center gap-2 text-[10px] font-bold tracking-[0.4em] uppercase opacity-40 hover:opacity-100 transition-opacity mb-8">
                <ArrowLeft size={16} /> Back to Archive
              </Link>
              <h1 className="text-[clamp(3rem,10vw,8rem)] leading-[0.85] font-bold mb-4 uppercase">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="flex items-center gap-2">
                   <User size={16} className="opacity-20" />
                   <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">{project.client}</span>
                </div>
                <div className="flex items-center gap-2">
                   <Calendar size={16} className="opacity-20" />
                   <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">{project.year}</span>
                </div>
                <div className="flex items-center gap-2">
                   <Tag size={16} className="opacity-20" />
                   <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">{project.category}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-24">
            {/* Main Text */}
            <div className="lg:col-span-7 space-y-12">
               <motion.p 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight"
               >
                 {project.description}
               </motion.p>
               
               <div className="h-px w-24 bg-foreground/20" />
               
               <p className="text-xl text-foreground/50 leading-relaxed max-w-2xl">
                 {project.longDescription}
               </p>
               
               <div className="grid grid-cols-2 gap-12 pt-12">
                 <div>
                   <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-20 mb-6">Services</h4>
                   <ul className="space-y-3">
                     {project.services.map(s => (
                       <li key={s} className="text-sm font-bold tracking-widest uppercase opacity-60 flex items-center gap-3">
                         <div className="w-1 h-1 bg-foreground" /> {s}
                       </li>
                     ))}
                   </ul>
                 </div>
                 <div>
                   <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-20 mb-6">Credits</h4>
                   <ul className="space-y-3">
                     {Object.entries(project.credits).map(([key, val]) => (
                       <li key={key} className="text-sm flex flex-col">
                         <span className="text-[8px] font-bold tracking-[0.2em] opacity-20 uppercase mb-1">{key}</span>
                         <span className="font-bold tracking-widest uppercase opacity-60">{val}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
            </div>

            {/* Visual Sidebar/Detail */}
            <div className="lg:col-span-5 space-y-12">
               <div className="aspect-[4/5] bg-card border border-border overflow-hidden">
                  <img src={project.image} className="w-full h-full object-cover" alt="Detail" />
               </div>
               
               <div className="flex justify-between items-center py-6 border-y border-border mt-12">
                 <button className="flex items-center gap-3 text-[10px] font-bold tracking-widest uppercase opacity-40 hover:opacity-100 transition-opacity">
                   <ShareNetwork size={20} /> Share Project
                 </button>
                 <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">Ref. {project.id.toString().padStart(4, '0')}</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery (if exists) */}
      {project.gallery && (
        <section className="py-32 bg-foreground/2">
          <div className="container mx-auto px-6">
            <h2 className="text-[10px] font-bold tracking-[0.5em] uppercase opacity-20 mb-16 text-center">Process & Deliverables</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {project.gallery.map((img, i) => (
                <div key={i} className={`overflow-hidden bg-card ${i === 0 ? 'md:col-span-2 aspect-video' : 'aspect-square'}`}>
                  <img 
                    src={img} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" 
                    alt="Process"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Project Bridge */}
      {nextProject && (
        <section className="py-40 border-t border-border group cursor-pointer overflow-hidden relative">
          <Link to={`/project/${nextProject.id}`} className="absolute inset-0 z-10" />
          <div className="container mx-auto px-6 text-center relative z-0">
             <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-20 block mb-8 transition-transform duration-700 group-hover:-translate-y-4">Next Project</span>
             <h2 className="text-[clamp(3rem,8vw,6rem)] font-bold uppercase transition-all duration-700 group-hover:scale-105">
               {nextProject.title}
             </h2>
             <div className="mt-12 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-700">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase">View Details</span>
                <ArrowRight size={24} />
             </div>
          </div>
          {/* Background image reveal on hover */}
          <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-10 transition-opacity duration-1000">
             <img src={nextProject.image} className="w-full h-full object-cover grayscale" alt="Next Background" />
          </div>
        </section>
      )}

      <Contact />
    </div>
  )
}
