import { assets } from '../../lib/asset-helper'
import { Download } from 'tabler-icons-react'
import { TReferenceProps } from '../../lib/props-types'
import SectionWrapper from '../../layout/SectionWrapper'
import ScrollAnimationWrapper from '../../layout/ScrollAnimationWrapper'

const Hero = ({ reference }: TReferenceProps) => {
    const { bg, hero, cv } = assets

    return (
        <section ref={reference} className="hero bg-cover bg-gradient-to-bl"
            style={{
                backgroundImage: `url(${bg})`
            }}>
            <SectionWrapper containerClass={'container-1280'} paddingSectionClass={'padding-section-128'}>
                <div className="hero-content flex-col lg:flex-row-reverse bg-slate-800 bg-opacity-30 md:rounded-tr-lg md:rounded-bl-lg h-full md:h-auto"
                    style={{
                        borderBottom: '4px solid #36D399',
                        borderRight: '4px solid #FBAF3A'
                    }}
                >
                    <ScrollAnimationWrapper delay={600}>
                        <div className='md:p-0 py-4'>
                            <img src={hero} className="w-full max-w-xs rounded-full bg-gradient-to-r from-[#FF7F28] to-[#36D399] p-1" alt='No img' />
                        </div>
                    </ScrollAnimationWrapper>
                    <ScrollAnimationWrapper delay={200}>
                        <div className='p-4 text-center md:text-start'>
                            <h1 className="text-5xl font-bold text-slate-200 flex flex-col sm:flex-row justify-center md:justify-start">
                                Hi I&apos;m&nbsp;
                                <div className='flex flex-col'>
                                    <span className="text-warning xs:w-full cursor-pointer z-10">Jemuel Lupo</span>
                                    {/* <progress className="progress w-full progress-success bg-transparent z-0" /> */}
                                </div>
                            </h1>
                            <p className="mt-2 text-success text-2xl">Software Engineer</p>
                            <p className="mt-2 md:mx-0 mx-10 text-white text-md">I help businesses acquire efficient digitized management over their organizational workflow</p>
                            <div className="mt-2 flex justify-center md:justify-start">
                                <a className="btn btn-info btn-outline bg-neutral hover-enlarge" href={cv} download="resume.pdf">
                                    Download CV <Download />
                                </a>
                            </div>

                        </div>
                    </ScrollAnimationWrapper>
                </div>
            </SectionWrapper>
        </section>
    )
}

export default Hero
