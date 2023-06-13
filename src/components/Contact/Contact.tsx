import { useEffect, useRef, useState } from 'react'
import { BrandFacebook, BrandGithub, BrandHipchat, BrandLinkedin, Mail, Phone } from 'tabler-icons-react'
import emailjs from '@emailjs/browser'
import { TReferenceProps } from '../../lib/props-types'

const Contact = ({ reference }: TReferenceProps) => {
    return (
        <section ref={reference} className="bg-neutral pattern py-20" >
            <div className="max-w-5xl px-6 mx-auto text-center flex justify-center">
                <h2 className="text-2xl font-semibold text-slate-200 border-b-2 border-success w-fit flex">
                    <BrandHipchat /> Contact Me
                </h2>
            </div>
            <div className="container w-full md:w-3/4 mx-auto w-xs mt-4 flex-col lg:flex-row-reverse rounded-tr-lg rounded-bl-lg bg-gradient-to-r to-neutral from-slate-500"
                style={{
                    borderBottom: '4px solid #36D399',
                    borderRight: '4px solid #FBAF3A'
                }}
            >
                <div className="flex container mx-auto my-4 flex-col lg:flex-row justify-center md:p-10">
                    <Card />
                    <Form />
                </div>

            </div>


        </section>

    )
}

const Card = () => {
    const links = [{
        link: 'https://www.linkedin.com/in/jemuel-lupo-96312b176/',
        icon: <BrandLinkedin />
    }, {
        link: 'https://github.com/Jemsukie',
        icon: <BrandGithub />
    }, {
        link: 'https://www.facebook.com/jemuel.lupo/',
        icon: <BrandFacebook />
    },
    ]

    return (<div className='flex items-center mx-auto my-4'>
        <div className="card md:w-96 shadow-xl bg-slate-950 h-fit text-slate-200">
            <div className="card-body">
                <h2 className="card-title">Let&apos;s get in touch!</h2>
                <div>
                    Send me a message now
                    <ul className='my-4'>
                        <li className='flex flex-col sm:flex-row'><div className='flex-row flex'><Mail />Email:</div> <span className='text-primary mx-auto'>jemuel.lupo@gmail.com</span></li>
                        <li className='flex flex-col sm:flex-row'><div className='flex-row flex'><Phone />Phone:</div> <span className='text-success mx-auto'>(+63) 909 051 1103</span></li>
                    </ul>

                    <span className='flex justify-center'>
                        <ul className="menu menu-horizontal bg-slate-800 rounded-box text-slate-200">
                            {links.map((l, idx) => <li key={idx} className='hover:bg-warning hover:text-slate-800'><a href={l.link} target='_blank' rel="noreferrer">{l.icon}</a></li>)}
                        </ul>
                    </span>

                </div>

            </div>
        </div>
    </div>)
}

const Form = () => {
    const [viewToast, setViewToast] = useState(false)
    const [toastMessage, setToastMessage] = useState({ message: '', type: 'error' })
    const form = useRef(null)


    useEffect(() => {
        if (toastMessage.message !== '') toastNotify()
    }, [toastMessage])

    const validateEmail = (email: string) => {
        // Regular expression pattern for validating email addresses
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        // Test the email against the pattern
        return pattern.test(email)
    }

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        const formRef = form.current
        const name = formRef?.['name']['value']
        const email = formRef?.['email']['value']
        const message = formRef?.['message']['value']

        if (name && email && message) {
            validateEmail(email) ? sendMail() : setToastMessage({ message: 'Invalid Email!', type: 'error' })
        } else {
            setToastMessage({ message: 'Please complete all fields!', type: 'error' })
        }
    }

    const toastNotify = () => {
        setViewToast(true)
        setTimeout(() => setViewToast(false), 5000)
    }

    const sendMail = () => {
        const config = {
            serviceId: process.env.REACT_APP_SERVICE_ID || '',
            templateId: process.env.REACT_APP_TEMPLATE_ID || '',
            publicKey: process.env.REACT_APP_PUBLIC_KEY || '',
        }

        emailjs.sendForm(config.serviceId, config.templateId, form.current || '', config.publicKey)
            .then(() =>
                setToastMessage({ message: 'Email sent!', type: 'success' }),
                () =>
                    setToastMessage({ message: 'Email sending failed!', type: 'error' })
            )
    }


    return (
        <form className="form-control w-full max-w-sm p-2 mx-auto my-4" onSubmit={submitHandler} ref={form}>

            {viewToast && (<div className="toast">
                <div className={`alert alert-${toastMessage.type}`}>
                    <span>{toastMessage.message}</span>
                </div>
            </div>)}


            <label className="label" htmlFor="input-name">
                <span className="label-text text-slate-200">Name</span>
            </label>
            <input
                id="input-name"
                name="name"
                type="text"
                placeholder="Yepp! Your name"
                className="input input-bordered input-primary w-full max-w-sm text-neutral"
            />

            <label className="label" htmlFor="input-email">
                <span className="label-text text-slate-200">Email</span>
            </label>
            <input
                id="input-email"
                name="email"
                type="email"
                placeholder="Then enter your email"
                className="input input-bordered input-primary w-full max-w-sm text-neutral"
            />

            <label className="label" htmlFor="input-message">
                <span className="label-text text-slate-200">Message</span>
            </label>
            <textarea
                id="input-message"
                name="message"
                className="textarea textarea-info"
                placeholder="Hi there! Anything you wanna tell me?"
            >
            </textarea>

            <div className="flex justify-center mt-4">
                <input type="submit" className="btn btn-outline bg-neutral btn-info w-1/2" />
            </div>
        </form>)
}

export default Contact
