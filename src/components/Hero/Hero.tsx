import { assets } from '../../lib/asset-helper'
import { Download } from 'tabler-icons-react'
import { TReferenceProps } from '../../lib/props-types'

const Hero = ({ reference }: TReferenceProps) => {
    const { bg, hero, cv } = assets

    return (
        <section ref={reference} className="hero min-h-screen bg-cover bg-gradient-to-bl"
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
                    <h1 className="text-5xl font-bold text-slate-200 flex flex-col md:flex-row">Hi I&apos;m&nbsp;<span className='text-warning border-b-2 border-info w-fit'>Jemuel Lupo</span></h1>
                    <p className="mt-6 text-success text-2xl">Software Engineer</p>
                    <p className="mt-2 text-white text-md">Empowering businesses with streamlined digital systems and organizational efficiency</p>
                    <div className='mt-2 flex justify-center md:justify-start'>
                        <a className="btn btn-info btn-outline bg-neutral" href={cv} download="resume.pdf">
                            Download CV <Download />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero
