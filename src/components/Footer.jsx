import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <h3>Jebrane<span>Car</span></h3>
                    <p>Votre partenaire de confiance pour la location de voitures au Maroc. Qualité, fiabilité et excellent service garantis.</p>
                </div>
                <div className="footer-col">
                    <h4>Liens Rapides</h4>
                    <ul>
                        <li><a href="#home">Accueil</a></li>
                        <li><a href="#fleet">Flotte</a></li>
                        <li><a href="#about">À Propos</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Contact</h4>
                    <ul>
                        <li><i className="fas fa-phone"></i> +212 661-463399</li>
                        <li><i className="fas fa-envelope"></i> contact@jebranecar.ma</li>
                        <li><i className="fas fa-map-marker-alt"></i> Casablanca, Maroc</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Suivez-nous</h4>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="https://wa.me/212661463399" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 JebraneCar. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;
