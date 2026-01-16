
import React from 'react';
import { CATEGORIES } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CategoryNavProps {
  onSelectCategory: (category: string) => void;
  selectedCategory: string | null;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ onSelectCategory, selectedCategory }) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - 300 : scrollLeft + 300;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white border-b border-stone-100">
      <div className="container mx-auto px-6 py-10 relative group">
        <div className="flex items-center justify-between mb-8 px-2">
          <h3 className="text-xl font-serif font-bold text-stone-900">Explore by Category</h3>
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 bg-white border border-stone-200 rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-50 transition-colors shadow-sm"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 bg-white border border-stone-200 rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-50 transition-colors shadow-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth pb-4 px-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              onClick={() => onSelectCategory(cat.name)}
              className="flex flex-col items-center gap-4 shrink-0 group/item transition-all active:scale-95"
            >
              <div className={`w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 transition-all duration-500 ${selectedCategory === cat.name ? 'border-stone-900 ring-4 ring-stone-100 shadow-xl' : 'border-transparent group-hover/item:border-stone-200 shadow-sm group-hover/item:shadow-lg'}`}>
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover/item:scale-110" 
                />
              </div>
              <span className={`text-sm font-bold uppercase tracking-wider text-center max-w-[120px] leading-tight transition-colors ${selectedCategory === cat.name ? 'text-stone-900' : 'text-stone-500 group-hover/item:text-stone-700'}`}>
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
