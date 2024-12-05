'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Check } from 'lucide-react'

const PricingSection = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-8">
      <button
        className="w-full flex justify-between items-center bg-elite-navy p-4 rounded-lg text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-2xl font-bold text-quantum-purple">{title}</h2>
        {isOpen ? <ChevronUp className="text-quantum-purple" /> : <ChevronDown className="text-quantum-purple" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-deep-space-blue p-4 rounded-b-lg"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const PricingCard = ({ title, price, features, cta }: { title: string; price: string; features: string[]; cta: string }) => (
  <div className="bg-elite-navy p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-bold mb-4 text-quantum-purple">{title}</h3>
    <p className="text-3xl font-bold mb-6 text-success-green">{price}</p>
    <ul className="space-y-2 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <Check className="text-quantum-purple mr-2 mt-1 flex-shrink-0" size={16} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button className="w-full py-2 bg-quantum-purple text-white rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300">
      {cta}
    </button>
  </div>
)

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-deep-space-blue text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gradient">Quantum AI Implementation Suite</h1>
        <p className="text-xl mb-12 text-center">Transform Your Business with Enterprise-Grade AI Solutions</p>

        <PricingSection title="1. Discovery & Strategy">
          <PricingCard
            title="Strategic AI Consultation"
            price="$2,500 (One-Time)"
            features={[
              "Deep Business Analysis: Identify opportunities for AI-driven growth.",
              "AI Opportunity Mapping: Locate key areas for AI integration.",
              "Implementation Roadmap: Step-by-step deployment guide.",
              "ROI Projection: Detailed metrics for understanding potential gains.",
              "Comprehensive report & action plan included."
            ]}
            cta="Get Started"
          />
          <p className="mt-4 text-success-green">Perfect for businesses wanting to begin their AI journey with clear, informed strategies.</p>
        </PricingSection>

        <PricingSection title="2. Core Implementation Packages">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PricingCard
              title="AI-Powered Customer Experience Suite"
              price="$3,500/month"
              features={[
                "Intelligent Chatbot Implementation",
                "Email Response Automation",
                "Customer Journey Optimization",
                "Sentiment Analysis",
                "24/7 Support Monitoring",
                "Average ROI: 320% within 90 days"
              ]}
              cta="Choose Plan"
            />
            <PricingCard
              title="Predictive Analytics Engine"
              price="$4,500/month"
              features={[
                "Customer Behavior Prediction",
                "Market Trend Analysis",
                "Inventory Optimization",
                "Revenue Forecasting",
                "Risk Assessment",
                "Average Cost Reduction: 45%"
              ]}
              cta="Choose Plan"
            />
            <PricingCard
              title="Business Process Automation"
              price="$3,000/month"
              features={[
                "Workflow Automation",
                "Document Processing",
                "Data Entry Automation",
                "Task Management AI",
                "Process Optimization",
                "Average Efficiency Gain: 280%"
              ]}
              cta="Choose Plan"
            />
          </div>
        </PricingSection>

        <PricingSection title="3. Quick-Start Solutions">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PricingCard
              title="Essential AI Package"
              price="$1,500/month"
              features={[
                "Basic Chatbot: Automate simple customer queries",
                "Simple Automation: Handle low-level tasks",
                "Data Analysis: Understand key trends",
                "Email Integration: Boost response capabilities"
              ]}
              cta="Get Started"
            />
            <PricingCard
              title="Growth Accelerator"
              price="$2,500/month"
              features={[
                "Enhanced Customer Service AI: Faster, smarter support",
                "Basic Process Automation: Simplify workflows",
                "Simple Predictive Analytics: Understand basic market trends",
                "Performance Dashboard: Visually track progress"
              ]}
              cta="Accelerate Growth"
            />
          </div>
        </PricingSection>

        <PricingSection title="4. Enterprise Solutions">
          <PricingCard
            title="Custom Enterprise Implementation"
            price="Starting at $10,000/month"
            features={[
              "Full-Scale AI Integration: Across all business units",
              "Custom Model Development: Tailored for enterprise needs",
              "Enterprise-Wide Automation: Boost productivity at scale",
              "Dedicated Support Team: Available when needed"
            ]}
            cta="Contact for Custom Quote"
          />
        </PricingSection>

        <PricingSection title="5. Individual AI Service Offerings">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-quantum-purple">One-Time Service Offerings</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Custom Chatbot Development: Starting at $3,000</li>
              <li>AI-Powered Website Development: Starting at $7,500</li>
              <li>AI Branding & Marketing Strategy Consultation: $2,500 (One-Time Session)</li>
              <li>Content Generation AI Module: Starting at $2,000</li>
              <li>Predictive Analytics Dashboard Setup: $5,000</li>
            </ul>
          </div>
        </PricingSection>

        <PricingSection title="6. All Packages Include">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-4 text-quantum-purple">Standard Features</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>24/7 Technical Support</li>
                <li>Monthly Performance Reports</li>
                <li>Regular System Updates</li>
                <li>Implementation Support</li>
                <li>ROI Tracking</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-quantum-purple">Success Guarantee</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>90-Day Performance Guarantee</li>
                <li>Clear Success Metrics</li>
                <li>Regular Optimization</li>
                <li>Quarterly Review Sessions</li>
              </ul>
            </div>
          </div>
        </PricingSection>

        <PricingSection title="7. Enhancement Options">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-4 text-quantum-purple">Performance Boosters</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Advanced Analytics: +$1,000/month</li>
                <li>Extra Automation Flows: +$750/month</li>
                <li>Custom Reporting: +$500/month</li>
                <li>Additional Training: $1,500/session</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-quantum-purple">Scale-Up Options</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Additional Users: $100/user/month</li>
                <li>Extra Processing Power: From $500/month</li>
                <li>Custom Integrations: From $2,000</li>
                <li>Advanced Features: Custom Pricing</li>
              </ul>
            </div>
          </div>
        </PricingSection>

        <PricingSection title="8. Implementation Timeline">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-quantum-purple">Discovery Phase: 1-2 Weeks</h3>
              <p>Understand your business needs and define key goals.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-quantum-purple">Setup & Integration: 2-4 Weeks</h3>
              <p>Implement core AI models and integrate into business workflows.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-quantum-purple">Optimization: Ongoing</h3>
              <p>Ensure systems are optimized for peak performance.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-quantum-purple">First Results: 30-60 Days</h3>
              <p>Expect measurable impacts within 1-2 months.</p>
            </div>
          </div>
        </PricingSection>

        <div className="mt-12 text-center">
          <p className="mb-4">All prices are in USD. Annual billing available with a 20% discount.</p>
          <button className="px-8 py-4 bg-quantum-purple text-white rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300">
            Contact Us for a Personalized Consultation
          </button>
        </div>
      </div>
    </div>
  )
}

