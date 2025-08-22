import { motion } from "framer-motion";
import { LuCircleCheckBig } from "react-icons/lu";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <img
        src="/images/pic1.jpg"
        alt="Background"
        className="absolute inset-0 h-full w-full sd:w-1/2 object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/50 to-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <h1 className="md:text-3xl sm:text-2xl lg:text-4xl font-space font-extrabold tracking-tight leading-tight text-gray-200">
            Your Trusted Partner in <span className="text-yellow-100">IT</span>,
            Supply & Delivery
          </h1>
          <p className=" hidden sm:block backdrop-blur-md bg-black/20 border border-black/20 rounded-lg shadow-md shadow-gray-900 p-5 mt-6 text-gray-300 text-lg sm:text-xl max-w-xl">
            <strong className="text-yellow-100 font-amped text-sm">
              Riobrite Pty Ltd
            </strong>{" "}
            provides integrated technology solutions and end-to-end procurement
            & logistics for Government and Private Sector clients across South
            Africa.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-yellow-100 text-white px-6 py-3 text-base font-semibold shadow-md hover:bg-yellow-175 transition">
              Explore Services
            </button>
            <button className="rounded-2xl bg-black/70 px-6 py-3 text-base font-semibold shadow border border-gray-800 hover:bg-black/90 hover:text-yellow-100  transition">
              Contact Us
            </button>
          </div>

          <div className="mt-6 flex items-center gap-3 text-sm text-gray-300">
            <LuCircleCheckBig className="h-5 w-5 text-blue-100" />
            Compliant <span className="text-blue-100 text-xl">•</span>{" "}
            BEE-aligned <span className="text-blue-100 text-xl">•</span>{" "}
            Tender-ready
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
