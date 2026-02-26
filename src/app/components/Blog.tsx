import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

// Mock blog data - in production, this would come from a CMS/backend
const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Software Development',
    excerpt: 'Explore how artificial intelligence is revolutionizing the way we build and deploy software applications.',
    author: 'Zenture Team',
    date: '2026-02-15',
    readTime: '5 min read',
    category: 'AI & ML',
    image: 'ai-technology',
    slug: 'future-of-ai-in-software-development',
  },
  {
    id: 2,
    title: 'Building Scalable IoT Solutions',
    excerpt: 'Learn best practices for creating IoT systems that can handle millions of connected devices efficiently.',
    author: 'John Doe',
    date: '2026-02-10',
    readTime: '7 min read',
    category: 'IoT',
    image: 'iot-devices',
    slug: 'building-scalable-iot-solutions',
  },
  {
    id: 3,
    title: 'Mobile App Development Trends 2026',
    excerpt: 'Discover the latest trends shaping mobile application development this year.',
    author: 'Jane Smith',
    date: '2026-02-05',
    readTime: '6 min read',
    category: 'Mobile Development',
    image: 'mobile-app-development',
    slug: 'mobile-app-development-trends-2026',
  },
  {
    id: 4,
    title: 'Cloud Architecture Best Practices',
    excerpt: 'Essential patterns and strategies for building robust cloud-native applications.',
    author: 'Zenture Team',
    date: '2026-01-28',
    readTime: '8 min read',
    category: 'Cloud Computing',
    image: 'cloud-infrastructure',
    slug: 'cloud-architecture-best-practices',
  },
  {
    id: 5,
    title: 'Cybersecurity in Modern Web Apps',
    excerpt: 'Critical security measures every developer should implement in their web applications.',
    author: 'Security Team',
    date: '2026-01-20',
    readTime: '10 min read',
    category: 'Security',
    image: 'cybersecurity',
    slug: 'cybersecurity-modern-web-apps',
  },
  {
    id: 6,
    title: 'The Rise of Low-Code Development',
    excerpt: 'How low-code platforms are democratizing software development and accelerating delivery.',
    author: 'Tech Insights',
    date: '2026-01-15',
    readTime: '5 min read',
    category: 'Development',
    image: 'coding-workspace',
    slug: 'rise-of-low-code-development',
  },
];

const categories = ['All', 'AI & ML', 'IoT', 'Mobile Development', 'Cloud Computing', 'Security', 'Development'];

export function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section id="blog" className="relative py-20 md:py-32 bg-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl top-20 left-10 animate-pulse" />
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-20 right-10 animate-pulse" style={{ animationDelay: '1.5s' }} />
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
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Insights</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in technology
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

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/30">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author & Read More */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">{post.author}</span>
                  </div>
                  <a
                    href={`#blog/${post.slug}`}
                    className="flex items-center gap-1 text-cyan-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
