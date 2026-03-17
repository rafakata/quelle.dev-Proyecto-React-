import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-[#cbff31] flex-grow flex flex-col justify-center items-center px-6 pt-20 pb-16 text-center font-poppins relative">
      
      <h1 className="text-5xl md:text-[5.5rem] font-semibold text-black max-w-5xl leading-[1.1] tracking-tight mb-10">
        Soluciones web que hablan el idioma de tu negocio.
      </h1>

      <button className="bg-black text-[#cbff31] px-10 py-4 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-lg">
        Conócenos
      </button>

      {/* Flecha doble hacia abajo */}
      <div className="mt-16 animate-bounce cursor-pointer">
        <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;