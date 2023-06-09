import { useEffect, useRef } from "react";
import { ChevronsUpLeft, Home, Menu, ThreeDCubeSphere, DeviceLaptop } from 'tabler-icons-react'

const Navbar = () => {
    const navLinks = [
        { title: 'Home', href: '#home', icon: <Home /> },
        { title: 'About', href: '#about', icon: <ChevronsUpLeft /> },
        { title: 'Projects', href: '#project', icon: <ThreeDCubeSphere /> },
        { title: 'Works', href: '#project', icon: <DeviceLaptop /> },
    ]

    const navbarRef = useRef(null);

    useEffect(() => {
        // Add padding to the body to offset the fixed navbar
        document.body.style.paddingTop = `${navbarRef.current.offsetHeight}px`;
    }, []);

    return (<nav ref={navbarRef} className="fixed top-0 z-10 w-full shadow-2xl bg-secondary border-b-2 border-info">
        <div className="container mx-auto justify-between max-w-8xl flex p-5 flex-row items-center">
            <a href="#home" className="flex title-font font-medium items-center text-gray-50 mb-4 md:mb-0">
                <span className="ml-3 text-xl font-bold text-accent">Devfolio</span>
            </a>

            <WebMenu navLinks={navLinks} />
            <MobileMenu navLinks={navLinks} />
        </div>
    </nav>

    )

}

const MenuIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
            />
        </svg>
    )
}

const WebMenu = ({ navLinks }) => {
    return (<div className="sm:inline-flex hidden p-4">
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {navLinks.map(n => (
                <a key={n.title} href={n.href} className="mx-2 font-bold hover:border-accent"><span className="text-slate-200 hover:text-info flex btn">{n.icon}{n.title}</span></a>
            ))}
        </nav>
    </div>)
}

const MobileMenu = ({ navLinks }) => {
    return (<div className="md:hidden sm:hidden inline-flex p-4">
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="mx-2 btn btn-outline btn-info font-bold border-b-2 border-primary hover:border-accent"><Menu /></label>
            <ul id="navitem" tabIndex={0} className="dropdown-content menu shadow bg-base-100 rounded-box w-52 border-2 border-primary">
                {navLinks.map(n => (
                    <li key={n.title}><a className="btn btn-ghost" href={n.href}>{n.title}</a></li>
                ))}
            </ul>
        </div>
    </div>)
}

export default Navbar
