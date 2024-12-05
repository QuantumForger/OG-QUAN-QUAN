'use client'

import { motion } from 'framer-motion'
import { Zap, TrendingUpIcon as Trending, Shield } from 'lucide-react'

const approaches = [
  {
    icon: Zap,
    title: 'Rapid Integration',
    description: 'Seamlessly integrate AI solutions into your existing infrastructure with minimal disruption.'
  },
  {
    icon: Trending,
    title: 'Continuous Evolution',
    description: 'Stay ahead of the curve with our adaptive AI systems that evolve with your business needs.'
  },
  {
    icon: Shield,
    title: 'Robust Security',
    description: 'Ensure the integrity and confidentiality of your data with our state-of-the-art AI security measures.'
  }
]

export default function OurApproach() {
  return (
    <section className="py-20 bg-elite-navy">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Quantum Approach
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <motion.div 
              key={approach.title}
              className="bg-deep-space-blue p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <approach.icon className="text-quantum-purple mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2 text-white">{approach.title}</h3>
              <p className="text-gray-300">{approach.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

