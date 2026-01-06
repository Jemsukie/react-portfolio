import { useEffect, useRef, useState } from 'react'

type HexagonGridProps = {
  hexagonSize?: number
  hexagonColor?: string
  backgroundColor?: string
  className?: string
}

const HexagonGrid = ({
  hexagonSize = 50,
  hexagonColor = '#0D9488',
  backgroundColor = 'transparent',
  className = '',
}: HexagonGridProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Calculate hexagon grid
  const hexagonWidth = hexagonSize * 2
  const hexagonHeight = hexagonSize * Math.sqrt(3)
  const hexCols = Math.ceil(dimensions.width / (hexagonWidth * 0.75)) + 1
  const hexRows = Math.ceil(dimensions.height / (hexagonHeight * 0.5)) + 1

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

  // Mouse event handlers for hover effects - track globally so it works even with elements above
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      // Calculate mouse position relative to canvas, even if event is from another element
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000
      mouseRef.current.y = -1000
    }

    // Use document-level listeners so they work even when elements are above the canvas
    document.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Draw hexagon
  const drawHexagon = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    color: string,
    opacity: number = 1
  ) => {
    ctx.save()
    ctx.translate(x, y)
    ctx.beginPath()
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i
      const hx = size * Math.cos(angle)
      const hy = size * Math.sin(angle)
      if (i === 0) {
        ctx.moveTo(hx, hy)
      } else {
        ctx.lineTo(hx, hy)
      }
    }
    ctx.closePath()
    
    // Check if mouse is near this hexagon
    const dx = x - mouseRef.current.x
    const dy = y - mouseRef.current.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    const isHovered = distance < size * 2
    
    if (isHovered) {
      ctx.strokeStyle = color
      ctx.lineWidth = 1.5
      ctx.globalAlpha = 0.4
    } else {
      ctx.strokeStyle = color
      ctx.lineWidth = 0.5
      ctx.globalAlpha = opacity * 0.15
    }
    ctx.stroke()
    ctx.restore()
  }

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

      // Draw hexagon grid
      for (let row = 0; row < hexRows; row++) {
        for (let col = 0; col < hexCols; col++) {
          const offsetX = row % 2 === 0 ? 0 : hexagonWidth * 0.375
          const x = col * hexagonWidth * 0.75 + offsetX
          const y = row * hexagonHeight * 0.5
          
          if (x > -hexagonSize && x < canvas.width + hexagonSize && 
              y > -hexagonSize && y < canvas.height + hexagonSize) {
            drawHexagon(ctx, x, y, hexagonSize, hexagonColor, 0.2)
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [dimensions, hexagonSize, hexCols, hexRows, hexagonColor])

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto"
        style={{ backgroundColor }}
      />
    </div>
  )
}

export default HexagonGrid
