
import React from 'react';
// FIX: Imported Variants from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { TargetIcon, EyeIcon, DiamondIcon } from './icons';

// FIX: Changed component definition to a standard function to avoid potential type conflicts with framer-motion props.
const About = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  // FIX: Added a return type of Variants to the function to fix the framer-motion type error.
  const itemVariants = (fromLeft = true): Variants => ({
    hidden: { opacity: 0, x: fromLeft ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  });

  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2D5C]">Qui Sommes-Nous ?</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Votre succès est notre mission. Découvrez ce qui nous anime.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <img src="https://picsum.photos/600/400" alt="Team discussing work" className="rounded-lg shadow-2xl" />
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants(false)} className="mb-8 flex items-start gap-4">
              <div className="text-[#FF6600] mt-1"><TargetIcon /></div>
              <div>
                <h3 className="text-xl font-semibold text-[#0B2D5C] mb-2">Notre Mission</h3>
                <p className="text-gray-600">Fournir des solutions numériques innovantes et sur mesure qui génèrent des résultats concrets pour les PME et startups, en agissant comme un véritable partenaire de leur croissance.</p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants(false)} className="mb-8 flex items-start gap-4">
              <div className="text-[#FF6600] mt-1"><EyeIcon /></div>
              <div>
                <h3 className="text-xl font-semibold text-[#0B2D5C] mb-2">Notre Vision</h3>
                <p className="text-gray-600">Devenir l'agence digitale de référence, reconnue pour son expertise, sa créativité et son engagement indéfectible envers la réussite de ses clients.</p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants(false)} className="flex items-start gap-4">
              <div className="text-[#FF6600] mt-1"><DiamondIcon /></div>
              <div>
                <h3 className="text-xl font-semibold text-[#0B2D5C] mb-2">Nos Valeurs</h3>
                <p className="text-gray-600">Partenariat, Innovation, Transparence et Excellence. Ces piliers guident chacune de nos actions et collaborations.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;