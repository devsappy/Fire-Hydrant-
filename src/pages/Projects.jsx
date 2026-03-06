import { ArrowRight } from 'lucide-react';

function Projects() {
    const projects = [
        {
            id: 1,
            name: "Downtown Commercial District Upgrade",
            client: "City of Metroville",
            year: "2024",
            description: "Complete replacement of 120 aging fire hydrants with our Model 350-HF High-Flow hydrants across a busy 10-block downtown area. The project required careful coordination to minimize traffic disruption and maintain fire safety coverage during the transition.",
            image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800",
            tags: ["Municipal", "Installation", "High-Flow"]
        },
        {
            id: 2,
            name: "Harborside Industrial Park",
            client: "Coastal Logistics Inc.",
            year: "2023",
            description: "Designed and installed a comprehensive private fire protection loop for a 50-acre industrial warehousing facility. Installed 45 heavy-duty standard wet barrel hydrants and associated isolation valves capable of handling corrosive coastal environments.",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
            tags: ["Industrial", "Design", "Corrosion Resistant"]
        },
        {
            id: 3,
            name: "Pine Valley Residential Expansion",
            client: "Horizon Developers",
            year: "2023",
            description: "Partnered with residential developers to supply and install 85 compact pillar hydrants for a new 400-home subdivision. Our architectural style hydrants were chosen specifically to blend with the neighborhood's modern aesthetic while exceeding flow requirements.",
            image: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&q=80&w=800",
            tags: ["Residential", "Aesthetic", "New Construction"]
        }
    ];

    return (
        <div className="page-container projects-page">
            <div className="page-header text-center">
                <h1 className="page-title">FEATURED PROJECTS</h1>
                <p className="page-subtitle">Discover how we've helped municipalities and private entities secure their infrastructure.</p>
            </div>

            <div className="projects-grid">
                {projects.map(project => (
                    <div key={project.id} className="project-showcase-card">
                        <div className="project-image-wrapper">
                            <img src={project.image} alt={project.name} className="project-image" />
                            <div className="project-year-badge">{project.year}</div>
                        </div>
                        <div className="project-content">
                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                            <h2 className="project-name">{project.name}</h2>
                            <div className="project-client"><strong>Client:</strong> {project.client}</div>
                            <p className="project-desc">{project.description}</p>
                            <button className="btn-text">Read Case Study <ArrowRight size={16} /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
