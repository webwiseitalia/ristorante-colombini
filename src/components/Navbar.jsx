import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Chi Siamo', href: '/chi-siamo' },
  { name: 'Menu', href: '/menu' },
  { name: 'La Cantina', href: '/cantina' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Eventi', href: '/eventi' },
  { name: 'Contatti', href: '/contatti' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#fffef9]/95 backdrop-blur-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 h-20 md:h-24">
          <Link to="/" className="relative z-50">
            <div className="flex flex-col">
              <span className="font-heading text-[clamp(1.3rem,2.5vw,2rem)] font-light tracking-[0.02em] text-[#0a1f36] leading-none">
                Colombini
              </span>
              <span className="text-[9px] uppercase tracking-[0.35em] text-[#c4a05c] font-bold mt-1">
                Borgo Montello
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-1">
              {navigation.map((item, i) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-4 py-2 text-[11px] uppercase tracking-[0.2em] font-bold transition-colors duration-300 ${
                    location.pathname === item.href
                      ? 'text-[#0a1f36]'
                      : 'text-[#0a1f36]/50 hover:text-[#0a1f36]'
                  }`}
                  style={{ marginLeft: i === 3 ? '2rem' : undefined }}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-4 right-4 h-[1px] bg-[#c4a05c]"
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </Link>
              ))}
            </div>
            <Link to="/prenota" className="ml-10 btn-primary text-[10px] py-3 px-8">
              Prenota
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-end justify-center gap-[6px]"
            aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8, width: 28 } : { rotate: 0, y: 0, width: 28 }}
              className="block h-[1.5px] bg-[#0a1f36] origin-center"
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.span
              animate={isOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0, width: 20 }}
              className="block h-[1.5px] bg-[#0a1f36]"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8, width: 28 } : { rotate: 0, y: 0, width: 14 }}
              className="block h-[1.5px] bg-[#0a1f36] origin-center"
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0a1f36] flex flex-col justify-between px-8 pt-28 pb-12"
          >
            <nav className="flex flex-col gap-2">
              {[{ name: 'Home', href: '/' }, ...navigation].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={item.href}
                    className={`block font-heading text-[clamp(2rem,6vw,3.5rem)] font-light leading-[1.1] transition-colors ${
                      location.pathname === item.href ? 'text-[#c4a05c]' : 'text-white/40 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }} className="space-y-4">
              <Link to="/prenota" className="btn-gold w-full justify-center text-[11px] py-4">
                Prenota un tavolo
              </Link>
              <div className="flex justify-between text-white/30 text-[10px] uppercase tracking-[0.2em]">
                <a href="tel:07730481561" className="hover:text-[#c4a05c] transition-colors">0773 0481561</a>
                <a href="https://www.instagram.com/colombiniristorante" target="_blank" rel="noopener noreferrer" className="hover:text-[#c4a05c] transition-colors">Instagram</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
