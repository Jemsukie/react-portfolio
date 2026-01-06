import { Folder } from "tabler-icons-react";
import { motion } from "framer-motion";
import { assets } from "../../lib/asset-helper";
import { TReferenceProps } from "../../lib/props-types";
import SectionWrapper from "../../layout/SectionWrapper";
import ScrollAnimationWrapper from "../../layout/ScrollAnimationWrapper";
import { ReactNode } from "react";
import ReactParticles from "../ReactParticles/ReactParticles";

export type TCards = {
  img: string;
  title: string;
  sourceCode: string;
  description: ReactNode;
};

type ProjectsProps = TReferenceProps & { onSeeMore: (_card: TCards) => void };

const Projects = ({ reference, onSeeMore }: ProjectsProps) => {
  const { img1, img2, img3, img4, img5, img6, img7, img8, img9 } = assets;

  const cards: TCards[] = [
    {
      img: img1,
      title: "Atlas",
      sourceCode: "",
      description: (
        <>
          Learning Management System for a Community called{" "}
          <a
            className="text-accent hover:text-accent-light underline"
            href="https://thefreelancemovement.com/"
            target="_blank"
            rel="noreferrer"
          >
            The Freelance Movement Tribe
          </a>{" "}
          founded by{" "}
          <span className="font-semibold text-primary">John Pagulayan</span>.
          This is a Community/CRM/LMS app for{" "}
          <span className="text-primary">Tribe Freelancers</span>. Visit ATLAS
          at{" "}
          <a
            className="text-accent hover:text-accent-light underline"
            href="https://tfmt.ph/"
            target="_blank"
            rel="noreferrer"
          >
            https://tfmt.ph/
          </a>
          . <br />
          <br /> Atlas is developed using{" "}
          <a
            className="text-accent hover:text-accent-light underline"
            href="https://redwoodjs.com/"
            target="_blank"
            rel="noreferrer"
          >
            Redwood JS
          </a>{" "}
          and I have been the Lead Developer for this project for 8 months.
        </>
      ),
    },
    {
      img: img2,
      title: "Ethical Hire",
      sourceCode: "",
      description: (
        <>
          Ethical Hire is a trusted platform that connects Disability Service
          providers with skilled and reliable support workers. Find the right
          candidates quickly and efficiently.
        </>
      ),
    },
    {
      img: img3,
      title: "AI Enhanced Clinic System",
      sourceCode: "",
      description: (
        <>
          A modern Medical Clinic Management System built with{" "}
          <a
            className="text-accent hover:text-accent-light underline"
            href="https://redwoodjs.com/"
            target="_blank"
            rel="noreferrer"
          >
            Redwood JS
          </a>
          . This system features{" "}
          <span className="font-semibold text-primary">
            AI-powered patient diagnosis assistance
          </span>
          , intelligent appointment scheduling, and comprehensive medical
          records management. The dashboard provides real-time analytics on
          patient demographics, appointment trends, and resource utilization.
          Healthcare providers can efficiently manage patient records, track lab
          results, and generate detailed medical reports while maintaining HIPAA
          compliance.
        </>
      ),
    },
    {
      img: img4,
      title: "Chat App",
      sourceCode: "https://github.com/Jemsukie/chat-app",
      description: (
        <>
          A simple Chat Application I made with{" "}
          <a
            className="text-accent hover:text-accent-light underline"
            href="https://redwoodjs.com/"
            target="_blank"
            rel="noreferrer"
          >
            Redwood JS
          </a>
          . Here you can add and chat your contacts.
        </>
      ),
    },
    {
      img: img5,
      title: "Appointment Booking System",
      sourceCode: "",
      description: (
        <>
          This Web Application is an appointment booking website for a
          Cooperative Business in Lagonoy, Camarines Sur. This Web App has a
          Client and an Admin interface. Made with{" "}
          <a
            className="text-accent hover:text-accent-light underline"
            href="https://codeigniter.com/"
            target="_blank"
            rel="noreferrer"
          >
            CodeIgniter 4
          </a>
          .
        </>
      ),
    },
    {
      img: img6,
      title: "Memorial Park Map and Appointment System",
      sourceCode: "https://github.com/Jemsukie/memorial-park-php.git",
      description: (
        <>
          This Web Application is a Mapping and Appointment System for
          Katoninongan Cemetery in San Jose, Camarines Sur. It has coordinates
          for the deceased that can be searched by their relatives. Made with{" "}
          <a
            className="text-accent hover:text-accent-light underline"
            href="https://codeigniter.com/"
            target="_blank"
            rel="noreferrer"
          >
            CodeIgniter 4
          </a>
          .
        </>
      ),
    },
    {
      img: img7,
      title: "Remo.co Online Event Organizer",
      sourceCode: "",
      description: (
        <>
          A Web Application made by{" "}
          <span className="text-primary font-semibold">Remo.co</span>. My task
          here is to realize the feature that my client wants since their CMS:{" "}
          <span className="text-primary font-semibold">Webflow</span> has a lot
          of limitations. The backend and animation here are coded using{" "}
          <span className="text-primary font-semibold">Vanilla JavaScript</span>
          .
        </>
      ),
    },
    {
      img: img8,
      title: "Levitate Media Video Pricing Calculator",
      sourceCode: "",
      description: (
        <>
          <span className="text-primary font-semibold">Cart + Craft</span> is a
          Webflow Agency that offers Web Design and Branding Solutions for their
          clients. My task here is to realize the feature that my client wants
          since their CMS:{" "}
          <span className="text-primary font-semibold">Webflow</span> has a lot
          of limitations. The backend and animation here are coded using{" "}
          <span className="text-primary font-semibold">Vanilla JavaScript</span>
          .
        </>
      ),
    },
    {
      img: img9,
      title: "AJA: Gamification of Programming Language",
      sourceCode: "",
      description: (
        <>
          My{" "}
          <span className="text-primary font-semibold">Capstone Project</span>{" "}
          back in my college days. This project is an E-learning game with
          scoring functionality and challenges that helps student enjoy learning
          more about{" "}
          <span className="text-primary font-semibold">
            Computer Programming
          </span>
          .
        </>
      ),
    },
  ];

  return (
    <section ref={reference} className="relative section-spacing bg-white">
      {/* React Particles Background */}
      <div className="absolute inset-0 z-0">
        <ReactParticles
          particleCount={60}
          repelStrength={150}
          attractStrength={300}
          connectionDistance={150}
          particleSpeed={1.0}
          particleSize={4}
          enableRainbow={false}
          primaryColor="#0D9488"
          backgroundColor="transparent"
          cursorRadius={400}
        />
      </div>
      <SectionWrapper
        containerClass="container-max relative z-10"
        paddingSectionClass=""
      >
        <ScrollAnimationWrapper delay={0.2}>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 flex items-center justify-center gap-3 text-primary">
              <motion.div
                className="inline-flex items-center justify-center"
                style={{ transformOrigin: "center" }}
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300, duration: 0.6 }}
              >
                <Folder className="text-accent" size={40} />
              </motion.div>
              My Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing innovative solutions and successful implementations
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <ProjectCard
              key={idx}
              card={card}
              index={idx}
              onSeeMore={onSeeMore}
            />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

const ProjectCard = ({
  card,
  index,
  onSeeMore,
}: {
  card: TCards;
  index: number;
  onSeeMore: (card: TCards) => void;
}) => {
  const getTextContent = (node: ReactNode): string => {
    if (typeof node === "string") return node;
    if (typeof node === "number") return String(node);
    if (Array.isArray(node)) return node.map(getTextContent).join(" ");
    if (node && typeof node === "object" && "props" in node) {
      return getTextContent((node as any).props?.children || "");
    }
    return "";
  };

  const textContent = getTextContent(card.description);
  const isLong = textContent.length > 120;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card overflow-hidden card-hover group"
    >
      <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100">
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-3">{card.title}</h3>

        <div className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {isLong ? (
            <>
              <span>{textContent.slice(0, 120)}...</span>
              <button
                onClick={() => onSeeMore(card)}
                className="text-accent hover:text-accent-light underline ml-1 font-medium"
              >
                View Details
              </button>
            </>
          ) : (
            <div>{card.description}</div>
          )}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => onSeeMore(card)}
            className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-light transition-colors"
          >
            View Details
          </button>
          {card.sourceCode && (
            <a
              href={card.sourceCode}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-gray-100 text-primary rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
