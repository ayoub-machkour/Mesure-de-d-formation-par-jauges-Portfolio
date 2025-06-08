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
          <div className="flex flex-wrap justify-center items-center gap-6 text-center">
            {[
              { text: "Lame + Jauges", icon: "🔧", color: "from-red-500 to-orange-500" },
              { text: "Pont Wheatstone", icon: "⚡", color: "from-yellow-500 to-amber-500" },
              { text: "Amplificateur AD623", icon: "📈", color: "from-green-500 to-emerald-500" },
              { text: "STM32F411", icon: "🖥️", color: "from-blue-500 to-cyan-500" },
              { text: "Servomoteur", icon: "⚙️", color: "from-purple-500 to-pink-500" },
              { text: "Interface Web", icon: "🌐", color: "from-pink-500 to-rose-500" }
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
                  <ArrowRight className="text-cyan-400 text-2xl animate-pulse" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ObjectivesSection;