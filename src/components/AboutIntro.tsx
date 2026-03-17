import React from 'react';

const AboutIntro: React.FC = () => {
  return (
    <section className="bg-black text-white px-8 py-24 font-poppins flex flex-col items-center text-center">
      <h2 className="text-4xl md:text-5xl font-semibold mb-6">
        Bienvenido a quelle.dev
      </h2>
      <p className="max-w-3xl text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
        En <span className="font-semibold text-white">quelle.dev</span> fusionamos el desarrollo Fullstack con estrategia de marketing para convertir tus visitas en clientes.
      </p>
      <p className="text-[#cbff31] font-mono font-bold text-xl md:text-2xl">
        Código limpio, soluciones reales.
      </p>
    </section>
  );
};

export default AboutIntro;