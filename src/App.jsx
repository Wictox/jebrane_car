import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import BookingForm from './pages/BookingForm';
import BookingSuccess from './pages/BookingSuccess';
import ScrollToTop from './components/ScrollToTop'; // We'll create this to scroll top on nav

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car/:id" element={<CarDetails />} />
          <Route path="/booking/:id" element={<BookingForm />} />
          <Route path="/success" element={<BookingSuccess />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
