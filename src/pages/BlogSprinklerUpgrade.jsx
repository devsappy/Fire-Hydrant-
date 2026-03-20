import { Link } from 'react-router-dom';

function BlogSprinklerUpgrade() {
    return (
        <article className="page-container blog-detail-page" style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
            <nav aria-label="breadcrumb" style={{ marginBottom: '20px', fontSize: '0.9rem' }}>
                <Link to="/blog" style={{ color: '#c0392b', textDecoration: 'none' }}>← Back to Blog</Link>
            </nav>
            
            <header style={{ marginBottom: '40px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.9rem', color: '#c0392b', marginBottom: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}>Case Study</div>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#333' }}>Warehouse Sprinkler System Upgrade: A Massive Overhaul</h1>
                <p style={{ color: '#666', fontSize: '1.1rem' }}>Discover how PM Enterprises completely overhauled the fire suppression system for a 50,000 sq ft logistics center, enhancing modern safety without interrupting workflow.</p>
                <div style={{ marginTop: '30px', width: '100%', height: '350px', overflow: 'hidden', borderRadius: '12px' }}>
                    <img src="/images/blogs/blog3_img.png" alt="Industrial warehouse roofing with installed high-pressure fire sprinkler networks and wet riser pipes" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </header>

            <section style={{ marginBottom: '40px', color: '#444' }}>
                <h2 style={{ fontSize: '1.8rem', color: '#c0392b', borderBottom: '2px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>The Challenge: Outdated Fire Suppression</h2>
                <p style={{ marginBottom: '20px' }}>
                    When a major regional logistics partner expanded their high-rack storage capacity to cover over 50,000 square feet, their existing 20-year-old <strong>warehouse fire sprinkler system</strong> was no longer capable of meeting IS code density and pressure requirements. The client needed a complete upgrade of their <strong>wet riser system, water monitors, and automated sprinklers</strong> without halting their 24/7 delivery operations.
                </p>

                <h3 style={{ fontSize: '1.4rem', color: '#333', marginBottom: '15px' }}>Engineering the Solution</h3>
                <p style={{ marginBottom: '20px' }}>
                    Our engineering team at PM Enterprises assessed the hydraulic demands and custom-designed a high-capacity ring main. We successfully integrated <strong>premium Double Landing Valves (Type B)</strong> and installed over 500 new rapid-response <strong>quartzoid bulb sprinklers</strong>.
                </p>

                <h3 style={{ fontSize: '1.4rem', color: '#333', marginBottom: '15px' }}>Integrating Smart Alarm Systems</h3>
                <p style={{ marginBottom: '20px' }}>
                    Physical water flow wasn't the only concern. We linked the new suppression systems directly to a centralized <strong>Addressable Fire Alarm Panel</strong> equipped with integrated <em>Smoke Detectors</em> and high-decibel <em>M.S. Hooters</em> across the warehouse floor. This ensured that an onset fire would instantly trigger localized suppression while communicating precisely where the incident occurred.
                </p>

                <h3 style={{ fontSize: '1.4rem', color: '#333', marginBottom: '15px' }}>The Result</h3>
                <p style={{ marginBottom: '20px' }}>
                    The project was completed in a phased 4-week rollout, resulting in zero unplanned downtime for the logistics firm. Today, the facility boasts a state-of-the-art <strong>industrial fire protection system</strong>, significantly lowering their insurance premiums and guaranteeing absolute compliance with the strictest safety standards.
                </p>
            </section>

            <section style={{ backgroundColor: '#fdf3f2', padding: '30px', borderRadius: '8px', borderLeft: '4px solid #c0392b' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>Ready for a System Assessment?</h3>
                <p style={{ marginBottom: '15px' }}>Whether you need to overhaul an aging warehouse, or install new hydrants for a manufacturing plant, PM Enterprises has the engineering excellence required.</p>
                <Link to="/services" className="btn btn-primary" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#c0392b', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>View Our Engineering Services</Link>
            </section>
        </article>
    );
}

export default BlogSprinklerUpgrade;
