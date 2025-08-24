import AboutSection from "../../components/sections/about";
import BasicHero from "../../components/heroes/basicHero";

const AboutPage = () => {
  return (
    <>
      <BasicHero heading={"About Us"} imageSrc={"/images/pic6.webp"} />
      <AboutSection />
    </>
  );
};

export default AboutPage;
