import React from 'react';
import { SEO } from './components/SEO';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { TechStack } from './components/TechStack';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Research } from './components/Research';
import { Blog } from './components/Blog';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { IoTShowcase } from './components/IoTShowcase';
import TrustedBy from "./components/TrustedBy";
import { Careers } from './components/Careers';

export default function App() {
  // Keep routing lightweight for this static deployment:
  // add/remove top-level pages by extending this pathname switch.
  const pathname = window.location.pathname;
  const isCareersPage = pathname === '/careers';

  if (isCareersPage) {
    return (
      <div className="min-h-screen bg-slate-900">
        <SEO
          title="Careers - Zenture IT Solutions"
          description="Explore open positions at Zenture IT Solutions and apply to join our team."
          keywords="careers, jobs, hiring, software engineer roles, Zenture IT Solutions"
          ogUrl="https://zenture.in/careers"
        />
        <ScrollProgress />
        <Navbar />
        <Careers />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Home page section order is managed here for easy content flow edits. */}
      <SEO />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <IoTShowcase />
      <TechStack />
      <Portfolio />
      <TrustedBy />
      <Research />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
