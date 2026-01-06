import { useState, useEffect, useRef } from 'react'
import { Menu2, X, Download } from 'tabler-icons-react'
import { motion, AnimatePresence } from 'framer-motion'
import { goToSection } from '../../lib/link-helper'
import { assets } from '../../lib/asset-helper'
import CalendlyButton from '../CalendlyButton/CalendlyButton'

export type TReferenceLinksProps = {
  [key: string]: React.RefObject<HTMLElement>
}

export type TNavLinksProps = {
  title: string
  link: React.RefObject<HTMLElement>
  icon?: JSX.Element
}

export const getNavlinks = ({ referenceLinks }: { referenceLinks: TReferenceLinksProps }) => {
  const { hero, about, workExperience, skills, services, projects, testimonials, contact } = referenceLinks

  return [
    { title: 'Home', link: hero },
    { title: 'About', link: about },
    { title: 'Experience', link: workExperience },
    { title: 'Skills', link: skills },
    { title: 'Services', link: services },
    { title: 'Projects', link: projects },
    { title: 'Testimonials', link: testimonials },
    { title: 'Contact', link: contact },
  ]
}

type NavbarProps = {
  referenceLinks: TReferenceLinksProps
  onOpenCalendly: () => void
}

const Navbar = ({ referenceLinks, onOpenCalendly }: NavbarProps) => {
  const navLinks: TNavLinksProps[] = getNavlinks({ referenceLinks })
  const [burgerOn, setBurgerOn] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navbarRef = useRef<HTMLDivElement>(null)
  const { cv } = assets

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setBurgerOn(false)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (burgerOn) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [burgerOn])

  const onClickBurger = () => {
    setBurgerOn(prev => !prev)
  }

  const handleCloseMenu = () => {
    setBurgerOn(false)
  }

  return (
    <>
      <nav
        ref={navbarRef}
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="container-max">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div
              onClick={() => goToSection(referenceLinks.hero)}
              className="flex items-center cursor-pointer"
            >
              <span className="text-xl md:text-2xl font-bold text-primary hover:text-accent transition-colors">
                Portfolio
              </span>
            </div>

            {/* Desktop Menu - Hidden on tablet, visible on large screens */}
            <div className="hidden lg:flex items-center gap-2 lg:gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.title}
                  onClick={() => goToSection(link.link)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 rounded-lg hover:bg-gray-100"
                >
                  {link.title}
                </button>
              ))}
              <div className="ml-2">
                <CalendlyButton
                  onOpenCalendly={onOpenCalendly}
                  variant="accent"
                  size="sm"
                  iconSize={18}
                >
                  Schedule
                </CalendlyButton>
              </div>
            </div>

            {/* Mobile/Tablet Menu Button - Visible on mobile and tablet */}
            <button
              onClick={onClickBurger}
              className="lg:hidden p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors z-50 relative"
              aria-label="Toggle menu"
            >
              {burgerOn ? <X size={24} className="text-gray-700" /> : <Menu2 size={24} className="text-gray-700" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay & Drawer - Outside nav for proper z-index */}
      <AnimatePresence>
        {burgerOn && (
          <>
            {/* Dark Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleCloseMenu}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] lg:hidden"
            />

            {/* Mobile/Tablet Menu Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-[9999] lg:hidden shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
                <h2 className="text-xl font-bold text-gray-800">Portfolio</h2>
                <button
                  onClick={handleCloseMenu}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>

              {/* Menu Content */}
              <div className="px-6 py-6 space-y-3">
                {/* Navigation Links */}
                {navLinks.map((link) => (
                  <button
                    key={link.title}
                    onClick={() => {
                      goToSection(link.link)
                      handleCloseMenu()
                    }}
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-base text-gray-700 font-medium"
                  >
                    {link.title}
                  </button>
                ))}

                {/* Divider */}
                <div className="border-t border-gray-200 my-4" />

                {/* Download CV Button */}
                <motion.a
                  href={cv}
                  download="jemuel-lupo.pdf"
                  onClick={handleCloseMenu}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold text-base hover:bg-primary-light transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={20} />
                  Download CV
                </motion.a>

                {/* Schedule Meeting Button */}
                <div className="w-full">
                  <CalendlyButton
                    onOpenCalendly={() => {
                      onOpenCalendly()
                      handleCloseMenu()
                    }}
                    variant="accent"
                    size="md"
                    className="w-full"
                  >
                    Schedule Meeting
                  </CalendlyButton>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="h-16 md:h-20" /> {/* Spacer for fixed navbar */}
    </>
  )
}

export default Navbar
