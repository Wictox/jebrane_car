import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { cars } from '../data/cars';

const CarDetails = () => {
    const { id } = useParams();
    const car = cars.find(c => c.id === parseInt(id));

    if (!car) {
        return <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}><h2>Voiture non trouvée</h2><Link to="/" className="btn-primary">Retour à l'accueil</Link></div>;
    }

    return (
        <div className="car-details-page" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
            <div className="container">
                <Link to="/" className="back-link" style={{ display: 'inline-block', marginBottom: '20px', color: '#888' }}><i className="fas fa-arrow-left"></i> Retour</Link>
                <div className="details-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                    <div className="details-image">
                        <img src={car.image} alt={`${car.brand} ${car.model}`} style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                    </div>
                    <div className="details-content">
                        <span className="category-badge" style={{ background: '#d4af37', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '0.9rem' }}>{car.category}</span>
                        <h1 style={{ fontSize: '2.5rem', margin: '15px 0' }}>{car.brand} {car.model}</h1>
                        <div className="price-tag" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#d4af37', marginBottom: '20px' }}>
                            {car.price} DH <span style={{ fontSize: '1rem', color: '#888', fontWeight: 'normal' }}>/ jour</span>
                        </div>

                        <div className="specs-list" style={{ marginBottom: '30px' }}>
                            <h3 style={{ marginBottom: '15px' }}>Caractéristiques</h3>
                            <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                <li><i className="fas fa-calendar" style={{ color: '#d4af37', width: '25px' }}></i> Année: {car.year}</li>
                                <li><i className="fas fa-cog" style={{ color: '#d4af37', width: '25px' }}></i> Transmission: {car.transmission}</li>
                                <li><i className="fas fa-gas-pump" style={{ color: '#d4af37', width: '25px' }}></i> Carburant: Diesel/Essence</li>
                                <li><i className="fas fa-user" style={{ color: '#d4af37', width: '25px' }}></i> Places: 5</li>
                                <li><i className="fas fa-snowflake" style={{ color: '#d4af37', width: '25px' }}></i> Climatisation: Oui</li>
                                <li><i className="fas fa-music" style={{ color: '#d4af37', width: '25px' }}></i> Audio: Bluetooth/USB</li>
                            </ul>
                        </div>

                        <div className="action-area">
                            <Link to={`/booking/${car.id}`} className="btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block', fontSize: '1.1rem' }}>Réserver Maintenant</Link>
                            <p style={{ marginTop: '15px', fontSize: '0.9rem', color: '#888', textAlign: 'center' }}><i className="fas fa-check-circle" style={{ color: 'green' }}></i> Disponible immédiatement</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;
