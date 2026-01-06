import { Download, Star } from "tabler-icons-react";
import { motion } from "framer-motion";
import { assets } from "../../lib/asset-helper";
import { TReferenceProps } from "../../lib/props-types";
import SectionWrapper from "../../layout/SectionWrapper";
import ScrollAnimationWrapper from "../../layout/ScrollAnimationWrapper";
import CalendlyButton from "../CalendlyButton/CalendlyButton";

type HeroProps = TReferenceProps & {
  onOpenCalendly: () => void;
};

const Hero = ({ reference, onOpenCalendly }: HeroProps) => {
  const { cv } = assets;

  return (
    <section
      ref={reference}
      className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-white"
    >
      <SectionWrapper
        containerClass="container-max relative z-10"
        paddingSectionClass="section-spacing"
      >
        <div className="max-w-4xl mx-auto text-center justify-center flex">
          <ScrollAnimationWrapper delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6"
              >
                <Star className="text-accent" size={18} />
                <span className="text-sm font-semibold text-accent">
                  Available for New Projects
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary leading-tight">
                <span className="block">Hi, I&apos;m</span>
                <span className="block text-accent mt-2">Jemuel Lupo</span>
              </h1>

              <p className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
                Fullstack Developer & Lead Software Engineer
              </p>

              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed mx-10 sm:mx-16">
                I help businesses acquire efficient digitized management over
                their organizational workflow. Specializing in{" "}
                <span className="font-semibold text-primary">
                  AI-powered software integration
                </span>{" "}
                and automation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 md:px-6 lg:px-0 max-w-2xl mx-auto">
                <motion.a
                  href={cv}
                  download="jemuel-lupo.pdf"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold text-base hover:bg-primary-light transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={20} />
                  Download CV
                </motion.a>

                <CalendlyButton
                  onOpenCalendly={onOpenCalendly}
                  variant="accent"
                  size="lg"
                >
                  Schedule Meeting
                </CalendlyButton>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Hero;
