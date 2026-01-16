
import React, { useState } from 'react';
import { ShoppingBag, ArrowRight, Star, Filter } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface ProductGalleryProps {
  onSelectProduct: (product: Product) => void;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ onSelectProduct }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-stone-900 text-white pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Matsyavahventures <span className="text-stone-500 italic">products</span>
          </h1>
          <p className="text-stone-400 max-w-xl text-lg mb-10 font-medium tracking-wide">
            Shop now for premium interior pieces curated for your dream home.
          </p>
          
          {/* Horizontal Scroll Filter - Mobile optimized */}
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all border ${filter === cat ? 'bg-amber-500 border-amber-500 text-stone-900' : 'bg-transparent border-white/20 text-white hover:border-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group cursor-pointer flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-stone-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-square overflow-hidden bg-stone-50">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-md p-2.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                    <ShoppingBag size={20} className="text-stone-900" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-stone-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-stone-900 group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="text-amber-500 flex items-center gap-1">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-bold">4.9</span>
                  </div>
                </div>
                
                <p className="text-stone-500 text-sm mb-8 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-stone-50">
                  <span className="text-xl font-bold text-stone-900">{product.price}</span>
                  <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-stone-900 group-hover:gap-3 transition-all">
                    View Details <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
