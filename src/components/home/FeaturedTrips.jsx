import { motion } from 'framer-motion';
import { mountainsData } from '../../data/mountains';
import { islandsData } from '../../data/islands';
import { MdAccessTime, MdLocationOn } from 'react-icons/md';

const TripCard = ({ trip }) => {
  return (
    <motion.div 
      className="card-modern group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <div className="relative overflow-hidden h-64">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${trip.image})`, backgroundColor: '#e2e8f0' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4">
          <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
            Unggulan
          </span>
        </div>
        
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-xl font-bold mb-1">{trip.title}</h3>
          <div className="flex items-center text-sm text-gray-300 gap-4">
            <span className="flex items-center gap-1"><MdLocationOn /> {trip.location}</span>
            <span className="flex items-center gap-1"><MdAccessTime /> {trip.duration}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-2">{trip.description}</p>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div>
            <span className="text-xs text-gray-500 block">Mulai dari</span>
            <span className="text-lg font-bold text-primary">{trip.price}</span>
          </div>
          <button className="text-accent font-medium hover:text-primary transition-colors">
            Detail Trip &rarr;
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedTrips = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Mountain Trips */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div className="max-w-2xl">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                Trip <span className="text-primary">Gunung</span> Terpopuler
              </motion.h2>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Taklukkan puncak tertinggi dan nikmati pemandangan alam memukau di atas awan.
              </motion.p>
            </div>
            <motion.a 
              href="/packages" 
              className="mt-6 md:mt-0 text-primary font-medium hover:text-accent transition-colors hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Lihat Semua Gunung &rarr;
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mountainsData.slice(0, 3).map((mountain) => (
              <TripCard key={`mt-${mountain.id}`} trip={mountain} />
            ))}
          </div>
        </div>

        {/* Island Trips */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div className="max-w-2xl">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                Trip <span className="text-primary">Pulau</span> Menawan
              </motion.h2>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Rasakan hembusan angin laut dan pesona bawah laut yang tiada duanya.
              </motion.p>
            </div>
            <motion.a 
              href="/packages" 
              className="mt-6 md:mt-0 text-primary font-medium hover:text-accent transition-colors hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Lihat Semua Pulau &rarr;
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {islandsData.slice(0, 3).map((island) => (
              <TripCard key={`is-${island.id}`} trip={island} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedTrips;
