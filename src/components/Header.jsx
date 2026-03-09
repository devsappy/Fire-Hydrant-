import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="site-header">
            <div className="header-inner">
                <div className="logo-container">
                    <img src="/images/pmenterpriseslogo.png" alt="PM Enterprises Logo" className="logo-icon" style={{ height: '65px', width: 'auto', objectFit: 'contain' }} />
                    <Link to="/" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }} onClick={closeMenu}>
                        <div className="logo-text" style={{ display: 'flex', alignItems: 'baseline', lineHeight: '1' }}>
                            <span className="logo-p">PM</span>
                            <span className="logo-enterprise" style={{ marginLeft: '6px' }}>ENTERPRISES</span>
                        </div>
                        <div style={{ color: '#c0392b', fontSize: '12.5px', fontWeight: '800', letterSpacing: '5px', marginTop: '5px' }}>
                            FIRE SAFETY
                        </div>
                    </Link>
                </div>

                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
                    <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu} end>HOME</NavLink>
                    <span className="nav-divider">|</span>
                    <NavLink to="/products" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>PRODUCTS</NavLink>
                    <span className="nav-divider">|</span>
                    <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>SERVICES</NavLink>
                    <span className="nav-divider">|</span>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>PROJECTS</NavLink>
                    <span className="nav-divider">|</span>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>ABOUT US</NavLink>
                    <span className="nav-divider">|</span>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>CONTACT</NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;
