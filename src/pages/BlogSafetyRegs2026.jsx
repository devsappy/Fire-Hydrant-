import { Link } from 'react-router-dom';

function BlogSafetyRegs2026() {
    return (
        <article className="page-container blog-detail-page" style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
            <nav aria-label="breadcrumb" style={{ marginBottom: '20px', fontSize: '0.9rem' }}>
                <Link to="/blog" style={{ color: '#c0392b', textDecoration: 'none' }}>← Back to Blog</Link>
            </nav>
            
            <header style={{ marginBottom: '40px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.9rem', color: '#c0392b', marginBottom: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}>Industry News</div>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#333' }}>New Fire Safety Regulations for 2026: What Businesses Need to Know</h1>
                <p style={{ color: '#666', fontSize: '1.1rem' }}>Stay compliant with the latest fire safety codes and regulations updating this year for commercial, industrial, and high-rise buildings.</p>
                <div style={{ marginTop: '30px', width: '100%', height: '350px', overflow: 'hidden', borderRadius: '12px' }}>
                    <img src="/images/blogs/blog2_img.png" alt="Commercial building fire safety code compliance map and inspection documents" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </header>

            <section style={{ marginBottom: '40px', color: '#444' }}>
                <h2 style={{ fontSize: '1.8rem', color: '#c0392b', borderBottom: '2px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Understanding the IS Code Updates</h2>
                <p style={{ marginBottom: '20px' }}>
                    Every few years, national <strong>fire safety and building codes</strong> undergo rigorous review. The upcoming <strong>2026 fire safety regulations update</strong> places a heavier emphasis on <em>smart fire detection</em>, automated evacuation routing, and stricter mandatory inspection intervals. Complying with these standards is not just a legal necessity, but a crucial step in preventing catastrophic property damage and loss of life.
                </p>

                <h3 style={{ fontSize: '1.4rem', color: '#333', marginBottom: '15px' }}>Enhanced Addressable Fire Alarm Panels</h3>
                <p style={{ marginBottom: '20px' }}>
                    The new code stipulates that large multi-story commercial facilities must transition from conventional zones to <strong>addressable fire alarm control panels</strong>. These advanced intelligent panels can pinpoint the exact smoke detector or manual call point triggered, significantly decreasing emergency response times for the fire brigade.
                </p>

                <h3 style={{ fontSize: '1.4rem', color: '#333', marginBottom: '15px' }}>Mandatory Quarterly Sprinkler Inspections</h3>
                <p style={{ marginBottom: '20px' }}>
                    A major policy shift dictates that <strong>commercial sprinkler systems and landing valves</strong> must undergo certified quarterly inspections, up from the previous bi-annual requirement. Defective wet-riser valves or corroded nozzles must be replaced immediately with ISI marked safety gear.
                </p>
            </section>

            <section style={{ backgroundColor: '#f4f4f4', padding: '30px', borderRadius: '8px', borderLeft: '4px solid #1f3a5f' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>Is Your Facility 2026 Compliant?</h3>
                <p style={{ marginBottom: '15px' }}>Don't risk failing your next building safety audit. Contact our expert engineering team for a full site survey and regulatory compliance check.</p>
                <Link to="/contact" className="btn btn-secondary" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#1f3a5f', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>Schedule an Inspection</Link>
            </section>
        </article>
    );
}

export default BlogSafetyRegs2026;
