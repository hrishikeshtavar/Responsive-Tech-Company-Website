import React from 'react';
import { motion } from 'motion/react';
import { Target, Lightbulb, Rocket, CheckCircle } from 'lucide-react';
import aboutImage from '../../assets/f8b170fa73ea4ab14a127e1e8a06fc491da0677a.png';
import { useSiteContent } from '../context/SiteContentContext';
import type { IconKey } from '../lib/siteContent';

export function About() {
  const { content } = useSiteContent();
  const about = content.about;
  const valueIconMap: Record<IconKey, React.ComponentType<{ className?: string }>> = {
    target: Target,
    lightbulb: Lightbulb,
    rocket: Rocket,
    wifi: Target,
    database: Target,
    shield: Target,
    cloud: Target,
    zap: Target,
    globe: Target,
    code: Target,
    smartphone: Target,
    cpu: Target,
    brain: Target,
    code2: Target,
    beaker: Target,
    trendingUp: Target,
    users: Target,
    award: Target,
    bookOpen: Target,
  };

  return (
    <section id="about" className="relative py-20 md:py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            {about.titlePrefix}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {about.titleHighlight}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {about.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={aboutImage}
                alt="Zenture IT Solutions Team Collaboration"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-6 shadow-2xl"
            >
              <div className="text-white">
                <p className="text-3xl mb-1">{about.yearsValue}</p>
                <p className="text-sm opacity-90">{about.yearsLabel}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {about.paragraph1}
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {about.paragraph2}
            </p>

            <div className="space-y-4">
              {about.highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {about.values.map((value, index) => {
            const Icon = valueIconMap[value.icon] || Target;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center p-8 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
