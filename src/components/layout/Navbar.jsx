import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About & Education', path: '/about' },
        { name: 'Experience', path: '/experience' },
        { name: 'Skills', path: '/skills' },
        { name: 'Contact', path: '/contact' },
    ];

    const genericClose = () => setIsOpen(false);

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo" onClick={genericClose}>
                    M. Adnan Khan
                </Link>

                {/* Mobile menu toggle */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Links */}
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'active-link' : ''}`}
                                onClick={genericClose}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
