import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Camera, X, ChevronLeft, ChevronRight, Instagram } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import WaveDecoration from '../components/WaveDecoration'

const categories = [
  { id: 'tutti', label: 'Tutti' },
  { id: 'piatti', label: 'I Piatti' },
  { id: 'ristorante', label: 'Il Ristorante' },
  { id: 'momenti', label: 'Momenti' },
]

// Placeholder gallery items - will be replaced with real photos
const galleryItems = [
  { id: 1, category: 'piatti', title: 'Linguine allo Scoglio', desc: 'Il nostro piatto signature' },
  { id: 2, category: 'piatti', title: 'Grigliata di Pesce', desc: 'Scampi, gamberoni e orata' },
  { id: 3, category: 'ristorante', title: 'La Sala', desc: 'Eleganza e accoglienza' },
  { id: 4, category: 'piatti', title: 'Antipasto di Mare', desc: 'Freschezza dal porto di Anzio' },
  { id: 5, category: 'ristorante', title: 'Tavoli Apparecchiati', desc: 'Pronti per accogliervi' },
  { id: 6, category: 'piatti', title: 'Tagliolini Calamaretti', desc: 'Un abbinamento indimenticabile' },
  { id: 7, category: 'momenti', title: 'Famiglia Colombini', desc: 'La passione di una famiglia' },
  { id: 8, category: 'ristorante', title: 'L\'Ingresso', desc: 'Benvenuti da Colombini' },
  { id: 9, category: 'piatti', title: 'Rombo con Patate', desc: 'Cotto al forno in crosta' },
  { id: 10, category: 'momenti', title: 'In Cucina', desc: 'Giovanni al lavoro' },
  { id: 11, category: 'piatti', title: 'Frittura di Pesce', desc: 'Leggera e croccante' },
  { id: 12, category: 'ristorante', title: 'Dettagli', desc: 'Cura in ogni particolare' },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('tutti')
  const [lightbox, setLightbox] = useState(null)

  const filteredItems = activeCategory === 'tutti'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  const openLightbox = (index) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)

  const navigate = (direction) => {
    if (lightbox === null) return
    const newIndex = lightbox + direction
    if (newIndex >= 0 && newIndex < filteredItems.length) {
      setLightbox(newIndex)
    }
  }

  return (
    <div>
      {/* Page Hero */}
      <section className="relative bg-mare-800 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4">
            Gallery
          </h1>
          <div className="w-24 h-0.5 bg-sabbia-400 mx-auto mb-6" />
          <p className="text-mare-200 text-xl font-heading italic">
            Il nostro ristorante in immagini
          </p>
        </div>
        <WaveDecoration color="#fffef9" className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* Category Filter */}
      <section className="bg-crema-50 py-8">
        <div className="container-custom px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-mare-500 text-white shadow-lg'
                    : 'bg-white text-mare-600 hover:bg-mare-50 shadow-sm'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-crema-50 pt-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="group relative bg-mare-100 rounded-2xl overflow-hidden aspect-[4/3] card-hover text-left"
              >
                {/* Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-mare-100 to-mare-200">
                  <Camera size={40} className="text-mare-300" />
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-mare-900/0 group-hover:bg-mare-900/60 transition-all duration-300 flex items-end">
                  <div className="p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-heading text-xl font-semibold">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Upload prompt */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-sm">
              <Camera size={32} className="text-mare-300 mx-auto mb-4" />
              <p className="text-mare-600 text-sm mb-2">
                Le foto verranno caricate dal titolare del ristorante
              </p>
              <p className="text-mare-400 text-xs">
                Usa il <strong>File Manager</strong> per caricare le foto nella cartella dedicata
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="bg-white py-16">
        <div className="container-custom px-4 text-center">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
            <Instagram size={24} className="text-white" />
          </div>
          <h2 className="font-heading text-3xl font-semibold text-mare-800 mb-4">
            Seguici su Instagram
          </h2>
          <div className="w-24 h-0.5 bg-sabbia-500 mx-auto mb-6" />
          <p className="text-mare-600 mb-8 max-w-lg mx-auto">
            Scopri i nostri piatti, le novità del giorno e i momenti speciali al Ristorante Colombini.
          </p>
          <a
            href="https://www.instagram.com/colombiniristorante"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Instagram size={18} className="mr-2" />
            @colombiniristorante
          </a>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
            aria-label="Chiudi"
          >
            <X size={32} />
          </button>

          {lightbox > 0 && (
            <button
              onClick={() => navigate(-1)}
              className="absolute left-4 text-white/80 hover:text-white p-2"
              aria-label="Precedente"
            >
              <ChevronLeft size={40} />
            </button>
          )}

          {lightbox < filteredItems.length - 1 && (
            <button
              onClick={() => navigate(1)}
              className="absolute right-4 text-white/80 hover:text-white p-2"
              aria-label="Successiva"
            >
              <ChevronRight size={40} />
            </button>
          )}

          <div className="max-w-4xl w-full">
            <div className="bg-mare-200 rounded-xl aspect-[16/10] flex items-center justify-center">
              <div className="text-center">
                <Camera size={48} className="text-mare-400 mx-auto mb-4" />
                <p className="text-mare-500 font-heading text-xl">
                  {filteredItems[lightbox].title}
                </p>
                <p className="text-mare-400 text-sm mt-2">
                  {filteredItems[lightbox].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
