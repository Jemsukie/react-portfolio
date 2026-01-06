import { motion } from 'framer-motion'
import { Heart, MessageCircle, Clock, Headset, Eye, Rocket } from 'tabler-icons-react'
import { workingWithMe } from '../../lib/config'
import { TReferenceProps } from '../../lib/props-types'
import SectionWrapper from '../../layout/SectionWrapper'
import ScrollAnimationWrapper from '../../layout/ScrollAnimationWrapper'

const icons = [Heart, MessageCircle, Clock, Headset, Eye, Rocket]

const WorkingWithMe = ({ reference }: TReferenceProps) => {
  return (
    <section ref={reference} className="relative section-spacing bg-white">
      <SectionWrapper
        containerClass="container-max"
        paddingSectionClass=""
      >
        <ScrollAnimationWrapper delay={0.2}>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">
              What Working With Me Feels Like
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A collaborative partnership focused on your success
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workingWithMe.map((item, idx) => {
            const Icon = icons[idx] || Heart
            return (
              <ScrollAnimationWrapper key={idx} delay={0.1 * idx}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="card p-8 card-hover h-full flex flex-col items-center text-center"
                >
                  <motion.div
                    className="mb-4 inline-flex items-center justify-center"
                    style={{ transformOrigin: 'center' }}
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ type: 'spring', stiffness: 300, duration: 0.6 }}
                  >
                    <Icon className="text-accent" size={48} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              </ScrollAnimationWrapper>
            )
          })}
        </div>
      </SectionWrapper>
    </section>
  )
}

export default WorkingWithMe

