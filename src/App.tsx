import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AboutIntro from './components/AboutIntro';
import { Services } from './components/Services';
import { TechStack } from './components/TechStack';
import { CtaHome } from './components/CtaHome';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  const scrollToMain = () => {
    const mainSection = document.getElementById('main-content');
    if (mainSection) {
      mainSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="app-container">
      <section className="hero-bg" id="hero">
        <Hero onScrollNext={scrollToMain} />
      </section>

      <section id="main-content" className="content-section">
        <Navbar />
        <main className="main-bg">
          <AboutIntro />
          {/* Nuevas secciones del portfolio */}
          <Services />
          <TechStack />
          <CtaHome />
        </main>
        <Footer />
      </section>
    </div>
  );
};

export default App;