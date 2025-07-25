import { Link } from "react-router-dom";
import NewsletterV2 from '../newsletter/NewsletterV2';
import FooterSocial from '../social/FooterSocial';
import logoLight from '/assets/img/logo-light.png'
import logo from '/assets/img/logo.png'

interface DataType {
    sectionClass?: string;
    lightMode?: boolean;
}

const FooterV1 = ({ sectionClass, lightMode }: DataType) => {
    return (
        <>
            <footer className={`${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="f-items">
                        <div className="row">
                            <div className="col-lg-6 footer-item about pr-120 pr-md-15 pr-xs-15 pr-md-15 pr-xs-15">
                                <div className="top">
                                    {lightMode ?
                                        <img src={logo} alt="Image Not Found" /> :
                                        <img src={logoLight} alt="Image Not Found" />
                                    }
                                </div>
                                <ul className="address-list">
                                    <li>
                                        <h4>Australia</h4>
                                        <p>
                                            Travel World House, Level 7, 17 Jones St, NSW, 2060
                                        </p>
                                    </li>
                                    <li>
                                        <h4>Dubai</h4>
                                        <p>
                                            Sheikh Mohammed bin salah, #234 B - Downtown - Dubai
                                        </p>
                                    </li>
                                </ul>
                                <NewsletterV2 />
                            </div>
                            <div className="col-lg-5 offset-lg-1 footer-item">
                                <h4 className="widget-title">Useful Link</h4>
                                <ul className="useful-link">
                                    <li><Link to="/about-us">About Us</Link></li>
                                    <li><Link to="/contact-us">Contact</Link></li>
                                    <li><Link to="/faq">FAQS</Link></li>
                                    <li><Link to="/services">Services</Link></li>
                                    <li><Link to="/about-2">Term & Conditions</Link></li>
                                    <li><Link to="/about-us">Privacy Policy</Link></li>
                                    <li><Link to="/about-2">Careers</Link></li>
                                    <li><Link to="/contact-us">Help Desk</Link></li>
                                </ul>
                                <div className="footer-contact">
                                    <ul>
                                        <li>
                                            <a href="mailto:kodiji.mohammed@gmail.com">kodiji.mohammed@gmail.com</a>
                                        </li>
                                        <li>
                                            <a href="tel:+212638553480">+212 638-553480</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="footer-social">
                                    <FooterSocial />
                                </ul>
                            </div>
                            <div className="col-lg-6 text-end">
                                <p>
                                    Copyright &copy; {(new Date().getFullYear())} MaxTeam Visuals. All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV1;