import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">Z</span>
              </div>
              <span className="text-xl text-white">
                Zenture <span className="text-cyan-400">IT</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Transforming ideas into innovative digital solutions. We specialize in web development, mobile apps, IoT, and AI-powered applications.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, link: '#' },
                { icon: Linkedin, link: '#' },
                { icon: Twitter, link: '#' },
                { icon: Mail, link: '#' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Tech Stack', 'Clients', 'About'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Web Development',
                'Software Development',
                'Mobile Apps',
                'IoT Solutions',
                'AI Solutions',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Zenture IT Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -bottom-48 -left-48" />
        <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -bottom-48 -right-48" />
      </div>
    </footer>
  );
}