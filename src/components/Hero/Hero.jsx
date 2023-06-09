import bg from '../../assets/hero/bg.jpg'
import hero from '../../assets/hero/jem.png'
import { Download } from 'tabler-icons-react'

const Hero = () => {
    return (
        <div id='home' className="hero min-h-screen bg-cover bg-gradient-to-bl"
            style={{
                backgroundImage: `url(${bg})`
            }}>
            <div className="hero-content flex-col lg:flex-row-reverse bg-slate-800 bg-opacity-30 rounded-tr-lg rounded-bl-lg"
                style={{
                    borderBottom: '4px solid #36D399',
                    borderRight: '4px solid #FBAF3A'
                }}
            >
                <img src={hero} className="w-full max-w-xs" alt='No img' />
                <div className='p-4'>
                    <h1 className="text-5xl font-bold text-slate-200">Hi I'm <span className='text-warning border-b-2 border-info'>Jemuel Lupo</span></h1>
                    <p className="mt-6 text-success text-2xl">Fullstack Web Developer</p>
                    <p className="mt-2 text-white text-md">I will develop your Web Application and Websites</p>
                    <div className='mt-2'>
                        <button className="btn btn-info">
                            Download CV
                            <Download />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero
