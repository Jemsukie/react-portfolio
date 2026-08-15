import { BrandFacebook, BrandGithub, BrandLinkedin, Mail, Phone, MapPin, Code, Brain, Network, Bolt, ShieldCheck, Database } from 'tabler-icons-react'
import { yearsOfExperience } from './experience'

const socialLinks = [
  {
    link: 'https://www.linkedin.com/in/jemuel-lupo-96312b176/',
    Icon: BrandLinkedin
  }, {
    link: 'https://github.com/Jemsukie',
    Icon: BrandGithub
  }, {
    link: 'https://www.facebook.com/jemuel.lupo/',
    Icon: BrandFacebook
  },
]

const contactInfo = [
  {
    Icon: Mail,
    title: 'Email',
    link: 'mailto:jemuel.lupo@jemwealth.co',
    desc: 'jemuel.lupo@jemwealth.co',
  },
  {
    Icon: Phone,
    title: 'Phone',
    link: 'tel:+639090511103',
    desc: '(+63) 909 051 1103',
  },
  {
    Icon: MapPin,
    title: 'Location',
    link: 'https://maps.app.goo.gl/FqhVHNa6XU1wN3Fw8',
    desc: 'Goa, Camarines Sur 4422, Philippines',
  },
]

const expStats = [
  {
    title: 'Professional Experience',
    value: `${yearsOfExperience} years`,
    desc: 'Fullstack Development'
  },
  {
    title: 'Projects Delivered',
    value: '10+',
    desc: 'Successful Launches'
  },
  {
    title: 'Tickets Resolved',
    value: '1,500+',
    desc: 'Complex Solutions'
  }
]

const services = [
  {
    Icon: Code,
    title: 'Web Development',
    description: 'Full-stack web applications built with modern technologies and best practices.'
  },
  {
    Icon: Brain,
    title: 'AI Software Integration',
    description: 'Integrating AI capabilities into existing software systems to enhance functionality and automation.'
  },
  {
    Icon: Network,
    title: 'System Architecture',
    description: 'Scalable system design and architecture for robust, maintainable applications.'
  },
  {
    Icon: Bolt,
    title: 'Workflow Automation',
    description: 'Business process automation with AI enhancements to streamline operations.'
  },
  {
    Icon: ShieldCheck,
    title: 'QA & Testing',
    description: 'Quality assurance and comprehensive testing to ensure reliable software delivery.'
  },
  {
    Icon: Database,
    title: 'Database Management',
    description: 'Database design, administration, and optimization for efficient data management.'
  },
]

const workingWithMe = [
  {
    title: 'Clear Communication',
    description: 'Regular updates and transparent communication throughout the project lifecycle.'
  },
  {
    title: 'Collaborative Approach',
    description: 'Working together to solve problems and find the best solutions for your needs.'
  },
  {
    title: 'Timely Delivery',
    description: 'Quality-focused development with respect for deadlines and project timelines.'
  },
  {
    title: 'Ongoing Support',
    description: 'Continuous maintenance and support to keep your systems running smoothly.'
  },
  {
    title: 'Transparent Process',
    description: 'Clear expectations, regular check-ins, and open dialogue about progress.'
  },
  {
    title: 'Innovation Focus',
    description: 'Leveraging cutting-edge technologies and AI integration to deliver modern solutions.'
  },
]

const testimonials = [
  {
    name: 'Client Name',
    role: 'Position, Company',
    quote: 'Completed on-time and to the highest quality standards',
    text: 'Jemuel delivered exceptional work on our project. His expertise in AI integration transformed our workflow. As a growing agency, it\'s important for us to have the ability to scale-up our development capacity on-demand so that we can stay on schedule and meet the needs of our customers. Jemuel has been a fantastic complement to our team, allowing us to take on more projects with the assurance that each site will be completed on-time and to the highest quality standards.',
    rating: 5
  },
  {
    name: 'Client Name',
    role: 'Position, Company',
    quote: 'Clear communication and timely delivery made all the difference',
    text: 'Working with Jemuel was a great experience. Clear communication and timely delivery made all the difference. His technical expertise and problem-solving approach brought our vision to life perfectly. We highly recommend his services for any complex web development projects.',
    rating: 5
  },
  {
    name: 'Client Name',
    role: 'Position, Company',
    quote: 'The technical expertise and problem-solving approach',
    text: 'The technical expertise and problem-solving approach brought our vision to life perfectly. Jemuel\'s attention to detail and ability to understand our business needs made the collaboration seamless. The AI integration work exceeded our expectations.',
    rating: 5
  },
]

const calendlyUrl = 'https://calendly.com/jemuel-lupo/meeting-with-jemuel-software-engineer'

export {
  socialLinks,
  contactInfo,
  expStats,
  services,
  workingWithMe,
  testimonials,
  calendlyUrl
}

