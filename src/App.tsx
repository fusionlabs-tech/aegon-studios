import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Toaster } from '@/components/ui/sonner';
import { Home } from '@/pages/Home';
import { MediaStudioPage } from '@/pages/MediaStudioPage';
import { SoftwareStudioPage } from '@/pages/SoftwareStudioPage';
import { ContactPage } from '@/pages/ContactPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { useLocation } from 'react-router-dom';
import { PageTransition } from '@/components/PageTransition';
import { AnimatePresence } from 'framer-motion';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { ArchivePage } from './pages/ArchivePage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AboutPage } from './pages/About';

function AnimatedRoutes() {
 const location = useLocation();

 return (
  <AnimatePresence mode='wait'>
   <Routes location={location} key={location.pathname}>
    <Route
     path='/'
     element={
      <PageTransition>
       <Home />
      </PageTransition>
     }
    />
    <Route
     path='/media'
     element={
      <PageTransition>
       <MediaStudioPage />
      </PageTransition>
     }
    />
    <Route
     path='/about'
     element={
      <PageTransition>
       <AboutPage />
      </PageTransition>
     }
    />
    <Route
     path='/software'
     element={
      <PageTransition>
       <SoftwareStudioPage />
      </PageTransition>
     }
    />
    <Route
     path='/contact'
     element={
      <PageTransition>
       <ContactPage />
      </PageTransition>
     }
    />
    <Route
     path='/privacy'
     element={
      <PageTransition>
       <PrivacyPage />
      </PageTransition>
     }
    />
    <Route
     path='/terms'
     element={
      <PageTransition>
       <TermsPage />
      </PageTransition>
     }
    />
    <Route
     path='/archive'
     element={
      <PageTransition>
       <ArchivePage />
      </PageTransition>
     }
    />
    <Route
     path='/project/:id'
     element={
      <PageTransition>
       <ProjectDetailPage />
      </PageTransition>
     }
    />
    <Route
     path='*'
     element={
      <PageTransition>
       <NotFoundPage />
      </PageTransition>
     }
    />
   </Routes>
  </AnimatePresence>
 );
}

function App() {
 return (
  <Router>
   <div className='relative bg-background min-h-screen'>
    <ScrollProgress />
    <Navigation />
    <AnimatedRoutes />
    <Toaster />
   </div>
  </Router>
 );
}

export default App;
