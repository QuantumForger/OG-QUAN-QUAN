'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const navItems = [
  { name: 'AI Solutions', href: '/services' },
  { name: 'Success Stories', href: '/case-studies' },
  { name: 'AI Perspectives', href: '/blog' },
  { name: 'Our Expertise', href: '/about' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      let currentActiveSection = ''

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (window.pageYOffset >= sectionTop - 50 && window.pageYOffset < sectionTop + sectionHeight - 50) {
          currentActiveSection = section.id
        }
      })

      setActiveSection(currentActiveSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-deep-space-blue bg-opacity-70 backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            {/* TODO: Replace placeholder with actual logo */}
            <Image 
              src="/placeholder.svg?height=40&width=40" 
              alt="Quantum AI Forge Logo" 
              width={40} 
              height={40} 
              className="mr-2 hover:opacity-90 transition-opacity"
              priority
            />
            <motion.div 
              className="text-2xl font-bold quantum-glow transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Quantum AI Forge
            </motion.div>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className={`text-white hover:text-quantum-purple transition-colors relative ${
                  activeSection === item.href.slice(1) ? 'text-quantum-purple' : ''
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  <motion.span 
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-success-green transform scale-x-0 transition-transform duration-300 ${
                      activeSection === item.href.slice(1) ? 'scale-x-100' : ''
                    }`}
                    initial={false}
                    animate={{ scaleX: activeSection === item.href.slice(1) ? 1 : 0 }}
                  />
                </motion.div>
              </Link>
            ))}
            <Link href="/contact">
              <motion.button 
                className="bg-gradient-to-r from-elite-navy to-quantum-purple hover:from-quantum-purple hover:to-elite-navy text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-glow-purple transform hover:scale-105 whitespace-nowrap"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(124, 58, 237, 0.7)' }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </div>

          <button 
            className="md:hidden text-white hover:text-quantum-purple transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 bg-deep-space-blue bg-opacity-90 backdrop-filter backdrop-blur-lg p-4 rounded-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="block py-2 text-white hover:text-quantum-purple transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact">
              <motion.button 
                className="w-full mt-4 bg-gradient-to-r from-elite-navy to-quantum-purple hover:from-quantum-purple hover:to-elite-navy text-white px-4 py-3 rounded-full font-semibold transition-colors text-center whitespace-nowrap"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(124, 58, 237, 0.7)' }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
      <div className="h-0.5 w-full bg-gradient-to-r from-elite-navy to-quantum-purple"></div>
    </header>
  )
}

