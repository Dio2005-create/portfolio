import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f2fb] via-[#d9e8f8] to-[#c6ddf3] text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:py-12">
        <div className="space-y-12">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  )
}
