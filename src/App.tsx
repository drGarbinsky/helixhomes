import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { InvestCTA } from './components/InvestCTA'
import { Footer } from './components/Footer'
import { Partners } from './components/Partners'
import { Portfolio } from './components/Portfolio'
import { Spine } from './components/Spine'
import { PartnerBios } from './pages/PartnerBios'
import { ProjectDetail } from './pages/ProjectDetail'
import { ScrollToHash } from './ScrollToHash'

function Home() {
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

function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partners" element={<PartnerBios />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </>
  )
}

export default App
