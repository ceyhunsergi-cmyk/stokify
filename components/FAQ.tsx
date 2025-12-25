import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../constants';
import FadeIn from './FadeIn';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-[#F6F7F9]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold text-brand-blue text-center mb-12">
            Sıkça Sorulan Sorular
          </h2>
        </FadeIn>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <FadeIn key={index} delay={index * 50}>
              <div 
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-brand-text">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="text-brand-orange" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-400" size={20} />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 pt-0 text-brand-muted leading-relaxed text-sm animate-fade-in-up">
                    {faq.answer}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;