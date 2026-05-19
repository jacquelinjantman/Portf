import StarsBackground from '@/components/starsBackground'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Certificates from '@/components/certificates'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <main>
      <StarsBackground />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </main>
  )
}