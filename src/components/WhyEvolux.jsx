import React from 'react';

const WhyEvolux = () => {
  return (
    <section id="porque" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Por que a Evolux?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: 'Tecnologia de ponta',
              description: 'Utilizamos as mais modernas tecnologias para garantir desempenho e segurança.'
            },
            {
              title: 'Suporte especializado',
              description: 'Equipe de suporte pronta para ajudar em qualquer momento que você precisar.'
            },
            {
              title: 'Personalização completa',
              description: 'Adapte a plataforma às necessidades específicas do seu negócio.'
            },
            {
              title: 'Escalabilidade',
              description: 'Cresça sem preocupações, nossa plataforma cresce junto com sua empresa.'
            }
          ].map((item, index) => (
            <div key={index} className="bg-light p-8 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEvolux;
