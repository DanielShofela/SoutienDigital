
import React, { useState } from 'react';
// FIX: Imported Variants from framer-motion to correctly type animation variants.
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { MenuIcon, XIcon } from './icons';

interface HeaderProps {
  scrolled: boolean;
}

const navLinks = [
  { name: 'Accueil', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'À Propos', href: '#about' },
  { name: 'Tarifs', href: '#products' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

// FIX: Changed component definition to a standard function to avoid potential type conflicts with framer-motion props.
const Header = ({ scrolled }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const headerVariants: Variants = {
    initial: { backgroundColor: 'rgba(255, 255, 255, 0)', y: -100 },
    scrolled: { 
      backgroundColor: 'rgba(255, 255, 255, 1)', 
      y: 0,
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' 
    },
    transparent: { 
      backgroundColor: 'rgba(255, 255, 255, 0)', 
      y: 0,
      boxShadow: 'none' 
    },
  };

  // FIX: Explicitly typed mobileMenuVariants with Variants from framer-motion to resolve TypeScript error.
  const mobileMenuVariants: Variants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: '0%', transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const textColor = scrolled ? 'text-[#0B2D5C]' : 'text-white';
  const logoColor = scrolled ? 'text-[#0B2D5C]' : 'text-white';

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
        variants={headerVariants}
        initial="initial"
        animate={scrolled ? 'scrolled' : 'transparent'}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="text-2xl font-bold">
            <span className={logoColor}>Soutien</span>
            <span className="text-[#FF6600]">Digital</span>
          </a>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`${textColor} font-medium hover:text-[#FF6600] transition-colors duration-300`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`${textColor} z-50`}>
              {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-40 md:hidden"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-2xl text-[#0B2D5C] font-medium hover:text-[#FF6600] transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;