import React from 'react';

const Features = () => {
  return (
    <section id="recursos" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Tudo o que você precisa em um só lugar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Gestão Financeira',
              description: 'Controle completo das finanças da sua empresa com relatórios detalhados e em tempo real.'
            },
            {
              title: 'Automação de Processos',
              description: 'Automatize tarefas repetitivas e aumente a produtividade da sua equipe.'
            },
            {
              title: 'Integração Total',
              description: 'Conecte todos os departamentos da sua empresa em uma única plataforma.'
            },
            {
              title: 'Análise de Dados',
              description: 'Tome decisões baseadas em dados com dashboards personalizados.'
            },
            {
              title: 'Gestão de Equipes',
              description: 'Acompanhe o desempenho da sua equipe e otimize a distribuição de tarefas.'
            },
            {
              title: 'Atendimento ao Cliente',
              description: 'Centralize o atendimento e melhore a experiência dos seus clientes.'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
