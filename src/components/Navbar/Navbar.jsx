import { useEffect, useRef } from "react";

const Navbar = () => {
    const navLinks = [
        { title: 'Home', href: '#home' },
        { title: 'About Me', href: '#about' },
        { title: 'Projects', href: '#project' },
        { title: 'Testimony', href: '#testimony' },
    ]

    const navbarRef = useRef(null);

    useEffect(() => {
        // Add padding to the body to offset the fixed navbar
        document.body.style.paddingTop = `${navbarRef.current.offsetHeight}px`;
    }, []);

    return (<nav ref={navbarRef} className="fixed top-0 z-10 w-full bg-white shadow-lg">
        <div className="container mx-auto justify-between max-w-8xl flex p-5 flex-row items-center">
            <a href="#" className="flex title-font font-medium items-center text-gray-50 mb-4 md:mb-0">
                <span className="ml-3 text-xl font-bold text-success">Devfolio</span>
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
    return (<div className="sm:inline-flex hidden">
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {navLinks.map(n => (
                <a key={n.title} href={n.href} className="mx-2 btn btn-outline btn-info font-bold p-4 border-b-2 border-primary hover:border-accent">{n.title}</a>
            ))}
        </nav>
    </div>)
}

const MobileMenu = ({ navLinks }) => {
    return (<div className="md:hidden sm:hidden inline-flex">
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="mx-2 btn btn-outline btn-info font-bold p-4 border-b-2 border-primary hover:border-accent"><MenuIcon /></label>
            <ul id="navitem" tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 border-2 border-primary">
                {navLinks.map(n => (
                    <a key={n.title} href={n.href}>{n.title}</a>
                ))}
            </ul>
        </div>
    </div>)
}

export default Navbar
