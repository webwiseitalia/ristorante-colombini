import { useState } from 'react'
import { Phone, Clock, MapPin, CheckCircle, AlertCircle } from 'lucide-react'
import WaveDecoration from '../components/WaveDecoration'

export default function Prenota() {
  const [formData, setFormData] = useState({
    nome: '',
    telefono: '',
    email: '',
    data: '',
    orario: 'pranzo',
    persone: '2',
    note: '',
    privacy: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Build WhatsApp message
    const message = `Buongiorno, vorrei prenotare un tavolo.\n\nNome: ${formData.nome}\nTelefono: ${formData.telefono}\nData: ${formData.data}\nOrario: ${formData.orario === 'pranzo' ? 'Pranzo' : 'Cena'}\nPersone: ${formData.persone}\n${formData.note ? `Note: ${formData.note}` : ''}`
    const whatsappUrl = `https://wa.me/393925674723?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setSubmitted(true)
  }

  // Get tomorrow's date as minimum for the date picker
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

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
            Prenota
          </h1>
          <div className="w-24 h-0.5 bg-sabbia-400 mx-auto mb-6" />
          <p className="text-mare-200 text-xl font-heading italic">
            Prenota il tuo tavolo
          </p>
        </div>
        <WaveDecoration color="#fffef9" className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* Reservation Content */}
      <section className="section-padding bg-crema-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
                <h2 className="font-heading text-3xl font-semibold text-mare-800 mb-2">
                  Richiesta di prenotazione
                </h2>
                <p className="text-mare-500 text-sm mb-8">
                  Compila il modulo e verrai reindirizzato su WhatsApp per confermare la prenotazione.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle size={48} className="text-oliva-500 mx-auto mb-4" />
                    <h3 className="font-heading text-2xl font-semibold text-mare-800 mb-3">
                      Richiesta inviata!
                    </h3>
                    <p className="text-mare-600 mb-6">
                      La tua richiesta di prenotazione è stata inviata tramite WhatsApp.
                      Ti confermeremo la disponibilità al più presto.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary"
                    >
                      Nuova prenotazione
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Nome */}
                      <div>
                        <label htmlFor="nome" className="block text-sm font-bold text-mare-700 mb-2">
                          Nome e Cognome *
                        </label>
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          required
                          value={formData.nome}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-mare-200 focus:border-mare-500 focus:ring-2 focus:ring-mare-500/20 outline-none transition-all text-mare-800"
                          placeholder="Mario Rossi"
                        />
                      </div>

                      {/* Telefono */}
                      <div>
                        <label htmlFor="telefono" className="block text-sm font-bold text-mare-700 mb-2">
                          Telefono *
                        </label>
                        <input
                          type="tel"
                          id="telefono"
                          name="telefono"
                          required
                          value={formData.telefono}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-mare-200 focus:border-mare-500 focus:ring-2 focus:ring-mare-500/20 outline-none transition-all text-mare-800"
                          placeholder="333 123 4567"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-mare-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-mare-200 focus:border-mare-500 focus:ring-2 focus:ring-mare-500/20 outline-none transition-all text-mare-800"
                        placeholder="mario@email.it"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {/* Data */}
                      <div>
                        <label htmlFor="data" className="block text-sm font-bold text-mare-700 mb-2">
                          Data *
                        </label>
                        <input
                          type="date"
                          id="data"
                          name="data"
                          required
                          min={minDate}
                          value={formData.data}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-mare-200 focus:border-mare-500 focus:ring-2 focus:ring-mare-500/20 outline-none transition-all text-mare-800"
                        />
                      </div>

                      {/* Orario */}
                      <div>
                        <label htmlFor="orario" className="block text-sm font-bold text-mare-700 mb-2">
                          Orario *
                        </label>
                        <select
                          id="orario"
                          name="orario"
                          value={formData.orario}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-mare-200 focus:border-mare-500 focus:ring-2 focus:ring-mare-500/20 outline-none transition-all text-mare-800 bg-white"
                        >
                          <option value="pranzo">Pranzo</option>
                          <option value="cena">Cena (Ven-Sab)</option>
                        </select>
                      </div>

                      {/* Persone */}
                      <div>
                        <label htmlFor="persone" className="block text-sm font-bold text-mare-700 mb-2">
                          Persone *
                        </label>
                        <select
                          id="persone"
                          name="persone"
                          value={formData.persone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-mare-200 focus:border-mare-500 focus:ring-2 focus:ring-mare-500/20 outline-none transition-all text-mare-800 bg-white"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                            <option key={n} value={n}>{n} {n === 1 ? 'persona' : 'persone'}</option>
                          ))}
                          <option value="10+">Più di 10</option>
                        </select>
                      </div>
                    </div>

                    {/* Note */}
                    <div>
                      <label htmlFor="note" className="block text-sm font-bold text-mare-700 mb-2">
                        Note o richieste particolari
                      </label>
                      <textarea
                        id="note"
                        name="note"
                        rows={3}
                        value={formData.note}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-mare-200 focus:border-mare-500 focus:ring-2 focus:ring-mare-500/20 outline-none transition-all text-mare-800 resize-none"
                        placeholder="Allergie, intolleranze, richieste speciali..."
                      />
                    </div>

                    {/* Privacy */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacy"
                        name="privacy"
                        required
                        checked={formData.privacy}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 text-mare-500 border-mare-300 rounded focus:ring-mare-500"
                      />
                      <label htmlFor="privacy" className="text-sm text-mare-600">
                        Acconsento al trattamento dei dati personali ai sensi del Reg. UE 2016/679 (GDPR).
                        <span className="text-vino-500">*</span>
                      </label>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full btn-primary text-base py-4"
                    >
                      Invia richiesta via WhatsApp
                    </button>

                    <p className="text-xs text-mare-400 text-center">
                      * Campi obbligatori. La prenotazione sarà confermata telefonicamente o via WhatsApp.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-mare-800 mb-4">
                  Preferisci chiamare?
                </h3>
                <p className="text-mare-600 text-sm mb-6">
                  Puoi prenotare direttamente per telefono o su WhatsApp.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:07730481561"
                    className="flex items-center gap-3 bg-mare-50 rounded-xl p-4 hover:bg-mare-100 transition-colors"
                  >
                    <Phone size={20} className="text-mare-500" />
                    <div>
                      <p className="text-sm font-bold text-mare-800">0773 0481561</p>
                      <p className="text-xs text-mare-500">Telefono fisso</p>
                    </div>
                  </a>
                  <a
                    href="tel:3925674723"
                    className="flex items-center gap-3 bg-mare-50 rounded-xl p-4 hover:bg-mare-100 transition-colors"
                  >
                    <Phone size={20} className="text-mare-500" />
                    <div>
                      <p className="text-sm font-bold text-mare-800">392 567 4723</p>
                      <p className="text-xs text-mare-500">Cellulare / WhatsApp</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Hours reminder */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-mare-800 mb-4">
                  Orari
                </h3>
                <div className="space-y-3 text-sm text-mare-600">
                  <div className="flex justify-between">
                    <span>Lunedì</span>
                    <span className="text-vino-500 font-bold">Chiuso</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mar - Gio</span>
                    <span>Pranzo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ven - Sab</span>
                    <span>Pranzo + Cena</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domenica</span>
                    <span>Solo Pranzo</span>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="bg-sabbia-50 rounded-2xl p-6 border border-sabbia-200">
                <div className="flex items-start gap-3">
                  <AlertCircle size={20} className="text-sabbia-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-mare-800 text-sm mb-1">Prenotazione consigliata</h4>
                    <p className="text-mare-600 text-xs leading-relaxed">
                      Il locale è spesso pieno, soprattutto nel fine settimana.
                      Vi consigliamo di prenotare con anticipo per garantirvi un tavolo.
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin size={20} className="text-mare-500" />
                  <h3 className="font-heading text-xl font-semibold text-mare-800">Dove siamo</h3>
                </div>
                <p className="text-mare-600 text-sm mb-1">Via Cursori della Palude 13</p>
                <p className="text-mare-600 text-sm mb-3">Borgo Montello (LT)</p>
                <p className="text-xs text-sabbia-600">
                  Uscita Borgo Montello/Nettuno - SS148 Pontina
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
