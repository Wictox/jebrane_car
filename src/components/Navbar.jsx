import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

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

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <div className="logo">
                    <h1>Jebrane<span>Car</span></h1>
                </div>
                <ul className="nav-links">
                    <li><a href="#home">Accueil</a></li>
                    <li><a href="#fleet">Notre Flotte</a></li>
                    <li><a href="#about">À Propos</a></li>
                    <li><a href="#contact" className="btn-primary">Contactez-nous</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
