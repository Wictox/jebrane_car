import React, { useState } from 'react';
import CarCard from './CarCard';
import { cars } from '../data/cars';

const CarList = () => {
    const [filter, setFilter] = useState('All');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const categories = ['All', ...new Set(cars.map(car => car.category))];

    const isCarAvailable = (car) => {
        if (!startDate || !endDate) return true;

        const start = new Date(startDate);
        const end = new Date(endDate);

        // Check if any unavailable range overlaps with selected range
        return !car.unavailableDates.some(range => {
            const rangeStart = new Date(range.start);
            const rangeEnd = new Date(range.end);

            return (start <= rangeEnd) && (end >= rangeStart);
        });
    };

    const filteredCars = cars.filter(car => {
        const categoryMatch = filter === 'All' || car.category === filter;
        const availabilityMatch = isCarAvailable(car);
        return categoryMatch && availabilityMatch;
    });

    return (
        <section id="fleet" className="fleet-section">
            <div className="container">
                <div className="section-header">
                    <h2>Notre Flotte Premium</h2>
                    <p>Choisissez parmi notre large gamme de véhicules de haute qualité</p>
                </div>

                <div className="filter-controls" style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                    <div className="date-filters" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <div className="input-group">
                            <label style={{ marginRight: '0.5rem', fontWeight: '500' }}>Du:</label>
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid #ddd' }}
                            />
                        </div>
                        <div className="input-group">
                            <label style={{ marginRight: '0.5rem', fontWeight: '500' }}>Au:</label>
                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid #ddd' }}
                            />
                        </div>
                    </div>

                    <div className="category-filters" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                                onClick={() => setFilter(cat)}
                            >
                                {cat === 'All' ? 'Tous' : cat}
                            </button>
                        ))}
                    </div>
                </div>

                {filteredCars.length > 0 ? (
                    <div className="cars-grid">
                        {filteredCars.map(car => (
                            <CarCard key={car.id} car={car} />
                        ))}
                    </div>
                ) : (
                    <div className="no-results" style={{ textAlign: 'center', padding: '3rem', color: '#888' }}>
                        <h3>Aucune voiture disponible pour cette période.</h3>
                        <p>Veuillez essayer d'autres dates ou catégories.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CarList;
