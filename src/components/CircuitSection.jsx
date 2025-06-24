import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Settings, Gauge, ArrowRight, Activity, Cpu, Monitor, Camera, Calculator, CheckCircle, AlertTriangle, BarChart3 } from 'lucide-react';

const CircuitSection = () => {
  const [activeView, setActiveView] = useState('overview');

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
    <section id="circuit" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Circuit Électronique
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Conception d'un circuit de conditionnement pour jauges de contrainte avec pont de Wheatstone 
            et amplificateur d'instrumentation AD623
          </p>
        </motion.div>

        {/* Navigation des vues - 7 onglets */}
        <motion.div 
          className="flex flex-wrap justify-center mb-12 gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { id: 'overview', label: 'Vue d\'ensemble', icon: Settings },
            { id: 'choix-ampli', label: 'Choix Amplificateur', icon: Calculator },
            { id: 'simulation-ltspice', label: 'Simulation LTSpice', icon: Activity },
            { id: 'comparaison-jauges', label: 'Comparaison Jauges', icon: BarChart3 },
            { id: 'mise-a-zero', label: 'Mise à Zéro', icon: Settings },
            { id: 'pcb', label: 'CAO Électronique', icon: Cpu },
            { id: 'schema', label: 'Schéma Électronique', icon: Monitor }
          ].map((view) => (
            <motion.button
              key={view.id}
              onClick={() => setActiveView(view.id)}
              className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeView === view.id
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <view.icon className="w-5 h-5 mr-2" />
              {view.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="card"
          key={activeView}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
{activeView === 'overview' && (
            <>
              <motion.div 
                className="grid lg:grid-cols-2 gap-12 mb-16"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={itemVariants} className="space-y-8">
                  <div className="card border-yellow-500/20">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <Gauge className="w-6 h-6 text-yellow-400 mr-3" />
                      Jauges de Contrainte
                    </h3>
                    <div className="space-y-4">
                      <div className="glass-dark p-4 rounded-lg">
                        <h4 className="text-yellow-400 font-semibold mb-2">Spécifications</h4>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>• Résistance nominale: 350Ω</li>
                          <li>• Facteur de jauge (GF): 2.1</li>
                          <li>• Sensibilité: ~2mV/V</li>
                          <li>• Configuration: Pont complet</li>
                        </ul>
                      </div>
                      <div className="glass-dark p-4 rounded-lg">
                        <h4 className="text-orange-400 font-semibold mb-2">Installation</h4>
                        <p className="text-gray-300 text-sm">
                          Quatre jauges collées sur la lame métallique pour mesurer la déformation 
                          en flexion. Configuration en pont de Wheatstone pour maximiser la sensibilité.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card border-orange-500/20">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <Zap className="w-6 h-6 text-orange-400 mr-3" />
                      Format: "1,{`{masse}`}e"
                    </h3>
                    <div className="space-y-4">
                      <p className="text-gray-300">
                        Le système utilise des commandes UART pour contrôler le servomoteur en mode manuel.
                      </p>
                      <div className="glass-dark p-4 rounded-lg border-l-4 border-orange-400">
                        <div className="font-mono text-sm text-gray-300">
                          <p>Commande Manuel: "1,250e"</p>
                          <p className="text-orange-400">{/* Positionne le servo pour 250g */}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* NOUVEAU: Calculs Électroniques déplacé ici */}
                  <div className="card border-cyan-500/20">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
                      <Calculator className="w-6 h-6 text-cyan-400 mr-3" />
                      Calculs Électroniques
                    </h3>
                    <div className="space-y-4">
                      <div className="glass-dark p-4 rounded-lg">
                        <h4 className="text-cyan-400 font-semibold mb-2">Formules</h4>
                        <div className="space-y-3 text-sm font-mono">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Gain AD623:</span>
                            <span className="text-cyan-400">G = 1 + (100kΩ / Rg)</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Sensibilité:</span>
                            <span className="text-green-400">S = 188.68 V/kg</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Conversion ADC:</span>
                            <span className="text-purple-400">Vout = (ADC × 3.3V) / 4095</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-8">
                  <div className="card border-green-500/20">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <Settings className="w-6 h-6 text-green-400 mr-3" />
                      Amplificateur AD623
                    </h3>
                    <div className="space-y-4">
                      <div className="glass-dark p-4 rounded-lg">
                        <h4 className="text-green-400 font-semibold mb-2">Caractéristiques</h4>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>• Gain programmable: 1 à 1000</li>
                          <li>• Haute précision: ±0.25%</li>
                          <li>• Faible dérive: 25ppm/°C</li>
                          <li>• Alimentation: ±15V ou +5V</li>
                        </ul>
                      </div>
                      <div className="glass-dark p-4 rounded-lg">
                        <h4 className="text-blue-400 font-semibold mb-2">Configuration</h4>
                        <p className="text-gray-300 text-sm">
                          Gain ajusté pour optimiser la dynamique de sortie 0-3.3V compatible STM32. 
                          Résistance de gain calculée selon Rg = 100kΩ/(G-1).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card border-blue-500/20">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <Activity className="w-6 h-6 text-blue-400 mr-3" />
                      Interface STM32
                    </h3>
                    <div className="space-y-4">
                      <div className="glass-dark p-4 rounded-lg">
                        <h4 className="text-blue-400 font-semibold mb-2">Connexions</h4>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>• ADC1_IN0 (PA0): Signal amplifié</li>
                          <li>• TIM2_CH2 (PA1): PWM Servo</li>
                          <li>• UART2 (PA2/PA3): Communication</li>
                          <li>• GPIO PA5: LED témoin</li>
                        </ul>
                      </div>
                      <div className="glass-dark p-4 rounded-lg">
                        <h4 className="text-purple-400 font-semibold mb-2">Traitement</h4>
                        <p className="text-gray-300 text-sm">
                          ADC 12-bits avec moyennage sur 16 échantillons. 
                          Conversion en masse via sensibilité calibrée S = 188.68.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}

          {activeView === 'choix-ampli' && (
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Choix et Dimensionnement de l'Amplificateur</h3>
              
              <motion.div 
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-purple-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold text-purple-400 mb-6">Critères de Choix de l'Amplificateur</h4>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Avant de pouvoir le dimensionner, il nous fallait déterminer quel type d'amplificateur nous 
                  avions besoin. Il devait répondre aux critères suivants :
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="glass-dark p-4 rounded-lg border-l-4 border-purple-400">
                      <h5 className="text-purple-400 font-semibold mb-3">📋 Exigences Techniques</h5>
                      <div className="space-y-3">
                        {[
                          "Amplification de très petites tensions (mV)",
                          "Grande précision pour détecter les tensions faibles",
                          "Bonne immunité au bruit",
                          "Excellente stabilité face aux perturbations"
                        ].map((critere, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{critere}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="glass-dark p-4 rounded-lg border-l-4 border-green-400">
                      <h5 className="text-green-400 font-semibold mb-3">✅ Solution Retenue</h5>
                      <div className="space-y-3">
                        <p className="text-gray-300 text-sm">
                          Après considération, l'<strong className="text-green-400">amplificateur d'instrumentation</strong> 
                          nous semblait le choix le plus judicieux car capable de remplir tous les critères précédents.
                        </p>
                        <div className="bg-green-900/30 p-3 rounded-lg border border-green-500/30">
                          <p className="text-green-400 font-semibold text-center">
                            🎯 AD623 - Amplificateur d'Instrumentation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-blue-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold text-blue-400 mb-6">Outil de Dimensionnement - Diamond Plot</h4>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Pour bien dimensionner l'amplificateur, nous avons utilisé un outil capable de nous aider : 
                  <strong className="text-blue-400"> Le diagramme en losange (Diamond plot tool)</strong>
                </p>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="glass-dark p-6 rounded-lg">
                      <h5 className="text-blue-400 font-semibold mb-4 flex items-center">
                        <Calculator className="w-5 h-5 mr-2" />
                        Diamond Plot Tool - Analog Devices
                      </h5>
                      <div className="space-y-3 text-gray-300 text-sm">
                        <p>
                          Celui que nous avons utilisé est celui fourni par <strong>Analog Devices</strong> 
                          et nous a permis de déterminer plus facilement :
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li>• Le gain optimal</li>
                          <li>• La tension d'alimentation</li>
                          <li>• La résistance de gain</li>
                          <li>• Les performances attendues</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="glass-dark p-6 rounded-lg border border-green-500/20">
                      <h5 className="text-green-400 font-semibold mb-4">🎯 Résultats du Dimensionnement</h5>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Résistance de gain:</span>
                          <span className="text-green-400 font-mono font-bold">470Ω</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Tension d'alimentation:</span>
                          <span className="text-green-400 font-mono font-bold">±6V</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Gain calculé:</span>
                          <span className="text-green-400 font-mono font-bold">G ≈ 213</span>
                        </div>
                        <div className="bg-green-900/30 p-3 rounded border border-green-500/30 mt-4">
                          <p className="text-green-400 text-xs text-center">
                            ✅ Grâce à cet outil, optimisation complète des performances
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h5 className="text-blue-400 font-semibold mb-4 text-center">📊 Diamond Plot Tool - Interface Analog Devices</h5>
                  <div className="flex justify-center">
                    <div className="relative max-w-5xl w-full">
                      <img 
                        src="/images/diamond-plot.png" 
                        alt="Diamond Plot Tool - AD623 Configuration"
                        className="w-full h-auto border border-blue-500/30 rounded-lg bg-slate-900"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full aspect-video bg-slate-900 rounded-lg border border-blue-500/30 hidden items-center justify-center relative overflow-hidden">
                        <div className="text-center">
                          <div className="text-6xl mb-4">📊</div>
                          <p className="text-blue-400 text-xl font-semibold mb-2">Diamond Plot Tool</p>
                          <p className="text-gray-400 mb-4">Configuration AD623 avec diagramme en losange</p>
                          <div className="text-red-400 text-sm font-medium">
                            ❌ Image non trouvée: /images/diamond-plot.png
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-gray-400 text-sm">
                      Configuration: AD623 Single Supply Rail-to-Rail, Gain 200, ±6V, Signal différentiel 0-25mV
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {activeView === 'simulation-ltspice' && (
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Simulation LTSpice du Circuit</h3>
              
              <motion.div 
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-teal-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold text-teal-400 mb-6">Simulation Circuit - LTSpice</h4>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="glass-dark p-6 rounded-lg">
                      <h5 className="text-teal-400 font-semibold mb-4">🔬 Paramètres de Simulation</h5>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Alimentation:</span>
                          <span className="text-teal-400 font-mono">3.3V</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Résistances jauges:</span>
                          <span className="text-teal-400 font-mono">~350Ω</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Simulation transitoire:</span>
                          <span className="text-teal-400 font-mono">5ms</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Paramètre R:</span>
                          <span className="text-teal-400 font-mono">100k, C=0.49</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="glass-dark p-6 rounded-lg">
                      <h5 className="text-green-400 font-semibold mb-4">📈 Résultats Simulation</h5>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Signal mesuré:</span>
                          <span className="text-green-400 font-mono">V(N002,N003)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Amplitude:</span>
                          <span className="text-green-400 font-mono">-2.4mV à -0.2mV</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Stabilité:</span>
                          <span className="text-green-400 font-bold">Excellente</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Réponse:</span>
                          <span className="text-green-400 font-bold">Linéaire</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h5 className="text-teal-400 font-semibold mb-4 text-center">⚡ Simulation LTSpice - Pont de Wheatstone</h5>
                  <div className="flex justify-center">
                    <div className="relative max-w-5xl w-full">
                      <img 
                        src="/images/ltspice-simulation.png" 
                        alt="Simulation LTSpice - Pont de Wheatstone"
                        className="w-full h-auto border border-teal-500/30 rounded-lg bg-slate-900"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full aspect-video bg-slate-900 rounded-lg border border-teal-500/30 hidden items-center justify-center relative overflow-hidden">
                        <div className="text-center">
                          <div className="text-6xl mb-4">⚡</div>
                          <p className="text-teal-400 text-xl font-semibold mb-2">Simulation LTSpice</p>
                          <p className="text-gray-400 mb-4">Pont de Wheatstone avec analyse transitoire</p>
                          <div className="text-red-400 text-sm font-medium">
                            ❌ Image non trouvée: /images/ltspice-simulation.png
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-gray-400 text-sm">
                      Validation du comportement du pont avec résistances variables R1-R4 (349.8-360.8Ω)
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {activeView === 'comparaison-jauges' && (
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Comparaison des Configurations de Jauges</h3>
              
              <motion.div 
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-purple-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Analyse comparative du comportement selon le nombre de jauges utilisées dans le pont de Wheatstone.
                  L'étude montre l'impact direct sur la sensibilité et la linéarité du système.
                </p>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="glass-dark p-6 rounded-lg">
                      <h5 className="text-purple-400 font-semibold mb-4">📊 Configurations Testées</h5>
                      <div className="space-y-4">
                        <div className="bg-blue-900/30 p-3 rounded border border-blue-500/30">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-blue-400 font-semibold">1 Jauge Active</span>
                            <span className="text-blue-400 font-mono text-sm">Vm max: 0.69mV</span>
                          </div>
                          <p className="text-gray-300 text-xs">Configuration de base, sensibilité limitée</p>
                        </div>
                        
                        <div className="bg-orange-900/30 p-3 rounded border border-orange-500/30">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-orange-400 font-semibold">2 Jauges Actives</span>
                            <span className="text-orange-400 font-mono text-sm">Vm max: 1.34mV</span>
                          </div>
                          <p className="text-gray-300 text-xs">Configuration demi-pont, sensibilité doublée</p>
                        </div>
                        
                        <div className="bg-green-900/30 p-3 rounded border border-green-500/30">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-green-400 font-semibold">4 Jauges Actives</span>
                            <span className="text-green-400 font-mono text-sm">Vm max: 3.9mV</span>
                          </div>
                          <p className="text-gray-300 text-xs">Configuration pont complet, sensibilité maximale</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="glass-dark p-6 rounded-lg">
                      <h5 className="text-green-400 font-semibold mb-4">🎯 Analyse des Performances</h5>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Gain en sensibilité (2 vs 1):</span>
                          <span className="text-orange-400 font-bold">×1.94</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Gain en sensibilité (4 vs 1):</span>
                          <span className="text-green-400 font-bold">×5.65</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Linéarité:</span>
                          <span className="text-green-400 font-bold">Excellente (4 jauges)</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Immunité aux parasites:</span>
                          <span className="text-green-400 font-bold">Maximale (4 jauges)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h5 className="text-purple-400 font-semibold mb-4 text-center">📈 Diagramme Comparatif - Vm vs Masse</h5>
                  <div className="bg-slate-900 p-6 rounded-lg border border-purple-500/30">
                    <div className="relative h-80 overflow-hidden">
                      <div className="absolute left-0 top-0 h-full w-12 flex flex-col justify-between items-end pr-2 text-xs text-gray-400">
                        <span>6.0</span>
                        <span>5.0</span>
                        <span>4.0</span>
                        <span>3.0</span>
                        <span>2.0</span>
                        <span>1.0</span>
                        <span>0.0</span>
                      </div>
                      
                      <div className="ml-12 mr-4 h-full relative">
                        <svg className="w-full h-full" viewBox="0 0 400 300">
                          {[...Array(7)].map((_, i) => (
                            <line key={i} x1="0" y1={i * 50} x2="400" y2={i * 50} 
                                  stroke="#374151" strokeWidth="0.5" opacity="0.5" />
                          ))}
                          {[0, 40, 80, 160, 200, 280, 360, 400].map((x, i) => (
                            <line key={i} x1={x} y1="0" x2={x} y2="300" 
                                  stroke="#374151" strokeWidth="0.5" opacity="0.5" />
                          ))}
                          
                          <motion.path
                            d="M0,300 L40,295 L80,292 L160,285 L200,283 L280,275 L360,269 L400,266"
                            fill="none"
                            stroke="#3B82F6"
                            strokeWidth="3"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 0.5 }}
                          />
                          
                          <motion.path
                            d="M0,300 L40,292 L80,285 L160,272 L200,265 L280,253 L360,240 L400,233"
                            fill="none"
                            stroke="#F59E0B"
                            strokeWidth="3"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 1 }}
                          />
                          
                          <motion.path
                            d="M0,300 L40,280 L80,260 L160,220 L200,200 L280,160 L360,125 L400,105"
                            fill="none"
                            stroke="#10B981"
                            strokeWidth="3"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 1.5 }}
                          />
                          
                          <motion.circle cx="400" cy="266" r="4" fill="#3B82F6" 
                                        initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 2.5 }} />
                          <motion.circle cx="400" cy="233" r="4" fill="#F59E0B" 
                                        initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 2.7 }} />
                          <motion.circle cx="400" cy="105" r="4" fill="#10B981" 
                                        initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 2.9 }} />
                        </svg>
                      </div>
                      
                      <div className="ml-12 flex justify-between text-xs text-gray-400 mt-2">
                        <span>0g</span>
                        <span>10g</span>
                        <span>20g</span>
                        <span>40g</span>
                        <span>50g</span>
                        <span>70g</span>
                        <span>90g</span>
                        <span>100g</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-center space-x-8 text-sm mt-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-1 bg-blue-500"></div>
                        <span className="text-blue-400">1 Jauge (Vm = 0.69mV @ 100g)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-1 bg-orange-500"></div>
                        <span className="text-orange-400">2 Jauges (Vm = 1.34mV @ 100g)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-1 bg-green-500"></div>
                        <span className="text-green-400">4 Jauges (Vm = 3.9mV @ 100g)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-green-900/50 to-emerald-900/50 p-6 rounded-xl border border-green-400/30">
                  <h5 className="text-green-400 font-semibold mb-4 text-center">🏆 Conclusion de l'Analyse</h5>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl mb-2">📊</div>
                      <p className="text-green-400 text-sm font-semibold">Sensibilité x5.65</p>
                      <p className="text-gray-300 text-xs">Avec 4 jauges vs 1 jauge</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">📈</div>
                      <p className="text-green-400 text-sm font-semibold">Linéarité Optimale</p>
                      <p className="text-gray-300 text-xs">Configuration pont complet</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">🛡️</div>
                      <p className="text-green-400 text-sm font-semibold">Immunité Maximale</p>
                      <p className="text-gray-300 text-xs">Aux variations thermiques</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {activeView === 'mise-a-zero' && (
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Mise à Zéro du Pont de Wheatstone</h3>
              
              <motion.div 
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-orange-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold text-orange-400 mb-6">Mise à Zéro du Pont de Wheatstone</h4>
                
                <div className="mb-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <AlertTriangle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="text-orange-400 font-semibold mb-2">Problème Récurrent Identifié</h5>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Un des problèmes récurrents lors de nos différents tests pour vérifier que notre circuit 
                        fonctionnait était que la tension de sortie du pont de Wheatstone, sensé détecter le pli des 
                        jauges de contrainte, <strong className="text-orange-400">n'était jamais à 0V au repos</strong> 
                        (quand il n'y avait rien sur la balance), pire encore, la tension variait entre chaque essai.
                      </p>
                    </div>
                  </div>
                  
                  <div className="glass-dark p-4 rounded-lg border-l-4 border-red-400">
                    <h6 className="text-red-400 font-semibold mb-2">🔍 Causes du Problème</h6>
                    <div className="space-y-2 text-gray-300 text-sm">
                      <p>• <strong>Poids de la lame métallique</strong> qui exerce une contrainte sur les jauges</p>
                      <p>• <strong>Déformations résiduelles</strong> des tests précédents dans la journée</p>
                      <p>• <strong>Efforts appliqués antérieurement</strong> déformant très légèrement les jauges</p>
                      <p>• <strong>Variations thermiques</strong> et instabilités mécaniques</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h5 className="text-white font-semibold mb-6 text-xl">Solutions Envisagées</h5>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="glass-dark p-6 rounded-lg border border-blue-500/20">
                      <h6 className="text-blue-400 font-semibold mb-4 flex items-center">
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded mr-3">1</span>
                        Mise à Zéro Software
                      </h6>
                      <div className="space-y-3">
                        <p className="text-gray-300 text-sm">
                          Offset appliqué à la tension reçue par la carte dans le code STM32.
                        </p>
                        <div className="bg-blue-900/30 p-3 rounded border border-blue-500/30">
                          <p className="text-blue-400 text-xs font-semibold mb-1">✅ Avantages:</p>
                          <p className="text-gray-300 text-xs">• Très facile à mettre en place</p>
                          <p className="text-gray-300 text-xs">• Simple addition dans le code</p>
                          <p className="text-gray-300 text-xs">• Pas de composants supplémentaires</p>
                        </div>
                      </div>
                    </div>

                    <div className="glass-dark p-6 rounded-lg border border-green-500/20">
                      <h6 className="text-green-400 font-semibold mb-4 flex items-center">
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded mr-3">2</span>
                        Mise à Zéro Hardware
                      </h6>
                      <div className="space-y-3">
                        <p className="text-gray-300 text-sm">
                          Potentiomètre sur le circuit électronique pour ajustement analogique.
                        </p>
                        <div className="bg-green-900/30 p-3 rounded border border-green-500/30">
                          <p className="text-green-400 text-xs font-semibold mb-1">✅ Avantages:</p>
                          <p className="text-gray-300 text-xs">• Tension prévisible dans le circuit</p>
                          <p className="text-gray-300 text-xs">• Évite les problèmes de surtension</p>
                          <p className="text-gray-300 text-xs">• Réactivité immédiate</p>
                          <p className="text-gray-300 text-xs">• Pas besoin de modifier le code</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 p-6 rounded-xl border border-green-400/30">
                  <h5 className="text-2xl font-bold text-green-400 mb-4 text-center">🏆 Solution Retenue</h5>
                  <div className="text-center mb-4">
                    <p className="text-gray-300 mb-4">
                      Nous avons décidé d'utiliser la <strong className="text-green-400">solution hardware</strong> 
                      à l'aide d'un potentiomètre pour ses avantages en termes de stabilité et de réactivité.
                    </p>
                    <div className="inline-flex items-center space-x-4 bg-black/30 px-6 py-3 rounded-lg">
                      <span className="text-green-400 font-mono text-lg font-bold">Potentiomètre 100kΩ</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-300">Ajustement manuel précis</span>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-2xl mb-2">⚡</div>
                      <p className="text-green-400 text-sm font-semibold">Réactivité</p>
                      <p className="text-gray-300 text-xs">Ajustement immédiat</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">🛡️</div>
                      <p className="text-green-400 text-sm font-semibold">Stabilité</p>
                      <p className="text-gray-300 text-xs">Tension prévisible</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">🔧</div>
                      <p className="text-green-400 text-sm font-semibold">Simplicité</p>
                      <p className="text-gray-300 text-xs">Pas de code à modifier</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {activeView === 'pcb' && (
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6 text-center">CAO Électronique - Design PCB</h3>
              
              <motion.div 
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-yellow-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-yellow-400 mb-4">
                    IPS - 2025 - C4 - Groupe 4 ENIB
                  </h4>
                  <p className="text-gray-300">
                    Conception PCB avec Eagle - Assemblage des composants sur circuit imprimé
                  </p>
                </div>

                <div className="flex justify-center mb-8">
                  <div className="relative max-w-4xl w-full">
                    <img 
                      src="/images/Cao.png" 
                      alt="CAO Électronique - PCB Design Eagle"
                      className="w-full h-auto border border-yellow-500/30 rounded-lg bg-slate-900"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full aspect-video bg-slate-900 rounded-lg border border-yellow-500/30 hidden items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10"></div>
                      <div className="text-center z-10">
                        <div className="text-6xl mb-4">🖥️</div>
                        <p className="text-yellow-400 text-xl font-semibold mb-2">PCB Design - Vue Eagle</p>
                        <p className="text-gray-400 mb-4">Circuit imprimé avec composants positionnés</p>
                        <div className="text-red-400 text-sm font-medium">
                          ❌ Image non trouvée: /images/Cao.png
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {activeView === 'schema' && (
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Schéma Électronique Complet</h3>
              
              <motion.div 
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-green-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-green-400 mb-4">
                    Architecture Complète du Système
                  </h4>
                  <p className="text-gray-300">
                    Schéma fonctionnel montrant toutes les connexions et composants
                  </p>
                </div>

                <div className="flex justify-center mb-8">
                  <div className="relative max-w-5xl w-full">
                    <img 
                      src="/images/Schéma électronique.png" 
                      alt="Schéma Électronique Complet"
                      className="w-full h-auto border border-green-500/30 rounded-lg bg-slate-900"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full aspect-video bg-slate-900 rounded-lg border border-green-500/30 hidden items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-cyan-500/10"></div>
                      <div className="text-center z-10">
                        <div className="text-6xl mb-4">⚡</div>
                        <p className="text-green-400 text-xl font-semibold mb-2">Schéma Électronique</p>
                        <p className="text-gray-400 mb-4">Connexions complètes : Jauges → AD623 → STM32 → Servomoteur</p>
                        <div className="text-red-400 text-sm font-medium">
                          ❌ Image non trouvée: /images/Schéma électronique.png
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="glass-dark p-4 rounded-lg">
                      <h5 className="text-green-400 font-semibold mb-3">🎯 Points clés du schéma</h5>
                      <div className="space-y-2 text-sm text-gray-300">
                        <p>• <strong>Pont complet 4 jauges</strong>: Sensibilité maximale</p>
                        <p>• <strong>AD623</strong>: Amplificateur d'instrumentation haute précision</p>
                        <p>• <strong>Découplage alimentation</strong>: Condensateurs de filtrage</p>
                        <p>• <strong>Protection</strong>: Résistances de limitation</p>
                        <p>• <strong>Interface standard</strong>: Compatible Arduino/STM32</p>
                      </div>
                    </div>

                    <div className="glass-dark p-4 rounded-lg">
                      <h5 className="text-blue-400 font-semibold mb-3">⚙️ Paramètres de conception</h5>
                      <div className="space-y-2 text-sm text-gray-300">
                        <div className="flex justify-between">
                          <span>Gain AD623:</span>
                          <span className="text-blue-400 font-mono">G ≈ 100</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tension d'alimentation:</span>
                          <span className="text-blue-400 font-mono">±6V</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Signal de sortie:</span>
                          <span className="text-blue-400 font-mono">0-3.3V</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Fréquence PWM:</span>
                          <span className="text-blue-400 font-mono">50 Hz</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="glass-dark p-4 rounded-lg">
                      <h5 className="text-purple-400 font-semibold mb-3">🔧 Composants principaux</h5>
                      <div className="space-y-2 text-sm text-gray-300">
                        <p>• <strong>U1</strong>: Arduino UNO / STM32F411</p>
                        <p>• <strong>AD623</strong>: Amplificateur d'instrumentation</p>
                        <p>• <strong>Jauges</strong>: 4×350Ω en pont de Wheatstone</p>
                        <p>• <strong>J1</strong>: Connecteur 6 pins alimentation</p>
                        <p>• <strong>Moteur</strong>: Servomoteur (connector 3 pins)</p>
                        <p>• <strong>Résistances</strong>: Pull-up et limitation</p>
                      </div>
                    </div>

                    <div className="glass-dark p-4 rounded-lg">
                      <h5 className="text-orange-400 font-semibold mb-3">🚀 Performances obtenues</h5>
                      <div className="space-y-2 text-sm text-gray-300">
                        <div className="flex justify-between">
                          <span>Sensibilité système:</span>
                          <span className="text-orange-400 font-bold">188.68 V/kg</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Résolution:</span>
                          <span className="text-orange-400 font-bold">~1g</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Plage de mesure:</span>
                          <span className="text-orange-400 font-bold">0-500g</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Stabilité:</span>
                          <span className="text-orange-400 font-bold">±1% FS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>

        <style jsx>{`
          .card {
            @apply bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl;
          }
          
          .glass-dark {
            @apply bg-slate-800/30 backdrop-blur-sm border border-slate-600/20;
          }
        `}</style>
      </div>
    </section>
  );
};

export default CircuitSection;