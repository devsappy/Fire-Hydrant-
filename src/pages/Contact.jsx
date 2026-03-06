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
                            <strong>Headquarters</strong>
                            <p>123 Hydrant Way<br />Fire City, FC 54321</p>
                        </div>
                    </div>

                    <div className="contact-method">
                        <div className="contact-icon"><Phone color="#c0392b" /></div>
                        <div>
                            <strong>Phone</strong>
                            <p>Main: (555) 123-4567<br />Support: (555) 987-6543</p>
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

                <div className="contact-form-panel">
                    <h3>Send us a Message</h3>
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" placeholder="John" />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="john@example.com" />
                        </div>
                        <div className="form-group">
                            <label>Subject</label>
                            <select>
                                <option>Request a Quote</option>
                                <option>Product Information</option>
                                <option>Service & Maintenance</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows="5" placeholder="How can we help you today?"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-full btn-large">SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
