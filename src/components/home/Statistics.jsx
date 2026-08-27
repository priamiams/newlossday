import pkg from 'react-countup';
const CountUp = pkg.default ? pkg.default : pkg;
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { MdGroups, MdExplore, MdStar, MdEvent } from 'react-icons/md';

const Statistics = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { id: 1, icon: <MdGroups />, value: 5000, suffix: "+", label: "Happy Travelers" },
    { id: 2, icon: <MdExplore />, value: 150, suffix: "+", label: "Destinasi Trip" },
    { id: 3, icon: <MdEvent />, value: 300, suffix: "+", label: "Event Sukses" },
    { id: 4, icon: <MdStar />, value: 4.9, suffix: "", label: "Rating Kepuasan", decimals: 1 },
  ];





  return (
    <section className="relative py-24 bg-dark text-white overflow-hidden" ref={ref}>
      {/* Background Decor */}
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url(/img/dokumentasi/gambar23.jpg)' }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-primary/80 to-dark"></div>

      <div className="container relative mx-auto px-4 md:px-8 z-10">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
          {stats.map((stat) => (
            <motion.div key={stat.id} className="flex flex-col items-center group">
              <div className="text-accent text-5xl mb-4 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(250,150,30,0.5)]">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {inView ? (
                  <CountUp start={0} end={stat.value} decimals={stat.decimals || 0} duration={2.5} separator="." />
                ) : (
                  "0"
                )}
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <p className="text-gray-300 font-medium tracking-wide uppercase text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
