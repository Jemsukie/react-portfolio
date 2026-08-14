export type WorkExperience = {
  company: string
  positions: {
    position: string
    location: string
    startDate: string // Format: "MMM YYYY" e.g., "Apr 2024"
    endDate: string | 'Present' // Format: "MMM YYYY" or "Present"
    type: 'Full-time' | 'Part-time'
    responsibilities: string[]
  }[]
}

export const workExperience: WorkExperience[] = [
  {
    company: 'Nimbus+',
    positions: [
      {
        position: 'Founding Fullstack Engineer',
        location: 'Remote',
        startDate: 'Dec 2025',
        endDate: 'Present',
        type: 'Full-time',
        responsibilities: [
          'Built 8 core modules (RFI, drawings, design changes, planner, tasks, timesheets, files, messaging) into one AEC platform, shipping it to production in ~8 months as the primary engineer',
          'Designed the 100+ table GraphQL/Prisma backend plus Stripe seats, drawing OCR, and external RFI access so consultants can coordinate without extra tools or full-priced seats'
        ]
      }
    ]
  },
  {
    company: 'Ethical Hire',
    positions: [
      {
        position: 'Fullstack Developer',
        location: 'Remote',
        startDate: 'Apr 2025',
        endDate: 'Oct 2025',
        type: 'Full-time',
        responsibilities: [
          'Delivered 9 core features, enabling the product\'s first successful launch readiness for 500+ users',
          'Owned development post-handoff and led the project to successful launch within 6 months'
        ]
      }
    ]
  },{
    company: 'Art of Clean',
    positions: [
      {
        position: 'Fullstack Developer',
        location: 'Remote',
        startDate: 'Feb 2025',
        endDate: 'Jun 2025',
        type: 'Part-time',
        responsibilities: [
          'Built a custom lead qualification microservice integrated with ServiceM8, GoHighLevel, and WhatConverts, reducing follow-up delays by 65% and eliminating 3 disconnected reports',
          'Provided support and guidance to a Junior Developer during and post-handoff'
        ]
      }
    ]
  },
  {
    company: 'Spraken Takken Industries',
    positions: [
      {
        position: 'Senior Backend Developer',
        location: 'Remote',
        startDate: 'Aug 2024',
        endDate: 'Dec 2024',
        type: 'Full-time',
        responsibilities: [
          'Led end-to-end MVP development and delivered a complete product launch in 5 months, fully aligning with the business\' planned go-to-market date and revenue targets',
          'Trained and mentored 4 junior developers, improving delivery velocity, code quality, and collaboration through structured peer reviews, pair programming, and technical guidance',
          'Monitored and optimized the codebase and server health of 10 microservices, ensuring high uptime, reliable performance, and scalable deployments across environments'
        ]
      }
    ]
  },
  {
    company: 'Brylliant Solutions',
    positions: [
      {
        position: 'Lead Software Engineer',
        location: 'Remote',
        startDate: 'Jul 2023',
        endDate: 'Apr 2024',
        type: 'Full-time',
        responsibilities: [
          'Served as the technical Webflow specialist for retainer clients, resolving 1,000+ complex tickets and delivering custom-code solutions beyond native Webflow capabilities to improve turnaround time, production reliability, and client satisfaction across multiple projects'
        ]
      },
      {
        position: 'Webflow Developer',
        location: 'Remote',
        startDate: 'Apr 2024',
        endDate: 'Apr 2025',
        type: 'Part-time',
        responsibilities: [
          'Provided on-demand development support for complex API integrations and custom Webflow solutions, resolving critical feature gaps and accelerating delivery timelines for 8 months'
        ]
      }
    ]
  },
  {
    company: 'The Freelance Movement Tribe',
    positions: [
      {
        position: 'Senior Fullstack Developer',
        location: 'Remote',
        startDate: 'Jul 2023',
        endDate: 'Apr 2024',
        type: 'Full-time',
        responsibilities: [
          'Led full lifecycle MVP development and delivered the product launch in 6 months, meeting the organization\'s planned go-to-market date and member onboarding requirements',
          'Trained and mentored 2 junior developers, elevating delivery quality and team efficiency through peer reviews, structured guidance, and consistent technical coaching'
        ]
      }
    ]
  },
  {
    company: 'Fasttrack Solutions Inc.',
    positions: [
      {
        position: 'Mid-Level Fullstack Developer',
        location: 'Remote',
        startDate: 'Jun 2022',
        endDate: 'Jun 2023',
        type: 'Full-time',
        responsibilities: [
          'Owned and resolved 500+ tickets across multiple projects, delivering both feature development and critical fixes'
        ]
      }
    ]
  },
  {
    company: 'Netfluence Software Development',
    positions: [
      {
        position: 'Junior Fullstack Developer',
        location: 'Remote',
        startDate: 'Aug 2021',
        endDate: 'Apr 2022',
        type: 'Full-time',
        responsibilities: [
          'Assisted Seniors and Team Leaders for development and deployment reducing the development time by 20%',
          'Earned 6 HubSpot certifications, strengthening the company\'s marketing credibility and expanding its technical capabilities with certified expertise across key platforms'
        ]
      }
    ]
  },
]
