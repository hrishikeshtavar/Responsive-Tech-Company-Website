import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight, User } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Col. Rajesh Kumar',
    position: 'Project Director',
    organization: 'Indian Army',
    content: 'Zenture IT Solutions delivered a robust and secure communication system that exceeded our expectations. Their attention to security details and timely delivery was impressive.',
    rating: 5,
    image: 'military-officer',
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    position: 'Chief Technology Officer',
    organization: 'Indian Forest Department',
    content: 'The wildlife tracking system has revolutionized our forest management. The team\'s expertise in GIS integration and real-time data processing is outstanding.',
    rating: 5,
    image: 'professional-woman',
  },
  {
    id: 3,
    name: 'Michael Chen',
    position: 'Digital Operations Manager',
    organization: 'Guinness World Records',
    content: 'Working with Zenture was a pleasure. They understood our unique verification needs and created a platform that streamlined our entire records management process.',
    rating: 5,
    image: 'business-man',
  },
  {
    id: 4,
    name: 'Sarah Anderson',
    position: 'CEO',
    organization: 'TechVentures Inc.',
    content: 'The AI-powered analytics platform they developed has transformed how we make business decisions. The insights we gain are invaluable.',
    rating: 5,
    image: 'executive-woman',
  },
  {
    id: 5,
    name: 'Amit Patel',
    position: 'Operations Director',
    organization: 'SmartFactory Solutions',
    content: 'Their IoT solutions have optimized our manufacturing processes. Real-time monitoring and predictive maintenance have saved us significant costs.',
    rating: 5,
    image: 'tech-professional',
  },
  {
    id: 6,
    name: 'Emma Wilson',
    position: 'Founder',
    organization: 'GreenTech Innovations',
    content: 'Exceptional team! They built our mobile app from scratch with incredible attention to detail. The user experience is flawless.',
    rating: 5,
    image: 'entrepreneur-woman',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section id="testimonials" className="relative py-20 md:py-32 bg-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl top-10 left-10 animate-pulse" />
        <div className="absolute w-96 h-96 bg-pink-500/10 rounded-full blur-3xl bottom-10 right-10 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Testimonials</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say about working with us
          </p>
        </motion.div>

        {/* Desktop View - 3 Cards */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {getVisibleTestimonials().map((testimonial, idx) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ 
                    opacity: idx === 1 ? 1 : 0.5, 
                    x: 0,
                    scale: idx === 1 ? 1.05 : 0.95,
                  }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border ${
                    idx === 1 ? 'border-cyan-500/50' : 'border-slate-700'
                  } rounded-2xl p-8 ${idx === 1 ? 'shadow-xl shadow-cyan-500/20' : ''}`}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10">
                    <Quote className="w-16 h-16 text-cyan-400" />
                  </div>

                  <div className="relative z-10">
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-gray-300 mb-6 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.position}</p>
                        <p className="text-xs text-cyan-400">{testimonial.organization}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile/Tablet View - Single Card */}
        <div className="lg:hidden">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative bg-slate-800/50 backdrop-blur-sm border border-cyan-500/50 rounded-2xl p-8 shadow-xl shadow-cyan-500/20"
                onTouchStart={() => setIsAutoPlaying(false)}
                onTouchEnd={() => setIsAutoPlaying(true)}
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-16 h-16 text-cyan-400" />
                </div>

                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonials[currentIndex].content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{testimonials[currentIndex].name}</h4>
                      <p className="text-sm text-gray-400">{testimonials[currentIndex].position}</p>
                      <p className="text-xs text-cyan-400">{testimonials[currentIndex].organization}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mt-12"
        >
          <button
            onClick={() => {
              prevTestimonial();
              setIsAutoPlaying(false);
            }}
            className="p-3 bg-slate-800 border border-slate-700 rounded-full hover:bg-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-cyan-400" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-cyan-500 to-blue-600'
                    : 'w-2 bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => {
              nextTestimonial();
              setIsAutoPlaying(false);
            }}
            className="p-3 bg-slate-800 border border-slate-700 rounded-full hover:bg-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-cyan-400" />
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: '200+', label: 'Happy Clients' },
            { number: '98%', label: 'Satisfaction Rate' },
            { number: '150+', label: 'Projects Delivered' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
