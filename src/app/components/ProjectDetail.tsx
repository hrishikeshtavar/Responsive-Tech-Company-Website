import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Users, CheckCircle, ExternalLink, Github } from 'lucide-react';

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

// Mock project data - in production, this would come from a CMS/backend
const projectDetails: Record<string, any> = {
  '1': {
    title: 'Army Communication System',
    client: 'Indian Army',
    date: '2024 - 2025',
    duration: '8 months',
    category: 'Enterprise Software',
    description: 'A comprehensive secure communication platform designed for military operations with end-to-end encryption, real-time messaging, and tactical data sharing capabilities.',
    challenge: 'The primary challenge was to create a communication system that could operate in low-bandwidth environments while maintaining military-grade security and reliability.',
    solution: 'We developed a hybrid architecture using WebRTC for real-time communication, combined with a custom protocol for data compression and encryption. The system includes offline capabilities and automatic synchronization.',
    technologies: ['React', 'Node.js', 'WebRTC', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
    features: [
      'End-to-end encrypted messaging',
      'Real-time voice and video calls',
      'Offline mode with synchronization',
      'Tactical mapping integration',
      'Multi-level access control',
      'Audit logging and compliance',
    ],
    results: [
      'Successfully deployed across 50+ military units',
      '99.9% uptime achieved',
      'Reduced communication latency by 60%',
      'Zero security breaches since deployment',
    ],
    images: ['military-tech', 'secure-communication', 'tactical-interface'],
  },
  '2': {
    title: 'Forest Management Portal',
    client: 'Indian Forest Department',
    date: '2023 - 2024',
    duration: '10 months',
    category: 'Web Application',
    description: 'An integrated forest management system featuring wildlife tracking, resource management, and GIS-based monitoring for forest conservation efforts.',
    challenge: 'Creating a comprehensive system to track wildlife movements, monitor deforestation, and manage forest resources across vast geographical areas.',
    solution: 'Developed a GIS-integrated platform using satellite imagery, IoT sensors, and machine learning for wildlife pattern analysis. The system provides real-time alerts and predictive analytics.',
    technologies: ['Angular', 'Python', 'MongoDB', 'GIS', 'TensorFlow', 'Google Cloud', 'IoT'],
    features: [
      'Real-time wildlife tracking',
      'Satellite imagery integration',
      'Deforestation detection',
      'Resource inventory management',
      'Alert and notification system',
      'Predictive analytics dashboard',
    ],
    results: [
      'Tracking 500+ animals across multiple reserves',
      'Early detection of illegal logging activities',
      '40% improvement in resource allocation',
      'Data-driven conservation decisions',
    ],
    images: ['forest-landscape', 'wildlife-tracking', 'gis-mapping'],
  },
  // Add more project details as needed
};

export function ProjectDetail({ projectId, onBack }: ProjectDetailProps) {
  const project = projectDetails[projectId];

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Project not found</p>
          <button
            onClick={onBack}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Portfolio</span>
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="text-sm bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full border border-cyan-500/30">
              {project.category}
            </span>
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{project.date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Users className="w-4 h-4" />
              <span className="text-sm">{project.client}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            {project.title}
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl">
            {project.description}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
            >
              <h2 className="text-2xl text-white mb-4">The Challenge</h2>
              <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
            >
              <h2 className="text-2xl text-white mb-4">Our Solution</h2>
              <p className="text-gray-300 leading-relaxed">{project.solution}</p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
            >
              <h2 className="text-2xl text-white mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8"
            >
              <h2 className="text-2xl text-white mb-6">Results & Impact</h2>
              <div className="space-y-3">
                {project.results.map((result: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0 mt-2" />
                    <span className="text-gray-300">{result}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 sticky top-24"
            >
              <h3 className="text-lg text-white mb-4">Project Info</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Client</p>
                  <p className="text-gray-300">{project.client}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Duration</p>
                  <p className="text-gray-300">{project.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Date</p>
                  <p className="text-gray-300">{project.date}</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-700">
                <h4 className="text-sm text-gray-500 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="text-xs bg-slate-700/50 text-gray-300 px-3 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-700 flex gap-3">
                <button className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">View Live</span>
                </button>
                <button className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Github className="w-4 h-4" />
                  <span className="text-sm">Source</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CMS Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl text-center"
        >
          <p className="text-cyan-400 mb-2">🚀 Dynamic Project Pages</p>
          <p className="text-gray-300 text-sm">
            This project detail page is template-driven. Connect to your backend CMS to manage project content, images, and case studies dynamically.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
