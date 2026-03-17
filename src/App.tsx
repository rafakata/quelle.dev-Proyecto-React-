import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AboutIntro from './components/AboutIntro';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <div className="hero-bg">
        <Hero />
        <Navbar />
      </div>
      <main className="main-bg">
        <AboutIntro />
      </main>
      <Footer />
    </div>
  );
};

export default App;