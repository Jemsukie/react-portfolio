import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'tabler-icons-react'
import { calendlyUrl } from '../../lib/config'

type CalendlyModalProps = {
  isOpen: boolean
  onClose: () => void
}

const CalendlyModal = ({ isOpen, onClose }: CalendlyModalProps) => {
  // Close modal on ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-primary to-accent">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Let&apos;s Talk
                  </h2>
                  <p className="text-white/90 text-sm mt-1">
                    Schedule a consultation to discuss your project
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors text-white"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Calendly Embed */}
              <div className="p-6 bg-gray-50 overflow-y-auto max-h-[calc(90vh-120px)]">
                {calendlyUrl && calendlyUrl !== 'https://calendly.com/your-username' ? (
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <iframe
                      src={`${calendlyUrl}?embed=true`}
                      width="100%"
                      height="700"
                      frameBorder="0"
                      title="Schedule a consultation"
                      className="rounded-lg"
                    />
                  </div>
                ) : (
                  <div className="bg-white rounded-lg p-12 text-center border-2 border-dashed border-gray-300">
                    <p className="text-gray-600 mb-4">
                      Calendly integration will appear here
                    </p>
                    <p className="text-sm text-gray-500">
                      Add your Calendly URL to the environment variable: VITE_CALENDLY_URL
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CalendlyModal

