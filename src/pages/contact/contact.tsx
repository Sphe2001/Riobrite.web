import { useState } from "react";
import ContactUsForm from "../../components/common/contactUsForm";
import {
  LuFacebook,
  LuInstagram,
  LuLinkedin,
  LuMail,
  LuMapPin,
  LuPhone,
} from "react-icons/lu";
import Heading from "../../components/common/heading";

const ContactUsPage = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Service of Interest",
    message: "",
  });
  return (
    <div className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Heading heading={"Contact Us"} />
            <p className="text-gray-300 mb-6 font-general">
              Let’s discuss your requirements—IT, supply, or end‑to‑end
              delivery.
            </p>
            <ContactUsForm data={data} setData={setData} />
          </div>
          <div className="rounded-2xl border border-gray-800 bg-gradient-to-r from-transparent via-blue-100/5 to-white/2 backdrop-blur-md  p-5 shadow-sm grid gap-3 h-max">
            <div className="flex items-center gap-2 text-gray-300">
              <LuMapPin className="h-5 w-5 text-yellow-150" />
              Pretoria, South Africa
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <LuPhone className="h-5 w-5 text-yellow-150" />
              +27 (0) 00 000 0000
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <LuMail className="h-5 w-5 text-yellow-150" />
              info@riobrite.co.za
            </div>
            <div className="pt-3 border-t text-sm text-gray-200">
              Business Hours: Mon–Fri 08:00–17:00 (SAST)
            </div>
            <div className="flex gap-3 pt-2">
              <a
                className="p-2 rounded-xl border border-gray-800 hover:bg-gray-800"
                href="#"
                aria-label="LinkedIn"
              >
                <LuLinkedin className="h-5 w-5 text-blue-100" />
              </a>
              <a
                className="p-2 rounded-xl border border-gray-800 hover:bg-gray-800"
                href="#"
                aria-label="Facebook"
              >
                <LuFacebook className="h-5 w-5 text-blue-100" />
              </a>
              <a
                className="p-2 rounded-xl border border-gray-800 hover:bg-gray-800"
                href="#"
                aria-label="Instagram"
              >
                <LuInstagram className="h-5 w-5 text-blue-100" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
