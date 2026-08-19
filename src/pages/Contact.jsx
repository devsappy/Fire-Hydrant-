import { Phone, Mail, Clock, MapPin, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { breadcrumbSchema } from '../utils/schema';

function Contact() {
    return (
        <div className="page-container contact-page">
            <SEO
                title="Contact Us"
                description="Get in touch with PM Enterprises for fire protection installation, equipment supply, and maintenance. We provide services across all over West Bengal."
                keywords="contact PM Enterprises, fire safety company phone number, fire protection services West Bengal, emergency support"
                url="/contact"
                schema={breadcrumbSchema([
                    { name: 'Home', path: '/' },
                    { name: 'Contact', path: '/contact' },
                ])}
            />
            <div className="page-header text-center">
                <h1 className="page-title">CONTACT US</h1>
                <p className="page-subtitle">We're here to help with your fire protection and water infrastructure needs.</p>
            </div>

            <div className="contact-layout">
                <div className="contact-info-panel">
                    <h3>Get in Touch</h3>
                    <p className="contact-intro">Whether you need a quote for a new project, require maintenance, or have a question about our products, our team is ready to assist you.</p>

                    <div className="contact-cta-row">
                        <a href="tel:+919239689075" className="btn btn-primary">
                            <Phone size={16} /> Call Now
                        </a>
                        <a
                            href="https://wa.me/919239689075?text=Hi%20PM%20Enterprises%2C%20I%27d%20like%20a%20quote%20for%20fire%20safety%20products%2Finstallation."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-whatsapp"
                        >
                            <MessageCircle size={16} /> WhatsApp Us
                        </a>
                    </div>

                    <div className="contact-method">
                        <div className="contact-icon"><Phone color="var(--accent)" /></div>
                        <div>
                            <strong>Phone</strong>
                            <p><a href="tel:+919239689075" className="contact-inline-link">+91 92396 89075</a></p>
                        </div>
                    </div>

                    <div className="contact-method">
                        <div className="contact-icon"><Mail color="var(--accent)" /></div>
                        <div>
                            <strong>Email</strong>
                            <p><a href="mailto:pmenterprisesfiresafety@gmail.com" className="contact-inline-link">pmenterprisesfiresafety@gmail.com</a></p>
                        </div>
                    </div>

                    <div className="contact-method">
                        <div className="contact-icon"><MapPin color="var(--accent)" /></div>
                        <div>
                            <strong>Office Location</strong>
                            <p>Simurali, Nadia, West Bengal</p>
                            <a
                                href="https://maps.app.goo.gl/B7NpTccdf1RhgRoYA?g_st=aw"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-map-link"
                            >
                                Open in Google Maps →
                            </a>
                        </div>
                    </div>

                    <div className="contact-method">
                        <div className="contact-icon"><Clock color="var(--accent)" /></div>
                        <div>
                            <strong>Business Hours</strong>
                            <p>Mon–Fri: 8 AM to 10 PM<br />Saturday: 8 AM to 8 PM<br />Sunday: 8 AM to 4 PM<br />Emergency Support: 24/7</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;
