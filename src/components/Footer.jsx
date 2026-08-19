import { Link } from 'react-router-dom';

const quickLinks = [
    { to: '/products', label: 'Products' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About Us' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
];

const serviceAreas = ['Kolkata', 'Nadia', 'Kalyani', 'Simurali', 'Krishnanagar', 'Howrah'];

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-grid">
                    <div className="footer-col">
                        <div className="footer-heading">PM Enterprises</div>
                        <p className="footer-text">
                            Industrial &amp; urban fire protection — hydrants, extinguishers, alarms,
                            sprinklers, installation, AMC and compliance audits across West Bengal.
                        </p>
                    </div>

                    <div className="footer-col">
                        <div className="footer-heading">Quick Links</div>
                        <nav className="footer-links" aria-label="Footer">
                            {quickLinks.map((l) => (
                                <Link key={l.to} to={l.to}>{l.label}</Link>
                            ))}
                        </nav>
                    </div>

                    <div className="footer-col">
                        <div className="footer-heading">Get in Touch</div>
                        <a href="tel:+919239689075" className="footer-contact-link">+91 92396 89075</a>
                        <a href="mailto:pmenterprisesfiresafety@gmail.com" className="footer-contact-link">pmenterprisesfiresafety@gmail.com</a>
                        <a
                            href="https://maps.app.goo.gl/B7NpTccdf1RhgRoYA?g_st=aw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-contact-link"
                        >
                            Simurali, Nadia, West Bengal
                        </a>
                        <p className="footer-text">Mon–Fri 8AM–10PM · Sat 8AM–8PM · Sun 8AM–4PM<br />Emergency support: 24/7</p>
                    </div>

                    <div className="footer-col">
                        <div className="footer-heading">Areas We Serve</div>
                        <p className="footer-text">{serviceAreas.join(' · ')} &amp; all of West Bengal</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    &copy; {new Date().getFullYear()} PM Enterprises. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
