import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

const AdminDashboard = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLogin = (e) => {
        e.preventDefault();
        const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';
        if (password === adminPassword) {
            setIsAuthenticated(true);
            fetchBookings();
        } else {
            alert('Mot de passe incorrect');
        }
    };

    const fetchBookings = async () => {
        setLoading(true);

        if (!supabase) {
            setError("Configuration manquante: API Key Supabase non trouvée.");
            setLoading(false);
            return;
        }

        try {
            const { data, error } = await supabase
                .from('bookings')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setBookings(data);
        } catch (err) {
            console.error('Error fetching bookings:', err);
            setError('Erreur lors du chargement des réservations.');
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('fr-FR');
    };

    if (!isAuthenticated) {
        return (
            <div style={{ padding: '100px 20px', textAlign: 'center', minHeight: '60vh' }}>
                <h2>Accès Admin</h2>
                <form onSubmit={handleLogin} style={{ maxWidth: '300px', margin: '20px auto' }}>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Mot de passe"
                        style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
                    />
                    <button type="submit" className="btn-primary" style={{ width: '100%', padding: '10px' }}>Se connecter</button>
                </form>
            </div>
        );
    }

    return (
        <div style={{ padding: '100px 20px', minHeight: '80vh', background: '#f9f9f9' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                    <h2>Tableau de Bord - Réservations</h2>
                    <button onClick={fetchBookings} className="btn-primary" style={{ padding: '8px 15px', fontSize: '0.9rem' }}>Actualiser</button>
                </div>

                {loading ? (
                    <p>Chargement...</p>
                ) : error ? (
                    <p style={{ color: 'red' }}>{error}</p>
                ) : bookings.length === 0 ? (
                    <p>Aucune réservation trouvée.</p>
                ) : (
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
                            <thead>
                                <tr style={{ background: '#f4f4f4', textAlign: 'left' }}>
                                    <th style={{ padding: '15px' }}>Date</th>
                                    <th style={{ padding: '15px' }}>Client</th>
                                    <th style={{ padding: '15px' }}>Téléphone</th>
                                    <th style={{ padding: '15px' }}>Voiture</th>
                                    <th style={{ padding: '15px' }}>Début</th>
                                    <th style={{ padding: '15px' }}>Durée</th>
                                    <th style={{ padding: '15px' }}>Total</th>
                                    <th style={{ padding: '15px' }}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((booking) => (
                                    <tr key={booking.id} style={{ borderBottom: '1px solid #eee' }}>
                                        <td style={{ padding: '15px' }}>{formatDate(booking.created_at)}</td>
                                        <td style={{ padding: '15px', fontWeight: '500' }}>{booking.customer_name}</td>
                                        <td style={{ padding: '15px' }}>
                                            <a href={`tel:${booking.phone}`} style={{ color: '#d4af37' }}>{booking.phone}</a>
                                        </td>
                                        <td style={{ padding: '15px' }}>{booking.car_model}</td>
                                        <td style={{ padding: '15px' }}>{formatDate(booking.start_date)}</td>
                                        <td style={{ padding: '15px' }}>{booking.duration}j</td>
                                        <td style={{ padding: '15px', fontWeight: 'bold' }}>{booking.total_price} DH</td>
                                        <td style={{ padding: '15px' }}>
                                            <span style={{
                                                padding: '5px 10px',
                                                borderRadius: '20px',
                                                fontSize: '0.8rem',
                                                background: booking.status === 'pending' ? '#fff3cd' : '#d4edda',
                                                color: booking.status === 'pending' ? '#856404' : '#155724'
                                            }}>
                                                {booking.status === 'pending' ? 'En attente' : booking.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
