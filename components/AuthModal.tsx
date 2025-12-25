import React, { useState, useEffect } from 'react';
import { X, Mail, Lock, Loader2, CheckCircle } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  initialMode: 'login' | 'register';
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, initialMode, onClose }) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setMode(initialMode);
    setSuccess(false);
  }, [initialMode, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-blue/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="bg-white rounded-2xl w-full max-w-md relative z-10 shadow-2xl overflow-hidden animate-fade-in-up">
        {success ? (
          <div className="p-12 text-center flex flex-col items-center justify-center">
             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600 animate-bounce">
                <CheckCircle size={32} />
             </div>
             <h3 className="text-2xl font-bold text-brand-blue mb-2">Başarılı!</h3>
             <p className="text-gray-500">
               {mode === 'login' ? 'Giriş yapılıyor...' : 'Kayıt olundu, panele yönlendiriliyorsunuz...'}
             </p>
          </div>
        ) : (
          <>
            <div className="px-8 pt-8 pb-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-brand-blue">
                {mode === 'login' ? 'Giriş Yap' : 'Ücretsiz Kayıt Ol'}
              </h3>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-gray-900 transition-colors bg-gray-50 p-2 rounded-full"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-posta Adresi</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="email" 
                    required 
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 text-brand-text placeholder-gray-400"
                    placeholder="ornek@sirket.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Şifre</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="password" 
                    required 
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 text-brand-text placeholder-gray-400"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-brand-orange text-white rounded-xl font-bold text-lg hover:bg-brand-orangeHover transition-colors shadow-lg shadow-orange-200 flex items-center justify-center"
              >
                {loading ? <Loader2 className="animate-spin" /> : (mode === 'login' ? 'Giriş Yap' : 'Hemen Başla')}
              </button>
            </form>

            <div className="bg-gray-50 px-8 py-4 text-center text-sm text-gray-500">
              {mode === 'login' ? (
                <>
                  Hesabınız yok mu?{' '}
                  <button onClick={() => setMode('register')} className="text-brand-blue font-semibold hover:underline">
                    Kayıt Olun
                  </button>
                </>
              ) : (
                <>
                  Zaten üye misiniz?{' '}
                  <button onClick={() => setMode('login')} className="text-brand-blue font-semibold hover:underline">
                    Giriş Yapın
                  </button>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthModal;