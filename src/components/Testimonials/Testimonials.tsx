import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'tabler-icons-react'
import { testimonials } from '../../lib/config'
import { TReferenceProps } from '../../lib/props-types'
import SectionWrapper from '../../layout/SectionWrapper'
import ScrollAnimationWrapper from '../../layout/ScrollAnimationWrapper'

const Testimonials = ({ reference }: TReferenceProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section ref={reference} className="relative section-spacing bg-gray-50">
      <SectionWrapper
        containerClass="container-max"
        paddingSectionClass=""
      >
        <ScrollAnimationWrapper delay={0.2}>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 flex items-center justify-center gap-3 text-primary">
              <Quote className="text-accent" size={40} />
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What clients say about working with me
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
            >
                {/* Left Side - Profile Picture and Info */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-accent to-primary mb-6 flex items-center justify-center text-white text-4xl md:text-5xl font-bold">
                    {currentTestimonial.name.charAt(0)}
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-base text-gray-600">{currentTestimonial.role}</p>
                    {currentTestimonial.rating && (
                      <div className="flex gap-1 mt-3 justify-center md:justify-start">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-lg">★</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Side - Quote and Testimonial */}
                <div className="flex flex-col">
                  <div className="mb-4">
                    <Quote className="text-accent mb-4" size={32} />
                  </div>
                  <blockquote className="text-2xl md:text-3xl font-bold text-primary mb-6 leading-tight">
                    &quot;{currentTestimonial.quote || currentTestimonial.text.split('.')[0]}.&quot;
                  </blockquote>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {currentTestimonial.text}
                  </p>
                </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-primary" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-accent w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-primary" />
            </button>
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}

export default Testimonials
