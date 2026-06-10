import React, { Suspense } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import { VittaLogoModel } from './VittaLogoModel';

function DynamicScaleGroup({ children }) {
  const { size } = useThree();
  // Base scale on 1440px width. Ensure scale doesn't exceed 1.2 on huge screens, and scales down perfectly on mobile.
  const scale = Math.min(1.2, size.width / 1440);
  
  return (
    <group scale={scale}>
      {children}
    </group>
  );
}

export default function HeroScene() {
  return (
    <div 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        pointerEvents: 'none', 
        zIndex: 0 
      }}
    >
      <Canvas 
        gl={{ antialias: true, logarithmicDepthBuffer: true, powerPreference: 'high-performance' }} 
        dpr={[1, 2]}
        camera={{ position: [0, 0, 10], fov: 45, near: 0.1, far: 100 }}
      >
        {/* Dark void background */}
        <color attach="background" args={['#050505']} />
        
        {/* Clean, neutral lighting matching standard native GLTF viewers */}
        <ambientLight intensity={1.2} color="#ffffff" />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        
        <Suspense fallback={null}>
          <DynamicScaleGroup>
            <group position={[0, 0, 0]}>
              <VittaLogoModel />
            </group>
            {/* Neutral studio environment map to enhance any metallic/reflective parts of the original logo */}
            <Environment preset="studio" />
            
            <ContactShadows 
              position={[0, -2.5, 0]} 
              opacity={0.4} 
              scale={15} 
              blur={2} 
              far={4} 
              color="#000000"
            />
          </DynamicScaleGroup>
        </Suspense>
      </Canvas>
    </div>
  );
}
