import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { InvestCTA } from './components/InvestCTA'
import { Footer } from './components/Footer'
import { Partners } from './components/Partners'
import { Portfolio } from './components/Portfolio'
import { Spine } from './components/Spine'
import { Stats } from './components/Stats'

function App() {
  return (
    <>
      <Spine />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Portfolio />
        <Partners />
        <InvestCTA />
        <Footer />
      </main>
    </>
  )
}

export default App
