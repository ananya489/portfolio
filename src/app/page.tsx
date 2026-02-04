'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Background3D from '@/components/Background3D'
import { ArrowRight, Github, Linkedin, Mail,Code } from 'lucide-react'

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Background3D />
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated entrance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5, type: 'spring' }}
              className="inline-block mb-6"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-cyan to-accent-blue p-1 animate-glow">
                <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center text-4xl font-bold text-gradient">
                  AR
                </div>
              </div>
            </motion.div> */}

            <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Ananya Rajput</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-4"
            >
              Computer Science Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-lg md:text-xl text-gray-400 mb-12"
            >
              Software Engineer Intern | Full-Stack & AI Enthusiast
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-6 justify-center mb-16"
            >
              <Link href="/projects">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-xl font-semibold text-white overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-accent-cyan/50">
                  <span className="relative z-10 flex items-center gap-2">
                    View Projects
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                </button>
              </Link>

              <Link href="/skills">
                <button className="group relative px-8 py-4 glass rounded-xl font-semibold text-white overflow-hidden transition-all hover:scale-105 border border-accent-cyan/30 hover:border-accent-cyan">
                  <span className="relative z-10">View Skills</span>
                </button>
              </Link>

              <Link href="/contact">
                <button className="group relative px-8 py-4 glass rounded-xl font-semibold text-white overflow-hidden transition-all hover:scale-105 border border-accent-blue/30 hover:border-accent-blue">
                  <span className="relative z-10">Contact Me</span>
                </button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex gap-6 justify-center"
            >
              <a
                href="https://github.com/ananya489/Ananya-Rajput"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass rounded-full hover:bg-accent-cyan/20 transition-all hover:scale-110 hover:shadow-lg hover:shadow-accent-cyan/30"
              >
                <Github size={24} />
              </a>
              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/ananya2816/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass rounded-full hover:bg-orange-500/20 transition-all hover:scale-110 hover:shadow-lg hover:shadow-orange-500/30"
              >
                <Code size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ananya-rajput-1baa7833a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass rounded-full hover:bg-accent-blue/20 transition-all hover:scale-110 hover:shadow-lg hover:shadow-accent-blue/30"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:ananyarajput697@gmail.com"
                className="p-4 glass rounded-full hover:bg-accent-coral/20 transition-all hover:scale-110 hover:shadow-lg hover:shadow-accent-coral/30"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl"
      />
    </main>
  )
}
