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
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative grid lg:grid-cols-2 gap-10 py-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Your Trusted Partner in{" "}
              <span className="text-yellow-100">IT</span>, Supply & Delivery
            </h1>
            <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-xl">
              Riobrite Pty Ltd provides integrated technology solutions and
              end‑to‑end procurement & logistics for Government and Private
              Sector clients across South Africa.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold shadow border">
                Explore Services
              </button>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
              <LuCircleCheckBig className="h-5 w-5 text-green-600" /> Compliant
              • BEE-aligned • Tender-ready
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="aspect-video rounded-3xl bg-white border shadow grid place-content-center relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-blue-50/60 blur-2xl" />
              <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-blue-50/40 blur-2xl" />
              <div className="relative z-10 p-6 grid sm:grid-cols-2 gap-4 text-sm">
                <Card
                  icon={LuCpu}
                  title="IT Hardware"
                  desc="Laptops, servers, peripherals"
                />
                <Card
                  icon={LuNetwork}
                  title="Networking"
                  desc="LAN/WAN, Wi‑Fi, cabling"
                />
                <Card
                  icon={LuLock}
                  title="Security"
                  desc="Endpoint, firewall, policies"
                />
                <Card
                  icon={LuPackage}
                  title="Supply & Delivery"
                  desc="Stationery, furniture, electronics"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
