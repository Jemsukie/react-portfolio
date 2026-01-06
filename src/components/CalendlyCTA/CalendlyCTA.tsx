import { Calendar } from "tabler-icons-react";
import { motion } from "framer-motion";
import { TReferenceProps } from "../../lib/props-types";
import SectionWrapper from "../../layout/SectionWrapper";
import ScrollAnimationWrapper from "../../layout/ScrollAnimationWrapper";
import CalendlyButton from "../CalendlyButton/CalendlyButton";
import HexagonGrid from "../HexagonGrid/HexagonGrid";

type CalendlyCTAProps = TReferenceProps & {
  onOpenCalendly: () => void;
};

const CalendlyCTA = ({ reference, onOpenCalendly }: CalendlyCTAProps) => {
  return (
    <section
      ref={reference}
      className="relative section-spacing bg-primary text-white"
    >
      {/* Hexagon Grid Background */}
      <div className="absolute inset-0 z-0">
        <HexagonGrid
          hexagonSize={60}
          hexagonColor="#0D9488"
          backgroundColor="transparent"
        />
      </div>
      <SectionWrapper containerClass="container-max" paddingSectionClass="">
        <ScrollAnimationWrapper delay={0.2}>
          <div className="text-center">
            <motion.div
              className="inline-flex items-center justify-center mx-auto mb-6"
              style={{ transformOrigin: "center" }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.15, rotate: 360 }}
            >
              <Calendar className="text-accent" size={48} />
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Let&apos;s Talk
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Schedule a consultation to discuss your project and how I can help
              bring your vision to life.
            </p>
            <CalendlyButton
              onOpenCalendly={onOpenCalendly}
              variant="accent"
              size="lg"
            >
              Schedule a Consultation
            </CalendlyButton>
          </div>
        </ScrollAnimationWrapper>
      </SectionWrapper>
    </section>
  );
};

export default CalendlyCTA;
