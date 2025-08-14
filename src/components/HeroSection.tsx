
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-end justify-center bg-cover bg-center bg-no-repeat pb-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(/lovable-uploads/432e74cd-d8da-4274-960c-8e5e4f116bb3.png)`
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-serif text-white mb-2 tracking-wide font-medium">
            CURSO DE
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-golden mb-6 tracking-wider font-bold">
            AUTOMAQUIAGEM
          </h2>
          
 
          
          <div className="mt-8">
            <p className="text-xs md:text-sm text-white opacity-80 uppercase tracking-widest">
              Transforme sua autoestima através da beleza
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
