import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
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

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
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
