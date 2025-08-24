type HeroProps = {
  heading: string;

  imageSrc: string;
};
const BasicHero = ({ heading, imageSrc }: HeroProps) => {
  return (
    <section className="flex relative justify-center overflow-hidden px-10">
      <div className="flex max-h-80 max-w-7xl">
        <img
          src={imageSrc}
          alt=""
          className="h-full w-full sd:w-1/2 shadow-lg"
        />

        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/70 to-black"></div>
        <div className="absolute top-5 left-2 bg-black/70 shadow-xl rounded-2xl p-4 sm:top-5 sm:left-10 md:top-8 md:left-20">
          <h3 className="font-semibold text-white text-xl font-amped sm:text-2xl">
            {heading}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default BasicHero;
