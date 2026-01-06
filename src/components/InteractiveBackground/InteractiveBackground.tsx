import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0

  if (isTouchDevice) {
    return null
  }

  // Calculate parallax effect based on mouse position
  const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0
  const centerY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0
  const moveX = (mousePosition.x - centerX) / 50
  const moveY = (mousePosition.y - centerY) / 50

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          x: moveX * 0.5,
          y: moveY * 0.5,
        }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 20,
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: -moveX * 0.3,
          y: -moveY * 0.3,
        }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 20,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
        animate={{
          x: moveX * 0.2 - 160,
          y: moveY * 0.2 - 160,
        }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 20,
        }}
      />
    </div>
  )
}

export default InteractiveBackground

