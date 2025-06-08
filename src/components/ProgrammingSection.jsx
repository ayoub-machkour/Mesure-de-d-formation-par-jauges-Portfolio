import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Settings, Target, Code } from 'lucide-react';

const ProgrammingSection = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section id="programmation" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Programmation STM32F411
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Code C optimisé avec gestion UART, ADC 12-bits, PWM servo et modes de fonctionnement
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center mb-12 gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { id: 'overview', label: 'Architecture', icon: Layers },
            { id: 'mainloop', label: 'Boucle Principale', icon: Code },
            { id: 'functions', label: 'Fonctions Auxiliaires', icon: Settings }
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg'
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
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6">Architecture du Système</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <motion.div 
                    className="glass-dark p-6 rounded-xl border border-green-500/20"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="text-xl font-semibold text-green-400 mb-3">Périphériques STM32</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• <strong>ADC1:</strong> Lecture jauges (Canal 0, 12-bit, 16 échantillons)</li>
                      <li>• <strong>TIM2:</strong> PWM servo (CH2, PA1, 50Hz)</li>
                      <li>• <strong>UART2:</strong> Communication (115200 bauds)</li>
                      <li>• <strong>GPIO:</strong> LED debug PA5</li>
                    </ul>
                  </motion.div>
                  <motion.div 
                    className="glass-dark p-6 rounded-xl border border-blue-500/20"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="text-xl font-semibold text-blue-400 mb-3">Variables Clés</h4>
                    <div className="text-gray-300 font-mono text-sm space-y-1">
                      <p>mode = 1 (Manuel) / 2 (Auto)</p>
                      <p>manualWeight = 0-500g</p>
                      <p>servoPos = 0-180°</p>
                      <p>BALANCE_SENSITIVITY = 188.68f</p>
                    </div>
                  </motion.div>
                </div>
                <motion.div 
                  className="glass-dark p-6 rounded-xl border border-purple-500/20"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-semibold text-purple-400 mb-3">Boucle Principale</h4>
                  <div className="text-gray-300 text-sm space-y-3">
                    {[
                      "Lecture ADC avec moyennage sur 16 échantillons",
                      "Conversion: ADC → tension → masse → force", 
                      "Logique modes manuel vs automatique",
                      "Contrôle servo via calcul PWM duty cycle",
                      "Envoi données UART: V:xxx M:xxx F:xxx A:xxx"
                    ].map((step, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="bg-purple-500 text-white text-xs px-2 py-1 rounded">{index + 1}</div>
                        <p>{step}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          )}

          {activeTab === 'mainloop' && (
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6">Boucle Principale du Système</h3>
              
              <motion.div 
                className="bg-black/90 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30 shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-bold text-cyan-400 flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                    Main Loop - Cœur du Système
                  </h4>
                  <div className="text-xs text-gray-400 font-mono bg-gray-800/50 px-3 py-1 rounded">
                    while(1) &#123;...&#125;
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <pre className="text-sm leading-relaxed">
                    <code>
                      <span className="text-purple-400">while</span> <span className="text-white">(</span><span className="text-yellow-400">1</span><span className="text-white">) &#123;</span>
                      <br />
                      <span className="text-gray-500">    // 1. Acquisition ADC avec moyennage</span>
                      <br />
                      <span className="text-white">    </span><span className="text-blue-400">raw_adc_value</span> <span className="text-white">=</span> <span className="text-green-400">get_averaged_adc_reading</span><span className="text-white">();</span>
                      <br />
                      <span className="text-white">    </span><span className="text-blue-400">sensor_voltage</span> <span className="text-white">= ((</span><span className="text-purple-400">float</span><span className="text-white">)</span><span className="text-blue-400">raw_adc_value</span> <span className="text-white">*</span> <span className="text-yellow-400">3.3f</span><span className="text-white">) /</span> <span className="text-yellow-400">4095.0f</span><span className="text-white">;</span>
                      <br /><br />
                      <span className="text-gray-500">    // 2. Calculs de masse et force</span>
                      <br />
                      <span className="text-white">    </span><span className="text-blue-400">calculated_mass</span> <span className="text-white">=</span> <span className="text-green-400">convert_voltage_to_weight</span><span className="text-white">(</span><span className="text-blue-400">sensor_voltage</span><span className="text-white">);</span>
                      <br />
                      <span className="text-white">    </span><span className="text-blue-400">applied_force</span> <span className="text-white">= (</span><span className="text-blue-400">calculated_mass</span> <span className="text-white">*</span> <span className="text-yellow-400">0.001f</span><span className="text-white">) *</span> <span className="text-cyan-400">GRAVITY_CONSTANT</span><span className="text-white">;</span>
                      <br /><br />
                      <span className="text-gray-500">    // 3. Envoi des données à l'IHM</span>
                      <br />
                      <span className="text-white">    </span><span className="text-blue-400">voltage_integer</span> <span className="text-white">= (</span><span className="text-purple-400">int</span><span className="text-white">)(</span><span className="text-blue-400">sensor_voltage</span> <span className="text-white">*</span> <span className="text-yellow-400">1000</span><span className="text-white">);</span>
                      <br />
                      <span className="text-white">    </span><span className="text-blue-400">mass_integer</span> <span className="text-white">= (</span><span className="text-purple-400">int</span><span className="text-white">)</span><span className="text-blue-400">calculated_mass</span><span className="text-white">;</span>
                      <br />
                      <span className="text-white">    </span><span className="text-blue-400">force_integer</span> <span className="text-white">= (</span><span className="text-purple-400">int</span><span className="text-white">)(</span><span className="text-blue-400">applied_force</span> <span className="text-white">*</span> <span className="text-yellow-400">1000</span><span className="text-white">);</span>
                      <br />
                      <span className="text-white">    </span><span className="text-green-400">sprintf</span><span className="text-white">(</span><span className="text-blue-400">uart_message</span><span className="text-white">,</span> <span className="text-orange-400">"V:%d.%03d\\r\\nM:%d\\r\\nF:%d.%03d\\r\\n"</span><span className="text-white">,</span>
                      <br />
                      <span className="text-white">            </span><span className="text-blue-400">voltage_integer</span><span className="text-white">/</span><span className="text-yellow-400">1000</span><span className="text-white">,</span> <span className="text-blue-400">voltage_integer</span><span className="text-white">%</span><span className="text-yellow-400">1000</span><span className="text-white">,</span> <span className="text-blue-400">mass_integer</span><span className="text-white">,</span>
                      <br />
                      <span className="text-white">            </span><span className="text-blue-400">force_integer</span><span className="text-white">/</span><span className="text-yellow-400">1000</span><span className="text-white">,</span> <span className="text-blue-400">force_integer</span><span className="text-white">%</span><span className="text-yellow-400">1000</span><span className="text-white">);</span>
                      <br />
                      <span className="text-white">    </span><span className="text-green-400">HAL_UART_Transmit</span><span className="text-white">(&amp;</span><span className="text-cyan-400">huart2</span><span className="text-white">, (</span><span className="text-purple-400">uint8_t</span><span className="text-white">*)</span><span className="text-blue-400">uart_message</span><span className="text-white">, </span><span className="text-green-400">strlen</span><span className="text-white">(</span><span className="text-blue-400">uart_message</span><span className="text-white">),</span>
                      <br />
                      <span className="text-white">                      </span><span className="text-cyan-400">HAL_MAX_DELAY</span><span className="text-white">);</span>
                      <br /><br />
                      <span className="text-gray-500">    // 4. Contrôle du servomoteur selon le mode</span>
                      <br />
                      <span className="text-white">    </span><span className="text-purple-400">if</span> <span className="text-white">(</span><span className="text-blue-400">operation_mode</span> <span className="text-white">==</span> <span className="text-yellow-400">1</span><span className="text-white">) &#123;</span> <span className="text-gray-500">// Mode manuel</span>
                      <br />
                      <span className="text-white">        </span><span className="text-blue-400">pwm_duty_cycle</span> <span className="text-white">=</span> <span className="text-green-400">convert_angle_to_pwm</span><span className="text-white">(</span><span className="text-blue-400">servo_position</span><span className="text-white">);</span>
                      <br />
                      <span className="text-white">    &#125; </span><span className="text-purple-400">else if</span> <span className="text-white">(</span><span className="text-blue-400">operation_mode</span> <span className="text-white">==</span> <span className="text-yellow-400">2</span><span className="text-white">) &#123;</span> <span className="text-gray-500">// Mode automatique</span>
                      <br />
                      <span className="text-white">        </span><span className="text-blue-400">automatic_angle</span> <span className="text-white">=</span> <span className="text-green-400">convert_force_to_servo_angle</span><span className="text-white">(</span><span className="text-blue-400">applied_force</span><span className="text-white">);</span>
                      <br />
                      <span className="text-white">        </span><span className="text-blue-400">pwm_duty_cycle</span> <span className="text-white">=</span> <span className="text-green-400">convert_angle_to_pwm</span><span className="text-white">(</span><span className="text-blue-400">automatic_angle</span><span className="text-white">);</span>
                      <br />
                      <span className="text-white">    &#125;</span>
                      <br />
                      <span className="text-white">    </span><span className="text-cyan-400">TIM2</span><span className="text-white">-&gt;</span><span className="text-cyan-400">CCR2</span> <span className="text-white">= (</span><span className="text-purple-400">uint32_t</span><span className="text-white">)</span><span className="text-blue-400">pwm_duty_cycle</span><span className="text-white">;</span>
                      <br />
                      <span className="text-white">&#125;</span>
                    </code>
                  </pre>
                </div>
              </motion.div>

              <motion.div 
                className="grid md:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="glass-dark p-6 rounded-xl border border-green-500/20">
                  <h4 className="text-lg font-semibold text-green-400 mb-4">4 Étapes Essentielles</h4>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-500 text-white text-xs px-2 py-1 rounded font-bold">1</div>
                      <p><strong className="text-green-400">Acquisition:</strong> Lecture ADC avec moyennage, conversion en tension (0-3.3V)</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded font-bold">2</div>
                      <p><strong className="text-blue-400">Traitement:</strong> Conversion tension → masse → force selon calibration</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-purple-500 text-white text-xs px-2 py-1 rounded font-bold">3</div>
                      <p><strong className="text-purple-400">Communication:</strong> Envoi données formatées (V:, M:, F:) via UART</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded font-bold">4</div>
                      <p><strong className="text-orange-400">Contrôle:</strong> Pilotage servo manuel/auto avec signal PWM</p>
                    </div>
                  </div>
                </div>

                <div className="glass-dark p-6 rounded-xl border border-cyan-500/20">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-4">Caractéristiques Techniques</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Facteur de conversion:</span>
                      <span className="text-cyan-400 font-mono">188.68 V/kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Plage force:</span>
                      <span className="text-cyan-400 font-mono">0-5.886N</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Plage servo:</span>
                      <span className="text-cyan-400 font-mono">0-180°</span>
                    </div>
                    <div className="flex justify-between">
                      <span>PWM range:</span>
                      <span className="text-cyan-400 font-mono">1000-6500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fréquence:</span>
                      <span className="text-cyan-400 font-mono">1Hz manuel, 2Hz auto</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold text-purple-400 mb-6">Chaîne de Conversion: Tension → Force → Angle</h4>
                
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <h5 className="text-lg font-semibold text-yellow-400">1. Tension → Masse</h5>
                    <div className="bg-black/50 p-4 rounded-lg border border-yellow-500/20">
                      <pre className="text-xs leading-relaxed">
                        <code>
                          <span className="text-purple-400">float</span> <span className="text-green-400">convert_voltage_to_weight</span><span className="text-white">(</span>
                          <br />
                          <span className="text-white">    </span><span className="text-purple-400">float</span> <span className="text-blue-400">input_voltage</span><span className="text-white">) &#123;</span>
                          <br />
                          <span className="text-white">    </span><span className="text-purple-400">float</span> <span className="text-blue-400">weight_result</span><span className="text-white">;</span>
                          <br />
                          <span className="text-white">    </span><span className="text-purple-400">float</span> <span className="text-blue-400">conversion_factor</span> <span className="text-white">=</span> <span className="text-yellow-400">188.68f</span><span className="text-white">;</span>
                          <br />
                          <span className="text-white">    </span><span className="text-blue-400">weight_result</span> <span className="text-white">=</span> <span className="text-blue-400">conversion_factor</span>
                          <br />
                          <span className="text-white">                  *</span> <span className="text-blue-400">input_voltage</span><span className="text-white">;</span>
                          <br />
                          <span className="text-white">    </span><span className="text-purple-400">return</span> <span className="text-blue-400">weight_result</span><span className="text-white">;</span>
                          <br />
                          <span className="text-white">&#125;</span>
                        </code>
                      </pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h5 className="text-lg font-semibold text-green-400">2. Force → Angle</h5>
                    <div className="bg-black/50 p-4 rounded-lg border border-green-500/20">
                      <pre className="text-xs leading-relaxed">
                        <code>
                          <span className="text-purple-400">int</span> <span className="text-green-400">convert_force_to_servo_angle</span><span className="text-white">(</span>
                          <br />
                          <span className="text-white">    </span><span className="text-purple-400">float</span> <span className="text-blue-400">applied_force</span><span className="text-white">) &#123;</span>
                          <br />
                          <span className="text-white">    </span><span className="text-purple-400">float</span> <span className="text-blue-400">min_force</span> <span className="text-white">=</span> <span className="text-yellow-400">0.0f</span><span className="text-white">;</span>
                          <br />
                          <span className="text-white">    </span><span className="text-purple-400">float</span> <span className="text-blue-400">max_force</span> <span className="text-white">=</span> <span className="text-yellow-400">5.886f</span><span className="text-white">;</span>
                          <br />
                          <span className="text-white">    </span><span className="text-purple-400">if</span> <span className="text-white">(</span><span className="text-blue-400">applied_force</span> <span className="text-white">&lt;</span> <span className="text-blue-400">min_force</span><span className="text-white">)</span>
                          <br />
                          <span className="text-white">        </span><span className="text-blue-400">applied_force</span> <span className="text-white">=</span> <span className="text-blue-400">min_force</span><span className="text-white">;</span>
                          <br />
                          <span className="text-white">    </span><span className="text-purple-400">if</span> <span className="text-white">(</span><span className="text-blue-400">applied_force</span> <span className="text-white">&gt;</span> <span className="text-blue-400">max_force</span><span className="text-white">)</span>
                          <br />
                          <span className="text-white">        </span><span className="text-blue-400">applied_force</span> <span className="text-white">=</span> <span className="text-blue-400">max_force</span><span className="text-white">;</span>
                          <br />
                          <br />
                          <span className="text-white">    </span><span className="text-purple-400">float</span> <span className="text-blue-400">angle</span> <span className="text-white">=</span> <span className="text-cyan-400">SERVO_MIN_ANGLE</span> <span className="text-white">+</span>
                          <br />
                          <span className="text-white">        ((</span><span className="text-blue-400">applied_force</span> <span className="text-white">-</span> <span className="text-blue-400">min_force</span><span className="text-white">) /</span>
                          <br />
                          <span className="text-white">        (</span><span className="text-blue-400">max_force</span> <span className="text-white">-</span> <span className="text-blue-400">min_force</span><span className="text-white">)) *</span>
                          <br />
                          <span className="text-white">        (</span><span className="text-cyan-400">SERVO_MAX_ANGLE</span> <span className="text-white">-</span> <span className="text-cyan-400">SERVO_MIN_ANGLE</span><span className="text-white">);</span>
                          <br />
                          <span className="text-white">    </span><span className="text-purple-400">return</span> <span className="text-white">(</span><span className="text-purple-400">int</span><span className="text-white">)</span><span className="text-blue-400">angle</span><span className="text-white">;</span>
                          <br />
                          <span className="text-white">&#125;</span>
                        </code>
                      </pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h5 className="text-lg font-semibold text-blue-400">3. Angle → PWM</h5>
                    <div className="bg-black/50 p-4 rounded-lg border border-blue-500/20">
                      <pre className="text-xs leading-relaxed">
                        <code>
                          <span className="text-purple-400">float</span> <span className="text-green-400">convert_angle_to_pwm</span><span className="text-white">(</span>
                          <br />
                          <span className="text-white">    </span><span className="text-purple-400">int</span> <span className="text-blue-400">target_angle</span><span className="text-white">) &#123;</span>
                          <br />
                          <span className="text-white">    </span><span className="text-purple-400">if</span> <span className="text-white">(</span><span className="text-blue-400">target_angle</span> <span className="text-white">&lt;</span> <span className="text-cyan-400">SERVO_MIN_ANGLE</span><span className="text-white">)</span>
                          <br />
                          <span className="text-white">        </span><span className="text-blue-400">target_angle</span> <span className="text-white">=</span> <span className="text-cyan-400">SERVO_MIN_ANGLE</span><span className="text-white">;</span>
                          <br />
                          <span className="text-white">    </span><span className="text-purple-400">if</span> <span className="text-white">(</span><span className="text-blue-400">target_angle</span> <span className="text-white">&gt;</span> <span className="text-cyan-400">SERVO_MAX_ANGLE</span><span className="text-white">)</span>
                          <br />
                          <span className="text-white">        </span><span className="text-blue-400">target_angle</span> <span className="text-white">=</span> <span className="text-cyan-400">SERVO_MAX_ANGLE</span><span className="text-white">;</span>
                          <br />
                          <br />
                          <span className="text-white">    </span><span className="text-purple-400">float</span> <span className="text-blue-400">pwm_value</span> <span className="text-white">=</span> <span className="text-cyan-400">PWM_MIN_VALUE</span> <span className="text-white">+</span>
                          <br />
                          <span className="text-white">        (((</span><span className="text-purple-400">float</span><span className="text-white">)(</span><span className="text-blue-400">target_angle</span> <span className="text-white">-</span>
                          <br />
                          <span className="text-white">        </span><span className="text-cyan-400">SERVO_MIN_ANGLE</span><span className="text-white">) /</span>
                          <br />
                          <span className="text-white">        (</span><span className="text-cyan-400">SERVO_MAX_ANGLE</span> <span className="text-white">-</span> <span className="text-cyan-400">SERVO_MIN_ANGLE</span><span className="text-white">))</span>
                          <br />
                          <span className="text-white">        * (</span><span className="text-cyan-400">PWM_MAX_VALUE</span> <span className="text-white">-</span> <span className="text-cyan-400">PWM_MIN_VALUE</span><span className="text-white">));</span>
                          <br />
                          <span className="text-white">    </span><span className="text-purple-400">return</span> <span className="text-blue-400">pwm_value</span><span className="text-white">;</span>
                          <br />
                          <span className="text-white">&#125;</span>
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-purple-900/30 rounded-lg border border-purple-500/30">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <strong className="text-purple-400">Chaîne complète:</strong> Ces trois fonctions forment le cœur du traitement des données. 
                    La masse est calculée selon la tension d'entrée multipliée par le facteur de conversion (sensibilité calibrée). 
                    Le mappage linéaire force→angle [0-5.886N vers 0-180°] et la génération PWM [1000-6500] permettent de commander précisément le servomoteur. 
                    Chaque fonction inclut une limitation des valeurs pour éviter les débordements et protéger le matériel.
                  </p>
                </div>
              </motion.div>
            </div>
          )}

          {activeTab === 'functions' && (
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-6">Fonctions Auxiliaires</h3>
              <motion.div 
                className="glass-dark p-6 rounded-xl border border-slate-600/50 overflow-x-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <pre className="text-sm leading-relaxed">
                  <code>
                    <span className="text-gray-500">// Variables globales</span>
                    <br />
                    <span className="text-purple-400">int</span> <span className="text-blue-400">mode</span> <span className="text-white">=</span> <span className="text-yellow-400">1</span><span className="text-white">;</span>                    <span className="text-gray-500">// 1=Manuel, 2=Auto</span>
                    <br />
                    <span className="text-purple-400">int</span> <span className="text-blue-400">manualWeight</span> <span className="text-white">=</span> <span className="text-yellow-400">0</span><span className="text-white">;</span>            <span className="text-gray-500">// Poids mode manuel (0-500g)</span>
                    <br />
                    <span className="text-purple-400">float</span> <span className="text-blue-400">voltage</span><span className="text-white">,</span> <span className="text-blue-400">masse</span><span className="text-white">,</span> <span className="text-blue-400">force</span><span className="text-white">;</span>     <span className="text-gray-500">// Données capteurs</span>
                    <br />
                    <span className="text-purple-400">int</span> <span className="text-blue-400">servoPos</span> <span className="text-white">=</span> <span className="text-yellow-400">180</span><span className="text-white">;</span>              <span className="text-gray-500">// Position servo actuelle</span>
                    <br />
                    <br />
                    <span className="text-gray-500">// Boucle principale</span>
                    <br />
                    <span className="text-purple-400">while</span> <span className="text-white">(</span><span className="text-yellow-400">1</span><span className="text-white">) &#123;</span>
                    <br />
                    <span className="text-white">    </span><span className="text-gray-500">// Lecture ADC avec moyennage</span>
                    <br />
                    <span className="text-white">    </span><span className="text-blue-400">raw_adc</span> <span className="text-white">=</span> <span className="text-green-400">readADC_Averaged</span><span className="text-white">();</span>
                    <br />
                    <span className="text-white">    </span><span className="text-blue-400">voltage</span> <span className="text-white">= ((</span><span className="text-purple-400">float</span><span className="text-white">)</span><span className="text-blue-400">raw_adc</span> <span className="text-white">*</span> <span className="text-yellow-400">3.3f</span><span className="text-white">) /</span> <span className="text-yellow-400">4095.0f</span><span className="text-white">;</span>
                    <br />
                    <span className="text-white">    </span><span className="text-blue-400">masse</span> <span className="text-white">=</span> <span className="text-green-400">calculateMasse</span><span className="text-white">(</span><span className="text-blue-400">voltage</span><span className="text-white">);</span>  <span className="text-gray-500">// S = 188.68</span>
                    <br />
                    <span className="text-white">    </span><span className="text-blue-400">force</span> <span className="text-white">= (</span><span className="text-blue-400">masse</span> <span className="text-white">*</span> <span className="text-yellow-400">0.001f</span><span className="text-white">) *</span> <span className="text-cyan-400">G</span><span className="text-white">;</span>     <span className="text-gray-500">// G = 9.81</span>
                    <br />
                    <br />
                    <span className="text-white">    </span><span className="text-purple-400">if</span> <span className="text-white">(</span><span className="text-blue-400">mode</span> <span className="text-white">==</span> <span className="text-yellow-400">1</span><span className="text-white">) &#123;</span>
                    <br />
                    <span className="text-white">        </span><span className="text-gray-500">// MODE MANUEL: utiliser manualWeight du slider</span>
                    <br />
                    <span className="text-white">        </span><span className="text-purple-400">float</span> <span className="text-blue-400">manualForce</span> <span className="text-white">= (</span><span className="text-blue-400">manualWeight</span> <span className="text-white">*</span> <span className="text-yellow-400">0.001f</span><span className="text-white">) *</span> <span className="text-cyan-400">G</span><span className="text-white">;</span>
                    <br />
                    <span className="text-white">        </span><span className="text-purple-400">float</span> <span className="text-blue-400">simulatedVoltage</span> <span className="text-white">= (</span><span className="text-purple-400">float</span><span className="text-white">)</span><span className="text-blue-400">manualWeight</span> <span className="text-white">/</span> <span className="text-yellow-400">188.68f</span><span className="text-white">;</span>
                    <br />
                    <br />
                    <span className="text-white">        </span><span className="text-gray-500">// Données simulées pour IHM</span>
                    <br />
                    <span className="text-white">        </span><span className="text-blue-400">v_int</span> <span className="text-white">= (</span><span className="text-purple-400">int</span><span className="text-white">)(</span><span className="text-blue-400">simulatedVoltage</span> <span className="text-white">*</span> <span className="text-yellow-400">1000</span><span className="text-white">);</span>
                    <br />
                    <span className="text-white">        </span><span className="text-blue-400">m_int</span> <span className="text-white">=</span> <span className="text-blue-400">manualWeight</span><span className="text-white">;</span>
                    <br />
                    <span className="text-white">        </span><span className="text-blue-400">f_int</span> <span className="text-white">= (</span><span className="text-purple-400">int</span><span className="text-white">)(</span><span className="text-blue-400">manualForce</span> <span className="text-white">*</span> <span className="text-yellow-400">1000</span><span className="text-white">);</span>
                    <br />
                    <br />
                    <span className="text-white">    &#125; </span><span className="text-purple-400">else</span> <span className="text-white">&#123;</span>
                    <br />
                    <span className="text-white">        </span><span className="text-gray-500">// MODE AUTO: utiliser données réelles capteur</span>
                    <br />
                    <span className="text-white">        </span><span className="text-blue-400">angleAuto</span> <span className="text-white">=</span> <span className="text-green-400">forceToAngle</span><span className="text-white">(</span><span className="text-blue-400">force</span><span className="text-white">);</span>
                    <br />
                    <span className="text-white">        </span><span className="text-blue-400">duty</span> <span className="text-white">=</span> <span className="text-green-400">servo_writeAngle</span><span className="text-white">(</span><span className="text-blue-400">angleAuto</span><span className="text-white">);</span>
                    <br />
                    <span className="text-white">        </span><span className="text-cyan-400">TIM2</span><span className="text-white">-&gt;</span><span className="text-cyan-400">CCR2</span> <span className="text-white">= (</span><span className="text-purple-400">uint32_t</span><span className="text-white">)</span><span className="text-blue-400">duty</span><span className="text-white">;</span>
                    <br />
                    <span className="text-white">        </span><span className="text-blue-400">servoPos</span> <span className="text-white">=</span> <span className="text-blue-400">angleAuto</span><span className="text-white">;</span>
                    <br />
                    <br />
                    <span className="text-white">        </span><span className="text-blue-400">v_int</span> <span className="text-white">= (</span><span className="text-purple-400">int</span><span className="text-white">)(</span><span className="text-blue-400">voltage</span> <span className="text-white">*</span> <span className="text-yellow-400">1000</span><span className="text-white">);</span>
                    <br />
                    <span className="text-white">        </span><span className="text-blue-400">m_int</span> <span className="text-white">= (</span><span className="text-purple-400">int</span><span className="text-white">)</span><span className="text-blue-400">masse</span><span className="text-white">;</span>
                    <br />
                    <span className="text-white">        </span><span className="text-blue-400">f_int</span> <span className="text-white">= (</span><span className="text-purple-400">int</span><span className="text-white">)(</span><span className="text-blue-400">force</span> <span className="text-white">*</span> <span className="text-yellow-400">1000</span><span className="text-white">);</span>
                    <br />
                    <span className="text-white">    &#125;</span>
                    <br />
                    <br />
                    <span className="text-gray-500">    // Envoi données vers IHM: V:xxx M:xxx F:xxx A:xxx</span>
                    <br />
                    <span className="text-white">    </span><span className="text-green-400">sprintf</span><span className="text-white">(</span><span className="text-blue-400">msg</span><span className="text-white">,</span> <span className="text-orange-400">"V:%d.%03d\\r\\nM:%d\\r\\nF:%d.%03d\\r\\nA:%d\\r\\n"</span><span className="text-white">,</span>
                    <br />
                    <span className="text-white">            </span><span className="text-blue-400">v_int</span><span className="text-white">/</span><span className="text-yellow-400">1000</span><span className="text-white">,</span> <span className="text-blue-400">v_int</span><span className="text-white">%</span><span className="text-yellow-400">1000</span><span className="text-white">,</span> <span className="text-blue-400">m_int</span><span className="text-white">,</span>
                    <br />
                    <span className="text-white">            </span><span className="text-blue-400">f_int</span><span className="text-white">/</span><span className="text-yellow-400">1000</span><span className="text-white">,</span> <span className="text-blue-400">f_int</span><span className="text-white">%</span><span className="text-yellow-400">1000</span><span className="text-white">,</span> <span className="text-blue-400">servoPos</span><span className="text-white">);</span>
                    <br />
                    <span className="text-white">    </span><span className="text-green-400">HAL_UART_Transmit</span><span className="text-white">(&amp;</span><span className="text-cyan-400">huart2</span><span className="text-white">, (</span><span className="text-purple-400">uint8_t</span><span className="text-white">*)</span><span className="text-blue-400">msg</span><span className="text-white">, </span><span className="text-green-400">strlen</span><span className="text-white">(</span><span className="text-blue-400">msg</span><span className="text-white">), </span><span className="text-cyan-400">HAL_MAX_DELAY</span><span className="text-white">);</span>
                    <br />
                    <br />
                    <span className="text-white">    </span><span className="text-green-400">HAL_Delay</span><span className="text-white">(</span><span className="text-blue-400">mode</span> <span className="text-white">==</span> <span className="text-yellow-400">1</span> <span className="text-white">?</span> <span className="text-yellow-400">1000</span> <span className="text-white">:</span> <span className="text-yellow-400">500</span><span className="text-white">);</span>  <span className="text-gray-500">// 1s manuel, 0.5s auto</span>
                    <br />
                    <span className="text-white">&#125;</span>
                  </code>
                </pre>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProgrammingSection;