'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense } from 'react';
import * as THREE from 'three';

function CashewObject() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime();
    mesh.current.rotation.y = Math.sin(t * 0.35) * 0.15;
    mesh.current.rotation.x = Math.cos(t * 0.25) * 0.04;
  });

  return (
    <mesh ref={mesh}>
      {/* Placeholder geometry - replace with optimized GLB cashew model */}
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#E7D2AA"
        roughness={0.65}
        metalness={0.02}
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4], fov: 32 }}
      frameloop="always"
      className="absolute inset-0 z-0"
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 3, 4]} intensity={1.5} />
      <pointLight position={[-2, -2, -2]} intensity={0.5} color="#C49A52" />
      <Suspense fallback={null}>
        <CashewObject />
      </Suspense>
    </Canvas>
  );
}
