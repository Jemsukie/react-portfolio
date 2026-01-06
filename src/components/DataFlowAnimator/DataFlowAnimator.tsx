import { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  progress: number // 0 to 1 along the path
  path: 'left-to-center' | 'center-to-right'
  color: string
  size: number
}

type Node = {
  id: string
  x: number
  y: number
  label: string
  icon?: string
}

type DataFlowAnimatorProps = {
  particleCount?: number
  particleSpeed?: number
  particleSize?: number
  primaryColor?: string
  secondaryColor?: string
  enableGlow?: boolean
  className?: string
}

const DataFlowAnimator = ({
  particleCount = 30,
  particleSpeed = 0.5,
  particleSize = 4,
  primaryColor = '#0D9488',
  secondaryColor = '#14B8A6',
  enableGlow = true,
  className = '',
}: DataFlowAnimatorProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  // Define nodes (input, center, output)
  const nodesRef = useRef<Node[]>([])

  // Update dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setDimensions({ width: rect.width, height: rect.height })
        
        // Calculate node positions
        const centerY = rect.height / 2
        nodesRef.current = [
          { id: 'input', x: rect.width * 0.2, y: centerY, label: 'Input' },
          { id: 'center', x: rect.width * 0.5, y: centerY, label: 'Process' },
          { id: 'output', x: rect.width * 0.8, y: centerY, label: 'Output' },
        ]
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Initialize particles
  const initParticles = useCallback(() => {
    const particles: Particle[] = []
    const nodes = nodesRef.current
    
    if (nodes.length < 3) return

    for (let i = 0; i < particleCount; i++) {
      const pathType = Math.random() > 0.5 ? 'left-to-center' : 'center-to-right'
      particles.push({
        x: pathType === 'left-to-center' ? nodes[0].x : nodes[1].x,
        y: pathType === 'left-to-center' ? nodes[0].y : nodes[1].y,
        vx: 0,
        vy: 0,
        progress: Math.random(), // Random starting position
        path: pathType,
        color: Math.random() > 0.5 ? primaryColor : secondaryColor,
        size: particleSize + Math.random() * particleSize * 0.5,
      })
    }
    
    particlesRef.current = particles
  }, [particleCount, particleSize, primaryColor, secondaryColor])

  // Initialize particles when dimensions change
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      initParticles()
    }
  }, [dimensions, initParticles])

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || dimensions.width === 0 || dimensions.height === 0) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current
      const nodes = nodesRef.current

      if (nodes.length < 3) return

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i]
        
        // Update progress along path
        particle.progress += particleSpeed * 0.01
        
        // Calculate position based on path
        if (particle.path === 'left-to-center') {
          if (particle.progress >= 1) {
            // Reset and switch to center-to-right
            particle.progress = 0
            particle.path = 'center-to-right'
          }
          
          const startX = nodes[0].x
          const startY = nodes[0].y
          const endX = nodes[1].x
          const endY = nodes[1].y
          
          particle.x = startX + (endX - startX) * particle.progress
          particle.y = startY + (endY - startY) * particle.progress
        } else {
          // center-to-right
          if (particle.progress >= 1) {
            // Reset and switch to left-to-center
            particle.progress = 0
            particle.path = 'left-to-center'
          }
          
          const startX = nodes[1].x
          const startY = nodes[1].y
          const endX = nodes[2].x
          const endY = nodes[2].y
          
          particle.x = startX + (endX - startX) * particle.progress
          particle.y = startY + (endY - startY) * particle.progress
        }

        // Draw particle with glow effect
        if (enableGlow) {
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 3
          )
          
          const colorToRgba = (color: string, alpha: number) => {
            if (color.startsWith('#')) {
              const r = parseInt(color.slice(1, 3), 16)
              const g = parseInt(color.slice(3, 5), 16)
              const b = parseInt(color.slice(5, 7), 16)
              return `rgba(${r}, ${g}, ${b}, ${alpha})`
            }
            return color
          }

          gradient.addColorStop(0, colorToRgba(particle.color, 1))
          gradient.addColorStop(0.5, colorToRgba(particle.color, 0.5))
          gradient.addColorStop(1, colorToRgba(particle.color, 0))

          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
          ctx.fill()
        }

        // Main particle
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw connecting lines with gradient
      const drawPath = (start: Node, end: Node, opacity: number = 0.2) => {
        const gradient = ctx.createLinearGradient(start.x, start.y, end.x, end.y)
        const colorToRgba = (color: string, alpha: number) => {
          if (color.startsWith('#')) {
            const r = parseInt(color.slice(1, 3), 16)
            const g = parseInt(color.slice(3, 5), 16)
            const b = parseInt(color.slice(5, 7), 16)
            return `rgba(${r}, ${g}, ${b}, ${alpha})`
          }
          return color
        }
        
        gradient.addColorStop(0, colorToRgba(primaryColor, opacity))
        gradient.addColorStop(1, colorToRgba(secondaryColor, opacity))
        
        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.setLineDash([5, 5])
        ctx.beginPath()
        ctx.moveTo(start.x, start.y)
        ctx.lineTo(end.x, end.y)
        ctx.stroke()
        ctx.setLineDash([])
      }

      // Draw paths between nodes
      drawPath(nodes[0], nodes[1], 0.15)
      drawPath(nodes[1], nodes[2], 0.15)

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [dimensions, particleSpeed, enableGlow, primaryColor, secondaryColor])

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      
      {/* Glassmorphism Node Cards */}
      <div className="relative z-10 flex items-center justify-around h-full">
        {nodesRef.current.map((node, idx) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            className="relative"
            style={{
              left: `${(idx + 1) * 30 - 15}%`,
              transform: 'translateX(-50%)',
            }}
          >
            <div
              className="px-6 py-4 rounded-2xl backdrop-blur-md bg-white/70 border border-white/20 shadow-lg"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 100%)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
              }}
            >
              <div className="text-center">
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                  }}
                >
                  <div className="w-6 h-6 rounded-full bg-white/30" />
                </div>
                <div className="text-sm font-semibold text-gray-700">{node.label}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default DataFlowAnimator

