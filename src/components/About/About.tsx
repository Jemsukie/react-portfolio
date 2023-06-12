import React, { ReactNode, useState } from 'react'
import { ChevronsUpLeft } from 'tabler-icons-react'
import { menuLinks } from '../../lib/asset-helper'
import { TReferenceProps } from '../../lib/props-types'

const About = ({ reference }: TReferenceProps) => {
    return (
        <section ref={reference} className="bg-slate-800 pattern py-20">
            <div className="max-w-5xl px-6 mx-auto text-center flex justify-center md:justify-start">
                <h2 className="text-2xl font-semibold text-slate-200 border-b-2 border-warning w-fit flex">
                    <ChevronsUpLeft />
                    About Me
                </h2>
            </div>

            <div className="flex container w-full xl:w-4/5 mx-auto my-4 flex-col lg:flex-row">
                <SkillSet />
                <Divider up={<Par />} down={<Stat />} />
            </div>

        </section>
    )

}

const SkillSet = () => {
    return (
        <div className="flex justify-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">
                        <div className="md:tooltip md:tooltip-open md:tooltip-right tooltip-info" data-tip="Check these out!">
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

const Divider = ({ up, down }: {up: ReactNode, down: ReactNode}) => {
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
            <p className="mt-4 text-slate-100">
                I&apos;m a <span className="text-warning">Fullstack Web Developer</span> from Sariaya Quezon (Philippines).
                Turning <span className="text-error">complex</span> problem into a <span className="text-success">simple</span> and <span className="text-info">manageable</span> Web Information System is my forte.
                I earned my Bachelor&apos;s degree in <span className="text-success">Information Technology</span> in the year of <span className="text-warning">2021</span>.
            </p>
        </div>
    )
}

const Stat = () => {
    return (
        <div className="stats shadow stats-vertical md:stats-horizontal">

            <div className="stat place-items-center">
                <div className="stat-title">Freelance Experience</div>
                <div className="stat-value">3 years</div>
                <div className="stat-desc">Fullstack Development</div>
            </div>

            <div className="stat place-items-center bg-slate-800">
                <div className="stat-title text-slate-400">Professional Experience</div>
                <div className="stat-value  text-slate-100">2 years</div>
                <div className="stat-desc  text-slate-100">Fullstack Web Development</div>
            </div>

            <div className="stat place-items-center">
                <div className="stat-title">Availability</div>
                <div className="stat-value">24/7</div>
                <div className="stat-desc">Message me anytime</div>
            </div>

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
            {Object.keys(menuLinks).map(m => <li key={m}
                onClick={() => { changeSwapOn(m) }}
                className="hover:border-success border-b-2 border-transparent"
            >{menuLinks[m].title}</li>)}
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

const ItemAvatars = ({ image }: {image: string}) => {
    return (
        <div className="avatar mr-2">
            <div className="w-4 rounded">
                <img src={image} alt="No img" />
            </div>
        </div>)
}

export default About
