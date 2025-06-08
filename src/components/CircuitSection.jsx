import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Settings, Gauge, ArrowRight, Activity } from 'lucide-react';

const CircuitSection = () => {
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

        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Schéma de Principe</h3>
          <div className="flex flex-wrap justify-center items-center gap-6 text-center">
            {[
              { text: "Jauges 350Ω", icon: "🔧", color: "from-red-500 to-orange-500" },
              { text: "Pont Wheatstone", icon: "⚡", color: "from-yellow-500 to-amber-500" },
              { text: "AD623 (Gain 100)", icon: "📈", color: "from-green-500 to-emerald-500" },
              { text: "ADC STM32 12-bit", icon: "🖥️", color: "from-blue-500 to-cyan-500" },
              { text: "PWM → Servo", icon: "⚙️", color: "from-purple-500 to-pink-500" }
            ].map((step, index, array) => (
              <React.Fragment key={index}>
                <motion.div 
                  className="group"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`bg-gradient-to-r ${step.color} p-4 rounded-xl text-white font-medium shadow-lg transform transition-all duration-300`}>
                    <div className="text-2xl mb-2">{step.icon}</div>
                    <div className="text-sm">{step.text}</div>
                  </div>
                </motion.div>
                {index < array.length - 1 && (
                  <ArrowRight className="text-yellow-400 text-2xl animate-pulse" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="card border-cyan-500/20">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">Calculs Électroniques</h3>
            <div className="space-y-3 text-sm">
              <div className="glass-dark p-3 rounded font-mono">
                <div className="text-cyan-400">Gain AD623:</div>
                <div className="text-gray-300">G = 1 + (100kΩ / Rg)</div>
              </div>
              <div className="glass-dark p-3 rounded font-mono">
                <div className="text-green-400">Sensibilité:</div>
                <div className="text-gray-300">S = ΔVout / Δmasse = 188.68 V/kg</div>
              </div>
              <div className="glass-dark p-3 rounded font-mono">
                <div className="text-purple-400">Conversion ADC:</div>
                <div className="text-gray-300">Vout = (ADC × 3.3V) / 4095</div>
              </div>
            </div>
          </div>

          <div className="card border-pink-500/20">
            <h3 className="text-xl font-bold text-pink-400 mb-4">Performances</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Résolution masse:</span>
                <span className="text-white font-semibold">~1g</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Plage mesure:</span>
                <span className="text-white font-semibold">0-500g</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Fréquence échantillonnage:</span>
                <span className="text-white font-semibold">2 Hz</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Précision servo:</span>
                <span className="text-white font-semibold">±1°</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CircuitSection;