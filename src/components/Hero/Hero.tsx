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
            <div className="hero-content flex-col lg:flex-row-reverse bg-slate-800 bg-opacity-30 md:rounded-tr-lg md:rounded-bl-lg h-full md:h-auto"
                style={{
                    borderBottom: '4px solid #36D399',
                    borderRight: '4px solid #FBAF3A'
                }}
            >
                <div className='md:p-0 py-4'>
                    <img src={hero} className="w-full max-w-xs rounded-full bg-gradient-to-r from-[#FF7F28] to-[#36D399] p-1" alt='No img' />
                </div>
                <div className='p-4 text-center md:text-start'>
                    <h1 className="text-5xl font-bold text-slate-200 flex flex-col sm:flex-row justify-center md:justify-start">
                        Hi I&apos;m&nbsp;
                        <span className="text-warning border-b-2 border-info xs:w-full cursor-pointer">Jemuel Lupo</span>
                    </h1>
                    <p className="mt-6 text-success text-2xl">Software Engineer</p>
                    <p className="mt-2 md:mx-0 mx-10 text-white text-md">Empowering businesses with streamlined digital systems and organizational efficiency</p>
                    <div className="mt-2 flex justify-center md:justify-start">
                        <a className="btn btn-info btn-outline bg-neutral hover-enlarge" href={cv} download="resume.pdf">
                            Download CV <Download />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero
