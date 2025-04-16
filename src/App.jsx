import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyEvolux from './components/WhyEvolux';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Evolux360 | Sistema de Gestão Empresarial Integrado</title>
        <meta name="description" content="Evolux360: A plataforma completa para gestão empresarial integrada e automatizada. Centralize, simplifique e gerencie todos os processos da sua empresa." />
        <meta name="keywords" content="gestão empresarial, ERP, automação, integração, sistema de gestão" />
        <meta property="og:title" content="Evolux360 | Sistema de Gestão Empresarial Integrado" />
        <meta property="og:description" content="A plataforma completa para gestão empresarial integrada e automatizada." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://evolux360.com.br" />
      </Helmet>
      <Header />
      <Hero />
      <Features />
      <WhyEvolux />
      <Benefits />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
