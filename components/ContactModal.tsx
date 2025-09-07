import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { XIcon } from './icons';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string | null;
}

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, y: -50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 25 } },
  exit: { opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.2 } },
};

const ContactModal = ({ isOpen, onClose, planName }: ContactModalProps) => {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscapeKey);
      setSubmissionStatus('idle'); // Reset status when modal opens
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; // Store form reference
    setSubmissionStatus('loading');
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mblaqgej', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmissionStatus('success');
        form.reset(); // Use stored reference
        setTimeout(() => {
          onClose();
        }, 2000); // Close modal after 2 seconds on success
      } else {
        // Formspree can redirect on success, which results in a non-OK response.
        // We check if the response is a JSON error from Formspree. If not, we assume success.
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            setSubmissionStatus('error');
        } else {
            setSubmissionStatus('success');
            form.reset(); // Use stored reference
            setTimeout(() => {
              onClose();
            }, 2000);
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmissionStatus('error');
    }
  };
  
  const defaultMessage = planName ? `Bonjour, je suis intéressé(e) par le plan "${planName}" et j'aimerais recevoir plus d'informations.` : '';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-lg shadow-xl w-full max-w-lg p-8 relative"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
              aria-label="Close modal"
            >
              <XIcon />
            </button>
            
            {submissionStatus === 'success' ? (
              <div className="text-center py-8">
                <h2 className="text-2xl font-bold text-green-600 mb-2">Demande Envoyée !</h2>
                <p className="text-gray-600">Merci de votre intérêt. Nous vous recontacterons dans les plus brefs délais.</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-[#0B2D5C] mb-2">Demande de Devis</h2>
                <p className="text-gray-600 mb-6">
                  Vous êtes intéressé par notre formule <span className="font-bold text-[#FF6600]">{planName}</span>. Remplissez ce formulaire pour que nous puissions vous recontacter.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="plan" value={planName || 'Non spécifié'} />
                  <div>
                    <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                    <input type="text" id="modal-name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF6600] focus:border-[#FF6600]" required />
                  </div>
                  <div>
                    <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" id="modal-email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF6600] focus:border-[#FF6600]" required />
                  </div>
                  <div>
                    <label htmlFor="modal-phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                    <input type="tel" id="modal-phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF6600] focus:border-[#FF6600]" required />
                  </div>
                  <div>
                    <label htmlFor="modal-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="modal-message" 
                      name="message" 
                      rows={4} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF6600] focus:border-[#FF6600]"
                      defaultValue={defaultMessage}
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    disabled={submissionStatus === 'loading'}
                    className="w-full bg-[#FF6600] text-white font-bold py-3 px-8 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: submissionStatus !== 'loading' ? 1.05 : 1, boxShadow: submissionStatus !== 'loading' ? "0px 0px 15px rgba(255, 102, 0, 0.7)" : "none" }}
                    whileTap={{ scale: submissionStatus !== 'loading' ? 0.95 : 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    {submissionStatus === 'loading' ? 'Envoi en cours...' : 'Envoyer ma demande'}
                  </motion.button>
                  {submissionStatus === 'error' && (
                    <p className="text-red-500 text-sm text-center mt-2">Une erreur est survenue. Veuillez réessayer.</p>
                  )}
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;