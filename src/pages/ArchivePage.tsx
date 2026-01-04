import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CaretLeft, CaretRight } from '@phosphor-icons/react'
import { Contact } from '@/components/Contact'
import { archiveData } from '@/data/archiveData'

const categories = ['All', 'Photography', 'Video', 'Brand', 'Events', 'Podcast']
const ITEMS_PER_PAGE = 6

export function ArchivePage() {
  const [filter, setFilter] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Reset page when filter changes
  useEffect(() => {
    setCurrentPage(1)
  }, [filter])

  const filteredItems = filter === 'All' 
    ? archiveData 
    : archiveData.filter(item => item.category === filter)

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: containerRef.current?.offsetTop ?? 0, behavior: 'smooth' })
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="pt-40 pb-20 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-3xl">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-40 mb-8 block underline decoration-foreground/20 underline-offset-8">The Collection</span>
              <h1 className="text-[clamp(4rem,12vw,10rem)] leading-[0.8] font-bold mb-8">
                PROJECT <br />
                <span className="stroke-text">ARCHIVE</span>
              </h1>
              <p className="text-xl md:text-2xl opacity-50 leading-tight max-w-xl">
                A comprehensive record of visual storytelling, commercial production, and artistic exploration.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-x-8 gap-y-4 border-l border-border pl-8 h-fit pb-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-all relative ${
                    filter === cat ? 'text-foreground' : 'opacity-20 hover:opacity-100'
                  }`}
                >
                  {cat}
                  {filter === cat && (
                    <motion.div 
                      layoutId="activeFilter"
                      className="absolute -bottom-4 left-0 right-0 h-1 bg-foreground"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24 min-h-[800px]"
          >
            <AnimatePresence mode="popLayout">
              {paginatedItems.map((item, idx) => (
                <Link key={item.id} to={`/project/${item.id}`}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="group cursor-pointer"
                  >
                    <div className="overflow-hidden bg-card aspect-[4/5] mb-8 relative">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                      />
                      <div className="absolute top-6 left-6">
                        <span className="px-3 py-1 bg-background/80 backdrop-blur-md border border-border text-[8px] font-bold tracking-[0.3em] uppercase">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-3xl font-bold tracking-tight transition-colors uppercase">{item.title}</h3>
                        <span className="text-xl font-display opacity-20 group-hover:opacity-100 transition-opacity">/{item.id.toString().padStart(2, '0')}</span>
                      </div>
                      
                      <p className="opacity-40 text-sm leading-relaxed line-clamp-2 italic">
                        {item.description}
                      </p>
                      
                      <div className="pt-4 border-t border-border flex justify-between items-center">
                         <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">{item.client} &mdash; {item.year}</span>
                         <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                           <span className="text-[8px] font-bold tracking-[0.2em] uppercase">View Project</span>
                           <ArrowRight size={14} />
                         </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredItems.length === 0 && (
            <div className="py-40 text-center">
              <p className="text-2xl opacity-20 font-bold tracking-widest uppercase italic">No records found in this category.</p>
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-40 border-t border-border pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-4">
                <button 
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all disabled:opacity-20"
                >
                  <CaretLeft size={20} weight="bold" />
                </button>
                <div className="flex gap-2">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handlePageChange(i + 1)}
                      className={`w-12 h-12 text-[10px] font-bold tracking-widest flex items-center justify-center transition-all ${
                        currentPage === i + 1 ? 'bg-foreground text-background' : 'hover:bg-foreground/5 opacity-40 hover:opacity-100'
                      }`}
                    >
                      {(i + 1).toString().padStart(2, '0')}
                    </button>
                  ))}
                </div>
                <button 
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all disabled:opacity-20"
                >
                  <CaretRight size={20} weight="bold" />
                </button>
              </div>
              
              <p className="text-[10px] font-bold tracking-[0.4em] opacity-20 uppercase">
                Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredItems.length)} of {filteredItems.length} Projects
              </p>
            </div>
          )}
        </div>
      </section>

      <Contact />
    </div>
  )
}
