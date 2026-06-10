import { useState, useEffect, Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';

/* ───────────── Preloader 3D Mesh ───────────── */
function PreloaderMesh() {
  const { scene } = useGLTF('/Hitem3d-1781019462217.glb');
  const meshRef = useRef();

  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color('#c5a880'), // Gold
          metalness: 0.9,
          roughness: 0.15,
          envMapIntensity: 1.8,
          emissive: new THREE.Color('#221608'),
          emissiveIntensity: 0.08,
        });
      }
    });
    return clone;
  }, [scene]);

  const { center, scale } = useMemo(() => {
    const box = new THREE.Box3().setFromObject(clonedScene);
    const size = new THREE.Vector3();
    const c = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(c);
    const maxDim = Math.max(size.x, size.y, size.z);
    
    // Scale slightly smaller in preloader for focus
    const s = 3.2 / (maxDim || 1);
    return { center: c, scale: s };
  }, [clonedScene]);

  // Fast auto-rotation for the preloading screen excitement
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.y = t * 0.4;
    meshRef.current.rotation.x = Math.sin(t * 0.15) * 0.08;
    
    // Smooth pulse
    const pulse = 1 + Math.sin(t * 1.5) * 0.012;
    meshRef.current.scale.setScalar(scale * pulse);
  });

  return (
    <group ref={meshRef}>
      <primitive
        object={clonedScene}
        position={[-center.x * scale, -center.y * scale, -center.z * scale]}
      />
    </group>
  );
}

/* ───────────── Main Preloader Component ───────────── */
const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(() => {
    return !sessionStorage.getItem('vv-preloader-shown');
  });
  const fadeOutRef = useRef(false);

  useEffect(() => {
    // Check if already shown this session
    if (!visible) {
      onComplete?.();
      return;
    }

    const start = Date.now();
    const duration = 1600; // 1.6s duration matching vanquish.so counter

    const tick = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(elapsed / duration, 1);
      // Ease out exponential curve
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setProgress(Math.floor(eased * 100));

      if (p < 1) {
        requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem('vv-preloader-shown', '1');
        fadeOutRef.current = true;
        setTimeout(() => {
          setVisible(false);
          onComplete?.();
        }, 500); // Allow fade-out animation to complete
      }
    };

    requestAnimationFrame(tick);
  }, [onComplete, visible]);

  if (!visible) return null;

  return (
    <div
      className="preloader"
      style={{
        opacity: progress >= 100 ? 0 : 1,
        transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: progress >= 100 ? 'none' : 'auto',
      }}
    >
      {/* 3D Model Background */}
      <div className="preloader-3d-background">
        <Canvas
          camera={{ position: [0, 0, 7], fov: 42 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.2,
          }}
          style={{ background: 'transparent', width: '100%', height: '100%' }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.3} color="#ffe8cc" />
            <directionalLight position={[5, 8, 5]} intensity={1.8} color="#ffeedb" />
            <directionalLight position={[-5, 3, -3]} intensity={0.5} color="#d32f2f" />
            <PreloaderMesh />
            <Environment preset="city" environmentIntensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Floating Centered Counter Overlay */}
      <div className="preloader-content">
        <div className="preloader-counter">{progress}%</div>
        <div className="preloader-title">VITTAVARDHANA</div>
        <div className="preloader-bar">
          <div className="preloader-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
};

export default Preloader;

// Preload model
useGLTF.preload('/Hitem3d-1781019462217.glb');
