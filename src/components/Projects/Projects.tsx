import { Folder } from "tabler-icons-react";
import { motion } from "framer-motion";
import { assets } from "../../lib/asset-helper";
import { ReactNode } from "react";
import { TReferenceProps } from "../../lib/props-types";
import SectionWrapper from "../../layout/SectionWrapper";
import ScrollAnimationWrapper from "../../layout/ScrollAnimationWrapper";
import ReactParticles from "../ReactParticles/ReactParticles";

export type TCards = {
  img: string;
  title: string;
  sourceCode: string;
  /** Short plain-text blurb for the card grid (modal uses `description`). */
  excerpt: string;
  description: ReactNode;
};

type ProjectsProps = TReferenceProps & { onSeeMore: (_card: TCards) => void };

const Projects = ({ reference, onSeeMore }: ProjectsProps) => {
  const { img1, img2, img3, img4, img5, img6, img7, img8, img9 } = assets;

  const cards: TCards[] = [
    {
      img: img1,
      title: "Nimbus+",
      sourceCode: "",
      excerpt:
        "A full-stack construction and project collaboration platform for workspaces, drawings, RFIs, tasks, and real-time team messaging in one production-scale system.",
      description: (
        <>
          A full-stack{" "}
          <span className="text-primary font-bold">
            construction and project collaboration platform
          </span>{" "}
          built for managing workspaces, projects, drawings, RFIs, tasks,
          notifications, and team communication in one system.{" "}
          <span className="text-primary">Nimbus+</span> helps teams coordinate
          project information, track design changes, manage document workflows,
          and collaborate through real-time messaging and updates.
          <br />
          <br />
          Nimbus+ is developed using{" "}
          <a
            className="text-error"
            href="https://redwoodjs.com/"
            target="_blank"
            rel="noreferrer"
          >
            RedwoodJS
          </a>
          , with a full-stack architecture powered by{" "}
          <a
            className="text-error"
            href="https://www.prisma.io/"
            target="_blank"
            rel="noreferrer"
          >
            Prisma
          </a>
          ,{" "}
          <a
            className="text-error"
            href="https://www.postgresql.org/"
            target="_blank"
            rel="noreferrer"
          >
            PostgreSQL
          </a>
          , and modern React patterns on the frontend. I contributed to features
          across project dashboards, drawing management, RFI workflows, task
          tracking, notifications, and direct messaging in a production-scale
          monorepo application.
        </>
      ),
    },
    {
      img: img2,
      title: "Atlas",
      sourceCode: "",
      excerpt:
        "Learning Management System for The Freelance Movement Tribe—community, CRM, and LMS tooling for freelancers, built with Redwood JS.",
      description: (
        <>
          Learning Management System for a Community called{" "}
          <a
            className="text-[#0ea0bf]"
            href="https://thefreelancemovement.com/"
            target="_blank"
            rel="noreferrer"
          >
            The Freelance Movement Tribe{" "}
          </a>
          founded by{" "}
          <span className="text-primary font-bold">John Pagulayan</span>. This
          is a Community/CRM/LMS app for{" "}
          <span className="text-primary">Tribe Freelancers</span>. Visit ATLAS
          at{" "}
          <a
            className="text-[#0ea0bf]"
            href="https://tfmt.ph/"
            target="_blank"
            rel="noreferrer"
          >
            https://tfmt.ph/
          </a>
          . <br />
          <br /> Atlas is developed using{" "}
          <a
            className="text-error"
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
      img: img3,
      title: "Ethical Hire",
      sourceCode: "",
      excerpt:
        "A trusted platform connecting disability service providers with skilled support workers so teams can hire quickly and reliably.",
      description: (
        <>
          Ethical Hire is a trusted platform that connects Disability Service
          providers with skilled and reliable support workers. Find the right
          candidates quickly and efficiently.
        </>
      ),
    },
    {
      img: img4,
      title: "AI Enhanced Clinic System",
      sourceCode: "",
      excerpt:
        "Medical clinic management with AI-assisted diagnosis, scheduling, and analytics dashboards—Redwood JS, HIPAA-minded workflows, and rich reporting.",
      description: (
        <>
          A modern Medical Clinic Management System built with{" "}
          <a
            className="text-error"
            href="https://redwoodjs.com/"
            target="_blank"
            rel="noreferrer"
          >
            Redwood JS
          </a>
          . This system features AI-powered patient diagnosis assistance,
          intelligent appointment scheduling, and comprehensive medical records
          management. The dashboard provides real-time analytics on patient
          demographics, appointment trends, and resource utilization. Healthcare
          providers can efficiently manage patient records, track lab results,
          and generate detailed medical reports while maintaining HIPAA
          compliance.
        </>
      ),
    },
    {
      img: img5,
      title: "Appointment Booking System",
      sourceCode: "",
      excerpt:
        "Cooperative appointment booking with separate client and admin experiences, built with CodeIgniter 4 for a business in Lagonoy, Camarines Sur.",
      description: (
        <>
          This Web Application is an appointment booking website for a
          Cooperative Business in Lagonoy, Camarines Sur. This Web App has a
          Client and an Admin interface. Made with{" "}
          <a
            className="text-warning"
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
      title: "Memorial Park Map and Appoinment System",
      sourceCode: "https://github.com/Jemsukie/memorial-park-php.git",
      excerpt:
        "Mapping and appointment system for a memorial park with searchable plot coordinates for families, powered by CodeIgniter 4.",
      description: (
        <>
          This Web Application is a Mapping and Appointment System for
          Katoninongan Cemetery in San Jose, Camarines Sur. It has coordinates
          for the deceased that can be searched by their relatives. Made with{" "}
          <a
            className="text-warning"
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
      excerpt:
        "Custom features and integrations beyond Webflow CMS limits—backend and interactions delivered with vanilla JavaScript for Remo.co.",
      description: (
        <>
          A Web Application made by{" "}
          <span className="text-primary">Remo.co</span>. My task here is to
          realize the feature that my client wants since their CMS:{" "}
          <span className="text-success">Webflow</span> has a lot of
          limitations. The backend and animation here are coded using{" "}
          <span className="text-warning">Vanilla JavaScript</span>.
        </>
      ),
    },
    {
      img: img8,
      title: "Levitate Media Video Pricing Calculator",
      sourceCode: "",
      excerpt:
        "Webflow agency build-out with advanced cart and pricing logic—JavaScript where the CMS could not go, for Cart + Craft / Levitate Media.",
      description: (
        <>
          <span className="text-accent">Cart + Craft</span> is a Webflow Agency
          that offers Web Design and Branding Solutions for their clients. My
          task here is to realize the feature that my client wants since their
          CMS: <span className="text-success">Webflow</span> has a lot of
          limitations. The backend and animation here are coded using{" "}
          <span className="text-warning">Vanilla JavaScript</span>.
        </>
      ),
    },
    {
      img: img9,
      title: "AJA: Gamification of Programming Language",
      sourceCode: "",
      excerpt:
        "Capstone e-learning game with scoring and challenges to make programming fundamentals engaging for students.",
      description: (
        <>
          My <span className="text-info">Capstone Project</span> back in my
          college days. This project is an E-learning game with scoring
          functionality and challenges that helps student enjoy learning more
          about <span className="text-accent">Computer Programming</span>.
        </>
      ),
    },
  ];

  return (
    <section
      ref={reference}
      className="relative section-spacing overflow-hidden bg-white"
    >
      <ReactParticles
        particleCount={56}
        repelStrength={130}
        attractStrength={280}
        connectionDistance={140}
        particleSpeed={0.9}
        particleSize={3.5}
        enableRainbow={false}
        primaryColor="#0D9488"
        backgroundColor="transparent"
        cursorRadius={400}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
      >
        <div className="absolute top-20 left-[10%] h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-20 right-[8%] h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <SectionWrapper
        containerClass="container-max relative z-10"
        paddingSectionClass=""
      >
        <ScrollAnimationWrapper delay={0.15}>
          <div className="mb-12 text-center md:mb-16">
            <div className="mb-4 flex items-center justify-center">
              <motion.div
                className="inline-flex items-center justify-center text-accent"
                style={{ transformOrigin: "center" }}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Folder size={40} strokeWidth={1.5} />
              </motion.div>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
              My Projects
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Showcasing innovative solutions and successful implementations
            </p>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.25}>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, idx) => (
              <ProjectCard
                key={`${card.title}-${idx}`}
                card={card}
                onViewDetails={() => onSeeMore(card)}
              />
            ))}
          </div>
        </ScrollAnimationWrapper>
      </SectionWrapper>
    </section>
  );
};

function ProjectCard({
  card,
  onViewDetails,
}: {
  card: TCards;
  onViewDetails: () => void;
}) {
  const { img, title, excerpt, sourceCode } = card;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-gray-100">
        <img
          src={img}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-xl font-bold leading-tight text-primary">
          {title}
        </h3>
        <p className="mb-1 flex-1 text-sm leading-relaxed text-gray-600 md:text-[15px]">
          {excerpt}{" "}
          <button
            type="button"
            onClick={onViewDetails}
            className="font-medium text-accent underline decoration-accent/40 underline-offset-2 transition-colors hover:text-accent-dark hover:decoration-accent"
          >
            View Details
          </button>
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={onViewDetails}
            className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-light"
          >
            View Details
          </button>
          {sourceCode ? (
            <a
              href={sourceCode}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-gray-500 underline-offset-2 hover:text-accent hover:underline"
            >
              Source code
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export default Projects;
