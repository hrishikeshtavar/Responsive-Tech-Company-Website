import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Wifi, Database, Shield, Cloud, Zap } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel';
import { useSiteContent } from '../context/SiteContentContext';
import type { IconKey } from '../lib/siteContent';

// Import images from src/assets
import work1 from '../../assets/ee1f533d6643fba6d67d16aeeecda30c465f7d7e.png';
import work2 from '../../assets/9d96ad7bf33cb50b6d872f5afc6686548f8f38a0.png';
import work3 from '../../assets/816540b8e2c65b192123ec8b53955413bb48ba11.png';
import work4 from '../../assets/felicitation.JPG';
import work5 from '../../assets/manufacturing.jpg';

export function IoTShowcase() {
  const { content } = useSiteContent();
  const section = content.iot;
  const iotFeatures = section.features;
  const iconMap: Record<IconKey, React.ComponentType<{ className?: string }>> = {
    cpu: Cpu,
    wifi: Wifi,
    database: Database,
    shield: Shield,
    cloud: Cloud,
    zap: Zap,
    code: Cpu,
    smartphone: Cpu,
    globe: Cpu,
    brain: Cpu,
    code2: Cpu,
    target: Cpu,
    lightbulb: Cpu,
    rocket: Cpu,
    beaker: Cpu,
    trendingUp: Cpu,
    users: Cpu,
    award: Cpu,
    bookOpen: Cpu,
  };

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-pink-500/10 rounded-full blur-3xl top-20 right-20 animate-pulse" />
        <div className="absolute w-96 h-96 bg-red-500/10 rounded-full blur-3xl bottom-20 left-20 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            {section.titlePrefix}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-500">
              {section.titleHighlight}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {section.subtitle}
          </p>
        </motion.div>

        {/* Field Work Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 rounded-xl border border-slate-700 hover:border-pink-500/50 transition-all duration-300 p-4 bg-slate-800/40 backdrop-blur-sm">
          <h3 className="text-xl text-white mb-3 text-center">
           {section.implementationTitle}
          </h3>

           <p className="text-gray-300 text-sm text-center mb-6 max-w-2xl mx-auto">
             {section.implementationDescription}
           </p>

  <Carousel className="w-full max-w-3xl mx-auto">
    <CarouselContent>
      {[work1, work2, work3].map((image, index) => (
        <CarouselItem key={index}>
          <div className="overflow-hidden rounded-lg bg-slate-900 flex items-center justify-center">
            <img
                      src={image}
              alt={`Work showcase ${index + 1}`}
              className="w-full object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>

    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
        </motion.div>

        {/* IoT Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {iotFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Cpu;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-pink-500/50 transition-all duration-300"
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>

                <h3 className="text-lg text-white mb-2 group-hover:text-pink-400 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-pink-500/10 to-red-500/10 border border-pink-500/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl text-white mb-6 text-center">{section.applicationAreaTitle}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {section.useCases.map((useCase, index) => (
              <motion.div
                key={useCase}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center hover:border-pink-500/50 transition-all duration-300"
              >
                <p className="text-gray-300 text-sm">{useCase}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
