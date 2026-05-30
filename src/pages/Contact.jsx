import { Phone, Mail, Clock, MapPin } from 'lucide-react';
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

                    <div className="contact-method">
                        <div className="contact-icon"><Phone color="var(--accent)" /></div>
                        <div>
                            <strong>Phone</strong>
                            <p>+919239689075</p>
                        </div>
                    </div>

                    <div className="contact-method">
                        <div className="contact-icon"><Mail color="var(--accent)" /></div>
                        <div>
                            <strong>Email</strong>
                            <p>pmenterprisesfiresafety@gmail.com</p>
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
