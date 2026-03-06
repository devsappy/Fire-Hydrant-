import { Wrench, Shield, Droplets, Map, CheckCircle2 } from 'lucide-react';

function Services() {
    const servicesList = [
        {
            icon: <Wrench size={32} color="#c0392b" />,
            title: "Installation & Maintenance",
            description: "Our certified technicians provide full-service installation and ongoing maintenance for all types of municipal and private fire hydrants. We ensure your equipment is always ready when needed most, complying with all local and national fire safety codes."
        },
        {
            icon: <Droplets size={32} color="#1f3a5f" />,
            title: "Flow Testing & Analysis",
            description: "Comprehensive water flow testing to determine the pressure and rate of flow available at various locations within your distribution system. Our detailed reports help you understand your system's capabilities for fire-fighting purposes."
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
                                <button className="btn btn-outline">LEARN MORE</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="services-sidebar">
                    <div className="sidebar-card highlight-card">
                        <h3>Why Choose PM Enterprise?</h3>
                        <ul className="benefits-list">
                            <li><CheckCircle2 size={16} /> Over 35 years of industry experience</li>
                            <li><CheckCircle2 size={16} /> 24/7 Emergency support available</li>
                            <li><CheckCircle2 size={16} /> Certified and bonded technicians</li>
                            <li><CheckCircle2 size={16} /> Transparent pricing and detailed reporting</li>
                            <li><CheckCircle2 size={16} /> State-of-the-art diagnostic equipment</li>
                        </ul>
                        <button className="btn btn-primary btn-full mt-20">REQUEST SERVICE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
