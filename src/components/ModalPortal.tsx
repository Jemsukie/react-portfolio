import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'tabler-icons-react'
import type { TCards } from './Projects/Projects'

type ModalPortalProps = {
  isOpen: boolean
  card: TCards | null
  onClose: () => void
}

const ModalPortal = ({ isOpen, card, onClose }: ModalPortalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!card) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-full max-w-4xl max-h-[90vh] overflow-auto pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors z-10"
                aria-label="Close modal"
              >
                <X size={24} className="text-gray-700" />
              </button>

              {/* Content */}
              <div className="mt-4">
                <div className="mb-6">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-64 md:h-96 object-cover rounded-xl mb-6"
                  />
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{card.title}</h2>
                </div>

                <div className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                  {card.description}
                </div>

                {card.sourceCode && (
                  <a
                    href={card.sourceCode}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-light transition-colors"
                  >
                    View Source Code
                  </a>
                )}
              </div>
            </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ModalPortal
