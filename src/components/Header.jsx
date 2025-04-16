import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">
          <img src="/src/assets/logo-header.svg" alt="Evolux360" className="h-8" />
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#recursos" className="hover:text-primary transition-colors">Recursos</a>
          <a href="#porque" className="hover:text-primary transition-colors">Por que Evolux?</a>
          <a href="#beneficios" className="hover:text-primary transition-colors">Benefícios</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </nav>
        <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all">
          Contato
        </button>
      </div>
    </header>
  );
};

export default Header;
