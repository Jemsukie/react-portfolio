
import { TransitionLeft, TransitionRight } from 'tabler-icons-react'
import { TNavLinksProps, TReferenceLinksProps, getNavlinks } from '../components/Navbar/Navbar'
import { goToSection } from '../lib/link-helper'
import Footer from '../components/Footer/Footer'

const Drawer = ({ onClickBurger, isChecked = false, referenceLinks }: { onClickBurger: () => void, isChecked?: boolean, referenceLinks: TReferenceLinksProps }) => {
    const navLinks: TNavLinksProps[] = getNavlinks({ referenceLinks })

    return <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={isChecked} onChange={() => { }} />
        <div className="drawer-content">
            {/* Page content here */}
            {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}
        </div>
        <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

            <div className='h-full border-r-2 border-info'>
                <div className="p-5 w-80 min-h-full text-base-content bg-slate-800 flex justify-between flex-col">
                    <div className='flex justify-between'>
                        <ul className="flex flex-col items-start">
                            {navLinks.map(n => (
                                <li key={n.title} className='flex justify-start'><div className="btn btn-ghost text-slate-200" onClick={() => {
                                    onClickBurger()
                                    goToSection(n.link)
                                }}>
                                    {n.icon}
                                    {n.title.toUpperCase()}</div> </li>
                            ))}
                        </ul>
                        <div className='flex justify-end align-bottom'>
                            <label className="swap swap-rotate btn bg-neutral text-info btn-outline">

                                {/* this hidden checkbox controls the state */}
                                <input type="checkbox" checked={isChecked} onChange={onClickBurger} />

                                <div className="swap-on"><TransitionLeft /></div>
                                <div className="swap-off"><TransitionRight /></div>
                            </label>
                        </div>
                    </div>
                    <Footer reference={referenceLinks.hero} />
                </div>

            </div>
        </div>
    </div >
}

export default Drawer
