import {PixelFrame}  from '@/components/PixelFrame'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Certificates from '@/components/Certificates'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <PixelFrame />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </main>
  )
}