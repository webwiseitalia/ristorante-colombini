import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useStagger } from '../hooks/useGsap'
import foto1 from '../assets/foto/foto-1.webp'
import foto2 from '../assets/foto/foto-2.webp'
import foto3 from '../assets/foto/foto-3.webp'
import foto4 from '../assets/foto/foto-4.webp'
import foto5 from '../assets/foto/foto-5.webp'
import foto6 from '../assets/foto/foto-6.webp'
import foto7 from '../assets/foto/foto-7.webp'
import foto8 from '../assets/foto/foto-8.webp'
import foto9 from '../assets/foto/foto-9.webp'
import foto10 from '../assets/foto/foto-10.webp'
import foto11 from '../assets/foto/foto-11.webp'
import foto12 from '../assets/foto/foto-12.webp'
import foto13 from '../assets/foto/foto-13.webp'
import foto14 from '../assets/foto/foto-14.webp'

const categories = [
  { id: 'tutti', label: 'Tutti' },
  { id: 'piatti', label: 'Piatti' },
  { id: 'ristorante', label: 'Ristorante' },
]

const galleryItems = [
  { id: 1, category: 'piatti', title: 'Dessert della Casa', aspect: 'aspect-[4/5]', image: foto1, colSpan: 'md:col-span-4', rowSpan: 'md:row-span-2' },
  { id: 2, category: 'piatti', title: 'Zuppa di Pesce', aspect: 'aspect-[3/2]', image: foto2, colSpan: 'md:col-span-5', rowSpan: '' },
  { id: 3, category: 'piatti', title: 'Gnocchi allo Scoglio', aspect: 'aspect-[4/3]', image: foto3, colSpan: 'md:col-span-3', rowSpan: '' },
  { id: 4, category: 'piatti', title: 'Paccheri con Scampi', aspect: 'aspect-[3/4]', image: foto4, colSpan: 'md:col-span-3', rowSpan: 'md:row-span-2' },
  { id: 5, category: 'piatti', title: 'Gnocchetti con Gamberi', aspect: 'aspect-[3/2]', image: foto5, colSpan: 'md:col-span-5', rowSpan: '' },
  { id: 6, category: 'piatti', title: 'Dolce con Frutti di Bosco', aspect: 'aspect-[4/5]', image: foto6, colSpan: 'md:col-span-6', rowSpan: 'md:row-span-2' },
  { id: 7, category: 'piatti', title: 'Dolce Artigianale', aspect: 'aspect-[4/3]', image: foto7, colSpan: 'md:col-span-3', rowSpan: '' },
  { id: 8, category: 'piatti', title: 'Pesce alla Griglia', aspect: 'aspect-[3/2]', image: foto8, colSpan: 'md:col-span-3', rowSpan: '' },
  { id: 9, category: 'piatti', title: 'Grigliata Mista di Pesce', aspect: 'aspect-[4/3]', image: foto9, colSpan: 'md:col-span-5', rowSpan: '' },
  { id: 10, category: 'piatti', title: 'Rombo Gratinato', aspect: 'aspect-[3/2]', image: foto10, colSpan: 'md:col-span-4', rowSpan: '' },
  { id: 11, category: 'ristorante', title: 'La Sala', aspect: 'aspect-[3/4]', image: foto11, colSpan: 'md:col-span-3', rowSpan: 'md:row-span-2' },
  { id: 12, category: 'piatti', title: 'Grigliata con Cicoria', aspect: 'aspect-[4/3]', image: foto12, colSpan: 'md:col-span-4', rowSpan: '' },
  { id: 13, category: 'piatti', title: 'Frittura di Calamari', aspect: 'aspect-[4/5]', image: foto13, colSpan: 'md:col-span-5', rowSpan: '' },
  { id: 14, category: 'piatti', title: 'Antipasti Misti', aspect: 'aspect-[3/4]', image: foto14, colSpan: 'md:col-span-4', rowSpan: '' },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('tutti')
  const [lightbox, setLightbox] = useState(null)
  const gridRef = useStagger({ stagger: 0.06, y: 40 })

  const filteredItems = activeCategory === 'tutti'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[45vh] flex items-end pb-16 md:pb-24 pt-32 bg-[#0a1f36]">
        <div className="absolute inset-0 overflow-hidden">
          <img src={foto2} alt="" className="w-full h-full object-cover opacity-15" aria-hidden="true" />
        </div>
        <div className="absolute top-16 right-16 pointer-events-none select-none" aria-hidden="true">
          <span className="font-heading text-[clamp(10rem,30vw,22rem)] font-light leading-none text-white/[0.02]">G</span>
        </div>
        <div className="relative z-10 w-full px-6 md:px-10 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#c4a05c]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold">Le nostre immagini</span>
            </div>
            <h1 className="font-heading font-light text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-white">Gallery</h1>
          </div>
        </div>
      </section>

      {/* FILTER - right aligned */}
      <div className="bg-[#fffef9] pt-10 pb-6 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1400px] mx-auto flex flex-wrap justify-end gap-3">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-[11px] uppercase tracking-[0.2em] font-bold px-5 py-2.5 transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#0a1f36] text-white'
                  : 'text-[#0a1f36]/40 hover:text-[#0a1f36]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* GRID - Broken masonry with 12-col grid, varied spans, overlapping items */}
      <section className="pb-32 pt-4 px-6 md:px-10 lg:px-16 bg-[#fffef9]">
        <div className="max-w-[1400px] mx-auto -mt-2">
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 auto-rows-[minmax(180px,auto)]">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.button
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setLightbox(item)}
                  className={`w-full ${item.colSpan} ${item.rowSpan} group relative overflow-hidden text-left ${
                    idx === 0 ? 'md:-mb-8' : ''
                  } ${idx === 5 ? 'md:-mt-12' : ''} ${idx === 3 ? 'md:-mt-6' : ''}`}
                >
                  <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[#0a1f36]/0 group-hover:bg-[#0a1f36]/50 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                    <span className="font-heading text-xl text-white font-light">{item.title}</span>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* DECORATIVE DIVIDER */}
      <div className="bg-[#f9f3e8] h-px w-full" />

      {/* INSTAGRAM CTA - asymmetric, content pushed right */}
      <section className="bg-[#0a1f36] py-28 md:py-36 px-6 md:px-10 lg:px-16 relative overflow-hidden">
        {/* Large decorative watermark on left */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-16 pointer-events-none select-none" aria-hidden="true">
          <span className="font-heading text-[clamp(14rem,40vw,28rem)] font-light leading-none text-white/[0.02]">IG</span>
        </div>
        {/* Asymmetric gold accent bar */}
        <div className="absolute top-0 right-[15%] w-px h-24 bg-[#c4a05c]/20" />
        <div className="max-w-[1400px] mx-auto">
          <div className="md:ml-auto md:w-[55%] lg:w-[45%] relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-[#c4a05c]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold">Seguici online</span>
            </div>
            <h2 className="font-heading font-light text-[clamp(2rem,5vw,3.5rem)] text-white mb-4 leading-[1.1]">
              Seguici su <span className="italic text-[#c4a05c]">Instagram</span>
            </h2>
            <p className="text-white/30 text-sm mb-10 max-w-sm">Scopri i piatti del giorno e le novità</p>
            <a href="https://www.instagram.com/colombiniristorante" target="_blank" rel="noopener noreferrer" className="btn-gold">
              @colombiniristorante
            </a>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="w-full max-w-3xl max-h-[80vh] overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <img src={lightbox.image} alt={lightbox.title} className="w-full h-full object-contain" />
              <div className="text-center mt-4">
                <span className="font-heading text-2xl text-white/80 font-light">{lightbox.title}</span>
              </div>
            </motion.div>
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-white/50 hover:text-white text-[11px] uppercase tracking-[0.2em] font-bold">
              Chiudi
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
