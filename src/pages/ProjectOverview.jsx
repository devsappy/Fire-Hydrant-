import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Building2, MapPin, CheckCircle2, Images, ChevronUp } from 'lucide-react';
import SEO from '../components/SEO';
import { breadcrumbSchema } from '../utils/schema';
import { projectGalleries } from '../data/projectGalleries';

const projectsData = {
    'anglo-india-jute-mill': {
        typeTag: 'Industrial Fire Safety',
        locationTag: 'Jagatdal, West Bengal',
        heading: 'Anglo India Jute Mill',
        title: 'Jute Factory Installation',
        subtitle: 'A comprehensive overhaul and new installation of an advanced fire hydrant system, ensuring safety and compliance across a sprawling industrial jute manufacturing complex.',
        client: 'Jute Factory',
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
        heading: 'Stadmed Pvt Ltd',
        title: 'Medicine Factory Installation',
        subtitle: 'Comprehensive fire safety and hydrant system installation tailored for pharmaceutical manufacturing, ensuring strict adherence to cleanliness and safety regulations.',
        client: 'Medicine Factory',
        location: 'Chowringhee Road, Kolkata',
        status: 'Completed',
        images: [
            '/images/projects/medicine-factory/DSC_0788.jpg',
            '/images/projects/medicine-factory/DSC_0789.jpg',
            '/images/projects/medicine-factory/DSC_0794.jpg'
        ],
        summary1: "Pharmaceutical facilities require specialized fire safety infrastructure that protects highly sensitive equipment and materials without compromising cleanroom environments. This installation at Medicine Factory involved critical planning to integrate effectively within a tightly regulated manufacturing setup.",
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
    },
    'digha-hotel': {
        typeTag: 'Hospitality Fire Safety',
        locationTag: 'Digha, West Bengal',
        heading: 'Hotel Project — Digha',
        title: 'Hotel Fire Safety Installation',
        subtitle: 'A dedicated fire hydrant and safety system installation for a hospitality property in Digha, designed to protect guests, staff, and the building without disrupting day-to-day operations.',
        client: 'Hotel, Digha',
        location: 'Digha, West Bengal',
        status: 'Completed',
        images: [
            '/images/projects/digha-hotel/digha-01.jpeg',
            '/images/projects/digha-hotel/digha-02.jpeg',
            '/images/projects/digha-hotel/digha-03.jpeg'
        ],
        summary1: "Hospitality properties present unique fire safety challenges — guest-occupied floors, multiple exit routes, and public areas that must remain functional throughout installation. This project focused on delivering a reliable, code-compliant fire hydrant system across the property while keeping disruption to guests and operations to a minimum.",
        summary2: "Our team planned hydrant point placement across all floors and common areas, laid out the piping network, and set up a dependable pump arrangement to ensure consistent water pressure is available in the event of a fire, backed by routine testing and handover documentation.",
        features: [
            'ISI-marked hydrant valves across all floors',
            'Underground and riser piping network',
            'Fire pump set with standby backup',
            'Strategically placed hose reels and hydrant points',
            'Coordination with property staff for minimal guest disruption'
        ],
        compliance: [
            'Installation aligned with applicable fire safety norms',
            'Hydraulic pressure testing of installed circuits',
            'Documentation prepared for NOC coordination',
            'Handover with maintenance guidance for property staff'
        ]
    }
};

function ProjectOverview() {
    const { id } = useParams();
    const [showMore, setShowMore] = useState(false);
    const [prevId, setPrevId] = useState(id);

    // Reset the gallery state when navigating between projects (same component
    // instance is reused across routes, so collapse "More" on id change).
    if (id !== prevId) {
        setPrevId(id);
        setShowMore(false);
    }

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const project = projectsData[id] || projectsData['anglo-india-jute-mill'];
    const moreImages = projectGalleries[id] || [];
    
    return (
        <div className="page-container project-detail-page">
            <SEO
                title={`${project.heading ? project.heading + ' — ' : ''}Fire Hydrant System Installation${project.location ? ' in ' + project.location : ''}`}
                description={`Fire hydrant & safety system installation by PM Enterprises at ${project.heading || project.client}, ${project.location}. ${project.subtitle}`}
                keywords={`${project.heading || project.client}, fire hydrant installation ${project.location}, ${project.typeTag}, fire safety ${project.locationTag}, industrial fire protection West Bengal, PM Enterprises project`}
                url={`/projects/${id}`}
                image={project.images[0]}
                type="article"
                schema={breadcrumbSchema([
                    { name: 'Home', path: '/' },
                    { name: 'Projects', path: '/projects' },
                    { name: project.heading || project.title, path: `/projects/${id}` },
                ])}
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
                {project.heading && (
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '17px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px' }}>
                        {project.heading}
                    </div>
                )}
                <h1 className="page-title" style={{ marginBottom: '15px' }}>
                    {project.title}
                </h1>
                <p className="page-subtitle" style={{ maxWidth: '800px', marginBottom: '30px', fontSize: '1.1rem' }}>
                    {project.subtitle}
                </p>

                <div style={{ display: 'flex', gap: '30px', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '20px 0', marginBottom: '40px', flexWrap: 'wrap' }}>
                    <div>
                        <div style={{ fontSize: '13px', color: 'var(--text-3)', marginBottom: '5px' }}>Client</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 'bold' }}>
                            <Building2 size={16} color="#c0392b" /> {project.client}
                        </div>
                    </div>
                    <div>
                        <div style={{ fontSize: '13px', color: 'var(--text-3)', marginBottom: '5px' }}>Location</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 'bold' }}>
                            <MapPin size={16} color="#c0392b" /> {project.location}
                        </div>
                    </div>
                    <div>
                        <div style={{ fontSize: '13px', color: 'var(--text-3)', marginBottom: '5px' }}>Status</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 'bold' }}>
                            <CheckCircle2 size={16} color="#27ae60" /> {project.status}
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-gallery">
                {project.images.map((img, idx) => (
                    <img
                        key={img}
                        src={img}
                        alt={`${project.title} — installation photo ${idx + 1}`}
                        loading="lazy"
                        data-aos="fade-up"
                        data-aos-delay={100 * (idx + 1)}
                    />
                ))}

                {/* "More" tile beside the featured images — reveals the full photo set */}
                {!showMore && moreImages.length > 0 && (
                    <button
                        type="button"
                        className="gallery-more-tile"
                        onClick={() => setShowMore(true)}
                        aria-label={`Show ${moreImages.length} more photos`}
                        data-aos="fade-up"
                    >
                        <Images size={28} />
                        <span className="gallery-more-count">+{moreImages.length}</span>
                        <span className="gallery-more-label">More Photos</span>
                    </button>
                )}

                {showMore && moreImages.map((img, idx) => (
                    <img
                        key={img}
                        src={img}
                        alt={`${project.title} — installation photo ${project.images.length + idx + 1}`}
                        loading="lazy"
                    />
                ))}
            </div>

            {showMore && moreImages.length > 0 && (
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => setShowMore(false)}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                    >
                        <ChevronUp size={16} /> Show Less
                    </button>
                </div>
            )}

            <div className="project-detailed-description" data-aos="fade-up">
                <h3 className="specs-title" style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Project Summary</h3>
                <p style={{ color: 'var(--text-2)', lineHeight: '1.8', marginBottom: '20px' }}>
                    {project.summary1}
                </p>
                <p style={{ color: 'var(--text-2)', lineHeight: '1.8', marginBottom: '20px' }}>
                    {project.summary2}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '30px' }}>
                    <div style={{ background: 'var(--surface)', padding: '25px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                        <h4 style={{ marginBottom: '15px', color: 'var(--text)' }}>Key Features Installed</h4>
                        <ul className="benefits-list" style={{ paddingLeft: '0' }}>
                            {project.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                     <div style={{ background: 'var(--surface)', padding: '25px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                        <h4 style={{ marginBottom: '15px', color: 'var(--text)' }}>Compliance & Safety</h4>
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
