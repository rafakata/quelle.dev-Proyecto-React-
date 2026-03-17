import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AboutIntro from './components/AboutIntro';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-poppins selection:bg-[#cbff31] selection:text-black">
      
      {/* Contenedor principal Verde */}
      <div className="bg-[#cbff31] min-h-screen flex flex-col">
        <Hero />
        {/* El Navbar se queda anclado abajo del hero, separando del negro */}
        <div className="sticky top-0 z-50 shadow-sm">
          <Navbar />
        </div>
      </div>

      {/* Contenedor principal Negro */}
      <main className="bg-black">
        <AboutIntro />
      </main>

      {/* Footer que ya teníamos adaptado a negro */}
      <Footer />
    </div>
  );
};

export default App;