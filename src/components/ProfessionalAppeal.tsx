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
              ATENÇÃO <span className="text-golden">MULHERES!</span>
            </h2>
            
            <div className="space-y-6 text-white/90 text-lg">
              <p>
                Você sonha em se maquiar sozinha mas sempre desiste na primeira tentativa? 
                Chegou a hora de aprender de verdade! Com <strong className="text-golden">Sirlene Franca</strong>, 
                maquiadora profissional há mais de 10 anos, você vai dominar a arte da automaquiagem 
                e elevar sua autoestima todos os dias.
              </p>
              
              <p>
                O <strong className="text-golden font-serif">Curso de Automaquiagem</strong> é mais 
                que um curso online. É uma experiência transformadora que vai 
                revolucionar sua relação com a beleza.
              </p>
              
              <div className="bg-black/30 p-6 rounded-lg border border-golden/20">
                <p className="text-golden font-semibold mb-2">
                  ✨ Transformação Garantida
                </p>
                <p className="text-sm">
                  Saia do curso sabendo se maquiar para qualquer ocasião, 
                  com técnicas profissionais adaptadas para o dia a dia 
                  e a confiança para se sentir linda sempre.
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
                Quero me Inscrever!
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-gold opacity-20 rounded-lg transform rotate-3"></div>
              <img 
                src="/lovable-uploads/b8a2318a-3d13-47ea-9487-de7d52981cf1.png"
                alt="Mulher se maquiando"
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