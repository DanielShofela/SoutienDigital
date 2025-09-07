import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; // Store form reference
    setSubmissionStatus('loading');
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xandaezo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmissionStatus('success');
        form.reset(); // Use stored reference
        setTimeout(() => setSubmissionStatus('idle'), 5000); // Reset status after 5 seconds
      } else {
        // Formspree can redirect on success, which results in a non-OK response.
        // We check if the response is a JSON error from Formspree. If not, we assume success.
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            setSubmissionStatus('error');
        } else {
            setSubmissionStatus('success');
            form.reset(); // Use stored reference
            setTimeout(() => setSubmissionStatus('idle'), 5000);
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmissionStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2D5C]">Contactez-Nous</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Prêt à démarrer votre projet ? Remplissez le formulaire ci-dessous.</p>
        </motion.div>
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF6600] focus:border-[#FF6600]" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF6600] focus:border-[#FF6600]" required />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                <input type="text" id="subject" name="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF6600] focus:border-[#FF6600]" required />
              </div>
               <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone (Optionnel)</label>
                <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF6600] focus:border-[#FF6600]" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF6600] focus:border-[#FF6600]" required></textarea>
            </div>
            <motion.button
              type="submit"
              disabled={submissionStatus === 'loading'}
              className="w-full bg-[#FF6600] text-white font-bold py-3 px-8 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: submissionStatus !== 'loading' ? 1.05 : 1, boxShadow: submissionStatus !== 'loading' ? "0px 0px 15px rgba(255, 102, 0, 0.7)" : "none" }}
              whileTap={{ scale: submissionStatus !== 'loading' ? 0.95 : 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              {submissionStatus === 'loading' ? 'Envoi en cours...' : 'Envoyer le Message'}
            </motion.button>
             {submissionStatus === 'success' && (
              <p className="text-green-600 text-center">Message envoyé avec succès ! Nous vous recontacterons bientôt.</p>
            )}
            {submissionStatus === 'error' && (
              <p className="text-red-500 text-center">Une erreur est survenue. Veuillez réessayer.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;