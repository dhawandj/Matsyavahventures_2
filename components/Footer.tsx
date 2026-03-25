
import React from 'react';
import { Instagram, Twitter, Facebook, Linkedin, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, NAVIGATION } from '../constants';

interface FooterProps {
  onNavigate: (view: 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-stone-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-stone-900 rounded-lg flex items-center justify-center text-white font-serif italic font-bold text-lg">
                {BUSINESS_INFO.name.charAt(0)}
              </div>
              <span className="text-xl font-serif font-bold text-stone-900">{BUSINESS_INFO.name}</span>
            </div>
            <p className="text-stone-500 leading-relaxed mb-8">
              Bespoke interior design, architectural planning, and structural solutions tailored to your unique lifestyle.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/matsyavahventures06?igsh=MThjcGJmYnY0bmFoNw%3D%3D&utm_source=qr" },
                { Icon: Facebook, href: "https://www.instagram.com/matsyavahventures06?igsh=MThjcGJmYnY0bmFoNw%3D%3D&utm_source=qr" }
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} className="w-10 h-10 border border-stone-200 rounded-full flex items-center justify-center text-stone-500 hover:bg-stone-900 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-stone-900 mb-6 uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4">
              {NAVIGATION.map(item => (
                <li key={item.label}>
                  <a href={item.href} className="text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-2 group">
                    {item.label}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-stone-900 mb-6 uppercase tracking-widest text-sm">Contact Details</h4>
            <ul className="space-y-4 text-stone-500">
              <li className="leading-relaxed">
                {BUSINESS_INFO.address.line1}<br />
                {BUSINESS_INFO.address.line2}<br />
                {BUSINESS_INFO.address.line3}<br />
                {BUSINESS_INFO.address.city} {BUSINESS_INFO.address.pincode}
              </li>
              <li className="font-bold text-stone-900">Ph: +91 {BUSINESS_INFO.phone}</li>
              <li>{BUSINESS_INFO.email}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-stone-900 mb-6 uppercase tracking-widest text-sm">Newsletter</h4>
            <p className="text-stone-500 mb-6 text-sm">Get the latest design trends and project updates in your inbox.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-stone-100 border-none rounded-xl px-4 py-3 text-stone-900 focus:ring-2 focus:ring-stone-200 outline-none"
              />
              <button className="bg-stone-900 text-white font-bold py-3 rounded-xl hover:bg-stone-800 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-stone-100 gap-6">
          <p className="text-stone-400 text-sm">© {BUSINESS_INFO.year} {BUSINESS_INFO.name} Interior Design. All rights reserved.</p>
          <div className="flex gap-8 text-sm text-stone-400">
            <button onClick={() => onNavigate('privacy')} className="hover:text-stone-900 transition-colors">Privacy Policy</button>
            <button onClick={() => onNavigate('terms')} className="hover:text-stone-900 transition-colors">Terms of Service</button>
            <a href="#" className="hover:text-stone-900 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
