
import React, { useEffect, useState } from 'react';
import { ArrowLeft, MessageCircle, ChevronRight, CheckCircle2, Share2, Heart, ShieldCheck, ShoppingCart, ExternalLink } from 'lucide-react';
import { Product } from '../types';
import { BUSINESS_INFO } from '../constants';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  const [activeImage, setActiveImage] = useState(product.image);
  
  // Combine all images for the gallery
  const allImages = [product.image, ...(product.additionalImages || [])];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappLink = `https://wa.me/919019087750?text=${encodeURIComponent(`Hello Matsyavahventures! I am interested in purchasing the ${product.name} (${product.price}). Please let me know the availability.`)}`;

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-700">
      {/* Sticky Back Button */}
      <div className="sticky top-20 left-0 right-0 z-30 p-4 md:px-12 md:py-8 pointer-events-none">
        <button 
          onClick={onBack}
          className="pointer-events-auto group flex items-center gap-2 bg-white/90 backdrop-blur-md text-stone-900 px-5 py-2.5 rounded-full border border-stone-200 hover:bg-stone-900 hover:text-white transition-all shadow-xl"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-black uppercase tracking-widest">Back to Collection</span>
        </button>
      </div>

      <div className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Enhanced Product Image Gallery */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-4 md:sticky md:top-40">
            {/* Thumbnails - Sidebar style on desktop, row on mobile */}
            <div className="order-2 md:order-1 flex md:flex-col gap-3 overflow-x-auto no-scrollbar pb-2 md:pb-0">
              {allImages.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImage(img)}
                  className={`relative shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${activeImage === img ? 'border-amber-500 ring-4 ring-amber-50 shadow-lg' : 'border-stone-100 hover:border-stone-300 opacity-60 hover:opacity-100'}`}
                >
                   <img src={img} alt={`Preview ${i}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Stage Image */}
            <div className="order-1 md:order-2 flex-1 rounded-[2.5rem] overflow-hidden bg-stone-50 aspect-[4/5] md:aspect-square shadow-2xl shadow-stone-200/50 group relative">
              <img 
                src={activeImage} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-6 left-6">
                <div className="bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-stone-600 border border-white/20">
                  Focus on Detail
                </div>
              </div>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="lg:col-span-5 flex flex-col pt-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-amber-100 text-amber-900 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                New Arrival
              </span>
              <span className="text-stone-400 text-[10px] font-bold uppercase tracking-widest bg-stone-50 px-3 py-1.5 rounded-full border border-stone-100">SKU: MV-{product.id.toUpperCase()}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-4 leading-tight">{product.name}</h1>
            <div className="flex items-baseline gap-4 mb-10">
              <p className="text-3xl md:text-4xl font-bold text-stone-900">{product.price}</p>
              <p className="text-stone-400 line-through text-lg">₹{(parseInt(product.price.replace(/[^\d]/g, '')) * 1.2).toLocaleString('en-IN', { style: 'currency', currency: 'INR' }).split('.')[0]}</p>
            </div>
            
            <div className="prose prose-stone mb-12">
              <p className="text-stone-500 text-lg leading-relaxed border-l-4 border-amber-500 pl-6 italic">
                {product.description}
              </p>
            </div>

            <div className="space-y-6 mb-12 bg-stone-50 p-8 rounded-[2rem] border border-stone-100">
              <h4 className="text-xs font-black uppercase tracking-widest text-stone-400 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-amber-500" />
                Technical Specifications
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-4 text-sm text-stone-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></div>
                    <span className="font-medium">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-green-200/50 hover:bg-[#22c35e] transition-all group active:scale-[0.98]"
              >
                <MessageCircle size={24} fill="white" className="stroke-[#25D366]" />
                Inquire on WhatsApp
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>

              {product.amazonLink && (
                <a 
                  href={product.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-amber-500 text-stone-900 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-amber-200/30 hover:bg-amber-400 transition-all group active:scale-[0.98]"
                >
                  <ShoppingCart size={24} />
                  Buy on Amazon
                  <ExternalLink size={18} className="opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              )}
              
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 border border-stone-200 py-4 rounded-2xl font-bold hover:bg-stone-50 transition-colors text-stone-600 hover:text-stone-900">
                  <Heart size={20} /> Save to Wishlist
                </button>
                <button className="flex items-center justify-center gap-2 border border-stone-200 py-4 rounded-2xl font-bold hover:bg-stone-50 transition-colors text-stone-600 hover:text-stone-900">
                  <Share2 size={20} /> Share Piece
                </button>
              </div>
            </div>

            {/* Production Trust Badges */}
            <div className="mt-16 pt-10 border-t border-stone-100 grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center mb-3 text-stone-900 shadow-sm">
                  <ShieldCheck size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-stone-400 leading-tight">Verified<br/>Quality</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center mb-3 text-stone-900 shadow-sm">
                  <CheckCircle2 size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-stone-400 leading-tight">Handcrafted<br/>Bespoke</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center mb-3 text-stone-900 shadow-sm">
                  <ShieldCheck size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-stone-400 leading-tight">Lifetime<br/>Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
