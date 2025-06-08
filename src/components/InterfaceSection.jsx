import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Code, Database, Camera, X, Settings, Target } from 'lucide-react';

const IHMPreview = () => {
  const [activeMode, setActiveMode] = useState('manual');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);
  
  const ihmModes = {
    manual: {
      title: "Mode Manuel",
      description: "Contrôle direct du servomoteur via curseur de masse",
      image: "/images/ihm-manual.png",
      features: ["Curseur masse 0-500g", "Commandes UART", "Visualisation 3D temps réel"]
    },
    automatic: {
      title: "Mode Automatique", 
      description: "Balance automatique avec détection de poids",
      image: "/images/ihm-auto.png", 
      features: ["Détection automatique", "Affichage poids prédéfinis", "Flexion lame en temps réel"]
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-center space-x-4">
        {Object.entries(ihmModes).map(([mode, data]) => (
          <motion.button
            key={mode}
            onClick={() => setActiveMode(mode)}
            className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeMode === mode
                ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg'
                : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {mode === 'manual' ? <Settings className="w-4 h-4 mr-2" /> : <Target className="w-4 h-4 mr-2" />}
            {data.title}
          </motion.button>
        ))}
      </div>

      <motion.div 
        className="relative"
        key={activeMode}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="aspect-video bg-slate-900 rounded-lg border border-slate-600/50 overflow-hidden relative group cursor-pointer"
             onClick={() => setIsModalOpen(true)}>
          <img 
            src={ihmModes[activeMode].image} 
            alt={ihmModes[activeMode].title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center" style={{display: 'none'}}>
            <div className="text-center">
              <div className="text-6xl mb-4">
                {activeMode === 'manual' ? '🎮' : '⚖️'}
              </div>
              <p className="text-xl font-semibold text-white mb-2">{ihmModes[activeMode].title}</p>
              <p className="text-gray-400 mb-4">{ihmModes[activeMode].description}</p>
              <div className="text-red-400 text-sm font-medium">
                ❌ Image non trouvée: {ihmModes[activeMode].image}
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium">
              🔍 Agrandir l'image
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
          {ihmModes[activeMode].features.map((feature, index) => (
            <motion.div 
              key={index}
              className="glass-dark p-3 rounded-lg text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <p className="text-gray-300 text-sm">{feature}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {isModalOpen && createPortal(
        <AnimatePresence>
          <motion.div 
            className="fixed top-0 left-0 w-screen h-screen bg-black z-[9999] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              margin: 0,
              padding: 0,
              zIndex: 9999
            }}
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 bg-black/70 hover:bg-red-600 rounded-full transition-colors z-[10000] group"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 z-[10000]">
              <div className="flex items-center space-x-2">
                {activeMode === 'manual' ? <Settings className="w-4 h-4 text-orange-400" /> : <Target className="w-4 h-4 text-orange-400" />}
                <span className="text-white font-semibold text-sm">{ihmModes[activeMode].title}</span>
              </div>
              <p className="text-gray-300 text-xs">{ihmModes[activeMode].description}</p>
            </div>

            <motion.img 
              src={ihmModes[activeMode].image} 
              alt={ihmModes[activeMode].title}
              className="w-screen h-screen object-contain"
              style={{
                width: '100vw',
                height: '100vh',
                maxWidth: 'none',
                maxHeight: 'none',
                position: 'absolute',
                top: 0,
                left: 0
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                e.target.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.className = 'w-screen h-screen flex items-center justify-center absolute top-0 left-0';
                fallback.innerHTML = `
                  <div class="text-center">
                    <div class="text-8xl mb-6">${activeMode === 'manual' ? '🎮' : '⚖️'}</div>
                    <p class="text-2xl font-semibold text-white mb-4">${ihmModes[activeMode].title}</p>
                    <p class="text-gray-400 text-lg mb-6">${ihmModes[activeMode].description}</p>
                    <div class="bg-red-500/20 text-red-400 px-6 py-3 rounded-lg border border-red-500/30 inline-block">
                      ❌ Image non trouvée: ${ihmModes[activeMode].image}
                    </div>
                  </div>
                `;
                e.target.parentNode.appendChild(fallback);
              }}
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1 z-[10000]">
              <p className="text-gray-300 text-xs text-center">
                Cliquez n'importe où pour fermer • Échap pour quitter
              </p>
            </div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

const InterfaceSection = () => {
  return (
    <section id="interface" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6 text-gradient-purple-pink">
            Interface Web Interactive
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Interface React.js avec Three.js pour visualisation 3D temps réel et communication Socket.io
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card border-pink-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Monitor className="w-6 h-6 text-pink-400 mr-3" />
                Fonctionnalités Principales
              </h3>
              <div className="space-y-4">
                {[
                  "🎮 Contrôle manuel/automatique du servomoteur",
                  "🎲 Visualisation 3D avec modèle GLB personnalisé",
                  "📊 Graphiques temps réel (Chart.js)",
                  "📡 Radar servo avec animation fluide",
                  "💾 Export des données JSON/CSV",
                  "🌐 Interface responsive et moderne"
                ].map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center text-gray-300 group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                    {feature}
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              className="card border-cyan-500/20"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Code className="w-6 h-6 text-cyan-400 mr-3" />
                Stack Technologique
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "React.js", desc: "Framework frontend", icon: "⚛️" },
                  { name: "Three.js", desc: "Rendu 3D WebGL", icon: "🎲" },
                  { name: "Socket.io", desc: "Communication temps réel", icon: "🔌" },
                  { name: "Chart.js", desc: "Graphiques dynamiques", icon: "📊" },
                  { name: "Tailwind CSS", desc: "Styles modernes", icon: "🎨" },
                  { name: "Node.js", desc: "Serveur backend", icon: "🟢" }
                ].map((tech, index) => (
                  <motion.div 
                    key={index} 
                    className="glass-dark p-3 rounded-lg hover:bg-slate-900/70 transition-colors group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-lg group-hover:scale-125 transition-transform">{tech.icon}</span>
                      <h4 className="text-cyan-400 font-semibold">{tech.name}</h4>
                    </div>
                    <p className="text-gray-400 text-sm">{tech.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card">
              <h3 className="text-2xl font-bold text-white mb-6">Communication STM32</h3>
              <div className="space-y-6">
                <div className="glass-dark p-4 rounded-lg border-l-4 border-green-400">
                  <h4 className="text-green-400 font-semibold mb-2">📊 Données Reçues</h4>
                  <div className="font-mono text-sm text-gray-300 space-y-1">
                    <p>V:2150    <span className="text-gray-500">{/* Tension 2.150V */}</span></p>
                    <p>M:405     <span className="text-gray-500">{/* Masse 405g */}</span></p>
                    <p>F:3970    <span className="text-gray-500">{/* Force 3.970N */}</span></p>
                    <p>A:145     <span className="text-gray-500">{/* Angle 145° */}</span></p>
                  </div>
                </div>
                
                <div className="glass-dark p-4 rounded-lg border-l-4 border-blue-400">
                  <h4 className="text-blue-400 font-semibold mb-2">📤 Commandes Envoyées</h4>
                  <div className="font-mono text-sm text-gray-300 space-y-1">
                    <p>"1,250e"   <span className="text-gray-500">{/* Mode manuel 250g */}</span></p>
                    <p>"2,1e"     <span className="text-gray-500">{/* Activer mode auto */}</span></p>
                    <p>"2,0e"     <span className="text-gray-500">{/* Désactiver mode auto */}</span></p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              className="card border-orange-500/20"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Camera className="w-6 h-6 text-orange-400 mr-3" />
                Interface Utilisateur - IHM
              </h3>
              
              <IHMPreview />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InterfaceSection;