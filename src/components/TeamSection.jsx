import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Activity, Target } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    { 
      name: "Ayoub Machkour", 
      role: "Développement Web & Modélisation 3D", 
      avatar: "AM",
      skills: ["React.js & Three.js", "Interface IHM", "Modélisation 3D", "Communication STM32"],
      color: "from-blue-500 to-cyan-500",
      description: "Créateur du site web portfolio et de l'interface de visualisation 3D"
    },
    { 
      name: "Antoine VERMANDER", 
      role: "Électronique & Design PCB", 
      avatar: "AV",
      skills: ["Schémas électroniques", "Design PCB Eagle", "Soudure CMS", "Étude RDM"],
      color: "from-green-500 to-emerald-500",
      description: "Conception de circuits et réalisation de cartes électroniques"
    },
    { 
      name: "Benjamin HEYSCH", 
      role: "Électronique & Validation", 
      avatar: "BH",
      skills: ["Schémas électroniques", "Design PCB Eagle", "Soudure CMS", "Étude RDM"],
      color: "from-purple-500 to-pink-500",
      description: "Conception électronique et validation des circuits"
    },
    { 
      name: "Soufiane EL MAMSAOUI", 
      role: "Programmation STM32 & Câblage", 
      avatar: "SE",
      skills: ["Code STM32 C", "Câblage système", "Étude RDM", "Tests validation"],
      color: "from-orange-500 to-red-500",
      description: "Développeur embarqué et responsable de l'intégration système"
    }];

  return (
    <section id="equipe" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Équipe Groupe 4 - ENIB
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Étudiants ingénieurs ENIB 
          </p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 glass text-blue-400 px-4 py-2 rounded-full border border-blue-500/30">
              <Camera className="w-4 h-4" />
              <span>École Nationale d'Ingénieurs de Brest</span>
            </div>
            <div className="flex items-center space-x-2 glass text-green-400 px-4 py-2 rounded-full border border-green-500/30">
              <Activity className="w-4 h-4" />
              <span>Projet IPS - 2025</span>
            </div>
            <div className="flex items-center space-x-2 glass text-purple-400 px-4 py-2 rounded-full border border-purple-500/30">
              <Target className="w-4 h-4" />
              <span>Semestre 7</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="card hover:border-orange-400/50 group-hover:scale-105 group-hover:-translate-y-4 transition-all duration-500"
                whileHover={{ y: -10 }}
              >
                <div className="text-center">
                  <motion.div 
                    className={`w-20 h-20 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {member.avatar}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{member.role}</p>
                  
                  <p className="text-gray-300 text-xs mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.description}
                  </p>
                  
                  <div className="space-y-1">
                    {member.skills.map((skill, skillIndex) => (
                      <motion.span 
                        key={skillIndex}
                        className="inline-block px-2 py-1 glass text-gray-300 text-xs rounded-full mr-1 mb-1 hover:bg-slate-600/50 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="card border-orange-500/20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">ENIB - École Nationale d'Ingénieurs de Brest</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "🎓", title: "École Accréditée CTI", desc:  "1 des 204 écoles d'ingénieurs françaises" },
              { icon: "⚡", title: "Spécialités ENIB" , desc:  "Électronique, Informatique, Mécatronique" },
              { icon: "🔬", title: "Institut Mines Télécom", desc: "École affiliée IMT" },
              { icon: "🌊", title: "Alliance Universitaire Bretagne", desc: "Membre fondateur AUB" }
            ].map((info, index) => (
              <motion.div 
                key={index} 
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="glass p-4 rounded-xl border border-slate-700/50 group-hover:border-orange-400/50 transition-all duration-300">
                  <motion.div 
                    className="text-3xl mb-2"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {info.icon}
                  </motion.div>
                  <h4 className="text-orange-400 font-semibold mb-1">{info.title}</h4>
                  <p className="text-gray-400 text-sm">{info.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;