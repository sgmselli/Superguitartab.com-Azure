import { Link } from "react-router-dom"
import { LogoAndTextWhite } from "../Logo"
import { FAQ } from "./FAQ"

export const Footer: React.FC = () => {
    return (
        <div className="w-full flex flex-col items-center ">
            <div className="w-[90%] max-w-[1200px]">
                <FAQ />
            </div>
            <footer className="w-full footer lg:footer-horizontal primary-color-bg text-white py-20 px-8 lg:px-12 xl:px-30 mt-25 text-align-center">
                <aside className="max-w-100 flex flex-col gap-6">
                    <div className="w-70">
                        <LogoAndTextWhite />
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="">
                            Download high quality guitar music sheets at the click of a button with superguitartab.com. 
                        </p>
                        <p className="text-gray-400 font-medium">
                            Copyright © 2025 - All rights reserved
                        </p>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title">Links</h6>
                    {/* <a className="link link-hover">Sign in</a> */}
                    <Link to="/browse" className="link link-hover">Browse songs</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Genres</h6>
                    <Link to="/category/genre/classical" className="link link-hover">Classical</Link>
                    <Link to="/category/genre/country" className="link link-hover">Country</Link>
                    <Link to="/category/genre/folk" className="link link-hover">Folk</Link>
                    <Link to="/category/genre/indie" className="link link-hover">Indie</Link>
                    <Link to="/category/genre/metal" className="link link-hover">Metal</Link>
                    <Link to="/category/genre/pop" className="link link-hover">Pop</Link>
                    <Link to="/category/genre/rock" className="link link-hover">Rock</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Styles</h6>
                    <Link to="/category/style/finger-picking" className="link link-hover">Finger picking</Link>
                    <Link to="/category/style/strumming" className="link link-hover">Strumming</Link>
                    <Link to="/category/style/electric" className="link link-hover">Electric</Link>
                    <Link to="/category/style/bass" className="link link-hover">Bass</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <Link to="/terms-and-conditions" className="link link-hover">Terms & conditions</Link>
                    <Link to="/privacy-policy" className="link link-hover">Privacy policy</Link>
                </nav>
            </footer>
        </div>
    )
}