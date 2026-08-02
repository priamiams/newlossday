import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/common/SEO';
import PageBanner from '../components/common/PageBanner';
import { mountainsData } from '../data/mountains';
import { islandsData } from '../data/islands';
import { gatheringData } from '../data/gathering';
import { transportData } from '../data/transport';
import { outdoorData } from '../data/outdoor';
import { companyData } from '../data/company';
import { MdLocationOn, MdAccessTime, MdSearch, MdClose, MdCheckCircle, MdEvent, MdPeople, MdDirectionsRun, MdInfo } from 'react-icons/md';

const Packages = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTrip, setSelectedTrip] = useState(null);

  // Normalization for combining all trips
  const allTrips = [
    ...mountainsData.map(t => ({ ...t, category: 'Gunung' })),
    ...islandsData.map(t => ({ ...t, category: 'Pulau' })),
    ...gatheringData.map(t => ({ ...t, category: 'Gathering' })),
    ...transportData.map(t => ({ ...t, category: 'Sewa Transportasi' })),
    ...outdoorData.map(t => ({ ...t, category: 'Sewa Peralatan' })),
  ];

  const categories = ['Semua', 'Gunung', 'Pulau', 'Gathering', 'Sewa Transportasi', 'Sewa Peralatan'];

  const filteredTrips = allTrips.filter(trip => {
    const matchCategory = activeCategory === 'Semua' || trip.category === activeCategory;
    const matchSearch = trip.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        (trip.location && trip.location.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  const handleBook = (trip) => {
    const text = `Halo Admin Lossday, saya tertarik dengan paket ${trip.title} dari kategori ${trip.category}. Mohon info lebih lanjut.`;
    const url = `${companyData.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <SEO title="Paket Perjalanan" description="Pilihan paket Open Trip, Private Trip, dan Gathering terbaik dari PT Lossday Sejahtera Group." />
      <PageBanner title="Paket Perjalanan" bgImage="/img/dokumentasi/gambar1.jpg" />
      
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-8">
          
          {/* Search and Filter */}
          <div className="bg-white p-6 rounded-2xl shadow-sm mb-12 flex flex-col md:flex-row gap-6 justify-between items-center z-20 relative">
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                    activeCategory === cat 
                      ? 'bg-primary text-white shadow-md' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72">
              <input 
                type="text" 
                placeholder="Cari destinasi..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none rounded-xl focus:ring-2 focus:ring-primary outline-none"
              />
              <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
            </div>
          </div>

          {/* Cards Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredTrips.map(trip => (
                <motion.div 
                  key={`${trip.category}-${trip.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="card-modern group"
                >
                  <div className="relative overflow-hidden h-64">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${trip.image})`, backgroundColor: '#e2e8f0' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        {trip.category}
                      </span>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{trip.title}</h3>
                      {trip.location && (
                        <div className="flex items-center text-sm text-gray-300 gap-4">
                          <span className="flex items-center gap-1"><MdLocationOn /> {trip.location}</span>
                          <span className="flex items-center gap-1"><MdAccessTime /> {trip.duration}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col justify-between h-48">
                    <p className="text-gray-600 line-clamp-3">{trip.description}</p>
                    
                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-gray-500 block">Mulai dari</span>
                        <span className="text-lg font-bold text-accent">{trip.price}</span>
                      </div>
                      <button 
                        onClick={() => setSelectedTrip(trip)}
                        className="btn-primary py-2 px-4 text-sm"
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredTrips.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-400">Tidak ada paket yang ditemukan.</h3>
            </div>
          )}
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedTrip && (
          <motion.div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTrip(null)}
          >
            <motion.div 
              className="bg-white rounded-2xl overflow-hidden w-full max-w-3xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-80">
                <img src={selectedTrip.image} alt={selectedTrip.title} className="w-full h-full object-cover" />
                <button 
                  onClick={() => setSelectedTrip(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-dark transition-colors"
                >
                  <MdClose className="text-2xl" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <span className="bg-primary text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">
                    {selectedTrip.category}
                  </span>
                  <h2 className="text-3xl font-bold">{selectedTrip.title}</h2>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-4 mb-6">
                  {selectedTrip.location && (
                    <div className="bg-gray-100 px-4 py-2 rounded-lg flex items-center gap-2 font-medium text-dark">
                      <MdLocationOn className="text-primary" /> {selectedTrip.location}
                    </div>
                  )}
                  {selectedTrip.duration && (
                    <div className="bg-gray-100 px-4 py-2 rounded-lg flex items-center gap-2 font-medium text-dark">
                      <MdAccessTime className="text-primary" /> {selectedTrip.duration}
                    </div>
                  )}
                  {selectedTrip.difficulty && (
                    <div className="bg-gray-100 px-4 py-2 rounded-lg flex items-center gap-2 font-medium text-dark">
                      Tingkat: <span className="text-accent">{selectedTrip.difficulty}</span>
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-3">Deskripsi</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedTrip.description}</p>
                </div>

                {selectedTrip.features && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2"><MdCheckCircle className="text-accent" /> Fasilitas & Layanan</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedTrip.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0"></span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {(selectedTrip.jalur && selectedTrip.jalur !== '-') && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><MdDirectionsRun className="text-accent" /> Jalur / Kegiatan</h3>
                    <p className="text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">{selectedTrip.jalur}</p>
                  </div>
                )}

                {selectedTrip.rundown && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2"><MdEvent className="text-accent" /> Rundown / Itinerary</h3>
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <ul className="space-y-3">
                        {selectedTrip.rundown.map((item, i) => (
                          <li key={i} className="flex gap-3 text-sm text-gray-600">
                            <span className="font-bold text-primary min-w-[50px]">Hari {i + 1}</span>
                            <span>{item.replace(/^Hari \d+:\s*/, '')}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {selectedTrip.kuota && (
                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <MdPeople size={20} />
                      </div>
                      <div>
                        <span className="block text-xs text-gray-500 font-medium">Kuota</span>
                        <span className="text-sm font-bold text-dark">{selectedTrip.kuota}</span>
                      </div>
                    </div>
                  )}
                  {selectedTrip.jadwal && (
                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <MdEvent size={20} />
                      </div>
                      <div>
                        <span className="block text-xs text-gray-500 font-medium">Jadwal</span>
                        <span className="text-sm font-bold text-dark">{selectedTrip.jadwal}</span>
                      </div>
                    </div>
                  )}
                </div>

                {selectedTrip.catatan && (
                  <div className="mb-8 p-4 bg-orange-50 border border-orange-100 rounded-xl flex gap-3">
                    <MdInfo className="text-accent text-xl flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-sm font-bold text-orange-800 mb-1">Catatan Penting:</span>
                      <span className="text-sm text-orange-700">{selectedTrip.catatan}</span>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="mb-4 sm:mb-0 text-center sm:text-left">
                    <span className="block text-sm text-gray-500">Harga Paket</span>
                    <span className="text-2xl font-bold text-primary">{selectedTrip.price}</span>
                  </div>
                  <button 
                    onClick={() => handleBook(selectedTrip)}
                    className="btn-primary w-full sm:w-auto"
                  >
                    Pesan Sekarang (WhatsApp)
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Packages;
