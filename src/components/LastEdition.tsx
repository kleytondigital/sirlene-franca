import { Play } from 'lucide-react';
import { Button } from './ui/button';

const LastEdition = () => {
  return (
    <section className="bg-primary py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4">
          CONFIRA O QUE AS ALUNAS ESTÃO{' '}
          <span className="text-neon-yellow">FALANDO DO CURSO</span>
        </h2>
        
        <p className="text-white/80 text-lg mb-12 max-w-3xl mx-auto">
          Veja os depoimentos e transformações reais de mulheres que fizeram o curso 
          e mudaram completamente sua relação com a beleza e autoestima.
        </p>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-video bg-gradient-dark rounded-xl overflow-hidden shadow-2xl border border-golden/20">
            <div className="w-full h-full flex items-center justify-center relative group cursor-pointer">
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-golden/20 border-2 border-golden flex items-center justify-center group-hover:bg-golden group-hover:scale-110 transition-all duration-300">
                  <Play className="w-10 h-10 text-golden group-hover:text-primary transition-colors duration-300 ml-1" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">
                  Assista aos depoimentos
                </h3>
                <p className="text-white/80">
                  Transformações reais das nossas alunas
                </p>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-golden/5 to-transparent opacity-50"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-muted/30 p-6 rounded-lg border border-golden/20">
              <div className="text-golden text-2xl font-bold mb-2">+500</div>
              <div className="text-white/80">Alunas formadas</div>
            </div>
            
            <div className="bg-muted/30 p-6 rounded-lg border border-golden/20">
              <div className="text-golden text-2xl font-bold mb-2">98%</div>
              <div className="text-white/80">Taxa de satisfação</div>
            </div>
            
            <div className="bg-muted/30 p-6 rounded-lg border border-golden/20">
              <div className="text-golden text-2xl font-bold mb-2">5★</div>
              <div className="text-white/80">Avaliação média</div>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <Button variant="hero" size="xl">
            Ver Mais Depoimentos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LastEdition;