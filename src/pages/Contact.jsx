import { MapPin, Phone, Mail, Clock } from 'lucide-react';

function Contact() {
    return (
        <div className="page-container contact-page">
            <div className="page-header text-center">
                <h1 className="page-title">CONTACT US</h1>
                <p className="page-subtitle">We're here to help with your fire protection and water infrastructure needs.</p>
            </div>

            <div className="contact-layout">
                <div className="contact-info-panel">
                    <h3>Get in Touch</h3>
                    <p className="contact-intro">Whether you need a quote for a new project, require maintenance, or have a question about our products, our team is ready to assist you.</p>

                    <div className="contact-method">
                        <div className="contact-icon"><MapPin color="#c0392b" /></div>
                        <div>
                            <strong>Office</strong>
                            <p>Simurali, Nadia</p>
                        </div>
                    </div>

                    <div className="contact-method">
                        <div className="contact-icon"><Phone color="#c0392b" /></div>
                        <div>
                            <strong>Phone</strong>
                            <p>+91 9239689075</p>
                        </div>
                    </div>

                    <div className="contact-method">
                        <div className="contact-icon"><Mail color="#c0392b" /></div>
                        <div>
                            <strong>Email</strong>
                            <p>Sales: sales@pmenterprise.com<br />Info: info@pmenterprise.com</p>
                        </div>
                    </div>

                    <div className="contact-method">
                        <div className="contact-icon"><Clock color="#c0392b" /></div>
                        <div>
                            <strong>Business Hours</strong>
                            <p>Monday - Friday: 8:00 AM - 5:00 PM EST<br />Emergency Support: 24/7</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;
