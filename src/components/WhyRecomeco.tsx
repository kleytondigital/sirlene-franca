import { Camera, User, Lightbulb } from 'lucide-react';

const WhyRecomeco = () => {
  const reasons = [
    {
      icon: User,
      title: "Aplicar arquétipo",
      description: "Identifique e incorpore o arquétipo que melhor representa sua essência profissional e ressoa com seu público-alvo."
    },
    {
      icon: Camera,
      title: "Retrato como primeiro passo",
      description: "Seu retrato profissional é a primeira impressão. Criamos imagens que comunicam autoridade e autenticidade."
    },
    {
      icon: Lightbulb,
      title: "Consultoria de imagem estratégica",
      description: "Receba orientações personalizadas sobre como usar sua nova imagem para potencializar seus resultados de negócio."
    }
  ];

  return (
    <section className="bg-primary py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-serif text-golden mb-4 uppercase tracking-wider">
            Por que você deve fazer seus retratos no evento
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white">
            RECOMEÇO
          </h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-muted/50 p-8 rounded-xl border border-golden/20 hover:border-golden/40 transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-golden/10 border-2 border-golden flex items-center justify-center group-hover:bg-golden group-hover:scale-110 transition-all duration-300">
                  <reason.icon className="w-8 h-8 text-golden group-hover:text-primary transition-colors duration-300" />
                </div>
              </div>
              
              <h4 className="text-xl font-semibold text-golden mb-4 text-center">
                {reason.title}
              </h4>
              
              <p className="text-white/80 leading-relaxed text-center">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-block bg-golden/10 px-8 py-4 rounded-lg border border-golden/30">
            <p className="text-golden font-semibold">
              💎 Metodologia exclusiva desenvolvida por Fran Amaral
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRecomeco;