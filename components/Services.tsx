
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import FloorPlanViewer from './FloorPlanViewer';

const Services: React.FC = () => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section id="services" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Tailored Design Solutions</h2>
          <p className="text-stone-600 text-lg">
            From single room transformations to full-scale residential refurbishments, we provide comprehensive services tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = (Icons as any)[service.icon];
            return (
              <div key={service.id} className="bg-white p-8 rounded-3xl border border-stone-100 hover:shadow-xl hover:shadow-stone-200/50 transition-all group flex flex-col">
                <div className="w-14 h-14 bg-stone-900 text-white rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:-rotate-12">
                  {IconComponent && <IconComponent size={28} />}
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">{service.title}</h3>
                <p className="text-stone-500 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                {service.hasDemo && (
                  <button 
                    onClick={() => setShowDemo(true)}
                    className="mb-6 self-start text-amber-600 font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:text-amber-700 transition-colors group/demo"
                  >
                    View Interactive Demo 
                    <Icons.ArrowRight size={16} className="group-hover/demo:translate-x-1 transition-transform" />
                  </button>
                )}

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-stone-50">
                  <span className="text-xs font-bold uppercase tracking-widest text-stone-400">Starting at</span>
                  <span className="font-bold text-stone-900">{service.priceRange}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {showDemo && <FloorPlanViewer onClose={() => setShowDemo(false)} />}
    </section>
  );
};

export default Services;
