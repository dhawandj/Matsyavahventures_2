
import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const FloatingContact: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-8 duration-500">
      {/* WhatsApp FAB */}
      <a 
        href={BUSINESS_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform active:scale-95 group relative ring-4 ring-white"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={32} fill="white" className="stroke-[#25D366]" />
        <span className="absolute right-full mr-5 bg-stone-900 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-2xl opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 whitespace-nowrap pointer-events-none">
          Message Us
        </span>
      </a>

      {/* Call FAB */}
      <a 
        href={`tel:${BUSINESS_INFO.phone}`}
        className="w-14 h-14 bg-stone-900 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 group relative"
        aria-label="Call Us"
      >
        <Phone size={24} fill="currentColor" />
        <span className="absolute right-full mr-5 bg-stone-900 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-2xl opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 whitespace-nowrap pointer-events-none">
          Call {BUSINESS_INFO.phone}
        </span>
      </a>
    </div>
  );
};

export default FloatingContact;
