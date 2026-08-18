import { Link } from 'react-router-dom';
import { Shield, Settings, Bell, ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import FireSafetySection from '../components/FireSafetySection';
import SEO from '../components/SEO';
import { faqSchema } from '../utils/schema';

const FAQS = [
    {
        q: 'What does a fire safety company do?',
        a: 'A fire safety company supplies, installs, tests and maintains fire protection equipment — fire hydrants, extinguishers, alarms, detection and sprinkler systems — and carries out safety compliance audits. PM Enterprises provides all of these across West Bengal for homes, commercial buildings and industrial sites.',
    },
    {
        q: 'Which fire extinguisher should I use for an electrical fire?',
        a: 'Use a CO₂ (carbon dioxide) extinguisher for electrical fires — it is non-conductive and leaves no residue. ABC dry powder extinguishers are also rated for electrical (Class C) fires. Never use water or foam extinguishers on live electrical equipment.',
    },
    {
        q: 'How often should fire extinguishers and hydrants be serviced?',
        a: 'Fire extinguishers should be inspected at least once a year and refilled per IS standards, while hydrant systems and sprinkler valves should be checked quarterly. PM Enterprises offers annual maintenance contracts (AMC) and scheduled inspections to keep your equipment compliant.',
    },
    {
        q: 'Do you provide fire safety services across West Bengal?',
        a: 'Yes. Based in Simurali, Nadia, PM Enterprises provides fire protection supply, installation and maintenance across all of West Bengal, including Kolkata, Nadia, Kalyani and surrounding industrial areas, with 24/7 emergency support.',
    },
    {
        q: 'What fire safety equipment is required for a commercial building?',
        a: 'Most commercial buildings require fire extinguishers, a fire hydrant/wet-riser system, an addressable fire alarm with smoke detectors, and in many cases automatic sprinklers — all installed to Indian Standard (IS) codes. We assess your building and design a compliant system.',
    },
    {
        q: 'How do I get a quote for fire protection?',
        a: 'Call +91 92396 89075, email pmenterprisesfiresafety@gmail.com, or use our contact page. We provide a free site assessment and a tailored quote for products, installation and maintenance.',
    },
];

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
                title="Fire Safety & Fire Protection Company in West Bengal"
                description="PM Enterprises is a West Bengal fire safety company supplying & installing fire hydrants, extinguishers, alarms and sprinkler systems — with maintenance, AMC and compliance audits. Free site assessment, 24/7 support."
                keywords="fire safety, fire safety company West Bengal, fire protection services, fire hydrant installation, fire extinguishers, fire alarm systems, sprinkler systems, fire safety Nadia Kolkata, PM Enterprises"
                url="/"
                schema={faqSchema(FAQS)}
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
                            <img src="/images/ui/hero-pump-room.jpg" alt="Fire hydrant pump room with red-coated piping and pressure gauges" />
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
                        <span className="hx-stat-num" style={{ fontSize: 'clamp(20px, 2.4vw, 28px)', lineHeight: 1.15 }}>West Bengal</span>
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

            {/* ===== FAQ ===== */}
            <section className="hx-section hx-faq">
                <div className="hx-section-head" data-aos="fade-up">
                    <span className="hx-kicker">FAQ</span>
                    <h2 className="hx-h2">Fire safety questions, answered.</h2>
                </div>
                <div className="hx-faq-list">
                    {FAQS.map((f, i) => (
                        <details className="hx-faq-item" key={i} {...(i === 0 ? { open: true } : {})}>
                            <summary className="hx-faq-q">{f.q}</summary>
                            <p className="hx-faq-a">{f.a}</p>
                        </details>
                    ))}
                </div>
            </section>

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
