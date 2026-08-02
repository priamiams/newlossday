import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';
import { companyData } from '../../data/company';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang', path: '/about' },
    { name: 'Paket', path: '/packages' },
    { name: 'Galeri', path: '/gallery' },
    { name: 'Kontak', path: '/contact' },
  ];

  const navbarBg = isHome && !isScrolled ? 'bg-transparent text-white' : 'glass text-dark';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navbarBg}`}>
      <div className="container mx-auto px-4 md:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/img/logo.png" alt="Lossday Logo" className="h-8 md:h-10 w-auto object-contain" />
            <span className={`text-2xl font-bold ${isHome && !isScrolled ? 'text-white' : 'text-primary'}`}>Lossday</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium hover:text-accent transition-colors ${location.pathname === link.path && !isHome ? 'text-primary' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={companyData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white px-5 py-2 rounded-xl font-medium hover:opacity-90 transition-all hover:shadow-lg"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-dark absolute w-full left-0 top-full shadow-lg border-t border-gray-100">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={companyData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white text-center px-5 py-3 rounded-xl font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              WhatsApp Kami
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
