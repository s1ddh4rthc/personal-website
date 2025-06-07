import VantaBackground from './components/VantaBackground'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <VantaBackground />
      <div className="relative z-10">
        <Header />
        <main className="max-w-4xl mx-auto px-6 sm:px-12 space-y-20 py-16">
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

