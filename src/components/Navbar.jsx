import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper to handle navigation
    const getLink = (hash) => {
        return isHome ? hash : `/${hash}`;
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <div className="logo">
                    <Link to="/"><h1>Jebrane<span>Car</span></h1></Link>
                </div>
                <ul className="nav-links">
                    <li><a href={getLink('#home')}>Accueil</a></li>
                    <li><a href={getLink('#fleet')}>Notre Flotte</a></li>
                    <li><a href={getLink('#about')}>À Propos</a></li>
                    <li><a href={getLink('#contact')} className="btn-primary">Contactez-nous</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
