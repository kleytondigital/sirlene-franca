
import { Button } from './ui/button';
import { useAdmin } from '../contexts/AdminContext';

const CreatorSection = () => {
  const { settings } = useAdmin();

  const handleCTAClick = () => {
    // Track Facebook Pixel event if configured
    if (settings.facebookPixel && typeof window.fbq !== 'undefined') {
      window.fbq('track', 'Lead');
    }
    
    if (settings.checkoutLink.startsWith('#')) {
      const element = document.getElementById(settings.checkoutLink.substring(1));
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(settings.checkoutLink, '_blank');
    }
  };

  return (
    <section className="bg-primary py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-golden mb-4">
            Conheça Sirlene Franca
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-gold opacity-20 rounded-lg transform -rotate-3"></div>
              <img 
                src="/lovable-uploads/624a7cdd-5351-4961-81c6-1c66e6238993.png"
                alt="Sirlene Franca - Maquiadora Profissional"
                className="relative w-full h-auto rounded-lg shadow-2xl filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-serif text-golden mb-4">Maquiadora Profissional Certificada</h3>
              <p className="text-white/90 leading-relaxed mb-4">
                Maquiadora profissional há mais de 10 anos, Sirlene Franca se destaca pela didática acessível, 
                paixão pela beleza real e compromisso com a autoestima feminina.
              </p>
              <p className="text-white/90 leading-relaxed mb-6">
                Ao longo da sua carreira, já atendeu centenas de mulheres em produções especiais como noivas, 
                eventos e ensaios, além de formar dezenas de alunas por meio de cursos presenciais e online.
              </p>
              <div className="bg-black/30 p-4 rounded-lg border border-golden/20 mb-6">
                <p className="text-golden font-semibold text-sm">
                  🏆 Especialista em Técnicas de Automaquiagem
                </p>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-golden hover:bg-golden/90 text-black font-semibold px-8 py-3 text-lg"
              onClick={handleCTAClick}
            >
              Quero Aprender com a Sirlene
            </Button>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-golden font-serif text-lg italic">
            por Sirlene Franca
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
