import React from 'react';

const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 bg-primary bg-opacity-5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">A união perfeita entre gestão eficiente e inovação moderna</h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Descubra como a Evolux360 pode transformar a maneira como você gerencia seu negócio.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Redução de custos',
              description: 'Economize até 30% em custos operacionais com processos otimizados.'
            },
            {
              title: 'Aumento de produtividade',
              description: 'Ganhe mais tempo com automação de tarefas repetitivas.'
            },
            {
              title: 'Decisões mais assertivas',
              description: 'Tome decisões baseadas em dados reais e atualizados.'
            },
            {
              title: 'Melhor experiência do cliente',
              description: 'Ofereça um atendimento mais ágil e personalizado.'
            },
            {
              title: 'Controle total',
              description: 'Tenha visibilidade completa de todos os processos da sua empresa.'
            },
            {
              title: 'Escalabilidade',
              description: 'Cresça sem limites com uma plataforma que se adapta ao seu negócio.'
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
