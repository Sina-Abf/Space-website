import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar';

const Crew = () => {
  return (
    <section className="min-h-screen bg-crew-mobile bg-cover bg-center md:bg-crew-tablet lg:bg-crew-desktop">
      <Navbar />
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth }}
      >
        <div className="text-white mb-8 flex items-center justify-center md:justify-start w-full gap-x-4 tracking-widest mt-10 lg:mt-2 md:text-xl lg:text-2xl lg:px-24 lg:py-6">
          <span className="text-navigationBar font-BarlowCondensed font-bold">
            01
          </span>
          <h3 className="font-BarlowCondensed">MEET YOUR CREW</h3>
        </div>
        <div className="px-12"></div>
      </motion.div>
    </section>
  );
};

export default Crew;
