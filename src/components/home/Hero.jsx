import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { companyData } from '../../data/company';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const slideImages = [
    '/img/dokumentasi/gambar27.jpg',
    '/img/dokumentasi/gambar9.jpg',
    '/img/dokumentasi/gambar60.jpg',
    '/img/dokumentasi/gambar1.jpg',
    '/img/dokumentasi/gambar68.jpg',
    '/img/dokumentasi/gambar23.jpg',
    '/img/dokumentasi/gambar58.jpg',
    '/img/dokumentasi/gambar6.jpg'
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider with Overlay and Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 w-full h-[120%] -top-[10%]">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          allowTouchMove={false}
          className="w-full h-full"
        >
          {slideImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div 
                className="w-full h-full bg-cover bg-center scale-105"
                style={{ backgroundImage: `url(${img})`, backgroundColor: '#235abe' }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/80 pointer-events-none"></div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 z-10 text-center text-white pt-20"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{ opacity }}
      >
        <motion.p
          variants={staggerItem}
          className="text-accent font-medium tracking-widest mb-4 text-sm md:text-base uppercase letter-spacing-[0.2em]"
        >
          Explore The World With Us
        </motion.p>
        
        <motion.h1
          variants={staggerItem}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-xl"
        >
          Menciptakan Pengalaman <br />
          <span className="text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent to-orange-300">Perjalanan Terbaik</span> Anda
        </motion.h1>
        
        <motion.p
          variants={staggerItem}
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-md"
        >
          {companyData.description}
        </motion.p>
        
        <motion.div
          variants={staggerItem}
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

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <span className="text-white text-sm mb-2 tracking-widest">SCROLL</span>
        <motion.div 
          className="w-[1px] h-12 bg-white/50"
          animate={{ height: [0, 48, 0], y: [0, 24, 48] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
