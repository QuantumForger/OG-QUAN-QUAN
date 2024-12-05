import React from 'react'

interface ValueBridgeProps {
  children: React.ReactNode
}

export default function ValueBridge({ children }: ValueBridgeProps) {
  return (
    <p className="text-xl md:text-2xl mb-8 text-elite-navy font-semibold">
      {children}
    </p>
  )
}

