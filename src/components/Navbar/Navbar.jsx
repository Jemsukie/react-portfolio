import { useEffect, useMemo, useRef, useState } from "react"
import { ChevronsUpLeft, Home, Menu, ThreeDCubeSphere, HandStop } from 'tabler-icons-react'
import { goToSection } from "../../lib/link-helper"

const Navbar = ({ children, referenceLinks }) => {
    const { hero, about, projects, contact } = referenceLinks
    const navLinks = [
        { title: 'Home', link: hero, icon: <Home /> },
        { title: 'About', link: about, icon: <ChevronsUpLeft /> },
        { title: 'Projects', link: projects, icon: <ThreeDCubeSphere /> },
        { title: 'Say Hi', link: contact, icon: <HandStop /> },
    ]

    const navbarRef = useRef(null)
    const childrenRef = useRef(null)
    const [bodyPadding, setBodyPadding] = useState(null)
    const [childPosition, setChildPosition] = useState(null)
    const [scrollDir, setScrollDir] = useState({ from: 0, to: 0 })

    const childrenComponent = (
        <div ref={childrenRef} style={{ paddingTop: `${bodyPadding}px` }}>
            {children}
        </div>
    )

    useEffect(() => {
        // Add padding to the body to offset the fixed navbar
        setBodyPadding(navbarRef.current.offsetHeight)
    }, [])

    useEffect(() => {
        setScrollDir({
            from: scrollDir.to,
            to: childPosition
        })
        // eslint-disable-next-line
    }, [childPosition])

    const direction = useMemo(() => scrollDir.to < scrollDir.from ? 'up' : 'down', [scrollDir])
    const positionClass = useMemo(() => direction === 'down' ? 'absolute' :
        childPosition > bodyPadding ? 'fixed' :
            direction === 'up' ? 'fixed' :
                'absolute'
        , [bodyPadding, childPosition, direction])

    // Attach scroll event listener to window
    window.addEventListener('scroll', () =>
        childrenRef.current && setChildPosition(childrenRef.current.getBoundingClientRect().top * -1)
    )

    return (
        <>
            <nav ref={navbarRef} className={`${positionClass} top-0 z-10 w-full shadow-2xl bg-secondary border-b-2 border-info`}>
                <div className="container mx-auto justify-between max-w-8xl flex p-5 flex-row items-center">
                    <div onClick={() => goToSection(hero)} className="flex title-font font-medium items-center text-gray-50 mb-4 md:mb-0">
                        <span className="ml-3 text-xl font-bold text-accent cursor-pointer">JemFolio</span>
                    </div>

                    <WebMenu navLinks={navLinks} />
                    <MobileMenu navLinks={navLinks} />
                </div>
            </nav >
            {childrenComponent}
        </>
    )
}

const WebMenu = ({ navLinks }) => {
    return (<div className="sm:inline-flex hidden p-4">
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {navLinks.map(n => (
                <div key={n.title} onClick={() => goToSection(n.link)} className="md:mx-2 mx-px font-bold hover:border-accent"><span className={`hover:text-info flex btn ${n.title === 'Say Hi' ? 'bg-neutral text-info btn-outline' : 'text-slate-200'}`}>{n.icon}{n.title}</span></div>
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
                    <li key={n.title}><a className="btn btn-ghost" onClick={() => goToSection(n.link)} href={n.href}>{n.icon}{n.title}</a> </li>
                ))}
            </ul>
        </div>
    </div>)
}

export default Navbar
