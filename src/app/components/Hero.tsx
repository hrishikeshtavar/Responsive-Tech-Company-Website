import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { TubesBackground } from './ui/neon-flow';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Neon tubes background */}
      <TubesBackground className="absolute inset-0 min-h-0 bg-transparent" enableClickInteraction={true} />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Mouse-following gradient */}
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 200 }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center mb-6"
        >
          <div className="flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-sm">Innovative IT Solutions</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 px-4"
        >
          Transform Your Ideas Into
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Digital Reality
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto px-4"
        >
          Zenture IT Solutions delivers cutting-edge software development services, from web and mobile applications to AI-powered solutions and IoT innovations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 flex items-center space-x-2"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border-2 border-cyan-500/50 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 hover:border-cyan-500"
          >
            Our Services
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}