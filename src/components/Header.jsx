import { NavLink, Link } from 'react-router-dom';

const HydrantLogo = () => (
    <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 21h10v2H7z" fill="#c0392b" />
        <rect x="9" y="8" width="6" height="13" fill="#c0392b" />
        <path d="M12 2c-2.5 0-4 3-4 3h8s-1.5-3-4-3z" fill="#c0392b" />
        <path d="M5 11h4v4H5c-1 0-2-1-2-2s1-2 2-2z" fill="#c0392b" />
        <path d="M19 11h-4v4h4c1 0 2-1 2-2s-1-2-2-2z" fill="#c0392b" />
        <path d="M10 10h3c1.1 0 1.5.9 1.5 1.5S14.1 13 13 13h-2v3h-1v-6zm1 1v1h2c.2 0 .5-.2.5-.5S14.2 11 14 11h-2z" fill="#fff" />
    </svg>
);

function Header() {
    return (
        <header className="site-header">
            <div className="header-inner">
                <div className="logo-container">
                    <HydrantLogo />
                    <Link to="/" className="logo-text">
                        <span className="logo-p">P</span>PM<span className="logo-enterprise">ENTERPRISE</span>
                    </Link>
                </div>
                <nav className="main-nav">
                    <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} end>HOME</NavLink>
                    <span className="nav-divider">|</span>
                    <NavLink to="/products" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>PRODUCTS</NavLink>
                    <span className="nav-divider">|</span>
                    <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>SERVICES</NavLink>
                    <span className="nav-divider">|</span>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>PROJECTS</NavLink>
                    <span className="nav-divider">|</span>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>ABOUT US</NavLink>
                    <span className="nav-divider">|</span>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>CONTACT</NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;
