import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Building2, MapPin, CheckCircle2 } from 'lucide-react';

function ProjectOverview() {
    const { id } = useParams();

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Currently hardcoded for Anglo India Jute Mill based on instructions.
    // In a real app, you would fetch project details based on the `id`.
    
    return (
        <div className="page-container project-detail-page">
            <div className="back-link-wrapper" data-aos="fade-right">
                <Link to="/projects" className="back-link">
                    <ArrowLeft size={16} style={{ marginRight: '6px' }} />
                    Back to Projects
                </Link>
            </div>

            <div className="project-detail-header" data-aos="fade-up">
                <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                    <span className="tag" style={{ background: '#c0392b', color: 'white' }}>Industrial Fire Safety</span>
                    <span className="tag">Jagatdal, West Bengal</span>
                </div>
                <h1 className="page-title" style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
                    Anglo India Jute Mill Installation
                </h1>
                <p className="page-subtitle" style={{ maxWidth: '800px', marginBottom: '30px', fontSize: '1.1rem' }}>
                    A comprehensive overhaul and new installation of an advanced fire hydrant system, ensuring safety and compliance across a sprawling industrial jute manufacturing complex.
                </p>

                <div style={{ display: 'flex', gap: '30px', borderTop: '1px solid #eee', borderBottom: '1px solid #eee', padding: '20px 0', marginBottom: '40px' }}>
                    <div>
                        <div style={{ fontSize: '13px', color: '#777', marginBottom: '5px' }}>Client</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 'bold' }}>
                            <Building2 size={16} color="#c0392b" /> Anglo India Jute Mill
                        </div>
                    </div>
                    <div>
                        <div style={{ fontSize: '13px', color: '#777', marginBottom: '5px' }}>Location</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 'bold' }}>
                            <MapPin size={16} color="#c0392b" /> Jagatdal, Kolkata
                        </div>
                    </div>
                    <div>
                        <div style={{ fontSize: '13px', color: '#777', marginBottom: '5px' }}>Status</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 'bold' }}>
                            <CheckCircle2 size={16} color="#27ae60" /> Completed
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-gallery" style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: '20px',
                marginBottom: '40px'
            }}>
                <img 
                    src="/images/projects/proj1_img1.jpeg" 
                    alt="Project Overview 1" 
                    data-aos="fade-up"
                    data-aos-delay="100"
                    style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #e5e5e5' }}
                />
                <img 
                    src="/images/projects/proj1_img2.jpeg" 
                    alt="Project Overview 2" 
                    data-aos="fade-up"
                    data-aos-delay="200"
                    style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #e5e5e5' }}
                />
                <img 
                    src="/images/projects/proj1_img3.jpeg" 
                    alt="Project Overview 3" 
                    data-aos="fade-up"
                    data-aos-delay="300"
                    style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #e5e5e5' }}
                />
                <img 
                    src="/images/projects/proj1_img4.jpeg" 
                    alt="Project Overview 4" 
                    data-aos="fade-up"
                    data-aos-delay="400"
                    style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #e5e5e5' }}
                />
            </div>

            <div className="project-detailed-description" data-aos="fade-up">
                <h3 className="specs-title" style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Project Summary</h3>
                <p style={{ color: '#444', lineHeight: '1.8', marginBottom: '20px' }}>
                    Industrial environments like jute mills face significant risks of rapid fire spread due to the highly combustible nature of the raw materials and the dust particles suspended in the atmosphere. This project focused on creating a robust, high-pressure fire hydrant infrastructure capable of instant deployment anywhere within the mill's massive footprint.
                </p>
                <p style={{ color: '#444', lineHeight: '1.8', marginBottom: '20px' }}>
                    Our engineering team executed a thorough risk assessment followed by the strategic placement of hydrant points, underground piping lines, and a high-capacity centralized pump room specifically designed to sustain water pressure during both primary electrical failure and secondary backup operations.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '30px' }}>
                    <div style={{ background: '#f9f9f9', padding: '25px', borderRadius: '8px', border: '1px solid #eee' }}>
                        <h4 style={{ marginBottom: '15px', color: '#2c3e50' }}>Key Features Installed</h4>
                        <ul className="benefits-list" style={{ paddingLeft: '0' }}>
                            <li>Standardized ISI-marked Hydrant Valves</li>
                            <li>High-grade heavy gauge underground GI Piping</li>
                            <li>Diesel Engine Main & Standby Pumps</li>
                            <li>Automated Pressure Maintenance System (Jockey Pump)</li>
                            <li>Centralized Control Panel with integration to main alarm board</li>
                        </ul>
                    </div>
                     <div style={{ background: '#f9f9f9', padding: '25px', borderRadius: '8px', border: '1px solid #eee' }}>
                        <h4 style={{ marginBottom: '15px', color: '#2c3e50' }}>Compliance & Safety</h4>
                        <ul className="benefits-list" style={{ paddingLeft: '0' }}>
                            <li>Full compliance with Indian Standard (IS) strictures</li>
                            <li>NOC coordination ready setup</li>
                            <li>Hydraulic pressure testing of all circuits at 1.5x working pressure</li>
                            <li>Quarterly maintenance accessibility protocols built into the design</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectOverview;
