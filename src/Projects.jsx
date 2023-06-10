
import { ThreeDCubeSphere } from "tabler-icons-react"
import assets from "./lib/Assets"

const Projects = () => {
    const { img1, img2, img3, img4, img5, img6 } = assets

    const cards = [
        { img: img1, title: 'AJA: Gamification of Programming Language', sourceCode: '', description: 'My Capstone Project back in my college days. This project is an E-learning game with scoring functionality and challenges that helps student enjoy learning more about Computer Programming.' },
        { img: img2, title: 'Chat App', sourceCode: 'https://github.com/Jemsukie/chat-app', description: <>A simple Chat Application I made with <a className="text-error" href="https://redwoodjs.com/" target="_blank" rel="noreferrer">Redwood JS</a>. Here you can add and chat your contacts.</> },
        { img: img3, title: 'Appoinment Booking System', sourceCode: '', description: <>This Web Application is an appointment booking website for a Cooperative Business in Lagonoy, Camarines Sur. This Web App has a Client and an Admin interface. Made with <a className="text-warning" href="https://codeigniter.com/" target="_blank" rel="noreferrer">CodeIgniter 4</a>.</> },
        { img: img4, title: 'Memorial Park Map and Appoinment System', sourceCode: 'https://github.com/Jemsukie/memorial-park-php.git', description: <>This Web Application is a Mapping and Appointment System for Katoninongan Cemetery in San Jose, Camarines Sur. It has coordinates for the deceased that can be searched by their relatives. Made with <a className="text-warning" href="https://codeigniter.com/" target="_blank" rel="noreferrer">CodeIgniter 4</a>.</> },
        { img: img5, title: 'Remo.co Online Event Organizer', sourceCode: '', description: <>A Web Application made by <span className="text-primary">Remo.co</span>. My task here is to realize the feature that my client wants since their CMS: <span className="text-success">Webflow</span> has a lot of limitations. The backend and animation here are coded using <span className="text-warning">Vanilla JavaScript</span>.</> },
        { img: img6, title: 'Levitate Media Video Pricing Calculator', sourceCode: '', description: <><span className="text-accent">Cart + Craft</span> is a Webflow Agency that offers Web Design and Branding Solutions for their clients. My task here is to realize the feature that my client wants since their CMS: <span className="text-success">Webflow</span> has a lot of limitations. The backend and animation here are coded using <span className="text-warning">Vanilla JavaScript</span>.</> },
    ]

    return (
        <>
            <div className="shadow-lg py-10">
                <div className="max-w-5xl px-6 mx-auto text-center flex justify-center md:justify-end" id="project">
                    <h2 className="text-2xl font-semibold border-b-2 border-primary w-fit flex"> <ThreeDCubeSphere /> My Projects</h2>
                </div>
            </div>

            <div className="carousel w-full container mx-auto">
                {cards.map((i, idx) => {
                    const prevIdx = idx === 0 ? (cards.length - 1) : (idx - 1)
                    const nextIdx = idx === cards.length - 1 ? 0 : (idx + 1)
                    return (
                        <div id={`slide${idx + 1}`} className="carousel-item relative w-full">
                            <Cards details={i} />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href={`#slide${prevIdx + 1}`} className="btn btn-circle text-white">❮</a>
                                <a href={`#slide${nextIdx + 1}`} className="btn btn-circle text-white">❯</a>
                            </div>
                        </div>

                    )
                })}
            </div>

        </>
    )
}

const Cards = ({ details }) => {
    const { img, title, description, sourceCode } = details

    return (
        <div class="grid md:grid-cols-2 grid-cols-1 my-4 shadow-2xl" >
            <img src={img} className="h-fit sm:h-full md:h-full w-full" alt="Album" />
            <div className="card-body bg-secondary text-slate-200">
                <h2 className="card-title">{title}</h2>
                <p className="text-slate-400" style={{
                    maxWidth: '300px'
                }}>{description}</p>
                {sourceCode !== '' && (<div className="card-actions justify-end">
                    <a className="badge badge-primary badge-outline cursor-pointer" target="_blank" href={sourceCode} rel="noreferrer">Source Code</a>
                </div>)}

            </div>
        </div>
    )
}

export default Projects
