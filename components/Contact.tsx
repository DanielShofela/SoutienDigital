
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setFormState('error');
      setTimeout(() => setFormState('idle'), 2000);
      return;
    }

    setFormState('loading');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setFormState('idle'), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#0B2D5C] text-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Prêt à Démarrer ?</h2>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis gratuit.</p>
        </motion.div>

        <motion.div
          className="max-w-xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-2xl text-gray-800"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <AnimatePresence mode="wait">
            {formState === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center"
              >
                <h3 className="text-2xl font-bold text-green-500 mb-2">Message Envoyé !</h3>
                <p>Merci de nous avoir contactés. Nous reviendrons vers vous très bientôt.</p>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} noValidate>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                  <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF7A00] focus:border-[#FF7A00] transition" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF7A00] focus:border-[#FF7A00] transition" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea id="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF7A00] focus:border-[#FF7A00] transition" required></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-[#FF7A00] text-white font-bold py-3 px-8 rounded-full shadow-lg disabled:bg-orange-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255, 122, 0, 0.7)" }}
                  whileTap={{ scale: 0.95 }}
                  disabled={formState === 'loading'}
                >
                  {formState === 'loading' && <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>}
                  {formState === 'loading' ? 'Envoi en cours...' : 'Envoyer le Message'}
                </motion.button>
                 {formState === 'error' && <p className="text-red-500 text-center mt-4">Veuillez remplir tous les champs.</p>}
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
