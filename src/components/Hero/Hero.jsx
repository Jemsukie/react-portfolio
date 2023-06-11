import assets from '../../lib/Assets'
import { Download } from 'tabler-icons-react'

const Hero = () => {
    const { bg, hero, cv } = assets

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
                    <h1 className="text-5xl font-bold text-slate-200 flex flex-col md:flex-row">Hi I'm&nbsp;<span className='text-warning border-b-2 border-info w-fit'>Jemuel Lupo</span></h1>
                    <p className="mt-6 text-success text-2xl">Fullstack Web Developer</p>
                    <p className="mt-2 text-white text-md">I will develop your Web Application and Websites</p>
                    <div className='mt-2'>
                        <a className="btn btn-info btn-outline bg-neutral" href={cv} download="resume.pdf">
                            Download CV <Download />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero
