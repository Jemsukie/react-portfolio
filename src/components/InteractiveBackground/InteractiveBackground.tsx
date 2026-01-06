import { useEffect, useState, useMemo } from 'react'
import { motion } from 'framer-motion'

const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ 
    width: typeof window !== 'undefined' ? window.innerWidth : 1920,
    height: typeof window !== 'undefined' ? window.innerHeight : 1080
  })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    updateWindowSize()
    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('resize', updateWindowSize)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('resize', updateWindowSize)
    }
  }, [])

  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0

  // Generate particles with random positions
  const particles = useMemo(() => {
    const particleCount = 50
    return Array.from({ length: particleCount }, (_, i) => {
      const randomX = Math.random()
      const randomY = Math.random()
      const randomSize = Math.random()
      return {
        id: i,
        x: randomX * windowSize.width,
        y: randomY * windowSize.height,
        size: randomSize * 2 + 1,
        duration: 20 + Math.random() * 20,
        delay: Math.random() * 5,
      }
    })
  }, [windowSize.width, windowSize.height])

  if (isTouchDevice) {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Static gradient orbs for touch devices */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
    )
  }

  // Calculate parallax effect based on mouse position
  const centerX = windowSize.width / 2
  const centerY = windowSize.height / 2
  const moveX = (mousePosition.x - centerX) / 100
  const moveY = (mousePosition.y - centerY) / 100

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated gradient orbs with parallax */}
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

      {/* Particles background - shadcn.io style */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(13, 148, 136, 0.15) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}
      />
      <svg className="absolute inset-0 w-full h-full overflow-hidden">
        <defs>
          <radialGradient id="particle-gradient" cx="50%" cy="50%">
            <stop offset="0%" stopColor="rgba(13, 148, 136, 0.5)" />
            <stop offset="100%" stopColor="rgba(13, 148, 136, 0)" />
          </radialGradient>
        </defs>
        {particles.map((particle) => {
          const particleMoveX = moveX * (0.03 + (particle.id % 10) * 0.01)
          const particleMoveY = moveY * (0.03 + (particle.id % 10) * 0.01)

          return (
            <motion.circle
              key={particle.id}
              cx={0}
              cy={0}
              r={particle.size}
              fill="url(#particle-gradient)"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.4, 0],
                cx: particle.x + particleMoveX,
                cy: particle.y + particleMoveY,
              }}
              transition={{
                opacity: {
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: 'easeInOut',
                },
                cx: {
                  type: 'spring',
                  stiffness: 100,
                  damping: 30,
                },
                cy: {
                  type: 'spring',
                  stiffness: 100,
                  damping: 30,
                },
              }}
            />
          )
        })}
      </svg>
    </div>
  )
}

export default InteractiveBackground

