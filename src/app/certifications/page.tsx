'use client'

import { motion } from 'framer-motion'
import { Award, Cloud, Database, Shield } from 'lucide-react'

const certifications = [
  {
    id: 1,
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    icon: Cloud,
    color: 'from-orange-400 to-yellow-600',
    description: 'Foundational understanding of AWS Cloud concepts, services, and terminology',
    skills: ['Cloud Computing', 'AWS Services', 'Cloud Architecture', 'Security Best Practices'],
  },
  {
    id: 2,
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    icon: Cloud,
    color: 'from-red-400 to-orange-600',
    description: 'Comprehensive knowledge of AI fundamentals and Oracle Cloud Infrastructure',
    skills: ['AI Foundations', 'OCI', 'Machine Learning', 'Cloud Services'],
  },
  {
    id: 3,
    title: 'Database Programming with SQL',
    issuer: 'Oracle Academy',
    icon: Database,
    color: 'from-blue-400 to-cyan-600',
    description: 'Proficiency in SQL programming and database management concepts',
    skills: ['SQL', 'Database Design', 'Query Optimization', 'Data Management'],
  },
  {
    id: 4,
    title: 'Cyber Security Job Simulation',
    issuer: 'Deloitte',
    icon: Shield,
    color: 'from-green-400 to-teal-600',
    description: 'Practical experience in cybersecurity practices and real-world security scenarios',
    skills: ['Cybersecurity', 'Threat Analysis', 'Security Protocols', 'Risk Assessment'],
  },
  {
    id: 5,
    title: 'Employability Skills – JobReady',
    issuer: 'Wadhwani Foundation',
    icon: Award,
    color: 'from-orange-500 to-red-600',
    description:
      'Completed 113+ hours of professional training focused on employability and workplace readiness.',
    skills: ['Professional Skills', 'Communication', 'Career Readiness', 'Workplace Ethics'],
  },
  {
    id: 6,
    title: 'Solutions Architecture Job Simulation',
    issuer: 'Forage',
    icon: Cloud,
    color: 'from-yellow-400 to-orange-600',
    description:
      'Hands-on experience designing scalable and reliable cloud hosting architectures.',
    skills: ['Cloud Architecture', 'System Design', 'Scalability', 'Problem Solving'],
  },
  {
    id: 7,
    title: 'Introduction to NoSQL Databases',
    issuer: 'Infosys Springboard',
    icon: Database,
    color: 'from-sky-400 to-blue-600',
    description:
      'Learned NoSQL database concepts, data models, and modern data handling techniques.',
    skills: ['NoSQL', 'Databases', 'Data Modeling', 'Backend Fundamentals'],
  },
  {
    id: 8,
    title: 'Artificial Intelligence – Beginner’s Guide',
    issuer: 'Simplilearn SkillUp',
    icon: Cloud,
    color: 'from-purple-400 to-indigo-600',
    description:
      'Introduction to AI concepts, real-world applications, and AI-driven problem solving.',
    skills: ['Artificial Intelligence', 'AI Fundamentals', 'Problem Solving'],
  },
  {
    id: 9,
    title: 'Introduction to Generative AI Studio',
    issuer: 'Google Cloud × Simplilearn',
    icon: Cloud,
    color: 'from-green-400 to-teal-600',
    description:
      'Explored Generative AI fundamentals and Google Cloud tools for AI-powered solutions.',
    skills: ['Generative AI', 'Google Cloud', 'Prompt Engineering', 'AI Tools'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Certifications() {
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
            <span className="text-gradient">Certifications</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Industry-recognized credentials validating my technical expertise
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group glass rounded-3xl p-8 hover:shadow-2xl transition-all relative overflow-hidden"
            >
              {/* Gradient Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <cert.icon size={32} className="text-white" />
                </div>

                {/* Title */}
                <h2 className="font-display text-2xl font-bold mb-2 group-hover:text-gradient transition-all">
                  {cert.title}
                </h2>

                {/* Issuer */}
                <p className="text-accent-cyan text-lg font-semibold mb-4">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-dark-700/50 rounded-full text-sm text-gray-300 border border-gray-600/30 group-hover:border-accent-cyan/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Verification Badge */}
                <div className="mt-6 flex items-center gap-2 text-sm text-accent-blue">
                  <Award size={18} />
                  <span>Verified Certification</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20"
        >
          <div className="glass rounded-3xl p-12">
            <h2 className="font-display text-4xl font-bold mb-12 text-center">
              Certification <span className="text-gradient">Impact</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: 'spring' }}
                  className="text-5xl font-bold text-gradient mb-3"
                >
                  9+
                </motion.div>
                <p className="text-gray-400">Professional Certifications</p>
              </div>

              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.1, type: 'spring' }}
                  className="text-5xl font-bold text-gradient mb-3"
                >
                  4
                </motion.div>
                <p className="text-gray-400">Industry Leaders</p>
              </div>

              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: 'spring' }}
                  className="text-5xl font-bold text-gradient mb-3"
                >
                  100%
                </motion.div>
                <p className="text-gray-400">Verified Credentials</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-6">
            Continuously expanding my knowledge through industry-recognized certifications
          </p>
          <div className="inline-block px-6 py-3 glass rounded-xl border border-accent-cyan/30">
            <p className="text-accent-cyan font-semibold">More certifications in progress...</p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
