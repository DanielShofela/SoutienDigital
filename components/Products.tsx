import React from 'react';
import { motion, Variants } from 'framer-motion';
import { type ProductPlan } from '../types';
import { CheckIcon } from './icons';

interface ProductsProps {
  onPlanSelect: (planName: string) => void;
}

const plans: ProductPlan[] = [
  {
    name: 'Essentiel',
    price: '25 000 FCFA / mois',
    oldPrice: '50 000 FCFA',
    features: [
      'Site Vitrine (jusqu\'à 5 pages)',
      'Design Responsive (Mobile/Tablette)',
      'Formulaire de contact',
      'Intégration Réseaux Sociaux',
      'Hébergement & Domaine (1 an)',
      'Optimisation SEO de base',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: '75 000 FCFA / mois',
    oldPrice: '150 000 FCFA',
    features: [
      'Tout le plan Essentiel',
      'Site E-commerce (jusqu\'à 20 produits)',
      'Système de paiement intégré',
      'Blog / Section Actualités',
      'Formation à la gestion du site',
      'Support Prioritaire (Email)',
    ],
    popular: true,
  },
  {
    name: 'Entreprise',
    price: 'Sur Devis',
    features: [
      'Tout le plan Pro',
      'Fonctionnalités sur mesure',
      'Intégrations API complexes',
      'Stratégie Marketing Digital',
      'Maintenance & Sécurité avancées',
      'Rapports de performance mensuels',
    ],
    popular: false,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const Products = ({ onPlanSelect }: ProductsProps) => {
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2D5C]">Nos Formules Tarifaires</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Des solutions claires et adaptées à chaque budget pour propulser votre projet.</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              className={`relative bg-white rounded-xl shadow-lg p-8 flex flex-col ${plan.popular ? 'animated-popular-card' : 'border border-gray-200'}`}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6600] text-white text-sm font-bold px-4 py-1 rounded-full">
                  Le plus populaire
                </div>
              )}
              <h3 className="text-2xl font-bold text-[#0B2D5C] mb-2">{plan.name}</h3>
              <div className="mb-6 h-12 flex items-baseline">
                {plan.oldPrice && <span className="text-lg text-gray-500 line-through mr-2">{plan.oldPrice}</span>}
                <span className="text-3xl font-extrabold text-[#0B2D5C]">{plan.price}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="text-green-500 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                onClick={() => onPlanSelect(plan.name)}
                className={`w-full mt-auto font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 ${
                    plan.popular 
                    ? 'bg-[#FF6600] text-white popular-plan-button' 
                    : 'bg-white text-[#FF6600] border-2 border-[#FF6600] hover:bg-[#FF6600] hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
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