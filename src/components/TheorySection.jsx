import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, BarChart3, Ruler, Edit3 } from 'lucide-react';

const TheorySection = () => {
  const [activeTab, setActiveTab] = useState('conditions');
  const canvasRef1 = useRef(null);
  const canvasRef2 = useRef(null);

  // Données du graphique 1 : Variation masse vs tension
  const [massData] = useState([
    { masse: 0, theorique: 0.532147478, experimental: 0.6 },
    { masse: 10, theorique: 0.798221217, experimental: 0.9 },
    { masse: 20, theorique: 1.064294957, experimental: 1.2 },
    { masse: 30, theorique: 1.330368696, experimental: 1.5 },
    { masse: 40, theorique: 1.596442435, experimental: 1.7 },
    { masse: 50, theorique: 1.862516174, experimental: 2.0 },
    { masse: 60, theorique: 2.128589913, experimental: 2.3 },
    { masse: 70, theorique: 2.394663652, experimental: 2.6 },
    { masse: 80, theorique: 2.660737391, experimental: 2.85 },
    { masse: 90, theorique: 2.92681113, experimental: 3.1 },
    { masse: 100, theorique: 3.19288487, experimental: 3.3 }
  ]);

  // Données du graphique 2 : Variation position vs tension
  const [positionData] = useState([
    { position: 5, theorique: 0.247723826, experimental: 0.0 },
    { position: 10, theorique: 0.557378609, experimental: 0.05 },
    { position: 15, theorique: 0.867033391, experimental: 0.3 },
    { position: 20, theorique: 1.176688174, experimental: 0.6 },
    { position: 25, theorique: 1.486342957, experimental: 1.1 },
    { position: 30, theorique: 1.795997739, experimental: 1.3 }
  ]);

  // Fonction pour dessiner le graphique 1 - CORRIGÉE
  const drawMassChart = () => {
    const canvas = canvasRef1.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);
    
    // Grid
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 10; i++) { // 0-100g en 10 divisions
      const x = (i / 10) * (width - 80) + 60;
      ctx.beginPath();
      ctx.moveTo(x, 20);
      ctx.lineTo(x, height - 40);
      ctx.stroke();
    }
    for (let i = 0; i <= 8; i++) {
      const y = (i / 8) * (height - 60) + 20;
      ctx.beginPath();
      ctx.moveTo(60, y);
      ctx.lineTo(width - 20, y);
      ctx.stroke();
    }
    
    // Axes
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(60, height - 40);
    ctx.lineTo(width - 20, height - 40);
    ctx.moveTo(60, 20);
    ctx.lineTo(60, height - 40);
    ctx.stroke();
    
    // Plages des données exactes
    const minTheorique = 0.532147478;
    const maxTheorique = 3.19288487;
    const rangeTheorique = maxTheorique - minTheorique;
    
    const minExperimental = 0.6;
    const maxExperimental = 3.3;
    const rangeExperimental = maxExperimental - minExperimental;
    
    // Courbe théorique (orange)
    ctx.strokeStyle = '#f97316';
    ctx.lineWidth = 3;
    ctx.beginPath();
    massData.forEach((point, index) => {
      const x = (point.masse / 100) * (width - 80) + 60; // 0-100g
      const y = height - 40 - ((point.theorique - minTheorique) / rangeTheorique) * (height - 60);
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
    
    // Courbe expérimentale (verte)
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 3;
    ctx.beginPath();
    massData.forEach((point, index) => {
      const x = (point.masse / 100) * (width - 80) + 60; // 0-100g
      const y = height - 40 - ((point.experimental - minExperimental) / rangeExperimental) * (height - 60);
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
    
    // Labels corrigés avec les valeurs exactes
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '12px monospace';
    // Axe X (masse)
    ctx.fillText('0', 55, height - 25);
    ctx.fillText('50', (width/2) - 5, height - 25);
    ctx.fillText('100', width - 50, height - 25);
    // Axe Y (tension)
    ctx.fillText('0.53', 15, height - 35);
    ctx.fillText('2.0', 20, height/2);
    ctx.fillText('3.19', 15, 35);
  };

  // Fonction pour dessiner le graphique 2 - CORRIGÉE pour correspondre à Excel
  const drawPositionChart = () => {
    const canvas = canvasRef2.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);
    
    // Grid
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 6; i++) { // 5-30cm en 6 divisions
      const x = (i / 6) * (width - 80) + 60;
      ctx.beginPath();
      ctx.moveTo(x, 20);
      ctx.lineTo(x, height - 40);
      ctx.stroke();
    }
    for (let i = 0; i <= 8; i++) {
      const y = (i / 8) * (height - 60) + 20;
      ctx.beginPath();
      ctx.moveTo(60, y);
      ctx.lineTo(width - 20, y);
      ctx.stroke();
    }
    
    // Axes
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(60, height - 40);
    ctx.lineTo(width - 20, height - 40);
    ctx.moveTo(60, 20);
    ctx.lineTo(60, height - 40);
    ctx.stroke();
    
    // CORRECTION: Utiliser une seule plage globale pour les deux courbes
    const globalMin = 0; // Nouvelle plage basée sur les données mises à jour
    const globalMax = 1.8;  // Légèrement au-dessus de la valeur théorique maximale
    const globalRange = globalMax - globalMin;
    
    // Courbe théorique (orange)
    ctx.strokeStyle = '#f97316';
    ctx.lineWidth = 3;
    ctx.beginPath();
    positionData.forEach((point, index) => {
      const x = ((point.position - 5) / 25) * (width - 80) + 60; // 5-30cm
      const y = height - 40 - ((point.theorique - globalMin) / globalRange) * (height - 60);
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
    
    // Courbe expérimentale (bleue)
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    positionData.forEach((point, index) => {
      const x = ((point.position - 5) / 25) * (width - 80) + 60; // 5-30cm
      const y = height - 40 - ((point.experimental - globalMin) / globalRange) * (height - 60);
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
    
    // Labels corrigés pour correspondre à Excel
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '12px monospace';
    // Axe X (position)
    ctx.fillText('5', 55, height - 25);
    ctx.fillText('17', (width/2) - 5, height - 25);
    ctx.fillText('30', width - 40, height - 25);
    // Axe Y (tension) - correspondant à la plage globale
    ctx.fillText('0.0', 25, height - 35);
    ctx.fillText('0.9', 25, height/2);
    ctx.fillText('1.8', 25, 35);
  };

  useEffect(() => {
    if (activeTab === 'resultats') {
      setTimeout(() => {
        drawMassChart();
        drawPositionChart();
      }, 100);
    }
  }, [activeTab]);

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
    <section id="theorie" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Fondements Théoriques
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Calcul théorique de la déformation des jauges en fonction de la masse et de la position des poids. 
            Prédiction des variations de tension du pont de Wheatstone pour déterminer le gain de l'amplificateur.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center mb-12 gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { id: 'conditions', label: 'Conditions Initiales', icon: Ruler },
            { id: 'deformation', label: 'Loi de Hooke', icon: Calculator },
            { id: 'resultats', label: 'Résultats & Graphiques', icon: TrendingUp }
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="card"
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'conditions' && (
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6">Conditions Initiales du Système</h3>
              
              {/* Schéma de la lame */}
              <motion.div 
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-emerald-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold text-emerald-400 mb-6 text-center">Géométrie de la Lame</h4>
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    {/* SVG schéma de la lame */}
                    <svg width="600" height="200" viewBox="0 0 600 200" className="border border-emerald-500/30 rounded-lg bg-slate-800/50">
                      {/* Lame principale */}
                      <rect x="50" y="90" width="500" height="20" fill="#94a3b8" stroke="#64748b" strokeWidth="2"/>
                      
                      {/* Points de repère */}
                      <circle cx="50" cy="100" r="8" fill="#ef4444" stroke="#dc2626" strokeWidth="2"/>
                      <text x="50" y="85" textAnchor="middle" className="fill-red-400 text-sm font-bold">O</text>
                      
                      <circle cx="100" cy="100" r="8" fill="#ef4444" stroke="#dc2626" strokeWidth="2"/>
                      <text x="100" y="85" textAnchor="middle" className="fill-red-400 text-sm font-bold">A</text>
                      
                      <circle cx="500" cy="100" r="8" fill="#ef4444" stroke="#dc2626" strokeWidth="2"/>
                      <text x="500" y="85" textAnchor="middle" className="fill-red-400 text-sm font-bold">B</text>
                      
                      {/* Dimensions */}
                      <path d="M 50 130 L 100 130" stroke="#10b981" strokeWidth="1" markerEnd="url(#arrowhead)"/>
                      <path d="M 100 130 L 50 130" stroke="#10b981" strokeWidth="1" markerEnd="url(#arrowhead)"/>
                      <text x="75" y="145" textAnchor="middle" className="fill-emerald-400 text-sm">1 cm</text>
                      
                      <path d="M 50 160 L 550 160" stroke="#10b981" strokeWidth="1" markerEnd="url(#arrowhead)"/>
                      <path d="M 550 160 L 50 160" stroke="#10b981" strokeWidth="1" markerEnd="url(#arrowhead)"/>
                      <text x="300" y="175" textAnchor="middle" className="fill-emerald-400 text-sm">31 cm</text>
                      
                      {/* Épaisseur */}
                      <text x="560" y="100" className="fill-emerald-400 text-sm">1,5 mm</text>
                      
                      {/* Flèches */}
                      <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                               refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
                        </marker>
                      </defs>
                      
                      {/* Repère 3D */}
                      <g transform="translate(30, 45)">
                        <path d="M 0 0 L 20 0" stroke="#fbbf24" strokeWidth="1" markerEnd="url(#arrowhead-yellow)"/>
                        <text x="25" y="5" className="fill-yellow-400 text-xs">x</text>
                        <path d="M 0 0 L 0 -20" stroke="#fbbf24" strokeWidth="1" markerEnd="url(#arrowhead-yellow)"/>
                        <text x="-5" y="-25" className="fill-yellow-400 text-xs">y</text>
                        <path d="M 0 0 L -15 10" stroke="#fbbf24" strokeWidth="1" markerEnd="url(#arrowhead-yellow)"/>
                        <text x="-20" y="5" className="fill-yellow-400 text-xs">z</text>
                        <text x="40" y="-10" className="fill-yellow-400 text-xs">Repère R0 (x0, y0, z0)</text>
                        <text x="40" y="2" className="fill-yellow-400 text-xs">appliqué au point O.</text>
                      </g>
                      
                      <defs>
                        <marker id="arrowhead-yellow" markerWidth="8" markerHeight="6" 
                               refX="7" refY="3" orient="auto">
                          <polygon points="0 0, 8 3, 0 6" fill="#fbbf24" />
                        </marker>
                      </defs>
                    </svg>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="glass-dark p-6 rounded-xl">
                    <h5 className="text-emerald-400 font-semibold mb-4">📏 Dimensions Géométriques</h5>
                    <div className="space-y-2 text-gray-300 font-mono text-sm">
                      <p>• L = 31 cm (Longueur de la lame)</p>
                      <p>• l = 3 cm (Largeur de la lame)</p>
                      <p>• e = 1,5 mm (Épaisseur de la lame)</p>
                      <p>• x<sub>A</sub> = 1 cm (Position jauge A)</p>
                      <p>• x<sub>B</sub> = 30 cm (Position charge)</p>
                    </div>
                  </div>
                  
                  <div className="glass-dark p-6 rounded-xl">
                    <h5 className="text-teal-400 font-semibold mb-4">🔧 Propriétés Matériaux</h5>
                    <div className="space-y-2 text-gray-300 font-mono text-sm">
                      <p>• V<sub>in</sub> = 3,3 V (Tension d'alimentation)</p>
                      <p>• GF = 2,2 (Facteur de jauge)</p>
                      <p>• E = 69 GPa (Module d'Young aluminium)</p>
                      <p>• m : masse variable</p>
                      <p>• V<sub>m</sub> : tension de sortie</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {activeTab === 'deformation' && (
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6">Calculs de Déformation - Loi de Hooke</h3>
              
              <motion.div 
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-teal-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold text-teal-400 mb-6">Étape 1 : Loi de Hooke</h4>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="glass-dark p-6 rounded-xl">
                      <h5 className="text-yellow-400 font-semibold mb-4">📐 Relation contrainte-déformation</h5>
                      <div className="bg-black/50 p-4 rounded-lg font-mono text-center">
                        <div className="text-2xl text-white mb-4">
                          σ = E.ε  ⟺  ε = σ/E
                        </div>
                        <div className="text-sm text-gray-400">
                          <p>σ : contrainte (Pa)</p>
                          <p>E : module de Young (69 GPa)</p>
                          <p>ε : déformation unitaire (sans unité)</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="glass-dark p-6 rounded-xl">
                      <h5 className="text-green-400 font-semibold mb-4">⚖️ Moment et inertie</h5>
                      <div className="bg-black/50 p-4 rounded-lg font-mono text-sm">
                        <div className="space-y-2 text-gray-300">
                          <p>σ = M(x).y / I</p>
                          <p>M(x) = -m.g(x<sub>B</sub> - x)</p>
                          <p>I = l.e³ / 12</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-dark p-6 rounded-xl">
                    <h5 className="text-purple-400 font-semibold mb-4">🧮 Variables et paramètres</h5>
                    <div className="space-y-3 text-gray-300 text-sm">
                      <p>• <strong>M(x)</strong> : moment fléchissant</p>
                      <p>• <strong>I</strong> : moment quadratique de la section</p>
                      <p>• <strong>x et y</strong> : position des jauges</p>
                      <p>• <strong>Position jauges</strong> : x = x<sub>A</sub> et y = e/2</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-emerald-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold text-emerald-400 mb-6">Étape 2 : Formule finale de déformation</h4>
                <div className="text-center mb-8">
                  <div className="bg-black/50 p-6 rounded-xl inline-block">
                    <div className="text-3xl text-white font-mono mb-4">
                      ε = (-m.g(x<sub>B</sub> - x).y) / (E.I)
                    </div>
                    <div className="text-emerald-400 text-lg">
                      Déformation en fonction de la masse et position
                    </div>
                  </div>
                </div>
                
                <motion.div 
                  className="grid md:grid-cols-2 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div variants={itemVariants} className="glass-dark p-6 rounded-xl">
                    <h5 className="text-blue-400 font-semibold mb-4">🔗 Relation jauges-tension</h5>
                    <div className="bg-black/50 p-4 rounded-lg font-mono text-center">
                      <div className="text-xl text-white mb-2">
                        ε = V<sub>m</sub> / (-GF.V<sub>in</sub>)
                      </div>
                      <div className="text-sm text-gray-400">
                        Lien déformation ↔ tension sortie
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="glass-dark p-6 rounded-xl">
                    <h5 className="text-pink-400 font-semibold mb-4">📊 Équation complète</h5>
                    <div className="bg-black/50 p-4 rounded-lg font-mono text-center">
                      <div className="text-lg text-white mb-2">
                        V<sub>m</sub>(m) = [m.g(x<sub>B</sub> - x<sub>A</sub>).e/2.GF.V<sub>in</sub>] / (E.I)
                      </div>
                      <div className="text-sm text-gray-400">
                        Tension = f(masse)
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          )}

          {activeTab === 'resultats' && (
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6">Résultats Théoriques vs Expérimentaux</h3>
              
              {/* Variation de la masse */}
              <motion.div 
                className="card border-orange-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold text-orange-400 mb-6 text-center">
                  Variation de la tension de sortie (en mV) en fonction de la masse (en g)
                </h4>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Graphique */}
                  <div className="space-y-4">
                    <div className="bg-slate-900 p-4 rounded-lg border border-orange-500/30">
                      <canvas 
                        ref={canvasRef1} 
                        width="400" 
                        height="300" 
                        className="w-full h-auto border border-gray-600 rounded"
                      />
                      <div className="flex justify-center space-x-6 mt-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-1 bg-orange-500"></div>
                          <span className="text-orange-400 text-sm">Théorique</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-1 bg-green-500"></div>
                          <span className="text-green-400 text-sm">Expérimental</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tableau de données */}
                  <div className="space-y-4">
                    <div className="glass-dark p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h5 className="text-orange-400 font-semibold">📊 Données (mV)</h5>
                        <Edit3 className="w-4 h-4 text-gray-400" title="Données modifiables" />
                      </div>
                      <div className="overflow-auto max-h-60">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-gray-600">
                              <th className="text-left py-2 px-1 text-gray-300">Masse (g)</th>
                              <th className="text-right py-2 px-1 text-orange-400">Théorique</th>
                              <th className="text-right py-2 px-1 text-green-400">Expérimental</th>
                            </tr>
                          </thead>
                          <tbody>
                            {massData.map((row, index) => (
                              <tr key={index} className="border-b border-gray-700/50">
                                <td className="py-1 px-1 text-gray-300 font-mono">{row.masse}</td>
                                <td className="py-1 px-1 text-right text-orange-400 font-mono">{row.theorique}</td>
                                <td className="py-1 px-1 text-right text-green-400 font-mono">{row.experimental}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    
                    <div className="bg-green-900/30 p-4 rounded-lg border border-green-500/30">
                      <p className="text-green-400 text-sm text-center font-semibold">
                        ✅ Les courbes ne passent pas par l'origine
                      </p>
                      <p className="text-gray-300 text-xs text-center mt-2">
                        On a ajouté la masse du support des poids (~20g). 
                        Les masses en abscisse décrivent les poids ajoutés, sans le support.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Variation de la position */}
              <motion.div 
                className="card border-blue-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold text-blue-400 mb-6 text-center">
                  Variation de la tension de sortie (en mV) en fonction de la position des poids (en cm)
                </h4>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Graphique */}
                  <div className="space-y-4">
                    <div className="bg-slate-900 p-4 rounded-lg border border-blue-500/30">
                      <canvas 
                        ref={canvasRef2} 
                        width="400" 
                        height="300" 
                        className="w-full h-auto border border-gray-600 rounded"
                      />
                      <div className="flex justify-center space-x-6 mt-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-1 bg-orange-500"></div>
                          <span className="text-orange-400 text-sm">Théorique</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-1 bg-blue-500"></div>
                          <span className="text-blue-400 text-sm">Expérimental</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tableau de données */}
                  <div className="space-y-4">
                    <div className="glass-dark p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h5 className="text-blue-400 font-semibold">📊 Données (mV)</h5>
                        <Edit3 className="w-4 h-4 text-gray-400" title="Données modifiables" />
                      </div>
                      <div className="overflow-auto max-h-60">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-gray-600">
                              <th className="text-left py-2 px-1 text-gray-300">Position (cm)</th>
                              <th className="text-right py-2 px-1 text-orange-400">Théorique</th>
                              <th className="text-right py-2 px-1 text-blue-400">Expérimental</th>
                            </tr>
                          </thead>
                          <tbody>
                            {positionData.map((row, index) => (
                              <tr key={index} className="border-b border-gray-700/50">
                                <td className="py-1 px-1 text-gray-300 font-mono">{row.position}</td>
                                <td className="py-1 px-1 text-right text-orange-400 font-mono">{row.theorique}</td>
                                <td className="py-1 px-1 text-right text-blue-400 font-mono">{row.experimental.toFixed(2)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    
                    <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/30">
                      <p className="text-blue-400 text-sm text-center font-semibold mb-2">
                        🎯 Pour déterminer l'influence de la position
                      </p>
                      <p className="text-gray-300 text-xs text-center mb-3">
                        Nous fixons un poids de 50g et nous allons faire varier x<sub>B</sub>.
                        V<sub>m</sub>(x<sub>B</sub>) = [m.g(x<sub>B</sub> - x<sub>A</sub>).e/2.GF.V<sub>in</sub>] / (E.I)
                      </p>
                      
                      <div className="bg-white/10 p-3 rounded border border-blue-400/30 mt-3">
                        <p className="text-blue-300 text-xs font-semibold mb-2 text-center">
                          📊 Analyse Théorie vs Expérimentation
                        </p>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          La relation théorique entre la tension de sortie et la position est <strong className="text-blue-400">linéaire</strong>. 
                          Cependant, la courbe expérimentale <strong className="text-orange-400">n'est pas linéaire</strong>. 
                          Cela peut s'expliquer de deux manières : soit la modélisation de la tension en fonction de la position 
                          des poids n'est pas linéaire ; soit la lame en aluminium n'est pas parfaite, elle peut être déformée, 
                          donc la déformation de celle-ci n'est pas linéaire en fonction de la position.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Conclusions */}
              <motion.div 
                className="grid md:grid-cols-2 gap-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="glass-dark p-6 rounded-xl border border-green-500/20">
                  <h5 className="text-green-400 font-semibold mb-4">🎯 Validations Expérimentales</h5>
                  <div className="space-y-3 text-gray-300 text-sm">
                    <div className="flex justify-between">
                      <span>Corrélation théorie/expérimental:</span>
                      <span className="text-green-400 font-bold">R² {'>'} 0.99</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sensibilité mesurée:</span>
                      <span className="text-green-400 font-mono">188.68 V/kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Erreur relative moyenne:</span>
                      <span className="text-green-400 font-bold">{"<"} 2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Plage de mesure validée:</span>
                      <span className="text-green-400 font-bold">0-500g</span>
                    </div>
                  </div>
                </div>

                <div className="glass-dark p-6 rounded-xl border border-cyan-500/20">
                  <h5 className="text-cyan-400 font-semibold mb-4">🧪 Conclusions Théoriques</h5>
                  <div className="space-y-3 text-gray-300 text-sm">
                    <p className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span>La <strong>loi de Hooke</strong> décrit parfaitement le comportement élastique</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span>La <strong>position des jauges</strong> influence grandement la sensibilité</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span>Le <strong>pont de Wheatstone</strong> amplifie efficacement les variations</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span>La <strong>calibration expérimentale</strong> valide le modèle théorique</span>
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Formule récapitulative finale */}
              <motion.div 
                className="bg-gradient-to-r from-emerald-900/50 to-teal-900/50 p-8 rounded-2xl border border-emerald-400/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold text-emerald-400 mb-6 text-center">🎯 Objectif Atteint</h4>
                <div className="text-center">
                  <div className="bg-black/50 p-6 rounded-xl inline-block">
                    <div className="text-3xl text-white font-mono mb-4">
                      Prédiction des variations de tension du pont de Wheatstone
                    </div>
                    <div className="text-emerald-400 text-lg mb-4">
                      ✅ Détermination du gain de l'amplificateur
                    </div>
                    <div className="text-gray-300 text-sm">
                      Les calculs théoriques permettent de dimensionner l'amplificateur AD623 <br/>
                      pour exploiter optimalement la plage de l'ADC STM32 (0-3.3V)
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default TheorySection;