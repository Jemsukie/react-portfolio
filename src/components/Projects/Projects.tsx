import { ThreeDCubeSphere } from 'tabler-icons-react'
import { assets } from '../../lib/asset-helper'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { TReferenceProps } from '../../lib/props-types'
import SectionWrapper from '../../layout/SectionWrapper'
import ScrollAnimationWrapper from '../../layout/ScrollAnimationWrapper'

type TCards = {
	img: string
	title: string
	sourceCode: string
	description: ReactNode
}

const Projects = ({ reference }: TReferenceProps) => {
	const { img1, img2, img3, img4, img5, img6, img7, img8 } = assets

	const cards: TCards[] = [
		{
			img: img1, title: 'Atlas', sourceCode: '', description: <>Learning Management System for a Community called <a className="text-[#0ea0bf]" href="https://thefreelancemovement.com/" target="_blank" rel="noreferrer">The Freelance Movement Tribe </a>
				founded by <span className="text-primary font-bold" >John Pagulayan</span>. This is a Community/CRM/LMS app for <span className="text-primary" >Tribe Freelancers</span>. Visit ATLAS at <a className="text-[#0ea0bf]" href="https://tfmt.ph/" target="_blank" rel="noreferrer">https://tfmt.ph/</a>. <br /><br /> Atlas is developed using <a className="text-error" href="https://redwoodjs.com/" target="_blank" rel="noreferrer">Redwood JS</a> and I have been the Lead Developer for this project for 8 months.</>
		},
		{ img: img2, title: 'AI Enhanced Clinic System', sourceCode: '', description: <>A modern Medical Clinic Management System built with <a className="text-error" href="https://redwoodjs.com/" target="_blank" rel="noreferrer">Redwood JS</a>. This system features AI-powered patient diagnosis assistance, intelligent appointment scheduling, and comprehensive medical records management. The dashboard provides real-time analytics on patient demographics, appointment trends, and resource utilization. Healthcare providers can efficiently manage patient records, track lab results, and generate detailed medical reports while maintaining HIPAA compliance.</> },
		{ img: img3, title: 'Chat App', sourceCode: 'https://github.com/Jemsukie/chat-app', description: <>A simple Chat Application I made with <a className="text-error" href="https://redwoodjs.com/" target="_blank" rel="noreferrer">Redwood JS</a>. Here you can add and chat your contacts.</> },
		{ img: img4, title: 'Appointment Booking System', sourceCode: '', description: <>This Web Application is an appointment booking website for a Cooperative Business in Lagonoy, Camarines Sur. This Web App has a Client and an Admin interface. Made with <a className="text-warning" href="https://codeigniter.com/" target="_blank" rel="noreferrer">CodeIgniter 4</a>.</> },
		{ img: img5, title: 'Memorial Park Map and Appoinment System', sourceCode: 'https://github.com/Jemsukie/memorial-park-php.git', description: <>This Web Application is a Mapping and Appointment System for Katoninongan Cemetery in San Jose, Camarines Sur. It has coordinates for the deceased that can be searched by their relatives. Made with <a className="text-warning" href="https://codeigniter.com/" target="_blank" rel="noreferrer">CodeIgniter 4</a>.</> },
		{ img: img6, title: 'Remo.co Online Event Organizer', sourceCode: '', description: <>A Web Application made by <span className="text-primary">Remo.co</span>. My task here is to realize the feature that my client wants since their CMS: <span className="text-success">Webflow</span> has a lot of limitations. The backend and animation here are coded using <span className="text-warning">Vanilla JavaScript</span>.</> },
		{ img: img7, title: 'Levitate Media Video Pricing Calculator', sourceCode: '', description: <><span className="text-accent">Cart + Craft</span> is a Webflow Agency that offers Web Design and Branding Solutions for their clients. My task here is to realize the feature that my client wants since their CMS: <span className="text-success">Webflow</span> has a lot of limitations. The backend and animation here are coded using <span className="text-warning">Vanilla JavaScript</span>.</> },
		{ img: img8, title: 'AJA: Gamification of Programming Language', sourceCode: '', description: <>My <span className="text-info">Capstone Project</span> back in my college days. This project is an E-learning game with scoring functionality and challenges that helps student enjoy learning more about <span className="text-accent">Computer Programming</span>.</> },
	]

	return (
		<section ref={reference} className='flex flex-col justify-center'>
            <SectionWrapper containerClass={'container-1280'} paddingSectionClass={'padding-section-128'}>
				<ScrollAnimationWrapper>
					<div className="py-6">
						<div className="max-w-5xl px-6 mx-auto text-center flex items-center md:items-center flex-col" id="project">
							<h2 className="text-2xl font-semibold w-fit flex"> <ThreeDCubeSphere /> My Projects</h2>
						</div>
					</div>
				</ScrollAnimationWrapper>
				<ScrollAnimationWrapper>
					<div className='flex container w-full xl:w-4/5 mx-auto flex-col lg:flex-row max-w-6xl py-4'>
						<Carousel cards={cards} />
					</div>
				</ScrollAnimationWrapper>
			</SectionWrapper>
		</section>
	)
}

const Carousel = ({ cards }: { cards: TCards[] }) => {
	const carouselRef = useRef<HTMLDivElement>(null)
	const [currentIndex, setCurrentIndex] = useState(0)
	const interval = 10000 // 10 seconds
	const itemRefs = useRef<(HTMLDivElement | null)[]>([]) // Array of refs
	const intervalRef = useRef<NodeJS.Timeout | null>(null) // Ref to store the interval ID

	// Function to start the auto-slide timer
	const startAutoSlide = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current)
		}
		intervalRef.current = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)
		}, interval)
	}

	// Automatically start the auto-slide timer when the component mounts
	useEffect(() => {
		startAutoSlide()

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current)
			}
		}
	}, [cards.length, interval])

	// Scroll to the current slide whenever the currentIndex changes
	useEffect(() => {
		const carousel = carouselRef.current
		if (!carousel) return

		const currentItem = itemRefs.current[currentIndex]
		if (currentItem) {
			carousel.scrollLeft = currentItem.offsetLeft
		}


	}, [currentIndex])

	// Move to the previous slide and reset the timer
	const moveToPrevSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length)
		startAutoSlide() // Reset the auto-slide timer
	}

	// Move to the next slide and reset the timer
	const moveToNextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)
		startAutoSlide() // Reset the auto-slide timer
	}

	return (
		<div ref={carouselRef} className="carousel rounded-box w-full">
			{cards.map((c, idx) => (
				<div
					ref={(el) => (itemRefs.current[idx] = el)}
					className="carousel-item w-full"
					key={idx}
				>
					<div className='w-full flex justify-center'>
						<Cards prevFn={moveToPrevSlide} nextFn={moveToNextSlide} details={c} />
					</div>
				</div>
			))}
		</div>
	)
}

const Cards = ({ details, prevFn, nextFn }: { details: TCards, prevFn: () => void, nextFn: () => void }) => {
	const { img, title, description, sourceCode } = details

	return (<div className="card lg:card-side bg-secondary text-slate-200 shadow container h-full">
		<figure className='w-full lg:w-1/2 '>
			<img src={img} className="h-fit sm:h-full md:h-full w-full object-cover" alt="Album" />
		</figure>
		<div className="card-body lg:w-1/2 w-full">
			<h2 className="card-title text-2xl mb-2 w-full">{title}</h2>
			<p className="text-slate-400 text-lg">{description}</p>

			<div className="card-actions justify-between">
				<div className='flex gap-2'>
					<button onClick={prevFn}>
						<span className="shadow-lg btn bg-neutral text-info btn-outline inline-flex items-center justify-center w-10 h-10 rounded-lg  hover-enlarge hover:border-2 hover:border-info">
							❮❮
							<span className="sr-only">Previous</span>
						</span>
					</button>

					<button onClick={nextFn}>
						<span className="shadow-lg btn bg-neutral text-info btn-outline inline-flex items-center justify-center w-10 h-10 rounded-lg hover-enlarge hover:border-2 hover:border-info">
							❯❯
							<span className="sr-only">Next</span>
						</span>
					</button>


				</div>

				{sourceCode !== '' && (
					<a className="badge badge-primary badge-outline cursor-pointer" target="_blank" href={sourceCode} rel="noreferrer">Source Code</a>
				)}
			</div>
		</div>
	</div>


	)
}

export default Projects
