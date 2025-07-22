import { Button } from './ui/button';
import { Search } from 'lucide-react';


const ProfessionalAppeal = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-dark py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight">
              ATENÇÃO <span className="text-golden">PROFISSIONAIS</span> E{' '}
              <span className="text-golden">EMPRESAS!</span>
            </h2>
            
            <div className="space-y-6 text-white/90 text-lg">
              <p>
                Esta é uma <strong className="text-golden">oferta única</strong> para 
                profissionais que querem se destacar no mercado e construir uma imagem 
                de autoridade que atrai clientes qualificados.
              </p>
              
              <p>
                O <strong className="text-golden font-serif">Recomeço</strong> é mais 
                que um evento de fotografia. É uma experiência transformadora que vai 
                reposicionar sua marca pessoal no mercado.
              </p>
              
              <div className="bg-black/30 p-6 rounded-lg border border-golden/20">
                <p className="text-golden font-semibold mb-2">
                  ✨ Transformação Garantida
                </p>
                <p className="text-sm">
                  Saia do evento com uma nova identidade visual, posicionamento 
                  estratégico e a confiança para se apresentar como a autoridade 
                  que você é no seu segmento.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <Button 
                variant="cta" 
                size="xl"
                onClick={() => scrollToSection('inscricoes')}
                className="w-full md:w-auto"
              >
                <Search className="w-5 h-5" />
                Quero um Recomeço!
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-gold opacity-20 rounded-lg transform rotate-3"></div>
              <img 
                src="/lovable-uploads/b8a2318a-3d13-47ea-9487-de7d52981cf1.png"
                alt="Profissional de sucesso"
                className="relative w-full h-auto rounded-lg shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalAppeal;