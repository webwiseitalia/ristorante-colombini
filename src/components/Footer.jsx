import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const lineRef = useRef(null)

  useEffect(() => {
    const line = lineRef.current
    if (!line) return
    gsap.set(line, { scaleX: 0, transformOrigin: 'left' })
    const trigger = ScrollTrigger.create({
      trigger: line,
      start: 'top 95%',
      onEnter: () => gsap.to(line, { scaleX: 1, duration: 1.5, ease: 'power3.out' }),
      once: true,
    })
    return () => trigger.kill()
  }, [])

  return (
    <footer className="bg-[#0a1f36] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        <p className="font-heading font-light whitespace-nowrap text-[clamp(6rem,20vw,18rem)] leading-none text-white/[0.02] -translate-x-12">
          Colombini &bull; Borgo Montello &bull; Dal 1993
        </p>
      </div>

      <div ref={lineRef} className="h-[1px] bg-[#c4a05c]/30" />

      <div className="relative z-10 px-6 md:px-10 lg:px-16 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-8">
          <div className="md:col-span-5 md:pr-12">
            <Link to="/" className="inline-block mb-8">
              <span className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.02em] text-white leading-none block">
                Colombini
              </span>
              <span className="text-[9px] uppercase tracking-[0.35em] text-[#c4a05c] font-bold mt-2 block">
                Ristorante &bull; Borgo Montello
              </span>
            </Link>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs mb-8">
              Pesce fresco dal porto di Anzio, tradizione familiare dal 1993.
              Riconosciuto dall'Accademia Italiana della Cucina.
            </p>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/colombiniristorante" target="_blank" rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-[#c4a05c] transition-colors duration-300" aria-label="Instagram">
                Instagram
              </a>
              <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-[#c4a05c] transition-colors duration-300" aria-label="Facebook">
                Facebook
              </a>
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold mb-6">Esplora</h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Chi Siamo', href: '/chi-siamo' },
                { name: 'Menu', href: '/menu' },
                { name: 'La Cantina', href: '/cantina' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Eventi', href: '/eventi' },
                { name: 'Prenota', href: '/prenota' },
              ].map((item) => (
                <Link key={item.name} to={item.href} className="text-white/30 hover:text-white text-sm transition-colors duration-300">
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-3 md:col-start-10">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold mb-6">Contatti</h4>
            <div className="space-y-4 text-sm text-white/30">
              <div>
                <p className="text-white/60">Via Cursori della Palude 13</p>
                <p>04100 Borgo Montello (LT)</p>
              </div>
              <div>
                <a href="tel:07730481561" className="block hover:text-[#c4a05c] transition-colors">0773 0481561</a>
                <a href="tel:3925674723" className="block hover:text-[#c4a05c] transition-colors">392 567 4723</a>
              </div>
              <div className="pt-2">
                <p className="text-white/60">Mar — Dom Pranzo</p>
                <p className="text-white/60">Ven — Sab anche Cena</p>
                <p className="text-white/20 text-xs mt-1">Chiuso il Lunedì</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/[0.06] px-6 md:px-10 lg:px-16 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] text-white/20 uppercase tracking-[0.15em]">
          <p>&copy; {currentYear} Ristorante Colombini</p>
          <div className="flex items-center gap-6">
            <span>Accademia Italiana della Cucina</span>
            <a href="#" className="hover:text-[#c4a05c] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#c4a05c] transition-colors">Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
