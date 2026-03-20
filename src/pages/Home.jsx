import { Link } from 'react-router-dom';
import { Shield, Settings } from 'lucide-react';
import FireSafetySection from '../components/FireSafetySection';

const HydrantIconOutline = ({ size = 36, color = "#c0392b", strokeWidth = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 8V4h8v4" />
        <path d="M12 2v2" />
        <rect x="8" y="8" width="8" height="14" rx="1" />
        <path d="M4 11h4v4H4c-1.1 0-2-.9-2-2s.9-2 2-2z" />
        <path d="M20 11h-4v4h4c1.1 0 2-.9 2-2s-.9-2-2-2z" />
        <path d="M6 22h12" />
    </svg>
);

function Home() {
    return (
        <div className="home-page">
            <section className="hero-section" style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/ui/backgroundimage.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="hero-content" data-aos="fade-up">
                    <h1 className="hero-title" style={{ color: 'white' }}>ENGINEERING RELIABLE<br />FIRE PROTECTION.</h1>
                    <p className="hero-subtitle" style={{ color: '#eee' }}>Innovative fire hydrants and water control systems,<br />built for durability and performance since 2023.<br /><br /><strong>All Over West Bengal services are provided.</strong></p>
                    <Link to="/products" className="btn btn-primary btn-large">VIEW PRODUCTS</Link>
                </div>
            </section>

            <section className="features-section">
                <div className="features-inner">
                    <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
                        <div className="feature-icon-wrapper">
                            <HydrantIconOutline />
                        </div>
                        <h3 className="feature-title">QUALITY PRODUCTS</h3>
                        <p className="feature-desc">Durable, Fire Safety equipment for urban & industrial areas.</p>
                        <Link to="/products" className="feature-link">Learn More</Link>
                    </div>

                    <div className="feature-divider"></div>

                    <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
                        <div className="feature-icon-wrapper">
                            <Shield size={36} color="#1f3a5f" strokeWidth={1.5} />
                        </div>
                        <h3 className="feature-title">RELIABLE SERVICE</h3>
                        <p className="feature-desc">Installation, maintenance, and support for your safety needs.</p>
                        <Link to="/services" className="feature-link">Learn More</Link>
                    </div>

                    <div className="feature-divider"></div>

                    <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
                        <div className="feature-icon-wrapper">
                            <Settings size={36} color="#c0392b" strokeWidth={1.5} />
                        </div>
                        <h3 className="feature-title">ADVANCED SOLUTIONS</h3>
                        <p className="feature-desc">Custom engineering and flow analysis for water distribution.</p>
                        <Link to="/services" className="feature-link">Learn More</Link>
                    </div>
                </div>
            </section>

            <FireSafetySection />
        </div>
    );
}

export default Home;
