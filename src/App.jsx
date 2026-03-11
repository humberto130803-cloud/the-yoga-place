import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import About from './components/About'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Schedule from './components/Schedule'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Reviews />
        <Schedule />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
