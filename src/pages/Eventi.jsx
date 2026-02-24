import { Link } from 'react-router-dom'
import { useStagger, useReveal } from '../hooks/useGsap'
import salaRistorante from '../assets/foto/foto-11.webp'
import antipastiMisti from '../assets/foto/foto-14.webp'

const eventTypes = [
  { title: 'Comunioni e Cresime', desc: 'Celebra i sacramenti con un pranzo speciale. Menu personalizzati.' },
  { title: 'Battesimi', desc: 'Accogli il nuovo arrivato in un ambiente accogliente e familiare.' },
  { title: 'Compleanni e Anniversari', desc: 'Le ricorrenze importanti con i sapori autentici della cucina.' },
  { title: 'Pranzi di Lavoro', desc: 'Location ideale per meeting aziendali. Servizio rapido.' },
  { title: 'Gruppi Organizzati', desc: '140 coperti per gruppi numerosi con menu dedicati.' },
  { title: 'Eventi Privati', desc: 'Ogni occasione merita il meglio. Menu su misura.' },
]

export default function Eventi() {
  const eventsRef = useStagger({ stagger: 0.1, y: 50 })
  const featuresRef = useReveal({ y: 40 })

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-end pb-16 md:pb-24 pt-32 bg-[#0a1f36]">
        <div className="absolute top-0 right-0 w-[50%] h-full hidden lg:block overflow-hidden">
          <img src={salaRistorante} alt="Sala del Ristorante Colombini" className="w-full h-full object-cover opacity-15" />
        </div>
        <div className="absolute bottom-16 left-12 pointer-events-none select-none" aria-hidden="true">
          <span className="font-heading text-[clamp(10rem,30vw,22rem)] font-light leading-none text-white/[0.02]">E</span>
        </div>
        <div className="relative z-10 w-full px-6 md:px-10 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#c4a05c]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold">Per le vostre occasioni</span>
            </div>
            <h1 className="font-heading font-light text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-white tracking-[-0.02em]">
              Eventi e
              <br />
              <span className="italic text-[#c4a05c] ml-[3vw]">Cerimonie</span>
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO - wider span with large "140" watermark */}
      <section className="py-24 md:py-32 px-6 md:px-10 lg:px-16 bg-[#fffef9] relative overflow-hidden">
        {/* Large watermark number */}
        <div className="absolute top-1/2 -translate-y-1/2 right-[5%] pointer-events-none select-none" aria-hidden="true">
          <span className="font-heading text-[clamp(10rem,25vw,22rem)] font-light leading-none text-[#0a1f36]/[0.03]">140</span>
        </div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="max-w-3xl">
            <p className="text-[#0a1f36]/60 leading-[1.8] text-lg md:text-xl">
              Con <strong className="text-[#0a1f36] font-normal">140 coperti</strong> e un servizio attento, il Ristorante Colombini è la location ideale per celebrare i vostri momenti più importanti.
            </p>
          </div>
          {/* Decorative accent line */}
          <div className="mt-12 w-32 h-[1px] bg-[#c4a05c]/30" />
        </div>
      </section>

      {/* EVENT TYPES - first item larger with accent bg, rest alternate left/right */}
      <section className="pb-32 px-6 md:px-10 lg:px-16 bg-[#fffef9]">
        <div ref={eventsRef} className="max-w-[1400px] mx-auto">
          {eventTypes.map((event, idx) => {
            const isFirst = idx === 0
            const isEven = idx % 2 === 0

            if (isFirst) {
              return (
                <div key={idx} className="mb-16">
                  {/* First event type - hero treatment */}
                  <div className="bg-[#f9f3e8] -mx-6 px-6 md:-mx-10 md:px-10 lg:-mx-16 lg:px-16 py-16 md:py-20 relative overflow-hidden">
                    <div className="absolute top-6 right-8 pointer-events-none select-none" aria-hidden="true">
                      <span className="font-heading text-[8rem] md:text-[12rem] font-light leading-none text-[#c4a05c]/[0.06]">01</span>
                    </div>
                    <div className="max-w-[1400px] mx-auto relative z-10">
                      <div className="max-w-2xl">
                        <h3 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-light text-[#0a1f36] mb-5">{event.title}</h3>
                        <p className="text-[#0a1f36]/50 text-lg max-w-md">{event.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <div
                key={idx}
                className={`py-10 md:py-14 ${idx < eventTypes.length - 1 ? 'border-b border-[#0a1f36]/[0.06]' : ''} ${
                  isEven ? '' : 'md:text-right'
                }`}
              >
                <div className={`flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
                  isEven ? '' : 'md:flex-row-reverse'
                }`}>
                  <span className={`font-heading text-[3.5rem] md:text-[4.5rem] font-light leading-none text-[#0a1f36]/[0.06] shrink-0 -mt-2`}>
                    0{idx + 1}
                  </span>
                  <div className={`${isEven ? '' : 'md:ml-auto'}`}>
                    <h3 className="font-heading text-[clamp(1.4rem,2.5vw,2.2rem)] font-light text-[#0a1f36] mb-3">{event.title}</h3>
                    <p className="text-[#0a1f36]/50 max-w-md">{event.desc}</p>
                  </div>
                </div>
                {/* Subtle accent divider between groups */}
                {idx === 2 && (
                  <div className="mt-14 flex items-center gap-4">
                    <div className="w-8 h-[1px] bg-[#c4a05c]/40" />
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#c4a05c]/40 font-bold">Aziendale</span>
                    <div className="flex-1 h-[1px] bg-[#c4a05c]/10" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* FEATURES - image overlaps into section above with negative margin-top */}
      <section ref={featuresRef} className="bg-[#f9f3e8] pt-0 pb-24 md:pb-32 px-6 md:px-10 lg:px-16 relative">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 pt-20 md:pt-28">
            <h2 className="font-heading font-light text-[var(--fluid-md)] text-[#0a1f36] mb-8">
              Perché scegliere <span className="italic">il Colombini</span>
            </h2>
            <div className="space-y-4">
              {['140 coperti disponibili', 'Menu personalizzabili', 'Ampio parcheggio privato', 'Accessibile in sedia a rotelle', 'Servizio professionale', 'Posizione comoda sulla Pontina'].map((f, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="w-4 h-[1px] bg-[#c4a05c]" />
                  <span className="text-[#0a1f36]/60 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 -mt-4 lg:-mt-28 relative z-10">
            <div className="aspect-[4/3] overflow-hidden shadow-2xl shadow-black/10">
              <img src={antipastiMisti} alt="Antipasti misti per eventi" className="w-full h-full object-cover" />
            </div>
            {/* Small decorative element below image */}
            <div className="mt-6 flex items-center gap-3 justify-end">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#0a1f36]/25 font-bold">Antipasti misti</span>
              <div className="w-8 h-[1px] bg-[#c4a05c]/30" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a1f36] py-24 md:py-28 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h2 className="font-heading font-light text-[var(--fluid-md)] text-white">
            Organizziamo il tuo <span className="italic text-[#c4a05c]">evento</span>
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link to="/prenota" className="btn-gold">Richiedi informazioni</Link>
            <a href="tel:07730481561" className="btn-secondary border-white/20 text-white/80 hover:bg-white hover:text-[#0a1f36]">0773 0481561</a>
          </div>
        </div>
      </section>
    </div>
  )
}
