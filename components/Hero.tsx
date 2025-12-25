import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import FadeIn from './FadeIn';

interface HeroProps {
  onOpenAuth: (mode: 'register') => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAuth }) => {
  const scrollToDemo = () => {
    document.getElementById('demo-panel')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-28 px-4 overflow-hidden bg-gradient-to-b from-[#F6F7F9] to-white">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn delay={100}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-brand-blue text-sm font-semibold mb-8 border border-blue-100">
            <span className="flex h-2 w-2 rounded-full bg-brand-orange animate-pulse"></span>
            Yeni nesil işletme yönetimi
          </div>
        </FadeIn>
        
        <FadeIn delay={200}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-blue leading-tight mb-6 tracking-tight">
            Stoklarını Bil,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-500">Kârını Artır</span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={300}>
          <p className="text-lg md:text-xl text-brand-muted mb-10 max-w-2xl mx-auto leading-relaxed">
            Restoran, kafe ve marketler için otomatik stok analizi, kârlılık hesaplama ve akıllı kampanya önerileri tek platformda.
          </p>
        </FadeIn>
        
        <FadeIn delay={400}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => onOpenAuth('register')}
              className="w-full sm:w-auto px-8 py-4 bg-brand-orange text-white rounded-xl font-semibold text-lg hover:bg-brand-orangeHover transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              Ücretsiz dene <ArrowRight size={20} />
            </button>
            <button 
              onClick={scrollToDemo}
              className="w-full sm:w-auto px-8 py-4 bg-white text-brand-text border border-gray-200 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
            >
              <PlayCircle size={20} className="text-brand-blue" />
              Demo Gör
            </button>
          </div>
        </FadeIn>

        <FadeIn delay={600}>
          <div className="mt-16 pt-8 border-t border-gray-200/60">
            <p className="text-sm text-gray-400 font-medium mb-4">500+ İşletme tarafından güveniliyor</p>
            <div className="flex justify-center items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Placeholders for logos */}
               <div className="h-6 font-bold text-xl text-gray-600">Getir</div>
               <div className="h-6 font-bold text-xl text-gray-600">Yemeksepeti</div>
               <div className="h-6 font-bold text-xl text-gray-600">Trendyol</div>
               <div className="h-6 font-bold text-xl text-gray-600">Adisyo</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;