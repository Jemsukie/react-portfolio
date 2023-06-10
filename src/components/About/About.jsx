import { useState } from "react"
import { ChevronsUpLeft } from "tabler-icons-react"
import assets from "../../lib/Assets"

const About = () => {
    return (
        <section className="bg-slate-800 pattern py-20" id="about">
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
                        <div className="tooltip md:tooltip-open md:tooltip-right tooltip-info" data-tip="Check these out!"><span>My Skills and Techs</span></div>
                    </h2>
                    <Techs />
                </div>
            </div>
        </div>
    )
}

const Divider = ({ up, down }) => {
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
                I'm a <span className="text-warning">Fullstack Web Developer</span> from Sariaya Quezon (Philippines).
                Turning <span className="text-error">complex</span> problem into a <span className="text-success">simple</span> and <span className="text-info">manageable</span> Web Information System is my forte.
                I earned my Bachelor's degree in <span className="text-success">Information Technology</span> in the year of <span className="text-warning">2021</span>.
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
    const {
        devtools,
        hubspot,
        jest,
        playwright,
        storybook,
        temporal,
        testproject,
        zapier,
        mongodb,
        firebase,
        postgresql,
        cubejs,
        html,
        css,
        js,
        bootstrap,
        tailwind,
        reactjs,
        webflow,
        php,
        graphql,
        expressjs,
        nodejs
    } = assets

    const menuLinks = {
        'frontend': {
            title: 'Frontend Development',
            swap: [
                { brand: 'HTML', image: html },
                { brand: 'CSS', image: css },
                { brand: 'JavaScript', image: js },
                { brand: 'Bootstrap', image: bootstrap },
                { brand: 'Tailwind', image: tailwind },
                { brand: 'React JS', image: reactjs },
                { brand: 'Webflow', image: webflow },
            ]
        },
        'backend': {
            title: 'Backend Development',
            swap: [
                { brand: 'JavaScript', image: js },
                { brand: 'PHP', image: php },
                { brand: 'GraphQL', image: graphql },
                { brand: 'Express JS', image: expressjs },
                { brand: 'Node JS', image: nodejs },
            ]
        },
        'database': {
            title: 'Database Administration',
            swap: [
                { brand: 'MongoDB', image: mongodb },
                { brand: 'Firebase', image: firebase },
                { brand: 'PostgreSQL', image: postgresql },
                { brand: 'CubeJS', image: cubejs },
            ]
        },
        'testing': {
            title: 'QA Testing',
            swap: [
                { brand: 'Playwright', image: playwright },
                { brand: 'Jest', image: jest },
                { brand: 'Storybook', image: storybook },
                { brand: 'Testproject', image: testproject },
                { brand: 'Chrome Devtools and Extensions', image: devtools },
            ]
        },
        'automation': {
            title: 'Workflow Automation',
            swap: [
                { brand: 'HubSpot', image: hubspot },
                { brand: 'Zapier', image: zapier },
                { brand: 'Temporal IO', image: temporal },
            ]
        },
    }

    const changeSwapOn = (item) => setSwapOn(
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
        <label className="swap swap-flip justify-start">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            <div className="swap-on">{swapOn}</div>
            <div className="swap-off">{menu}</div>
        </label>
    )
}

const ItemAvatars = ({ image }) => {
    return (
        <div className="avatar mr-2">
            <div className="w-4 rounded">
                <img src={image} alt="No img" />
            </div>
        </div>)
}

export default About
