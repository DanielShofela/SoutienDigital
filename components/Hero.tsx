import React from 'react';
// FIX: Imported Variants from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// FIX: Corrected typing for framer-motion variants by explicitly defining the Variants type, which resolves the 'ease' property type error.
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stats = [
    { value: "200+", label: "Clients Satisfaits" },
    { value: "50+", label: "Projets Réalisés" },
    { value: "5", label: "Années d'Expérience" },
    { value: "24/7", label: "Support Client" },
];

// FIX: Changed component definition to a standard function to avoid potential type conflicts with framer-motion props.
const Hero = () => {
    const animatedText = useTypewriter({
        words: ["Entreprise", "Startup", "Projet"],
        delaySpeed: 2000,
    });
    
    const scrollToServices = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
    }
     const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    }

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-white overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B2D5C] via-[#203a62] to-[#6d401a] z-0"></div>
      <div className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 bg-blue-500/20 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4 bg-[#FF6600]/25 rounded-full filter blur-3xl opacity-50"></div>
      
      <motion.div
        className="relative z-20 text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 h-24 md:h-36 lg:h-44 flex items-center justify-center flex-wrap"
          variants={itemVariants}
        >
          Propulsez Votre&nbsp;
          <span className="text-[#FF6600]">{animatedText}</span>
          <span className="inline-block w-1 h-10 md:h-16 lg:h-20 bg-gray-300 animate-pulse ml-2 opacity-75"></span>
          &nbsp;avec Soutien Digital
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200"
          variants={itemVariants}
        >
          Agence digitale spécialisée dans l'accompagnement des PME et startups vers le succès numérique
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          variants={itemVariants}
        >
          <motion.button 
            onClick={scrollToContact}
            className="bg-[#FF6600] text-white font-bold py-3 px-8 rounded-full shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255, 102, 0, 0.7)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Démarrer mon projet
          </motion.button>
          <motion.button
            onClick={scrollToServices}
            className="bg-white/10 border border-white text-white font-bold py-3 px-8 rounded-full"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Découvrir nos services
          </motion.button>
        </motion.div>
         <motion.div 
          className="w-full max-w-5xl mx-auto mt-20"
          variants={itemVariants}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#FF6600]">{stat.value}</p>
                <p className="text-sm md:text-base text-gray-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;