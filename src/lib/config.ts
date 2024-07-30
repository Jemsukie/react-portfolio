import { BrandFacebook, BrandGithub, BrandLinkedin, Mail, Phone } from 'tabler-icons-react'


// const useConfig = () => {
//     const socialLinks = [
//         {
//             link: 'https://www.linkedin.com/in/jemuel-lupo-96312b176/',
//             Icon: BrandLinkedin
//         }, {
//             link: 'https://github.com/Jemsukie',
//             Icon: BrandGithub
//         }, {
//             link: 'https://www.facebook.com/jemuel.lupo/',
//             Icon: BrandFacebook
//         },
//     ]

//     const contactInfo = [
//         {
//             Icon: Mail,
//             title: 'Email',
//             link: 'mailto:jemuel.lupo@jemwealth.co',
//             desc: 'jemuel.lupo@jemwealth.co',
//             className: 'text-primary'
//         },
//         {
//             Icon: Phone,
//             title: 'Phone',
//             link: 'tel:+639090511103',
//             desc: '(+63) 909 051 1103',
//             className: 'text-success'
//         },
//     ]

//     const expStats = [
//         {
//             title: 'Freelance Experience',
//             value: '2 years',
//             desc: 'Fullstack Development'
//         },
//         {
//             title: 'Professional Experience',
//             value: '3 years',
//             desc: 'Software Engineering',
//             bg: 'bg-slate-800'
//         },
//         {
//             title: 'Availability',
//             value: '24/7',
//             desc: 'Message me anytime'
//         }
//     ]

//     return {
//         socialLinks,
//         contactInfo,
//         expStats
//     }
// }
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
        className: 'text-primary'
    },
    {
        Icon: Phone,
        title: 'Phone',
        link: 'tel:+639090511103',
        desc: '(+63) 909 051 1103',
        className: 'text-success'
    },
]

const expStats = [
    {
        title: 'Freelance Experience',
        value: '2 years',
        desc: 'Fullstack Development'
    },
    {
        title: 'Professional Experience',
        value: '3 years',
        desc: 'Software Engineering',
        bg: 'bg-slate-800'
    },
    {
        title: 'Availability',
        value: '24/7',
        desc: 'Message me anytime'
    }
]

export {
    socialLinks,
    contactInfo,
    expStats
}
