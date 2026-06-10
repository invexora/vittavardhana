/**
 * HeroModel — Full-screen 3D GLB model for the hero section.
 * Renders the premium 'Hitem3d-1781019462217.glb' model with 
 * gold metallic material, auto-rotation, mouse-following, floating particles, 
 * glow ring, and cinematic lighting. Inspired by vanquish.so's layout.
 */
import { Suspense, useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

/* ───────────── Animated 3D Mesh ───────────── */
function ModelMesh({ mouse }) {
  const { scene } = useGLTF('/Hitem3d-1781019462217.glb');
  const groupRef = useRef();

  // Clone the scene to avoid shared-state issues
  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);
    // Apply premium metallic gold material
    clone.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color('#c5a880'), // Premium Vittavardhana Gold Accent
          metalness: 0.9,
          roughness: 0.15,
          envMapIntensity: 2.0,
          emissive: new THREE.Color('#2b1d0a'),
          emissiveIntensity: 0.1,
        });
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    return clone;
  }, [scene]);

  // Calculate bounding box to normalize model size
  const { center, scale } = useMemo(() => {
    const box = new THREE.Box3().setFromObject(clonedScene);
    const size = new THREE.Vector3();
    const c = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(c);
    const maxDim = Math.max(size.x, size.y, size.z);
    
    // Scale fitting: ~3.8 units to sit nicely behind the hero text
    const s = 3.8 / (maxDim || 1);
    return { center: c, scale: s };
  }, [clonedScene]);

  // Smooth rotation driven by mouse + auto-rotate
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    
    // Auto-rotation (slow, elegant)
    groupRef.current.rotation.y = t * 0.12 + mouse.current.x * 0.25;
    groupRef.current.rotation.x = Math.sin(t * 0.05) * 0.05 + mouse.current.y * 0.12;
    
    // Subtle breathing scale
    const breathe = 1 + Math.sin(t * 0.5) * 0.008;
    groupRef.current.scale.setScalar(scale * breathe);
  });

  return (
    <group ref={groupRef} position={[0, 0.1, 0]}>
      <primitive
        object={clonedScene}
        position={[-center.x * scale, -center.y * scale, -center.z * scale]}
      />
    </group>
  );
}

/* ───────────── Atmospheric Particles ───────────── */
function Particles({ count = 60 }) {
  const points = useRef();
  
  const particleData = useMemo(() => {
    // Pure seeded pseudo-random helper to satisfy react-hooks/purity
    let seed = 1;
    const rnd = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (rnd() - 0.5) * 14;
      positions[i * 3 + 1] = (rnd() - 0.5) * 10;
      positions[i * 3 + 2] = (rnd() - 0.5) * 8;
      speeds[i] = 0.0015 + rnd() * 0.004;
    }
    return { positions, speeds };
  }, [count]);

  useFrame(() => {
    if (!points.current) return;
    const pos = points.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += particleData.speeds[i];
      if (pos[i * 3 + 1] > 5) pos[i * 3 + 1] = -5;
    }
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particleData.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.022}
        color="#c5a880"
        transparent
        opacity={0.3}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* ───────────── Radial Glow Ring ───────────── */
function GlowRing() {
  const ringRef = useRef();
  
  useFrame((state) => {
    if (!ringRef.current) return;
    const t = state.clock.elapsedTime;
    ringRef.current.rotation.z = t * 0.08;
    ringRef.current.material.opacity = 0.05 + Math.sin(t * 0.3) * 0.015;
  });

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]} position={[0, -0.4, 0]}>
      <ringGeometry args={[3.2, 4.8, 64]} />
      <meshBasicMaterial
        color="#d32f2f" // Crimson glow matching prime color accent
        transparent
        opacity={0.05}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

/* ───────────── Scene Setup ───────────── */
function Scene({ mouse }) {
  return (
    <>
      {/* Lighting — dramatic studio setup */}
      <ambientLight intensity={0.25} color="#ffe8cc" />
      <directionalLight
        position={[6, 9, 6]}
        intensity={2.0}
        color="#ffeedb"
        castShadow
      />
      <directionalLight
        position={[-6, 4, -4]}
        intensity={0.7}
        color="#d32f2f" // Crimson side-fill light for contrast
      />
      <pointLight position={[0, -4, 4]} intensity={0.6} color="#c5a880" />
      
      {/* Dynamic 3D model mesh */}
      <Float
        speed={1.2}
        rotationIntensity={0.12}
        floatIntensity={0.25}
        floatingRange={[-0.08, 0.08]}
      >
        <ModelMesh mouse={mouse} />
      </Float>

      {/* Atmospheric backgrounds */}
      <Particles />
      <GlowRing />

      {/* Environment map for realistic metallic reflections */}
      <Environment preset="city" environmentIntensity={0.6} />
      
      {/* Contact shadow below the model */}
      <ContactShadows
        position={[0, -2.4, 0]}
        opacity={0.22}
        scale={10}
        blur={2.2}
        far={3.5}
        color="#140505"
      />
    </>
  );
}

/* ───────────── Main Component Export ───────────── */
export default function HeroModel() {
  const mouse = useRef({ x: 0, y: 0 });
  const containerRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse coordinates to -1..1 range
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="hero-3d-container">
      <Canvas
        camera={{ position: [0, 0, 8.5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.4,
        }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene mouse={mouse} />
        </Suspense>
      </Canvas>

      {/* Radial vignette overlay for high-end depth and focus */}
      <div className="hero-3d-vignette" />
    </div>
  );
}

// Preload the GLB model for instant loading across screens
useGLTF.preload('/Hitem3d-1781019462217.glb');
