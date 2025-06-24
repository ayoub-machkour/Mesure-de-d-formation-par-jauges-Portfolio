import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, Download } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = (videoRef) => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="demonstration" className="py-20 bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              Démonstration Vidéo
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Découvrez notre système en action : contrôle manuel, mode automatique et interface temps réel
          </p>
        </motion.div>

        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative group">
            {/* Container vidéo principal */}
            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-red-500/30">
              <video 
                className="w-full h-full object-cover"
                controls
                poster="/images/video-poster.jpg"
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/images/video.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture vidéo.
              </video>
              
              {/* Overlay titre */}
              <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-sm rounded-xl px-4 py-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div>
                    <h3 className="text-white font-bold">Système Jauges de Contrainte</h3>
                    <p className="text-gray-300 text-sm">Groupe 4 - ENIB 2025</p>
                  </div>
                </div>
              </div>

              {/* Indicateur durée */}
              <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm rounded-xl px-3 py-2">
                <p className="text-white font-semibold">⏱️ 1:38</p>
              </div>

              {/* Overlay qualité */}
              <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-sm rounded-xl px-3 py-2">
                <p className="text-white text-sm font-semibold">🎬 HD</p>
              </div>
            </div>

            {/* Actions supplémentaires */}
            <motion.div 
              className="mt-8 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="/images/video.mp4" 
                download="demonstration-groupe4-enib.mp4"
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                <span>Télécharger la vidéo</span>
              </motion.a>
              
              <motion.button 
                className="flex items-center space-x-2 px-6 py-3 bg-slate-800/50 border border-slate-600/50 text-white font-semibold rounded-xl hover:bg-slate-700/50 hover:border-slate-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const video = document.querySelector('video');
                  if (video) {
                    if (video.requestFullscreen) {
                      video.requestFullscreen();
                    } else if (video.webkitRequestFullscreen) {
                      video.webkitRequestFullscreen();
                    } else if (video.msRequestFullscreen) {
                      video.msRequestFullscreen();
                    }
                  }
                }}
              >
                <Maximize2 className="w-5 h-5" />
                <span>Plein écran</span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Informations techniques */}
        <motion.div 
          className="mt-16 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="card border-red-500/20 text-center">
            <h4 className="text-xl font-bold text-red-400 mb-4">🎬 Production</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>• Tournage haute définition</p>
              <p>• Montage avec transitions fluides</p>
              <p>• Audio synchronisé</p>
              <p>• Démonstration complète</p>
            </div>
          </div>

          <div className="card border-green-500/20 text-center">
            <h4 className="text-xl font-bold text-green-400 mb-4">⚡ Démonstrations</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>• Tests du mode manuel complet</p>
              <p>• Validation mode automatique</p>
              <p>• Interface web temps réel</p>
              <p>• Mesures de précision</p>
            </div>
          </div>

          <div className="card border-blue-500/20 text-center">
            <h4 className="text-xl font-bold text-blue-400 mb-4">📊 Performances</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>• Réactivité système: {"<"}100ms</p>
              <p>• Précision mesures: ±1%</p>
              <p>• Plage fonctionnelle: 0-500g</p>
              <p>• Stabilité excellente</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;