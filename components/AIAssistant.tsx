
import React, { useState } from 'react';
import { Sparkles, Loader2, Wand2, ArrowRight } from 'lucide-react';
import { getStyleRecommendation } from '../services/geminiService';
import { StyleRecommendation } from '../types';
import { BUSINESS_INFO } from '../constants';

const AIAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<StyleRecommendation | null>(null);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    try {
      const res = await getStyleRecommendation(input);
      setRecommendation(res);
    } catch (err) {
      console.error(err);
      alert("Something went wrong with the AI. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-consultant" className="py-24 bg-stone-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
              <Sparkles size={16} className="text-amber-400" />
              <span className="text-sm font-bold tracking-widest text-amber-400 uppercase">Next-Gen Design</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">AI Style Consultant</h2>
            <p className="text-stone-400 text-lg max-w-2xl mx-auto">
              Not sure which style fits your personality? Describe your dream home, lifestyle, and preferences, and our AI will recommend your perfect aesthetic.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
            <form onSubmit={handleAsk} className="flex flex-col md:flex-row gap-4 mb-8">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ex: 'I love plants, big windows, and lots of wood textures. My apartment is small but I want it to feel cozy.'"
                className="flex-1 bg-white/10 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
              />
              <button 
                type="submit" 
                disabled={loading}
                className="bg-amber-500 text-stone-900 font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-amber-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Wand2 size={20} />}
                Get Advice
              </button>
            </form>

            {recommendation && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8 border-t border-white/10">
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-amber-400 mb-4">{recommendation.styleName}</h3>
                    <p className="text-stone-300 leading-relaxed mb-8">
                      {recommendation.summary}
                    </p>
                    
                    <h4 className="text-sm font-bold uppercase tracking-widest text-stone-500 mb-4">Your Color Palette</h4>
                    <div className="flex gap-4 mb-8">
                      {recommendation.colorPalette.map((color, i) => (
                        <div key={i} className="group relative">
                          <div 
                            className="w-12 h-12 rounded-full border border-white/20 shadow-lg cursor-help transition-transform hover:scale-110" 
                            style={{ backgroundColor: color }}
                          ></div>
                          <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-stone-800 text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {color}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-stone-500 mb-4">Key Elements</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {recommendation.keyElements.map((el, i) => (
                          <li key={i} className="flex items-center gap-3 text-stone-300 bg-white/5 p-3 rounded-xl border border-white/5">
                            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                            {el}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-stone-500 mb-4">Pro Tips</h4>
                      <div className="space-y-4">
                        {recommendation.tips.map((tip, i) => (
                          <p key={i} className="text-stone-300 flex items-start gap-4">
                            <span className="text-amber-500 font-bold italic font-serif">#{i+1}</span>
                            {tip}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 text-center">
                  <a 
                    href={BUSINESS_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-amber-400 font-bold hover:text-amber-300 transition-colors group"
                  >
                    Schedule a consultation to build this style
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
