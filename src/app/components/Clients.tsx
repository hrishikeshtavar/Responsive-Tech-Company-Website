import React from 'react';
import { motion } from 'motion/react';
import { Shield, Award, Users } from 'lucide-react';

const clients = [
  {
    name: 'Indian Army',
    description: 'Developed secure communication and management systems',
    icon: Shield,
  },
  {
    name: 'Indian Forest Department',
    description: 'Created wildlife tracking and forest management solutions',
    icon: Users,
  },
  {
    name: 'Guinness Book of Records',
    description: 'Built digital platforms for record verification and management',
    icon: Award,
  },
];

export function Clients() {
  return (
    <section id="clients" className="relative py-20 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Industry Leaders</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We've had the privilege of working with prestigious organizations across various sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Background Gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {client.name}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {client.description}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
            <div className="text-4xl mb-2">🏆</div>
            <p className="text-gray-300">Award-Winning Solutions</p>
          </div>
          <div className="text-center p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
            <div className="text-4xl mb-2">🔒</div>
            <p className="text-gray-300">Enterprise-Grade Security</p>
          </div>
          <div className="text-center p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
            <div className="text-4xl mb-2">⚡</div>
            <p className="text-gray-300">Rapid Deployment</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}