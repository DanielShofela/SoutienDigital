
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stats = [
    { value: "+200", label: "Clients Satisfaits" },
    { value: "98%", label: "Taux de Réussite" },
    { value: "10+", label: "Années d'Expérience" },
];

const Hero: React.FC = () => {
    const scrollToServices = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
    }
     const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    }

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B2D5C] to-[#1a4a8c] z-0"></div>
      <div 
        className="absolute inset-0 z-10 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(#FF7A00 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      ></div>
      
      <motion.div
        className="relative z-20 text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4"
          variants={itemVariants}
        >
          Propulsez Votre Entreprise avec <span className="text-[#FF7A00]">Soutien Digital</span>
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200"
          variants={itemVariants}
        >
          Votre partenaire de confiance pour une croissance numérique explosive. De la conception de sites web au marketing digital, nous transformons vos idées en succès.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          variants={itemVariants}
        >
          <motion.button 
            onClick={scrollToContact}
            className="bg-[#FF7A00] text-white font-bold py-3 px-8 rounded-full shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255, 122, 0, 0.7)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Devis Gratuit
          </motion.button>
          <motion.button
            onClick={scrollToServices}
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Nos Services
          </motion.button>
        </motion.div>
         <motion.div 
          className="mt-16 flex justify-center gap-8 md:gap-16"
          variants={itemVariants}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#FF7A00]">{stat.value}</p>
              <p className="text-sm md:text-base text-gray-300">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </motion.div>
    </section>
  );
};

export default Hero;
