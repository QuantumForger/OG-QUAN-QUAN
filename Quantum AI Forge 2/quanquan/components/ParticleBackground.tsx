'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef<THREE.Points>(null)
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(1000 * 3)
    const colors = new Float32Array(1000 * 3)
    for (let i = 0; i < 1000; i++) {
      const x = (Math.random() - 0.5) * 10
      const y = (Math.random() - 0.5) * 10
      const z = (Math.random() - 0.5) * 10
      positions.set([x, y, z], i * 3)
      colors.set([Math.random(), Math.random(), Math.random()], i * 3)
    }
    return [positions, colors]
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20
      ref.current.rotation.y -= delta / 30
    }
  })

  return (
    <Points ref={ref}>
      <PointMaterial 
        vertexColors 
        size={0.1} 
        sizeAttenuation={true} 
        depthWrite={false} 
        transparent 
        opacity={0.6} 
      />
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={positions.length / 3} 
          array={positions} 
          itemSize={3} 
        />
        <bufferAttribute 
          attach="attributes-color" 
          count={colors.length / 3} 
          array={colors} 
          itemSize={3} 
        />
      </bufferGeometry>
    </Points>
  )
}

export default function ParticleBackground() {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleContextLost = (event) => {
      event.preventDefault()
      setHasError(true)
    }
    const canvas = document.querySelector('canvas')
    canvas?.addEventListener('webglcontextlost', handleContextLost)
    return () => canvas?.removeEventListener('webglcontextlost', handleContextLost)
  }, [])

  if (isLoading) {
    return <div className="absolute inset-0 flex items-center justify-center bg-deep-space-blue">
      <div className="w-16 h-16 border-4 border-quantum-purple border-t-transparent rounded-full animate-spin"></div>
    </div>
  }

  if (hasError) {
    return <div className="absolute inset-0 flex items-center justify-center bg-deep-space-blue text-white">
      <p>Unable to load 3D background. Please try refreshing the page.</p>
    </div>
  }

  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ParticleField />
      </Canvas>
    </div>
  )
}

