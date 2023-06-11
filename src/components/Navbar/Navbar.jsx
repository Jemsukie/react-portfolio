import { useEffect, useRef } from "react";
import { ChevronsUpLeft, Home, Menu, ThreeDCubeSphere, HandStop } from 'tabler-icons-react'

const Navbar = () => {
    const navLinks = [
        { title: 'Home', href: '#home', icon: <Home /> },
        { title: 'About', href: '#about', icon: <ChevronsUpLeft /> },
        { title: 'Projects', href: '#project', icon: <ThreeDCubeSphere /> },
        { title: 'Say Hi', href: '#contact', icon: <HandStop /> },
    ]

    const navbarRef = useRef(null);

    useEffect(() => {
        // Add padding to the body to offset the fixed navbar
        document.body.style.paddingTop = `${navbarRef.current.offsetHeight}px`;
    }, []);

    return (
        <nav ref={navbarRef} className="fixed top-0 z-10 w-full shadow-2xl bg-secondary border-b-2 border-info">
            <div className="container mx-auto justify-between max-w-8xl flex p-5 flex-row items-center">
                <a href="#home" className="flex title-font font-medium items-center text-gray-50 mb-4 md:mb-0">
                    <span className="ml-3 text-xl font-bold text-accent">Portfolio</span>
                </a>

                <WebMenu navLinks={navLinks} />
                <MobileMenu navLinks={navLinks} />
            </div>
        </nav >

    )

}

const WebMenu = ({ navLinks }) => {
    return (<div className="sm:inline-flex hidden p-4">
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {navLinks.map(n => (
                <a key={n.title} href={n.href} className="md:mx-2 mx-px font-bold hover:border-accent"><span className={`hover:text-info flex btn ${n.title === 'Say Hi' ? 'bg-neutral text-info btn-outline' : 'text-slate-200'}`}>{n.icon}{n.title}</span></a>
            ))}
        </nav>
    </div>)
}

const MobileMenu = ({ navLinks }) => {
    return (<div className="md:hidden sm:hidden inline-flex p-4">
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="mx-2 btn btn-outline btn-info font-bold border-b-2 border-primary hover:border-accent"><Menu /></label>
            <ul id="navitem" tabIndex={0} className="dropdown-content menu shadow bg-base-100 rounded-box w-40 border-2 border-primary">
                {navLinks.map(n => (
                    <li key={n.title}><a className="btn btn-ghost" href={n.href}>{n.icon}{n.title} </a></li>
                ))}
            </ul>
        </div>
    </div>)
}

export default Navbar
