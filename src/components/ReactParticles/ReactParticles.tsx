import { useEffect, useRef, useState, useCallback } from 'react'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  baseColor: string
}

type ReactParticlesProps = {
  particleCount?: number
  repelStrength?: number
  attractStrength?: number
  connectionDistance?: number
  particleSpeed?: number
  particleSize?: number
  enableRainbow?: boolean
  primaryColor?: string
  backgroundColor?: string
  cursorRadius?: number // Radius of cursor's effect circle
  className?: string
}

const ReactParticles = ({
  particleCount,
  repelStrength = 150,
  attractStrength = 300,
  connectionDistance = 150,
  particleSpeed = 1.0,
  particleSize = 4,
  enableRainbow = false,
  primaryColor = '#0D9488',
  backgroundColor = 'transparent',
  cursorRadius = 300, // Wider cursor effect radius
  className = '',
}: ReactParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000, isDown: false })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Calculate responsive particle count
  const getParticleCount = useCallback(() => {
    if (particleCount) return particleCount
    const area = dimensions.width * dimensions.height
    return Math.min(Math.floor(area / 10000), 150) // Max 150 particles, adjusted density
  }, [particleCount, dimensions])

  // Initialize particles
  const initParticles = useCallback(() => {
    const count = getParticleCount()
    particlesRef.current = Array.from({ length: count }, () => {
      const hue = enableRainbow ? Math.random() * 360 : 0
      return {
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * particleSpeed,
        vy: (Math.random() - 0.5) * particleSpeed,
        radius: particleSize + Math.random() * particleSize * 0.5,
        color: enableRainbow
          ? `hsl(${hue}, 70%, 60%)`
          : primaryColor,
        baseColor: enableRainbow
          ? `hsl(${hue}, 70%, 60%)`
          : primaryColor,
      }
    })
  }, [dimensions, getParticleCount, particleSpeed, particleSize, enableRainbow, primaryColor])

  // Get color for particle (with rainbow support)
  const getParticleColor = useCallback((particle: Particle, index: number) => {
    if (enableRainbow) {
      const hue = (Date.now() * 0.05 + index * 5) % 360 // Slower rainbow cycle
      return `hsl(${hue}, 70%, 60%)`
    }
    return particle.color
  }, [enableRainbow])

  // Update dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect()
        setDimensions({ width: rect.width, height: rect.height })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Initialize particles when dimensions change
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      initParticles()
    }
  }, [dimensions, initParticles])

  // Mouse event handlers - use document level to work through elements
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
    }

    const handleMouseDown = () => {
      mouseRef.current.isDown = true
    }

    const handleMouseUp = () => {
      mouseRef.current.isDown = false
    }

    const handleMouseLeave = () => {
      mouseRef.current.isDown = false
      mouseRef.current.x = -1000
      mouseRef.current.y = -1000
    }

    // Use document level for mousemove to work through elements
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current
      const mouse = mouseRef.current

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i]

        // Dual Physics: repel on hover, attract on click - based on cursor circle diameter
        if (mouse.x > 0 && mouse.y > 0) {
          const dx = particle.x - mouse.x
          const dy = particle.y - mouse.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Use cursorRadius for wider effect area
          if (distance < cursorRadius) {
            // Calculate force based on distance from cursor center
            // Force is stronger near cursor and weaker at the edge of the circle
            const normalizedDistance = distance / cursorRadius // 0 to 1
            const distanceFactor = 1 - normalizedDistance // 1 at center, 0 at edge
            
            // Apply force based on distance from cursor (stronger when closer)
            const force = mouse.isDown
              ? -attractStrength * distanceFactor / (distance + 1) // Attract (negative = pull in)
              : repelStrength * distanceFactor / (distance + 1) // Repel (positive = push away)

            const angle = Math.atan2(dy, dx)
            // Increased multiplier for quicker and farther movement
            particle.vx += Math.cos(angle) * force * 0.05
            particle.vy += Math.sin(angle) * force * 0.05
          }
        }

        // Apply velocity and boundary checks
        particle.x += particle.vx
        particle.y += particle.vy

        // Reduced damping for longer travel distance (was 0.98, now 0.99)
        particle.vx *= 0.99
        particle.vy *= 0.99

        // Wrap around edges
        if (particle.x < 0) particle.x = dimensions.width
        if (particle.x > dimensions.width) particle.x = 0
        if (particle.y < 0) particle.y = dimensions.height
        if (particle.y > dimensions.height) particle.y = 0
      }

      // Draw connecting lines with smart gradients
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i]
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.5
            const color1 = getParticleColor(p1, i)
            const color2 = getParticleColor(p2, j)

            // Convert color to rgba format
            const colorToRgba = (color: string, alpha: number) => {
              if (color.startsWith('hsl')) {
                return color.replace(')', `, ${alpha})`).replace('hsl', 'hsla')
              }
              // Handle hex colors
              if (color.startsWith('#')) {
                const r = parseInt(color.slice(1, 3), 16)
                const g = parseInt(color.slice(3, 5), 16)
                const b = parseInt(color.slice(5, 7), 16)
                return `rgba(${r}, ${g}, ${b}, ${alpha})`
              }
              return color
            }

            // Create gradient between two particles
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y)
            gradient.addColorStop(0, colorToRgba(color1, opacity))
            gradient.addColorStop(1, colorToRgba(color2, opacity))

            ctx.strokeStyle = gradient
            ctx.lineWidth = 1.5
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      // Draw particles with glow effect
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i]
        const color = getParticleColor(particle, i)

        // Create radial gradient for glow effect
        const radialGradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * 3
        )

        // Convert color to rgba for gradient
        const colorToRgba = (color: string, alpha: number) => {
          if (color.startsWith('hsl')) {
            return color.replace(')', `, ${alpha})`).replace('hsl', 'hsla')
          }
          if (color.startsWith('#')) {
            const r = parseInt(color.slice(1, 3), 16)
            const g = parseInt(color.slice(3, 5), 16)
            const b = parseInt(color.slice(5, 7), 16)
            return `rgba(${r}, ${g}, ${b}, ${alpha})`
          }
          return color
        }

        radialGradient.addColorStop(0, colorToRgba(color, 1))
        radialGradient.addColorStop(0.5, colorToRgba(color, 0.5))
        radialGradient.addColorStop(1, colorToRgba(color, 0))

        ctx.fillStyle = radialGradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2)
        ctx.fill()

        // Main particle
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [dimensions, repelStrength, attractStrength, connectionDistance, cursorRadius, getParticleColor])

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ backgroundColor }}
      />
    </div>
  )
}

export default ReactParticles
