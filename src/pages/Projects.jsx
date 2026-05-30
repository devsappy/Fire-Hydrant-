import { Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { breadcrumbSchema, itemListSchema } from '../utils/schema';

function Projects() {
    return (
        <div className="page-container projects-page">
            <SEO
                title="Our Projects & Portfolio"
                description="View our extensive portfolio of fire safety installations, including Industrial and Pharmaceutical projects across West Bengal."
                keywords="fire safety projects, fire hydrant installation portfolio, PM Enterprises projects, Kolkata fire safety"
                url="/projects"
                schema={[
                    breadcrumbSchema([
                        { name: 'Home', path: '/' },
                        { name: 'Projects', path: '/projects' },
                    ]),
                    itemListSchema([
                        { name: 'Jute Factory — Fire Hydrant System', path: '/projects/anglo-india-jute-mill' },
                        { name: 'Medicine Factory — Fire Safety System', path: '/projects/stadmed-pvt-ltd' },
                    ]),
                ]}
            />
            <div className="page-header text-center" data-aos="fade-up">
                <h1 className="page-title">Our Projects</h1>
                <p className="page-subtitle">Showcasing our completed fire safety installations.</p>
            </div>

            <div className="projects-grid">
                {/* Jute Factory Project */}
                <div className="project-showcase-card" data-aos="fade-up" data-aos-delay="100">
                    <div className="project-image-wrapper">
                        <img 
                            src="/images/projects/proj1_img1.jpeg" 
                            alt="Jute Factory Fire Safety Installation" 
                            className="project-image"
                        />
                        <div className="project-year-badge">Recent</div>
                    </div>
                    <div className="project-content">
                        <div className="project-tags">
                            <span className="tag">Jute Mill</span>
                            <span className="tag">Fire Hydrant</span>
                            <span className="tag">Industrial</span>
                        </div>
                        <div className="project-client">
                            <Building2 size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-2px' }} />
                            Jute Factory
                        </div>
                        <h3 className="project-name">Fire Hydrant System Installation</h3>
                        <p className="project-desc">
                            Comprehensive fire hydrant system installation for Jute Factory, focusing on securing the industrial infrastructure and ensuring compliance with heavy industry safety standards.
                        </p>
                        
                        <div style={{ marginTop: 'auto' }}>
                            <Link
                                to={`/projects/anglo-india-jute-mill`}
                                className="btn btn-primary"
                                style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '8px 15px', fontSize: '14px' }}
                            >
                                Detailed Overview <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Medicine Factory Project */}
                <div className="project-showcase-card" data-aos="fade-up" data-aos-delay="200">
                    <div className="project-image-wrapper">
                        <img 
                            src="/images/projects/DSC_0788.jpeg" 
                            alt="Medicine Factory Fire Safety Installation" 
                            className="project-image"
                            onError={(e) => { e.target.onerror = null; e.target.src = '/images/projects/DSC_0788.NEF'; }}
                        />
                        <div className="project-year-badge">Recent</div>
                    </div>
                    <div className="project-content">
                        <div className="project-tags">
                            <span className="tag">Pharmaceutical</span>
                            <span className="tag">Fire Hydrant</span>
                            <span className="tag">Installation</span>
                        </div>
                        <div className="project-client">
                            <Building2 size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-2px' }} />
                            Medicine Factory
                        </div>
                        <h3 className="project-name">Fire Safety System Installation</h3>
                        <p className="project-desc">
                            Comprehensive fire safety system installation for Medicine Factory, focusing on securing the facility and ensuring compliance with pharmaceutical industry safety standards.
                        </p>
                        
                        <div style={{ marginTop: 'auto' }}>
                            <Link
                                to={`/projects/stadmed-pvt-ltd`}
                                className="btn btn-primary"
                                style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '8px 15px', fontSize: '14px' }}
                            >
                                Detailed Overview <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
