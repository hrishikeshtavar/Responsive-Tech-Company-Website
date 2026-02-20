import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code, Smartphone, Globe, Cpu, Brain, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Create stunning, responsive websites and web applications that drive engagement and deliver exceptional user experiences.',
    color: 'from-cyan-500 to-blue-500',
    delay: 0.1,
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs, built with modern technologies and best practices.',
    color: 'from-blue-500 to-purple-500',
    delay: 0.2,
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android that provide seamless user experiences.',
    color: 'from-purple-500 to-pink-500',
    delay: 0.3,
  },
  {
    icon: Cpu,
    title: 'IoT Development',
    description: 'Connect physical devices to the digital world with innovative IoT solutions that transform how businesses operate.',
    color: 'from-pink-500 to-red-500',
    delay: 0.4,
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'Harness the power of artificial intelligence and machine learning to automate processes and gain valuable insights.',
    color: 'from-red-500 to-orange-500',
    delay: 0.5,
  },
];

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-20 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive technology solutions to power your digital transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: service.delay }}
                whileHover={{ y: -10, scale: 1.02 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 0.1 : 0 }}
                  className={`absolute inset-0 bg-gradient-to-br ${service.color}`}
                />

                {/* Animated border gradient */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  style={{
                    background: `linear-gradient(45deg, transparent, ${hoveredIndex === index ? 'rgba(6, 182, 212, 0.1)' : 'transparent'}, transparent)`,
                  }}
                />

                <div className="relative z-10">
                  <motion.div 
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <h3 className="text-xl text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <motion.div 
                    className="flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <span className="text-sm mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}