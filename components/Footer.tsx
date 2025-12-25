import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue pt-16 pb-8 text-white border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 tracking-tight flex items-center gap-2">
              Sergi Digital
              <span className="text-xs bg-brand-orange px-2 py-0.5 rounded text-white font-normal">v1.0</span>
            </h3>
            <p className="text-blue-200 max-w-sm text-sm leading-relaxed mb-6">
              Restoran ve marketler için veriye dayalı büyüme platformu. Stoklarınızı yönetin, kârlılığınızı artırın ve işinizi dijital dünyaya taşıyın.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Kurumsal</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Kariyer</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Gizlilik Politikası</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Kullanım Şartları</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Bülten</h4>
            <p className="text-xs text-blue-200 mb-4">
              Yeni özellikler ve e-ticaret ipuçları için kaydolun.
            </p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="E-posta adresiniz" 
                className="px-4 py-2 rounded-lg bg-blue-900/50 border border-blue-700 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-brand-orange text-sm"
              />
              <button className="px-4 py-2 bg-brand-orange text-white rounded-lg text-sm font-semibold hover:bg-brand-orangeHover transition-colors">
                Abone Ol
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-blue-800/50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-blue-300">
          <p>&copy; {new Date().getFullYear()} Sergi Digital Teknoloji A.Ş. Tüm hakları saklıdır.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <span>Istanbul, Türkiye</span>
             <span>•</span>
             <a href="#" className="hover:text-white">Destek</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;