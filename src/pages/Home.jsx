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
      <section ref={heroRef} className="relative min-h-[85vh] lg:min-h-screen flex items-end pb-12 md:pb-24 pt-28 md:pt-32 bg-[#0a1f36] lg:bg-[#fffef9]">
        {/* Mobile: full background image */}
        <div className="absolute inset-0 lg:hidden overflow-hidden">
          <img src={heroZuppa} alt="Zuppa di pesce del Ristorante Colombini" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0a1f36]/70" />
        </div>
        {/* Desktop: clip-path image panel on right */}
        <div ref={parallaxBg} className="absolute top-0 right-0 w-[55%] h-full hidden lg:block overflow-hidden" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}>
          <img src={heroZuppa} alt="Zuppa di pesce del Ristorante Colombini" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0a1f36]/60" />
        </div>
        {/* Gradient overlay for navbar readability on desktop */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a1f36]/40 to-transparent z-20 pointer-events-none hidden lg:block" />
        <div className="absolute top-20 right-8 md:right-16 pointer-events-none select-none" aria-hidden="true">
          <span className="font-heading text-[clamp(8rem,25vw,20rem)] font-light leading-none text-white/[0.05] lg:text-[#0a1f36]/[0.03] lg:text-white/[0.05]">93</span>
        </div>
        <div className="relative z-10 w-full px-6 md:px-10 lg:px-16">
          <div className="w-full">
            <div className="hero-label flex items-center gap-4 mb-6 md:mb-8 opacity-0">
              <div className="w-12 h-[1px] bg-[#c4a05c]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold">Accademia Italiana della Cucina</span>
            </div>
            <h1 className="mb-6 md:mb-8">
              <div className="overflow-hidden"><div className="hero-title-line font-heading font-light text-[clamp(3rem,9vw,8rem)] leading-[0.9] text-white lg:text-[#0a1f36] tracking-[-0.02em]">Ristorante</div></div>
              <div className="overflow-hidden"><div className="hero-title-line font-heading font-light text-[clamp(3.5rem,11vw,10rem)] leading-[0.9] text-white lg:text-[#0a1f36] tracking-[-0.02em] ml-[5vw]">Colombini</div></div>
              <div className="overflow-hidden mt-2"><div className="hero-title-line font-heading italic font-light text-[clamp(1.1rem,2.5vw,2rem)] text-[#c4a05c] ml-[2vw]">il sapore del mare a due passi dalla Pontina</div></div>
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-end">
              <div className="lg:col-span-5">
                <p className="hero-subtitle text-white/60 lg:text-[#0a1f36]/60 text-sm lg:text-[clamp(0.9rem,1.2vw,1.1rem)] leading-relaxed max-w-lg opacity-0">Pesce fresco dal porto di Anzio, tradizione familiare dal 1993. 140 coperti, parcheggio privato, uscita Pontina.</p>
                <div className="flex flex-wrap gap-3 md:gap-4 mt-6 md:mt-8">
                  <Link to="/prenota" className="hero-cta btn-gold opacity-0">Prenota un tavolo</Link>
                  <Link to="/menu" className="hero-cta btn-secondary border-white/20 text-white/80 hover:bg-white hover:text-[#0a1f36] lg:border-[#0a1f36] lg:text-[#0a1f36] lg:hover:bg-[#0a1f36] lg:hover:text-[#fffef9] opacity-0">Il menu</Link>
                </div>
              </div>
              <div className="hidden lg:block lg:col-span-3 lg:col-start-10">
                <div className="space-y-4 text-[11px] uppercase tracking-[0.15em]">
                  {['Pesce fresco di Anzio', 'Gestione familiare dal 1993', 'Ampio parcheggio privato'].map((t, i) => (
                    <div key={i} className="hero-detail opacity-0 flex items-center gap-3 text-white/60">
                      <span className="w-3 h-[1px] bg-[#c4a05c]" />{t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }} className="absolute bottom-6 md:bottom-8 left-6 md:left-10 lg:left-16 flex-col items-center gap-2 hidden md:flex">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 lg:text-[#0a1f36]/20 rotate-90 origin-center translate-x-3">Scroll</span>
          <div className="w-[1px] h-12 bg-white/20 lg:bg-[#0a1f36]/20" />
        </motion.div>
      </section>

      {/* MARQUEE */}
      <div className="py-5 bg-[#0a1f36] overflow-hidden">
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
        <div ref={dishesRef} className="w-full">
          {/* First dish: massive image with overlapping text card */}
          <div className="relative">
            <div className="w-full lg:w-[75%] overflow-hidden">
              <img src={paccheriScampi} alt="Linguine allo Scoglio" className="w-full aspect-[16/10] object-cover" />
            </div>
            <div className="relative lg:absolute lg:right-0 lg:bottom-[-2rem] lg:w-[45%] bg-[#0a1f36] p-8 md:p-12 z-10">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#c4a05c] font-bold border border-[#c4a05c]/30 px-3 py-1 inline-block mb-5">Signature</span>
              <h3 className="font-heading text-[clamp(1.8rem,3vw,2.8rem)] font-light text-white leading-[1.1] mb-4">Linguine allo Scoglio</h3>
              <p className="text-white/50 leading-relaxed text-sm mb-6">Il piatto firma — consigliato dall'Accademia Italiana della Cucina. Frutti di mare freschissimi dal porto di Anzio.</p>
              <Link to="/menu" className="text-[10px] uppercase tracking-[0.2em] text-[#c4a05c] font-bold border-b border-[#c4a05c]/30 pb-1 hover:border-[#c4a05c] transition-colors">Scopri il menu</Link>
            </div>
          </div>
        </div>
      </section>

      {/* DISH 2 + 3 — Asymmetric two-column with different heights */}
      <section className="bg-[#fffef9] pt-24 lg:pt-32 pb-[var(--space-xl)] px-6 md:px-10 lg:px-16">
        <div className="w-full">
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

      {/* CTA — Split layout */}
      <section ref={ctaRef} className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative overflow-hidden">
          <img src={salaRistorante} alt="Sala del Ristorante Colombini" className="w-full h-full object-cover min-h-[300px] lg:min-h-0" />
        </div>
        <div className="bg-[#0a1f36] px-8 md:px-16 lg:px-20 py-16 md:py-24 flex flex-col justify-center">
          <span className="font-heading text-[clamp(5rem,10vw,9rem)] font-light leading-none text-white/[0.04] block">140</span>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold -mt-6 mb-8">coperti — parcheggio privato</p>
          <h2 className="font-heading font-light text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.1] text-white mb-3">Vieni a trovarci a<br /><span className="italic text-[#c4a05c]">Borgo Montello</span></h2>
          <p className="text-white/40 text-sm mb-10 max-w-md">A due passi dalla Pontina, uscita Borgo Montello/Nettuno. Pesce fresco dal porto di Anzio, dal 1993.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/prenota" className="btn-gold">Prenota ora</Link>
            <a href="tel:07730481561" className="btn-secondary border-white/20 text-white/80 hover:bg-white hover:text-[#0a1f36]">0773 0481561</a>
          </div>
        </div>
      </section>

      {/* SEPARATOR */}
      <div className="bg-[#f9f3e8] py-10 md:py-14 flex items-center justify-center gap-6 px-6">
        <div className="h-[1px] w-16 bg-[#c4a05c]/30" />
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#0a1f36]/20 font-bold">Dal 1993</span>
        <div className="h-[1px] w-16 bg-[#c4a05c]/30" />
      </div>

      {/* REVIEWS — Hero quote + horizontal scroll */}
      <section className="relative bg-[#0a1f36] overflow-hidden">
        <div className="absolute inset-0">
          <img src={salaRistorante} alt="" className="w-full h-full object-cover opacity-10" aria-hidden="true" />
        </div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
          {/* Left: giant featured quote */}
          <div className="px-8 md:px-16 lg:px-20 py-16 md:py-24 lg:py-28 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-[1px] bg-[#c4a05c]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4a05c] font-bold">I nostri ospiti</span>
            </div>
            <blockquote>
              <p className="font-heading text-[clamp(1.6rem,3.5vw,3.2rem)] font-light leading-[1.2] text-white italic mb-8">&ldquo;{reviews[0].text}&rdquo;</p>
              <footer className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">&mdash; {reviews[0].source}</footer>
            </blockquote>
          </div>
          {/* Right: stacked other quotes + ratings */}
          <div ref={reviewsRef} className="border-t lg:border-t-0 lg:border-l border-white/[0.06] px-8 md:px-16 lg:px-20 py-16 md:py-20 lg:py-28 flex flex-col justify-center gap-14">
            {reviews.slice(1).map((review, idx) => (
              <div key={idx} className={idx > 0 ? 'pt-14 border-t border-white/[0.06]' : ''}>
                <p className="font-heading text-[clamp(1.1rem,1.8vw,1.5rem)] font-light leading-[1.5] text-white/70 italic mb-4">&ldquo;{review.text}&rdquo;</p>
                <footer className="text-[10px] uppercase tracking-[0.2em] text-white/25 font-bold">&mdash; {review.source}</footer>
              </div>
            ))}
            <div className="pt-14 border-t border-white/[0.06] flex flex-wrap gap-6 md:gap-10 text-[10px] uppercase tracking-[0.2em] text-[#c4a05c]/40">
              <span>TripAdvisor 4.5/5</span><span>Google 4.4/5</span><span>Restaurant Guru 4.3/5</span><span>Travellers&apos; Choice</span>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO STRIP — Infinite loop slider */}
      <section className="bg-[#0a1f36] py-3 overflow-hidden">
        <div className="photo-slider-track flex gap-3">
          {[0, 1].map(set => (
            <div key={set} className="flex gap-3 shrink-0">
              {[paccheriScampi, salaRistorante, frittura, paccheriScampi, salaRistorante, frittura].map((img, i) => (
                <div key={i} className="w-[40vw] md:w-[30vw] lg:w-[25vw] aspect-[4/3] overflow-hidden shrink-0">
                  <img src={img} alt="" className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* INFO — Broken asymmetric grid */}
      <section className="bg-[#fffef9] py-20 md:py-28 px-6 md:px-10 lg:px-16">
        <div ref={infoRef} className="w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
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
