import React, { useRef } from 'react'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import './index.css'

function App() {
  const referenceLinks = {
    hero: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  }

  return (
    <div className="App">
      <main className="bg-body font-Montserrat">
        <Navbar referenceLinks={referenceLinks}>
          <Hero reference={referenceLinks.hero} />
          <About reference={referenceLinks.about} />
          <Projects reference={referenceLinks.projects} />
          <Contact reference={referenceLinks.contact} />
          <Footer reference={referenceLinks.hero} />
        </Navbar>
      </main>
    </div>
  )
}

export default App
