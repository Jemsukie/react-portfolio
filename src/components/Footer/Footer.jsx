import { assets } from "../../lib/asset-helper"
import { goToSection } from "../../lib/link-helper"

const Footer = ({ reference }) => {
    const { hero } = assets

    return (
        <footer className="footer footer-center p-4 bg-secondary text-slate-200 border-t-2 border-info">
            <div className="flex">
                <p>Copyright ©2023 - Jemuel Lupo</p>
                <div className="avatar mr-2">
                    <div className="w-16 rounded-full border-slate-200 border-2">
                        <img onClick={() => goToSection(reference)} src={hero} className="cursor-pointer" alt="No img" />
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
