import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20 md:h-24">
            <Link to="/" className="relative group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-2xl md:text-3xl font-display font-bold tracking-tight ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                AEGON STUDIOS
              </motion.div>
              <div className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500 ${
                isScrolled ? 'bg-primary' : 'bg-white'
              }`} />
            </Link>

            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path}>
                  <Button
                    variant={location.pathname === link.path ? 'default' : 'ghost'}
                    className={`text-base font-semibold tracking-wide transition-all duration-300 ${
                      location.pathname === link.path
                        ? isScrolled 
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-white text-primary'
                        : isScrolled
                          ? 'text-foreground hover:bg-primary/10'
                          : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <List size={28} />}
            </Button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="fixed inset-0 z-40 bg-background md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`text-4xl font-display font-bold tracking-tight transition-colors ${
                      location.pathname === link.path
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
