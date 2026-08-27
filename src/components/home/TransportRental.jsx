import { motion } from 'framer-motion';
import { transportData } from '../../data/transport';
import { MdDirectionsCar, MdPeople, MdCheckCircle } from 'react-icons/md';
import { companyData } from '../../data/company';

const TransportRental = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            Layanan <span className="text-primary">Rental Transportasi</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Armada kendaraan terbaru, bersih, dan terawat dengan pengemudi profesional yang siap menemani perjalanan Anda.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {transportData.map((car, index) => (
            <motion.div 
              key={car.id}
              className="card-modern relative overflow-hidden group p-6 border-t-[5px] border-t-accent"
              whileHover={{ y: -15, scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Animated decorative background */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-full -z-10 group-hover:bg-primary/5 transition-colors duration-500"></div>
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div>
                  <h3 className="text-xl font-bold text-dark mb-1 group-hover:text-primary transition-colors">{car.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm gap-2 font-medium">
                    <MdPeople className="text-accent" />
                    <span>Kapasitas {car.capacity}</span>
                  </div>
                </div>
                <motion.div 
                  className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl shadow-sm"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  <MdDirectionsCar />
                </motion.div>
              </div>

              <div className="space-y-3 mb-6 text-sm text-gray-600 relative z-10">
                <motion.div className="flex items-center gap-2" whileHover={{ x: 5 }}>
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center"><MdCheckCircle className="text-green-500 text-sm" /></div> AC Dingin
                </motion.div>
                <motion.div className="flex items-center gap-2" whileHover={{ x: 5 }}>
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center"><MdCheckCircle className="text-green-500 text-sm" /></div> Driver Profesional
                </motion.div>
                <motion.div className="flex items-center gap-2" whileHover={{ x: 5 }}>
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center"><MdCheckCircle className="text-green-500 text-sm" /></div> Termasuk BBM (Opsional)
                </motion.div>
              </div>

              <div className="pt-5 border-t border-gray-100 flex items-center justify-between mt-auto relative z-10">
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-wider font-semibold">Harga</span>
                  <span className="font-bold text-lg text-primary">{car.price}</span>
                </div>
                <a 
                  href={`${companyData.whatsapp}?text=Halo%20Admin,%20saya%20ingin%20bertanya%20tentang%20rental%20kendaraan%20${car.title}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white hover:bg-accent px-5 py-2.5 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 text-sm flex items-center gap-1"
                >
                  Pesan
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransportRental;
