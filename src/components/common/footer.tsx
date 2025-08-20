const Footer = () => {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600">
          <p>© 2025 Riobrite Pty Ltd. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-900">
              Terms
            </a>
            <a href="#" className="hover:text-gray-900">
              SLA
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
