import React from "react";

const CTA = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para transformar a gestão do seu negócio?
        </h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto">
          Agende uma demonstração gratuita e descubra como a Evolux360 pode
          ajudar sua empresa a crescer.
        </p>
        <a
          href="https://docs.google.com/forms/d/1ntg0PTnYzT3779k5UuR1FaJI6srmx6pvaR6s1VxVy8E/viewform?pli=1&pli=1&edit_requested=true"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-primary font-bold px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all inline-block"
        >
          Preencha o formulário de interesse que entraremos em contato!
        </a>
      </div>
    </section>
  );
};

export default CTA;
