import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { cars } from '../data/cars';
import { supabase } from '../lib/supabaseClient';

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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    if (!car) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        if (!supabase) {
            setError("Configuration manquante: API Key Supabase non trouvée. Veuillez contacter l'administrateur.");
            setIsSubmitting(false);
            return;
        }

        try {
            const { error: supabaseError } = await supabase
                .from('bookings')
                .insert([
                    {
                        customer_name: formData.name,
                        phone: formData.phone,
                        email: formData.email,
                        car_model: `${car.brand} ${car.model}`,
                        start_date: formData.startDate,
                        duration: parseInt(formData.duration),
                        total_price: car.price * parseInt(formData.duration),
                        status: 'pending'
                    }
                ]);

            if (supabaseError) throw supabaseError;

            navigate('/success');
        } catch (err) {
            console.error('Error booking:', err);
            setError('Une erreur est survenue lors de la réservation. Veuillez réessayer ou nous contacter par téléphone.');
        } finally {
            setIsSubmitting(false);
        }
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

                            {error && <div style={{ color: 'red', marginBottom: '15px', textAlign: 'center' }}>{error}</div>}
                            <button type="submit" className="btn-primary" disabled={isSubmitting} style={{ width: '100%', fontSize: '1.1rem', padding: '15px', opacity: isSubmitting ? 0.7 : 1 }}>
                                {isSubmitting ? 'Traitement...' : 'Confirmer la Réservation'}
                            </button>
                            <Link to={`/car/${car.id}`} style={{ display: 'block', textAlign: 'center', marginTop: '15px', color: '#888' }}>Annuler</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;
