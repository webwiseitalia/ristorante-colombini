import { Link } from 'react-router-dom'
import { Wine, Grape, MapPin, Star } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import WaveDecoration from '../components/WaveDecoration'

const wines = [
  {
    name: 'Malvasia Puntinata',
    type: 'Bianco',
    origin: 'Lazio',
    desc: 'Vitigno autoctono del Lazio. Profumo intenso e aromatico, perfetto con antipasti e primi di mare. Note di frutta gialla e fiori bianchi.',
    pairing: 'Antipasti di mare, primi delicati',
    featured: true,
  },
  {
    name: 'Bellone (Cacchione)',
    type: 'Bianco',
    origin: 'Nettuno',
    desc: 'Vitigno tipico della zona di Nettuno. Vino fresco e minerale con note di agrumi e mandorla. Ottimo con piatti di pesce.',
    pairing: 'Pesce alla griglia, fritture',
    featured: true,
  },
  {
    name: 'Falanghina',
    type: 'Bianco',
    origin: 'Campania / Lazio',
    desc: 'Vino elegante e strutturato con sentori di pesca, mela verde e fiori di campo. Versatile e raffinato.',
    pairing: 'Primi di mare, secondi elaborati',
    featured: false,
  },
  {
    name: 'Vini bianchi regionali',
    type: 'Bianco',
    origin: 'Lazio',
    desc: 'Selezione di vini bianchi laziali accuratamente scelti per accompagnare la nostra cucina di mare.',
    pairing: 'Tutti i piatti di pesce',
    featured: false,
  },
  {
    name: 'Vini rossi selezionati',
    type: 'Rosso',
    origin: 'Lazio e Italia',
    desc: 'Per chi preferisce la carne, una selezione di rossi del territorio e nazionali per ogni gusto.',
    pairing: 'Piatti di carne, formaggi',
    featured: false,
  },
]

export default function Cantina() {
  return (
    <div>
      {/* Page Hero */}
      <section className="relative bg-vino-500 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4">
            La Cantina
          </h1>
          <div className="w-24 h-0.5 bg-sabbia-400 mx-auto mb-6" />
          <p className="text-white/80 text-xl font-heading italic">
            Vini del territorio per accompagnare i sapori del mare
          </p>
        </div>
        <WaveDecoration color="#fffef9" className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* Intro */}
      <section className="bg-crema-50 py-12">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-mare-700 text-lg leading-relaxed">
              Una selezione accurata di <strong>vini laziali e pontini</strong>, scelti per esaltare
              al meglio i sapori della nostra cucina di mare. Dai vitigni autoctoni del Lazio
              alle etichette più pregiate del territorio.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Wines */}
      <section className="section-padding bg-crema-50">
        <div className="container-custom">
          <SectionHeading
            title="I nostri vini"
            subtitle="Vitigni autoctoni e selezioni del territorio pontino e laziale"
          />

          <div className="max-w-4xl mx-auto space-y-6">
            {wines.map((wine, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-8 card-hover ${
                  wine.featured
                    ? 'bg-white border-2 border-sabbia-200 shadow-sm'
                    : 'bg-white/80'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Wine icon */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 ${
                    wine.type === 'Rosso' ? 'bg-vino-100' : 'bg-sabbia-100'
                  }`}>
                    {wine.type === 'Rosso' ? (
                      <Wine size={28} className="text-vino-500" />
                    ) : (
                      <Wine size={28} className="text-sabbia-600" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-heading text-2xl font-semibold text-mare-800">
                        {wine.name}
                      </h3>
                      <span className={`text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider ${
                        wine.type === 'Rosso'
                          ? 'bg-vino-100 text-vino-600'
                          : 'bg-sabbia-100 text-sabbia-700'
                      }`}>
                        {wine.type}
                      </span>
                      {wine.featured && (
                        <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-mare-100 text-mare-700 font-bold">
                          <Star size={12} className="fill-mare-500 text-mare-500" />
                          In evidenza
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 mb-3 text-sm text-mare-500">
                      <MapPin size={14} />
                      <span>{wine.origin}</span>
                    </div>

                    <p className="text-mare-600/80 mb-4 leading-relaxed">
                      {wine.desc}
                    </p>

                    <div className="flex items-center gap-2 text-sm">
                      <Grape size={14} className="text-sabbia-500" />
                      <span className="text-mare-500">
                        <strong className="text-mare-700">Abbinamento:</strong> {wine.pairing}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Territory */}
      <section className="bg-white py-16">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-14 h-14 rounded-full bg-oliva-100 flex items-center justify-center mx-auto mb-6">
              <Grape size={24} className="text-oliva-600" />
            </div>
            <h2 className="font-heading text-3xl font-semibold text-mare-800 mb-4">
              Il territorio del vino pontino
            </h2>
            <div className="w-24 h-0.5 bg-sabbia-500 mx-auto mb-6" />
            <p className="text-mare-600 leading-relaxed mb-6">
              L'Agro Pontino vanta una tradizione vinicola millenaria. I terreni fertili della pianura,
              il clima mediterraneo e la vicinanza al mare creano condizioni ideali per vitigni unici
              come la <strong>Malvasia Puntinata</strong> e il <strong>Bellone</strong>.
            </p>
            <p className="text-mare-600 leading-relaxed">
              La nostra carta dei vini privilegia queste eccellenze locali, con una selezione pensata
              appositamente per accompagnare i piatti di pesce fresco della nostra cucina.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-vino-500 py-16">
        <div className="container-custom px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4">
            Un calice in buona compagnia
          </h2>
          <div className="w-24 h-0.5 bg-sabbia-400 mx-auto mb-6" />
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Vieni a degustare i nostri vini accompagnati dai piatti freschi della nostra cucina.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/prenota" className="btn-gold">Prenota un tavolo</Link>
            <Link to="/menu" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-vino-700">
              Vedi il menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
