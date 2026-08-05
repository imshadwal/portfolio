import { Analytics } from '@vercel/analytics/react'
import { About } from './components/About'
import { Achievements } from './components/Achievements'
import { Contact } from './components/Contact'
import { ElegantBackground } from './components/ElegantBackground'
import { Hero } from './components/Hero'
import { Highlights } from './components/Highlights'
import { Journey } from './components/Journey'
import { Nav } from './components/Nav'
import { ScrollProgress } from './components/ScrollProgress'
import { Skills } from './components/Skills'

export default function App() {
  return (
    <div className="relative isolate min-h-svh">
      <ElegantBackground />
      <Nav />
      <ScrollProgress />
      <main className="relative z-10">
        <Hero />
        <Highlights />
        <About />
        <Journey />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Analytics />
    </div>
  )
}
