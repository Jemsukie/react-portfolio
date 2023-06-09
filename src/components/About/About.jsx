import { ChevronsUpLeft } from "tabler-icons-react"

const About = () => {
    return (
        <section className="bg-gray-800 pattern py-20" id="about">
            <div className="max-w-5xl px-6 mx-auto text-center flex justify-center md:justify-start">
                <h2 className="text-2xl font-semibold text-white border-b-2 border-warning w-fit flex">
                    <ChevronsUpLeft />
                    About Me
                </h2>
            </div>

            <div className="flex container mx-auto my-4 flex-col lg:flex-row">
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
                    <h2 className="card-title">My Skills</h2>
                    <ul>
                        <li>Frontend Developer</li>
                        <li>Backend Developer</li>
                        <li>Database Administrator</li>
                        <li>QA Tester</li>
                        <li>Automation Specialist</li>
                    </ul>
                </div></div>
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

            <div className="stat place-items-center">
                <div className="stat-title">Professional Experience</div>
                <div className="stat-value text-secondary">2 years</div>
                <div className="stat-desc text-secondary">Fullstack Web Development</div>
            </div>

            <div className="stat place-items-center">
                <div className="stat-title">Availability</div>
                <div className="stat-value">24/7</div>
                <div className="stat-desc">Message me anytime</div>
            </div>

        </div>
    )
}

export default About
