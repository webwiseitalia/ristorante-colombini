import { Link } from 'react-router-dom'
import { Fish, Users, Award, MapPin, Car, Phone, Star, ChefHat, Clock, ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import WaveDecoration from '../components/WaveDecoration'

const highlights = [
  {
    icon: Fish,
    title: 'Pesce Fresco di Anzio',
    description: 'Ogni giorno selezioniamo personalmente il miglior pescato dal porto di Anzio per garantire freschezza e qualità.',
  },
  {
    icon: Users,
    title: 'Gestione Familiare dal 1993',
    description: 'Oltre 30 anni di esperienza nella ristorazione pontina. La passione di una famiglia per la buona cucina.',
  },
  {
    icon: Award,
    title: 'Accademia Italiana della Cucina',
    description: 'Presente nella Guida ai Ristoranti con valutazione TT. Un riconoscimento alla qualità della nostra cucina.',
  },
]

const featuredDishes = [
  {
    name: 'Linguine allo Scoglio',
    desc: 'Il nostro piatto da non perdere. Pasta di Gragnano con frutti di mare in bianco.',
    tag: 'Piatto Signature',
  },
  {
    name: 'Grigliata di Pesce',
    desc: 'Scampi, gamberoni, calamari e filetto di orata alla griglia. Un classico senza tempo.',
    tag: 'Più Amato',
  },
  {
    name: 'Tagliolini Calamaretti e Rucola',
    desc: 'Un abbinamento indimenticabile che conquista al primo assaggio. Da provare almeno una volta.',
    tag: 'Consigliato',
  },
]

const reviews = [
  {
    text: 'Qualsiasi pietanza si ordini, merita un 110 e lode. Pesce freschissimo e ben cucinato.',
    source: 'TripAdvisor',
    rating: 5,
  },
  {
    text: 'Maestria e professionalità dello chef. Ottimo rapporto qualità/prezzo. Ci torneremo sicuramente.',
    source: 'Google',
    rating: 5,
  },
  {
    text: 'Ambiente molto pulito e ben curato. Personale cordiale e attento. Porzioni abbondanti.',
    source: 'TripAdvisor',
    rating: 5,
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-mare-900">
        {/* Background overlay pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-sabbia-500/20 border border-sabbia-500/30 rounded-full px-4 py-1.5 mb-8">
              <Award size={16} className="text-sabbia-400" />
              <span className="text-sabbia-300 text-sm font-body">Accademia Italiana della Cucina</span>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ristorante
              <br />
              <span className="text-sabbia-400">Colombini</span>
            </h1>

            <p className="text-xl md:text-2xl text-mare-200 font-heading font-light italic mb-8 max-w-xl">
              Il sapore del mare a due passi dalla Pontina
            </p>

            <p className="text-mare-300 text-lg mb-10 max-w-lg font-light leading-relaxed">
              Pesce fresco dal porto di Anzio, tradizione familiare dal 1993.
              Cucina di mare autentica nel cuore dell'Agro Pontino.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/prenota" className="btn-gold text-base px-10 py-4">
                Prenota un tavolo
              </Link>
              <Link to="/menu" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-mare-900 text-base px-10 py-4">
                Scopri il menu
              </Link>
            </div>

            {/* Quick info badges */}
            <div className="flex flex-wrap gap-4 text-sm text-mare-300">
              <span className="flex items-center gap-2 bg-mare-800/50 rounded-full px-4 py-2">
                <Fish size={16} className="text-sabbia-400" />
                Pesce fresco di Anzio
              </span>
              <span className="flex items-center gap-2 bg-mare-800/50 rounded-full px-4 py-2">
                <Car size={16} className="text-sabbia-400" />
                Ampio parcheggio privato
              </span>
              <span className="flex items-center gap-2 bg-mare-800/50 rounded-full px-4 py-2">
                <MapPin size={16} className="text-sabbia-400" />
                Uscita Pontina
              </span>
            </div>
          </div>
        </div>

        <WaveDecoration color="#fffef9" className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-crema-50">
        <div className="container-custom">
          <SectionHeading
            title="Perché sceglierci"
            subtitle="Da oltre 30 anni portiamo in tavola il meglio del mare con passione e dedizione"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-sm card-hover text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-mare-50 flex items-center justify-center mx-auto mb-6 group-hover:bg-mare-500 transition-colors duration-300">
                  <item.icon size={28} className="text-mare-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-mare-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-mare-600/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="I Nostri Piatti"
            subtitle="Specialità di mare preparate con il pescato fresco del giorno"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredDishes.map((dish, idx) => (
              <div
                key={idx}
                className="relative bg-crema-50 rounded-2xl p-8 card-hover border border-sabbia-200/50"
              >
                <div className="absolute top-4 right-4">
                  <span className="bg-sabbia-500 text-white text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                    {dish.tag}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full bg-mare-500/10 flex items-center justify-center mb-6">
                  <ChefHat size={24} className="text-mare-500" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-mare-800 mb-3">
                  {dish.name}
                </h3>
                <p className="text-mare-600/70 text-sm leading-relaxed">
                  {dish.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/menu" className="btn-primary">
              Vedi il menu completo
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 bg-mare-800 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-4">
            Vieni a trovarci
          </h2>
          <div className="w-24 h-0.5 bg-sabbia-400 mx-auto mb-6" />
          <p className="text-mare-200 text-lg mb-10 max-w-2xl mx-auto">
            Prenota il tuo tavolo e lasciati conquistare dai sapori autentici del mare.
            Il pesce fresco di Anzio ti aspetta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/prenota" className="btn-gold text-base px-10 py-4">
              Prenota ora
            </Link>
            <a href="tel:07730481561" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-mare-900 text-base px-10 py-4">
              <Phone size={18} className="mr-2" />
              Chiamaci
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-crema-50">
        <div className="container-custom">
          <SectionHeading
            title="Cosa dicono di noi"
            subtitle="Le parole dei nostri clienti sono il riconoscimento più bello"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-sm card-hover"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-sabbia-500 fill-sabbia-500" />
                  ))}
                </div>
                <p className="text-mare-700 italic mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                <p className="text-sm text-mare-500 font-bold uppercase tracking-wider">
                  {review.source}
                </p>
              </div>
            ))}
          </div>

          {/* Rating badges */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'TripAdvisor', rating: '4.5/5', extra: "Travellers' Choice" },
              { name: 'Google', rating: '4.4/5', extra: '' },
              { name: 'Restaurant Guru', rating: '4.3/5', extra: 'Award' },
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm">
                <Star size={16} className="text-sabbia-500 fill-sabbia-500" />
                <div>
                  <span className="text-sm font-bold text-mare-800">{badge.name}</span>
                  <span className="text-sm text-mare-500 ml-2">{badge.rating}</span>
                  {badge.extra && (
                    <span className="text-xs text-sabbia-600 ml-2">{badge.extra}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Quick Section */}
      <section className="bg-white py-16">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Location */}
            <div className="text-center p-8">
              <div className="w-14 h-14 rounded-full bg-mare-50 flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-mare-500" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-mare-800 mb-2">Dove siamo</h3>
              <p className="text-mare-600 text-sm mb-1">Via Cursori della Palude 13</p>
              <p className="text-mare-600 text-sm mb-3">Borgo Montello (LT)</p>
              <p className="text-xs text-sabbia-600">Uscita Borgo Montello/Nettuno - SS148 Pontina</p>
            </div>

            {/* Hours */}
            <div className="text-center p-8 border-y md:border-y-0 md:border-x border-mare-100">
              <div className="w-14 h-14 rounded-full bg-mare-50 flex items-center justify-center mx-auto mb-4">
                <Clock size={24} className="text-mare-500" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-mare-800 mb-2">Orari</h3>
              <p className="text-mare-600 text-sm mb-1">Mar - Dom: Pranzo 12:15 - 15:00</p>
              <p className="text-mare-600 text-sm mb-3">Ven - Sab: Cena 19:30 - 22:30</p>
              <p className="text-xs text-vino-500 font-bold">Chiuso il Lunedì</p>
            </div>

            {/* Contact */}
            <div className="text-center p-8">
              <div className="w-14 h-14 rounded-full bg-mare-50 flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-mare-500" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-mare-800 mb-2">Prenota</h3>
              <a href="tel:07730481561" className="block text-mare-600 text-sm mb-1 hover:text-mare-500">
                0773 0481561
              </a>
              <a href="tel:3925674723" className="block text-mare-600 text-sm mb-3 hover:text-mare-500">
                392 567 4723
              </a>
              <p className="text-xs text-sabbia-600">Prenotazione consigliata</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
