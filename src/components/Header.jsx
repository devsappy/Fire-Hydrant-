import { useState, useEffect, Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navItems = [
    { to: '/', label: 'HOME', desc: 'Back to the homepage', end: true },
    { to: '/products', label: 'PRODUCTS', desc: 'Browse our fire safety catalog' },
    { to: '/services', label: 'SERVICES', desc: 'Installation, AMC & safety audits' },
    { to: '/projects', label: 'PROJECTS', desc: 'Our completed installations' },
    { to: '/about', label: 'ABOUT US', desc: 'Who we are & our mission' },
    { to: '/blog', label: 'BLOG', desc: 'Fire safety guides & news' },
    { to: '/contact', label: 'CONTACT', desc: 'Get a quote or reach us' },
];

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // Lock background scroll while the full-screen mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

    return (
        <header className="site-header">
            <div className="header-inner">
                <div className="logo-container">
                    <img src="/images/ui/pmenterpriseslogo.png" alt="PM Enterprises Logo" className="logo-icon" style={{ height: '65px', width: 'auto', objectFit: 'contain' }} />
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
                    {navItems.map((item, i) => (
                        <Fragment key={item.to}>
                            <NavLink
                                to={item.to}
                                end={item.end}
                                onClick={closeMenu}
                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                            >
                                <span className="nav-link-label">{item.label}</span>
                                <ChevronRight className="nav-link-arrow" size={18} />
                                <span className="nav-link-desc">{item.desc}</span>
                            </NavLink>
                            {i < navItems.length - 1 && <span className="nav-divider">|</span>}
                        </Fragment>
                    ))}
                    <span className="nav-divider">|</span>
                    <div 
                        onClick={toggleTheme} 
                        style={{
                            width: '46px',
                            height: '24px',
                            backgroundColor: theme === 'dark' ? '#333' : '#e0e0e0',
                            borderRadius: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer',
                            justifyContent: theme === 'dark' ? 'flex-end' : 'flex-start',
                            padding: '0 2px',
                            transition: 'background-color 0.3s ease'
                        }}
                        aria-label="Toggle Theme"
                    >
                        <motion.div
                            layout
                            transition={{ type: "spring", stiffness: 700, damping: 30 }}
                            style={{
                                width: '20px',
                                height: '20px',
                                backgroundColor: '#fff',
                                borderRadius: '50%',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            {theme === 'dark' ? <Moon size={12} color="#333" /> : <Sun size={12} color="#f39c12" />}
                        </motion.div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
