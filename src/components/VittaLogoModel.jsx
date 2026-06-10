import React, { useRef, useMemo } from 'react';
import { useGLTF, Center } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function VittaLogoModel(props) {
  const group = useRef();
  // Load the model exactly as authored
  const { scene } = useGLTF('/vitta-3d-model.glb');

  // Calculate the scale without modifying or cloning the geometry
  const scale = useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z);
    return 3.0 / (maxDim || 1); // Reduced from 3.5 to 3.0
  }, [scene]);

  // Continuous side rotation
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.8;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Center component automatically centers the mesh safely */}
      <Center scale={scale}>
        <primitive object={scene} />
      </Center>
    </group>
  );
}

useGLTF.preload('/vitta-3d-model.glb');
