import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Text, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

const CoffeeBean = ({ position, rotation, scale }) => {
  const mesh = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = rotation[0] + Math.sin(t * 0.5) * 0.2;
    mesh.current.rotation.y = rotation[1] + Math.cos(t * 0.3) * 0.2;
  });

  return (
    <mesh position={position} rotation={rotation} scale={scale} ref={mesh}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="#2B1B12" roughness={0.3} metalness={0.2} />
    </mesh>
  );
};

const Particles = () => {
  const count = 100;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#D4A373" transparent opacity={0.4} />
    </points>
  );
};

const Hero3D = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-espresso">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#D4A373" />
          <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={0.5} />
          
          <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <CoffeeBean position={[-4, 2, 0]} rotation={[0.5, 0.5, 0]} scale={0.3} />
            <CoffeeBean position={[5, -3, 2]} rotation={[1, 0.2, 0.5]} scale={0.4} />
            <CoffeeBean position={[3, 4, -2]} rotation={[0.2, 1, 0.8]} scale={0.2} />
            <CoffeeBean position={[-6, -4, 1]} rotation={[0.8, 0.8, 0.2]} scale={0.35} />
          </Float>

          <Particles />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-amber-gold uppercase tracking-[0.3em] text-sm font-semibold mb-6 block"
          >
            Specialty Coffee House
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight">
            Where Coffee <br />
            <span className="italic text-amber-gold">Meets Culture</span>
          </h1>
          
          <p className="text-body text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Handcrafted specialty coffee, curated bites, and unforgettable ambience. 
            Experience the art of brewing in the heart of the city.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-amber-gold text-espresso font-bold rounded-full flex items-center gap-3 group transition-all hover:shadow-[0_0_30px_rgba(212,163,115,0.4)]"
            >
              Explore Menu
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="tel:9339577835"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 glass text-headline font-bold rounded-full flex items-center gap-3 hover:bg-white/10 transition-all"
            >
              <Phone size={20} />
              Call Café
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-body/50">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-amber-gold to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero3D;
