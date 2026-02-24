import { Link } from 'react-router-dom'
import { Fish, Award, Users, Heart, MapPin, Calendar, ChefHat, Utensils } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import WaveDecoration from '../components/WaveDecoration'

const milestones = [
  { year: '1993', title: 'Gli inizi', desc: 'Giovanni Colombini inizia la sua avventura nella ristorazione nell\'Agro Pontino.' },
  { year: '2000', title: 'La crescita', desc: 'Anni di esperienza e passione consolidano la reputazione della cucina Colombini.' },
  { year: '2013', title: 'La nuova sede', desc: 'Nasce il Ristorante Colombini a Borgo Montello, coronamento di vent\'anni di esperienza.' },
  { year: 'Oggi', title: 'Tradizione viva', desc: 'Riconosciuto dall\'Accademia Italiana della Cucina e amato dai clienti di tutta la provincia.' },
]

const values = [
  {
    icon: Fish,
    title: 'Freschezza',
    desc: 'Il nostro pesce arriva ogni giorno dal porto di Anzio, selezionato personalmente per garantire la massima qualità.',
  },
  {
    icon: Heart,
    title: 'Passione',
    desc: 'Ogni piatto nasce dalla passione per la buona cucina e dal rispetto per la tradizione marinara.',
  },
  {
    icon: Users,
    title: 'Famiglia',
    desc: 'Una gestione familiare dove ogni ospite viene accolto come a casa propria, con calore e attenzione.',
  },
  {
    icon: Award,
    title: 'Qualità',
    desc: 'Ingredienti di prima scelta, preparazioni curate e un servizio attento per un\'esperienza unica.',
  },
]

export default function ChiSiamo() {
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
            Chi Siamo
          </h1>
          <div className="w-24 h-0.5 bg-sabbia-400 mx-auto mb-6" />
          <p className="text-mare-200 text-xl font-heading italic">
            Una famiglia, una passione
          </p>
        </div>
        <WaveDecoration color="#fffef9" className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* La Nostra Storia */}
      <section className="section-padding bg-crema-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-mare-800 mb-4">
                La nostra storia
              </h2>
              <div className="w-24 h-0.5 bg-sabbia-500 mb-8" />

              <div className="space-y-6 text-mare-700 leading-relaxed">
                <p>
                  Il <strong className="text-mare-800">Ristorante Colombini</strong> nasce nel 2013 a Borgo Montello,
                  coronamento di oltre vent'anni di esperienza nella ristorazione pontina della famiglia Colombini.
                </p>
                <p>
                  <strong className="text-mare-800">Giovanni Colombini</strong>, titolare e chef, porta in tavola ogni giorno
                  la sua passione per la cucina di mare. Il nostro pesce arriva freschissimo dal <strong className="text-mare-800">porto di Anzio</strong>,
                  selezionato personalmente per garantire sempre la massima qualità.
                </p>
                <p>
                  L'ambiente è quello di una volta: familiare, accogliente, senza fronzoli. Un luogo dove sentirsi a casa,
                  gustando piatti della tradizione preparati con maestria e ingredienti di prima scelta.
                </p>
                <p>
                  <strong className="text-mare-800">140 coperti</strong>, un ampio parcheggio privato e una posizione strategica
                  all'uscita della Pontina fanno del Colombini il punto di riferimento per chi cerca un pranzo di qualità
                  nell'Agro Pontino.
                </p>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="relative">
              <div className="bg-mare-100 rounded-2xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center p-8">
                  <Utensils size={48} className="text-mare-300 mx-auto mb-4" />
                  <p className="text-mare-400 font-heading text-lg">Foto del Ristorante</p>
                  <p className="text-mare-300 text-sm mt-2">Carica le foto tramite il File Manager</p>
                </div>
              </div>
              {/* Decorative badge */}
              <div className="absolute -bottom-6 -right-4 md:-right-6 bg-sabbia-500 text-white rounded-2xl p-6 shadow-xl">
                <p className="font-heading text-3xl font-bold">30+</p>
                <p className="text-sm">anni di esperienza</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Giovanni Colombini */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image placeholder */}
            <div className="order-2 lg:order-1">
              <div className="bg-mare-100 rounded-2xl aspect-[3/4] max-w-md mx-auto flex items-center justify-center">
                <div className="text-center p-8">
                  <ChefHat size={48} className="text-mare-300 mx-auto mb-4" />
                  <p className="text-mare-400 font-heading text-lg">Giovanni Colombini</p>
                  <p className="text-mare-300 text-sm mt-2">Chef e Titolare</p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-sabbia-100 rounded-full px-4 py-1.5 mb-6">
                <ChefHat size={16} className="text-sabbia-600" />
                <span className="text-sabbia-700 text-sm font-bold">Chef e Titolare</span>
              </div>

              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-mare-800 mb-4">
                Giovanni Colombini
              </h2>
              <div className="w-24 h-0.5 bg-sabbia-500 mb-8" />

              <div className="space-y-6 text-mare-700 leading-relaxed">
                <p>
                  Con oltre trent'anni di esperienza ai fornelli, Giovanni Colombini è il cuore pulsante del ristorante.
                  La sua cucina è un omaggio al mare e alla tradizione, dove ogni piatto racconta una storia di
                  freschezza e passione.
                </p>
                <p>
                  Cresciuto nella cultura gastronomica dell'Agro Pontino, Giovanni ha gestito diversi locali nella
                  provincia di Latina prima di aprire il suo ristorante a Borgo Montello nel 2013.
                </p>
                <p className="italic text-mare-600 border-l-4 border-sabbia-500 pl-6 py-2">
                  "La cucina è come la famiglia: ci vuole amore, pazienza e ingredienti buoni.
                  Il pesce deve essere fresco, la pasta di qualità, e il resto lo fa la passione."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-mare-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="relative z-10 container-custom">
          <SectionHeading
            title="Il nostro percorso"
            subtitle="Dalla passione alla tradizione, anno dopo anno"
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-sabbia-500 flex items-center justify-center mx-auto mb-4">
                  <Calendar size={24} className="text-white" />
                </div>
                <span className="font-heading text-3xl font-bold text-sabbia-400">{m.year}</span>
                <h3 className="font-heading text-xl font-semibold text-white mt-2 mb-2">{m.title}</h3>
                <p className="text-mare-300 text-sm">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-crema-50">
        <div className="container-custom">
          <SectionHeading
            title="I nostri valori"
            subtitle="Ciò che ci guida ogni giorno, dalla spesa al piatto"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 text-center card-hover shadow-sm">
                <div className="w-14 h-14 rounded-full bg-mare-50 flex items-center justify-center mx-auto mb-5">
                  <v.icon size={24} className="text-mare-500" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-mare-800 mb-3">{v.title}</h3>
                <p className="text-mare-600/70 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="container-custom px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-mare-800 mb-4">
            Vieni a conoscerci
          </h2>
          <div className="w-24 h-0.5 bg-sabbia-500 mx-auto mb-6" />
          <p className="text-mare-600 mb-8 max-w-lg mx-auto">
            Prenota il tuo tavolo e scopri perché i nostri clienti continuano a tornare da oltre 30 anni.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/prenota" className="btn-primary">Prenota un tavolo</Link>
            <Link to="/menu" className="btn-secondary">Scopri il menu</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
