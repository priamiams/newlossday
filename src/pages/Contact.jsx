import { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import PageBanner from '../components/common/PageBanner';
import { companyData } from '../data/company';
import { MdLocationOn, MdEmail, MdSend } from 'react-icons/md';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Open Trip',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Halo Admin Lossday,\n\nNama: ${formData.name}\nEmail: ${formData.email}\nNo. HP: ${formData.phone}\nLayanan: ${formData.service}\n\nPesan:\n${formData.message}`;
    
    let targetNumber = companyData.whatsappOpenTrip;
    
    if (formData.service === 'Private Trip' || formData.service === 'Corporate Gathering') {
      targetNumber = companyData.whatsappPrivate;
    }
    
    const url = `https://wa.me/${targetNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <SEO 
        title="Hubungi Kami" 
        description="Hubungi PT Lossday Sejahtera Group untuk pertanyaan, konsultasi, dan pemesanan layanan pariwisata." 
        keywords="kontak lossday sejahtera, hubungi travel agency, pesan open trip, customer service lossday, alamat pt lossday sejahtera group"
      />
      <PageBanner title="Hubungi Kami" bgImage="/img/dokumentasi/gambar19.jpg" />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Contact Information */}
            <motion.div 
              className="lg:w-1/3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-dark">Informasi <span className="text-primary">Kontak</span></h2>
              <p className="text-gray-600 mb-8">
                Kami siap membantu merencanakan liburan impian Anda. Jangan ragu untuk menghubungi kami melalui kontak di bawah ini.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-primary transition-colors">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-2xl shrink-0">
                    <MdLocationOn />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Kantor Pusat</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{companyData.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-primary transition-colors">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-2xl shrink-0">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Admin Open Trip / Sewa Mobil</h4>
                    <a href={`https://wa.me/${companyData.whatsappOpenTrip}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm hover:text-accent transition-colors">+{companyData.whatsappOpenTrip}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-primary transition-colors">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-2xl shrink-0">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Admin Private / Gathering / Kemitraan</h4>
                    <a href={`https://wa.me/${companyData.whatsappPrivate}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm hover:text-accent transition-colors">+{companyData.whatsappPrivate}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-primary transition-colors">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-2xl shrink-0">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Layanan Pengaduan</h4>
                    <a href={`https://wa.me/${companyData.whatsappPengaduan}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm hover:text-accent transition-colors">+{companyData.whatsappPengaduan}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-primary transition-colors">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-2xl shrink-0">
                    <MdEmail />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <a href={`mailto:${companyData.email}`} className="text-gray-600 text-sm hover:text-accent transition-colors">{companyData.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-primary transition-colors">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-2xl shrink-0">
                    <FaInstagram />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Instagram</h4>
                    <a href={companyData.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm hover:text-accent transition-colors">@lossdayadventure.id</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="lg:w-2/3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="Masukkan nama Anda"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nomor HP / WhatsApp</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="Contoh: 08123456789"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="email@anda.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Layanan yang Diminati</label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      >
                        <option value="Open Trip">Open Trip</option>
                        <option value="Private Trip">Private Trip</option>
                        <option value="Corporate Gathering">Corporate Gathering</option>
                        <option value="Rental Transportasi">Rental Transportasi</option>
                        <option value="Sewa Alat">Sewa Alat Camping</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pesan Anda</label>
                    <textarea 
                      name="message"
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Jelaskan kebutuhan perjalanan Anda..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn-primary w-full flex items-center justify-center gap-2 text-lg py-4"
                  >
                    Kirim Pesan ke WhatsApp <MdSend />
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Maps */}
      <section className="h-96 w-full">
        <iframe 
          src="https://maps.google.com/maps?q=Jakarta&t=&z=11&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
