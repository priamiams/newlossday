import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <>
      <SEO title="404 Not Found" />
      <div className="min-h-[70vh] flex items-center justify-center pt-20">
        <div className="text-center px-4">
          <motion.h1 
            className="text-9xl font-bold text-primary mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            404
          </motion.h1>
          <motion.h2 
            className="text-3xl font-bold text-dark mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Halaman Tidak Ditemukan
          </motion.h2>
          <motion.p 
            className="text-gray-600 mb-8 max-w-md mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Maaf, halaman yang Anda cari mungkin telah dihapus, diubah namanya, atau tidak tersedia untuk sementara waktu.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link to="/" className="btn-primary inline-block">
              Kembali ke Beranda
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
