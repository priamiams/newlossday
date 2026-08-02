import { Link } from 'react-router-dom';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { companyData } from '../../data/company';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Lossday<span className="text-accent">.</span></h3>
            <p className="text-gray-400 mb-6">
              {companyData.description}
            </p>
            <div className="flex space-x-4">
              <a href={companyData.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <FaWhatsapp className="text-xl" />
              </a>
              <a href={companyData.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link to="/packages" className="text-gray-400 hover:text-white transition-colors">Paket Perjalanan</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Galeri Dokumentasi</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4">Layanan Kami</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Open Trip</li>
              <li className="text-gray-400">Private Trip</li>
              <li className="text-gray-400">Corporate Gathering</li>
              <li className="text-gray-400">Rental Mobil & Bus</li>
              <li className="text-gray-400">Sewa Alat Camping</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MdLocationOn className="text-accent text-2xl shrink-0" />
                <span className="text-gray-400">{companyData.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-accent text-xl shrink-0" />
                <span className="text-gray-400">+{companyData.whatsappNumber}</span>
              </li>
              <li className="flex items-center gap-3">
                <MdEmail className="text-accent text-xl shrink-0" />
                <span className="text-gray-400">{companyData.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {companyData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
