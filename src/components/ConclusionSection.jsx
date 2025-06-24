import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react';

const ConclusionSection = () => {
  return (
    <section id="conclusion" className="py-16 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          className="card border-indigo-500/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Conclusion du Projet
            </span>
          </h2>

          {/* Bilan par section */}
          <div className="space-y-6 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-dark p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Réussites
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• <strong>Théorie :</strong> Validation loi de Hooke (R² &gt; 0.99)</li>
                  <li>• <strong>Programmation :</strong> Code STM32 fonctionnel avec 2 modes</li>
                  <li>• <strong>Interface :</strong> Site web 3D temps réel opérationnel</li>
                  <li>• <strong>Mesures :</strong> Sensibilité 188.68 V/kg, précision ±1%</li>
                </ul>
              </div>

              <div className="glass-dark p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-400 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Difficultés Rencontrées
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• <strong>Circuit :</strong> Carte PCB imprimée non fonctionnelle</li>
                  <li>• <strong>Soudure :</strong> Problèmes techniques avec composants CMS</li>
                  <li>• <strong>Solution :</strong> Prototype sur breadboard pour validation</li>
                  <li>• <strong>Calibrage :</strong> Ajustements nécessaires pour stabilité</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bilan global */}
          <div className="border-t border-gray-600 pt-6">
            <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 p-6 rounded-xl border border-indigo-500/20">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 mr-2 text-indigo-400" />
                Bilan Final
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                Malgré les difficultés techniques rencontrées avec la <strong className="text-orange-400">carte PCB imprimée</strong> 
                (problèmes de soudure des composants CMS), ce projet a permis de valider l'ensemble de la chaîne de mesure 
                sur prototype breadboard. Les objectifs principaux ont été atteints :
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl mb-1">✅</div>
                  <p className="text-green-400 font-semibold">Système fonctionnel</p>
                  <p className="text-xs text-gray-400">Modes manuel/auto</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">📊</div>
                  <p className="text-blue-400 font-semibold">Mesures précises</p>
                  <p className="text-xs text-gray-400">±1% de précision</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">🌐</div>
                  <p className="text-purple-400 font-semibold">Interface moderne</p>
                  <p className="text-xs text-gray-400">3D temps réel</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm">
                Ce projet démontre notre capacité à surmonter les obstacles techniques et à livrer une solution 
                fonctionnelle malgré les contraintes matérielles. L'expérience acquise en soudure CMS et conception 
                PCB constitue un apprentissage précieux pour nos futurs projets d'ingénieur.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConclusionSection;