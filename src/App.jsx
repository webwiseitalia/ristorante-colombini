import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ChiSiamo from './pages/ChiSiamo'
import Menu from './pages/Menu'
import Cantina from './pages/Cantina'
import Gallery from './pages/Gallery'
import Eventi from './pages/Eventi'
import Contatti from './pages/Contatti'
import Prenota from './pages/Prenota'

gsap.registerPlugin(ScrollTrigger)

function ScrollManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    ScrollTrigger.refresh()
  }, [pathname])

  return null
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollManager />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cantina" element={<Cantina />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/eventi" element={<Eventi />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/prenota" element={<Prenota />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
