'use client'

import { motion } from 'framer-motion'
import { Clock, Headphones, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-400 max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Have a question? We're here to help with your AI implementation needs.
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl">
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <Input type="text" placeholder="Name" className="bg-white/10 border-white/20 text-white placeholder-gray-300" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" className="bg-white/10 border-white/20 text-white placeholder-gray-300" />
                  </div>
                  <div>
                    <Select>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Subject" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 text-white">
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="partnership">Business Partnership</SelectItem>
                        <SelectItem value="implementation">Implementation Help</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Textarea placeholder="Message" className="bg-white/10 border-white/20 text-white placeholder-gray-300" />
                  </div>
                  <Button type="submit" className="bg-purple-600 hover:bg-purple-500 w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="text-purple-400" />
                  <span className="text-white font-semibold">Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-100">Monday - Friday: 9AM - 6PM EST</p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Headphones className="text-purple-400" />
                  <span>Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-100">24/7 Technical Support for Enterprise Clients</p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="text-purple-400" />
                  <span>Global Service</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-100">Serving clients worldwide with dedicated regional teams</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

