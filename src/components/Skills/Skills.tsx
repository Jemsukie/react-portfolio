import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code } from 'tabler-icons-react'
import { menuLinks } from '../../lib/asset-helper'
import { TReferenceProps } from '../../lib/props-types'
import SectionWrapper from '../../layout/SectionWrapper'
import ScrollAnimationWrapper from '../../layout/ScrollAnimationWrapper'

const Skills = ({ reference }: TReferenceProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('frontend')

  const activeData = menuLinks[activeCategory]

  return (
    <section ref={reference} className="relative section-spacing bg-white">
      <SectionWrapper
        containerClass="container-max"
        paddingSectionClass=""
      >
        <ScrollAnimationWrapper delay={0.2}>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 flex items-center justify-center gap-3 text-primary">
              <Code className="text-accent" size={40} />
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Category Buttons */}
        <ScrollAnimationWrapper delay={0.3}>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {Object.entries(menuLinks).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-lg font-medium text-sm md:text-base transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {value.title}
              </button>
            ))}
          </div>
        </ScrollAnimationWrapper>

        {/* Tech Stack Display */}
        <ScrollAnimationWrapper delay={0.4}>
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {activeData.swap.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="card p-6 flex flex-col items-center gap-3 card-hover"
              >
                <img
                  src={tech.image}
                  alt={tech.brand}
                  className="w-16 h-16 object-contain"
                />
                <span className="text-sm text-center text-gray-700 font-medium">{tech.brand}</span>
              </motion.div>
            ))}
          </motion.div>
        </ScrollAnimationWrapper>
      </SectionWrapper>
    </section>
  )
}

export default Skills

