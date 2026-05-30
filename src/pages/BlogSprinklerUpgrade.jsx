import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { articleSchema, breadcrumbSchema } from '../utils/schema';

function BlogSprinklerUpgrade() {
    const url = '/blog/warehouse-sprinkler-system-upgrade';
    const title = 'Warehouse Sprinkler System Upgrade: A Massive Overhaul';
    const description = 'A case study on how PM Enterprises overhauled the fire suppression system of a 50,000 sq ft logistics center — new wet riser, 500+ sprinklers and addressable alarms with zero downtime.';
    const image = '/images/blogs/blog3_img.png';
    return (
        <article className="page-container blog-detail-page" style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
            <SEO
                title={title}
                description={description}
                keywords="warehouse sprinkler system, fire suppression upgrade, wet riser system, double landing valve, industrial fire protection case study, PM Enterprises"
                url={url}
                image={image}
                type="article"
                schema={[
                    articleSchema({ title, description, image, url, datePublished: '2026-03-05' }),
                    breadcrumbSchema([
                        { name: 'Home', path: '/' },
                        { name: 'Blog', path: '/blog' },
                        { name: 'Warehouse Sprinkler System Upgrade', path: url },
                    ]),
                ]}
            />
            <nav aria-label="breadcrumb" style={{ marginBottom: '20px', fontSize: '0.9rem' }}>
                <Link to="/blog" style={{ color: 'var(--accent)', textDecoration: 'none' }}>← Back to Blog</Link>
            </nav>

            <header style={{ marginBottom: '40px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-2)', marginBottom: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Case Study</div>
                <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', marginBottom: '20px', color: 'var(--text)', letterSpacing: '-0.5px' }}>Warehouse Sprinkler System Upgrade: A Massive Overhaul</h1>
                <p style={{ color: 'var(--text-2)', fontSize: '1.1rem' }}>Discover how PM Enterprises completely overhauled the fire suppression system for a 50,000 sq ft logistics center, enhancing modern safety without interrupting workflow.</p>
                <div className="blog-hero-image">
                    <img src="/images/blogs/blog3_img.png" alt="Industrial warehouse roofing with installed high-pressure fire sprinkler networks and wet riser pipes" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </header>

            <section style={{ marginBottom: '40px', color: 'var(--text-2)' }}>
                <h2 style={{ fontSize: '1.8rem', color: 'var(--text)', borderBottom: '1px solid var(--border)', paddingBottom: '12px', marginBottom: '20px' }}>The Challenge: Outdated Fire Suppression</h2>
                <p style={{ marginBottom: '20px' }}>
                    When a major regional logistics partner expanded their high-rack storage capacity to cover over 50,000 square feet, their existing 20-year-old <strong>warehouse fire sprinkler system</strong> was no longer capable of meeting IS code density and pressure requirements. The client needed a complete upgrade of their <strong>wet riser system, water monitors, and automated sprinklers</strong> without halting their 24/7 delivery operations.
                </p>

                <h3 style={{ fontSize: '1.4rem', color: 'var(--text)', marginBottom: '15px' }}>Engineering the Solution</h3>
                <p style={{ marginBottom: '20px' }}>
                    Our engineering team at PM Enterprises assessed the hydraulic demands and custom-designed a high-capacity ring main. We successfully integrated <strong>premium Double Landing Valves (Type B)</strong> and installed over 500 new rapid-response <strong>quartzoid bulb sprinklers</strong>.
                </p>

                <h3 style={{ fontSize: '1.4rem', color: 'var(--text)', marginBottom: '15px' }}>Integrating Smart Alarm Systems</h3>
                <p style={{ marginBottom: '20px' }}>
                    Physical water flow wasn't the only concern. We linked the new suppression systems directly to a centralized <strong>Addressable Fire Alarm Panel</strong> equipped with integrated <em>Smoke Detectors</em> and high-decibel <em>M.S. Hooters</em> across the warehouse floor. This ensured that an onset fire would instantly trigger localized suppression while communicating precisely where the incident occurred.
                </p>

                <h3 style={{ fontSize: '1.4rem', color: 'var(--text)', marginBottom: '15px' }}>The Result</h3>
                <p style={{ marginBottom: '20px' }}>
                    The project was completed in a phased 4-week rollout, resulting in zero unplanned downtime for the logistics firm. Today, the facility boasts a state-of-the-art <strong>industrial fire protection system</strong>, significantly lowering their insurance premiums and guaranteeing absolute compliance with the strictest safety standards.
                </p>
            </section>

            <section style={{ background: 'var(--accent-soft)', padding: '32px', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--accent)', border: '1px solid var(--accent-line)', color: 'var(--text-2)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--text)' }}>Ready for a System Assessment?</h3>
                <p style={{ marginBottom: '20px' }}>Whether you need to overhaul an aging warehouse, or install new hydrants for a manufacturing plant, PM Enterprises has the engineering excellence required.</p>
                <Link to="/services" className="btn btn-primary">View Our Engineering Services</Link>
            </section>
        </article>
    );
}

export default BlogSprinklerUpgrade;
