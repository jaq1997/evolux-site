import React from 'react';

const FAQ = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Dúvidas Frequentes</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              question: 'Quanto tempo leva para implementar a Evolux360?',
              answer: 'O processo de implementação geralmente leva de 2 a 4 semanas, dependendo do tamanho da sua empresa e da complexidade dos processos.'
            },
            {
              question: 'A plataforma é difícil de usar?',
              answer: 'Não! A Evolux360 foi desenvolvida pensando na experiência do usuário. A interface é intuitiva e oferecemos treinamento completo para sua equipe.'
            },
            {
              question: 'Posso integrar com outros sistemas que já uso?',
              answer: 'Sim, a Evolux360 possui APIs que permitem integração com diversos sistemas e ferramentas do mercado.'
            },
            {
              question: 'Qual o suporte oferecido?',
              answer: 'Oferecemos suporte técnico 24/7 por chat, e-mail e telefone, além de uma base de conhecimento completa com tutoriais e guias.'
            },
            {
              question: 'A plataforma é segura?',
              answer: 'Absolutamente! Utilizamos criptografia de ponta a ponta e seguimos os mais rigorosos padrões de segurança da informação.'
            }
          ].map((item, index) => (
            <div key={index} className="bg-light p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
