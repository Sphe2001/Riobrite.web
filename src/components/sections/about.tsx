import { LuCircleCheckBig } from "react-icons/lu";
import Heading from "../common/heading";

const AboutSection = () => {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <Heading heading={"About Riobrite"} />
            <p className="text-gray-300 leading-relaxed">
              Riobrite Pty Ltd is a South African company delivering integrated{" "}
              <strong className="text-amber-500">Information Technology</strong>{" "}
              solutions and
              <strong className="text-amber-500">
                {" "}
                supply & delivery services
              </strong>{" "}
              to both <strong className="text-amber-500">
                Government
              </strong> and{" "}
              <strong className="text-amber-500">Private Sector</strong>{" "}
              clients. We combine procurement discipline with technical
              expertise to provide seamless, audit‑ready outcomes.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-2xl border border-gray-800 p-5 bg-black/80 shadow-sm">
                <p className="font-semibold mb-1">Mission</p>
                <p className="text-sm text-gray-300">
                  Deliver reliable, value‑driven IT and supply solutions that
                  empower organisations to focus on their core mandate.
                </p>
              </div>
              <div className="rounded-2xl border p-5 border-gray-800 p-5 bg-black/80 shadow-sm">
                <p className="font-semibold mb-1">Vision</p>
                <p className="text-sm text-gray-300">
                  To be the preferred partner bridging technology, procurement,
                  and logistics across Africa.
                </p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border p-5 border-gray-800 p-5 bg-black/80 shadow-sm">
              <p className="font-semibold mb-1">Values</p>
              <ul className="text-sm text-gray-700 grid sm:grid-cols-2 gap-y-2 list-none pl-0">
                <li className="flex items-center gap-2 text-gray-300">
                  <LuCircleCheckBig className="h-4 w-4 text-blue-100" />
                  Integrity & Accountability
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <LuCircleCheckBig className="h-4 w-4 text-blue-100" />
                  Client Success
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <LuCircleCheckBig className="h-4 w-4 text-blue-100" />
                  Safety & Compliance
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <LuCircleCheckBig className="h-4 w-4 text-blue-100" />
                  Innovation & Practicality
                </li>
              </ul>
            </div>
          </div>
          <div className="rounded-3xl border border-gray-800 p-5 bg-black/80 p-6 shadow-sm">
            <p className="text-sm text-gray-100">Director</p>
            <p className="text-xl font-bold">Mr. Masedi Matlala</p>
            <p className="text-sm text-gray-300 mt-1">
              Founder & Managing Director
            </p>
            <div className="mt-4 text-sm text-gray-300 leading-relaxed">
              <p>
                With a background spanning technology delivery and public sector
                procurement, Mr. Matlala guides Riobrite’s client‑centric
                approach and compliance standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
