import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  onOpenAuth: (mode: 'login' | 'register') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAuth }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F6F7F9]/90 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-brand-blue tracking-tight">Stokify</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-brand-text hover:text-brand-orange transition-colors font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
            <button
               onClick={() => onOpenAuth('login')}
               className="text-brand-blue font-medium text-sm hover:text-brand-orange transition-colors"
            >
              Giriş Yap
            </button>
            <button
              onClick={() => onOpenAuth('register')}
              className="px-5 py-2.5 bg-brand-blue text-white rounded-xl text-sm font-semibold hover:bg-blue-900 transition-colors shadow-sm"
            >
              Ücretsiz Dene
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-orange hover:bg-gray-50"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenAuth('login');
                }}
                className="w-full text-center px-4 py-3 text-brand-blue font-semibold border border-brand-blue rounded-xl"
              >
                Giriş Yap
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenAuth('register');
                }}
                className="w-full text-center px-4 py-3 bg-brand-blue text-white rounded-xl font-semibold"
              >
                Ücretsiz Dene
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;