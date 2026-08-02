import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import SEO from '../components/common/SEO';
import PageBanner from '../components/common/PageBanner';
import { galleryData } from '../data/gallery';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const categories = ['Semua', 'Gunung', 'Pulau', 'Gathering'];

  const filteredGallery = activeCategory === 'Semua' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  const slides = filteredGallery.map(item => ({
    src: item.image,
    title: item.title,
    description: item.category
  }));

  return (
    <>
      <SEO title="Galeri Dokumentasi" description="Dokumentasi perjalanan dan kegiatan bersama PT Lossday Sejahtera Group." />
      <PageBanner title="Galeri Dokumentasi" bgImage="/img/dokumentasi/gambar18.jpg" />
      
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-8">
          
          {/* Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-primary text-white shadow-lg scale-105' 
                    : 'bg-white text-gray-500 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-like Grid */}
          <motion.div 
            className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6"
            layout
          >
            <AnimatePresence>
              {filteredGallery.map((item, index) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="relative group cursor-pointer rounded-xl overflow-hidden break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-300"
                  onClick={() => openLightbox(index)}
                >
                  <div className="w-full h-auto bg-gray-200 aspect-[4/3]">
                    <LazyLoadImage
                      alt={item.title}
                      src={item.image}
                      effect="blur"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      wrapperClassName="w-full h-full"
                    />
                  </div>
                  
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredGallery.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-400">Belum ada foto untuk kategori ini.</h3>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={photoIndex}
        slides={slides}
      />
    </>
  );
};

export default Gallery;
