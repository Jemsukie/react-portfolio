import assets from "../../lib/Assets"

const Footer = () => {
    const { hero } = assets

    return (
        <footer className="footer footer-center p-4 bg-secondary text-slate-200 border-t-2 border-info">
            <div className="flex">
                <p>Copyright ©2023 - Jemuel Lupo</p>
                <div className="avatar mr-2">
                    <div className="w-16 rounded-full border-slate-200 border-2">
                        <a href="#home"><img src={hero} alt="No img" /></a>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
