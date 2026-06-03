import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

function GlassBottle() {
  const bottleRef = useRef()
  const liquidRef = useRef()
  const [hovered, setHovered] = useState(false)
  const [mouseX, setMouseX] = useState(0)
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX((e.clientX / window.innerWidth) * 2 - 1)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  useFrame(() => {
    if (bottleRef.current && !hovered) {
      bottleRef.current.rotation.y += 0.005
      // Liquid gentle movement
      if (liquidRef.current) {
        liquidRef.current.rotation.z = Math.sin(Date.now() * 0.002) * 0.05
      }
    }
  })
  
  return (
    <group 
      ref={bottleRef}
      position={[0, 0, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Main Glass Body */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.85, 0.7, 1.8, 128, 128]} />
        <meshPhysicalMaterial 
          color="#e8a44d"
          metalness={0.95}
          roughness={0.12}
          transparent={true}
          opacity={0.65}
          clearcoat={1}
          clearcoatRoughness={0.1}
          reflectivity={0.5}
          ior={1.5}
        />
      </mesh>
      
      {/* Glass Outer Layer (for extra reflection) */}
      <mesh position={[0, 0, 0]} scale={1.02}>
        <cylinderGeometry args={[0.88, 0.73, 1.82, 128]} />
        <meshPhysicalMaterial 
          color="#ffffff"
          metalness={0.98}
          roughness={0.05}
          transparent={true}
          opacity={0.2}
          clearcoat={1}
        />
      </mesh>
      
      {/* Premium Liquid Inside */}
      <mesh ref={liquidRef} position={[0, -0.25, 0]}>
        <cylinderGeometry args={[0.75, 0.62, 1.2, 128]} />
        <meshStandardMaterial 
          color="#ff6600"
          emissive="#ff3300"
          emissiveIntensity={0.35}
          transparent={true}
          opacity={0.9}
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>
      
      {/* Liquid Bubble Effect */}
      <mesh position={[0.2, -0.1, 0.3]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#ffaa66" emissive="#ff6600" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Gold Cap - Premium */}
      <mesh position={[0, 0.95, 0]} castShadow>
        <cylinderGeometry args={[0.55, 0.62, 0.35, 64]} />
        <meshStandardMaterial 
          color="#d4af37" 
          metalness={0.98} 
          roughness={0.15}
          emissive="#d4af37"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Cap Top Detail */}
      <mesh position={[0, 1.13, 0]}>
        <sphereGeometry args={[0.32, 32, 32]} />
        <meshStandardMaterial color="#ffd700" metalness={0.95} roughness={0.1} />
      </mesh>
      
      {/* Gold Ornamental Ring */}
      <mesh position={[0, 0.25, 0]}>
        <torusGeometry args={[0.92, 0.06, 64, 200]} />
        <meshStandardMaterial color="#ffd700" metalness={0.98} roughness={0.1} />
      </mesh>
      
      {/* Second Ring */}
      <mesh position={[0, -0.4, 0]}>
        <torusGeometry args={[0.88, 0.05, 64, 200]} />
        <meshStandardMaterial color="#d4af37" metalness={0.95} roughness={0.1} />
      </mesh>
      
      {/* Premium Label Area */}
      <mesh position={[0, -0.2, 0.92]}>
        <boxGeometry args={[1.1, 0.7, 0.08]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.5} roughness={0.3} />
      </mesh>
      
      {/* Gold Border on Label */}
      <mesh position={[0, -0.2, 0.97]}>
        <boxGeometry args={[1.05, 0.65, 0.03]} />
        <meshStandardMaterial color="#d4af37" metalness={0.9} />
      </mesh>
      
      {/* Text on Label */}
      <Text
        position={[0, -0.1, 1.01]}
        fontSize={0.12}
        color="#d4af37"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDz8Z1xlFQ.woff"
      >
        ROYAL
      </Text>
      <Text
        position={[0, -0.25, 1.01]}
        fontSize={0.1}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        OUD ATTAR
      </Text>
      
      {/* Hover Effects */}
      {hovered && (
        <>
          {/* Glow Effect */}
          <pointLight position={[0, 0.5, 1]} intensity={1.5} color="#ffaa44" />
          
          {/* Floating Text */}
          <Text
            position={[0, 1.5, 0]}
            fontSize={0.16}
            color="#ffd700"
            anchorX="center"
            outlineWidth={0.02}
            outlineColor="#000000"
          >
            Premium Collection ✨
          </Text>
        </>
      )}
    </group>
  )
}

export default GlassBottle