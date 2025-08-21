import React from "react";
import { motion } from "framer-motion";
import {
  LuCircleCheckBig,
  LuCpu,
  LuLock,
  LuNetwork,
  LuPackage,
} from "react-icons/lu";

type CardProps = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
};

function Card({ icon: Icon, title, desc }: CardProps) {
  return (
    <div className="rounded-2xl border p-4 shadow-sm bg-white">
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-xl bg-yellow-50 text-yellow-150 grid place-content-center">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-sm text-gray-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 pt-20">
      <img
        src="/images/pic11.svg"
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Your Trusted Partner in <span className="text-yellow-500">IT</span>,
            Supply & Delivery
          </h1>
          <p className="mt-6 text-gray-700 text-lg sm:text-xl max-w-xl">
            Riobrite Pty Ltd provides integrated technology solutions and
            end-to-end procurement & logistics for Government and Private Sector
            clients across South Africa.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-yellow-500 text-white px-6 py-3 text-base font-semibold shadow-md hover:bg-yellow-600 transition">
              Explore Services
            </button>
            <button className="rounded-2xl bg-white px-6 py-3 text-base font-semibold shadow border hover:bg-gray-50 transition">
              Contact Us
            </button>
          </div>

          <div className="mt-6 flex items-center gap-3 text-sm text-gray-600">
            <LuCircleCheckBig className="h-5 w-5 text-green-600" />
            Compliant • BEE-aligned • Tender-ready
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
