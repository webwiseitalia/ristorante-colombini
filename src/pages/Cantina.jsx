import { Link } from 'react-router-dom'
import { useReveal, useStagger } from '../hooks/useGsap'
import grigliataPesce from '../assets/foto/foto-12.webp'
import pesceGriglia from '../assets/foto/foto-8.webp'

const wines = [
  { name: 'Malvasia Puntinata', type: 'Bianco', origin: 'Lazio', desc: 'Vitigno autoctono del Lazio. Profumo intenso e aromatico, note di frutta gialla e fiori bianchi.', pairing: 'Antipasti di mare, primi delicati', featured: true },
  { name: 'Bellone (Cacchione)', type: 'Bianco', origin: 'Nettuno', desc: 'Vino fresco e minerale con note di agrumi e mandorla. Tipico della zona.', pairing: 'Pesce alla griglia, fritture', featured: true },
  { name: 'Falanghina', type: 'Bianco', origin: 'Campania / Lazio', desc: 'Elegante e strutturato con sentori di pesca, mela verde e fiori di campo.', pairing: 'Primi di mare, secondi elaborati', featured: false },
  { name: 'Selezione bianchi laziali', type: 'Bianco', origin: 'Lazio', desc: 'Accuratamente scelti per accompagnare la nostra cucina di mare.', pairing: 'Tutti i piatti di pesce', featured: false },
  { name: 'Vini rossi selezionati', type: 'Rosso', origin: 'Lazio e Italia', desc: 'Per chi preferisce la carne, una selezione di rossi del territorio.', pairing: 'Piatti di carne, formaggi', featured: false },
]

const featuredWines = wines.filter(w => w.featured)
const otherWines = wines.filter(w => !w.featured)

export default function Cantina() {
  const winesRef = useStagger({ stagger: 0.12, y: 50 })
  const territoryRef = useReveal({ y: 40 })

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-end pb-16 md:pb-24 pt-32 bg-[#722f37]">
        <div className="absolute top-0 right-0 w-[45%] h-full hidden lg:block overflow-hidden" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}>
          <img src={grigliataPesce} alt="Grigliata di pesce - abbinamento vini" className="w-full h-full object-cover opacity-25" />
        </div>
        <div className="absolute bottom-16 right-12 pointer-events-none select-none" aria-hidden="true">
          <span className="font-heading text-[clamp(10rem,28vw,22rem)] font-light leading-none text-white/[0.03]">V</span>
        </div>
        <div className="relative z-10 w-full px-6 md:px-10 lg:px-16">
          <div className="w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#c4a05c]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold">I nostri vini</span>
            </div>
            <h1 className="font-heading font-light text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-white tracking-[-0.02em]">
              La Cantina
            </h1>
            <p className="font-heading italic text-[clamp(1.1rem,2vw,1.6rem)] text-white/50 mt-4 max-w-md">
              Vini del territorio per accompagnare i sapori del mare
            </p>
          </div>
        </div>
      </section>

      {/* WINES - Featured wines get card treatment, unfeatured in 2-col layout */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 bg-[#fffef9]">
        <div className="w-full">
          <div className="max-w-2xl mb-16 md:mb-24">
            <p className="text-[#0a1f36]/60 leading-[1.8]">
              Una selezione accurata di <strong className="text-[#0a1f36] font-normal">vini laziali e pontini</strong>, scelti per esaltare i sapori della nostra cucina. Dai vitigni autoctoni del Lazio alle etichette più pregiate del territorio.
            </p>
          </div>

          <div ref={winesRef}>
            {/* FEATURED WINES - card treatment with background */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
              {featuredWines.map((wine, idx) => (
                <div
                  key={idx}
                  className="bg-[#f9f3e8] p-8 md:p-10 lg:p-12 relative overflow-hidden group"
                >
                  {/* Large decorative number */}
                  <div className="absolute top-4 right-6 pointer-events-none select-none" aria-hidden="true">
                    <span className="font-heading text-[7rem] md:text-[9rem] font-light leading-none text-[#c4a05c]/[0.06]">0{idx + 1}</span>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-[9px] uppercase tracking-[0.2em] font-bold ${wine.type === 'Rosso' ? 'text-[#722f37]' : 'text-[#c4a05c]'}`}>{wine.type}</span>
                      <span className="w-4 h-[1px] bg-[#0a1f36]/10" />
                      <span className="text-[#0a1f36]/20 text-xs">{wine.origin}</span>
                    </div>
                    <h3 className="font-heading text-[clamp(1.5rem,2.5vw,2.2rem)] font-light text-[#0a1f36] mb-5">{wine.name}</h3>
                    <p className="text-[#0a1f36]/50 text-sm leading-relaxed mb-6 max-w-sm">{wine.desc}</p>
                    <div className="border-t border-[#0a1f36]/[0.06] pt-4">
                      <span className="text-[10px] uppercase tracking-[0.15em] text-[#0a1f36]/30 block mb-1">Abbinamento</span>
                      <p className="text-[#0a1f36]/50 text-sm">{wine.pairing}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider with label */}
            <div className="flex items-center gap-4 mb-12">
              <div className="w-8 h-[1px] bg-[#c4a05c]/40" />
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#c4a05c]/50 font-bold">La selezione</span>
              <div className="flex-1 h-[1px] bg-[#0a1f36]/[0.04]" />
            </div>

            {/* UNFEATURED WINES - smaller, 2-col layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
              {otherWines.map((wine, idx) => (
                <div
                  key={idx}
                  className={`py-8 ${idx < otherWines.length - 1 || idx % 2 === 0 ? 'border-b border-[#0a1f36]/[0.06]' : ''}`}
                >
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-heading text-[2rem] font-light text-[#0a1f36]/[0.06] leading-none shrink-0">0{idx + 3}</span>
                    <div>
                      <h3 className="font-heading text-[clamp(1.1rem,1.5vw,1.4rem)] font-light text-[#0a1f36]">{wine.name}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className={`text-[9px] uppercase tracking-[0.2em] font-bold ${wine.type === 'Rosso' ? 'text-[#722f37]' : 'text-[#c4a05c]'}`}>{wine.type}</span>
                        <span className="text-[#0a1f36]/20 text-xs">{wine.origin}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#0a1f36]/40 text-sm leading-relaxed pl-12">{wine.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TERRITORY - image overlaps edge of section, breaks out of grid */}
      <section ref={territoryRef} className="bg-[#f9f3e8] py-20 md:py-28 px-6 md:px-10 lg:px-16 relative overflow-visible">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
          {/* Image that breaks out of the section on the left */}
          <div className="lg:col-span-4 hidden lg:block relative">
            <div className="aspect-[3/4] overflow-hidden -ml-16 xl:-ml-24 relative z-10 shadow-2xl shadow-black/10">
              <img src={pesceGriglia} alt="Pesce alla griglia" className="w-full h-full object-cover" />
            </div>
            {/* Decorative accent below image */}
            <div className="absolute -bottom-8 left-0 w-20 h-[1px] bg-[#c4a05c]/30" />
          </div>
          <div className="lg:col-span-6 lg:col-start-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#c4a05c]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold">Il territorio</span>
            </div>
            <h2 className="font-heading font-light text-[var(--fluid-md)] text-[#0a1f36] mb-6">
              Il vino <span className="italic">pontino</span>
            </h2>
            <div className="space-y-4 text-[#0a1f36]/60 leading-[1.8]">
              <p>L'Agro Pontino vanta una tradizione vinicola millenaria. I terreni fertili, il clima mediterraneo e la vicinanza al mare creano condizioni ideali per vitigni unici come la <strong className="text-[#0a1f36] font-normal">Malvasia Puntinata</strong> e il <strong className="text-[#0a1f36] font-normal">Bellone</strong>.</p>
              <p>La nostra carta privilegia queste eccellenze locali, pensata appositamente per il pesce fresco della nostra cucina.</p>
            </div>
            {/* Decorative watermark */}
            <div className="mt-12 pointer-events-none select-none" aria-hidden="true">
              <span className="font-heading text-[5rem] font-light leading-none text-[#0a1f36]/[0.03]">Pontino</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#722f37] py-20 md:py-24 px-6 md:px-10 lg:px-16">
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h2 className="font-heading font-light text-[var(--fluid-md)] text-white">
            Un calice in <span className="italic text-[#c4a05c]">buona compagnia</span>
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link to="/prenota" className="btn-gold">Prenota un tavolo</Link>
            <Link to="/menu" className="btn-secondary border-white/20 text-white/80 hover:bg-white hover:text-[#722f37]">Il menu</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
