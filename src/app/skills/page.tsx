'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Brain, Wrench, Globe, Terminal } from 'lucide-react'

const skillCategories = [
  {
    title: 'Programming & Core CS',
    icon: Code2,
    color: 'from-accent-cyan to-accent-blue',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'C++', level: 85 },
      { name: 'Data Structures & Algorithms', level: 88 },
      { name: 'Object-Oriented Programming', level: 90 },
      { name: 'Operating Systems', level: 80 },
      { name: 'Database Management Systems', level: 85 },
      { name: 'Computer Networks', level: 82 },
    ],
  },
  {
    title: 'Web Development',
    icon: Globe,
    color: 'from-accent-blue to-accent-purple',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 92 },
      { name: 'JavaScript', level: 88 },
      { name: 'React.js', level: 85 },
      { name: 'Responsive UI Design', level: 90 },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    color: 'from-accent-purple to-accent-coral',
    skills: [
      { name: 'Machine Learning Fundamentals', level: 85 },
      { name: 'Natural Language Processing', level: 82 },
      { name: 'Sentiment Analysis', level: 88 },
      { name: 'Model Training & Evaluation', level: 80 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    color: 'from-accent-coral to-accent-cyan',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 92 },
      { name: 'VS Code', level: 95 },
      { name: 'Jupyter Notebook', level: 88 },
      { name: 'Linux (Basic)', level: 75 },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Skills() {
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
            My <span className="text-gradient">Skills</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building innovative solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:shadow-accent-cyan/10 transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <category.icon size={32} />
                </div>
                <h2 className="font-display text-3xl font-bold text-gradient">
                  {category.title}
                </h2>
              </div>

              {/* Skills */}
              <div className="grid md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-200 group-hover:text-accent-cyan transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    
                    {/* Skill Bar */}
                    <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          ease: 'easeOut',
                        }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                      >
                        <motion.div
                          animate={{
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                          className="absolute inset-0 bg-white/20"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20"
        >
          <h2 className="font-display text-4xl font-bold mb-12 text-center">
            <span className="text-gradient">Skill Highlights</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="glass rounded-2xl p-8 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent-cyan to-accent-blue rounded-full flex items-center justify-center text-3xl font-bold">
                90%
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-accent-cyan">
                Full-Stack Proficiency
              </h3>
              <p className="text-gray-400">
                Strong command of both frontend and backend technologies
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="glass rounded-2xl p-8 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent-blue to-accent-purple rounded-full flex items-center justify-center text-3xl font-bold">
                85%
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-accent-blue">
                AI/ML Expertise
              </h3>
              <p className="text-gray-400">
                Building intelligent systems with machine learning
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="glass rounded-2xl p-8 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent-purple to-accent-coral rounded-full flex items-center justify-center text-3xl font-bold">
                88%
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-accent-purple">
                Problem Solving
              </h3>
              <p className="text-gray-400">
                Strong foundation in DSA and algorithmic thinking
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
