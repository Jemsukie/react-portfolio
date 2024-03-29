import { ReactNode, useState } from 'react'
import { ChevronsUpLeft } from 'tabler-icons-react'
import { menuLinks } from '../../lib/asset-helper'
import { TReferenceProps } from '../../lib/props-types'

const About = ({ reference }: TReferenceProps) => {
    return (
        <section ref={reference} className="bg-slate-800 pattern py-20">
            <div className="max-w-6xl px-6 mx-auto text-center flex items-center md:items-start flex-col">
                <h2 className="text-2xl font-semibold text-slate-200 w-fit flex">
                    <ChevronsUpLeft />
                    About Me
                </h2>
                <progress className="progress w-56 progress-warning bg-transparent" />
            </div>

            <div className="flex container w-full xl:w-4/5 mx-auto my-4 flex-col lg:flex-row max-w-6xl">
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
            <p className="mt-4 text-slate-100">
                I&apos;m a <span className="text-warning">Software Engineer</span> from Sariaya Quezon (Philippines).
                Turning <span className="text-error">complex</span> problem into a <span className="text-success">simple</span> and <span className="text-info">manageable</span> Web Information System is my forte.
                I earned my Bachelor&apos;s degree in <span className="text-success">Information Technology</span> in the year of <span className="text-warning">2021</span>.
            </p>
        </div>
    )
}

const Stat = () => {
    const stats = [
        {
            title: 'Freelance Experience',
            value: '2 years',
            desc: 'Fullstack Development'
        },
        {
            title: 'Professional Experience',
            value: '3 years',
            desc: 'Software Engineering',
            bg: 'bg-slate-800'
        },
        {
            title: 'Availability',
            value: '24/7',
            desc: 'Message me anytime'
        }
    ]

    return (
        <div className="stats shadow stats-vertical md:stats-horizontal">
            {stats.map((s, idx) => {
                return <div className={`stat place-items-center ${s.bg || ''}`} key={idx}>
                    <div className={`stat-title ${s.bg ? 'text-slate-400' : ''}`}>{s.title}</div>
                    <div className={`stat-value ${s.bg ? 'text-slate-100' : ''}`}>{s.value}</div>
                    <div className={`stat-desc ${s.bg ? 'text-slate-100' : ''}`}>{s.desc}</div>
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
