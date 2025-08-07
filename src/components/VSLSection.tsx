import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

const VSLSection = () => {
  const { settings } = useAdmin();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = async () => {
    if (videoRef.current) {
      try {
        if (isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        } else {
          await videoRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.error('Erro ao reproduzir vídeo:', error);
      }
    }
  };

  const isYouTube = settings.vslVideoLink.includes('youtube.com') || settings.vslVideoLink.includes('youtu.be');

  // Se não tem link configurado, não renderiza a seção
  if (!settings.vslVideoLink)  {
    settings.vslVideoLink = 'https://www.youtube.com/embed/D0CyyQo3sPU?si=wSjv4eNeaQubkMS5';
    
  }

  return (
    <section className="py-16 bg-gradient-to-b from-primary to-primary/95">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-golden mb-4">
            Assista ao Vídeo Completo
          </h2>
          <p className="text-white/90 text-lg">
            Descubra como transformar sua autoestima através da automaquiagem
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            className="relative bg-black rounded-lg overflow-hidden shadow-2xl aspect-video cursor-pointer group"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            {isYouTube ? (
              <iframe
                src={`${settings.vslVideoLink}${settings.vslVideoLink.includes('?') ? '&' : '?'}modestbranding=1&showinfo=0&rel=0&controls=0&disablekb=1&iv_load_policy=3&cc_load_policy=0&fs=0`}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="VSL Video"
              />
            ) : (
              <>
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src={settings.vslVideoLink}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onLoadedMetadata={() => console.log('Vídeo carregado')}
                  onError={(e) => console.error('Erro no vídeo:', e)}
                  poster="/lovable-uploads/432e74cd-d8da-4274-960c-8e5e4f116bb3.png"
                  preload="metadata"
                />
                
                {/* Controles customizados */}
                <div 
                  className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${
                    showControls ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <button
                    onClick={handlePlayPause}
                    className="bg-golden/20 backdrop-blur-sm border-2 border-golden text-golden rounded-full p-6 hover:bg-golden/30 transition-all duration-300 hover:scale-110"
                  >
                    {isPlaying ? (
                      <Pause className="w-12 h-12" />
                    ) : (
                      <Play className="w-12 h-12 ml-1" />
                    )}
                  </button>
                </div>

                {/* Indicador de play quando pausado */}
                {!isPlaying && !showControls && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-golden/90 rounded-full p-4">
                      <Play className="w-8 h-8 text-primary ml-1" />
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;