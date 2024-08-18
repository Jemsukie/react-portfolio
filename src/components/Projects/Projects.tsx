import { ThreeDCubeSphere } from 'tabler-icons-react'
import { assets } from '../../lib/asset-helper'
import { ReactNode, useEffect, useMemo, useState } from 'react'
import { TReferenceProps } from '../../lib/props-types'

type TCards = {
	img: string
	title: string
	sourceCode: string
	description: ReactNode
}

const Projects = ({ reference }: TReferenceProps) => {
	const { img1, img2, img3, img4, img5, img6, img7 } = assets

	const cards: TCards[] = [
		{
			img: img1, title: 'Atlas', sourceCode: '', description: <>Learning Management System for a Community called <a className="text-[#0ea0bf]" href="https://thefreelancemovement.com/" target="_blank" rel="noreferrer">The Freelance Movement Tribe </a>
				founded by <span className="text-primary font-bold" >John Pagulayan</span>. This is a Community/CRM/LMS app for <span className="text-primary" >Tribe Freelancers</span>. Visit ATLAS at <a className="text-[#0ea0bf]" href="https://tfmt.ph/" target="_blank" rel="noreferrer">https://tfmt.ph/</a>. <br /><br /> Atlas is developed using <a className="text-error" href="https://redwoodjs.com/" target="_blank" rel="noreferrer">Redwood JS</a> and I have been the Lead Developer for this project for 8 months.</>
		},
		{ img: img2, title: 'AJA: Gamification of Programming Language', sourceCode: '', description: <>My <span className="text-info">Capstone Project</span> back in my college days. This project is an E-learning game with scoring functionality and challenges that helps student enjoy learning more about <span className="text-accent">Computer Programming</span>.</> },
		{ img: img3, title: 'Chat App', sourceCode: 'https://github.com/Jemsukie/chat-app', description: <>A simple Chat Application I made with <a className="text-error" href="https://redwoodjs.com/" target="_blank" rel="noreferrer">Redwood JS</a>. Here you can add and chat your contacts.</> },
		{ img: img4, title: 'Appointment Booking System', sourceCode: '', description: <>This Web Application is an appointment booking website for a Cooperative Business in Lagonoy, Camarines Sur. This Web App has a Client and an Admin interface. Made with <a className="text-warning" href="https://codeigniter.com/" target="_blank" rel="noreferrer">CodeIgniter 4</a>.</> },
		{ img: img5, title: 'Memorial Park Map and Appoinment System', sourceCode: 'https://github.com/Jemsukie/memorial-park-php.git', description: <>This Web Application is a Mapping and Appointment System for Katoninongan Cemetery in San Jose, Camarines Sur. It has coordinates for the deceased that can be searched by their relatives. Made with <a className="text-warning" href="https://codeigniter.com/" target="_blank" rel="noreferrer">CodeIgniter 4</a>.</> },
		{ img: img6, title: 'Remo.co Online Event Organizer', sourceCode: '', description: <>A Web Application made by <span className="text-primary">Remo.co</span>. My task here is to realize the feature that my client wants since their CMS: <span className="text-success">Webflow</span> has a lot of limitations. The backend and animation here are coded using <span className="text-warning">Vanilla JavaScript</span>.</> },
		{ img: img7, title: 'Levitate Media Video Pricing Calculator', sourceCode: '', description: <><span className="text-accent">Cart + Craft</span> is a Webflow Agency that offers Web Design and Branding Solutions for their clients. My task here is to realize the feature that my client wants since their CMS: <span className="text-success">Webflow</span> has a lot of limitations. The backend and animation here are coded using <span className="text-warning">Vanilla JavaScript</span>.</> },
	]

	const [currentSlide, setCurrentSlide] = useState(0)
	const prevSlide = () => setCurrentSlide(prev => prev === 0 ? cards.length - 1 : prev - 1)
	const nextSlide = () => setCurrentSlide(prev => prev === cards.length - 1 ? 0 : prev + 1)

	return (
		<section ref={reference}>
			<div className="shadow-lg py-6">
				<div className="max-w-5xl px-6 mx-auto text-center flex items-center md:items-end flex-col" id="project">
					<h2 className="text-2xl font-semibold w-fit flex"> <ThreeDCubeSphere /> My Projects</h2>
					<progress className="progress w-56 progress-primary bg-transparent" />
				</div>
			</div>

			<div className="relative w-full md:p-4 shadow" data-carousel="slide">

				{cards.map((c, idx) => {
					return <div className={`${currentSlide !== idx ? 'hidden' : ''} duration-700 ease-in-out`} data-carousel-item key={idx}>
						<Cards
							details={c}
							prevFn={prevSlide}
							nextFn={nextSlide}
						/>
					</div>
				})}

				<button type="button" className="md:flex hidden absolute top-0 start-0 z-30 items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev
					onClick={prevSlide}
				>
					<span className="shadow-lg btn bg-neutral text-info btn-outline inline-flex items-center justify-center w-10 h-10 rounded-lg  hover-enlarge hover:border-2 hover:border-info">
						❮❮
						<span className="sr-only">Previous</span>
					</span>
				</button>
				<button type="button" className="md:flex hidden absolute top-0 end-0 z-30 items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next
					onClick={nextSlide}
				>
					<span className="shadow-lg btn bg-neutral text-info btn-outline inline-flex items-center justify-center w-10 h-10 rounded-lg hover-enlarge hover:border-2 hover:border-info">
						❯❯
						<span className="sr-only">Next</span>
					</span>
				</button>
			</div>

		</section >
	)
}

const Cards = ({ details, prevFn, nextFn }: { details: TCards, prevFn: () => void, nextFn: () => void }) => {
	const { img, title, description, sourceCode } = details

	return (
		<div className="flex flex-col md:flex-row w-full shadow-2xl duration-700 ease-in-out">
			<div className='w-full md:w-1/2'>
				<img src={img} className="h-fit sm:h-full md:h-full w-full object-cover" alt="Album" />
			</div>
			<div className='w-full md:w-1/2 h-auto'>
				<div className="indicator w-full h-full">
					<span className="flex md:hidden indicator-item indicator-start btn bg-neutral text-info btn-outline ml-6" onClick={prevFn}>❮❮</span>
					<span className="flex md:hidden indicator-item indicator-end btn bg-neutral text-info btn-outline mr-6" onClick={nextFn}>❯❯</span>

					<div className="grid place-items-center"><div className="card-body bg-secondary text-slate-200 h-full">
						<h2 className="card-title text-2xl mb-2">{title}</h2>
						<p className="text-slate-400 text-lg">{description}</p>
						{sourceCode !== '' && (<div className="card-actions justify-end">
							<a className="badge badge-primary badge-outline cursor-pointer" target="_blank" href={sourceCode} rel="noreferrer">Source Code</a>
						</div>)}
					</div></div>
				</div>

			</div>
		</div>



	)
}

export default Projects
