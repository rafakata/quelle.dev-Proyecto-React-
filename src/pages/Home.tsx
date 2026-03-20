import React from 'react';
import Hero from '../components/Hero';
import AboutIntro from '../components/AboutIntro';
import { Services } from '../components/Services';
import { TechStack } from '../components/TechStack';
import { CtaHome } from '../components/CtaHome';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  const scrollToMain = () => {
    const mainSection = document.getElementById('main-content');
    if (mainSection) {
      mainSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section className="hero-bg" id="hero">
        <Hero onScrollNext={scrollToMain} />
      </section>

      <section id="main-content" className="content-section">
        <Navbar />
        <main className="main-bg">
          <AboutIntro />
          <Services />
          <TechStack />
          <CtaHome />
        </main>
      </section>
    </>
  );
};

export default Home;