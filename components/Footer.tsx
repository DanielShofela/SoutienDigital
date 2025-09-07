import React, { useState } from 'react';
import { motion } from 'framer-motion';

// FIX: Changed component definition to a standard function to avoid potential type conflicts with framer-motion props.
const Footer = () => {
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        setSubmissionStatus('loading');
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/mjkejyng', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmissionStatus('success');
                form.reset();
                setTimeout(() => setSubmissionStatus('idle'), 5000);
            } else {
                setSubmissionStatus('error');
            }
        } catch (error) {
            console.error('Newsletter submission error:', error);
            setSubmissionStatus('error');
        }
    };

  return (
    <motion.footer 
      className="bg-[#051e40] text-gray-300 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="text-2xl font-bold mb-4 inline-block">
              <span className="text-white">Soutien</span>
              <span className="text-[#FF6600]">Digital</span>
            </a>
            <p className="text-sm">Votre partenaire de confiance pour une croissance numérique explosive.</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-[#FF6600] transition-colors">À Propos</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-[#FF6600] transition-colors">Services</a></li>
              <li><a href="#products" onClick={(e) => scrollToSection(e, '#products')} className="hover:text-[#FF6600] transition-colors">Tarifs</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-[#FF6600] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:digitalsoutien@gmail.com" className="hover:text-[#FF6600] transition-colors">digitalsoutien@gmail.com</a></li>
              <li><a href="tel:+2250574928620" className="hover:text-[#FF6600] transition-colors">+225 05 74 92 86 20</a></li>
              <li>Abidjan, Côte d'Ivoire</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-sm mb-3">Recevez nos conseils et actualités.</p>
            <form onSubmit={handleNewsletterSubmit}>
              <div className="flex">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Votre email" 
                  required
                  className="w-full px-3 py-2 text-sm text-gray-800 rounded-l-md focus:outline-none" 
                  disabled={submissionStatus === 'loading'}
                />
                <button 
                  type="submit" 
                  className="bg-[#FF6600] text-white px-4 py-2 rounded-r-md font-semibold hover:bg-orange-600 transition-colors disabled:opacity-50"
                  disabled={submissionStatus === 'loading'}
                >
                  {submissionStatus === 'loading' ? '...' : 'OK'}
                </button>
              </div>
            </form>
            {submissionStatus === 'success' && (
              <p className="text-green-400 text-sm mt-2">Merci pour votre inscription !</p>
            )}
            {submissionStatus === 'error' && (
              <p className="text-red-400 text-sm mt-2">Une erreur est survenue. Veuillez réessayer.</p>
            )}
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Soutien Digital. Tous droits réservés.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;