import { useRef } from 'react'
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

  const ws = new WebSocket('ws://192.168.5.52:8080')

  ws.onopen = () => {
    console.log('Connected to WebSocket server')
  }

  ws.onmessage = event => {
    const li = document.createElement('li')
    li.textContent = event.data
  }

  return (
    <div className="App">
      <main className="bg-body font-Montserrat">
        <Navbar referenceLinks={referenceLinks}>
          <Hero reference={referenceLinks.hero} />
          <About reference={referenceLinks.about} />
          <Projects reference={referenceLinks.projects} />
          <Contact reference={referenceLinks.contact} />
          <Footer reference={referenceLinks.hero} className={'hidden md:flex border-t-2 border-info bg-secondary'} />
        </Navbar>
      </main>
    </div>
  )
}

export default App
