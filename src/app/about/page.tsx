'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Code, Sparkles, Target } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function About() {
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
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate about building intelligent systems and elegant web experiences
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="glass rounded-3xl p-8 md:p-12 mb-16"
        >
          <h2 className="font-display text-3xl font-bold mb-6 text-gradient-coral">
            Hello, I'm Ananya
          </h2>
          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              I'm a Computer Science Engineering student with a deep passion for solving complex problems 
              through code. My journey in technology is driven by curiosity and a commitment to creating 
              meaningful solutions that make a difference.
            </p>
            <p>
              With a strong foundation in core CS fundamentals, I specialize in building intelligent 
              systems that leverage AI and machine learning, combined with modern web technologies to 
              create seamless user experiences.
            </p>
            <p>
              My approach to engineering emphasizes clean architecture, scalable design, and a 
              relentless focus on delivering high-quality solutions. I believe in continuous learning 
              and staying at the forefront of technological innovation.
            </p>
          </div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl font-bold mb-12 text-center">
            <span className="text-gradient">Education</span>
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-blue to-accent-purple" />
            
            <div className="relative pl-24">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
className="glass rounded-2xl p-8 pl-24 mb-8 hover:shadow-2xl hover:shadow-accent-cyan/10 transition-all"
              >
<div className="absolute left-6 top-8 w-16 h-16 bg-gradient-to-br from-accent-cyan to-accent-blue rounded-full flex items-center justify-center shadow-lg">

                  <GraduationCap size={32} />
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="font-display text-2xl font-bold text-accent-cyan">
                    Bachelor of Technology
                  </h3>
                  <span className="text-accent-blue font-semibold">2024 - 2028</span>
                </div>
                
                <p className="text-xl text-gray-300 mb-2">Computer Science Engineering</p>
                <p className="text-gray-400 mb-4">KIET Group of Institutions</p>
                <div className="flex flex-col items-end">
    <span className="text-accent-blue font-semibold">2024 - 2028</span>
    <span className="text-sm text-accent-cyan/80 font-medium">CGPA: 8.11 / 10</span>
  </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="text-center p-4 bg-dark-800/50 rounded-xl">
                    <Code className="mx-auto mb-2 text-accent-cyan" size={24} />
                    <p className="text-sm text-gray-400">Core CS</p>
                  </div>
                  <div className="text-center p-4 bg-dark-800/50 rounded-xl">
                    <Sparkles className="mx-auto mb-2 text-accent-blue" size={24} />
                    <p className="text-sm text-gray-400">AI/ML</p>
                  </div>
                  <div className="text-center p-4 bg-dark-800/50 rounded-xl">
                    <Target className="mx-auto mb-2 text-accent-purple" size={24} />
                    <p className="text-sm text-gray-400">Problem Solving</p>
                  </div>
                  <div className="text-center p-4 bg-dark-800/50 rounded-xl">
                    <GraduationCap className="mx-auto mb-2 text-accent-coral" size={24} />
                    <p className="text-sm text-gray-400">Engineering</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Core Focus Areas */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.8 }}
        >
          <h2 className="font-display text-4xl font-bold mb-12 text-center">
            Core <span className="text-gradient">Focus</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-8 text-center hover:shadow-2xl hover:shadow-accent-cyan/20 transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-accent-cyan to-accent-blue rounded-2xl flex items-center justify-center">
                <Code size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-accent-cyan">
                CS Fundamentals
              </h3>
              <p className="text-gray-400">
                Deep understanding of data structures, algorithms, OOP, OS, DBMS, and computer networks
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-8 text-center hover:shadow-2xl hover:shadow-accent-blue/20 transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-accent-blue to-accent-purple rounded-2xl flex items-center justify-center">
                <Sparkles size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-accent-blue">
                Problem Solving
              </h3>
              <p className="text-gray-400">
                Analytical mindset focused on creating efficient, scalable solutions to complex challenges
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-8 text-center hover:shadow-2xl hover:shadow-accent-purple/20 transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-accent-purple to-accent-coral rounded-2xl flex items-center justify-center">
                <Target size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-accent-purple">
                Engineering Discipline
              </h3>
              <p className="text-gray-400">
                Commitment to code quality, best practices, and continuous improvement in every project
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
