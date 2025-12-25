import React, { useState } from 'react';
import { STEPS } from '../constants';
import FadeIn from './FadeIn';
import { ChevronDown, ChevronUp } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#F6F7F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              Nasıl Çalışır?
            </h2>
            <p className="text-brand-muted">3 basit adımda işletmenizi dijitalleştirin.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>

          {STEPS.map((step, index) => (
            <FadeIn key={step.id} delay={index * 200}>
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-8 border-4 border-[#F6F7F9] relative z-10 group-hover:border-brand-orange/20 transition-colors duration-300">
                  <step.icon size={32} className="text-brand-blue group-hover:text-brand-orange transition-colors duration-300" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                    {step.id}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">
                  {step.title}
                </h3>
                <p className="text-brand-muted px-4 mb-4 text-sm">
                  {step.description}
                </p>
                
                <button
                  onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                  className="text-brand-orange text-sm font-semibold flex items-center gap-1 hover:text-orange-700 transition-colors"
                >
                  {expandedStep === step.id ? 'Daha az' : 'Daha fazla'}
                  {expandedStep === step.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out px-4 mt-2 ${
                    expandedStep === step.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-sm text-gray-600 bg-white p-3 rounded-lg border border-gray-100 shadow-sm text-left">
                    {step.details}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;