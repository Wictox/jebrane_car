import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CarList from './components/CarList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CarList />
      <Footer />
    </div>
  );
}

export default App;
