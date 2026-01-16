
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

interface HeroProps {
  onCtaClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-stone-100">
      <div className="absolute top-0 right-0 w-2/3 h-full hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-stone-100/50 to-stone-100 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Interior Design" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-stone-200 rounded-full mb-6">
            <Sparkles size={14} className="text-amber-500" />
            <span className="text-xs font-semibold tracking-wider text-stone-500 uppercase">Award Winning Studio {BUSINESS_INFO.awardYear}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 leading-[1.1] mb-8">
            Designing <span className="italic text-stone-500 underline decoration-amber-200 underline-offset-8">Soul</span> into Your Living Space.
          </h1>
          <p className="text-xl text-stone-600 mb-10 leading-relaxed max-w-lg">
            We blend timeless aesthetics with modern functionality to create bespoke interiors that tell your unique story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onCtaClick}
              className="bg-stone-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-stone-800 transition-all flex items-center justify-center gap-2 group"
            >
              Shop the Look
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-stone-900 border border-stone-200 px-8 py-4 rounded-full text-lg font-semibold hover:bg-stone-50 transition-all flex items-center justify-center"
            >
              View Portfolio
            </button>
          </div>

          <div className="mt-16 flex items-center gap-8">
            <div>
              <div className="text-3xl font-serif font-bold text-stone-900">{BUSINESS_INFO.stats.projectsDone}</div>
              <div className="text-sm text-stone-500 uppercase tracking-widest font-medium">Projects Done</div>
            </div>
            <div className="w-px h-10 bg-stone-200"></div>
            <div>
              <div className="text-3xl font-serif font-bold text-stone-900">{BUSINESS_INFO.stats.awards}</div>
              <div className="text-sm text-stone-500 uppercase tracking-widest font-medium">Design Awards</div>
            </div>
            <div className="w-px h-10 bg-stone-200"></div>
            <div>
              <div className="text-3xl font-serif font-bold text-stone-900">{BUSINESS_INFO.stats.experts}</div>
              <div className="text-sm text-stone-500 uppercase tracking-widest font-medium">Expert Architects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
