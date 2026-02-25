import { Link } from 'react-router-dom'
import { useReveal, useStagger } from '../hooks/useGsap'
import grigliata from '../assets/foto/foto-9.webp'

const distances = [
  { city: 'Roma', km: '62 km', time: '~50 min' },
  { city: 'Latina', km: '10 km', time: '~15 min' },
  { city: 'Nettuno', km: '15 km', time: '~20 min' },
  { city: 'Anzio', km: '20 km', time: '~25 min' },
  { city: 'Ciampino', km: '50 km', time: '~45 min' },
  { city: 'Fiumicino', km: '70 km', time: '~55 min' },
]

const schedule = [
  { day: 'Lunedì', hours: 'Chiuso', closed: true },
  { day: 'Martedì', hours: '12:15 — 15:00', closed: false },
  { day: 'Mercoledì', hours: '12:15 — 15:00', closed: false },
  { day: 'Giovedì', hours: '12:15 — 15:00', closed: false },
  { day: 'Venerdì', hours: '12:15 — 15:00 | 19:30 — 22:30', closed: false },
  { day: 'Sabato', hours: '12:15 — 15:00 | 19:30 — 22:30', closed: false },
  { day: 'Domenica', hours: '12:15 — 15:00', closed: false },
]

export default function Contatti() {
  const contactRef = useStagger({ stagger: 0.1, y: 40 })
  const hoursRef = useReveal({ y: 40 })
  const distancesRef = useStagger({ stagger: 0.06, y: 20 })

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-end pb-16 md:pb-24 pt-32 bg-[#0a1f36]">
        <div className="absolute inset-0 overflow-hidden">
          <img src={grigliata} alt="" className="w-full h-full object-cover opacity-20" aria-hidden="true" />
        </div>
        <div className="absolute top-0 left-0 w-[40%] h-full bg-[#c4a05c]/[0.03]" />
        <div className="absolute bottom-16 right-12 pointer-events-none select-none" aria-hidden="true">
          <span className="font-heading text-[clamp(10rem,28vw,22rem)] font-light leading-none text-white/[0.02]">D</span>
        </div>
        <div className="relative z-10 w-full px-6 md:px-10 lg:px-16">
          <div className="w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#c4a05c]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold">Come raggiungerci</span>
            </div>
            <h1 className="font-heading font-light text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-white tracking-[-0.02em]">
              Dove <span className="italic text-[#c4a05c]">Siamo</span>
            </h1>
          </div>
        </div>
      </section>

      {/* MAP - FULL WIDTH above, contact details overlapping below */}
      <section className="bg-[#fffef9]">
        {/* Full-width map */}
        <div className="w-full bg-[#0a1f36]/[0.04]">
          <iframe
            title="Ristorante Colombini - Mappa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.5!2d12.89!3d41.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVia+Cursori+della+Palude+13%2C+Borgo+Montello!5e0!3m2!1sit!2sit!4v1700000000000"
            width="100%" height="500" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>

        {/* Contact details overlapping the bottom of the map */}
        <div className="px-6 md:px-10 lg:px-16">
          <div className="w-full">
            <div ref={contactRef} className="bg-[#fffef9] -mt-20 md:-mt-28 relative z-10 shadow-2xl shadow-black/[0.06] p-8 md:p-12 lg:p-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold block mb-4">Indirizzo</span>
                  <p className="text-[#0a1f36] text-lg leading-relaxed">Via Cursori della Palude 13</p>
                  <p className="text-[#0a1f36] text-lg">04100 Borgo Montello (LT)</p>
                  <p className="text-[#0a1f36]/40 text-sm mt-2">Frazione di Latina</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold block mb-4">Telefono</span>
                  <a href="tel:07730481561" className="block text-[#0a1f36] text-lg hover:text-[#c4a05c] transition-colors">0773 0481561</a>
                  <a href="tel:3925674723" className="block text-[#0a1f36] text-lg hover:text-[#c4a05c] transition-colors">392 567 4723</a>
                  <a href="https://wa.me/393925674723" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-[10px] uppercase tracking-[0.2em] font-bold text-[#0a1f36]/40 hover:text-[#c4a05c] transition-colors border-b border-[#0a1f36]/20 pb-0.5">
                    Scrivi su WhatsApp
                  </a>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold block mb-4">Social</span>
                  <a href="https://www.instagram.com/colombiniristorante" target="_blank" rel="noopener noreferrer" className="text-[#0a1f36] hover:text-[#c4a05c] transition-colors">
                    @colombiniristorante
                  </a>
                </div>
              </div>
              {/* Google Maps link */}
              <div className="mt-8 pt-6 border-t border-[#0a1f36]/[0.06]">
                <a href="https://www.google.com/maps/dir/?api=1&destination=Via+Cursori+della+Palude+13+Borgo+Montello+LT" target="_blank" rel="noopener noreferrer"
                  className="inline-block text-[10px] uppercase tracking-[0.2em] font-bold text-[#0a1f36]/40 hover:text-[#c4a05c] transition-colors border-b border-[#0a1f36]/20 pb-0.5">
                  Apri in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOURS - horizontal schedule cards instead of vertical list */}
      <section ref={hoursRef} className="bg-[#f9f3e8] py-20 md:py-28 px-6 md:px-10 lg:px-16 relative overflow-hidden">
        {/* Decorative watermark */}
        <div className="absolute top-1/2 -translate-y-1/2 -right-12 pointer-events-none select-none" aria-hidden="true">
          <span className="font-heading text-[clamp(10rem,20vw,18rem)] font-light leading-none text-[#0a1f36]/[0.02]">H</span>
        </div>
        <div className="w-full relative z-10">
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#c4a05c]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold">Orari</span>
            </div>
            <h2 className="font-heading font-light text-[var(--fluid-md)] text-[#0a1f36]">
              Quando <span className="italic">trovarci</span>
            </h2>
          </div>

          {/* Horizontal scrollable schedule cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
            {schedule.map((slot, idx) => (
              <div
                key={idx}
                className={`p-5 md:p-6 text-center transition-all ${
                  slot.closed
                    ? 'bg-[#722f37]/10 border border-[#722f37]/10'
                    : 'bg-[#fffef9] border border-[#0a1f36]/[0.04] shadow-sm'
                }`}
              >
                <span className={`font-heading text-base md:text-lg block mb-3 ${
                  slot.closed ? 'text-[#722f37]' : 'text-[#0a1f36]'
                }`}>
                  {slot.day}
                </span>
                <div className="w-6 h-[1px] bg-[#c4a05c]/30 mx-auto mb-3" />
                <span className={`text-xs leading-relaxed block ${
                  slot.closed ? 'text-[#722f37] font-bold' : 'text-[#0a1f36]/50'
                }`}>
                  {slot.hours.split(' | ').map((h, i) => (
                    <span key={i} className="block">{h}</span>
                  ))}
                </span>
              </div>
            ))}
          </div>
          <p className="text-[#0a1f36]/30 text-xs mt-8 uppercase tracking-[0.15em]">Ferie: Settembre e Gennaio</p>
        </div>
      </section>

      {/* DISTANCES - varied card sizes for visual interest */}
      <section className="bg-[#fffef9] py-20 md:py-28 px-6 md:px-10 lg:px-16">
        <div className="w-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#c4a05c]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold">Come arrivare</span>
          </div>
          <h2 className="font-heading font-light text-[var(--fluid-md)] text-[#0a1f36] mb-4 max-w-2xl">
            SS148 Pontina, uscita <span className="italic">Borgo Montello/Nettuno</span>
          </h2>
          <p className="text-[#0a1f36]/50 mb-12 max-w-lg">Ampio parcheggio privato gratuito. Accessibile in sedia a rotelle.</p>

          <div ref={distancesRef} className="grid grid-cols-12 gap-4">
            {distances.map((d, idx) => {
              /* Varied column spans: first two cities larger, rest smaller */
              const spanClass = idx < 2
                ? 'col-span-12 sm:col-span-6 md:col-span-4'
                : 'col-span-6 sm:col-span-4 md:col-span-2'

              return (
                <div
                  key={idx}
                  className={`${spanClass} ${
                    idx < 2
                      ? 'bg-[#f9f3e8] p-6 md:p-8'
                      : 'border border-[#0a1f36]/[0.06] p-5'
                  }`}
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#0a1f36]/30 font-bold block mb-2">{d.city}</span>
                  <span className={`font-heading text-[#0a1f36] font-light block ${
                    idx < 2 ? 'text-2xl md:text-3xl mb-2' : 'text-xl'
                  }`}>{d.km}</span>
                  <span className="text-[#c4a05c] text-xs font-bold">{d.time}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a1f36] py-20 md:py-24 px-6 md:px-10 lg:px-16">
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h2 className="font-heading font-light text-[var(--fluid-md)] text-white">
            Ti <span className="italic text-[#c4a05c]">aspettiamo</span>
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link to="/prenota" className="btn-gold">Prenota un tavolo</Link>
            <a href="tel:07730481561" className="btn-secondary border-white/20 text-white/80 hover:bg-white hover:text-[#0a1f36]">0773 0481561</a>
          </div>
        </div>
      </section>
    </div>
  )
}
