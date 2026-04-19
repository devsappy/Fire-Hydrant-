import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function Blog() {
    return (
        <div className="page-container blog-page" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
            <SEO 
                title="Fire Safety Blog & Resources" 
                description="Read the latest insights, tips, and news about fire safety equipment, regulations, and industry trends from PM Enterprises."
                keywords="fire safety blog, fire extinguisher guide, safety regulations India, PM Enterprises news" 
                url="/blog"
            />
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <BookOpen size={48} color="#c0392b" style={{ marginBottom: '15px' }} />
                <h1 className="page-title" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Our Blog</h1>
                <p className="page-subtitle" style={{ fontSize: '1.2rem', color: '#666' }}>Insights, tips, and news about fire safety.</p>
            </div>
            
            <div className="blog-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '30px'
            }}>
                <div className="blog-card" data-aos="fade-up" style={{
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease'
                }}>
                    <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                        <img src="/images/blogs/blog1_img.png" alt="Fire Safety Tips" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '20px' }}>
                        <div style={{ fontSize: '0.9rem', color: '#c0392b', marginBottom: '10px', fontWeight: 'bold' }}>Fire Safety Tips</div>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>
                            <Link to="/blog/essential-fire-extinguisher-types" style={{ color: '#333', textDecoration: 'none' }}>Essential Fire Extinguisher Types</Link>
                        </h2>
                        <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>Learn about the different classes of fire extinguishers and when to use them effectively in your home or workplace.</p>
                        <Link to="/blog/essential-fire-extinguisher-types" style={{ color: '#c0392b', textDecoration: 'none', fontWeight: 'bold' }}>Read More →</Link>
                    </div>
                </div>

                <div className="blog-card" data-aos="fade-up" style={{
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease'
                }}>
                    <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                        <img src="/images/blogs/blog2_img.png" alt="Industry News" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '20px' }}>
                        <div style={{ fontSize: '0.9rem', color: '#c0392b', marginBottom: '10px', fontWeight: 'bold' }}>Industry News</div>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>
                            <Link to="/blog/new-safety-regulations-2026" style={{ color: '#333', textDecoration: 'none' }}>New Safety Regulations for 2026</Link>
                        </h2>
                        <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>Stay compliant with the latest fire safety codes and regulations updating this year for commercial buildings.</p>
                        <Link to="/blog/new-safety-regulations-2026" style={{ color: '#c0392b', textDecoration: 'none', fontWeight: 'bold' }}>Read More →</Link>
                    </div>
                </div>

                <div className="blog-card" data-aos="fade-up" style={{
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease'
                }}>
                    <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                        <img src="/images/blogs/blog3_img.png" alt="Case Study" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '20px' }}>
                        <div style={{ fontSize: '0.9rem', color: '#c0392b', marginBottom: '10px', fontWeight: 'bold' }}>Case Study</div>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>
                            <Link to="/blog/warehouse-sprinkler-system-upgrade" style={{ color: '#333', textDecoration: 'none' }}>Warehouse Sprinkler System Upgrade</Link>
                        </h2>
                        <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>Discover how we completely overhauled the fire suppression system for a 50,000 sq ft logistics center.</p>
                        <Link to="/blog/warehouse-sprinkler-system-upgrade" style={{ color: '#c0392b', textDecoration: 'none', fontWeight: 'bold' }}>Read More →</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
