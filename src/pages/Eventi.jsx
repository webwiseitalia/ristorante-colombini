import { Link } from 'react-router-dom'
import { Heart, Users, Briefcase, Gift, Cake, GlassWater, Phone, ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import WaveDecoration from '../components/WaveDecoration'

const eventTypes = [
  {
    icon: Heart,
    title: 'Comunioni e Cresime',
    desc: 'Celebra i sacramenti più importanti con un pranzo speciale. Menu personalizzati per tutta la famiglia.',
  },
  {
    icon: GlassWater,
    title: 'Battesimi',
    desc: 'Accogli il nuovo arrivato con un banchetto in un ambiente accogliente e familiare.',
  },
  {
    icon: Cake,
    title: 'Compleanni e Anniversari',
    desc: 'Festeggia le ricorrenze che contano con i sapori autentici della nostra cucina.',
  },
  {
    icon: Briefcase,
    title: 'Pranzi di Lavoro',
    desc: 'Location ideale per meeting aziendali e pranzi di lavoro. Servizio rapido e professionale.',
  },
  {
    icon: Users,
    title: 'Gruppi Organizzati',
    desc: 'Con 140 coperti possiamo ospitare gruppi numerosi con menu dedicati e servizio impeccabile.',
  },
  {
    icon: Gift,
    title: 'Eventi Privati',
    desc: 'Ogni occasione merita il meglio. Contattaci per organizzare il tuo evento su misura.',
  },
]

const features = [
  '140 coperti disponibili',
  'Menu personalizzabili',
  'Ampio parcheggio privato',
  'Accessibile in sedia a rotelle',
  'Servizio attento e professionale',
  'Posizione comoda sulla Pontina',
]

export default function Eventi() {
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
            Eventi e Cerimonie
          </h1>
          <div className="w-24 h-0.5 bg-sabbia-400 mx-auto mb-6" />
          <p className="text-mare-200 text-xl font-heading italic">
            Per i vostri momenti speciali
          </p>
        </div>
        <WaveDecoration color="#fffef9" className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* Intro */}
      <section className="bg-crema-50 py-12">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-mare-700 text-lg leading-relaxed">
              Con <strong>140 coperti</strong> e un servizio attento e professionale,
              il Ristorante Colombini è la location ideale per celebrare i vostri
              momenti più importanti con i sapori autentici del mare.
            </p>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="section-padding bg-crema-50 pt-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((event, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 card-hover shadow-sm text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-mare-50 flex items-center justify-center mx-auto mb-6 group-hover:bg-mare-500 transition-colors duration-300">
                  <event.icon size={28} className="text-mare-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-mare-800 mb-3">
                  {event.title}
                </h3>
                <p className="text-mare-600/70 text-sm leading-relaxed">
                  {event.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-semibold text-mare-800 mb-4">
                Perché scegliere il Colombini
              </h2>
              <div className="w-24 h-0.5 bg-sabbia-500 mb-8" />
              <p className="text-mare-600 mb-8 leading-relaxed">
                La nostra esperienza trentennale nella ristorazione ci permette di gestire
                ogni tipo di evento con professionalità e attenzione ai dettagli.
                Ogni menu è personalizzabile secondo le vostre esigenze.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-oliva-100 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-oliva-500" />
                    </div>
                    <span className="text-mare-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image placeholder */}
            <div className="bg-mare-100 rounded-2xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <Users size={48} className="text-mare-300 mx-auto mb-4" />
                <p className="text-mare-400 font-heading text-lg">Foto Eventi</p>
                <p className="text-mare-300 text-sm mt-2">Carica le foto tramite il File Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mare-800 py-16">
        <div className="container-custom px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4">
            Organizziamo il tuo evento
          </h2>
          <div className="w-24 h-0.5 bg-sabbia-400 mx-auto mb-6" />
          <p className="text-mare-200 mb-10 max-w-lg mx-auto">
            Contattaci per un preventivo personalizzato. Saremo felici di creare il menu perfetto
            per la tua occasione speciale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/prenota" className="btn-gold">
              Richiedi informazioni
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <a href="tel:07730481561" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-mare-900">
              <Phone size={18} className="mr-2" />
              Chiamaci
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
