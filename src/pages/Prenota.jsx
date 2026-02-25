import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReveal } from '../hooks/useGsap'
import antipastiMisti from '../assets/foto/foto-14.webp'

export default function Prenota() {
  const [formData, setFormData] = useState({
    nome: '', telefono: '', email: '', data: '', orario: 'pranzo', persone: '2', note: '', privacy: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const formRef = useReveal({ y: 40 })
  const sideRef = useReveal({ y: 40, delay: 0.2 })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Buongiorno, vorrei prenotare un tavolo.\n\nNome: ${formData.nome}\nTelefono: ${formData.telefono}\nData: ${formData.data}\nOrario: ${formData.orario === 'pranzo' ? 'Pranzo' : 'Cena'}\nPersone: ${formData.persone}\n${formData.note ? `Note: ${formData.note}` : ''}`
    window.open(`https://wa.me/393925674723?text=${encodeURIComponent(message)}`, '_blank')
    setSubmitted(true)
  }

  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  const inputClass = "w-full px-0 py-3 bg-transparent border-0 border-b border-[#0a1f36]/15 focus:border-[#0a1f36] outline-none transition-colors text-[#0a1f36] placeholder-[#0a1f36]/25 font-heading text-lg"

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[45vh] flex items-end pb-16 md:pb-24 pt-32 bg-[#0a1f36]"><div className="absolute inset-0 overflow-hidden"><img src={antipastiMisti} alt="" className="w-full h-full object-cover opacity-15" aria-hidden="true" /></div>
        <div className="absolute top-0 right-0 w-[40%] h-full bg-[#c4a05c]/[0.04] hidden lg:block" />
        <div className="absolute top-20 right-16 pointer-events-none select-none" aria-hidden="true">
          <span className="font-heading text-[clamp(10rem,28vw,22rem)] font-light leading-none text-white/[0.02]">P</span>
        </div>
        <div className="relative z-10 w-full px-6 md:px-10 lg:px-16">
          <div className="w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#c4a05c]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold">Prenotazione consigliata</span>
            </div>
            <h1 className="font-heading font-light text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-white tracking-[-0.02em]">
              Prenota il tuo
              <br />
              <span className="italic text-[#c4a05c] ml-[3vw]">tavolo</span>
            </h1>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-16 md:py-24 px-6 md:px-10 lg:px-16 bg-[#fffef9]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Form area */}
          <div ref={formRef} className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div key="success" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="py-20 text-center">
                  <span className="font-heading text-[5rem] text-[#c4a05c]/20 leading-none block mb-4">✓</span>
                  <h2 className="font-heading text-[var(--fluid-md)] font-light text-[#0a1f36] mb-4">Richiesta inviata</h2>
                  <p className="text-[#0a1f36]/50 mb-8 max-w-md mx-auto">La prenotazione è stata inviata via WhatsApp. Ti confermeremo al più presto.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-secondary">Nuova prenotazione</button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    <div>
                      <label htmlFor="nome" className="text-[10px] uppercase tracking-[0.2em] text-[#0a1f36]/40 font-bold block mb-2">Nome e Cognome *</label>
                      <input type="text" id="nome" name="nome" required value={formData.nome} onChange={handleChange} className={inputClass} placeholder="Mario Rossi" />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="text-[10px] uppercase tracking-[0.2em] text-[#0a1f36]/40 font-bold block mb-2">Telefono *</label>
                      <input type="tel" id="telefono" name="telefono" required value={formData.telefono} onChange={handleChange} className={inputClass} placeholder="333 123 4567" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-[#0a1f36]/40 font-bold block mb-2">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="mario@email.it" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8">
                    <div>
                      <label htmlFor="data" className="text-[10px] uppercase tracking-[0.2em] text-[#0a1f36]/40 font-bold block mb-2">Data *</label>
                      <input type="date" id="data" name="data" required min={minDate} value={formData.data} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="orario" className="text-[10px] uppercase tracking-[0.2em] text-[#0a1f36]/40 font-bold block mb-2">Orario *</label>
                      <select id="orario" name="orario" value={formData.orario} onChange={handleChange} className={`${inputClass} bg-transparent`}>
                        <option value="pranzo">Pranzo</option>
                        <option value="cena">Cena (Ven-Sab)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="persone" className="text-[10px] uppercase tracking-[0.2em] text-[#0a1f36]/40 font-bold block mb-2">Persone *</label>
                      <select id="persone" name="persone" value={formData.persone} onChange={handleChange} className={`${inputClass} bg-transparent`}>
                        {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}</option>)}
                        <option value="10+">Più di 10</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="note" className="text-[10px] uppercase tracking-[0.2em] text-[#0a1f36]/40 font-bold block mb-2">Note</label>
                    <textarea id="note" name="note" rows={3} value={formData.note} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Allergie, richieste speciali..." />
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="privacy" name="privacy" required checked={formData.privacy} onChange={handleChange} className="mt-1.5 w-4 h-4 accent-[#0a1f36]" />
                    <label htmlFor="privacy" className="text-[#0a1f36]/40 text-sm">Acconsento al trattamento dei dati personali ai sensi del GDPR. *</label>
                  </div>
                  <button type="submit" className="btn-primary w-full md:w-auto justify-center py-4 px-12 text-[11px]">Invia richiesta via WhatsApp</button>
                  <p className="text-[10px] text-[#0a1f36]/25 uppercase tracking-[0.1em]">* Campi obbligatori — Prenotazione confermata via WhatsApp</p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          <div ref={sideRef} className="lg:col-span-4 lg:col-start-9 space-y-10">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold block mb-6">Preferisci chiamare?</span>
              <div className="space-y-4">
                <a href="tel:07730481561" className="block border border-[#0a1f36]/10 p-5 hover:border-[#c4a05c] transition-colors">
                  <span className="font-heading text-lg text-[#0a1f36]">0773 0481561</span>
                  <span className="text-[10px] text-[#0a1f36]/30 uppercase tracking-[0.15em] block mt-1">Telefono fisso</span>
                </a>
                <a href="tel:3925674723" className="block border border-[#0a1f36]/10 p-5 hover:border-[#c4a05c] transition-colors">
                  <span className="font-heading text-lg text-[#0a1f36]">392 567 4723</span>
                  <span className="text-[10px] text-[#0a1f36]/30 uppercase tracking-[0.15em] block mt-1">Cellulare / WhatsApp</span>
                </a>
              </div>
            </div>
            <div className="border-t border-[#0a1f36]/10 pt-8">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold block mb-4">Orari</span>
              <div className="space-y-2 text-sm text-[#0a1f36]/50">
                <div className="flex justify-between"><span>Lunedì</span><span className="text-[#722f37] font-bold">Chiuso</span></div>
                <div className="flex justify-between"><span>Mar — Gio</span><span>Pranzo</span></div>
                <div className="flex justify-between"><span>Ven — Sab</span><span>Pranzo + Cena</span></div>
                <div className="flex justify-between"><span>Domenica</span><span>Solo Pranzo</span></div>
              </div>
            </div>
            <div className="bg-[#f9f3e8] p-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#c4a05c] font-bold block mb-2">Nota</span>
              <p className="text-[#0a1f36]/50 text-sm leading-relaxed">Il locale è spesso pieno, soprattutto nel fine settimana. Prenotate con anticipo.</p>
            </div>
            <div className="border-t border-[#0a1f36]/10 pt-8">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold block mb-3">Dove siamo</span>
              <p className="text-[#0a1f36]/70 text-sm">Via Cursori della Palude 13</p>
              <p className="text-[#0a1f36]/70 text-sm">Borgo Montello (LT)</p>
              <p className="text-[#0a1f36]/30 text-xs mt-2">Uscita Pontina Borgo Montello/Nettuno</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
