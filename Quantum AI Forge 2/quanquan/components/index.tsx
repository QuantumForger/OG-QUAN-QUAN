import Hero from '../components/Hero'
import OurApproach from '../components/OurApproach'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="bg-split-gradient">
      <Hero />
      <OurApproach />
      
      <motion.section 
        className="py-20 bg-deep-space-blue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center gradient-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Forge Your AI-Powered Future
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-center text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform from market participant to market leader with Quantum AI Forge
          </motion.p>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact">
              <motion.button
                className="inline-flex items-center bg-quantum-purple hover:bg-opacity-80 text-white px-6 py-3 rounded-full text-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(124, 58, 237, 0.7)' }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Quantum Leap <ArrowRight className="ml-2" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

