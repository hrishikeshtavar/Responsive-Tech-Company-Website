import React from "react";
import { motion } from "motion/react";
import { FaMicrosoft } from "react-icons/fa6";
import {
  SiReact,
  SiAngular,
  SiVuedotjs,
  SiNodedotjs,
  SiPython,
  SiOpenjdk,
  SiGo,
  SiPhp,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiTensorflow,
  SiPytorch,
  SiOpenai,
  SiArduino,
  SiRaspberrypi,
  SiMqtt,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiAmazonwebservices,
  SiGooglecloud,
} from "react-icons/si";

const technologies = [
  {
    name: "React",
    category: "Frontend",
    color: "text-cyan-400",
    icon: SiReact,
  },
  {
    name: "Angular",
    category: "Frontend",
    color: "text-red-400",
    icon: SiAngular,
  },
  {
    name: "Vue.js",
    category: "Frontend",
    color: "text-green-400",
    icon: SiVuedotjs,
  },
  {
    name: "Node.js",
    category: "Backend",
    color: "text-green-500",
    icon: SiNodedotjs,
  },
  {
    name: "Python",
    category: "Backend",
    color: "text-yellow-400",
    icon: SiPython,
  },
  {
    name: "Java",
    category: "Backend",
    color: "text-orange-400",
    icon: SiOpenjdk,
  },
  { name: "Go", category: "Backend", color: "text-blue-400", icon: SiGo },
  {
    name: "PHP",
    category: "Backend",
    color: "text-purple-400",
    icon: SiPhp,
  },
  {
    name: "Flutter",
    category: "Mobile",
    color: "text-blue-500",
    icon: SiFlutter,
  },
  {
    name: "React Native",
    category: "Mobile",
    color: "text-cyan-500",
    icon: SiReact,
  },
  {
    name: "Swift",
    category: "Mobile",
    color: "text-orange-500",
    icon: SiSwift,
  },
  {
    name: "Kotlin",
    category: "Mobile",
    color: "text-purple-500",
    icon: SiKotlin,
  },
  {
    name: "TensorFlow",
    category: "AI/ML",
    color: "text-orange-400",
    icon: SiTensorflow,
  },
  { name: "PyTorch", category: "AI/ML", color: "text-red-500", icon: SiPytorch },
  {
    name: "OpenAI",
    category: "AI/ML",
    color: "text-green-500",
    icon: SiOpenai,
  },
  { name: "Arduino", category: "IoT", color: "text-teal-400", icon: SiArduino },
  {
    name: "Raspberry Pi",
    category: "IoT",
    color: "text-pink-400",
    icon: SiRaspberrypi,
  },
  { name: "MQTT", category: "IoT", color: "text-purple-400", icon: SiMqtt },
  {
    name: "MongoDB",
    category: "Database",
    color: "text-green-500",
    icon: SiMongodb,
  },
  {
    name: "PostgreSQL",
    category: "Database",
    color: "text-blue-400",
    icon: SiPostgresql,
  },
  {
    name: "MySQL",
    category: "Database",
    color: "text-blue-500",
    icon: SiMysql,
  },
  { name: "AWS", category: "Cloud", color: "text-orange-400", icon: SiAmazonwebservices },
  { name: "Azure", category: "Cloud", color: "text-blue-500", icon: FaMicrosoft },
  {
    name: "Google Cloud",
    category: "Cloud",
    color: "text-yellow-400",
    icon: SiGooglecloud,
  },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Mobile",
  "AI/ML",
  "IoT",
  "Database",
  "Cloud",
];

export function TechStack() {
  const yearsOfExperience = Math.max(new Date().getFullYear() - 2019, 1);

  return (
    <section
      id="tech-stack"
      className="relative py-20 md:py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Tech Stack
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build
            robust and scalable solutions
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: index * 0.03,
              }}
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                rotate: [0, -5, 5, -5, 0],
              }}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 text-center hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
            >
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="text-4xl mb-2 flex justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <tech.icon className={`${tech.color} text-4xl`} />
                </motion.div>
                
                <motion.p 
                  className={`${tech.color} text-sm font-semibold mb-1`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {tech.name}
                </motion.p>
                <p className="text-gray-500 text-xs">
                  {tech.category}
                </p>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-xl transition-all duration-300" />
              
              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "35+", label: "Technologies" },
            { number: "75+", label: "Projects Completed" },
            { number: `${yearsOfExperience}+`, label: "Years Experience" },
            { number: "98%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.1,
                }}
                className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-400 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
