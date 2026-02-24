import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, MapPin } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const isHome = location.pathname === '/'

  return (
    <>
      {/* Top bar */}
      <div className="bg-mare-800 text-white text-sm py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:07730481561" className="flex items-center gap-1.5 hover:text-sabbia-400 transition-colors">
              <Phone size={14} />
              <span>0773 0481561</span>
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} />
              <span>Via Cursori della Palude 13, Borgo Montello (LT)</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sabbia-300">Mar-Dom Pranzo | Ven-Sab anche Cena</span>
            <a
              href="https://www.instagram.com/colombiniristorante"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sabbia-400 transition-colors"
              aria-label="Seguici su Instagram"
            >
              @colombiniristorante
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="font-heading text-2xl md:text-3xl font-bold text-mare-800 leading-tight">
                  Colombini
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-sabbia-600 font-body font-bold">
                  Ristorante &bull; Borgo Montello
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-body font-bold uppercase tracking-wider transition-colors duration-200 rounded-md ${
                    location.pathname === item.href
                      ? 'text-mare-500 bg-mare-50'
                      : 'text-mare-700 hover:text-mare-500 hover:bg-mare-50/50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/prenota"
                className="ml-4 btn-primary text-xs py-2.5 px-6"
              >
                Prenota
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-mare-700 hover:text-mare-500 hover:bg-mare-50"
              aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white border-t border-mare-100 px-4 pb-6 pt-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-3 text-base font-body font-bold uppercase tracking-wider rounded-md ${
                  location.pathname === item.href
                    ? 'text-mare-500 bg-mare-50'
                    : 'text-mare-700 hover:text-mare-500 hover:bg-mare-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/prenota"
              className="block w-full text-center btn-primary mt-4"
            >
              Prenota un tavolo
            </Link>
            <div className="pt-4 border-t border-mare-100 mt-4 space-y-2 text-sm text-mare-600">
              <a href="tel:07730481561" className="flex items-center gap-2">
                <Phone size={16} />
                0773 0481561
              </a>
              <p className="flex items-center gap-2">
                <MapPin size={16} />
                Via Cursori della Palude 13, Borgo Montello
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
