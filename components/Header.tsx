
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Search, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, NAVIGATION } from '../constants';

interface HeaderProps {
  onLogoClick: () => void;
  onNavigate?: (view: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href === '#products' && onNavigate) {
      e.preventDefault();
      onNavigate('products');
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={onLogoClick}>
          <div className="w-10 h-10 bg-stone-900 rounded-lg flex items-center justify-center text-white font-serif italic font-bold text-xl transition-transform group-hover:scale-110">
            {BUSINESS_INFO.name.charAt(0)}
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight text-stone-900">{BUSINESS_INFO.name}</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAVIGATION.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={(e) => handleLinkClick(e, item.href)}
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <a 
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex p-2.5 bg-[#25D366]/10 text-[#25D366] rounded-full hover:bg-[#25D366]/20 transition-all active:scale-90"
            aria-label="WhatsApp"
          >
            <MessageCircle size={20} fill="currentColor" />
          </a>

          <a 
            href={`tel:${BUSINESS_INFO.phone}`}
            className="hidden md:flex p-2.5 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-all active:scale-90"
            aria-label="Call"
          >
            <Phone size={20} fill="currentColor" />
          </a>

          <button className="hidden md:flex p-2.5 hover:bg-stone-100 rounded-full transition-colors text-stone-600">
            <Search size={20} />
          </button>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-stone-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-100 p-6 absolute top-full left-0 right-0 shadow-xl flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {NAVIGATION.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={(e) => handleLinkClick(e, item.href)}
              className="text-lg font-medium text-stone-700 py-3 border-b border-stone-50 flex items-center justify-between group"
            >
              {item.label}
              <div className="w-6 h-6 rounded-full bg-stone-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Menu size={12} />
              </div>
            </a>
          ))}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <a 
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} fill="currentColor" />
              WhatsApp
            </a>
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="bg-stone-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2"
            >
              <Phone size={20} fill="currentColor" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
