import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import DemoPanel from './components/DemoPanel';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Intro from './components/Intro';
import AuthModal from './components/AuthModal';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('register');

  const handleOpenAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F6F7F9]">
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        initialMode={authMode} 
        onClose={() => setIsAuthModalOpen(false)} 
      />

      <div className={`transition-opacity duration-1000 ${showIntro ? 'hidden opacity-0' : 'block opacity-100'}`}>
        <Navbar onOpenAuth={handleOpenAuth} />
        <main>
          <Hero onOpenAuth={handleOpenAuth} />
          <Features />
          <HowItWorks />
          <DemoPanel />
          <Testimonials />
          <Pricing onOpenAuth={handleOpenAuth} />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;