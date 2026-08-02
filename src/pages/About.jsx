import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import PageBanner from '../components/common/PageBanner';
import Partners from '../components/home/Partners';
import { companyData } from '../data/company';
import { MdCheckCircle, MdTimeline } from 'react-icons/md';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <SEO title="Tentang Kami" description="Profil PT Lossday Sejahtera Group, Visi, Misi, dan Perjalanan Kami." />
      <PageBanner title="Tentang Kami" bgImage="/img/dokumentasi/gambar15.jpg" />
      
      {/* Profil Perusahaan */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded-2xl z-0"></div>
                <img src="/img/dokumentasi/gambar25.jpg" alt="Lossday Team" className="relative z-10 rounded-2xl w-full object-cover h-[400px] shadow-lg" />
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-accent font-bold tracking-widest uppercase mb-2">Profil Perusahaan</h4>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">{companyData.name}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {companyData.description}
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary">
                <p className="text-gray-700 italic font-medium">
                  "Menghadirkan senyum di setiap perjalanan Anda adalah kebanggaan terbesar kami."
                </p>
                <div className="mt-4 font-bold text-dark">- {companyData.founder}, <span className="text-sm font-normal text-gray-500">Founder</span></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="card-modern p-8 border-t-4 border-t-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-center text-primary">Visi</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {companyData.vision}
              </p>
            </motion.div>
            
            <motion.div 
              className="card-modern p-8 border-t-4 border-t-accent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-center text-accent">Misi</h3>
              <ul className="space-y-4">
                {companyData.mission.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <MdCheckCircle className="text-accent text-xl shrink-0 mt-1" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nilai Perusahaan */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core <span className="text-primary">Values</span></h2>
            <p className="text-gray-600">Nilai-nilai yang kami pegang teguh dalam setiap pelayanan operasional.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyData.values.map((value, index) => (
              <motion.div 
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-2xl font-bold">
                  {index + 1}
                </div>
                <h4 className="font-bold text-xl mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline (Sejarah Singkat) */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <MdTimeline className="text-5xl text-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold">Perjalanan Kami</h2>
          </div>
          
          <div className="relative border-l-2 border-white/20 ml-4 md:mx-auto md:w-full">
            <motion.div 
              className="mb-10 ml-8 relative md:w-1/2 md:ml-0 md:pr-12 md:text-right"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute w-4 h-4 bg-accent rounded-full -left-[41px] top-1 border-4 border-primary md:-right-[9px] md:left-auto"></div>
              <h3 className="text-2xl font-bold text-accent mb-2">2024</h3>
              <h4 className="text-xl font-bold mb-2">Awal Mula</h4>
              <p className="text-blue-100">PT Lossday Sejahtera Group didirikan secara resmi, berawal dari komunitas pecinta alam yang berkembang menjadi penyedia layanan perjalanan profesional.</p>
            </motion.div>
            
            <motion.div 
              className="mb-10 ml-8 relative md:w-1/2 md:ml-auto md:pl-12"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute w-4 h-4 bg-accent rounded-full -left-[41px] top-1 border-4 border-primary"></div>
              <h3 className="text-2xl font-bold text-accent mb-2">Sekarang</h3>
              <h4 className="text-xl font-bold mb-2">Terus Berkembang</h4>
              <p className="text-blue-100">Melayani ribuan pelanggan dengan berbagai destinasi unggulan, menjalin kemitraan dengan banyak pihak, dan terus berinovasi dalam layanan pariwisata.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Partners />

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Siap Memulai Petualangan Bersama Kami?</h2>
          <div className="flex justify-center gap-4">
            <Link to="/packages" className="btn-primary">Pilih Paket Trip</Link>
            <a href={companyData.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline">Hubungi Konsultan</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
