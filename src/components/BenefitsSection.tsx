import { Crown, Target, Users } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Crown,
      title: "Posicione-se como autoridade",
      description: "Desenvolva uma imagem que transmite credibilidade e expertise no seu segmento de atuação."
    },
    {
      icon: Target,
      title: "Destaque suas características",
      description: "Identifique e potencialize os diferenciais que fazem você único no mercado."
    },
    {
      icon: Users,
      title: "Atraia clientes qualificados",
      description: "Construa uma presença que magnetiza o público ideal para o seu negócio."
    }
  ];

  return (
    <section className="bg-primary py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Transforme sua <span className="text-golden">Presença Profissional</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Três pilares fundamentais para construir uma imagem de autoridade no mercado
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-full border-3 border-golden flex items-center justify-center group-hover:bg-golden group-hover:border-golden-dark transition-all duration-300">
                  <benefit.icon className="w-10 h-10 text-golden group-hover:text-primary transition-colors duration-300" />
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto rounded-full border border-golden/30 animate-pulse"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-golden transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-white/80 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;