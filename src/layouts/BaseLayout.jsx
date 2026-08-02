import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FloatingWhatsApp from '../components/layout/FloatingWhatsApp';
import BackToTop from '../components/layout/BackToTop';
import LoadingScreen from '../components/layout/LoadingScreen';
import ScrollProgress from '../components/layout/ScrollProgress';
import { AnimatePresence, motion } from 'framer-motion';

const BaseLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <AnimatePresence mode="wait">
        <LoadingScreen />
      </AnimatePresence>
      <ScrollProgress />
      <Navbar />
      
      <main className="flex-grow overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
};

export default BaseLayout;
