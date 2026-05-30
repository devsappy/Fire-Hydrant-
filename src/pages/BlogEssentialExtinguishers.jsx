import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { articleSchema, breadcrumbSchema } from '../utils/schema';

function BlogEssentialExtinguishers() {
    const url = '/blog/essential-fire-extinguisher-types';
    const title = 'Essential Fire Extinguisher Types: A Comprehensive Guide';
    const description = 'Learn the different classes of fire extinguishers — ABC dry powder, CO2 and AFFF foam — and exactly when to use each for maximum fire safety.';
    const image = '/images/blogs/blog1_img.png';
    return (
        <article className="page-container blog-detail-page" style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
            <SEO
                title={title}
                description={description}
                keywords="fire extinguisher types, ABC dry powder extinguisher, CO2 extinguisher, AFFF foam extinguisher, fire classes, PM Enterprises"
                url={url}
                image={image}
                type="article"
                schema={[
                    articleSchema({ title, description, image, url, datePublished: '2026-02-12' }),
                    breadcrumbSchema([
                        { name: 'Home', path: '/' },
                        { name: 'Blog', path: '/blog' },
                        { name: 'Essential Fire Extinguisher Types', path: url },
                    ]),
                ]}
            />
            <nav aria-label="breadcrumb" style={{ marginBottom: '20px', fontSize: '0.9rem' }}>
                <Link to="/blog" style={{ color: 'var(--accent)', textDecoration: 'none' }}>← Back to Blog</Link>
            </nav>

            <header style={{ marginBottom: '40px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-2)', marginBottom: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Fire Safety Tips</div>
                <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', marginBottom: '20px', color: 'var(--text)', letterSpacing: '-0.5px' }}>Essential Fire Extinguisher Types: A Comprehensive Guide</h1>
                <p style={{ color: 'var(--text-2)', fontSize: '1.1rem' }}>Learn about the different classes of fire extinguishers and when to use them effectively in your home or workplace to ensure maximum fire safety.</p>
                <div style={{ marginTop: '30px', width: '100%', height: '350px', overflow: 'hidden', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                    <img src="/images/blogs/blog1_img.png" alt="Different types of fire extinguishers including ABC powder, CO2, and AFFF foam" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </header>

            <section style={{ marginBottom: '40px', color: 'var(--text-2)' }}>
                <h2 style={{ fontSize: '1.8rem', color: 'var(--text)', borderBottom: '1px solid var(--border)', paddingBottom: '12px', marginBottom: '20px' }}>Understanding Fire Classes for Better Safety</h2>
                <p style={{ marginBottom: '20px' }}>
                    Choosing the correct <strong>fire extinguisher type</strong> is critical for commercial and residential fire safety. Using the wrong extinguisher can not only be ineffective but can actually spread the fire further. Fires are classified based on the fuel source that is burning.
                </p>

                <h3 style={{ fontSize: '1.4rem', color: 'var(--text)', marginBottom: '15px' }}>1. ABC Dry Chemical Powder Extinguishers</h3>
                <p style={{ marginBottom: '20px' }}>
                    The <strong>ABC dry chemical fire extinguisher</strong> is the most widely used fire extinguisher for general applications. It handles Class A (ordinary combustibles like wood and paper), Class B (flammable liquids like gasoline), and Class C (electrical fires). This versatility makes it a staple in household fire safety kits and office buildings.
                </p>

                <h3 style={{ fontSize: '1.4rem', color: 'var(--text)', marginBottom: '15px' }}>2. CO2 (Carbon Dioxide) Extinguishers</h3>
                <p style={{ marginBottom: '20px' }}>
                    A <strong>CO2 fire extinguisher</strong> is designed specifically for Class B and Class C fires. Because it leaves absolutely no chemical residue, it is the premier choice for protecting sensitive electron equipment, server rooms, and medical laboratories from catastrophic electrical fires.
                </p>

                <h3 style={{ fontSize: '1.4rem', color: 'var(--text)', marginBottom: '15px' }}>3. AFFF Foam Extinguishers</h3>
                <p style={{ marginBottom: '20px' }}>
                    For industrial fire safety involving bulk flammable liquids, <strong>AFFF (Aqueous Film Forming Foam)</strong> extinguishers are essential. They discharge a foam barrier that coats the liquid surface, cutting off oxygen and smothering Class B fires rapidly to prevent re-ignition.
                </p>
            </section>

            <section style={{ background: 'var(--surface)', padding: '32px', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--accent)', border: '1px solid var(--border)', color: 'var(--text-2)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--text)' }}>Need Expert Fire Extinguisher Consultation?</h3>
                <p style={{ marginBottom: '20px' }}>At PM Enterprises, we provide professional fire extinguisher installation, inspection, and maintenance throughout West Bengal.</p>
                <Link to="/products" className="btn btn-primary">Browse Our Extinguishers</Link>
            </section>
        </article>
    );
}

export default BlogEssentialExtinguishers;
