import { Heart, Star, Users } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Star,
      title: "Técnicas Profissionais",
      description: "Aprenda com 10 anos de experiência em maquiagem profissional e domine as técnicas que realmente funcionam."
    },
    {
      icon: Heart,
      title: "Autoestima Elevada",
      description: "Desperte sua confiança e beleza natural todos os dias com maquiagens que valorizam seus traços únicos."
    },
    {
      icon: Users,
      title: "Método Simples",
      description: "Passo a passo didático para qualquer nível de habilidade, do iniciante ao intermediário."
    }
  ];

  return (
    <section className="bg-primary py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Transforme sua <span className="text-golden">Relação com a Beleza</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Três pilares fundamentais para dominar a arte da automaquiagem
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