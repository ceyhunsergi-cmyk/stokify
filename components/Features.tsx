import React, { useState } from 'react';
import { FEATURES } from '../constants';
import FadeIn from './FadeIn';
import { X, ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<typeof FEATURES[0] | null>(null);

  return (
    <section id="features" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              İşletmeler için gerçek çözümler
            </h2>
            <p className="text-lg text-brand-muted">
              Karmaşık tablolarla uğraşmayı bırakın. İhtiyacınız olan tüm veriler sadeleştirilmiş halde karşınızda.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <FadeIn key={index} delay={index * 100} className="h-full">
              <button 
                onClick={() => setActiveFeature(feature)}
                className="bg-[#F6F7F9] p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:bg-white border border-transparent hover:border-blue-100 group h-full w-full text-left flex flex-col"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3 group-hover:text-brand-orange transition-colors">
                  {feature.title}
                </h3>
                <p className="text-brand-muted leading-relaxed text-sm mb-4 flex-grow">
                  {feature.description}
                </p>
                <div className="text-brand-blue text-sm font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Detayları gör <ArrowRight size={16} />
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Feature Detail Modal */}
      {activeFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-brand-blue/40 backdrop-blur-sm"
            onClick={() => setActiveFeature(null)}
          ></div>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative z-10 animate-fade-in-up p-6 md:p-8 max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setActiveFeature(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 bg-gray-100 rounded-full p-2 transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-brand-blue">
              <activeFeature.icon size={28} />
            </div>
            
            <h3 className="text-2xl font-bold text-brand-blue mb-4">
              {activeFeature.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              {activeFeature.longDescription}
            </p>
            
            <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 text-sm text-brand-text">
              <span className="font-semibold text-brand-orange block mb-1">Nasıl çalışır?</span>
              {activeFeature.example}
            </div>

            <button 
              onClick={() => setActiveFeature(null)}
              className="w-full mt-8 py-3 bg-brand-blue text-white rounded-xl font-semibold hover:bg-blue-900 transition-colors"
            >
              Anladım, Teşekkürler
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Features;