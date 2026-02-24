import { Link } from 'react-router-dom'
import { Fish, Beef, Star, ChefHat, IceCream } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import WaveDecoration from '../components/WaveDecoration'

const menuSections = [
  {
    id: 'antipasti-mare',
    icon: Fish,
    title: 'Antipasti di Mare',
    emoji: '',
    items: [
      { name: 'Antipasto misto della casa', desc: 'Insalata di polpo, mozzarella di bufala con alici, fritti misti e altre delizie del giorno' },
      { name: 'Insalata di polpo', desc: 'Polpo tenero con patate, olive e prezzemolo' },
      { name: 'Mozzarella di bufala con alici', desc: 'Bufala campana con alici marinate e olio extravergine' },
      { name: 'Fritti misti', desc: 'Selezione di fritture di mare dorate e croccanti' },
      { name: 'Carpaccio di pesce', desc: 'Pesce fresco tagliato finemente con agrumi e olio' },
    ],
  },
  {
    id: 'antipasti-terra',
    icon: Beef,
    title: 'Antipasti di Terra',
    emoji: '',
    items: [
      { name: 'Tagliere di salumi', desc: 'Selezione di salumi artigianali della tradizione' },
      { name: 'Antipasto di montagna', desc: 'Salumi, formaggi e conserve del territorio' },
    ],
  },
  {
    id: 'primi-mare',
    icon: Fish,
    title: 'Primi di Mare',
    subtitle: 'Pasta di Gragnano',
    emoji: '',
    items: [
      { name: 'Linguine allo scoglio misto in bianco', desc: 'Il nostro piatto da non perdere, consigliato dall\'Accademia Italiana della Cucina', signature: true },
      { name: 'Mezzi paccheri con rana pescatrice e pachino', desc: 'Pasta di Gragnano con rana pescatrice fresca e pomodorini pachino' },
      { name: 'Tagliolini con calamaretti e rucola', desc: 'Un abbinamento indimenticabile da provare almeno una volta nella vita', highlight: true },
      { name: 'Gnocchetti di patate con gamberetti e pachino', desc: 'Gnocchetti fatti in casa con gamberetti freschi' },
      { name: 'Tagliolini con polipetti', desc: 'Pasta fresca con polipetti verace del nostro mare' },
      { name: 'Mezzamanica alla rana pescatrice', desc: 'Formato di pasta corta con sugo di rana pescatrice' },
      { name: 'Spaghetti alle vongole', desc: 'Il classico della tradizione marinara, rigorosamente in bianco' },
    ],
  },
  {
    id: 'primi-terra',
    icon: Beef,
    title: 'Primi di Terra',
    emoji: '',
    items: [
      { name: 'Carbonara', desc: 'La nostra carbonara è eccellente anche per chi non prende pesce' },
      { name: 'Altri primi della tradizione', desc: 'Piatti della tradizione romana e laziale' },
    ],
  },
  {
    id: 'secondi',
    icon: Fish,
    title: 'Secondi di Mare',
    emoji: '',
    items: [
      { name: 'Grigliata di pesce', desc: 'Scampi, gamberoni, calamari e filetto di orata alla griglia', highlight: true },
      { name: 'Rombo al forno in crosta di patate', desc: 'Rombo cotto al forno con crosta di patate croccante' },
      { name: 'Frittura di pesce', desc: 'Frittura mista leggera e croccante con pesce del giorno' },
      { name: 'Calamari alla piastra', desc: 'Calamari freschi cotti alla piastra con olio e limone' },
      { name: 'Pesce al guazzetto', desc: 'Pesce del giorno in guazzetto di pomodoro e olive' },
      { name: 'Pesce del giorno', desc: 'Preparazione a scelta secondo il pescato del giorno' },
    ],
  },
  {
    id: 'dolci',
    icon: IceCream,
    title: 'Dolci',
    emoji: '',
    items: [
      { name: 'Dolci della casa', desc: 'Preparati artigianalmente dal nostro laboratorio' },
      { name: 'Gelato artigianale', desc: 'Gelato fatto in casa con ingredienti naturali' },
    ],
  },
]

const tabs = [
  { id: 'antipasti-mare', label: 'Antipasti Mare' },
  { id: 'antipasti-terra', label: 'Antipasti Terra' },
  { id: 'primi-mare', label: 'Primi Mare' },
  { id: 'primi-terra', label: 'Primi Terra' },
  { id: 'secondi', label: 'Secondi' },
  { id: 'dolci', label: 'Dolci' },
]

export default function Menu() {
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
            Il Menu
          </h1>
          <div className="w-24 h-0.5 bg-sabbia-400 mx-auto mb-6" />
          <p className="text-mare-200 text-xl font-heading italic">
            I sapori del mare, ogni giorno in tavola
          </p>
        </div>
        <WaveDecoration color="#fffef9" className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* Menu Intro */}
      <section className="bg-crema-50 py-12">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-mare-700 text-lg leading-relaxed mb-6">
              La nostra cucina è <strong>prevalentemente di mare</strong>, con pescato fresco proveniente
              ogni giorno dal <strong>porto di Anzio</strong>. Utilizziamo esclusivamente <strong>pasta di Gragnano</strong> e
              ingredienti di prima qualità.
            </p>
            <p className="text-mare-500 text-sm">
              Per chi preferisce, disponibile anche un ricco menu di carne e pizzeria.
              Prezzo medio: €20-30 a persona.
            </p>
          </div>
        </div>
      </section>

      {/* Quick nav */}
      <div className="sticky top-20 z-40 bg-white border-b border-mare-100 shadow-sm">
        <div className="container-custom px-4">
          <div className="flex overflow-x-auto gap-1 py-3 scrollbar-hide">
            {tabs.map((tab) => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-body font-bold text-mare-600 hover:bg-mare-50 hover:text-mare-800 transition-colors shrink-0"
              >
                {tab.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <section className="section-padding bg-crema-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-16">
            {menuSections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-36">
                {/* Section header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-mare-500 flex items-center justify-center shrink-0">
                    <section.icon size={22} className="text-white" />
                  </div>
                  <div>
                    <h2 className="font-heading text-3xl font-semibold text-mare-800">
                      {section.title}
                    </h2>
                    {section.subtitle && (
                      <p className="text-sabbia-600 text-sm font-body">{section.subtitle}</p>
                    )}
                  </div>
                </div>

                {/* Items */}
                <div className="space-y-1">
                  {section.items.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-6 rounded-xl transition-colors ${
                        item.signature
                          ? 'bg-sabbia-100 border-2 border-sabbia-300'
                          : item.highlight
                          ? 'bg-white border border-mare-100'
                          : 'bg-white/60 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className={`font-heading text-xl font-semibold ${
                              item.signature ? 'text-sabbia-700' : 'text-mare-800'
                            }`}>
                              {item.name}
                            </h3>
                            {item.signature && (
                              <span className="flex items-center gap-1 bg-sabbia-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                                <Star size={12} className="fill-white" />
                                Da non perdere
                              </span>
                            )}
                            {item.highlight && (
                              <span className="flex items-center gap-1 bg-mare-100 text-mare-700 text-xs px-3 py-1 rounded-full font-bold">
                                <ChefHat size={12} />
                                Consigliato
                              </span>
                            )}
                          </div>
                          <p className="text-mare-600/70 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pizzeria Note */}
      <section className="bg-white py-16">
        <div className="container-custom px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-semibold text-mare-800 mb-4">
              Pizzeria
            </h2>
            <div className="w-24 h-0.5 bg-sabbia-500 mx-auto mb-6" />
            <p className="text-mare-600 mb-8">
              Disponibile anche un ampio menu di pizze preparate con impasto lievitato naturalmente
              e ingredienti di qualità. Chiedi il menu pizze al personale.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mare-800 py-16">
        <div className="container-custom px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4">
            Hai trovato il tuo piatto preferito?
          </h2>
          <div className="w-24 h-0.5 bg-sabbia-400 mx-auto mb-6" />
          <p className="text-mare-200 mb-8 max-w-lg mx-auto">
            Prenota il tuo tavolo e vieni a gustare il meglio del mare fresco di Anzio.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/prenota" className="btn-gold">Prenota un tavolo</Link>
            <Link to="/cantina" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-mare-900">
              Scopri i vini
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
