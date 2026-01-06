import { useEffect, useRef, useState } from 'react'
import { Mail } from 'tabler-icons-react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { contactInfo, socialLinks } from '../../lib/config'
import { TReferenceProps } from '../../lib/props-types'
import SectionWrapper from '../../layout/SectionWrapper'
import ScrollAnimationWrapper from '../../layout/ScrollAnimationWrapper'

const Contact = ({ reference }: TReferenceProps) => {
  return (
    <section
      ref={reference}
      className="relative section-spacing bg-white"
    >
      <SectionWrapper
        containerClass="container-max"
        paddingSectionClass=""
      >
        <ScrollAnimationWrapper delay={0.2}>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 flex items-center justify-center gap-3 text-primary">
              <Mail className="text-accent" size={40} />
              Contact Me
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get in touch and let&apos;s discuss your project
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info Card */}
          <ScrollAnimationWrapper delay={0.3}>
            <ContactCard />
          </ScrollAnimationWrapper>

          {/* Contact Form */}
          <ScrollAnimationWrapper delay={0.4}>
            <ContactForm />
          </ScrollAnimationWrapper>
        </div>
      </SectionWrapper>
    </section>
  )
}

const ContactCard = () => {
  return (
    <div className="card p-8 h-fit">
      <h3 className="text-2xl font-bold mb-6 text-primary">Let&apos;s get in touch!</h3>
      <p className="text-base text-gray-600 mb-8">Send me a message or reach out directly</p>

      <div className="space-y-4 mb-8">
        {contactInfo.map(({ Icon, title, link, desc }) => (
          <a
            key={title}
            href={link}
            className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group"
          >
            <Icon className="text-accent group-hover:scale-110 transition-transform" size={24} />
            <div>
              <div className="text-xs text-gray-500 mb-1">{title}</div>
              <div className="text-base font-medium text-primary">{desc}</div>
            </div>
          </a>
        ))}
      </div>

      <div className="flex items-center justify-center gap-3">
        {socialLinks.map(({ Icon, link }, idx) => (
          <a
            key={idx}
            href={link}
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all hover:scale-110"
            aria-label={`Visit ${link}`}
          >
            <Icon className="text-primary" size={24} />
          </a>
        ))}
      </div>
    </div>
  )
}

const ContactForm = () => {
  const [viewToast, setViewToast] = useState(false)
  const [toastMessage, setToastMessage] = useState({ message: '', type: 'error' })
  const form = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (toastMessage.message !== '') toastNotify()
  }, [toastMessage])

  const validateEmail = (email: string) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return pattern.test(email)
  }

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    const formRef = form.current
    if (!formRef) return

    const name = (formRef['name' as keyof typeof formRef] as HTMLInputElement)?.value
    const email = (formRef['email' as keyof typeof formRef] as HTMLInputElement)?.value
    const message = (formRef['message' as keyof typeof formRef] as HTMLTextAreaElement)?.value

    if (name && email && message) {
      if (validateEmail(email)) {
        sendMail()
      } else {
        setToastMessage({ message: 'Invalid Email!', type: 'error' })
      }
    } else {
      setToastMessage({ message: 'Please complete all fields!', type: 'error' })
    }
  }

  const toastNotify = () => {
    setViewToast(true)
    setTimeout(() => setViewToast(false), 5000)
  }

  const sendMail = () => {
    if (!form.current) return

    const config = {
      serviceId: import.meta.env.VITE_SERVICE_ID || '',
      templateId: import.meta.env.VITE_TEMPLATE_ID || '',
      publicKey: import.meta.env.VITE_PUBLIC_KEY || '',
    }

    if (!config.serviceId || !config.templateId || !config.publicKey) {
      setToastMessage({ message: 'Email service not configured!', type: 'error' })
      return
    }

    emailjs
      .sendForm(config.serviceId, config.templateId, form.current, config.publicKey)
      .then(
        () => setToastMessage({ message: 'Email sent successfully!', type: 'success' }),
        () => setToastMessage({ message: 'Email sending failed!', type: 'error' })
      )
  }

  return (
    <form
      className="card p-8"
      onSubmit={submitHandler}
      ref={form}
    >
      {viewToast && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mb-4 p-4 rounded-lg ${
            toastMessage.type === 'success'
              ? 'bg-green-50 border border-green-200 text-green-700'
              : 'bg-red-50 border border-red-200 text-red-700'
          }`}
        >
          {toastMessage.message}
        </motion.div>
      )}

      <div className="space-y-4">
        <div>
          <label htmlFor="input-name" className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            id="input-name"
            name="name"
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            required
          />
        </div>

        <div>
          <label htmlFor="input-email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            id="input-email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            required
          />
        </div>

        <div>
          <label htmlFor="input-message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="input-message"
            name="message"
            rows={5}
            placeholder="Hi there! Anything you wanna tell me?"
            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
            required
          />
        </div>

        <motion.button
          type="submit"
          className="w-full px-6 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-light transition-all duration-300 shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Send Message
        </motion.button>
      </div>
    </form>
  )
}

export default Contact
