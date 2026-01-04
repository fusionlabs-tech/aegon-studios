import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from '@/components/Navigation'
import { ScrollProgress } from '@/components/ScrollProgress'
import { Toaster } from '@/components/ui/sonner'
import { Home } from '@/pages/Home'
import { ServicesPage } from '@/pages/ServicesPage'
import { AboutPage } from '@/pages/AboutPage'
import { ArchivePage } from '@/pages/ArchivePage'
import { ContactPage } from '@/pages/ContactPage'
import { ProjectDetailPage } from '@/pages/ProjectDetailPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { useLocation } from 'react-router-dom'
import { PageTransition } from '@/components/PageTransition'
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="/services" element={
          <PageTransition>
            <ServicesPage />
          </PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition>
            <AboutPage />
          </PageTransition>
        } />
        <Route path="/archive" element={
          <PageTransition>
            <ArchivePage />
          </PageTransition>
        } />
        <Route path="/contact" element={
          <PageTransition>
            <ContactPage />
          </PageTransition>
        } />
        <Route path="/project/:id" element={
          <PageTransition>
            <ProjectDetailPage />
          </PageTransition>
        } />
        <Route path="*" element={
          <PageTransition>
            <NotFoundPage />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <div className="relative bg-background min-h-screen">
        <ScrollProgress />
        <Navigation />
        <AnimatedRoutes />
        <Toaster />
      </div>
    </Router>
  )
}

export default App