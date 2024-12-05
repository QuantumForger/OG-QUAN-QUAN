'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, Lightbulb, Users } from 'lucide-react'
import Link from 'next/link'

const NeuralNetworkAnimation = () => (
  <div className="absolute inset-0 opacity-20">
    {/* This would be replaced with an actual animation component */}
    <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 animate-pulse"></div>
  </div>
)

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-90"></div>
        <NeuralNetworkAnimation />
        <div className="max-w-3xl mx-auto text-center px-4 relative z-10">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Every business deserves the power of AI
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 mt-6 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            At Quantum AI Forge, we've revolutionized the AI implementation process. Our mission isn't just about providing AI tools; it's about ensuring businesses of all sizes can successfully integrate and benefit from AI technology. Through our Quantum Implementation Framework, we're transforming how companies approach AI, turning the tide on failed projects and delivering consistent, measurable growth.
          </motion.p>
        </div>
      </section>

      {/* Journey Section */}
      <section className="max-w-4xl mx-auto mt-32 px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
        {[
          {
            title: "The Critical Pattern",
            content: "After helping implement AI solutions at over 100 companies, we noticed a critical pattern: it wasn't about having the best AI tools - it was about having the right implementation framework. While 89% of AI projects were failing, we were achieving consistent 280% growth for our clients. This realization was the catalyst for our next big step."
          },
          {
            title: "Birth of the Quantum Implementation Framework",
            content: "We poured our insights and experiences into developing the Quantum Implementation Framework. This wasn't just another methodology; it was a revolutionary approach to AI integration that addressed the common pitfalls and challenges businesses face. Our framework turned the complex process of AI implementation into a clear, step-by-step roadmap."
          },
          {
            title: "Proving the Concept",
            content: "We put our framework to the test across various industries and business sizes. The results were staggering. Companies that had previously struggled with AI adoption were now seeing remarkable transformations. Our clients weren't just implementing AI; they were thriving with it, achieving an average growth of 280%."
          },
          {
            title: "Refining the Methodology",
            content: "With each successful implementation, we refined our approach. We discovered key steps that were crucial for success: from initial AI readiness assessments to tailored integration strategies and ongoing optimization processes. This continuous improvement ensured our framework stayed ahead of the curve, adapting to new AI technologies and business challenges."
          },
          {
            title: "Today's Reality",
            content: "Now, we're not just implementing AI; we're changing the narrative around AI adoption in business. From small startups to large enterprises, our Quantum Implementation Framework is helping companies bridge the gap between AI potential and real-world results. We're turning the tide on failed AI projects, one successful implementation at a time."
          }
        ].map((stage, index) => (
          <Card key={index} className={`relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl mb-12 ${index % 2 === 0 ? 'ml-0' : 'ml-auto'}`} style={{maxWidth: "80%"}}>
            <CardContent>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">{stage.title}</h3>
              <p className="text-gray-100 text-opacity-90">{stage.content}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Human Connection Section */}
      <section className="mt-32 px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">The Faces Behind Our Mission</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Elara Quantum",
              role: "Founder & CEO",
              image: "/placeholder.svg?height=150&width=150",
              story: "Growing up in a family of small business owners, I saw firsthand the struggles of competing in a rapidly digitalizing world. My journey from a curious tech enthusiast to the founder of Quantum AI Forge is driven by a simple belief: AI should empower, not overpower, small businesses."
            },
            {
              name: "Zephyr Nexus",
              role: "Chief AI Architect",
              image: "/placeholder.svg?height=150&width=150",
              story: "My fascination with AI began in college, but it was a local diner's closure that made me realize the real-world impact of technology. I joined Quantum AI Forge to ensure that the AI revolution lifts all boats, not just the big ships. Every algorithm I design is a step towards a more equitable digital economy."
            }
          ].map((member, index) => (
            <Card key={index} className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl">
              <CardContent className="flex flex-col items-center text-center">
                <Avatar className="h-32 w-32 mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-purple-400 mb-4">{member.role}</p>
                <p className="text-sm text-gray-100">{member.story}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Journey Section */}
      <section className="mt-32 px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">A Client's Journey</h2>
        <Card className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl">
          <CardContent>
            <div className="flex flex-col md:flex-row items-center mb-6">
              <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                <img src="/placeholder.svg?height=200&width=300&text=Before+AI+Integration" alt="Bookstore before AI integration" className="rounded-lg shadow-lg" />
              </div>
              <div className="w-full md:w-1/2">
                <img src="/placeholder.svg?height=200&width=300&text=After+AI+Integration" alt="Bookstore after AI integration" className="rounded-lg shadow-lg" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Sarah's Bookstore: From Struggle to Success</h3>
            <blockquote className="border-l-4 border-purple-400 pl-4 italic text-lg text-gray-300 mb-4">
              "Quantum AI Forge didn't just save my business; they helped me rediscover my passion for connecting readers with their perfect books."
            </blockquote>
            <p className="text-gray-100 mb-4 leading-relaxed readable-text">
              I was ready to close my bookstore after 20 years. Online retailers were crushing us, and I couldn't keep up. That's when I met the team at Quantum AI Forge. They didn't just offer a solution; they listened to my story and understood what my store meant to the community.
            </p>
            <p className="text-gray-100 mb-4 leading-relaxed readable-text">
              Implementing AI felt daunting at first, but they guided me every step of the way. Now, we use AI to predict trends, personalize recommendations, and even manage inventory. It's like having a crystal ball and a team of experts at my fingertips.
            </p>
            <div className="bg-purple-900 bg-opacity-50 p-4 rounded-lg">
              <h4 className="text-xl font-semibold mb-2 text-purple-300">Results at a Glance</h4>
              <ul className="list-disc list-inside text-gray-200">
                <li>Online sales increased by 150%</li>
                <li>Customer retention improved by 60%</li>
                <li>Inventory turnover rate doubled</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Values Section */}
      <section className="mt-32 px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Heart className="h-12 w-12 mb-4 text-purple-400" />,
              title: "Empathy First",
              description: "We believe in understanding the human stories behind every business. It's not just about implementing AI; it's about preserving legacies and empowering dreams."
            },
            {
              icon: <Lightbulb className="h-12 w-12 mb-4 text-purple-400" />,
              title: "Innovative Accessibility",
              description: "We're committed to making cutting-edge AI accessible to all. Our solutions are powerful yet user-friendly, ensuring that even the least tech-savvy can harness the power of AI."
            },
            {
              icon: <Users className="h-12 w-12 mb-4 text-purple-400" />,
              title: "Community Impact",
              description: "Every business we empower strengthens a community. We measure our success not just in numbers, but in the vibrant local economies and preserved community landmarks we help sustain."
            }
          ].map((value, index) => (
            <Card key={index} className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-center">
              <CardContent>
                {value.icon}
                <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                <p className="text-gray-100">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Closing Section */}
      <section className="max-w-3xl mx-auto text-center mt-32 px-4 pb-24">
        <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
        <p className="text-xl text-gray-200 leading-relaxed mb-8 font-medium">
          At Quantum AI Forge, we're not just implementing AI; we're revolutionizing how businesses approach AI adoption. Our Quantum Implementation Framework has proven that with the right methodology, any company can harness the power of AI and achieve remarkable growth. Are you ready to transform your business with a proven AI implementation strategy that delivers results?
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-500">
            Let's Write Your AI Success Story
          </Button>
        </Link>
      </section>
    </div>
  )
}

