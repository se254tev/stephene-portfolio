import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Services from './components/Services'
import Workflow from './components/Workflow'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FinalCapstone from './components/FinalCapstone'
import AIPresenterCaseStudy from './components/AIPresenterCaseStudy'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main className="page-shell">
        <Hero />
        <About />
        <Skills />
        <FinalCapstone />
        <AIPresenterCaseStudy />
        <Projects />
        <Experience />
        <Education />
        <Services />
        <Workflow />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
