import Navigation from './components/Navigation'
import Hero from './components/Hero'
import BenefitsStrip from './components/BenefitsStrip'
import QuoteForm from './components/QuoteForm'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <BenefitsStrip />
        <QuoteForm />
        <Services />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
