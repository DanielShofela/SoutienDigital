
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { type ServiceCategory } from '../types';
import { BriefcaseIcon, CodeIcon, MegaphoneIcon, CheckIcon } from './icons';

const serviceCategories: ServiceCategory[] = [
  {
    icon: <BriefcaseIcon />,
    title: 'Création de Supports Professionnels',
    description: 'Nous concevons pour vous des supports percutants qui valorisent votre image et captent l\'attention, que vous soyez un particulier, un indépendant ou une PME.',
    services: [
      'CV & Lettres de motivation percutants',
      'Portfolios en ligne modernes',
      'Visuels (flyers, affiches, bannières)',
      'Création de logos & identité visuelle',
    ],
    cta: {
      text: 'Voir nos réalisations',
      href: '/portfolio-cv',
    }
  },
  {
    icon: <CodeIcon />,
    title: 'Développement Web & Présence Digitale',
    description: 'Nous bâtissons votre présence en ligne de A à Z avec des solutions web robustes, esthétiques et conçues pour la performance et la croissance.',
    services: [
        'Sites vitrines modernes et responsives',
        'Plateformes E-commerce complètes',
        'Optimisation Google Business Profile',
        'Logiciels de gestion sur mesure',
    ],
    cta: {
      text: 'Voir nos réalisations',
      href: '/portfolio-web',
    }
  },
  {
    icon: <MegaphoneIcon />,
    title: 'Marketing Digital & Visibilité',
    description: 'Augmentez votre notoriété et touchez votre cible grâce à des stratégies digitales éprouvées qui génèrent des résultats concrets et mesurables.',
    services: [
        'Community Management (animation, modération)',
        'Référencement SEO (local et global)',
        'Campagnes publicitaires (Google & Facebook Ads)',
        'Analyse et rapports de performance (Google Analytics)',
    ],
    cta: {
      text: 'Voir nos réalisations',
      href: '/portfolio-marketing',
    }
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};

const cardVariants: Variants = {
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

const Services = () => {
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
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Des solutions complètes et clé en main pour les particuliers, indépendants et PME. Nous transformons vos idées en succès digital.</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-lg flex flex-col shadow-sm hover:shadow-2xl transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 20px 0px rgba(255, 102, 0, 0.4)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-center">
                <div className="text-[#FF6600] mb-6 inline-block">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0B2D5C] mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow text-left">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="flex items-start">
                    <CheckIcon className="text-green-500 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{service}</span>
                  </li>
                ))}
              </ul>
              
              <div className="text-center mt-auto">
                 <motion.a
                  href={category.cta.href}
                  className="bg-[#FF6600] text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform duration-300 inline-block"
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255, 102, 0, 0.7)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  {category.cta.text}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
