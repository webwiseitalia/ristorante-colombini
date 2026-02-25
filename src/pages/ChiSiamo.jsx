import { Link } from 'react-router-dom'
import { useReveal, useStagger, useParallax } from '../hooks/useGsap'
import salaRistorante from '../assets/foto/foto-11.webp'
import zuppaPesce from '../assets/foto/foto-2.webp'
import antipastiMisti from '../assets/foto/foto-14.webp'
import grigliata from '../assets/foto/foto-12.webp'

const milestones = [
  { year: '1993', text: 'Giovanni Colombini inizia la sua avventura nella ristorazione pontina' },
  { year: '2000', text: 'Anni di esperienza consolidano la reputazione della cucina Colombini' },
  { year: '2013', text: 'Nasce il Ristorante Colombini a Borgo Montello' },
  { year: 'Oggi', text: 'Riconosciuto dall\'Accademia Italiana della Cucina' },
]

export default function ChiSiamo() {
  const storyRef = useReveal({ y: 60 })
  const chefRef = useReveal({ y: 60, delay: 0.2 })
  const timelineRef = useStagger({ stagger: 0.2, y: 50 })
  const valuesRef = useStagger({ stagger: 0.15, y: 40 })
  const parallaxEl = useParallax(0.15)

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[55vh] flex items-end pb-16 md:pb-24 pt-32 bg-[#0a1f36]">
        <div className="absolute top-0 left-0 w-[40%] h-full overflow-hidden hidden lg:block">
          <img src={antipastiMisti} alt="Antipasti del Ristorante Colombini" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute bottom-20 right-8 md:right-16 pointer-events-none select-none" aria-hidden="true">
          <span className="font-heading text-[clamp(10rem,30vw,25rem)] font-light leading-none text-white/[0.02]">C</span>
        </div>
        <div className="relative z-10 w-full px-6 md:px-10 lg:px-16">
          <div className="w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#c4a05c]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold">La nostra storia</span>
            </div>
            <h1 className="font-heading font-light text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-white tracking-[-0.02em]">
              Una famiglia,
              <br />
              <span className="italic text-[#c4a05c] ml-[3vw]">una passione</span>
            </h1>
          </div>
        </div>
      </section>

      {/* STORY — broken grid: text 6 cols, image overlaps into text via negative margin, pull-quote breaks out */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 bg-[#fffef9]">
        <div ref={storyRef} className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Text — 6 columns, right-padded to leave room, but image will intrude */}
            <div className="lg:col-span-6 lg:pr-4 relative z-10">
              <div className="space-y-8 text-[#0a1f36]/70 leading-[1.8]">
                <p>Il <strong className="text-[#0a1f36] font-normal">Ristorante Colombini</strong> nasce nel 2013 a Borgo Montello, coronamento di oltre vent'anni di esperienza nella ristorazione pontina della famiglia Colombini.</p>
                <p><strong className="text-[#0a1f36] font-normal">Giovanni Colombini</strong>, titolare e chef, porta in tavola ogni giorno la sua passione per la cucina di mare. Il nostro pesce arriva freschissimo dal <strong className="text-[#0a1f36] font-normal">porto di Anzio</strong>, selezionato personalmente.</p>
              </div>
            </div>

            {/* Image — 5 cols starting at col 7 but pulled left with negative margin to overlap text */}
            <div className="lg:col-span-5 lg:col-start-8 relative mt-10 lg:mt-0 lg:-ml-20">
              <div ref={parallaxEl} className="aspect-[3/4] overflow-hidden relative">
                <img src={salaRistorante} alt="Sala del Ristorante Colombini" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#0a1f36]/20" />
                <div className="absolute bottom-6 left-6 right-6 text-center">
                  <span className="font-heading text-[5rem] font-light text-white/80 leading-none block">30+</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-bold mt-4 block">anni di esperienza</span>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-[#c4a05c] text-[#0a1f36] p-6 hidden lg:block z-20">
                <span className="font-heading text-3xl font-light block">Dal 1993</span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold">Tradizione familiare</span>
              </div>
            </div>
          </div>

          {/* Pull-quote — breaks out wide, shifted right to cross the grid boundary */}
          <div className="lg:-mr-16 lg:ml-[15%] -mt-8 relative z-20">
            <blockquote className="bg-[#0a1f36] text-[#fffef9] py-10 px-8 md:px-14 lg:px-20">
              <p className="font-heading italic text-[clamp(1.3rem,2.5vw,2rem)] leading-[1.4] font-light max-w-3xl">
                "Un luogo dove sentirsi a casa, gustando piatti della tradizione preparati con maestria."
              </p>
            </blockquote>
          </div>

          {/* Remaining story text — narrower, offset below the pull-quote */}
          <div className="mt-14 lg:ml-[8%] max-w-2xl">
            <div className="space-y-8 text-[#0a1f36]/70 leading-[1.8]">
              <p>L'ambiente è quello di una volta: familiare, accogliente, senza fronzoli. Un luogo dove sentirsi a casa, gustando piatti della tradizione preparati con maestria.</p>
              <p><strong className="text-[#0a1f36] font-normal">140 coperti</strong>, un ampio parcheggio privato e una posizione strategica all'uscita della Pontina fanno del Colombini il punto di riferimento per chi cerca un pranzo di qualità nell'Agro Pontino.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CHEF — image wider (5 cols), text narrower (5 cols) offset vertically, quote bleeds across both */}
      <section className="bg-[#f9f3e8] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[30%] h-full bg-[#0a1f36]/[0.02]" />
        <div ref={chefRef} className="pt-20 md:pt-28 px-6 md:px-10 lg:px-16">
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-0 items-start">
              {/* Image — 5 cols, flush left, taller presence */}
              <div className="lg:col-span-5 order-2 lg:order-1 relative">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img src={zuppaPesce} alt="Zuppa di pesce - la cucina dello Chef Giovanni" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a1f36]/70 to-transparent p-6 pt-16">
                    <span className="font-heading text-xl font-light text-white block">Giovanni Colombini</span>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 mt-1">Chef e Titolare</p>
                  </div>
                </div>
              </div>

              {/* Text — 5 cols, offset down to create asymmetry */}
              <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-start lg:pt-28 lg:pl-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-[1px] bg-[#c4a05c]" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold">Chef e Titolare</span>
                </div>
                <h2 className="font-heading font-light text-[var(--fluid-lg)] leading-[0.95] text-[#0a1f36] mb-8">
                  Giovanni
                  <br />
                  <span className="italic ml-[3vw]">Colombini</span>
                </h2>
                <div className="space-y-6 text-[#0a1f36]/70 leading-[1.8] max-w-lg">
                  <p>Con oltre trent'anni di esperienza ai fornelli, Giovanni è il cuore pulsante del ristorante. La sua cucina è un omaggio al mare e alla tradizione.</p>
                </div>
              </div>
            </div>

            {/* Quote — bleeds across full width, overlapping both columns with negative top margin */}
            <div className="-mt-16 md:-mt-24 relative z-10 lg:-mx-8 pb-20 md:pb-28">
              <blockquote className="bg-[#722f37] py-12 px-8 md:px-16 lg:px-24">
                <p className="font-heading italic text-[clamp(1.4rem,3vw,2.6rem)] text-[#fffef9] leading-[1.3] font-light max-w-4xl mx-auto text-center">
                  "La cucina è come la famiglia: ci vuole amore, pazienza e ingredienti buoni."
                </p>
                <p className="text-[#fffef9]/50 text-center mt-6 text-[10px] uppercase tracking-[0.3em] font-bold">— Giovanni Colombini</p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE — variable visual weight: first large, then progressively smaller, alternating alignment */}
      <section className="bg-[#0a1f36] py-20 md:py-28 px-6 md:px-10 lg:px-16">
        <div className="w-full">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-[#c4a05c]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold">Il percorso</span>
          </div>
          <h2 className="font-heading font-light text-[var(--fluid-lg)] leading-[0.95] text-white mb-14 md:mb-20 max-w-xl">
            Anno dopo
            <br />
            <span className="italic text-[#c4a05c]">anno</span>
          </h2>
          <div ref={timelineRef} className="space-y-0">
            {milestones.map((m, idx) => {
              // First item: hero-sized, full bleed
              if (idx === 0) {
                return (
                  <div key={idx} className="border-t border-white/10 py-14 md:py-20">
                    <div className="lg:flex lg:items-end lg:gap-16">
                      <span className="font-heading text-[clamp(4rem,10vw,9rem)] font-light text-[#c4a05c] leading-none block mb-4 lg:mb-0 lg:shrink-0">{m.year}</span>
                      <p className="text-white/70 text-[clamp(1.1rem,2vw,1.5rem)] leading-relaxed max-w-lg lg:pb-4">{m.text}</p>
                    </div>
                  </div>
                )
              }
              // Second item: medium weight, pushed right
              if (idx === 1) {
                return (
                  <div key={idx} className="border-t border-white/10 py-10 md:py-14 lg:ml-[20%]">
                    <div className="relative">
                      <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#722f37]/40 hidden lg:block" />
                      <div className="flex items-start gap-8 md:gap-12">
                        <span className="font-heading text-[clamp(2.5rem,5vw,5rem)] font-light text-[#c4a05c] shrink-0 leading-none">{m.year}</span>
                        <p className="text-white/50 max-w-md pt-3 text-lg">{m.text}</p>
                      </div>
                    </div>
                  </div>
                )
              }
              // Third item: smaller, with a subtle background accent
              if (idx === 2) {
                return (
                  <div key={idx} className="border-t border-white/10 py-8 md:py-10 lg:ml-[10%] lg:mr-[25%]">
                    <div className="bg-white/[0.03] -mx-6 px-6 py-6 md:-mx-8 md:px-8">
                      <div className="flex items-start gap-8">
                        <span className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-light text-[#c4a05c] shrink-0 leading-none">{m.year}</span>
                        <p className="text-white/50 max-w-md pt-2">{m.text}</p>
                      </div>
                    </div>
                  </div>
                )
              }
              // Last item: compact, right-aligned
              return (
                <div key={idx} className="border-t border-white/10 py-8 lg:ml-auto lg:max-w-md lg:text-right">
                  <div className="flex items-start gap-6 lg:flex-row-reverse lg:gap-8">
                    <span className="font-heading text-[clamp(1.8rem,3vw,2.8rem)] font-light text-[#c4a05c] shrink-0 leading-none">{m.year}</span>
                    <p className="text-white/50 max-w-sm pt-1 text-sm">{m.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* VALUES — staggered offsets, one value spans wider, photo overlaps into values area */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16 bg-[#fffef9] relative">
        <div className="w-full">
          <h2 className="font-heading font-light text-[var(--fluid-lg)] leading-[0.95] text-[#0a1f36] mb-14 md:mb-20 max-w-xl text-right ml-auto">
            I nostri
            <br />
            <span className="italic">valori</span>
          </h2>

          <div ref={valuesRef} className="relative">
            {/* Photo — positioned to overlap into the values grid on large screens */}
            <div className="md:absolute md:left-0 md:top-0 md:w-[40%] lg:w-[35%] md:-mt-8 md:z-0 mb-12 md:mb-0 overflow-hidden">
              <div className="aspect-[4/5] relative">
                <img src={grigliata} alt="I nostri valori in cucina" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#0a1f36]/10" />
              </div>
            </div>

            {/* Values grid — staggered, irregular, overlapping the photo space */}
            <div className="md:ml-[30%] lg:ml-[28%] grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
              {/* Value 1 — Freschezza: spans wider, no top offset */}
              <div className="md:col-span-2 md:max-w-lg md:ml-[10%] mb-12 relative z-10">
                <div className="bg-[#f9f3e8] p-8 -ml-4 md:-ml-8 border-l-2 border-[#c4a05c]">
                  <span className="font-heading text-[4rem] font-light text-[#0a1f36]/[0.06] leading-none block -mb-4">01</span>
                  <h3 className="font-heading text-3xl font-light text-[#0a1f36] mb-3">Freschezza</h3>
                  <p className="text-[#0a1f36]/50 text-sm leading-relaxed">Pesce dal porto di Anzio, selezionato ogni giorno personalmente.</p>
                </div>
              </div>

              {/* Value 2 — Passione: normal, left column, offset down */}
              <div className="md:mt-6 mb-12 relative z-10">
                <span className="font-heading text-[3rem] font-light text-[#0a1f36]/[0.06] leading-none block mb-2">02</span>
                <h3 className="font-heading text-2xl font-light text-[#0a1f36] mb-3">Passione</h3>
                <p className="text-[#0a1f36]/50 text-sm leading-relaxed">Ogni piatto nasce dal rispetto per la tradizione marinara.</p>
              </div>

              {/* Value 3 — Famiglia: right column, pushed up to stagger against #2 */}
              <div className="md:-mt-8 mb-12 relative z-10">
                <span className="font-heading text-[3rem] font-light text-[#0a1f36]/[0.06] leading-none block mb-2">03</span>
                <h3 className="font-heading text-2xl font-light text-[#0a1f36] mb-3">Famiglia</h3>
                <p className="text-[#0a1f36]/50 text-sm leading-relaxed">Una gestione dove ogni ospite viene accolto come a casa.</p>
              </div>

              {/* Value 4 — Qualità: left column, with accent background */}
              <div className="md:col-span-2 md:max-w-xs md:ml-[40%] mb-8 relative z-10">
                <div className="relative">
                  <div className="absolute -inset-4 bg-[#c4a05c]/[0.07] -z-10" />
                  <span className="font-heading text-[3rem] font-light text-[#0a1f36]/[0.06] leading-none block mb-2">04</span>
                  <h3 className="font-heading text-2xl font-light text-[#0a1f36] mb-3">Qualità</h3>
                  <p className="text-[#0a1f36]/50 text-sm leading-relaxed">Ingredienti di prima scelta, preparazioni curate.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a1f36] py-20 md:py-24 px-6 md:px-10 lg:px-16">
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h2 className="font-heading font-light text-[var(--fluid-md)] text-white">
            Vieni a <span className="italic text-[#c4a05c]">conoscerci</span>
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link to="/prenota" className="btn-gold">Prenota un tavolo</Link>
            <Link to="/menu" className="btn-secondary border-white/20 text-white/80 hover:bg-white hover:text-[#0a1f36]">Scopri il menu</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
