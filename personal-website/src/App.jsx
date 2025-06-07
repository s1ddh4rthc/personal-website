import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="p-8">
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
