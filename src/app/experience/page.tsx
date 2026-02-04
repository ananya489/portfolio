'use client'

import { motion } from 'framer-motion'
import { Briefcase, TrendingUp, Shield, Users, Lightbulb } from 'lucide-react'

const experiences = [
  {
    id: 1,
    role: 'Virtual Intern',
    company: 'Deloitte',
    type: 'Cyber Security Job Simulation',
    duration: 'Virtual Experience',
    icon: Briefcase,
    color: 'from-accent-cyan to-accent-blue',
    description: 'Gained hands-on experience in cybersecurity practices through real-world simulation scenarios. Developed understanding of enterprise security workflows and professional problem-solving approaches.',
    highlights: [
      {
        icon: Shield,
        title: 'Cybersecurity Awareness',
        description: 'Developed comprehensive understanding of modern security threats and mitigation strategies',
      },
      {
        icon: Lightbulb,
        title: 'Problem-Solving Mindset',
        description: 'Applied analytical thinking to complex security scenarios and challenges',
      },
      {
        icon: Users,
        title: 'Professional Workflow',
        description: 'Experienced enterprise-level software development and security practices',
      },
      {
        icon: TrendingUp,
        title: 'Real-World Exposure',
        description: 'Gained practical insights into industry standards and best practices',
      },
    ],
    skills: ['Cybersecurity', 'Threat Analysis', 'Risk Assessment', 'Professional Communication'],
  },
]

export default function Experience() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="font-display text-6xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Experience</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building professional expertise through hands-on learning
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-blue to-accent-purple hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative mb-16 md:pl-24"
            >
              {/* Timeline Icon */}
              <div className={`absolute left-0 top-0 w-16 h-16 bg-gradient-to-br ${exp.color} rounded-full flex items-center justify-center shadow-2xl hidden md:flex`}>
                <exp.icon size={32} />
              </div>

              {/* Content Card */}
              <div className="glass rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:shadow-accent-cyan/10 transition-all">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h2 className="font-display text-3xl font-bold mb-2">
                        {exp.role}
                      </h2>
                      <p className="text-2xl text-accent-cyan font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="px-4 py-2 bg-gradient-to-r from-accent-cyan/20 to-accent-blue/20 rounded-full text-accent-cyan border border-accent-cyan/30 font-semibold">
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                  <p className="text-lg text-gray-400">{exp.type}</p>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-8">
                  <h3 className="font-display text-2xl font-bold mb-6 text-gradient">
                    Key Learnings
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {exp.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        className="flex gap-4 p-5 bg-dark-800/50 rounded-2xl hover:bg-dark-700/50 transition-colors"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-accent-cyan to-accent-blue rounded-xl flex items-center justify-center">
                            <highlight.icon size={24} />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-200 mb-2">
                            {highlight.title}
                          </h4>
                          <p className="text-sm text-gray-400">
                            {highlight.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Skills Gained */}
                <div>
                  <h3 className="font-display text-xl font-bold mb-4 text-gray-300">
                    Skills Developed
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-dark-700/50 rounded-xl text-accent-cyan border border-accent-cyan/30 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future Growth Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20"
        >
          <div className="glass rounded-3xl p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent-purple to-accent-coral rounded-full flex items-center justify-center">
              <TrendingUp size={40} />
            </div>
            <h2 className="font-display text-3xl font-bold mb-4">
              <span className="text-gradient-coral">Continuous Growth</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Actively seeking opportunities to expand my professional experience and contribute to 
              impactful projects in software engineering, AI, and web development.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
