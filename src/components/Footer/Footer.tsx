import { assets } from '../../lib/asset-helper'
import { goToSection } from '../../lib/link-helper'
import { TReferenceProps } from '../../lib/props-types'

const
    Footer = ({ reference, className }: TReferenceProps) => {
        const { hero } = assets
        const dateYear = new Date().getFullYear()

        return (
            <footer className={`footer footer-center p-4 text-slate-200 justify-center ${className}`}>
                <div className="flex md:flex-row flex-col-reverse">
                    <p>Copyright ©{dateYear} - Jemuel Lupo</p>
                    <div className="avatar mr-2">
                        <div className="w-16 rounded-full border-slate-200 hover:border-info border-2 hover-enlarge">
                            <img onClick={() => goToSection(reference)} src={hero} className="cursor-pointer" alt="No img" />
                        </div>
                    </div>
                </div>

            </footer>
        )
    }

export default Footer
