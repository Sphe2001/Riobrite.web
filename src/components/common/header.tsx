import { useState } from "react";
import { Link } from "react-router-dom";
import { LuArrowRight, LuX, LuMenu } from "react-icons/lu";
import Logo from "../../assets/logo.png";

type HeaderProps = {
  onOpenQuote: () => void;
};
const Header = ({ onOpenQuote }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const TABS = [
    { key: "", label: "Home" },
    { key: "about", label: "About Us" },
    { key: "services", label: "Services" },
    { key: "projects", label: "Projects" },
    { key: "careers", label: "Careers" },
    { key: "blog", label: "Blog" },
    { key: "contact", label: "Contact" },
  ];

  const handleOpen = () => {
    if (open) {
      setOpen(false);
    } else [setOpen(true)];
  };
  const handleNav = (page: string) => {
    setActive(page);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <div className="h-15 w-15 rounded-2xl text-white grid place-content-center shadow">
              <img src={Logo} alt="logo" className="w-10 h-10" />
            </div>
            <div>
              <p className="text-lg font-bold leading-5">Riobrite Pty Ltd</p>
              <p className="text-xs text-gray-500 -mt-0.5">
                IT • Supply • Delivery
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {TABS.map((t) => (
              <Link
                key={t.key}
                to={t.key}
                onClick={() => handleNav(t.key)}
                className={`px-3 py-2 rounded-xl text-sm font-medium transition ${
                  active === t.key
                    ? "bg-blue-50 text-blue-100"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {t.label}
              </Link>
            ))}
            <button
              className="ml-2 inline-flex items-center gap-2 rounded-2xl bg-yellow-100 px-4 py-2 text-white text-sm shadow hover:bg-yellow-150"
              onClick={onOpenQuote}
            >
              Request a Quote <LuArrowRight className="h-4 w-4" />
            </button>
          </nav>

          <button className="md:hidden p-2" onClick={handleOpen}>
            {open ? <LuX /> : <LuMenu />}
          </button>
        </div>

        {/** Mobile menu */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-1">
              {TABS.map((t) => (
                <Link
                  key={t.key}
                  to={t.key}
                  onClick={() => handleNav(t.key)}
                  className={`px-3 py-2 rounded-xl text-left text-sm font-medium transition ${
                    active === t.key
                      ? "bg-blue-50 text-blue-100"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {t.label}
                </Link>
              ))}
              <button
                onClick={onOpenQuote}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-100 px-4 py-2 text-white text-sm shadow hover:bg-yellow-150"
              >
                Request a Quote <LuArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
