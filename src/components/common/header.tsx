import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { LuArrowRight, LuX, LuMenu } from "react-icons/lu";
import Logo from "../../assets/logo.png";

type HeaderProps = {
  onOpenQuote: () => void;
};
const Header = ({ onOpenQuote }: HeaderProps) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const TABS = [
    { key: "/", label: "Home" },
    { key: "/about", label: "About Us" },
    { key: "/services", label: "Services" },
    { key: "/projects", label: "Projects" },
    { key: "/careers", label: "Careers" },
    { key: "/blog", label: "Blog" },
    { key: "/contact", label: "Contact" },
  ];
  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  const handleOpen = () => {
    if (open) {
      setOpen(false);
    } else [setOpen(true)];
  };
  const handleNav = (page: string) => {
    setActive(page);
  };

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-gray-800 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <div className="h-15 w-15 rounded-2xl  grid place-content-center shadow">
              <img src={Logo} alt="logo" className="w-10 h-10" />
            </div>
            <div>
              <p className="text-sm font-bold leading-5 font-space">
                Riobrite Pty Ltd
              </p>
              <p className="text-xs text-gray-400 -mt-0.5">
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
                className={`px-3 py-2  text-sm font-medium transition ${
                  active === t.key
                    ? " text-blue-100 border-b border-blue-100 transition-all duration-200 ease-linear"
                    : "text-gray-400 hover:text-blue-100"
                }`}
              >
                {t.label}
              </Link>
            ))}
            <button
              className="ml-2 inline-flex items-center gap-2 rounded-2xl bg-yellow-100 px-4 py-2 text-white text-sm shadow hover:bg-yellow-175"
              onClick={onOpenQuote}
            >
              Request a Quote <LuArrowRight className="h-4 w-4" />
            </button>
          </nav>

          <button
            className="md:hidden p-2 hover:text-blue-100"
            onClick={handleOpen}
          >
            {open ? <LuX /> : <LuMenu />}
          </button>
        </div>

        {/** Mobile menu */}
        {open && (
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setOpen(false)}
          >
            <div
              className="md:hidden absolute top-full left-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 shadow-lg z-40 px-2 pb-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid gap-1 backdrop-blur-md ">
                {TABS.map((t) => (
                  <Link
                    key={t.key}
                    to={t.key}
                    onClick={() => {
                      handleNav(t.key);
                      setOpen(false);
                    }}
                    className={`px-3 py-2 text-left text-sm font-medium transition ${
                      active === t.key
                        ? " text-blue-100 border-b border-blue-100 "
                        : "text-gray-300 hover:text-blue-100 "
                    }`}
                  >
                    {t.label}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    onOpenQuote();
                    setOpen(false);
                  }}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-100 px-4 py-2 text-white text-sm shadow hover:bg-yellow-175"
                >
                  Request a Quote <LuArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
