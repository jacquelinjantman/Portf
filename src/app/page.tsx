
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Certificates from '@/components/Certificates'
import Contact from '@/components/Contact'
import FlowerGarden from "@/components/FlowerGarden";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <FlowerGarden/>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </main>
  )
}