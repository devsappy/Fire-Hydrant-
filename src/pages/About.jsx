function About() {
    return (
        <div className="page-container about-page">
            <div className="about-hero">
                <div className="about-hero-content">
                    <h1 className="page-title">ABOUT PM ENTERPRISES</h1>
                    <p className="page-subtitle">Quality assurance and innovative fire safety solutions since 2023.</p>
                </div>
            </div>

            <div className="about-content-grid">
                <div className="about-text-section">
                    <h2>Our Vision & Mission</h2>
                    <p>Founded in 2023, PM Enterprises is a fire safety installation company for small scale to high scale buildings. We are dedicated to providing you with the best quality assurance, reliable after sale service, and innovative ways to comply with all types of fire safety rules and regulations.</p>
                    <p>Our company was founded with a future look to the market—ensuring customers get their hands on the best fire safety equipments to deal with any mishaps. Based in Simurali, Nadia, we work on long distance projects handling and maintain proper equipments and fitting flows to the desired location, providing top of the line fitting instructions.</p>
                    <h2 className="mt-40">Our Workmanship</h2>
                    <p>We provide the best technical workmanships in the market so that when you pay the price, you get the exact product that you expect. Our goal is not just to sell equipment, but to build a lasting trust with you through our dependable after sale services.</p>
                </div>

                <div className="about-stats-section">
                    <div className="stat-card">
                        <div className="stat-number">2023</div>
                        <div className="stat-label">Year Founded</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">100%</div>
                        <div className="stat-label">Quality Assurance</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">24/7</div>
                        <div className="stat-label">After Sale Service</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">HQ</div>
                        <div className="stat-label">Simurali, Nadia</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
