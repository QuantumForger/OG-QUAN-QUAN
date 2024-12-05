'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const serviceCards = [
  {
    id: 1,
    title: "Business Process Automation",
    price: 3000,
    features: [
      "Workflow Automation",
      "Document Processing",
      "Data Entry Automation",
      "Task Management AI",
      "Process Optimization"
    ],
    roi: "Average Efficiency Gain: 280%",
    description: "Streamline your operations with AI-powered automation, reducing manual tasks and improving overall efficiency."
  },
  {
    id: 2,
    title: "AI-Powered Customer Experience Suite",
    price: 3500,
    features: [
      "Intelligent Chatbot Implementation",
      "Email Response Automation",
      "Customer Journey Optimization",
      "Sentiment Analysis",
      "24/7 Support Monitoring"
    ],
    roi: "Average ROI: 320% in 90 Days",
    description: "Transform how customers interact with your brand, ensuring 24/7 responsiveness and a highly personalized journey."
  },
  {
    id: 3,
    title: "Predictive Analytics Engine",
    price: 4500,
    features: [
      "Customer Behavior Prediction",
      "Market Trend Analysis",
      "Inventory Optimization",
      "Revenue Forecasting",
      "Risk Assessment"
    ],
    roi: "Average Cost Reduction: 45%",
    description: "Leverage advanced analytics to predict market trends, optimize inventory, and make data-driven decisions."
  }
];

const ServiceCard = ({ id, title, price, features, roi, description, isSelected, onSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="aspect-square w-full">
      <motion.div 
        className={`
          bg-elite-navy bg-opacity-50 backdrop-filter backdrop-blur-lg 
          p-6 rounded-lg shadow-lg border border-quantum-purple border-opacity-30 
          transition-all duration-300 hover:shadow-quantum-purple/50 hover:border-opacity-50 
          ${isSelected ? 'ring-2 ring-quantum-purple' : ''}
          text-white
          flex flex-col items-center justify-center w-full h-full
        `}
        whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(124, 58, 237, 0.4)' }}
      >
        <h3 className="text-2xl font-bold mb-2 text-white text-center" style={{ textShadow: '0 0 10px rgba(124, 58, 237, 0.5)' }}>{title}</h3>
        <p className="text-3xl font-bold mb-2 text-success-green text-center">${price.toLocaleString()}</p>
        <p className="text-sm mb-4 text-gray-300 text-center">per month</p>
        <ul className="mb-4 space-y-2">
          {features.map((feature, index) => (
            <motion.li 
              key={index} 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Check className="text-quantum-purple mr-2 flex-shrink-0" size={16} />
              <span className="text-gray-200">{feature}</span>
            </motion.li>
          ))}
        </ul>
        {roi && <p className="text-success-green font-semibold mb-4">{roi}</p>}
        <button 
          className="text-quantum-purple font-semibold flex items-center mb-4 hover:text-success-green transition-colors duration-300"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          Learn More {isExpanded ? <ChevronUp className="ml-1" /> : <ChevronDown className="ml-1" />}
        </button>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <p className="text-gray-200">{description}</p>
          </motion.div>
        )}
        <motion.button
          className={`
            mt-4 w-full 
            bg-quantum-purple bg-opacity-50 backdrop-filter backdrop-blur-md
            hover:bg-quantum-purple hover:bg-opacity-70
            text-white font-bold py-4 px-6 
            rounded-full 
            transition-all duration-300 
            ${isSelected ? 'bg-success-green bg-opacity-70' : ''} 
            shadow-lg hover:shadow-2xl
            border border-white border-opacity-20
          `}
          whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(124, 58, 237, 0.7)' }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(id)}
        >
          <span className="relative z-10">{isSelected ? 'Selected' : 'Select Package'}</span>
        </motion.button>
      </motion.div>
    </div>
  )
}

const AccordionItem = ({ title, children, className }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-4">
      <motion.button
        className="w-full flex justify-between items-center bg-elite-navy bg-opacity-50 backdrop-filter backdrop-blur-md p-4 rounded-lg text-left transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ backgroundColor: 'rgba(25, 55, 109, 0.7)' }}
      >
        <h3 className="text-xl font-bold text-white" style={{ textShadow: '0 0 10px rgba(124, 58, 237, 0.5)' }}>{title}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-quantum-purple" />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`bg-deep-space-blue bg-opacity-50 backdrop-filter backdrop-blur-sm p-4 rounded-b-lg text-white ${className}`}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ServicesAndPricing() {
  const [selectedPackage, setSelectedPackage] = useState(null)

  const handlePackageSelect = (id) => {
    setSelectedPackage(id === selectedPackage ? null : id)
  }

  return (
    <div className="min-h-screen bg-deep-space-blue text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-deep-space-blue via-elite-navy to-quantum-purple opacity-50 z-0"></div>
      <div className="relative z-10">
        {/* Header Section */}
        <header className="bg-gradient-to-r from-deep-space-blue to-quantum-purple py-20 relative overflow-hidden backdrop-filter backdrop-blur-lg bg-opacity-70">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h1 
              className="text-5xl font-bold mb-4 text-white"
              style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.5)' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Unlock the Power of AI for Your Business Transformation
            </motion.h1>
            <motion.p 
              className="text-2xl mb-8 text-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore our tailored AI solutions designed for growth, efficiency, and market evolution.
            </motion.p>
            <motion.div
              className="w-full max-w-4xl mx-auto mt-8 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/ai-solutions-hero.jpg"
                  alt="AI Solutions Hero Image"
                  width={1400}
                  height={600}
                  className="object-cover w-full rounded-lg"
                  priority
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact" className="inline-block">
                <motion.button
                  className="bg-gradient-to-r from-success-green to-quantum-purple text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(124, 58, 237, 0.7)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Transform Your Business Now
                </motion.button>
              </Link>
            </motion.div>
          </div>
          <div className="absolute inset-0 opacity-20 bg-neural-pattern mix-blend-overlay"></div>
        </header>

        {/* Consultation (Discovery & Strategy) Section */}
        <section className="py-20 mt-0 backdrop-filter backdrop-blur-md bg-opacity-50 bg-elite-navy relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-quantum-purple"
              style={{ textShadow: '0 0 10px rgba(124, 58, 237, 0.5)' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Discovery & Strategy
            </motion.h2>
            <p className="mb-6 text-gray-100">Successful AI begins with deep insights. Our Strategic AI Consultation helps uncover untapped opportunities for AI integration, providing a clear roadmap for growth.</p>
            <figure className="mb-6 w-full max-w-2xl mx-auto">
              <Image 
                src="/images/neonpurple4.jpeg"
                alt="Neon purple AI strategy visualization" 
                width={500}
                height={300}
                layout="responsive"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <figcaption className="mt-2 text-center text-sm text-gray-300">
                Our AI Strategy Journey: From Discovery to Implementation and Beyond
              </figcaption>
            </figure>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                
              </div>
              <div>
                <ServiceCard
                  title="Strategic AI Consultation"
                  price={2500}
                  features={[
                    "Deep Business Analysis",
                    "AI Opportunity Mapping",
                    "ROI Projection",
                    "Step-by-Step Implementation Roadmap"
                  ]}
                  description="Our comprehensive consultation provides a tailored strategy to integrate AI into your business processes, identifying key areas for improvement and growth."
                />
                <Link href="/consultation">
                  <motion.button
                    className="mt-6 w-full bg-quantum-purple hover:bg-quantum-purple/90 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(124, 58, 237, 0.7)' }}
                  >
                    <span>Forge Your AI Strategy</span>
                    <ArrowRight className="ml-2" size={20} />
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-neural-pattern opacity-5 mix-blend-overlay"></div>
        </section>

        {/* Quick-Start Solutions */}
        <section className="py-20 bg-elite-navy backdrop-filter backdrop-blur-md bg-opacity-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center text-quantum-purple"
              style={{ textShadow: '0 0 10px rgba(124, 58, 237, 0.5)' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Quick-Start Solutions
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-deep-space-blue to-elite-navy p-8 rounded-lg">
                <ServiceCard
                  title="Essential AI Package"
                  price={1500}
                  features={[
                    "Basic Chatbot",
                    "Simple Automation",
                    "Data Analysis",
                    "Email Integration"
                  ]}
                  description="Ideal for small businesses, this package delivers essential AI capabilities without overwhelming complexity—get started with powerful automation at your fingertips."
                />
              </div>
              <div className="bg-gradient-to-br from-elite-navy to-quantum-purple p-8 rounded-lg">
                <ServiceCard
                  title="Growth Accelerator"
                  price={2500}
                  features={[
                    "Enhanced Customer Service AI",
                    "Process Automation",
                    "Predictive Analytics",
                    "Performance Dashboard"
                  ]}
                  description="Perfect for growing companies looking to leverage AI to streamline operations, improve customer service, and gather insightful data for future decisions."
                />
              </div>
            </div>
            <div className="mt-12 flex justify-center space-x-4">
              <motion.button
                className="bg-success-green bg-opacity-70 hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 backdrop-filter backdrop-blur-sm border border-success-green border-opacity-50 shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(5, 150, 105, 0.7)' }}
              >
                Start Today
              </motion.button>
              <motion.button
                className="bg-quantum-purple bg-opacity-70 hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 backdrop-filter backdrop-blur-sm border border-quantum-purple border-opacity-50 shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(124, 58, 237, 0.7)' }}
              >
                Request More Info
              </motion.button>
            </div>
          </div>
          <div className="absolute inset-0 bg-neural-pattern opacity-5 mix-blend-overlay"></div>
        </section>

        {/* Core Implementation Packages */}
        <section className="py-20 backdrop-filter backdrop-blur-md bg-opacity-50 bg-elite-navy relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">

            <motion.h2 
              className="text-4xl font-bold mb-12 text-center text-quantum-purple"
              style={{ textShadow: '0 0 10px rgba(124, 58, 237, 0.5)' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Core Implementation Packages
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceCards.map((card) => (
                <ServiceCard
                  key={card.id}
                  {...card}
                  isSelected={selectedPackage === card.id}
                  onSelect={handlePackageSelect}
                />
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-neural-pattern opacity-5 mix-blend-overlay"></div>
        </section>

        {/* Custom Enterprise Solutions */}
        <section className="py-20 bg-elite-navy backdrop-filter backdrop-blur-md bg-opacity-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center text-quantum-purple"
              style={{ textShadow: '0 0 10px rgba(124, 58, 237, 0.5)' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Custom Enterprise Solutions
            </motion.h2>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
              <div className="md:w-1/2 mb-8 md:mb-0 bg-gradient-to-br from-elite-navy to-quantum-purple p-8 rounded-2xl shadow-2xl">
                <h3 className="text-4xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-quantum-purple to-success-green">Custom Enterprise Implementation</h3>
                <p className="text-2xl mb-8 text-success-green font-semibold">Starting at $10,000/month</p>
                <ul className="mb-8 space-y-4">
                  <li className="flex items-center">
                    <div className="bg-success-green rounded-full p-1 mr-4">
                      <Check className="text-deep-space-blue" size={24} />
                    </div>
                    <span className="text-lg">Full-Scale Integration</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-success-green rounded-full p-1 mr-4">
                      <Check className="text-deep-space-blue" size={24} />
                    </div>
                    <span className="text-lg">Custom Model Development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-success-green rounded-full p-1 mr-4">
                      <Check className="text-deep-space-blue" size={24} />
                    </div>
                    <span className="text-lg">Dedicated AI Support Team</span>
                  </li>
                </ul>
                <p className="mb-8 text-lg italic text-gray-300">Our Custom Enterprise Solutions bring all your AI needs under one roof, ensuring complete, scalable automation to propel your business into the future.</p>
                <motion.button
                  className="w-full bg-gradient-to-r from-success-green via-quantum-purple to-success-green text-white font-bold py-4 px-8 rounded-full transition-all duration-300 text-lg flex items-center justify-center space-x-2 shadow-lg overflow-hidden relative group"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(5, 150, 105, 0.7)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 text-shadow-sm">Contact Us for a Custom Quote</span>
                  <ArrowRight className="inline-block ml-2 relative z-10" size={20} />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-quantum-purple via-success-green to-quantum-purple"
                    initial={{ x: '100%' }}
                    whileHover={{ x: '0%' }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.button>
              </div>
              <div className="md:w-1/2">
                {/* Here you would add the 3D rotating cube component */}
                <div className="w-full h-96 bg-gradient-to-br from-quantum-purple to-elite-navy rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                  <div className="relative w-64 h-64 animate-spin-slow">
                    <div className="absolute inset-0 border-4 border-success-green rounded-lg transform rotate-45"></div>
                    <div className="absolute inset-0 border-4 border-quantum-purple rounded-lg transform -rotate-45"></div>
                    <p className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">3D Cube</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-neural-pattern opacity-5 mix-blend-overlay"></div>
        </section>

        {/* Standalone AI Solutions */}
        <section className="py-20 backdrop-filter backdrop-blur-md bg-opacity-50 bg-elite-navy relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center text-quantum-purple"
              style={{ textShadow: '0 0 10px rgba(124, 58, 237, 0.5)' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Standalone AI Solutions
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                title="Basic Chatbot Setup"
                price={2000}
                features={["Automate responses to common customer inquiries", "Improve support availability"]}
                description="Get started with AI-powered customer support to handle basic inquiries and improve response times."
              />
              <ServiceCard
                title="Advanced NLP Chatbot"
                price={4500}
                features={["Context-aware conversations", "Handle complex interactions"]}
                description="Enhance your customer service with an advanced chatbot that understands context and handles complex interactions."
              />
              <ServiceCard
                title="Voice AI Agent Integration"
                price={6500}
                features={["Voice-interactive experience", "Natural language processing"]}
                description="Provide an immersive voice-interactive experience for your customers with advanced natural language processing."
              />
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard
                title="AI-Powered Website Development"
                price={7500}
                features={["Intelligent user interactions", "Personalized content delivery"]}
                description="Create an intelligent, responsive website with integrated AI to maximize user engagement and conversion rates."
              />
              <ServiceCard
                title="Predictive Analytics Dashboard Setup"
                price={5000}
                features={["Real-time data visualization", "Trend forecasting"]}
                description="Monitor, predict, and optimize performance with real-time analytics at your fingertips. Make data-driven decisions to stay ahead of market trends."
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-neural-pattern opacity-5 mix-blend-overlay"></div>
        </section>

        {/* Enhancements & Add-Ons */}
        <section className="py-12 bg-elite-navy backdrop-filter backdrop-blur-md bg-opacity-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center text-quantum-purple"
              style={{ textShadow: '0 0 10px rgba(124, 58, 237, 0.5)' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Enhancements & Add-Ons
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 mb-8 bg-elite-navy bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg border border-quantum-purple border-opacity-20">
              <div>
                <AccordionItem title="Performance Boosters" className="bg-deep-space-blue bg-opacity-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <ul className="space-y-6">
                    <li className="transform hover:scale-105 transition-transform duration-300">
                      <h4 className="font-semibold text-quantum-purple text-lg mb-2">Advanced Analytics: +$1,000/month</h4>
                      <p className="text-gray-200">Deep dive into your data and uncover hidden insights.</p>
                    </li>
                    <li className="transform hover:scale-105 transition-transform duration-300">
                      <h4 className="font-semibold text-quantum-purple text-lg mb-2">Extra Automation Flows: +$750/month</h4>
                      <p className="text-gray-200">Expand automation to handle more workflows and boost productivity.</p>
                    </li>
                  </ul>
                </AccordionItem>
              </div>
              <div>
                <AccordionItem title="Scale-Up Options" className="bg-deep-space-blue bg-opacity-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <ul className="space-y-6">
                    <li className="transform hover:scale-105 transition-transform duration-300">
                      <h4 className="font-semibold text-quantum-purple text-lg mb-2">Additional Users: $100/user/month</h4>
                      <p className="text-gray-200">Expand your team's access to AI-powered tools.</p>
                    </li>
                    <li className="transform hover:scale-105 transition-transform duration-300">
                      <h4 className="font-semibold text-quantum-purple text-lg mb-2">Extra Processing Power: From $500/month</h4>
                      <p className="text-gray-200">Boost your AI's performance for handling larger datasets.</p>
                    </li>
                    <li className="transform hover:scale-105 transition-transform duration-300">
                      <h4 className="font-semibold text-quantum-purple text-lg mb-2">Custom Integrations: From $2,000</h4>
                      <p className="text-gray-200">Seamlessly connect our AI solutions with your existing systems.</p>
                    </li>
                  </ul>
                </AccordionItem>
              </div>
            </div>
            <div className="mt-8 text-center">
              <div className="inline-block p-1 bg-gradient-to-r from-quantum-purple via-success-green to-quantum-purple rounded-full">
                <motion.button
                  className="bg-deep-space-blue hover:bg-elite-navy text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(124, 58, 237, 0.7)' }}
                >
                  Customize Your AI Solution
                </motion.button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-neural-pattern opacity-5 mix-blend-overlay"></div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-deep-space-blue to-quantum-purple">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold mb-8">
              Ready to <span className="text-success-green">Drive Market Evolution</span> with AI?
            </h2>
            <div className="flex justify-center space-x-4">
              <motion.button
                className="bg-success-green hover:bg-success-green/90 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(5, 150, 105, 0.7)' }}
              >
                Get a Custom Quote
              </motion.button>
              <motion.button
                className="bg-quantum-purple hover:bg-quantum-purple/90 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(124, 58, 237, 0.7)' }}
              >
                Schedule a Free Consultation
              </motion.button>
            </div>
          </div>
        </section>

        {/* Floating Sticky CTA */}
        <motion.div 
          className="fixed bottom-4 right-4 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.button
            className="bg-quantum-purple bg-opacity-90 hover:bg-opacity-100 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 flex items-center backdrop-filter backdrop-blur-sm"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(124, 58, 237, 0.7)' }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started <ArrowRight className="ml-2" size={20} />
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

