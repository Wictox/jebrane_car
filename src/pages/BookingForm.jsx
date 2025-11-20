import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { cars } from '../data/cars';

const BookingForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const car = cars.find(c => c.id === parseInt(id));

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        startDate: '',
        duration: '1'
    });

    if (!car) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, we would send this data to a backend
        console.log('Booking submitted:', { car, ...formData });
        navigate('/success');
    };

    const total = car.price * parseInt(formData.duration);

    return (
        <div className="booking-page" style={{ paddingTop: '100px', paddingBottom: '50px', background: '#f9f9f9', minHeight: '100vh' }}>
            <div className="container">
                <div className="booking-container" style={{ maxWidth: '800px', margin: '0 auto', background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
                    <div className="booking-header" style={{ background: '#1a1a1a', color: 'white', padding: '30px', textAlign: 'center' }}>
                        <h2>Finaliser votre réservation</h2>
                        <p>Vous êtes sur le point de réserver: <span style={{ color: '#d4af37' }}>{car.brand} {car.model}</span></p>
                    </div>

                    <div className="booking-body" style={{ padding: '40px' }}>
                        <form onSubmit={handleSubmit}>
                            <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Nom Complet</label>
                                    <input type="text" name="name" required onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} placeholder="Votre nom" />
                                </div>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Téléphone</label>
                                    <input type="tel" name="phone" required onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} placeholder="+212..." />
                                </div>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email (Optionnel)</label>
                                    <input type="email" name="email" onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} placeholder="email@exemple.com" />
                                </div>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Date de début</label>
                                    <input type="date" name="startDate" required onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                                </div>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Durée (jours)</label>
                                    <input type="number" name="duration" min="1" value={formData.duration} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                                </div>
                            </div>

                            <div className="booking-summary" style={{ background: '#f4f4f4', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                    <span>Prix par jour:</span>
                                    <span>{car.price} DH</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                    <span>Durée:</span>
                                    <span>{formData.duration} jours</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #ddd', paddingTop: '10px', fontWeight: 'bold', fontSize: '1.2rem' }}>
                                    <span>Total:</span>
                                    <span style={{ color: '#d4af37' }}>{total} DH</span>
                                </div>
                            </div>

                            <button type="submit" className="btn-primary" style={{ width: '100%', fontSize: '1.1rem', padding: '15px' }}>Confirmer la Réservation</button>
                            <Link to={`/car/${car.id}`} style={{ display: 'block', textAlign: 'center', marginTop: '15px', color: '#888' }}>Annuler</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;
