import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock, Mail, Instagram, Facebook, Navigation, Car, Plane, Train } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import WaveDecoration from '../components/WaveDecoration'

const distances = [
  { city: 'Roma centro', km: '62 km', time: '~50 min', icon: Car },
  { city: 'Latina', km: '10 km', time: '~15 min', icon: Car },
  { city: 'Nettuno', km: '15 km', time: '~20 min', icon: Car },
  { city: 'Anzio', km: '20 km', time: '~25 min', icon: Car },
  { city: 'Aeroporto Ciampino', km: '50 km', time: '~45 min', icon: Plane },
  { city: 'Aeroporto Fiumicino', km: '70 km', time: '~55 min', icon: Plane },
]

export default function Contatti() {
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
            Dove Siamo
          </h1>
          <div className="w-24 h-0.5 bg-sabbia-400 mx-auto mb-6" />
          <p className="text-mare-200 text-xl font-heading italic">
            Come raggiungerci
          </p>
        </div>
        <WaveDecoration color="#fffef9" className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* Contact Info + Map */}
      <section className="section-padding bg-crema-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="font-heading text-3xl font-semibold text-mare-800 mb-8">
                Contatti
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-mare-50 flex items-center justify-center shrink-0">
                    <MapPin size={22} className="text-mare-500" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-mare-800 mb-1">Indirizzo</h3>
                    <p className="text-mare-600">Via Cursori della Palude 13</p>
                    <p className="text-mare-600">04100 Borgo Montello (LT)</p>
                    <p className="text-mare-500 text-sm mt-1">Frazione di Latina</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-mare-50 flex items-center justify-center shrink-0">
                    <Phone size={22} className="text-mare-500" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-mare-800 mb-1">Telefono</h3>
                    <a href="tel:07730481561" className="block text-mare-600 hover:text-mare-500 transition-colors">
                      0773 0481561 <span className="text-sm text-mare-400">(fisso)</span>
                    </a>
                    <a href="tel:3925674723" className="block text-mare-600 hover:text-mare-500 transition-colors">
                      392 567 4723 <span className="text-sm text-mare-400">(cellulare)</span>
                    </a>
                    <a
                      href="https://wa.me/393925674723"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 bg-green-500 text-white text-sm px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

                {/* Social */}
                <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-mare-50 flex items-center justify-center shrink-0">
                    <Instagram size={22} className="text-mare-500" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-mare-800 mb-1">Social</h3>
                    <a
                      href="https://www.instagram.com/colombiniristorante"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-mare-600 hover:text-mare-500 transition-colors"
                    >
                      @colombiniristorante
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="font-heading text-3xl font-semibold text-mare-800 mb-8">
                Mappa
              </h2>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <iframe
                  title="Ristorante Colombini - Mappa"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.5!2d12.89!3d41.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVia+Cursori+della+Palude+13%2C+Borgo+Montello!5e0!3m2!1sit!2sit!4v1700000000000"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
                <div className="p-4 bg-mare-50 flex items-center gap-3">
                  <Navigation size={16} className="text-mare-500" />
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Via+Cursori+della+Palude+13+Borgo+Montello+LT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mare-600 hover:text-mare-500 text-sm font-bold transition-colors"
                  >
                    Apri in Google Maps per le indicazioni stradali
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="bg-white py-16">
        <div className="container-custom px-4">
          <SectionHeading
            title="Orari di apertura"
            subtitle="Aperti tutti i giorni a pranzo, venerdì e sabato anche a cena"
          />

          <div className="max-w-2xl mx-auto">
            <div className="bg-crema-50 rounded-2xl overflow-hidden shadow-sm">
              {[
                { day: 'Lunedì', hours: 'Chiuso', closed: true },
                { day: 'Martedì', hours: '12:15 - 15:00' },
                { day: 'Mercoledì', hours: '12:15 - 15:00' },
                { day: 'Giovedì', hours: '12:15 - 15:00' },
                { day: 'Venerdì', hours: '12:15 - 15:00 | 19:30 - 22:30', dinner: true },
                { day: 'Sabato', hours: '12:15 - 15:00 | 19:30 - 22:30', dinner: true },
                { day: 'Domenica', hours: '12:15 - 15:00', note: 'Solo pranzo' },
              ].map((slot, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between px-8 py-4 ${
                    idx < 6 ? 'border-b border-mare-100' : ''
                  } ${slot.closed ? 'bg-vino-50' : ''}`}
                >
                  <span className={`font-heading text-lg font-semibold ${
                    slot.closed ? 'text-vino-500' : 'text-mare-800'
                  }`}>
                    {slot.day}
                  </span>
                  <div className="text-right">
                    <span className={`text-sm ${slot.closed ? 'text-vino-500 font-bold' : 'text-mare-600'}`}>
                      {slot.hours}
                    </span>
                    {slot.dinner && (
                      <span className="ml-2 text-xs bg-mare-100 text-mare-600 px-2 py-0.5 rounded-full">
                        + cena
                      </span>
                    )}
                    {slot.note && (
                      <span className="ml-2 text-xs text-mare-400">({slot.note})</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-mare-500 text-sm mt-6">
              <Clock size={14} className="inline mr-1" />
              Ferie: Settembre e Gennaio
            </p>
          </div>
        </div>
      </section>

      {/* How to get there */}
      <section className="section-padding bg-crema-50">
        <div className="container-custom">
          <SectionHeading
            title="Come arrivare"
            subtitle="Facilmente raggiungibile dalla SS148 Pontina, uscita Borgo Montello/Nettuno"
          />

          {/* Directions */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-oliva-100 flex items-center justify-center shrink-0">
                  <Car size={22} className="text-oliva-600" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-mare-800 mb-2">In auto</h3>
                  <p className="text-mare-600 leading-relaxed">
                    Percorrendo la <strong>SS148 Pontina</strong> in direzione Latina/Terracina,
                    prendere l'uscita <strong>Borgo Montello/Nettuno</strong>.
                    Il ristorante si trova a pochi minuti dall'uscita, con ampio <strong>parcheggio privato gratuito</strong>.
                  </p>
                </div>
              </div>
              <div className="bg-oliva-50 rounded-xl p-4 text-sm text-oliva-700">
                <strong>Parcheggio:</strong> Ampio parcheggio privato gratuito direttamente presso il ristorante.
                Accessibile in sedia a rotelle.
              </div>
            </div>
          </div>

          {/* Distances */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {distances.map((d, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 text-center shadow-sm">
                <d.icon size={20} className="text-mare-400 mx-auto mb-2" />
                <h4 className="font-heading text-sm font-semibold text-mare-800 mb-1">{d.city}</h4>
                <p className="text-mare-500 text-xs">{d.km}</p>
                <p className="text-sabbia-600 text-xs font-bold">{d.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mare-800 py-16">
        <div className="container-custom px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4">
            Ti aspettiamo!
          </h2>
          <div className="w-24 h-0.5 bg-sabbia-400 mx-auto mb-6" />
          <p className="text-mare-200 mb-8 max-w-lg mx-auto">
            Prenotazione consigliata, soprattutto nel fine settimana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/prenota" className="btn-gold">Prenota un tavolo</Link>
            <a href="tel:07730481561" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-mare-900">
              <Phone size={18} className="mr-2" />
              0773 0481561
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
