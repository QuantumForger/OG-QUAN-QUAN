import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="glassmorphic mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 quantum-glow">Quantum AI Forge</h3>
            <p className="text-sm">Forging the future with advanced AI solutions</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-quantum-purple transition-colors">AI Solutions</Link></li>
              <li><Link href="/case-studies" className="hover:text-quantum-purple transition-colors">Success Stories</Link></li>
              <li><Link href="/blog" className="hover:text-quantum-purple transition-colors">AI Perspectives</Link></li>
              <li><Link href="/about" className="hover:text-quantum-purple transition-colors">Our Expertise</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-sm mb-2">Email: info@quantumaiforge.com</p>
            <p className="text-sm">Phone: +1 (555) 123-4567</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-quantum-purple transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-white hover:text-quantum-purple transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-white hover:text-quantum-purple transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-white hover:text-quantum-purple transition-colors"><Mail size={20} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Quantum AI Forge. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

