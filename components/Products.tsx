
import React from 'react';
import { motion } from 'framer-motion';
import { type ProductPlan } from '../types';
import { CheckIcon } from './icons';

const plans: ProductPlan[] = [
  {
    name: 'Basique',
    price: 'Sur Devis',
    features: [
      'Site vitrine (1-5 pages)',
      'Design responsive',
      'Formulaire de contact',
      'Hébergement & Maintenance (1 an)'
    ],
    popular: false
  },
  {
    name: 'Pro',
    price: 'Sur Devis',
    features: [
      'Tout du plan Basique',
      'Blog ou Portfolio intégré',
      'Optimisation SEO de base',
      'Intégration réseaux sociaux',
      'Support prioritaire'
    ],
    popular: true
  },
  {
    name: 'Entreprise',
    price: 'Sur Devis',
    features: [
      'Tout du plan Pro',
      'Fonctionnalités sur mesure',
      'E-commerce & Paiement en ligne',
      'Stratégie Marketing complète',
      'Rapports de performance'
    ],
    popular: false
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: 'spring', stiffness: 120, damping: 15 }
  }
};


const Products: React.FC = () => {
    const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  return (
    <section id="products" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2D5C]">Des Tarifs Adaptés à Vos Ambitions</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Des solutions transparentes et flexibles pour propulser votre projet.</p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-3 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-white p-8 rounded-lg shadow-lg ${plan.popular ? 'border-2 border-[#FF7A00] transform lg:scale-110' : 'border'}`}
              variants={cardVariants}
            >
              {plan.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#FF7A00] text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
                  Populaire
                </div>
              )}
              <h3 className="text-2xl font-bold text-[#0B2D5C] text-center mb-4">{plan.name}</h3>
              <p className="text-4xl font-extrabold text-center mb-6 text-[#0B2D5C]">{plan.price}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckIcon className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                onClick={scrollToContact}
                className={`w-full font-bold py-3 px-8 rounded-full transition-colors duration-300 ${
                  plan.popular 
                  ? 'bg-[#FF7A00] text-white hover:bg-orange-600' 
                  : 'bg-transparent border-2 border-[#0B2D5C] text-[#0B2D5C] hover:bg-[#0B2D5C] hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Choisir ce plan
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
