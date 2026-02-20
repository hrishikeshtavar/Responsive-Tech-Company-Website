import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ArrowRight, Code2, Smartphone, Globe, Cpu } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Army Communication System',
    category: 'Enterprise Software',
    description: 'Secure real-time communication platform for military operations with end-to-end encryption.',
    image: 'military-tech',
    tags: ['React', 'Node.js', 'WebRTC', 'Security'],
    icon: Code2,
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 2,
    title: 'Forest Management Portal',
    category: 'Web Application',
    description: 'Comprehensive wildlife tracking and forest resource management system with GIS integration.',
    image: 'forest-landscape',
    tags: ['Angular', 'Python', 'MongoDB', 'GIS'],
    icon: Globe,
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    id: 3,
    title: 'Records Verification App',
    category: 'Mobile Application',
    description: 'Digital platform for Guinness World Records verification and management processes.',
    image: 'award-certificate',
    tags: ['Flutter', 'Firebase', 'AI/ML'],
    icon: Smartphone,
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    id: 4,
    title: 'Smart IoT Dashboard',
    category: 'IoT Solution',
    description: 'Real-time monitoring and control system for industrial IoT devices and sensors.',
    image: 'technology-dashboard',
    tags: ['React', 'MQTT', 'Arduino', 'AWS'],
    icon: Cpu,
    gradient: 'from-orange-500 to-red-600',
  },
  {
    id: 5,
    title: 'AI-Powered Analytics',
    category: 'AI/ML Solution',
    description: 'Machine learning platform for predictive analytics and business intelligence.',
    image: 'data-analytics',
    tags: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
    icon: Code2,
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    id: 6,
    title: 'E-Commerce Platform',
    category: 'Web Application',
    description: 'Scalable multi-vendor marketplace with advanced inventory and payment integration.',
    image: 'online-shopping',
    tags: ['Next.js', 'Node.js', 'Stripe', 'Redis'],
    icon: Globe,
    gradient: 'from-yellow-500 to-orange-600',
  },
];

const categories = ['All', 'Web Application', 'Mobile Application', 'IoT Solution', 'AI/ML Solution', 'Enterprise Software'];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-20 md:py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-20 right-10 animate-pulse" />
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-20 left-10 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our successful projects that have transformed businesses and delivered exceptional results
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-slate-800 text-gray-400 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-20 h-20 text-white/80" />
                    </div>
                    
                    {/* Overlay on Hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                      className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
                    >
                      <button className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </button>
                      <button className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                        <Github className="w-5 h-5 text-white" />
                      </button>
                    </motion.div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-gray-500 bg-slate-700/50 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Project Link */}
                    <div className="flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm mr-2">View Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
