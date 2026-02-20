import React from "react";
import { motion } from "motion/react";

const technologies = [
  {
    name: "React",
    category: "Frontend",
    color: "text-cyan-400",
  },
  {
    name: "Angular",
    category: "Frontend",
    color: "text-red-400",
  },
  {
    name: "Vue.js",
    category: "Frontend",
    color: "text-green-400",
  },
  {
    name: "Node.js",
    category: "Backend",
    color: "text-green-500",
  },
  {
    name: "Python",
    category: "Backend",
    color: "text-yellow-400",
  },
  {
    name: "Java",
    category: "Backend",
    color: "text-orange-400",
  },
  {
    name: "Go",
    category: "Backend",
    color: "text-blue-400",
  },
  {
    name: "PHP",
    category: "Backend",
    color: "text-purple-400",
  },
  {
    name: "Flutter",
    category: "Mobile",
    color: "text-blue-500",
  },
  {
    name: "React Native",
    category: "Mobile",
    color: "text-cyan-500",
  },
  {
    name: "Swift",
    category: "Mobile",
    color: "text-orange-500",
  },
  {
    name: "Kotlin",
    category: "Mobile",
    color: "text-purple-500",
  },
  {
    name: "TensorFlow",
    category: "AI/ML",
    color: "text-orange-400",
  },
  {
    name: "PyTorch",
    category: "AI/ML",
    color: "text-red-500",
  },
  {
    name: "OpenAI",
    category: "AI/ML",
    color: "text-green-500",
  },
  {
    name: "Arduino",
    category: "IoT",
    color: "text-teal-400",
  },
  {
    name: "Raspberry Pi",
    category: "IoT",
    color: "text-pink-400",
  },
  {
    name: "MQTT",
    category: "IoT",
    color: "text-purple-400",
  },
  {
    name: "MongoDB",
    category: "Database",
    color: "text-green-500",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    color: "text-blue-400",
  },
  {
    name: "MySQL",
    category: "Database",
    color: "text-blue-500",
  },
  {
    name: "Redis",
    category: "Database",
    color: "text-red-400",
  },
];

const categories = ["Frontend", "Backend", "Mobile", "AI/ML", "IoT", "Database"];

const TechShowcase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          Technology Showcase
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center text-gray-400 mb-12 text-lg"
        >
          Explore the latest technologies across different domains
        </motion.p>

        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold text-white mb-6 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 mr-3 rounded"></span>
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologies
                .filter((tech) => tech.category === category)
                .map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: categoryIndex * 0.1 + index * 0.05,
                      duration: 0.5,
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                    }}
                    className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex flex-col items-center text-center">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mb-4 ${tech.color}`}
                      >
                        <span className="text-3xl font-bold">
                          {tech.name.charAt(0)}
                        </span>
                      </motion.div>
                      <h3 className={`text-xl font-semibold ${tech.color} mb-2`}>
                        {tech.name}
                      </h3>
                      <span className="text-sm text-gray-500 px-3 py-1 bg-gray-700 rounded-full">
                        {tech.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechShowcase;
