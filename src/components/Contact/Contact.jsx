import { BrandFacebook, BrandGithub, BrandHipchat, BrandLinkedin, Mail, Phone } from 'tabler-icons-react'

const Contact = () => {

    return (

        <section className="bg-neutral pattern py-20" id="contact" >
            <div className="max-w-5xl px-6 mx-auto text-center flex justify-center">
                <h2 className="text-2xl font-semibold text-slate-200 border-b-2 border-success w-fit flex">
                    <BrandHipchat /> Contact Me
                </h2>
            </div>
            <div className="container w-full md:w-3/4 mx-auto w-xs mt-4 flex-col lg:flex-row-reverse rounded-tr-lg rounded-bl-lg bg-gradient-to-r to-neutral from-slate-500"
                style={{
                    borderBottom: '4px solid #36D399',
                    borderRight: '4px solid #FBAF3A'
                }}
            >
                <div className="flex container mx-auto my-4 flex-col lg:flex-row justify-center p-10">
                    <Card />
                    <Form />
                </div>

            </div>


        </section>

    )
}

const Card = () => {
    const links = [{
        link: 'https://www.linkedin.com/in/jemuel-lupo-96312b176/',
        icon: <BrandLinkedin />
    }, {
        link: 'https://github.com/Jemsukie',
        icon: <BrandGithub />
    }, {
        link: 'https://www.facebook.com/jemuel.lupo/',
        icon: <BrandFacebook />
    },
    ]

    return (<div className='flex items-center mx-auto'>
        <div className="card w-96 shadow-xl bg-slate-950 h-fit text-slate-200">
            <div className="card-body">
                <h2 className="card-title">Let's get in touch!</h2>
                <p>
                    Send me a message now
                    <ul className='my-4'>
                        <li className='flex'><Mail />Email : <span className='text-primary mx-auto'>jemuel.lupo@gmail.com</span></li>
                        <li className='flex'><Phone />Phone : <span className='text-success mx-auto'>(+63) 909 051 1103</span></li>
                    </ul>

                    <div className='flex justify-center'>
                        <ul className="menu menu-horizontal bg-slate-800 rounded-box text-slate-200">
                            {links.map((l, idx) => <li key={idx} className='hover:bg-warning hover:text-slate-800'><a href={l.link} target='_blank' rel="noreferrer">{l.icon}</a></li>)}
                        </ul>
                    </div>

                </p>

            </div>
        </div>
    </div>)
}

const Form = () => {
    return (
        <div className="form-control w-full max-w-sm p-2 mx-auto">
            <label className="label" htmlFor="input-name">
                <span className="label-text text-slate-200">Name</span>
            </label>
            <input id="input-name" type="text" placeholder="Yepp! Your name" className="input input-bordered input-primary w-full max-w-sm text-neutral" />

            <label className="label" htmlFor="input-email">
                <span className="label-text text-slate-200">Email</span>
            </label>
            <input id="input-email" type="email" placeholder="Then enter your email" className="input input-bordered input-primary w-full max-w-sm text-neutral" />

            <label className="label" htmlFor="input-message">
                <span className="label-text text-slate-200">Message</span>
            </label>
            <textarea id="input-message" className="textarea textarea-info" placeholder="Hi there! Anything you wanna tell me?"></textarea>

            <div className="flex justify-center mt-2">
                <input type="submit" className="btn btn-outline btn-primary w-1/2" />
            </div>
        </div>)
}

export default Contact
