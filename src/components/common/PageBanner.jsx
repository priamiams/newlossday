import { motion } from 'framer-motion';

const PageBanner = ({ title, bgImage }) => {
  return (
    <div className="relative h-[40vh] md:h-[50vh] min-h-[300px] flex items-center justify-center pt-16">
      {/* Background Image Setup (using a color gradient as fallback if bgImage is not passed) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: bgImage ? `url(${bgImage})` : 'none',
          backgroundColor: bgImage ? 'transparent' : 'var(--color-primary)' 
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>
        <motion.div 
          className="w-24 h-1 bg-accent mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>
    </div>
  );
};

export default PageBanner;
