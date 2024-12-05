'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import ParticleBackground from './ParticleBackground'

const powerVerbs = ['leadership', 'evolution', 'transformation']

const serviceCards = [
  { title: 'AI Integration', description: 'Seamlessly integrate AI into your existing systems' },
  { title: 'Market Evolution Strategies', description: 'Stay ahead with data-driven market strategies' },
  { title: 'Quantum-Powered Analytics', description: 'Harness the power of quantum computing for unparalleled insights' },
]

const trustLogos = [
  { name: 'TechCorp', logo: '/logos/techcorp.svg' },
  { name: 'InnovateAI', logo: '/logos/innovateai.svg' },
  { name: 'FutureForge', logo: '/logos/futureforge.svg' },
]

export default function Hero() {
  const [currentVerbIndex, setCurrentVerbIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVerbIndex((prevIndex) => (prevIndex + 1) % powerVerbs.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-split-gradient">
      <ParticleBackground />
      <div className="container mx-auto px-4 z-10">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          While others focus on AI tools, we engineer market{' '}
          <AnimatePresence mode="wait">
            <motion.span
              key={powerVerbs[currentVerbIndex]}
              className="inline-block gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {powerVerbs[currentVerbIndex]}
            </motion.span>
          </AnimatePresence>
          {' '}with Quantum AI Forge
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-center text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transform from market participant to market leader with our cutting-edge AI solutions
        </motion.p>
        
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/contact">
            <motion.button
              className="bg-quantum-purple text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-opacity-80"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(124, 58, 237, 0.7)' }}
              whileTap={{ scale: 0.95 }}
              animate={{ boxShadow: ['0 0 0 rgba(124, 58, 237, 0)', '0 0 20px rgba(124, 58, 237, 0.7)', '0 0 0 rgba(124, 58, 237, 0)'] }}
              transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
            >
              Evolve Your Business
            </motion.button>
          </Link>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, staggerChildren: 0.1 }}
        >
          {serviceCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="glassmorphism p-6 rounded-lg shadow-lg hover-lift"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-quantum-purple">{card.title}</h3>
              <p className="text-gray-300">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="flex justify-center items-center space-x-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg font-semibold text-gray-400">Trusted by:</p>
          {trustLogos.map((logo, index) => (
            <motion.img 
              key={logo.name} 
              src={logo.logo} 
              alt={logo.name} 
              className="h-8 opacity-70 hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <ChevronDown className="text-quantum-purple animate-bounce" size={32} />
        </motion.div>
      </div>
    </section>
  )
}

