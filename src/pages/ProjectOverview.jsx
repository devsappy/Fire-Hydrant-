import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Building2, MapPin, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const projectsData = {
    'anglo-india-jute-mill': {
        typeTag: 'Industrial Fire Safety',
        locationTag: 'Jagatdal, West Bengal',
        title: 'Anglo India Jute Mill Installation',
        subtitle: 'A comprehensive overhaul and new installation of an advanced fire hydrant system, ensuring safety and compliance across a sprawling industrial jute manufacturing complex.',
        client: 'Anglo India Jute Mill',
        location: 'Jagatdal, Kolkata',
        status: 'Completed',
        images: [
            '/images/projects/proj1_img1.jpeg',
            '/images/projects/proj1_img2.jpeg',
            '/images/projects/proj1_img3.jpeg',
            '/images/projects/proj1_img4.jpeg'
        ],
        summary1: "Industrial environments like jute mills face significant risks of rapid fire spread due to the highly combustible nature of the raw materials and the dust particles suspended in the atmosphere. This project focused on creating a robust, high-pressure fire hydrant infrastructure capable of instant deployment anywhere within the mill's massive footprint.",
        summary2: "Our engineering team executed a thorough risk assessment followed by the strategic placement of hydrant points, underground piping lines, and a high-capacity centralized pump room specifically designed to sustain water pressure during both primary electrical failure and secondary backup operations.",
        features: [
            'Standardized ISI-marked Hydrant Valves',
            'High-grade heavy gauge underground GI Piping',
            'Diesel Engine Main & Standby Pumps',
            'Automated Pressure Maintenance System (Jockey Pump)',
            'Centralized Control Panel with integration to main alarm board'
        ],
        compliance: [
            'Full compliance with Indian Standard (IS) strictures',
            'NOC coordination ready setup',
            'Hydraulic pressure testing of all circuits at 1.5x working pressure',
            'Quarterly maintenance accessibility protocols built into the design'
        ]
    },
    'stadmed-pvt-ltd': {
        typeTag: 'Pharmaceutical Fire Safety',
        locationTag: 'Kolkata, West Bengal',
        title: 'Stadmed Pvt Ltd Installation',
        subtitle: 'Comprehensive fire safety and hydrant system installation tailored for pharmaceutical manufacturing, ensuring strict adherence to cleanliness and safety regulations.',
        client: 'Stadmed Pvt Ltd',
        location: 'Chowringhee Road, Kolkata',
        status: 'Completed',
        images: [
            '/images/projects/DSC_0788.jpeg',
            '/images/projects/DSC_0789.jpeg',
            '/images/projects/DSC_0794.jpeg',
            '/images/projects/DSC_0795.jpeg'
        ],
        summary1: "Pharmaceutical facilities require specialized fire safety infrastructure that protects highly sensitive equipment and materials without compromising cleanroom environments. This installation at Stadmed Pvt Ltd involved critical planning to integrate effectively within a tightly regulated manufacturing setup.",
        summary2: "We implemented an end-to-end fire hydrant and alarm network strategically zoned to provide rapid response capabilities. The pumping arrangement and distribution pipelines were carefully routed to ensure maximum coverage with minimal intrusion into key pharmaceutical processing areas.",
        features: [
            'Customized Zonal Fire Hydrant Network',
            'Clean-environment compliant piping and valves',
            'High-efficiency Electrical and Diesel Fire Pumps',
            'Integrated Fire Alarm and Detection System',
            'Corrosion-resistant materials for specialized areas'
        ],
        compliance: [
            'Compliance with pharmaceutical safety guidelines',
            'Adherence to strict local fire safety norms',
            'Non-disruptive installation procedures',
            'Comprehensive testing and commissioning protocols'
        ]
    }
};

function ProjectOverview() {
    const { id } = useParams();

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const project = projectsData[id] || projectsData['anglo-india-jute-mill'];
    
    return (
        <div className="page-container project-detail-page">
            <SEO 
                title={`${project.title} - Fire Safety Project`} 
                description={`Read about our fire safety installation at ${project.client}. ${project.subtitle}`}
                keywords={`${project.typeTag}, fire safety installation ${project.locationTag}, ${project.client} fire hydrant`}
                url={`/projects/${id}`}
                image={project.images[0]}
                type="article"
            />
            <div className="back-link-wrapper" data-aos="fade-right">
                <Link to="/projects" className="back-link">
                    <ArrowLeft size={16} style={{ marginRight: '6px' }} />
                    Back to Projects
                </Link>
            </div>

            <div className="project-detail-header" data-aos="fade-up">
                <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                    <span className="tag" style={{ background: '#c0392b', color: 'white' }}>{project.typeTag}</span>
                    <span className="tag">{project.locationTag}</span>
                </div>
                <h1 className="page-title" style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
                    {project.title}
                </h1>
                <p className="page-subtitle" style={{ maxWidth: '800px', marginBottom: '30px', fontSize: '1.1rem' }}>
                    {project.subtitle}
                </p>

                <div style={{ display: 'flex', gap: '30px', borderTop: '1px solid #eee', borderBottom: '1px solid #eee', padding: '20px 0', marginBottom: '40px', flexWrap: 'wrap' }}>
                    <div>
                        <div style={{ fontSize: '13px', color: '#777', marginBottom: '5px' }}>Client</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 'bold' }}>
                            <Building2 size={16} color="#c0392b" /> {project.client}
                        </div>
                    </div>
                    <div>
                        <div style={{ fontSize: '13px', color: '#777', marginBottom: '5px' }}>Location</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 'bold' }}>
                            <MapPin size={16} color="#c0392b" /> {project.location}
                        </div>
                    </div>
                    <div>
                        <div style={{ fontSize: '13px', color: '#777', marginBottom: '5px' }}>Status</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 'bold' }}>
                            <CheckCircle2 size={16} color="#27ae60" /> {project.status}
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
                {project.images.map((img, idx) => (
                    <img 
                        key={idx}
                        src={img} 
                        alt={`Project Overview ${idx + 1}`} 
                        data-aos="fade-up"
                        data-aos-delay={100 * (idx + 1)}
                        style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #e5e5e5' }}
                        onError={(e) => { 
                            if(img.endsWith('.jpeg')) { e.target.onerror = null; e.target.src = img.replace('.jpeg', '.NEF'); }
                        }}
                    />
                ))}
            </div>

            <div className="project-detailed-description" data-aos="fade-up">
                <h3 className="specs-title" style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Project Summary</h3>
                <p style={{ color: '#444', lineHeight: '1.8', marginBottom: '20px' }}>
                    {project.summary1}
                </p>
                <p style={{ color: '#444', lineHeight: '1.8', marginBottom: '20px' }}>
                    {project.summary2}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '30px' }}>
                    <div style={{ background: '#f9f9f9', padding: '25px', borderRadius: '8px', border: '1px solid #eee' }}>
                        <h4 style={{ marginBottom: '15px', color: '#2c3e50' }}>Key Features Installed</h4>
                        <ul className="benefits-list" style={{ paddingLeft: '0' }}>
                            {project.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                     <div style={{ background: '#f9f9f9', padding: '25px', borderRadius: '8px', border: '1px solid #eee' }}>
                        <h4 style={{ marginBottom: '15px', color: '#2c3e50' }}>Compliance & Safety</h4>
                        <ul className="benefits-list" style={{ paddingLeft: '0' }}>
                            {project.compliance.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectOverview;
