import { Sparkles, Eye, Palette } from 'lucide-react';

const WhyRecomeco = () => {
  const modules = [
    {
      number: "1",
      icon: Sparkles,
      title: "Preparação da Pele",
      description: "Aprenda como limpar, hidratar e preparar sua pele com os produtos certos — inclusive usando o que você já tem em casa."
    },
    {
      number: "2",
      icon: Palette,
      title: "Base e Corretivo",
      description: "Descubra o tom ideal para sua pele e como aplicar com acabamento leve, natural ou mais elaborado."
    },
    {
      number: "3",
      icon: Eye,
      title: "Contorno e Iluminador",
      description: "Realce seus traços com técnicas simples e eficazes para qualquer ocasião."
    },
    {
      number: "4",
      icon: Eye,
      title: "Esfumado nos Olhos",
      description: "Aprenda o passo a passo do esfumado neutro, pontos de luz e aplicação de sombra, mesmo se for iniciante."
    },
    {
      number: "5",
      icon: Eye,
      title: "Cílios e Delineado",
      description: "Domine a aplicação dos cílios e faça um delineado fino que valoriza seu olhar."
    },
    {
      number: "🎁",
      icon: Sparkles,
      title: "Bônus Exclusivos",
      description: "Delineado gatinho sem mistérios e maquiagem rápida para o dia a dia com foco no protetor solar."
    }
  ];

  return (
    <section className="bg-primary py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-golden mb-4">
            O QUE VOCÊ VAI APRENDER
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Conteúdo completo e exclusivo desenvolvido ao longo de 10 anos de experiência
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {modules.map((module, index) => (
            <div key={index} className="bg-muted/50 p-8 rounded-xl border border-golden/20 hover:border-golden/40 transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-golden/10 border-2 border-golden flex items-center justify-center group-hover:bg-golden group-hover:scale-110 transition-all duration-300 mb-2">
                  <span className="text-2xl font-bold text-golden group-hover:text-primary transition-colors duration-300">
                    {module.number}
                  </span>
                </div>
                <module.icon className="w-6 h-6 text-golden mx-auto" />
              </div>
              
              <h4 className="text-xl font-semibold text-golden mb-4 text-center">
                {module.title}
              </h4>
              
              <p className="text-white/80 leading-relaxed text-center text-sm">
                {module.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-block bg-golden/10 px-8 py-4 rounded-lg border border-golden/30">
            <p className="text-golden font-semibold">
              💎 Metodologia exclusiva desenvolvida por Sirlene Franca
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRecomeco;