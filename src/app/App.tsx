import React from 'react';
import { SEO } from './components/SEO';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { TechStack } from './components/TechStack';
import { Portfolio } from './components/Portfolio';
import { Clients } from './components/Clients';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <SEO />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Services />
      <TechStack />
      <Portfolio />
      <Clients />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}