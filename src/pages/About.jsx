import { Link } from 'react-router-dom';
import { Target, Eye, ShieldCheck, CheckCircle2, ArrowRight, Flame, Quote } from 'lucide-react';
import SEO from '../components/SEO';
import { breadcrumbSchema } from '../utils/schema';

const pillars = [
    {
        icon: <Target size={24} color="var(--accent)" />,
        title: 'Our Mission',
        text: 'To safeguard lives and assets by delivering reliable, standards-compliant fire protection — engineered, installed and maintained to the highest quality.',
    },
    {
        icon: <Eye size={24} color="var(--accent)" />,
        title: 'Our Vision',
        text: "To be West Bengal's most trusted fire safety partner, recognised for engineering excellence and lasting client relationships.",
    },
    {
        icon: <ShieldCheck size={24} color="var(--accent)" />,
        title: 'Our Promise',
        text: 'Honest advice, certified equipment, meticulous installation and responsive 24/7 support on every project — big or small.',
    },
];

const whyPoints = [
    'Founded with a forward-looking approach to the market',
    'Best-in-class quality assurance on every product',
    'Capability to handle long-distance projects',
    'Top-of-the-line fitting & installation guidance',
    'Skilled, certified technical workmanship',
    'Dependable after-sales service & 24/7 support',
];

const stats = [
    { num: '2023', label: 'Year Founded' },
    { num: '100%', label: 'Quality Assured' },
    { num: '24/7', label: 'After-Sales Support' },
    { num: 'West Bengal', label: 'Statewide Coverage' },
];

function About() {
    return (
        <div className="about-page">
            <SEO
                title="About Us"
                description="Learn about PM Enterprises, founded in 2023. We provide reliable fire safety installations and top-tier workmanship across West Bengal."
                keywords="about PM Enterprises, fire safety company West Bengal, Simurali Nadia, quality fire safety installations"
                url="/about"
                schema={breadcrumbSchema([
                    { name: 'Home', path: '/' },
                    { name: 'About', path: '/about' },
                ])}
            />

            {/* HERO */}
            <section className="ab-hero">
                <div className="ab-hero-text" data-aos="fade-up">
                    <span className="hx-eyebrow"><Flame size={14} /> About PM Enterprises</span>
                    <h1 className="ab-hero-title">Engineering fire safety you can <span>rely on</span>.</h1>
                    <p className="ab-lead">
                        PM Enterprises is a West Bengal–based fire safety company delivering the supply,
                        installation and maintenance of fire protection systems for residential, commercial
                        and industrial buildings. Since 2023, we've built our reputation on quality assurance,
                        dependable after-sales service and code-compliant workmanship.
                    </p>
                    <div className="ab-hero-actions">
                        <Link to="/services" className="btn btn-primary btn-large">Our Services <ArrowRight size={18} /></Link>
                        <Link to="/contact" className="btn btn-ghost btn-large">Get in Touch</Link>
                    </div>
                </div>
                <div className="ab-hero-media" data-aos="fade-left">
                    <img src="/images/ui/hero-fire-pipes.jpg" alt="Industrial fire protection piping installed by PM Enterprises" />
                </div>
            </section>

            {/* STATS */}
            <section className="ab-stats">
                <div className="ab-stats-inner">
                    {stats.map(s => (
                        <div className="ab-stat" key={s.label}>
                            <span className="ab-stat-num">{s.num}</span>
                            <span className="ab-stat-label">{s.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* MOTTO */}
            <section className="ab-motto">
                <div className="ab-motto-inner" data-aos="fade-up">
                    <Quote className="ab-motto-mark" size={40} />
                    <p className="ab-motto-text">Your safety is <span>our responsibility</span>.</p>
                    <span className="ab-motto-by">— The PM Enterprises Promise</span>
                </div>
            </section>

            {/* MISSION / VISION / PROMISE */}
            <section className="ab-section">
                <div className="ab-section-head" data-aos="fade-up">
                    <span className="ab-kicker">What drives us</span>
                    <h2 className="ab-h2">Built on safety, quality and trust.</h2>
                </div>
                <div className="ab-pillars">
                    {pillars.map((p, i) => (
                        <article className="ab-pillar" key={p.title} data-aos="fade-up" data-aos-delay={i * 100}>
                            <div className="ab-pillar-icon">{p.icon}</div>
                            <h3>{p.title}</h3>
                            <p>{p.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            {/* STORY + WHY CHOOSE US */}
            <section className="ab-split">
                <div className="ab-split-inner">
                    <div className="ab-story" data-aos="fade-up">
                        <span className="ab-kicker">Our approach</span>
                        <h2 className="ab-h2">Workmanship that earns trust.</h2>
                        <p>
                            Based in Simurali, Nadia, PM Enterprises was founded with a forward-looking view of
                            the market — ensuring customers get the best fire safety equipment to deal with any
                            emergency. We handle long-distance projects, maintain proper equipment and fitting
                            flows to the desired location, and provide top-of-the-line installation guidance.
                        </p>
                        <p>
                            Our goal isn't just to sell equipment — it's to build lasting trust through dependable
                            after-sales service and technical workmanship that means when you pay the price, you
                            get exactly the protection you expect.
                        </p>
                    </div>
                    <div className="ab-why" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="ab-why-title">Why choose PM Enterprises</h3>
                        <ul className="ab-why-list">
                            {whyPoints.map(point => (
                                <li key={point}>
                                    <CheckCircle2 size={18} color="var(--accent)" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="hx-cta-band">
                <div className="hx-cta-inner">
                    <div>
                        <h2 className="hx-cta-title">Let's secure your building.</h2>
                        <p>Talk to our team for a tailored fire protection plan and a fast quote.</p>
                    </div>
                    <Link to="/contact" className="btn btn-primary btn-large">Contact Us <ArrowRight size={18} /></Link>
                </div>
            </section>
        </div>
    );
}

export default About;
