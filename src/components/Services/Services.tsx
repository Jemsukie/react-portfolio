import { motion } from 'framer-motion'
import { Briefcase } from 'tabler-icons-react'
import { services } from '../../lib/config'
import { TReferenceProps } from '../../lib/props-types'
import SectionWrapper from '../../layout/SectionWrapper'
import ScrollAnimationWrapper from '../../layout/ScrollAnimationWrapper'

const Services = ({ reference }: TReferenceProps) => {
  return (
    <section ref={reference} className="relative section-spacing bg-gray-50">
      <SectionWrapper
        containerClass="container-max"
        paddingSectionClass=""
      >
        <ScrollAnimationWrapper delay={0.2}>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 flex items-center justify-center gap-3 text-primary">
              <Briefcase className="text-accent" size={40} />
              Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to transform your business operations
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ScrollAnimationWrapper key={idx} delay={0.1 * idx}>
              <motion.div
                whileHover={{ y: -5 }}
                className="card p-8 card-hover h-full flex flex-col"
              >
                <div className="mb-4">
                  <service.Icon className="text-accent" size={48} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">{service.description}</p>
              </motion.div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </SectionWrapper>
    </section>
  )
}

export default Services

