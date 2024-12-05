import React from 'react'
import { theme } from '@/lib/theme'

interface ProofSequenceProps {
  metric: string
  timeline: string
  result: string
  className?: string
}

export default function ProofSequence({ metric, timeline, result, className = '' }: ProofSequenceProps) {
  return (
    <div className={`glassmorphism bg-elite-navy bg-opacity-50 p-6 rounded-lg shadow-lg ${className}`} style={{
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <p className="text-2xl font-bold mb-2 text-shadow" style={{ color: theme.colors.successGreen }}>{metric}</p>
      <p className="text-lg mb-2 text-shadow">{timeline}</p>
      <p className="text-xl font-semibold text-shadow">{result}</p>
    </div>
  )
}

