
import React, { useEffect, useState } from 'react';
import { X, MessageCircle, Map as MapIcon, Layers, Sparkles, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  const whatsappQuoteLink = `https://wa.me/919019087750?text=${encodeURIComponent("Hello Matsyavahventures! I'm interested in getting a Free Quote for a 2D Floor Plan and Elevation project.")}`;

  return (
    <div 
      className={`fixed inset-0 z-[200] flex items-center justify-center p-4 transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div 
        className={`relative w-full max-w-lg bg-white rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 transform ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-12'}`}
      >
        {/* Top Decorative Banner */}
        <div className="h-32 bg-stone-900 relative flex items-center justify-center overflow-hidden">
           <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500 via-transparent to-transparent"></div>
           </div>
           <div className="relative flex gap-8">
              <div className="w-12 h-12 bg-white/10 rounded-xl backdrop-blur-md flex items-center justify-center text-amber-400 rotate-12">
                 <MapIcon size={24} />
              </div>
              <div className="w-12 h-12 bg-white/10 rounded-xl backdrop-blur-md flex items-center justify-center text-white -rotate-12">
                 <Layers size={24} />
              </div>
           </div>
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="p-8 md:p-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-700 border border-amber-100 rounded-full mb-6">
            <Sparkles size={14} className="animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest">Exclusive Offer</span>
          </div>

          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4 leading-tight">
            Free 2D Floor Plan <br />& <span className="text-amber-600 italic">Elevation Quote</span>
          </h2>
          
          <p className="text-stone-500 mb-10 leading-relaxed">
            Get professional layout planning and visual elevation quotes delivered instantly to your WhatsApp. Start your dream home journey today.
          </p>

          <div className="space-y-4">
            <a 
              href={whatsappQuoteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-green-200 hover:shadow-green-300 hover:-translate-y-1 transition-all group"
            >
              <MessageCircle size={24} fill="white" className="stroke-[#25D366]" />
              Get Quote on WhatsApp
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button 
              onClick={onClose}
              className="text-stone-400 text-sm font-medium hover:text-stone-600 transition-colors"
            >
              Maybe later, I'm just browsing
            </button>
          </div>
        </div>

        {/* Footer info */}
        <div className="bg-stone-50 p-4 border-t border-stone-100 text-center">
           <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">Trusted by 250+ Homeowners in Bangalore</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
