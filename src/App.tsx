import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { InvestCTA } from './components/InvestCTA'
import { Footer } from './components/Footer'
import { Partners } from './components/Partners'
import { Portfolio } from './components/Portfolio'
import { Spine } from './components/Spine'
import { PartnerBios } from './pages/PartnerBios'

function App() {
  if (window.location.pathname === '/partners') {
    return <PartnerBios />
  }

  return (
    <>
      <Spine />
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Partners />
        <InvestCTA />
        <Footer />
      </main>
    </>
  )
}

export default App
