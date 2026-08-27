import { motion } from 'framer-motion';
import { MdVerified, MdSupportAgent, MdSecurity, MdThumbUp } from 'react-icons/md';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <MdVerified />,
      title: "Legal & Terpercaya",
      description: "Kami adalah perusahaan resmi berbadan hukum yang berfokus pada kepuasan."
    },
    {
      icon: <MdSupportAgent />,
      title: "Layanan 24/7",
      description: "Tim support kami siap membantu Anda kapanpun Anda butuhkan."
    },
    {
      icon: <MdSecurity />,
      title: "Aman & Nyaman",
      description: "Prioritas utama kami adalah keselamatan Anda selama perjalanan."
    },
    {
      icon: <MdThumbUp />,
      title: "Harga Terbaik",
      description: "Dapatkan paket premium dengan harga yang sangat kompetitif."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with slight tint */}
      <div className="absolute inset-0 bg-primary z-0"></div>
      <div className="absolute inset-0 bg-[url('/img/background/pattern.png')] opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Content */}
          <div className="lg:w-1/2 text-white">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
              >
              Mengapa Memilih <br/>
              <span className="text-accent">Lossday Sejahtera?</span>
            </motion.h2>
            <motion.p 
              className="text-blue-100 text-lg mb-8 leading-relaxed"
              >
              Pengalaman bertahun-tahun di industri pariwisata membuat kami memahami betul bagaimana menciptakan perjalanan yang sempurna. Kami tidak hanya sekedar travel agent, kami adalah rekan petualang Anda.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-4"
                  >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-accent text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-blue-200 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Right Image/Video Placeholder */}
          <motion.div 
            className="lg:w-1/2 w-full"
            >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(/img/dokumentasi/gambar10.jpg)', backgroundColor: '#334155' }}
              ></div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
