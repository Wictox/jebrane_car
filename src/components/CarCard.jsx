import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({ car }) => {
    return (
        <div className="car-card">
            <div className="car-image">
                <img src={car.image} alt={`${car.brand} ${car.model}`} />
                <span className="category-badge">{car.category}</span>
            </div>
            <div className="car-details">
                <div className="car-header">
                    <h3>{car.brand} {car.model}</h3>
                    <span className="year">{car.year}</span>
                </div>
                <div className="car-specs">
                    <span><i className="fas fa-cog"></i> {car.transmission}</span>
                    <span><i className="fas fa-gas-pump"></i> Diesel/Essence</span>
                    <span><i className="fas fa-user"></i> 5 Places</span>
                </div>
                <div className="car-footer">
                    <div className="price">
                        <span className="amount">{car.price} DH</span>
                        <span className="period">/ jour</span>
                    </div>
                    <Link to={`/car/${car.id}`} className="btn-card" style={{ textDecoration: 'none', textAlign: 'center' }}>Louer Maintenant</Link>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
