import { Link } from "react-router-dom";
import NewsletterV2 from '../newsletter/NewsletterV2';
import FooterSocial from '../social/FooterSocial';

const FooterV3 = () => {
    return (
        <>
            <footer>
                <div className="footer-box">
                    <div className="container">
                        <div className="f-items">
                            <div className="row">
                                <div className="col-lg-6 footer-item about pr-120 pr-md-15 pr-xs-15 pr-md-15 pr-xs-15">
                                    <div className="top">
                                        <h2>Get Support?</h2>
                                        <a className="quick-btn" href="mailto:someone@example.com">
                                            <i className="fas fa-long-arrow-right" />
                                        </a>
                                    </div>
                                    <ul className="address-list">
                                        <li>
                                            <h4>Nador</h4>
                                            <p>
                                                Oriental Region, Morocco
                                            </p>
                                        </li>
                                        <li>
                                            <h4>Oujda</h4>
                                            <p>
                                                Oriental Region, Morocco
                                            </p>
                                        </li>
                                    </ul>
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
                                    <NewsletterV2 />
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
                </div>
            </footer>
        </>
    );
};

export default FooterV3;