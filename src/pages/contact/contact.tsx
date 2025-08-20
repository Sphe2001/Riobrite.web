import ContactUsForm from "../../components/common/contactUsForm";
import {
  LuFacebook,
  LuInstagram,
  LuLinkedin,
  LuMail,
  LuMapPin,
  LuPhone,
} from "react-icons/lu";

const ContactUsPage = () => {
  return (
    <div className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold mb-2">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              Let’s discuss your requirements—IT, supply, or end‑to‑end
              delivery.
            </p>
            <ContactUsForm />
          </div>
          <div className="rounded-2xl border bg-white p-5 shadow-sm grid gap-3 h-max">
            <div className="flex items-center gap-2 text-gray-700">
              <LuMapPin className="h-5 w-5 text-indigo-600" />
              Pretoria, South Africa
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <LuPhone className="h-5 w-5 text-indigo-600" />
              +27 (0) 00 000 0000
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <LuMail className="h-5 w-5 text-indigo-600" />
              info@riobrite.co.za
            </div>
            <div className="pt-3 border-t text-sm text-gray-600">
              Business Hours: Mon–Fri 08:00–17:00 (SAST)
            </div>
            <div className="flex gap-3 pt-2">
              <a
                className="p-2 rounded-xl border hover:bg-gray-50"
                href="#"
                aria-label="LinkedIn"
              >
                <LuLinkedin className="h-5 w-5" />
              </a>
              <a
                className="p-2 rounded-xl border hover:bg-gray-50"
                href="#"
                aria-label="Facebook"
              >
                <LuFacebook className="h-5 w-5" />
              </a>
              <a
                className="p-2 rounded-xl border hover:bg-gray-50"
                href="#"
                aria-label="Instagram"
              >
                <LuInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
