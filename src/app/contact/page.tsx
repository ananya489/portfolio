'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="glass rounded-3xl p-8 md:p-10">
              <h2 className="font-display text-3xl font-bold mb-8">
                <span className="text-gradient">Send a Message</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-dark-800 border border-gray-700 rounded-xl focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/20 transition-all text-gray-200"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-dark-800 border border-gray-700 rounded-xl focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/20 transition-all text-gray-200"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-dark-800 border border-gray-700 rounded-xl focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/20 transition-all text-gray-200 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all ${
                    submitted
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gradient-to-r from-accent-cyan to-accent-blue hover:shadow-2xl hover:shadow-accent-cyan/50'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </span>
                  ) : submitted ? (
                    'Message Sent! ✓'
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-8"
          >
            {/* Social Links */}
            <div className="glass rounded-3xl p-8 md:p-10">
              <h2 className="font-display text-3xl font-bold mb-8">
                <span className="text-gradient">Connect With Me</span>
              </h2>

              <div className="space-y-6">
                <motion.a
                  href="mailto:ananyarajput697@gmail.com"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-5 bg-dark-800/50 rounded-2xl hover:bg-dark-700/50 transition-all group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-accent-cyan to-accent-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-semibold text-gray-200">ananyarajput697@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://github.com/ananya489/Ananya-Rajput"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-5 bg-dark-800/50 rounded-2xl hover:bg-dark-700/50 transition-all group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-accent-blue to-accent-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <p className="font-semibold text-gray-200">ananya489</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/ananya-rajput-1baa7833a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-5 bg-dark-800/50 rounded-2xl hover:bg-dark-700/50 transition-all group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-accent-purple to-accent-coral rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <p className="font-semibold text-gray-200">Ananya Rajput</p>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Quick Info */}
            <div className="glass rounded-3xl p-8 md:p-10">
              <h3 className="font-display text-2xl font-bold mb-6 text-gradient">
                Quick Info
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-accent-cyan mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-gray-200">India</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="text-accent-blue mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-gray-400">Availability</p>
                    <p className="text-gray-200">Open to opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="glass rounded-3xl p-8 text-center bg-gradient-to-br from-accent-cyan/5 to-accent-blue/5 border border-accent-cyan/20"
            >
              <h3 className="font-display text-2xl font-bold mb-3 text-gradient">
                Let's Build Something Amazing
              </h3>
              <p className="text-gray-400">
                I'm always interested in hearing about new projects and opportunities
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
