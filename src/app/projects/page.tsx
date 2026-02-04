'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, Leaf, Brain, Activity, Code } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Farm Fusion',
    subtitle: 'Smart Agriculture Platform',
    description: 'An AI-driven agricultural decision support system that revolutionizes farming through intelligent crop recommendations, soil analysis, and weather integration.',
    icon: Leaf,
    color: 'from-green-400 to-emerald-600',
    tech: ['Python', 'Machine Learning', 'React', 'Data Analytics'],
    features: [
      'AI-powered crop recommendation system',
      'Real-time soil health monitoring',
      'Weather pattern integration',
      'Yield prediction and optimization',
      'Clean, intuitive farmer-friendly UI',
    ],
    impact: 'Empowering farmers with data-driven decisions for sustainable agriculture',
    isFlagship: true,
  },
  {
    id: 2,
    title: 'Mental Health Support System',
    subtitle: 'AI-Powered Emotional Intelligence',
    description: 'Advanced NLP-based emotion detection system providing reliable mental health support with high accuracy.',
    icon: Brain,
    color: 'from-purple-400 to-pink-600',
    tech: ['Python', 'NLP', 'TensorFlow', 'Sentiment Analysis'],
    features: [
      'Real-time emotion detection using NLP',
      '85%+ accuracy in sentiment analysis',
      'Privacy-focused design',
      'Scalable architecture',
      'User-friendly interface',
    ],
    impact: 'Making mental health support accessible through AI technology',
    isFlagship: false,
  },
  {
    id: 3,
    title: 'Breast Cancer Detection',
    subtitle: 'ML-Based Medical Diagnostics',
    description: 'Robust machine learning classification system for early breast cancer detection with comprehensive data pipeline.',
    icon: Activity,
    color: 'from-rose-400 to-red-600',
    tech: ['Python', 'Scikit-learn', 'Data Processing', 'ML Classification'],
    features: [
      'End-to-end ML pipeline',
      'Feature engineering and selection',
      'Model optimization and validation',
      'High prediction accuracy',
      'Medical-grade reliability',
    ],
    impact: 'Supporting early detection to save lives through AI',
    isFlagship: false,
  },
  {
    id: 4,
    title: 'Personal Portfolio',
    subtitle: '3D Interactive Web Experience',
    description: 'Modern, premium portfolio website showcasing projects and skills with cutting-edge web technologies.',
    icon: Code,
    color: 'from-cyan-400 to-blue-600',
    tech: ['React', 'Next.js', 'Three.js', 'Framer Motion'],
    features: [
      '3D animations and interactions',
      'Smooth page transitions',
      'Responsive design',
      'Performance optimized',
      'Modern UI/UX',
    ],
    impact: 'Professional digital presence for career opportunities',
    isFlagship: false,
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="font-display text-6xl md:text-7xl font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building solutions that matter through code and innovation
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className={`glass rounded-3xl p-8 cursor-pointer transition-all hover:shadow-2xl ${
                project.isFlagship ? 'md:col-span-2 border-2 border-accent-cyan/30' : ''
              }`}
            >
              {project.isFlagship && (
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full text-sm font-bold mb-4">
                  🚀 FLAGSHIP PROJECT
                </div>
              )}

              <div className="flex items-start gap-6 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <project.icon size={32} />
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-3xl font-bold mb-2">
                    {project.title}
                  </h2>
                  <p className="text-accent-cyan text-lg">{project.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-dark-700/50 rounded-full text-sm text-accent-cyan border border-accent-cyan/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-accent-blue hover:text-accent-cyan transition-colors font-semibold">
                View Details <ExternalLink size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-3xl p-8 md:p-12 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>

              {/* Project Header */}
              <div className="flex items-start gap-6 mb-8">
                <div className={`w-20 h-20 bg-gradient-to-br ${selectedProject.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <selectedProject.icon size={40} />
                </div>
                <div>
                  <h2 className="font-display text-4xl font-bold mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-accent-cyan text-xl">{selectedProject.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="font-display text-2xl font-bold mb-4 text-gradient">
                  Key Features
                </h3>
                <div className="space-y-3">
                  {selectedProject.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-accent-cyan rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="font-display text-2xl font-bold mb-4 text-gradient">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-6 py-3 bg-gradient-to-r from-dark-700 to-dark-600 rounded-xl text-accent-cyan border border-accent-cyan/30 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className="p-6 bg-gradient-to-r from-accent-cyan/10 to-accent-blue/10 rounded-2xl border border-accent-cyan/20">
                <h3 className="font-display text-xl font-bold mb-2 text-accent-cyan">
                  Impact
                </h3>
                <p className="text-gray-300">{selectedProject.impact}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
