import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import QouteModal from "./components/modals/qouteModal";

export default function Layout() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <div>
      <Header onOpenQuote={() => setQuoteOpen(true)} />
      <Outlet />
      <Footer />
      <QouteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
