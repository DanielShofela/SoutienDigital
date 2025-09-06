
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type FaqItem } from '../types';
import { ChevronDownIcon } from './icons';

const faqData: FaqItem[] = [
  {
    question: 'Quels types d\'entreprises aidez-vous ?',
    answer: 'Nous sommes spécialisés dans l\'accompagnement des PME, des startups et des entrepreneurs individuels qui cherchent à établir ou à renforcer leur présence en ligne. Notre approche flexible s\'adapte à divers secteurs d\'activité.'
  },
  {
    question: 'Combien de temps faut-il pour créer un site web ?',
    answer: 'Le délai varie en fonction de la complexité du projet. Un site vitrine simple peut prendre 2 à 4 semaines, tandis qu\'une plateforme e-commerce ou une application web sur mesure peut nécessiter plusieurs mois. Nous établissons toujours un calendrier clair dès le début du projet.'
  },
  {
    question: 'Proposez-vous des services de maintenance après le lancement ?',
    answer: 'Absolument. Nous offrons des forfaits de maintenance pour garantir que votre site reste sécurisé, à jour et performant. Cela inclut les mises à jour logicielles, les sauvegardes et le support technique.'
  },
  {
    question: 'Comment se déroule le processus de collaboration ?',
    answer: 'Notre processus commence par une phase de découverte pour comprendre vos besoins. Ensuite, nous passons à la conception, au développement, aux tests et enfin au lancement. Nous vous impliquons à chaque étape pour garantir que le produit final correspond parfaitement à votre vision.'
  }
];

const AccordionItem: React.FC<{
  item: FaqItem;
  isOpen: boolean;
  onClick: () => void;
}> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left text-lg font-medium text-[#0B2D5C]"
        onClick={onClick}
      >
        <span>{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDownIcon />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-gray-600">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2D5C]">Questions Fréquentes</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Trouvez les réponses à vos interrogations les plus courantes.</p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
