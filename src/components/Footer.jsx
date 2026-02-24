import { Link } from 'react-router-dom'
import { Phone, MapPin, Mail, Clock, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-mare-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <h3 className="font-heading text-3xl font-bold text-white">Colombini</h3>
              <p className="text-[10px] uppercase tracking-[0.25em] text-sabbia-400 font-body font-bold mt-1">
                Ristorante &bull; Borgo Montello
              </p>
            </Link>
            <p className="text-mare-200 text-sm leading-relaxed mb-6">
              Pesce fresco di Anzio dal 1993. Tradizione familiare, qualità garantita.
              Riconosciuto dall'Accademia Italiana della Cucina.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/colombiniristorante"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-mare-800 flex items-center justify-center hover:bg-sabbia-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-mare-800 flex items-center justify-center hover:bg-sabbia-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Navigazione */}
          <div>
            <h4 className="font-heading text-xl font-semibold text-sabbia-400 mb-6">Navigazione</h4>
            <nav className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Chi Siamo', href: '/chi-siamo' },
                { name: 'Menu', href: '/menu' },
                { name: 'La Cantina', href: '/cantina' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Eventi', href: '/eventi' },
                { name: 'Contatti', href: '/contatti' },
                { name: 'Prenota', href: '/prenota' },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-mare-200 hover:text-sabbia-400 transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="font-heading text-xl font-semibold text-sabbia-400 mb-6">Contatti</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-sabbia-500 mt-0.5 shrink-0" />
                <div className="text-sm text-mare-200">
                  <p>Via Cursori della Palude 13</p>
                  <p>04100 Borgo Montello (LT)</p>
                </div>
              </div>
              <a href="tel:07730481561" className="flex items-center gap-3 text-mare-200 hover:text-sabbia-400 transition-colors">
                <Phone size={18} className="text-sabbia-500 shrink-0" />
                <span className="text-sm">0773 0481561</span>
              </a>
              <a href="tel:3925674723" className="flex items-center gap-3 text-mare-200 hover:text-sabbia-400 transition-colors">
                <Phone size={18} className="text-sabbia-500 shrink-0" />
                <span className="text-sm">392 567 4723</span>
              </a>
              <a
                href="https://www.instagram.com/colombiniristorante"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-mare-200 hover:text-sabbia-400 transition-colors"
              >
                <Instagram size={18} className="text-sabbia-500 shrink-0" />
                <span className="text-sm">@colombiniristorante</span>
              </a>
            </div>
          </div>

          {/* Orari */}
          <div>
            <h4 className="font-heading text-xl font-semibold text-sabbia-400 mb-6">Orari</h4>
            <div className="space-y-3 text-sm text-mare-200">
              <div className="flex justify-between">
                <span>Lunedì</span>
                <span className="text-vino-400 font-bold">Chiuso</span>
              </div>
              <div className="flex justify-between">
                <span>Mar - Gio</span>
                <span>12:15 - 15:00</span>
              </div>
              <div className="flex justify-between">
                <span>Ven - Sab</span>
                <div className="text-right">
                  <p>12:15 - 15:00</p>
                  <p>19:30 - 22:30</p>
                </div>
              </div>
              <div className="flex justify-between">
                <span>Domenica</span>
                <span>12:15 - 15:00</span>
              </div>
              <div className="pt-3 mt-3 border-t border-mare-800">
                <div className="flex items-center gap-2 text-sabbia-400">
                  <Clock size={14} />
                  <span className="text-xs">Chiusura serale: Lun e Dom</span>
                </div>
                <p className="text-xs text-mare-400 mt-2">Ferie: Settembre e Gennaio</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-mare-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-mare-400">
            <p>&copy; {currentYear} Ristorante Colombini - Borgo Montello (LT)</p>
            <div className="flex items-center gap-4">
              <span>Accademia Italiana della Cucina</span>
              <span>|</span>
              <a href="#" className="hover:text-sabbia-400 transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-sabbia-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
