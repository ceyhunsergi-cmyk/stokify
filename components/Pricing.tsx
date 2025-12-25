import React from 'react';
import { Check } from 'lucide-react';
import { PRICING_PLANS } from '../constants';
import FadeIn from './FadeIn';

interface PricingProps {
  onOpenAuth: (mode: 'register') => void;
}

const Pricing: React.FC<PricingProps> = ({ onOpenAuth }) => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              Uygun fiyat — aylık 20 TL’den başlar
            </h2>
            <p className="text-brand-muted">
              Kredi kartı gerekmez. 14 gün ücretsiz deneyin.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <FadeIn key={index} delay={index * 150} className="h-full flex">
              <div 
                className={`rounded-2xl p-8 flex flex-col w-full transition-transform duration-300 hover:-translate-y-2 ${
                  plan.highlight 
                    ? 'bg-white shadow-2xl scale-105 z-10 border-2 border-brand-orange' 
                    : 'bg-[#F6F7F9] border border-gray-100 text-brand-text'
                }`}
              >
                <div className="mb-6">
                  {plan.highlight && (
                    <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                      En Popüler
                    </span>
                  )}
                  <h3 className="text-xl font-bold mb-2 text-brand-blue">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-brand-text">
                      {plan.price}
                    </span>
                    <span className="text-sm text-gray-500">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <div className={`rounded-full p-1 ${plan.highlight ? 'bg-orange-100 text-brand-orange' : 'bg-blue-100 text-brand-blue'}`}>
                        <Check size={14} />
                      </div>
                      <span className="text-gray-600">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => onOpenAuth('register')}
                  className={`w-full py-3 rounded-xl font-semibold transition-colors shadow-md ${
                    plan.highlight
                      ? 'bg-brand-orange text-white hover:bg-brand-orangeHover'
                      : 'bg-white text-brand-blue border-2 border-brand-blue hover:bg-blue-50'
                  }`}
                >
                  Planı Seç
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;