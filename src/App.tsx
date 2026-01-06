import { useRef, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import WorkExperience from './components/WorkExperience/WorkExperience'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import WorkingWithMe from './components/WorkingWithMe/WorkingWithMe'
import Projects from './components/Projects/Projects'
import Testimonials from './components/Testimonials/Testimonials'
import CalendlyCTA from './components/CalendlyCTA/CalendlyCTA'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ModalPortal from './components/ModalPortal'
import CalendlyModal from './components/CalendlyModal/CalendlyModal'
import CustomCursor from './components/CustomCursor/CustomCursor'
import InteractiveBackground from './components/InteractiveBackground/InteractiveBackground'
import type { TCards } from './components/Projects/Projects'

function App() {
  const referenceLinks = {
    hero: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    workExperience: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    workingWithMe: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    testimonials: useRef<HTMLElement>(null),
    calendly: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  }

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalCard, setModalCard] = useState<TCards | null>(null)
  const [isCalendlyModalOpen, setIsCalendlyModalOpen] = useState(false)

  const handleOpenModal = (card: TCards) => {
    setModalCard(card)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setModalCard(null)
  }

  const handleOpenCalendlyModal = () => {
    setIsCalendlyModalOpen(true)
  }

  const handleCloseCalendlyModal = () => {
    setIsCalendlyModalOpen(false)
  }

  return (
    <div className="App min-h-screen bg-white">
      <CustomCursor />
      <InteractiveBackground />
      <main className="relative z-10">
        <Navbar referenceLinks={referenceLinks} onOpenCalendly={handleOpenCalendlyModal} />
        <Hero reference={referenceLinks.hero} onOpenCalendly={handleOpenCalendlyModal} />
        <About reference={referenceLinks.about} />
        <WorkExperience reference={referenceLinks.workExperience} />
        <Skills reference={referenceLinks.skills} />
        <Services reference={referenceLinks.services} />
        <WorkingWithMe reference={referenceLinks.workingWithMe} />
        <Projects reference={referenceLinks.projects} onSeeMore={handleOpenModal} />
        <Testimonials reference={referenceLinks.testimonials} />
        <CalendlyCTA reference={referenceLinks.calendly} onOpenCalendly={handleOpenCalendlyModal} />
        <Contact reference={referenceLinks.contact} />
        <Footer />
        <ModalPortal isOpen={isModalOpen} card={modalCard} onClose={handleCloseModal} />
        <CalendlyModal isOpen={isCalendlyModalOpen} onClose={handleCloseCalendlyModal} />
      </main>
    </div>
  )
}

export default App
