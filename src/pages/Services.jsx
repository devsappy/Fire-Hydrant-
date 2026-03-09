import { Wrench, Shield, Droplets, Map, CheckCircle2, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

function Services() {
    const servicesList = [
        {
            icon: <Wrench size={32} color="#c0392b" />,
            title: "Installation & Maintenance",
            description: "Our certified technicians provide full-service installation and ongoing maintenance for all types of municipal and private fire hydrants. We ensure your equipment is always ready when needed most, complying with all local and national fire safety codes."
        },
        {
            icon: <Wrench size={32} color="#1f3a5f" />,
            title: "Fire Extinguisher Setup",
            description: "Expert installation and positioning of fire extinguishers tailored to your premises' specific hazards. We ensure compliance with safety standards and optimal accessibility during emergencies."
        },
        {
            icon: <Shield size={32} color="#c0392b" />,
            title: "AR CO2 Extinguisher Setup",
            description: "Specialized setup of Carbon Dioxide (CO2) suppression systems for critical electrical and high-value equipment zones, ensuring clean, residue-free extinguishing capabilities."
        },
        {
            icon: <Bell size={32} color="#1f3a5f" />,
            title: "Fire Alarm System",
            description: "Comprehensive installation and integration of advanced fire alarm systems, including control panels, smoke detectors, and manual call points for early detection and rapid response."
        },
        {
            icon: <Shield size={32} color="#c0392b" />,
            title: "Safety Compliance Audits",
            description: "We conduct thorough inspections of existing fire protection infrastructure to ensure compliance with NFPA standards and local municipality regulations. We identify potential issues before they become critical failures."
        },
        {
            icon: <Map size={32} color="#1f3a5f" />,
            title: "System Design & Engineering",
            description: "Our engineering team designs custom fire protection networks for new developments, industrial complexes, and municipal expansions. We optimize for both maximum coverage and long-term durability."
        }
    ];

    return (
        <div className="page-container services-page">
            <div className="page-header">
                <h1 className="page-title">OUR SERVICES</h1>
                <p className="page-subtitle">Comprehensive fire protection solutions from installation to ongoing maintenance.</p>
            </div>

            <div className="services-grid-layout">
                <div className="services-main">
                    {servicesList.map((service, index) => (
                        <div key={index} className="service-detail-card">
                            <div className="service-icon-large">
                                {service.icon}
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-desc">{service.description}</p>
                                <Link to="/contact" className="btn btn-outline" style={{ display: 'inline-block', textAlign: 'center' }}>LEARN MORE</Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="services-sidebar">
                    <div className="sidebar-card highlight-card">
                        <h3>Why Choose PM Enterprise?</h3>
                        <ul className="benefits-list">
                            <li><CheckCircle2 size={16} /> Founded with a future look to the market</li>
                            <li><CheckCircle2 size={16} /> Best quality assurance guarantee</li>
                            <li><CheckCircle2 size={16} /> Long distance project handling</li>
                            <li><CheckCircle2 size={16} /> Top of the line fitting instructions</li>
                            <li><CheckCircle2 size={16} /> Best technical workmanships</li>
                        </ul>
                        <Link to="/contact" className="btn btn-primary btn-full mt-20" style={{ display: 'inline-block', textAlign: 'center' }}>REQUEST SERVICE</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
