import CountdownTimer from './CountdownTimer';
import heroBackground from '../assets/hero-background.jpg';

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroBackground})`
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif text-white mb-4 tracking-wide">
            PRÓXIMA EDIÇÃO DO
          </h1>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-golden mb-8 tracking-wider">
            RECOMEÇO
          </h2>
          
          <div className="mb-8">
            <p className="text-lg md:text-xl text-white mb-6 opacity-90">
              14 de Maio de 2025
            </p>
            <CountdownTimer />
          </div>
          
          <div className="mt-12">
            <p className="text-sm md:text-base text-white opacity-80 uppercase tracking-widest">
              O evento que transforma profissionais em autoridades
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;