import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, FileText, Camera, Users, MousePointer2 } from 'lucide-react';
import Model3D from './Model3D';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(cyan 1px, transparent 1px),
            linear-gradient(90deg, cyan 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-6 pt-24">
        
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div>
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gradient-cyan-purple block">
                Contrôle de
              </span>
              <span className="text-gradient-cyan-purple block">
                Servomoteur
              </span>
              <span className="text-white text-3xl lg:text-4xl block mt-2">
                par Jauges de Contrainte
              </span>
            </motion.h1>
          </div>

          <motion.p 
            className="text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Système innovant combinant{' '}
            <span className="text-cyan-400 font-semibold">électronique analogique</span>,{' '}
            <span className="text-purple-400 font-semibold">programmation embarquée</span> et{' '}
            <span className="text-pink-400 font-semibold">interface web moderne</span>
          </motion.p>

          <motion.div 
            className="flex space-x-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { number: "4", label: "Jauges", icon: "⚡", color: "text-yellow-400" },
              { number: "12", label: "Bits ADC", icon: "📊", color: "text-green-400" },
              { number: "188.68", label: "V/kg", icon: "🎯", color: "text-blue-400" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="glass p-3 rounded-xl mb-2 hover:scale-105 transition-transform">
                  <div className="text-xl mb-1">{stat.icon}</div>
                  <div className={`text-xl font-bold ${stat.color}`}>{stat.number}</div>
                </div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a 
              href="#objectifs" 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-5 h-5" />
              Découvrir le Projet
            </motion.a>
            <motion.a 
              href="#interface" 
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Camera className="w-5 h-5" />
              Voir la Démo
            </motion.a>
          </motion.div>

          <motion.div 
            className="inline-flex items-center space-x-4 glass rounded-full px-6 py-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Users className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 font-semibold">Groupe 4</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-300">Ayoub • Antoine • Benjamin • Soufiane</span>
          </motion.div>
        </motion.div>

        <motion.div 
          className="h-full flex items-center justify-center relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="w-full h-[500px] lg:h-[600px] relative">
            <Model3D scrollY={scrollY} className="w-full h-full" />
            
            <motion.div 
              className="absolute top-4 left-4 glass px-3 py-2 rounded-lg flex items-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <MousePointer2 className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm">Cliquez & glissez</span>
            </motion.div>

            <motion.div 
              className="absolute bottom-4 right-4 glass p-3 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              <div className="flex items-center space-x-2">
                <div className="text-xl">🎲</div>
                <div>
                  <div className="text-cyan-400 text-sm font-semibold">Assemblage 3D</div>
                  <div className="text-gray-300 text-xs">ENIB Groupe 4</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="flex flex-col items-center text-cyan-400 cursor-pointer">
          <span className="text-sm mb-2">Découvrir</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;