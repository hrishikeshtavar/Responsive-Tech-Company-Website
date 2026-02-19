import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { TechStack } from './components/TechStack';
import { Clients } from './components/Clients';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <TechStack />
      <Clients />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}