const BasicHero = () => {
  return (
    <section className="flex relative justify-center overflow-hidden px-10">
      <div className="flex max-h-80 max-w-7xl">
        <img src="/images/pic1.jpg" alt="" className="rounded-3xl shadow-lg" />
        <div className="absolute top-8 left-20 bg-white shadow-xl rounded-2xl p-4 w-48">
          <h3 className="font-semibold text-gray-900 text-3xl font-space">
            About Us
          </h3>
        </div>
      </div>
    </section>
  );
};

export default BasicHero;
