import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';

function Model3DScene({ scrollY }) {
  const { scene } = useGLTF('/models/11.glb');
  const modelRef = useRef();

  useFrame((state) => {
    if (modelRef.current) {
      const baseY = -5; 
      modelRef.current.position.y = baseY + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <primitive 
      ref={modelRef} 
      object={scene} 
      position={[4, -2, 4]}
      scale={50}
      rotation={[0.5, -Math.PI / 4, 0]}
    />
  );
}

const Model3D = ({ className = "", scrollY = 0 }) => {

  return (
    <motion.div 
      className={`relative ${className}`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <Canvas
        className="threejs-canvas cursor-grab active:cursor-grabbing"
        camera={{ position: [0, 0, 35], fov: 65 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          color="#ffffff" 
        />
        <pointLight 
          position={[-10, 0, 10]} 
          intensity={0.5} 
          color="#06b6d4" 
        />

        <Environment preset="sunset" />

        <Model3DScene scrollY={scrollY} />

        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          autoRotate={false}
          rotateSpeed={0.5}
          zoomSpeed={0.5}
          minDistance={20}
          maxDistance={70}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none rounded-lg" />
    </motion.div>
  );
};

useGLTF.preload('/models/11.glb');

export default Model3D;