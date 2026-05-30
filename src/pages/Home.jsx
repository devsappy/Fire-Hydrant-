import { Link } from 'react-router-dom';
import { Shield, Settings, Bell, ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import FireSafetySection from '../components/FireSafetySection';
import SEO from '../components/SEO';

const HydrantIconOutline = ({ size = 26, color = "var(--accent)", strokeWidth = 1.6 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 8V4h8v4" />
        <path d="M12 2v2" />
        <rect x="8" y="8" width="8" height="14" rx="1" />
        <path d="M4 11h4v4H4c-1.1 0-2-.9-2-2s.9-2 2-2z" />
        <path d="M20 11h-4v4h4c1.1 0 2-.9 2-2s-.9-2-2-2z" />
        <path d="M6 22h12" />
    </svg>
);

const marqueeItems = [
    'Fire Hydrants', 'Extinguishers', 'Fire Alarms', 'Sprinklers',
    'Landing Valves', 'Hose Reels', 'Detection Systems', 'Compliance Audits'
];

function Home() {
    return (
        <div className="home-page">
            <SEO
                title="Industrial & Urban Fire Protection Experts"
                description="PM Enterprises provides cutting-edge industrial and urban fire protection solutions including fire hydrants, alarms, and custom engineering. We secure your future."
                keywords="fire protection systems, industrial fire safety, fire hydrant installations, PM Enterprises West Bengal, water control systems"
                url="/"
            />

            {/* ===== HERO ===== */}
            <section className="hx-hero">
                <div className="hx-hero-inner">
                    <div className="hx-hero-main" data-aos="fade-up">
                        <span className="hx-eyebrow">Fire Protection Specialists — Since 2023</span>
                        <h1 className="hx-title">
                            Engineering reliable <span className="hx-title-accent">fire protection.</span>
                        </h1>
                        <p className="hx-sub">
                            Innovative fire hydrants and water control systems, built for durability
                            and performance. All over West Bengal services are provided.
                        </p>
                        <div className="hx-actions">
                            <Link to="/products" className="btn btn-primary btn-large">View Products <ArrowRight size={18} /></Link>
                            <Link to="/contact" className="btn btn-ghost btn-large">Get a Quote</Link>
                            <a
                                href="https://maps.app.goo.gl/B7NpTccdf1RhgRoYA?g_st=aw"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-map btn-large"
                            >
                                <MapPin size={18} /> View Location
                            </a>
                        </div>
                    </div>

                    <aside className="hx-hero-side" data-aos="fade-left">
                        <div className="hx-frame">
                            <img src="/images/ui/hero-fire-pipes.jpg" alt="Rows of red fire hydrant risers and fire protection piping in an industrial facility" />
                            <span className="hx-frame-badge">Trusted across West Bengal</span>
                        </div>
                    </aside>
                </div>

                <div className="hx-stats">
                    <div className="hx-stat">
                        <span className="hx-stat-num">2023</span>
                        <span className="hx-stat-label">Year Founded</span>
                    </div>
                    <div className="hx-stat">
                        <span className="hx-stat-num">24/7</span>
                        <span className="hx-stat-label">Emergency Support</span>
                    </div>
                    <div className="hx-stat">
                        <span className="hx-stat-num">100%</span>
                        <span className="hx-stat-label">Quality Assured</span>
                    </div>
                    <div className="hx-stat">
                        <span className="hx-stat-num">WB</span>
                        <span className="hx-stat-label">Statewide Service</span>
                    </div>
                </div>
            </section>

            {/* ===== MARQUEE ===== */}
            <div className="hx-marquee">
                <div className="hx-marquee-track">
                    {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
                        <span className="hx-marquee-item" key={i}>
                            {item} <span className="hx-marquee-dot">◆</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* ===== FEATURES (BENTO) ===== */}
            <section className="hx-section">
                <div className="hx-section-head" data-aos="fade-up">
                    <span className="hx-kicker">01 — What we do</span>
                    <h2 className="hx-h2">Complete fire protection, engineered end to end.</h2>
                </div>

                <div className="hx-bento">
                    <article className="hx-card hx-card-feature" data-aos="fade-up">
                        <div className="hx-card-icon"><HydrantIconOutline color="#fff" size={28} /></div>
                        <div className="hx-card-feature-body">
                            <span className="hx-card-num">01</span>
                            <h3>Quality Products</h3>
                            <p>Durable, certified fire safety equipment engineered for urban and industrial environments — hydrants, extinguishers, valves and alarms.</p>
                            <Link to="/products" className="hx-card-link">Explore products <ArrowUpRight size={16} /></Link>
                        </div>
                    </article>

                    <article className="hx-card hx-card-wide" data-aos="fade-up" data-aos-delay="100">
                        <div className="hx-card-icon"><Shield size={26} color="var(--accent)" strokeWidth={1.6} /></div>
                        <span className="hx-card-num">02</span>
                        <h3>Reliable Service</h3>
                        <p>Installation, maintenance, and support for your safety needs — built around uptime.</p>
                        <Link to="/services" className="hx-card-link">View services <ArrowUpRight size={16} /></Link>
                    </article>

                    <article className="hx-card" data-aos="fade-up" data-aos-delay="200">
                        <div className="hx-card-icon"><Settings size={26} color="var(--accent)" strokeWidth={1.6} /></div>
                        <span className="hx-card-num">03</span>
                        <h3>Advanced Solutions</h3>
                        <p>Custom engineering and flow analysis for resilient water distribution.</p>
                        <Link to="/services" className="hx-card-link">See engineering <ArrowUpRight size={16} /></Link>
                    </article>

                    <article className="hx-card" data-aos="fade-up" data-aos-delay="300">
                        <div className="hx-card-icon"><Bell size={26} color="var(--accent)" strokeWidth={1.6} /></div>
                        <span className="hx-card-num">04</span>
                        <h3>Alarm & Detection</h3>
                        <p>Addressable panels, smoke detection and rapid-response alerting integrated site-wide.</p>
                        <Link to="/services" className="hx-card-link">Learn more <ArrowUpRight size={16} /></Link>
                    </article>
                </div>
            </section>

            <FireSafetySection />

            {/* ===== CTA BAND ===== */}
            <section className="hx-cta-band">
                <div className="hx-cta-inner">
                    <div>
                        <h2 className="hx-cta-title">Ready to secure your facility?</h2>
                        <p>Talk to our team for a tailored fire protection plan and a fast quote.</p>
                    </div>
                    <Link to="/contact" className="btn btn-primary btn-large">Contact Us <ArrowRight size={18} /></Link>
                </div>
            </section>
        </div>
    );
}

export default Home;
