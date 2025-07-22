import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';
import franAmaralPortrait from '../assets/fran-amaral-portrait.jpg';

const CreatorSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-primary py-16 lg:py-24" id="sobre">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-gold opacity-20 rounded-lg transform -rotate-2"></div>
              <img 
                src={franAmaralPortrait}
                alt="Fran Amaral - Idealizadora do Projeto Recomeço"
                className="relative w-full h-auto rounded-lg shadow-2xl filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <p className="text-golden font-serif text-xl mb-2 italic">por</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
                Fran Amaral
              </h2>
            </div>
            
            <div className="space-y-6 text-white/90 text-lg leading-relaxed">
              <p>
                Depois de anos ajudando profissionais a se destacarem no mercado, 
                percebi que a <strong className="text-golden">transformação real</strong> acontece 
                quando alinhamos identidade, propósito e imagem.
              </p>
              
              <p>
                O <strong className="text-golden font-serif">Recomeço</strong> nasceu da 
                necessidade de criar um espaço onde profissionais pudessem 
                <strong className="text-golden"> redescobrir seu poder</strong> e se 
                posicionar como as autoridades que já são.
              </p>
              
              <p>
                Não é apenas sobre fotografia. É sobre <strong className="text-golden">
                archetypo, estratégia e transformação</strong>. É sobre você assumir 
                o protagonismo da sua própria história profissional.
              </p>
              
              <blockquote className="border-l-4 border-golden pl-6 py-4 bg-muted/20 rounded-r-lg">
                <p className="text-golden italic font-serif text-xl">
                  "Sua imagem é sua primeira oportunidade de causar impacto. 
                  Vamos fazer com que ela conte a história certa."
                </p>
              </blockquote>
            </div>
            
            <div className="mt-8">
              <Button 
                variant="cta" 
                size="xl"
                onClick={() => scrollToSection('inscricoes')}
                className="w-full md:w-auto"
              >
                <Sparkles className="w-5 h-5" />
                Ative seu Poder
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;