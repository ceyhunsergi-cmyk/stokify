import React, { useEffect, useState } from 'react';

interface IntroProps {
  onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2 seconds
    const timer1 = setTimeout(() => {
      setIsFadingOut(true);
    }, 2200);

    // Call onComplete after animation finishes
    const timer2 = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-black transition-opacity duration-700 ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
          Sergi Digital
        </h1>
        <div className="h-0.5 w-12 bg-brand-orange mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 text-sm mt-4 font-medium tracking-widest uppercase">
          Presents
        </p>
      </div>
    </div>
  );
};

export default Intro;