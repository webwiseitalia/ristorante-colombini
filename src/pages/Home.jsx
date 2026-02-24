import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { useReveal, useStagger, useParallax } from '../hooks/useGsap'
import heroZuppa from '../assets/foto/foto-2.webp'
import gnocchiScoglio from '../assets/foto/foto-3.webp'
import paccheriScampi from '../assets/foto/foto-4.webp'
import grigliata from '../assets/foto/foto-9.webp'
import salaRistorante from '../assets/foto/foto-11.webp'
import frittura from '../assets/foto/foto-13.webp'

gsap.registerPlugin(ScrollTrigger)

const reviews = [
  { text: 'Qualsiasi pietanza si ordini, merita un 110 e lode.', source: 'TripAdvisor' },
  { text: 'Maestria e professionalità dello chef. Ci torneremo sicuramente.', source: 'Google' },
  { text: 'Locale raffinato dall\'interno. Porzioni abbondanti.', source: 'TripAdvisor' },
]

export default function Home() {
  const heroRef = useRef(null)
  const dishesRef = useStagger({ stagger: 0.15, y: 80 })
  const reviewsRef = useStagger({ stagger: 0.12, y: 60 })
  const ctaRef = useReveal({ y: 40 })
  const infoRef = useStagger({ stagger: 0.1, y: 30 })
  const parallaxBg = useParallax(-0.2)
  const parallaxImg = useParallax(0.12)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.fromTo('.hero-label', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
        .fromTo('.hero-title-line', { y: '110%' }, { y: '0%', duration: 1.2, stagger: 0.12, ease: 'power3.out' }, '-=0.4')
        .fromTo('.hero-subtitle', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
        .fromTo('.hero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }, '-=0.4')
        .fromTo('.hero-detail', { opacity: 0 }, { opacity: 1, duration: 0.8, stagger: 0.08 }, '-=0.3')
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-end pb-16 md:pb-24 pt-32 bg-[#fffef9]">
        <div ref={parallaxBg} className="absolute top-0 right-0 w-[55%] h-full hidden lg:block overflow-hidden" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}>
          <img src={heroZuppa} alt="Zuppa di pesce del Ristorante Colombini" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0a1f36]/60" />
        </div>
        <div className="absolute top-20 right-8 md:right-16 pointer-events-none select-none" aria-hidden="true">
          <span className="font-heading text-[clamp(8rem,25vw,20rem)] font-light leading-none text-[#0a1f36]/[0.03] lg:text-white/[0.05]">93</span>
        </div>
        <div className="relative z-10 w-full px-6 md:px-10 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="hero-label flex items-center gap-4 mb-8 opacity-0">
              <div className="w-12 h-[1px] bg-[#c4a05c]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold">Accademia Italiana della Cucina</span>
            </div>
            <h1 className="mb-8">
              <div className="overflow-hidden"><div className="hero-title-line font-heading font-light text-[clamp(3rem,9vw,8rem)] leading-[0.9] text-[#0a1f36] tracking-[-0.02em]">Ristorante</div></div>
              <div className="overflow-hidden"><div className="hero-title-line font-heading font-light text-[clamp(3.5rem,11vw,10rem)] leading-[0.9] text-[#0a1f36] tracking-[-0.02em] ml-[5vw]">Colombini</div></div>
              <div className="overflow-hidden mt-2"><div className="hero-title-line font-heading italic font-light text-[clamp(1.2rem,2.5vw,2rem)] text-[#c4a05c] ml-[2vw]">il sapore del mare a due passi dalla Pontina</div></div>
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-end">
              <div className="lg:col-span-5">
                <p className="hero-subtitle text-[#0a1f36]/60 text-[clamp(0.9rem,1.2vw,1.1rem)] leading-relaxed max-w-md opacity-0">Pesce fresco dal porto di Anzio, tradizione familiare dal 1993. 140 coperti, parcheggio privato, uscita Pontina.</p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link to="/prenota" className="hero-cta btn-gold opacity-0">Prenota un tavolo</Link>
                  <Link to="/menu" className="hero-cta btn-secondary opacity-0">Il menu</Link>
                </div>
              </div>
              <div className="lg:col-span-3 lg:col-start-10">
                <div className="space-y-4 text-[11px] uppercase tracking-[0.15em]">
                  {['Pesce fresco di Anzio', 'Gestione familiare dal 1993', 'Ampio parcheggio privato'].map((t, i) => (
                    <div key={i} className="hero-detail opacity-0 flex items-center gap-3 text-[#0a1f36]/40">
                      <span className="w-3 h-[1px] bg-[#c4a05c]" />{t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }} className="absolute bottom-8 left-6 md:left-10 lg:left-16 flex flex-col items-center gap-2">
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#0a1f36]/30 rotate-90 origin-center translate-x-3">Scroll</span>
          <div className="w-[1px] h-12 bg-[#0a1f36]/20" />
        </motion.div>
      </section>

      {/* MARQUEE */}
      <div className="py-6 bg-[#0a1f36] overflow-hidden">
        <div className="marquee-track text-white/20 text-[11px] uppercase tracking-[0.4em] font-bold whitespace-nowrap">
          {[0, 1].map(i => (
            <span key={i} className="flex gap-16 items-center shrink-0">
              <span>Pesce Fresco di Anzio</span><span className="text-[#c4a05c]/40">&bull;</span>
              <span>Pasta di Gragnano</span><span className="text-[#c4a05c]/40">&bull;</span>
              <span>Gestione Familiare</span><span className="text-[#c4a05c]/40">&bull;</span>
              <span>Accademia della Cucina</span><span className="text-[#c4a05c]/40">&bull;</span>
              <span>Borgo Montello</span><span className="text-[#c4a05c]/40">&bull;</span>
              <span className="mr-16">Dal 1993</span>
            </span>
          ))}
        </div>
      </div>

      {/* DISH 1 — FULL BLEED IMAGE + overlapping text block */}
      <section className="relative bg-[#fffef9]">
        <div ref={dishesRef} className="max-w-[1400px] mx-auto">
          {/* First dish: massive image with overlapping text card */}
          <div className="relative">
            <div className="w-full lg:w-[75%] overflow-hidden">
              <img src={paccheriScampi} alt="Linguine allo Scoglio" className="w-full aspect-[16/10] object-cover" />
            </div>
            <div className="relative lg:absolute lg:right-0 lg:bottom-[-3rem] lg:w-[45%] bg-[#0a1f36] p-8 md:p-12 z-10">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#c4a05c] font-bold border border-[#c4a05c]/30 px-3 py-1 inline-block mb-5">Signature</span>
              <h3 className="font-heading text-[clamp(1.8rem,3vw,2.8rem)] font-light text-white leading-[1.1] mb-4">Linguine allo Scoglio</h3>
              <p className="text-white/50 leading-relaxed text-sm mb-6">Il piatto firma — consigliato dall'Accademia Italiana della Cucina. Frutti di mare freschissimi dal porto di Anzio.</p>
              <Link to="/menu" className="text-[10px] uppercase tracking-[0.2em] text-[#c4a05c] font-bold border-b border-[#c4a05c]/30 pb-1 hover:border-[#c4a05c] transition-colors">Scopri il menu</Link>
            </div>
          </div>
        </div>
      </section>

      {/* DISH 2 + 3 — Asymmetric two-column with different heights */}
      <section className="bg-[#fffef9] pt-20 lg:pt-28 pb-[var(--space-xl)] px-6 md:px-10 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Left col: smaller image, pushed down */}
            <div className="lg:col-span-5 lg:mt-20">
              <div className="overflow-hidden">
                <img ref={parallaxImg} src={gnocchiScoglio} alt="Gnocchetti allo Scoglio" className="w-full aspect-[3/4] object-cover" />
              </div>
              <div className="mt-6">
                <span className="font-heading text-[4rem] font-light leading-none text-[#0a1f36]/[0.05] block">02</span>
                <h3 className="font-heading text-[clamp(1.4rem,2.5vw,2.2rem)] font-light text-[#0a1f36] leading-[1.1] mb-3">Gnocchetti allo Scoglio</h3>
                <p className="text-[#0a1f36]/50 text-sm leading-relaxed max-w-sm">Gnocchetti fatti in casa con gamberi, pomodorino e un tocco di peperoncino.</p>
              </div>
            </div>
            {/* Right col: taller image, flush top */}
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="overflow-hidden">
                <img src={grigliata} alt="Grigliata di Pesce" className="w-full aspect-[3/4] object-cover" />
              </div>
              <div className="mt-6 lg:pl-8">
                <span className="font-heading text-[4rem] font-light leading-none text-[#0a1f36]/[0.05] block">03</span>
                <h3 className="font-heading text-[clamp(1.4rem,2.5vw,2.2rem)] font-light text-[#0a1f36] leading-[1.1] mb-3">Grigliata di Pesce</h3>
                <p className="text-[#0a1f36]/50 text-sm leading-relaxed max-w-sm">Scampi, gamberoni, calamari e orata alla griglia. Il mare nel piatto.</p>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-16 flex justify-center"><Link to="/menu" className="btn-primary">Scopri il menu completo</Link></div>
        </div>
      </section>

      {/* CTA — Full bleed image background, narrow content */}
      <section ref={ctaRef} className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={salaRistorante} alt="Sala del Ristorante Colombini" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0a1f36]/75" />
        </div>
        <div className="relative z-10 px-6 md:px-10 lg:px-16 py-20 md:py-28">
          <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
            <div className="max-w-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-[#c4a05c]" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold">140 coperti</span>
              </div>
              <h2 className="font-heading font-light text-[var(--fluid-lg)] leading-[0.95] text-white">Vieni a trovarci</h2>
              <p className="font-heading italic text-[clamp(1.1rem,2vw,1.6rem)] text-white/40 mt-3">il mare ti aspetta a Borgo Montello</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/prenota" className="btn-gold">Prenota ora</Link>
              <a href="tel:07730481561" className="btn-secondary border-white/20 text-white/80 hover:bg-white hover:text-[#0a1f36]">0773 0481561</a>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS — Broken grid, overlapping quotes */}
      <section className="py-[var(--space-xl)] px-6 md:px-10 lg:px-16 bg-[#f9f3e8] relative">
        <div className="absolute top-12 right-16 pointer-events-none select-none hidden lg:block" aria-hidden="true">
          <span className="font-heading text-[clamp(12rem,20vw,18rem)] font-light leading-none text-[#0a1f36]/[0.02]">&ldquo;</span>
        </div>
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 mb-4"><div className="w-12 h-[1px] bg-[#c4a05c]" /><span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold">Cosa dicono di noi</span></div>
          <h2 className="font-heading font-light text-[var(--fluid-lg)] leading-[0.95] text-[#0a1f36] max-w-xl mb-16 md:mb-20">Le parole dei<br /><span className="italic">nostri ospiti</span></h2>
          <div ref={reviewsRef} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
            {/* Review 1: wide left */}
            <div className="md:col-span-5">
              <div className="bg-white p-8 md:p-10 relative">
                <span className="font-heading text-[5rem] leading-none text-[#c4a05c]/10 absolute -top-4 -left-1 select-none pointer-events-none" aria-hidden="true">&ldquo;</span>
                <blockquote className="relative z-10">
                  <p className="font-heading text-[clamp(1.3rem,2vw,1.8rem)] font-light leading-[1.4] text-[#0a1f36] italic mb-6">{reviews[0].text}</p>
                  <footer className="text-[10px] uppercase tracking-[0.2em] text-[#0a1f36]/40 font-bold">{reviews[0].source}</footer>
                </blockquote>
              </div>
            </div>
            {/* Review 2: right, offset down */}
            <div className="md:col-span-4 md:col-start-7 md:mt-24">
              <blockquote>
                <p className="font-heading text-[clamp(1.2rem,1.8vw,1.6rem)] font-light leading-[1.4] text-[#0a1f36] italic mb-6">{reviews[1].text}</p>
                <footer className="text-[10px] uppercase tracking-[0.2em] text-[#0a1f36]/40 font-bold">{reviews[1].source}</footer>
              </blockquote>
            </div>
            {/* Review 3: narrow, pulled up */}
            <div className="md:col-span-5 md:col-start-3 md:-mt-6">
              <div className="border-l-2 border-[#c4a05c] pl-6">
                <p className="font-heading text-[clamp(1.1rem,1.5vw,1.4rem)] font-light leading-[1.5] text-[#0a1f36]/70 italic mb-4">{reviews[2].text}</p>
                <footer className="text-[10px] uppercase tracking-[0.2em] text-[#0a1f36]/40 font-bold">{reviews[2].source}</footer>
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-wrap gap-8 md:gap-16 text-[10px] uppercase tracking-[0.2em] text-[#0a1f36]/30">
            <span>TripAdvisor 4.5/5</span><span>Google 4.4/5</span><span>Restaurant Guru 4.3/5</span><span>Travellers&apos; Choice</span>
          </div>
        </div>
      </section>

      {/* PHOTO STRIP — Irregular widths */}
      <section className="bg-[#0a1f36]">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-5 aspect-[4/3] overflow-hidden">
            <img src={paccheriScampi} alt="" className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700" />
          </div>
          <div className="col-span-3 aspect-[4/3] overflow-hidden">
            <img src={salaRistorante} alt="" className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700" />
          </div>
          <div className="col-span-4 aspect-[4/3] overflow-hidden">
            <img src={frittura} alt="" className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700" />
          </div>
        </div>
      </section>

      {/* INFO — Broken asymmetric grid */}
      <section className="bg-[#fffef9] py-[var(--space-lg)] px-6 md:px-10 lg:px-16">
        <div ref={infoRef} className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
          <div className="md:col-span-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold block mb-4">Dove siamo</span>
            <p className="text-[#0a1f36]/70 text-sm leading-relaxed mb-1">Via Cursori della Palude 13</p>
            <p className="text-[#0a1f36]/70 text-sm mb-4">Borgo Montello (LT)</p>
            <p className="text-[11px] text-[#0a1f36]/30">Uscita Borgo Montello/Nettuno — SS148 Pontina</p>
          </div>
          <div className="md:col-span-3 md:col-start-6 md:mt-8 md:border-l md:border-[#0a1f36]/10 md:pl-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold block mb-4">Orari</span>
            <p className="text-[#0a1f36]/70 text-sm mb-1">Mar — Dom: Pranzo 12:15 — 15:00</p>
            <p className="text-[#0a1f36]/70 text-sm mb-4">Ven — Sab: Cena 19:30 — 22:30</p>
            <p className="text-[11px] text-[#722f37] font-bold">Chiuso il Lunedì</p>
          </div>
          <div className="md:col-span-3 md:col-start-10 md:-mt-4 md:border-l md:border-[#0a1f36]/10 md:pl-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold block mb-4">Prenota</span>
            <a href="tel:07730481561" className="block text-[#0a1f36]/70 text-sm hover:text-[#0a1f36] transition-colors mb-1">0773 0481561</a>
            <a href="tel:3925674723" className="block text-[#0a1f36]/70 text-sm hover:text-[#0a1f36] transition-colors mb-4">392 567 4723</a>
            <p className="text-[11px] text-[#0a1f36]/30">Prenotazione consigliata</p>
          </div>
        </div>
      </section>
    </div>
  )
}
