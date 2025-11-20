import React from 'react';
import { Link } from 'react-router-dom';

const BookingSuccess = () => {
    return (
        <div className="success-page" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9f9f9' }}>
            <div className="container" style={{ textAlign: 'center', maxWidth: '600px', padding: '40px', background: 'white', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
                <div className="icon-circle" style={{ width: '80px', height: '80px', background: '#d4af37', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <i className="fas fa-check" style={{ fontSize: '40px', color: 'white' }}></i>
                </div>
                <h1 style={{ marginBottom: '20px', color: '#1a1a1a' }}>Demande Reçue !</h1>
                <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '30px', lineHeight: '1.6' }}>
                    Merci d'avoir choisi JebraneCar. Nous avons bien reçu votre demande de réservation.
                    <br />
                    <strong>Nous vous appellerons très bientôt pour confirmer les détails.</strong>
                </p>
                <Link to="/" className="btn-primary">Retour à l'accueil</Link>
            </div>
        </div>
    );
};

export default BookingSuccess;
