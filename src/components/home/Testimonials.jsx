import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { MdStar } from 'react-icons/md';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Rangga Zahran",
      role: "Corporate Client",
      content: "Pelayanan sangat memuaskan! Tim Lossday benar-benar profesional mengatur kegiatan gathering perusahaan kami dari awal hingga akhir. Highly recommended!",
      image: "https://ui-avatars.com/api/?name=Rangga+Zahran&background=235abe&color=fff",
      rating: 5
    },
    {
      id: 2,
      name: "Raka Dhimas",
      role: "Peserta Open Trip Rinjani",
      content: "Pengalaman pertama naik Rinjani yang luar biasa. Guide nya sangat sabar, makanannya enak-enak, dan tendanya nyaman banget.",
      image: "https://ui-avatars.com/api/?name=Raka+Dhimas&background=fa961e&color=fff",
      rating: 5
    },
    {
      id: 3,
      name: "Akbar",
      role: "Private Trip Pahawang",
      content: "Liburan keluarga ke Pahawang jadi sangat mudah berkat Lossday. Tidak perlu repot urus kapal dan penginapan, semuanya sudah disiapkan dengan baik.",
      image: "https://ui-avatars.com/api/?name=Akbar&background=2c2c2c&color=fff",
      rating: 5
    },
    {
      id: 4,
      name: "Barto Pangabean",
      role: "Sewa Bus Pariwisata",
      content: "Bus nya bersih, AC dingin, dan supirnya ramah serta paham jalan. Perjalanan study tour sekolah kami berjalan lancar.",
      image: "https://ui-avatars.com/api/?name=Barto+Pangabean&background=235abe&color=fff",
      rating: 5
    },
    {
      id: 5,
      name: "Athaya Rizka",
      role: "Peserta Trip Pulau Seribu",
      content: "Trip ke Pulau Seribu bareng Lossday seru banget! Fasilitas lengkap, dokumentasi keren, dan harganya juga sangat bersahabat.",
      image: "https://ui-avatars.com/api/?name=Athaya+Rizka&background=fa961e&color=fff",
      rating: 5
    },
    {
      id: 6,
      name: "Rizky Ansyari",
      role: "Peserta Pendakian Semeru",
      content: "Muncak Semeru bareng Lossday beneran no ribet. Tinggal bawa badan aja, semua perlengkapan dan logistik udah aman terkendali.",
      image: "https://ui-avatars.com/api/?name=Rizky+Ansyari&background=2c2c2c&color=fff",
      rating: 5
    },
    {
      id: 7,
      name: "Bayu Eko",
      role: "Sewa Mobil & Elf",
      content: "Armada transportasi terbaik yang pernah saya sewa. Unit baru, supir asik, bikin perjalanan liburan akhir pekan keluarga makin nyaman.",
      image: "https://ui-avatars.com/api/?name=Bayu+Eko&background=235abe&color=fff",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-primary/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            >
            Apa Kata <span className="text-primary">Pelanggan Kami?</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600"
            >
            Lebih dari ribuan pelanggan telah mempercayakan perjalanan mereka kepada PT Lossday Sejahtera Group.
          </motion.p>
        </div>

        <motion.div
          >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
                  <div className="flex text-accent mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <MdStar key={i} />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{review.content}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full" />
                    <div>
                      <h4 className="font-bold text-dark text-sm">{review.name}</h4>
                      <p className="text-xs text-gray-500">{review.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
