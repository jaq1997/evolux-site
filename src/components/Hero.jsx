import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-white mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Centralize. Simplifique. Gerencie.</h1>
          <p className="text-xl mb-8">A plataforma completa para gestão empresarial integrada e automatizada.</p>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-primary font-bold mb-4">Comece agora mesmo</h3>
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="w-full p-3 border border-gray-300 rounded mb-4"
            />
            <button className="w-full bg-primary text-white py-3 rounded font-medium hover:bg-opacity-90 transition-all">
              Quero conhecer a Evolux360
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="/src/assets/hero-image.png" 
            alt="Dashboard Evolux360" 
            className="w-full rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
