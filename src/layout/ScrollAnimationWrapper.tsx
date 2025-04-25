import { useEffect, useRef, useState } from 'react'
import { TScrollAnimationWrapperProps } from '../lib/props-types'



const ScrollAnimationWrapper = ({
  children,
  delay = 0,
  className = ''
}: TScrollAnimationWrapperProps) => {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollingDown, setScrollingDown] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const isScrollingDown = currentScrollY > lastScrollY.current

      setScrollingDown(isScrollingDown)
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() =>  setIsVisible(true), delay)
          } else {
            setIsVisible(false)
          }
        })
      },
      {
        threshold: 0.1
      }
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [delay])

  return (
    <div
      ref={elementRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? 'translateY(0)'
          : `translateY(${scrollingDown ? '50px' : '-50px'})`,
        transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        willChange: 'opacity, transform'
      }}
      className={className}
    >
      {children}
    </div>
  )
}

export default ScrollAnimationWrapper
