import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="badge">Location de Voitures Premium</span>
                    <h1>Conduisez Vos Rêves avec <span className="highlight">JebraneCar</span></h1>
                    <p>Découvrez la liberté de la route avec notre sélection de véhicules premium. Des citadines aux SUV de luxe, nous avons le véhicule parfait pour votre voyage au Maroc.</p>
                    <div className="hero-btns">
                        <a href="#fleet" className="btn-primary">Voir la Flotte</a>
                        <a href="#contact" className="btn-secondary">Réserver</a>
                    </div>
                    <div className="stats">
                        <div className="stat-item">
                            <h3>20+</h3>
                            <p>Voitures Premium</p>
                        </div>
                        <div className="stat-item">
                            <h3>24/7</h3>
                            <p>Support</p>
                        </div>
                        <div className="stat-item">
                            <h3>100%</h3>
                            <p>Satisfaction</p>
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="image-wrapper">
                        <img src={`${import.meta.env.BASE_URL}owner.jpg`} alt="Jebrane - Propriétaire de JebraneCar" />
                        <div className="owner-card">
                            <p>Jebrane</p>
                            <span>Fondateur & PDG</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
