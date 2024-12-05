import React from 'react'
import { theme } from '@/lib/theme'

interface PatternBreakHeadlineProps {
  children: React.ReactNode
}

export default function PatternBreakHeadline({ children }: PatternBreakHeadlineProps) {
  return (
    <h2 
      className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text animate-gradient"
      style={{ 
        backgroundImage: `linear-gradient(to right, ${theme.colors.quantumPurple}, ${theme.colors.successGreen}, ${theme.colors.quantumPurple})`,
        backgroundSize: '200% auto',
      }}
    >
      {children}
    </h2>
  )
}

const gradientAnimation = `
  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const style = document.createElement('style');
style.textContent = gradientAnimation;
document.head.appendChild(style);

