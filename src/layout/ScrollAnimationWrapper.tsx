import { motion } from 'framer-motion'
import type { TScrollAnimationWrapperProps } from '../lib/props-types'

const ScrollAnimationWrapper = ({ children, delay = 0, className = '' }: TScrollAnimationWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollAnimationWrapper

