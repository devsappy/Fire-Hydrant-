function About() {
    return (
        <div className="page-container about-page">
            <div className="about-hero">
                <div className="about-hero-content">
                    <h1 className="page-title">ABOUT PM ENTERPRISE</h1>
                    <p className="page-subtitle">Protecting communities through innovative engineering since 1988.</p>
                </div>
            </div>

            <div className="about-content-grid">
                <div className="about-text-section">
                    <h2>Our Story</h2>
                    <p>Founded in 1988, PM Enterprise began with a simple mission: to build the most reliable fire hydrants on the market. Decades later, we have grown into a leading provider of comprehensive fire protection and water control systems for municipal, industrial, and commercial applications.</p>
                    <p>Our commitment to quality manufacturing and innovative engineering has helped us protect thousands of communities nationwide. We believe that life-saving infrastructure should never be compromised, which is why every product that leaves our facility undergoes rigorous testing and certification.</p>

                    <h2 className="mt-40">Our Commitment to Quality</h2>
                    <p>All PM Enterprise hydrants and valves are manufactured in ISO 9001 certified facilities. We source only the highest grade cast iron, ductile iron, and bronze materials to ensure our products can withstand extreme temperatures, high pressure, and the test of time.</p>
                </div>

                <div className="about-stats-section">
                    <div className="stat-card">
                        <div className="stat-number">35+</div>
                        <div className="stat-label">Years of Excellence</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">50k+</div>
                        <div className="stat-label">Hydrants Installed</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">100%</div>
                        <div className="stat-label">UL/FM Certified</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">24/7</div>
                        <div className="stat-label">Support Available</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
