import { useRef, useState, useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

function AttarBottle({ imagePath }) {
  const [hovered, setHovered] = useState(false)
  const [textureLoaded, setTextureLoaded] = useState(false)
  const [error, setError] = useState(false)
  
  let texture = null
  try {
    texture = useLoader(TextureLoader, imagePath)
    if (texture) {
      useEffect(() => {
        setTextureLoaded(true)
      }, [texture])
    }
  } catch (e) {
    console.log("Image load error, using gold color")
  }
  
  return (
    <group
      position={[0, -0.2, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      
      {/* Bottle Body */}
      <mesh position={[0, 0.7, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.85, 0.7, 1.6, 128, 128]} />
        <meshPhysicalMaterial 
          map={texture || null}
          color={!texture ? "#c9a03d" : undefined}
          metalness={0.85}
          roughness={0.2}
          transparent={true}
          opacity={0.92}
          clearcoat={1}
          clearcoatRoughness={0.15}
          reflectivity={0.45}
          emissive="#442200"
          emissiveIntensity={0.08}
        />
      </mesh>
      
      {/* Glass Reflection Layer */}
      <mesh position={[0, 0.7, 0]} scale={1.03}>
        <cylinderGeometry args={[0.88, 0.73, 1.65, 128]} />
        <meshPhysicalMaterial 
          color="#ffffff"
          metalness={0.98}
          roughness={0.05}
          transparent={true}
          opacity={0.12}
          clearcoat={1}
        />
      </mesh>
      
      {/* Liquid Amber Glow Inside */}
      <mesh position={[0, 0.55, 0]}>
        <cylinderGeometry args={[0.78, 0.65, 1.1, 128]} />
        <meshStandardMaterial 
          color="#ff8833"
          emissive="#ff4400"
          emissiveIntensity={0.15}
          transparent={true}
          opacity={0.7}
        />
      </mesh>
      
      {/* Gold Cap */}
      <mesh position={[0, 1.55, 0]} castShadow>
        <cylinderGeometry args={[0.5, 0.56, 0.35, 64]} />
        <meshStandardMaterial 
          color="#d4af37" 
          metalness={0.98} 
          roughness={0.1}
          emissive="#aa7700"
          emissiveIntensity={0.05}
        />
      </mesh>
      
      {/* Cap Top - Crown Design */}
      <mesh position={[0, 1.73, 0]}>
        <sphereGeometry args={[0.26, 48, 48]} />
        <meshStandardMaterial color="#ffd700" metalness={0.96} roughness={0.08} />
      </mesh>
      
      {/* Top Ornamental Ring */}
      <mesh position={[0, 1.3, 0]}>
        <torusGeometry args={[0.88, 0.055, 64, 160]} />
        <meshStandardMaterial color="#ffd700" metalness={0.98} roughness={0.08} />
      </mesh>
      
      {/* Middle Decorative Ring */}
      <mesh position={[0, 0.9, 0]}>
        <torusGeometry args={[0.92, 0.05, 64, 160]} />
        <meshStandardMaterial color="#d4af37" metalness={0.95} roughness={0.1} />
      </mesh>
      
      {/* Bottom Ring */}
      <mesh position={[0, 0.25, 0]}>
        <torusGeometry args={[0.86, 0.045, 64, 160]} />
        <meshStandardMaterial color="#d4af37" metalness={0.95} roughness={0.1} />
      </mesh>
      
      {/* Gold Base */}
      <mesh position={[0, 0.0, 0]}>
        <cylinderGeometry args={[0.94, 0.98, 0.1, 64]} />
        <meshStandardMaterial color="#c9a03d" metalness={0.92} roughness={0.15} />
      </mesh>
      
      {/* Floating Gold Particles */}
      {[...Array(30)].map((_, i) => (
        <mesh 
          key={i}
          position={[
            Math.sin(i * 1.8) * 1.4,
            0.6 + Math.sin(i) * 0.9,
            Math.cos(i * 1.8) * 1.4
          ]}
        >
          <sphereGeometry args={[0.025, 12, 12]} />
          <meshStandardMaterial color="#ffd700" emissive="#ffaa00" emissiveIntensity={0.3} />
        </mesh>
      ))}
      
      {/* Hover Glow */}
      {hovered && (
        <>
          <pointLight position={[0, 1, 1.5]} intensity={1.2} color="#ffaa44" />
          <pointLight position={[0, 0.5, -1]} intensity={0.6} color="#d4af37" />
        </>
      )}
      
    </group>
  )
}

export default AttarBottle