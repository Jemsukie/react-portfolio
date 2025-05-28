import { useRef } from 'react'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import './index.css'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import type { TCards } from './components/Projects/Projects'
import ModalPortal from './components/ModalPortal'

function App() {
  const referenceLinks = {
    hero: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  }

  // Modal state at the top level
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalCard, setModalCard] = useState<TCards | null>(null)

  // Handler to open modal with card
  const handleOpenModal = (card: TCards) => {
    setModalCard(card)
    setIsModalOpen(true)
  }
  // Handler to close modal
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setModalCard(null)
  }

  return (
    <div className="App">
      <main className="bg-body font-Montserrat">
        <Navbar referenceLinks={referenceLinks}>
          <Hero reference={referenceLinks.hero} />
          <About reference={referenceLinks.about} />
          <Projects reference={referenceLinks.projects} onSeeMore={handleOpenModal} />
          <Contact reference={referenceLinks.contact} />
          <Footer reference={referenceLinks.hero} className={'hidden md:flex border-t-2 border-info bg-secondary'} />
        </Navbar>
        {/* Modal rendered at the top level using portal */}
        <ModalPortal isOpen={isModalOpen} card={modalCard} onClose={handleCloseModal} />
      </main>
    </div>
  )
}

export default App
