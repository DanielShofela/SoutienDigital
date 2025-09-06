
import React from 'react';
import { motion } from 'framer-motion';
import { type Service } from '../types';
import { BriefcaseIcon, CodeIcon, MegaphoneIcon, GlobeIcon } from './icons';

const services: Service[] = [
  {
    icon: <BriefcaseIcon />,
    title: 'CV & Portfolios',
    description: 'Créez une première impression inoubliable avec un CV ou un portfolio en ligne professionnel et percutant.'
  },
  {
    icon: <CodeIcon />,
    title: 'Sites Web sur mesure',
    description: 'Des sites vitrines aux plateformes e-commerce complexes, nous développons des solutions web performantes et uniques.'
  },
  {
    icon: <MegaphoneIcon />,
    title: 'Marketing Digital',
    description: 'Augmentez votre visibilité et engagez votre audience grâce à nos stratégies de marketing digital ciblées (SEO, SEA, réseaux sociaux).'
  },
  {
    icon: <GlobeIcon />,
    title: 'Présence en Ligne Complète',
    description: 'Nous gérons tous les aspects de votre identité numérique pour une présence cohérente et professionnelle sur tous les canaux.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2D5C]">Nos Expertises</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Des solutions sur mesure pour chaque étape de votre parcours digital.</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-lg text-center flex flex-col items-center shadow-sm hover:shadow-2xl transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 20px 0px rgba(255, 122, 0, 0.4)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="text-[#FF7A00] mb-6"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-[#0B2D5C] mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
