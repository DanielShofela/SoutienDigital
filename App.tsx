import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Products from './components/Products';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Let the animation finish before clearing the plan name
    setTimeout(() => {
        setSelectedPlan(null);
    }, 300);
  };

  return (
    <div className="bg-white">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <Services />
        <About />
        <Products onPlanSelect={handlePlanSelect} />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ContactModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        planName={selectedPlan}
      />
    </div>
  );
};

export default App;