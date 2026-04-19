import { MapPin, Building2, Map, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function Projects() {
    return (
        <div className="page-container projects-page">
            <SEO 
                title="Our Projects & Portfolio" 
                description="View our extensive portfolio of fire safety installations, including Industrial and Pharmaceutical projects across West Bengal."
                keywords="fire safety projects, fire hydrant installation portfolio, PM Enterprises projects, Kolkata fire safety" 
                url="/projects"
            />
            <div className="page-header text-center" data-aos="fade-up">
                <h1 className="page-title">Our Projects</h1>
                <p className="page-subtitle">Showcasing our completed fire safety installations.</p>
            </div>

            <div className="projects-grid">
                {/* Anglo India Jute Mill Project */}
                <div className="project-showcase-card" data-aos="fade-up" data-aos-delay="100">
                    <div className="project-image-wrapper">
                        <img 
                            src="/images/projects/proj1_img1.jpeg" 
                            alt="Anglo India Jute Mill Fire Safety Installation" 
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
                            Anglo India Jute Mill
                        </div>
                        <h3 className="project-name">Fire Hydrant System Installation</h3>
                        <p className="project-desc">
                            Comprehensive fire hydrant system installation for Anglo India Jute Mill, focusing on securing the industrial infrastructure and ensuring compliance with heavy industry safety standards.
                        </p>
                        
                        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#555' }}>
                                <MapPin size={16} color="#c0392b" style={{ flexShrink: 0, marginTop: '2px' }} />
                                <span>Jagatdal, Bhatpara, Kolkata, West Bengal 743125</span>
                            </div>
                            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                                <Link 
                                    to={`/projects/anglo-india-jute-mill`}
                                    className="btn btn-primary"
                                    style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '8px 15px', fontSize: '14px' }}
                                >
                                    Detailed Overview <ArrowRight size={16} />
                                </Link>
                                <a 
                                    href="https://maps.app.goo.gl/1TAkSXMWAJsBJuY29?g_st=aw" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn btn-outline"
                                    style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '8px 15px', fontSize: '14px' }}
                                >
                                    <Map size={16} /> Map
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stadmed Pvt Ltd Project */}
                <div className="project-showcase-card" data-aos="fade-up" data-aos-delay="200">
                    <div className="project-image-wrapper">
                        <img 
                            src="/images/projects/DSC_0788.jpeg" 
                            alt="Stadmed Pvt Ltd Fire Safety Installation" 
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
                            Stadmed Pvt Ltd
                        </div>
                        <h3 className="project-name">Fire Safety System Installation</h3>
                        <p className="project-desc">
                            Comprehensive fire safety system installation for Stadmed Pvt Ltd, focusing on securing the facility and ensuring compliance with pharmaceutical industry safety standards.
                        </p>
                        
                        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#555' }}>
                                <MapPin size={16} color="#c0392b" style={{ flexShrink: 0, marginTop: '2px' }} />
                                <span>84 Chowringhee Road, Kolkata, West Bengal 700020</span>
                            </div>
                            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                                <Link 
                                    to={`/projects/stadmed-pvt-ltd`}
                                    className="btn btn-primary"
                                    style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '8px 15px', fontSize: '14px' }}
                                >
                                    Detailed Overview <ArrowRight size={16} />
                                </Link>
                                <a 
                                    href="https://maps.app.goo.gl/xwuq7VixyvfbKuhY9" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn btn-outline"
                                    style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '8px 15px', fontSize: '14px' }}
                                >
                                    <Map size={16} /> Map
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
