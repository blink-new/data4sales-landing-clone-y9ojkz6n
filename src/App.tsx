import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ClientCarousel } from './components/ClientCarousel'
import { Reputation } from './components/Reputation'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { CTA } from './components/CTA'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ClientCarousel />
        <Reputation />
        <Services />
        <Process />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App