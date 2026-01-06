import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ChevronDown, ChevronUp } from "tabler-icons-react";
import { workExperience } from "../../lib/workExperience";
import { TReferenceProps } from "../../lib/props-types";
import SectionWrapper from "../../layout/SectionWrapper";
import ScrollAnimationWrapper from "../../layout/ScrollAnimationWrapper";

const WorkExperience = ({ reference }: TReferenceProps) => {
  const [showAll, setShowAll] = useState(false);
  const displayedExperience = showAll
    ? workExperience
    : workExperience.slice(0, 3);

  // Get the earliest start date and latest end date for each company
  const getCompanyDateRange = (
    positions: (typeof workExperience)[0]["positions"]
  ) => {
    return {
      start: positions[0].startDate,
      end: positions[positions.length - 1].endDate,
    };
  };

  return (
    <section ref={reference} className="relative section-spacing bg-white">
      <SectionWrapper containerClass="container-max" paddingSectionClass="">
        <ScrollAnimationWrapper delay={0.2}>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 flex items-center justify-center gap-3 text-primary">
              <Briefcase className="text-accent" size={40} />
              Work Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A journey through my professional career
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line - centered */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2" />

            <div className="space-y-12">
              <AnimatePresence>
                {displayedExperience.map((exp, idx) => {
                  const isEven = idx % 2 === 0;
                  const isLeft = isEven;
                  const dateRange = getCompanyDateRange(exp.positions);

                  return (
                    <motion.div
                      key={`${exp.company}-${idx}`}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ delay: idx * 0.1 }}
                      className={`relative flex items-center ${
                        isLeft ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Timeline dot */}
                      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg z-10" />

                      {/* Content Card */}
                      <div
                        className={`w-full md:w-5/12 ${
                          isLeft ? "md:pr-8" : "md:pl-8"
                        }`}
                      >
                        <div className="card p-6 md:p-8">
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded">
                              {dateRange.start} - {dateRange.end}
                            </span>
                          </div>
                          <h4 className="text-xl font-bold text-primary mb-2">
                            {exp.company}
                          </h4>

                          {/* Multiple Positions */}
                          <div className="space-y-6 mt-4">
                            {exp.positions.map((position, pIdx) => (
                              <div
                                key={pIdx}
                                className={
                                  pIdx > 0
                                    ? "border-t border-gray-200 pt-4"
                                    : ""
                                }
                              >
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                  <span className="text-sm font-semibold text-primary">
                                    {position.position}
                                  </span>
                                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                    {position.type}
                                  </span>
                                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                    {position.location}
                                  </span>
                                </div>
                                <ul className="space-y-2 text-left">
                                  {position.responsibilities.map(
                                    (responsibility, rIdx) => (
                                      <li
                                        key={rIdx}
                                        className="text-sm text-gray-600 flex items-start gap-2"
                                      >
                                        <span className="text-accent mt-1.5 flex-shrink-0">
                                          •
                                        </span>
                                        <span>{responsibility}</span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Spacer for timeline line */}
                      <div className="hidden md:block w-2/12" />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* View More Button */}
          {workExperience.length > 3 && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-light transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {showAll ? (
                  <>
                    <ChevronUp size={20} />
                    View Less
                  </>
                ) : (
                  <>
                    <ChevronDown size={20} />
                    View More
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default WorkExperience;
