import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ObjectivesSection from './components/ObjectivesSection';
import VideoSection from './components/VideoSection';
import CircuitSection from './components/CircuitSection';
import ProgrammingSection from './components/ProgrammingSection';
import InterfaceSection from './components/InterfaceSection';
import TeamSection from './components/TeamSection';
import TheorySection from './components/TheorySection';
import ConclusionSection from './components/ConclusionSection';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <AnimatePresence>
        <motion.div 
          className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <motion.div 
              className="w-20 h-20 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full mx-auto mb-8"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                <span className="text-gradient-cyan-purple">Chargement du site</span>
              </h2>
              <p className="text-gray-400 text-lg">Contrôle de Servomoteur par Jauges de Contrainte</p>
              <div className="mt-6 text-cyan-400 text-sm">
                Groupe 4 - ENIB 2025
              </div>
            </motion.div>
            
            <motion.div 
              className="w-64 h-1 bg-slate-700 rounded-full mx-auto mt-8 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div 
                className="h-full bg-gradient-to-r from-cyan-400 to-purple-400"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 1 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <motion.div 
      className="min-h-screen bg-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navbar />
      
      <HeroSection scrollY={scrollY} />
      <ObjectivesSection />
      <VideoSection />
      <TheorySection />
      <CircuitSection />
      <ProgrammingSection />
      <InterfaceSection />
      <ConclusionSection />
      <TeamSection />
      
      <motion.footer 
        className="bg-slate-800 border-t border-slate-700 py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-400 text-lg mb-2">
              © 2025 Groupe 4 - ENIB. Projet Mesure de déformation par jauges.
            </p>
            <p className="text-gray-500 text-sm mb-4">
              Développé avec ❤️ par Ayoub Machkour, Antoine VERMANDER, Benjamin HEYSCH, Soufiane EL MAMSAOUI
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center">
                <span className="text-blue-400 mr-1">🏫</span>
                École Nationale d'Ingénieurs de Brest
              </span>
              <span className="flex items-center">
                <span className="text-green-400 mr-1">📚</span>
                Module IPS 2025
              </span>
              <span className="flex items-center">
                <span className="text-purple-400 mr-1">🚀</span>
                Semestre 7
              </span>
            </div>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  );
}

export default App;