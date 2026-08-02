import { motion } from 'framer-motion';

const AboutShort = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Grid */}
          <div className="lg:w-1/2 relative min-h-[400px]">
            <div className="relative w-full">
              <motion.img 
                src="/img/dokumentasi/gambar13.jpg" 
                alt="Lossday Team" 
                className="rounded-2xl w-4/5 ml-auto relative z-10 shadow-lg object-cover h-64"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              <motion.img 
                src="/img/dokumentasi/gambar14.jpg" 
                alt="Lossday Trip" 
                className="rounded-2xl w-3/5 absolute bottom-0 left-0 -translate-x-4 translate-y-8 border-4 border-white shadow-xl z-20 object-cover h-48"
                initial={{ opacity: 0, x: -50, y: 80 }}
                whileInView={{ opacity: 1, x: 0, y: 32 }} /* y:32 is translate-y-8 */
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <motion.h4 
              className="text-accent font-bold tracking-widest uppercase mb-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Tentang Kami
            </motion.h4>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-dark"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              PT Lossday Sejahtera Group
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Berdiri sejak tahun 2024, PT Lossday Sejahtera Group hadir sebagai solusi perjalanan premium dan andal di Indonesia. Kami berkomitmen untuk memberikan pelayanan profesional dan berkualitas tinggi pada setiap pelanggan.
            </motion.p>
            <motion.p 
              className="text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Mulai dari perjalanan ke puncak gunung yang menantang, hingga bersantai di pesisir pulau yang menawan, kami menyusun itinerary terbaik yang tak terlupakan untuk Anda dan keluarga.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a href="/about" className="btn-primary inline-block">
                Baca Selengkapnya
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutShort;
