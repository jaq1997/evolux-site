import React from 'react';

const CTA = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar a gestão do seu negócio?</h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto">
          Agende uma demonstração gratuita e descubra como a Evolux360 pode ajudar sua empresa a crescer.
        </p>
        <a 
          href="https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Evolux360"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-primary font-bold px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all inline-block"
        >
          Falar com um consultor pelo WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CTA;
