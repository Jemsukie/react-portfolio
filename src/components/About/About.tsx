import { ReactNode, useState } from 'react'
import { ChevronsUpLeft } from 'tabler-icons-react'
import { menuLinks } from '../../lib/asset-helper'
import { TReferenceProps } from '../../lib/props-types'
import { expStats } from '../../lib/config'
import SectionWrapper from '../../layout/SectionWrapper'
import ScrollAnimationWrapper from '../../layout/ScrollAnimationWrapper'

const About = ({ reference }: TReferenceProps) => {
    return (
        <section ref={reference} className="bg-slate-800 pattern">
            <SectionWrapper containerClass={'container-1280'} paddingSectionClass={'py-[1em] sm:py-[2em] lg:py-[8em]'}>
                <ScrollAnimationWrapper delay={200}>
                    <div className="py-6">
                        <div className="max-w-5xl px-6 mx-auto text-center flex items-center md:items-center flex-col" id="project">
                            <h2 className="text-2xl font-semibold text-slate-200 w-fit flex"> <ChevronsUpLeft /> About Me</h2>
                        </div>
                    </div>
                </ScrollAnimationWrapper>

                <div className="flex container w-full xl:w-4/5 mx-auto flex-col lg:flex-row max-w-6xl py-4">
                    <ScrollAnimationWrapper delay={400}>
                        <SkillSet />
                    </ScrollAnimationWrapper>
                    <Divider up={
                        <ScrollAnimationWrapper delay={200}>
                            <Par />
                        </ScrollAnimationWrapper>
                    } down={
                        <ScrollAnimationWrapper delay={400}>
                            <Stat />
                        </ScrollAnimationWrapper>
                    } />
                </div>
            </SectionWrapper>
        </section>
    )
}

const SkillSet = () => {
    return (
        <div className="flex justify-center h-full">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">
                        <div className="md:tooltip tooltip-open md:tooltip-right md:tooltip-info" data-tip="Check these out!">
                            <span>My Skills and Techs&nbsp;</span>
                            <span className="md:hidden badge badge-primary text-xs badge-outline cursor-pointer">Check these out!</span>
                        </div>
                    </h2>
                    <Techs />
                </div>
            </div>
        </div>
    )
}

const Divider = ({ up, down }: { up: ReactNode, down: ReactNode }) => {
    return (
        <div className="flex flex-col w-full border-opacity-50">
            <div className="grid h-fit card rounded-box place-items-center">{up}</div>
            <div className="divider"></div>
            <div className="grid h-fit card rounded-box place-items-center">{down}</div>
        </div>
    )
}

const Par = () => {
    return (
        <div className="max-w-5xl px-6 mx-auto text-center">
            <p className='text-slate-100'>
                I'm a Software Engineer from Sariaya Quezon (Philippines).
                Turning complex problem into a simple and manageable Web Information System is my forte.
                I earned my Bachelor's degree in Information Technology in the year of 2021.
            </p>
        </div>
    )
}

const Stat = () => {
    return (
        <div className="stats shadow stats-vertical md:stats-horizontal">
            {expStats.map((s, idx) => {
                return <div className={`stat place-items-center ${s.bg || ''}`} key={idx}>
                    <div className={`stat-title ${s.bg ? 'text-slate-400' : ''}`}>{s.title}</div>
                    <div className={`stat-value ${s.bg ? 'text-slate-100' : ''}`}>{s.value}</div>
                    <div className={`mt-2 stat-desc ${s.bg ? 'text-slate-100' : ''}`}>{s.desc}</div>
                </div>
            })}
        </div>
    )
}

const Techs = () => {
    const [swapOn, setSwapOn] = useState(<></>)
    const changeSwapOn = (item: string) => setSwapOn(
        <ul className="text-slate-800">
            {menuLinks[item].swap.map((s, idx) => <li key={idx}><ItemAvatars image={s.image} />{s.brand}</li>)}
        </ul>
    )

    const menu = (
        <ul className="text-slate-800">
            {Object.entries(menuLinks).map(([key, value]) => <li key={key}
                onClick={() => { changeSwapOn(key) }}
                className="hover:border-success border-b-2 border-transparent"
            >{value.title}</li>)}
        </ul>
    )

    return (
        <label className="swap swap-flip justify-start w-fit">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            <div className="swap-on">{swapOn}</div>
            <div className="swap-off">{menu}</div>
        </label>
    )
}

const ItemAvatars = ({ image }: { image: string }) => {
    return (
        <div className="avatar mr-2">
            <div className="w-4 rounded">
                <img src={image} alt="No img" />
            </div>
        </div>)
}

export default About
