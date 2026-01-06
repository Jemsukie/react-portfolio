import { motion } from "framer-motion";
import { User } from "tabler-icons-react";
import { assets } from "../../lib/asset-helper";
import { expStats, socialLinks } from "../../lib/config";
import { TReferenceProps } from "../../lib/props-types";
import SectionWrapper from "../../layout/SectionWrapper";
import ScrollAnimationWrapper from "../../layout/ScrollAnimationWrapper";

const About = ({ reference }: TReferenceProps) => {
  const { hero } = assets;

  return (
    <section ref={reference} className="relative section-spacing bg-gray-50">
      <SectionWrapper containerClass="container-max" paddingSectionClass="">
        <ScrollAnimationWrapper delay={0.2}>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 flex items-center justify-center gap-3 text-primary">
              <motion.div
                className="inline-flex items-center justify-center"
                style={{ transformOrigin: 'center' }}
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ type: 'spring', stiffness: 300, duration: 0.6 }}
              >
                <User className="text-accent" size={40} />
              </motion.div>
              About Me
            </h2>
          </div>
        </ScrollAnimationWrapper>

        {/* Stats Boxes - Under Title */}
        <ScrollAnimationWrapper delay={0.25}>
          <div className="mb-12">
            <Stats />
          </div>
        </ScrollAnimationWrapper>

        {/* Layout: Flex with Picture and Texts side by side */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Profile Image Section - Full width on mobile, 2/6 width on desktop (25%) */}
          <ScrollAnimationWrapper delay={0.3}>
            <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative mb-6 w-full lg:w-64 xl:w-80"
              >
                <div className="relative w-full aspect-square lg:aspect-auto lg:h-64 xl:h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={hero}
                    alt="Jemuel Lupo"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10 hidden lg:block" />
              </motion.div>

              {/* Social Media Links - Centered on mobile and desktop */}
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                {socialLinks.map(({ Icon, link }, idx) => (
                  <motion.a
                    key={idx}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white rounded-lg hover:bg-gray-100 transition-all border border-gray-200 shadow-sm"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Visit ${link}`}
                  >
                    <motion.div
                      className="inline-flex items-center justify-center"
                      style={{ transformOrigin: 'center' }}
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      transition={{ type: 'spring', stiffness: 300, duration: 0.6 }}
                    >
                      <Icon className="text-primary" size={24} />
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* About Text - Full width on mobile, 6/6 width on desktop (75%) */}
          <ScrollAnimationWrapper delay={0.4}>
            <div className="w-full flex flex-col justify-center">
              <div className="space-y-6 text-center lg:text-left">
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  I&apos;m a Fullstack Developer and Lead Software Engineer from
                  Sariaya Quezon, Philippines. With over 4 years of professional
                  experience, I specialize in building scalable web
                  applications, leading development teams, and delivering
                  end-to-end product launches.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  I earned my Bachelor of Science in Information Technology from
                  Partido State University (2017-2021). Throughout my career,
                  I&apos;ve led multiple MVP developments, mentored junior
                  developers, and delivered complex solutions for companies like
                  Ethical Hire, Brylliant Solutions, and The Freelance Movement
                  Tribe.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  My expertise spans full-stack development, AI integration,
                  microservices architecture, and custom Webflow solutions.
                  I&apos;ve successfully delivered products that serve 500+
                  users and resolved 1,000+ complex technical challenges, always
                  focusing on quality, scalability, and team collaboration.
                </p>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </SectionWrapper>
    </section>
  );
};

const Stats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
      {expStats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="card p-6 text-center card-hover"
        >
          <div className="text-sm font-medium text-gray-500 mb-2">
            {stat.title}
          </div>
          <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
            {stat.value}
          </div>
          <div className="text-sm text-gray-600">{stat.desc}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default About;
