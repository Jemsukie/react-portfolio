import { useEffect, useRef, useState } from 'react'
import { BrandHipchat } from 'tabler-icons-react'
import emailjs from '@emailjs/browser'
import { TReferenceProps } from '../../lib/props-types'
import { contactInfo, socialLinks } from '../../lib/config'
import SectionWrapper from '../../layout/SectionWrapper'
import ScrollAnimationWrapper from '../../layout/ScrollAnimationWrapper'

const Contact = ({ reference }: TReferenceProps) => {
    return (
        <section ref={reference} className="bg-neutral pattern" >

            <SectionWrapper containerClass={'container-1280'} paddingSectionClass={'py-[1em] sm:py-[2em] lg:py-[8em]'}>
                <ScrollAnimationWrapper delay={200}>
                    <div className="py-6">
                        <div className="max-w-5xl px-6 mx-auto text-center flex items-center md:items-center flex-col" id="project">
                            <h2 className="text-2xl font-semibold text-slate-200 w-fit flex"> <BrandHipchat /> Contact Me</h2>
                            {/* <progress className="progress w-56 progress-success bg-transparent" /> */}
                        </div>
                    </div>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper delay={200}>
                    <div className="md:py-4 py-0">
                        <div className="container max-w-6xl w-full md:w-3/4 mx-auto w-xs flex-col lg:flex-row-reverse md:rounded-tr-lg md:rounded-bl-lg bg-gradient-to-r to-neutral from-slate-500"
                            style={{
                                borderBottom: '4px solid #36D399',
                                borderRight: '4px solid #FBAF3A'
                            }}
                        >
                            <div className="flex container mx-auto flex-col lg:flex-row justify-center md:p-10">
                                <div className="flex w-full flex-col lg:flex-row">
                                    <ScrollAnimationWrapper delay={400} className="flex w-full justify-center flex-col lg:flex-row">
                                        <Card />
                                    </ScrollAnimationWrapper>


                                        <div className="divider divider-vertical lg:divider-horizontal text-slate-200">
                                            <ScrollAnimationWrapper delay={200} className="flex w-full justify-center flex-col lg:flex-row">
                                            <kbd className="kbd kbd-md text-slate-600">OR</kbd>
                                            </ScrollAnimationWrapper>
                                        </div>


                                    <ScrollAnimationWrapper delay={600} className="flex w-full justify-center flex-col lg:flex-row">
                                        <Form />
                                    </ScrollAnimationWrapper>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimationWrapper>
            </SectionWrapper>

        </section>

    )
}

const Card = () => {


    return (<div className='flex items-center mx-auto my-4'>
        <div className="card md:w-96 shadow-xl bg-slate-950 h-fit text-slate-200">
            <div className="card-body">
                <h2 className="card-title flex mx-auto">Let&apos;s get in touch!</h2>
                <div className='text-center items-center flex flex-col'>
                    Send me a message now
                    <ul className='my-4'>
                        {contactInfo.map(({ Icon, title, className, link, desc }) =>
                            <li className='flex flex-row gap-4' key={title}>
                                <div className='flex-row flex justify-center md:justify-start'>
                                    <Icon />
                                </div>
                                <span className={`${className} hover-enlarge`}>
                                    <a href={link}>{desc}</a>
                                </span>
                            </li>
                        )}
                    </ul>

                    <span className='flex justify-center'>
                        <ul className="menu menu-horizontal bg-slate-800 rounded-box text-slate-200">
                            {socialLinks.map(({ Icon, link }, idx) => {
                                const roundedClassName = idx === 0 ? 'rounded-s-lg' : idx === socialLinks.length - 1 ? 'rounded-e-lg' : ''

                                return <li key={idx} className={`hover:bg-warning hover:text-slate-800 ${roundedClassName} hover-enlarge`}>
                                    <a href={link} target='_blank' rel="noreferrer">
                                        <Icon />
                                    </a>
                                </li>
                            }

                            )}
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
        <form className="form-control w-full max-w-sm p-2 mx-auto" onSubmit={submitHandler} ref={form}>

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
                className="textarea textarea-info text-base"
                placeholder="Hi there! Anything you wanna tell me?"
            >
            </textarea>

            <div className="flex justify-center mt-4">
                <input type="submit" className="btn btn-outline bg-neutral btn-info w-1/2 hover-enlarge" />
            </div>
        </form>)
}

export default Contact
