import Hero from "../../components/heroes/homeHero";
import FeaturesSection from "../../components/sections/features";
import AboutSection from "../../components/sections/about";
import ServicesSection from "../../components/sections/services";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturesSection />
      <AboutSection />
      <ServicesSection />
    </div>
  );
};

export default HomePage;
