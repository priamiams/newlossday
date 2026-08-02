import { partnersData } from '../../data/partners';
import './Partners.css'; // We'll need a bit of custom CSS for the infinite scroll animation

const Partners = () => {
  // Duplicate array for infinite scroll effect
  const repeatedPartners = [...partnersData, ...partnersData, ...partnersData];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <h3 className="text-2xl font-bold text-gray-400 uppercase tracking-widest">
          Trusted By
        </h3>
      </div>
      
      <div className="relative w-full flex items-center">
        {/* Left/Right Fade Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        {/* Slider Track */}
        <div className="flex w-fit animate-infinite-scroll hover:[animation-play-state:paused]">
          {repeatedPartners.map((partner, index) => (
            <div 
              key={`${partner.id}-${index}`} 
              className="w-40 md:w-56 mx-4 flex items-center justify-center shrink-0"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
