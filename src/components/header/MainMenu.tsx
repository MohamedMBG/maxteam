/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

interface DataType {
    navbarPlacement?: string;
    toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const MainMenu = ({ navbarPlacement, toggleSubMenu }: DataType) => {
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement ? navbarPlacement : ""}`} data-in="fadeInDown" data-out="fadeOutUp">
                <li className="dropdown">
                    <Link to="#" className="dropdown-toggle active" data-toggle="dropdown" onClick={toggleSubMenu}>Home</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/">Home Main</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Pages</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/team">Team Style One</Link></li>
                        <li><Link to="/project">Project Showcase</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Services</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/services">Service Version One</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Blog</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/blog-standard">Blog Standard</Link></li>
                        <li><Link to="/blog-with-sidebar">Blog With Sidebar</Link></li>
                        <li><Link to="/blog-2-column">Blog Grid Two column</Link></li>
                        <li><Link to="/blog-3-column">Blog Grid Three column</Link></li>
                        <li><Link to="/blog-single/1">Blog Single</Link></li>
                        <li><Link to="/blog-single-with-sidebar/1">Blog Single With Sidebar</Link></li>
                        <li className="dropdown">
                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Blog Light Version</Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/blog-standard-light">Blog Standard</Link></li>
                                <li><Link to="/blog-with-sidebar-light">Blog With Sidebar</Link></li>
                                <li><Link to="/blog-2-column-light">Blog Grid Two column</Link></li>
                                <li><Link to="/blog-3-column-light">Blog Grid Three column</Link></li>
                                <li><Link to="/blog-single-light/1">Blog Single</Link></li>
                                <li><Link to="/blog-single-with-sidebar-light/1">Blog Single With Sidebar</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><Link to="/contact-us">contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;