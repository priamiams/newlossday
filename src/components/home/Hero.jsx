import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { companyData } from '../../data/company';

const Hero = () => {
  const heroImage = '/img/dokumentasi/gambar6.jpg';



  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div className="absolute inset-0 z-0 w-full h-full">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})`, backgroundColor: '#235abe' }}
        ></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/80 pointer-events-none"></div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 z-10 text-center text-white pt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.p
          className="text-accent font-medium tracking-widest mb-4 text-sm md:text-base uppercase letter-spacing-[0.2em]"
        >
          Explore The World With Us
        </motion.p>
        
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-xl"
        >
          Menciptakan Pengalaman <br />
          <span className="text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent to-orange-300">Perjalanan Terbaik</span> Anda
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-md"
        >
          {companyData.description}
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/packages" className="btn-primary w-full sm:w-auto text-center group relative overflow-hidden">
            <span className="relative z-10">Lihat Paket</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </Link>
          <a href={companyData.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto text-center backdrop-blur-sm">
            Hubungi Kami
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
