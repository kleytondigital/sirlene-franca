import HeroSection from '../components/HeroSection';
import VSLSection from '../components/VSLSection';
import ProfessionalAppeal from '../components/ProfessionalAppeal';
import BenefitsSection from '../components/BenefitsSection';
import WhyRecomeco from '../components/WhyRecomeco';
import LastEdition from '../components/LastEdition';
import CreatorSection from '../components/CreatorSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <VSLSection />
      <ProfessionalAppeal />
      <BenefitsSection />
      <WhyRecomeco />
      <CreatorSection />
      <Footer />
    </div>
  );
};

export default Index;
