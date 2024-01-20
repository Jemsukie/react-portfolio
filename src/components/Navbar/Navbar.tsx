import { MutableRefObject, ReactNode, useEffect, useMemo, useRef, useState } from 'react'
import { ChevronsUpLeft, Home, ThreeDCubeSphere, BrandHipchat, Menu2 } from 'tabler-icons-react'
import { goToSection } from '../../lib/link-helper'

type TReferenceLinksProps = {
    [key: string]: MutableRefObject<null>
}

type TNavLinksProps = {
    title: string
    link: React.MutableRefObject<null>
    icon: JSX.Element
}

const Navbar = ({ children, referenceLinks }: {
    children?: ReactNode
    referenceLinks: TReferenceLinksProps
}) => {
    const { hero, about, projects, contact } = referenceLinks
    const navLinks: TNavLinksProps[] = [
        { title: 'Home', link: hero, icon: <Home /> },
        { title: 'About', link: about, icon: <ChevronsUpLeft /> },
        { title: 'Projects', link: projects, icon: <ThreeDCubeSphere /> },
        { title: 'Say Hi', link: contact, icon: <BrandHipchat /> },
    ]

    const [burgerOn, setBurgerOn] = useState(false)

    const navbarRef = useRef<HTMLDivElement | null>(null)
    const childrenRef = useRef<HTMLDivElement | null>(null)
    const [bodyPadding, setBodyPadding] = useState(0)
    const [childPosition, setChildPosition] = useState(0)
    const [scrollDir, setScrollDir] = useState({ from: 0, to: 0 })

    const childrenComponent = (
        <div ref={childrenRef} style={{ paddingTop: `${bodyPadding}px` }}>
            {children}
        </div>
    )

    useEffect(() => {
        // Add padding to the body to offset the fixed navbar
        setBodyPadding(navbarRef.current?.offsetHeight || 0)
    }, [navbarRef])

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
    const onClickBurger = () => {
        setBurgerOn(prev => !prev)
    }

    window.addEventListener('scroll', () => {
        childrenRef.current && setChildPosition(childrenRef.current?.getBoundingClientRect().top * -1)
        setBurgerOn(false)
    })

    return (
        <>
            <nav ref={navbarRef} className={`${positionClass} top-0 z-10 w-full shadow-2xl bg-secondary border-b-2 border-info`}>
                <div className="container mx-auto justify-between max-w-8xl flex p-5 flex-row items-center">
                    <div onClick={() => goToSection(hero)} className="flex title-font font-medium items-center text-gray-50 my-auto">
                        <span className="ml-3 text-xl font-bold text-accent cursor-pointer">JemFolio</span>
                    </div>
                    <WebMenu navLinks={navLinks} />

                    <button className="btn bg-neutral text-info btn-outline md:hidden sm:hidden" onClick={onClickBurger}><Menu2 /></button>
                </div>
                <TempMobileMenu navLinks={navLinks} show={burgerOn} onClick={onClickBurger} />
            </nav >
            {childrenComponent}
        </>
    )
}

const WebMenu = ({ navLinks }: { navLinks: TNavLinksProps[] }) => {
    return (<div className="sm:inline-flex hidden p-4">
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {navLinks.map(n => (
                <div key={n.title} onClick={() => goToSection(n.link)} className="md:mx-2 mx-px font-bold hover:border-accent">
                    <span className={`hover:text-info flex cursor-pointer ${n.title === 'Say Hi' ? 'btn bg-neutral text-info btn-outline' : 'text-slate-200 mx-2'}`}>{n.icon}{n.title}</span>
                </div>
            ))}
        </nav>
    </div>)
}


const TempMobileMenu = ({ navLinks, show, onClick }: { navLinks: TNavLinksProps[], show: boolean, onClick: () => void }) => {
    return <>
        <div className={`h-fit md:hidden sm:hidden ${!show ? 'hidden' : ''}`}>
            <ul className="flex flex-col items-center">
                {navLinks.map(n => (
                    <li key={n.title}><div className="btn btn-ghost text-slate-200" onClick={() => {
                        onClick()
                        goToSection(n.link)
                    }}>{n.icon}{n.title.toUpperCase()}</div> </li>
                ))}
            </ul>
        </div>
    </>


}

export default Navbar
