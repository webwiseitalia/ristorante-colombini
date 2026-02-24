import { Link } from 'react-router-dom'
import { useStagger } from '../hooks/useGsap'
import antipastiMisti from '../assets/foto/foto-14.webp'
import paccheriScampi from '../assets/foto/foto-4.webp'
import grigliata from '../assets/foto/foto-9.webp'
import frittura from '../assets/foto/foto-13.webp'
import dessert from '../assets/foto/foto-1.webp'
import gnocchetti from '../assets/foto/foto-5.webp'

const menuSections = [
  {
    id: 'antipasti-mare', title: 'Antipasti di Mare', label: 'Dal mare',
    items: [
      { name: 'Antipasto misto della casa', desc: 'Insalata di polpo, mozzarella di bufala con alici, fritti misti' },
      { name: 'Insalata di polpo', desc: 'Polpo tenero con patate, olive e prezzemolo' },
      { name: 'Mozzarella di bufala con alici', desc: 'Bufala campana con alici marinate' },
      { name: 'Fritti misti', desc: 'Selezione di fritture di mare dorate e croccanti' },
      { name: 'Carpaccio di pesce', desc: 'Pesce fresco tagliato finemente con agrumi' },
    ],
  },
  {
    id: 'antipasti-terra', title: 'Antipasti di Terra', label: 'Dalla terra',
    items: [
      { name: 'Tagliere di salumi', desc: 'Selezione di salumi artigianali' },
      { name: 'Antipasto di montagna', desc: 'Salumi, formaggi e conserve del territorio' },
    ],
  },
  {
    id: 'primi-mare', title: 'Primi di Mare', label: 'Pasta di Gragnano',
    items: [
      { name: 'Linguine allo scoglio misto in bianco', desc: 'Il piatto da non perdere — Accademia Italiana della Cucina', signature: true },
      { name: 'Mezzi paccheri con rana pescatrice e pachino', desc: 'Pasta di Gragnano con rana pescatrice fresca' },
      { name: 'Tagliolini con calamaretti e rucola', desc: 'Un abbinamento indimenticabile', highlight: true },
      { name: 'Gnocchetti con gamberetti e pachino', desc: 'Gnocchetti fatti in casa con gamberetti freschi' },
      { name: 'Tagliolini con polipetti', desc: 'Pasta fresca con polipetti verace' },
      { name: 'Mezzamanica alla rana pescatrice', desc: 'Formato di pasta corta con sugo di rana pescatrice' },
      { name: 'Spaghetti alle vongole', desc: 'Il classico della tradizione, rigorosamente in bianco' },
    ],
  },
  {
    id: 'primi-terra', title: 'Primi di Terra', label: 'Tradizione',
    items: [
      { name: 'Carbonara', desc: 'Eccellente anche per chi non prende pesce' },
      { name: 'Primi della tradizione', desc: 'Piatti della tradizione romana e laziale' },
    ],
  },
  {
    id: 'secondi', title: 'Secondi di Mare', label: 'Il pescato',
    items: [
      { name: 'Grigliata di pesce', desc: 'Scampi, gamberoni, calamari e orata', highlight: true },
      { name: 'Rombo al forno in crosta di patate', desc: 'Rombo con crosta di patate croccante' },
      { name: 'Frittura di pesce', desc: 'Frittura mista leggera e croccante' },
      { name: 'Calamari alla piastra', desc: 'Calamari freschi con olio e limone' },
      { name: 'Pesce al guazzetto', desc: 'Pesce del giorno in guazzetto' },
    ],
  },
  {
    id: 'dolci', title: 'Dolci', label: 'Per finire',
    items: [
      { name: 'Dolci della casa', desc: 'Preparati artigianalmente' },
      { name: 'Gelato artigianale', desc: 'Fatto in casa con ingredienti naturali' },
    ],
  },
]

const photoBreaks = [
  { afterSection: 0, images: [antipastiMisti, frittura], caption: 'I nostri antipasti' },
  { afterSection: 2, images: [gnocchetti, paccheriScampi], caption: 'Pasta fresca e pesce' },
  { afterSection: 4, images: [grigliata], caption: 'Dal mare alla griglia' },
]

export default function Menu() {
  const menuRef = useStagger({ stagger: 0.06, y: 30 })

  /* ── renderers for each section's unique layout ── */

  const renderAntipastiMare = (section) => (
    <div ref={menuRef} className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-1">
      {section.items.map((item, idx) => (
        <div
          key={idx}
          className={`py-5 ${idx < section.items.length - 1 ? 'border-b border-[#0a1f36]/[0.04]' : ''}`}
        >
          <h3 className="font-heading text-[clamp(1.1rem,1.5vw,1.4rem)] font-light text-[#0a1f36]/80">
            {item.name}
          </h3>
          <p className="text-[#0a1f36]/40 text-sm mt-1">{item.desc}</p>
        </div>
      ))}
    </div>
  )

  const renderAntipastiTerra = (section) => (
    <div className="space-y-0">
      {section.items.map((item, idx) => (
        <div
          key={idx}
          className={`py-5 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 ${idx < section.items.length - 1 ? 'border-b border-[#0a1f36]/[0.04]' : ''}`}
        >
          <h3 className="font-heading text-[clamp(1.1rem,1.5vw,1.4rem)] font-light text-[#0a1f36]/80 flex-1">
            {item.name}
          </h3>
          <p className="text-[#0a1f36]/40 text-sm md:text-right md:max-w-[280px]">{item.desc}</p>
        </div>
      ))}
    </div>
  )

  const renderPrimiMare = (section) => (
    <div className="space-y-0">
      {section.items.map((item, idx) => (
        <div
          key={idx}
          className={`py-5 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 ${idx < section.items.length - 1 ? 'border-b border-[#0a1f36]/[0.04]' : ''} ${
            item.signature ? 'bg-[#f9f3e8] -mx-6 px-6 py-6 border-l-2 border-[#c4a05c]' : ''
          }`}
        >
          <div className="flex items-baseline gap-3 flex-1">
            <h3 className={`font-heading text-[clamp(1.1rem,1.5vw,1.4rem)] font-light ${item.signature ? 'text-[#0a1f36]' : 'text-[#0a1f36]/80'}`}>
              {item.name}
            </h3>
            {item.signature && <span className="text-[8px] uppercase tracking-[0.2em] text-[#c4a05c] font-bold whitespace-nowrap">Da non perdere</span>}
            {item.highlight && <span className="text-[8px] uppercase tracking-[0.2em] text-[#0a1f36]/30 font-bold whitespace-nowrap">Consigliato</span>}
          </div>
          <p className="text-[#0a1f36]/40 text-sm md:text-right md:max-w-[280px]">{item.desc}</p>
        </div>
      ))}
    </div>
  )

  const renderPrimiTerra = (section) => (
    <div className="space-y-0">
      {section.items.map((item, idx) => (
        <div
          key={idx}
          className={`py-5 ${idx < section.items.length - 1 ? 'border-b border-[#0a1f36]/[0.04]' : ''}`}
        >
          <h3 className="font-heading text-[clamp(1.1rem,1.5vw,1.4rem)] font-light text-[#0a1f36]/80">
            {item.name}
          </h3>
          <p className="text-[#0a1f36]/40 text-sm mt-1">{item.desc}</p>
        </div>
      ))}
    </div>
  )

  const renderSecondi = (section) => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12">
      <div className="lg:col-span-7 space-y-0">
        {section.items.map((item, idx) => (
          <div
            key={idx}
            className={`py-5 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 ${idx < section.items.length - 1 ? 'border-b border-[#0a1f36]/[0.04]' : ''}`}
          >
            <div className="flex items-baseline gap-3 flex-1">
              <h3 className={`font-heading text-[clamp(1.1rem,1.5vw,1.4rem)] font-light ${item.highlight ? 'text-[#0a1f36]' : 'text-[#0a1f36]/80'}`}>
                {item.name}
              </h3>
              {item.highlight && <span className="text-[8px] uppercase tracking-[0.2em] text-[#0a1f36]/30 font-bold whitespace-nowrap">Consigliato</span>}
            </div>
            <p className="text-[#0a1f36]/40 text-sm md:text-right md:max-w-[280px]">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
        <div className="relative">
          <span className="font-heading text-[8rem] font-light leading-none text-[#0a1f36]/[0.03] select-none" aria-hidden="true">II</span>
          <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.3em] text-[#c4a05c]/60 whitespace-nowrap">Secondi piatti</p>
        </div>
      </div>
    </div>
  )

  const renderDolci = (section) => (
    <div className="space-y-0">
      {section.items.map((item, idx) => (
        <div
          key={idx}
          className={`py-4 ${idx < section.items.length - 1 ? 'border-b border-[#0a1f36]/[0.04]' : ''}`}
        >
          <h3 className="font-heading text-[clamp(1.1rem,1.5vw,1.3rem)] font-light text-[#0a1f36]/80">
            {item.name}
          </h3>
          <p className="text-[#0a1f36]/40 text-sm mt-1">{item.desc}</p>
        </div>
      ))}
    </div>
  )

  /* ── photo break renderers ── */

  const renderPhotoBreak = (photoBreak, sIdx) => {
    if (sIdx === 0) {
      /* After Antipasti di Mare: asymmetric - one tall, one short */
      return (
        <div className="mb-20 md:mb-28 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            <div className="md:col-span-7 overflow-hidden">
              <img src={photoBreak.images[0]} alt={photoBreak.caption} className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            {photoBreak.images[1] && (
              <div className="md:col-span-5 overflow-hidden">
                <img src={photoBreak.images[1]} alt={photoBreak.caption} className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            )}
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#0a1f36]/25 mt-3">{photoBreak.caption}</p>
        </div>
      )
    }
    if (sIdx === 2) {
      /* After Primi di Mare: reversed asymmetry, narrow left + wide right */
      return (
        <div className="mb-20 md:mb-28 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {photoBreak.images[1] && (
              <div className="md:col-span-4 md:col-start-1 overflow-hidden">
                <img src={photoBreak.images[0]} alt={photoBreak.caption} className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            )}
            <div className="md:col-span-8 overflow-hidden">
              <img src={photoBreak.images[1] || photoBreak.images[0]} alt={photoBreak.caption} className="w-full aspect-[16/9] object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#0a1f36]/25 mt-3 text-right">{photoBreak.caption}</p>
        </div>
      )
    }
    /* After Secondi: single image, wide cinematic crop */
    return (
      <div className="mb-20 md:mb-28 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="overflow-hidden">
          <img src={photoBreak.images[0]} alt={photoBreak.caption} className="w-full aspect-[21/9] object-cover hover:scale-105 transition-transform duration-700" />
        </div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#0a1f36]/25 mt-3 text-center">{photoBreak.caption}</p>
      </div>
    )
  }

  /* ── section header renderers ── */

  const renderSectionHeader = (section, sIdx) => {
    /* Antipasti di Mare — large number on top, title below, label to the right */
    if (sIdx === 0) {
      return (
        <div className="mb-10">
          <span className="block font-heading text-[5rem] md:text-[7rem] font-light text-[#0a1f36]/[0.05] leading-none -mb-4 md:-mb-6">01</span>
          <div className="flex items-baseline gap-6 border-b border-[#0a1f36]/10 pb-4">
            <h2 className="font-heading text-[clamp(1.8rem,3vw,2.8rem)] font-light text-[#0a1f36]">{section.title}</h2>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#c4a05c] font-bold">{section.label}</span>
          </div>
        </div>
      )
    }

    /* Antipasti di Terra — label stacked on top, no number, right-aligned */
    if (sIdx === 1) {
      return (
        <div className="mb-10 text-right">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold">{section.label}</span>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.2rem)] font-light text-[#0a1f36] mt-1">{section.title}</h2>
          <div className="w-16 h-[1px] bg-[#0a1f36]/10 ml-auto mt-4" />
        </div>
      )
    }

    /* Primi di Mare — side-by-side number + title, full decorative line */
    if (sIdx === 2) {
      return (
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-[#c4a05c]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold">{section.label}</span>
          </div>
          <div className="flex items-baseline gap-6">
            <span className="font-heading text-[3rem] md:text-[4rem] font-light text-[#0a1f36]/[0.06] leading-none">03</span>
            <h2 className="font-heading text-[clamp(1.8rem,3vw,2.8rem)] font-light text-[#0a1f36]">{section.title}</h2>
          </div>
          <div className="w-full h-[1px] bg-[#0a1f36]/10 mt-4" />
        </div>
      )
    }

    /* Primi di Terra — minimal, just title and a short gold line, no number */
    if (sIdx === 3) {
      return (
        <div className="mb-8">
          <div className="w-8 h-[1px] bg-[#c4a05c] mb-4" />
          <h2 className="font-heading text-[clamp(1.5rem,2vw,2rem)] font-light text-[#0a1f36]">{section.title}</h2>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#0a1f36]/30 font-bold mt-1 block">{section.label}</span>
        </div>
      )
    }

    /* Secondi — dramatic number watermark, label on top */
    if (sIdx === 4) {
      return (
        <div className="mb-10 relative">
          <span className="absolute -top-8 -left-4 font-heading text-[8rem] md:text-[10rem] font-light text-[#0a1f36]/[0.03] leading-none select-none pointer-events-none" aria-hidden="true">05</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#722f37] font-bold block mb-2">{section.label}</span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-light text-[#0a1f36]">{section.title}</h2>
          <div className="flex items-center gap-4 mt-4">
            <div className="w-12 h-[1px] bg-[#722f37]/40" />
            <div className="w-4 h-[1px] bg-[#722f37]/20" />
          </div>
        </div>
      )
    }

    /* Dolci — centered, elegant, italic subtitle */
    return (
      <div className="mb-8 text-center">
        <h2 className="font-heading text-[clamp(1.8rem,3vw,2.5rem)] font-light text-[#0a1f36]">{section.title}</h2>
        <span className="font-heading italic text-[#c4a05c]/70 text-lg mt-1 block">{section.label}</span>
        <div className="w-10 h-[1px] bg-[#c4a05c] mx-auto mt-4" />
      </div>
    )
  }

  /* ── section wrappers — each section gets its own width/alignment ── */

  const sectionWrapperClass = (sIdx) => {
    switch (sIdx) {
      case 0: return 'max-w-[1100px] mx-auto' // Antipasti di Mare: wide, 2-col grid
      case 1: return 'max-w-[800px] ml-auto'   // Antipasti di Terra: narrower, pushed right
      case 2: return 'max-w-[1000px] mx-auto'  // Primi di Mare: full width
      case 3: return 'max-w-[600px] mr-auto'   // Primi di Terra: narrow, left-aligned
      case 4: return 'max-w-[1100px] mx-auto'  // Secondi: full width, 12-col grid
      case 5: return 'max-w-[500px] mx-auto'   // Dolci: small, centered
      default: return 'max-w-[1000px] mx-auto'
    }
  }

  const renderItems = (section, sIdx) => {
    switch (sIdx) {
      case 0: return renderAntipastiMare(section)
      case 1: return renderAntipastiTerra(section)
      case 2: return renderPrimiMare(section)
      case 3: return renderPrimiTerra(section)
      case 4: return renderSecondi(section)
      case 5: return renderDolci(section)
      default: return null
    }
  }

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-end pb-16 md:pb-24 pt-32 bg-[#fffef9]">
        <div className="absolute top-0 left-0 w-[35%] h-full hidden lg:block overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)' }}>
          <img src={paccheriScampi} alt="Paccheri con scampi" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0a1f36]/60" />
        </div>
        <div className="absolute top-16 left-8 md:left-16 pointer-events-none select-none" aria-hidden="true">
          <span className="font-heading text-[clamp(10rem,30vw,22rem)] font-light leading-none text-[#0a1f36]/[0.03] lg:text-white/[0.05]">M</span>
        </div>
        <div className="relative z-10 w-full px-6 md:px-10 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-[#c4a05c]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold">La nostra cucina</span>
            </div>
            <h1 className="font-heading font-light text-[clamp(4rem,10vw,9rem)] leading-[0.85] text-[#0a1f36] tracking-[-0.03em]">
              Il Menu
            </h1>
            <div className="flex items-center gap-6 mt-6">
              <div className="w-24 h-[1px] bg-[#c4a05c]" />
              <div className="w-8 h-[1px] bg-[#c4a05c]/40" />
            </div>
            <p className="font-heading italic text-[clamp(1.2rem,2.2vw,1.8rem)] text-[#0a1f36]/50 mt-6 max-w-lg">
              Pescato fresco dal porto di Anzio, pasta di Gragnano, ingredienti di prima qualità
            </p>
          </div>
        </div>
      </section>

      {/* MENU SECTIONS */}
      <section className="py-[var(--space-xl)] bg-[#fffef9]">
        {menuSections.map((section, sIdx) => {
          const photoBreak = photoBreaks.find(pb => pb.afterSection === sIdx)
          return (
            <div key={section.id}>
              <div id={section.id} className="mb-20 md:mb-28 px-6 md:px-10 lg:px-16">
                <div className={sectionWrapperClass(sIdx)}>
                  {renderSectionHeader(section, sIdx)}
                  {renderItems(section, sIdx)}
                </div>
              </div>

              {/* Photo break between sections */}
              {photoBreak && renderPhotoBreak(photoBreak, sIdx)}
            </div>
          )
        })}
      </section>

      {/* DOLCI PHOTO */}
      <section className="bg-[#fffef9] pb-[var(--space-lg)] px-6 md:px-10 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-[500px] mx-auto">
            <div className="overflow-hidden">
              <img src={dessert} alt="Dolce della casa" className="w-full aspect-square object-cover" />
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#0a1f36]/25 mt-3 text-center">I nostri dolci artigianali</p>
            </div>
          </div>
        </div>
      </section>

      {/* PIZZERIA */}
      <section className="bg-[#fffef9] py-[var(--space-lg)] px-6 md:px-10 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#0a1f36] px-8 md:px-16 py-14 md:py-20">
            <div className="max-w-xl mx-auto lg:mx-0 lg:ml-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-[#c4a05c]" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold">Anche pizzeria</span>
              </div>
              <h2 className="font-heading font-light text-[var(--fluid-md)] text-white mb-4">Pizzeria</h2>
              <p className="text-white/50 max-w-md mb-8">Impasto lievitato naturalmente con ingredienti di qualità. Chiedi il menu pizze al personale.</p>
              <div className="flex items-center gap-6">
                <p className="text-[11px] text-[#c4a05c]/60 uppercase tracking-[0.15em]">Prezzo medio: €20-30 a persona</p>
                <div className="w-8 h-[1px] bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a1f36] py-[var(--space-lg)] px-6 md:px-10 lg:px-16">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h2 className="font-heading font-light text-[var(--fluid-md)] text-white">
            Trovato il tuo piatto <span className="italic text-[#c4a05c]">preferito?</span>
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link to="/prenota" className="btn-gold">Prenota un tavolo</Link>
            <Link to="/cantina" className="btn-secondary border-white/20 text-white/80 hover:bg-white hover:text-[#0a1f36]">I vini</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
