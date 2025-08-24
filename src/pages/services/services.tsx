import ServicesSection from "../../components/sections/services";
import BasicHero from "../../components/heroes/basicHero";

const ServicesPage = () => {
  return (
    <>
      <BasicHero heading={"Services"} imageSrc={"/images/pic2.webp"} />
      <ServicesSection />
    </>
  );
};

export default ServicesPage;
