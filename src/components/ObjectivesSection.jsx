import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Target, TrendingUp, Database, Monitor, ArrowRight } from 'lucide-react';

const ObjectivesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="objectifs" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6 text-gradient-cyan-purple">
            Objectifs du Projet
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            L'objectif de ce projet est de contrôler la position d'un servomoteur à l'aide des déformations 
            mesurées par des jauges de contrainte. Deux modes de fonctionnement ont été mis en place.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="group">
            <div className="card hover:border-cyan-500/40 group-hover:scale-105 transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Mode Manuel</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                L'utilisateur définit directement l'angle du servomoteur via l'interface web. 
                Le système traite les commandes UART et positionne le servo selon l'angle spécifié.
              </p>
              <div className="glass-dark p-4 rounded-lg border border-cyan-400/20">
                <div className="text-cyan-400 font-mono text-sm">
                  0-500g → 180-0° • Format: "1,{`{masse}`}e"
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="group">
            <div className="card hover:border-purple-500/40 group-hover:scale-105 transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Mode Automatique</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                La position du servomoteur s'ajuste automatiquement selon l'effort mesuré par les jauges. 
                Lecture ADC continue avec boucle fermée.
              </p>
              <div className="glass-dark p-4 rounded-lg border border-purple-400/20">
                <div className="text-purple-400 font-mono text-sm">
                  ADC → Masse (S=188.68) → Force → Angle
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { 
              icon: TrendingUp, 
              title: "Graphe Temps Réel", 
              desc: "Visualisation de la tension des jauges avec Chart.js",
              color: "text-green-400"
            },
            { 
              icon: Database, 
              title: "Données Multiples", 
              desc: "Affichage masse, force, déformation en temps réel",
              color: "text-blue-400"
            },
            { 
              icon: Monitor, 
              title: "Modèle 3D", 
              desc: "Représentation Three.js de la déformation de la lame",
              color: "text-purple-400"
            }
          ].map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <div className="card text-center group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500">
                <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="glass p-8 rounded-2xl border border-slate-600/50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Schéma Fonctionnel</h3>
          
          {/* Nouveau schéma SVG basé sur votre image */}
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-6xl">
              <svg viewBox="0 0 1200 200" className="w-full h-auto">
                {/* Définitions des gradients */}
                <defs>
                  <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#dc2626" />
                  </linearGradient>
                  <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </linearGradient>
                  <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                  <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#2563eb" />
                  </linearGradient>
                  <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#7c3aed" />
                  </linearGradient>
                  <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#db2777" />
                  </linearGradient>
                  
                  {/* Flèches */}
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                         refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#06b6d4"/>
                  </marker>
                </defs>

                {/* Boîtes du schéma */}
                {/* 1. Lame + Jauges */}
                <g>
                  <rect x="20" y="60" width="140" height="80" rx="15" fill="url(#redGradient)" />
                  <text x="90" y="85" textAnchor="middle" className="fill-white text-sm font-semibold">
                    🔧
                  </text>
                  <text x="90" y="105" textAnchor="middle" className="fill-white text-xs font-medium">
                    Lame + Jauges
                  </text>
                  <text x="90" y="120" textAnchor="middle" className="fill-white text-xs">
                    350Ω
                  </text>
                </g>

                {/* 2. Pont Wheatstone */}
                <g>
                  <rect x="220" y="60" width="140" height="80" rx="15" fill="url(#orangeGradient)" />
                  <text x="290" y="85" textAnchor="middle" className="fill-white text-sm font-semibold">
                    ⚡
                  </text>
                  <text x="290" y="105" textAnchor="middle" className="fill-white text-xs font-medium">
                    Pont Wheatstone
                  </text>
                  <text x="290" y="120" textAnchor="middle" className="fill-white text-xs">
                    4 jauges
                  </text>
                </g>

                {/* 3. Amplificateur AD623 */}
                <g>
                  <rect x="420" y="60" width="140" height="80" rx="15" fill="url(#greenGradient)" />
                  <text x="490" y="85" textAnchor="middle" className="fill-white text-sm font-semibold">
                    📈
                  </text>
                  <text x="490" y="105" textAnchor="middle" className="fill-white text-xs font-medium">
                    Amplificateur AD623
                  </text>
                  <text x="490" y="120" textAnchor="middle" className="fill-white text-xs">
                    Gain ≈ 213
                  </text>
                </g>

                {/* 4. STM32F411 */}
                <g>
                  <rect x="620" y="60" width="140" height="80" rx="15" fill="url(#blueGradient)" />
                  <text x="690" y="85" textAnchor="middle" className="fill-white text-sm font-semibold">
                    🖥️
                  </text>
                  <text x="690" y="105" textAnchor="middle" className="fill-white text-xs font-medium">
                    STM32F411
                  </text>
                  <text x="690" y="120" textAnchor="middle" className="fill-white text-xs">
                    ADC 12-bit
                  </text>
                </g>

                {/* 5. Servomoteur */}
                <g>
                  <rect x="820" y="60" width="140" height="80" rx="15" fill="url(#purpleGradient)" />
                  <text x="890" y="85" textAnchor="middle" className="fill-white text-sm font-semibold">
                    ⚙️
                  </text>
                  <text x="890" y="105" textAnchor="middle" className="fill-white text-xs font-medium">
                    Servomoteur
                  </text>
                  <text x="890" y="120" textAnchor="middle" className="fill-white text-xs">
                    PWM 50Hz
                  </text>
                </g>

                {/* 6. Interface Web */}
                <g>
                  <rect x="1020" y="60" width="140" height="80" rx="15" fill="url(#pinkGradient)" />
                  <text x="1090" y="85" textAnchor="middle" className="fill-white text-sm font-semibold">
                    🌐
                  </text>
                  <text x="1090" y="105" textAnchor="middle" className="fill-white text-xs font-medium">
                    Interface Web
                  </text>
                  <text x="1090" y="120" textAnchor="middle" className="fill-white text-xs">
                    React.js
                  </text>
                </g>

                {/* Flèches de connexion */}
                <line x1="160" y1="100" x2="220" y2="100" stroke="#06b6d4" strokeWidth="3" markerEnd="url(#arrowhead)" />
                <line x1="360" y1="100" x2="420" y2="100" stroke="#06b6d4" strokeWidth="3" markerEnd="url(#arrowhead)" />
                <line x1="560" y1="100" x2="620" y2="100" stroke="#06b6d4" strokeWidth="3" markerEnd="url(#arrowhead)" />
                <line x1="760" y1="100" x2="820" y2="100" stroke="#06b6d4" strokeWidth="3" markerEnd="url(#arrowhead)" />
                <line x1="960" y1="100" x2="1020" y2="100" stroke="#06b6d4" strokeWidth="3" markerEnd="url(#arrowhead)" />

                {/* Labels des signaux */}
                <text x="190" y="60" textAnchor="middle" className="fill-cyan-400 text-xs font-medium">
                  Déformation
                </text>
                <text x="390" y="60" textAnchor="middle" className="fill-cyan-400 text-xs font-medium">
                  R → Vm
                </text>
                <text x="590" y="60" textAnchor="middle" className="fill-cyan-400 text-xs font-medium">
                  Signal amplifié
                </text>
                <text x="790" y="60" textAnchor="middle" className="fill-cyan-400 text-xs font-medium">
                  PWM
                </text>
                <text x="990" y="60" textAnchor="middle" className="fill-cyan-400 text-xs font-medium">
                  Socket.io
                </text>
              </svg>
            </div>
          </div>

          {/* Description textuelle */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <motion.div 
              className="glass-dark p-4 rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-cyan-400 font-semibold mb-2">🔄 Chaîne Analogique</h4>
              <p className="text-gray-300 text-sm">
                Jauges → Pont → Amplification → Conversion ADC
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-dark p-4 rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-purple-400 font-semibold mb-2">💻 Traitement Numérique</h4>
              <p className="text-gray-300 text-sm">
                STM32 calcule masse, force et génère PWM servo
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-dark p-4 rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-pink-400 font-semibold mb-2">🌐 Interface Utilisateur</h4>
              <p className="text-gray-300 text-sm">
                Visualisation 3D temps réel et contrôle modes
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ObjectivesSection;