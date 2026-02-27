import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Award, FileText, Users, TrendingUp, Beaker } from 'lucide-react';
import labImage from '../../assets/5386f32844836c80df451078afcac6ca0166238f.png';
import { useSiteContent } from '../context/SiteContentContext';
import type { IconKey } from '../lib/siteContent';

export function Research() {
  const { content } = useSiteContent();
  const section = content.research;
  const researchAreas = section.areas;
  const publications = section.publications;
  const achievements = section.achievements;
  const iconMap: Record<IconKey, React.ComponentType<{ className?: string }>> = {
    beaker: Beaker,
    trendingUp: TrendingUp,
    users: Users,
    award: Award,
    bookOpen: BookOpen,
    wifi: Users,
    database: Users,
    shield: Users,
    cloud: Users,
    zap: Users,
    target: Users,
    lightbulb: Users,
    rocket: Users,
    globe: Users,
    code: Users,
    smartphone: Users,
    cpu: Users,
    brain: Users,
    code2: Users,
  };

  return (
    <section id="research" className="relative py-20 md:py-32 bg-slate-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl top-20 right-10 animate-pulse" />
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-20 left-10 animate-pulse" style={{ animationDelay: '1.5s' }} />
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {section.titleHighlight}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {section.subtitle}
          </p>
        </motion.div>

        {/* Research Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {researchAreas.map((area, index) => {
            const Icon = iconMap[area.icon] || Beaker;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
              >
                <motion.div 
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>

                <h3 className="text-xl text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {area.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {area.description}
                </p>

                <div className="flex items-center text-cyan-400 text-sm">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>{area.publications} Publications</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon] || Award;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6 text-center"
              >
                <Icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h4 className="text-white text-lg mb-2">{achievement.title}</h4>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Research Lab Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
        >
          <div className="relative">
            <img
              src={labImage}
              alt="Zenture IT Research Lab and Training Facility"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl text-white mb-2">{section.labTitle}</h3>
              <p className="text-gray-300 text-lg">
                {section.labDescription}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Recent Publications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl text-white mb-8 text-center">{section.publicationSectionTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/30">
                    {pub.type}
                  </span>
                  <span className="text-gray-500 text-sm">{pub.year}</span>
                </div>
                
                <h4 className="text-white text-lg mb-2 line-clamp-2">{pub.title}</h4>
                
                <p className="text-gray-400 text-sm mb-2">
                  <span className="text-cyan-400">{pub.journal}</span>
                </p>
                
                <p className="text-gray-500 text-sm">
                  {pub.authors}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
