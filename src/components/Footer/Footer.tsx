import { motion } from 'framer-motion'
import { socialLinks } from '../../lib/config'

const Footer = () => {
  return (
    <footer className="relative py-8 md:py-12 bg-gray-50 border-t border-gray-200">
      <div className="container-max">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Jemuel Lupo. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ Icon, link }, idx) => (
              <motion.a
                key={idx}
                href={link}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-all border border-gray-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Visit ${link}`}
              >
                <motion.div
                  className="inline-flex items-center justify-center"
                  style={{ transformOrigin: 'center' }}
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ type: 'spring', stiffness: 300, duration: 0.6 }}
                >
                  <Icon className="text-primary" size={20} />
                </motion.div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
