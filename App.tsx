
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryNav from './components/CategoryNav';
import DesignExplorer from './components/DesignExplorer';
import Services from './components/Services';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import QuoteModal from './components/QuoteModal';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ProjectDetail from './components/ProjectDetail';
import ProductGallery from './components/ProductGallery';
import ProductDetail from './components/ProductDetail';
import { TESTIMONIALS, BUSINESS_INFO } from './constants';
import { Star, ChevronRight, Quote, ArrowLeft, LayoutGrid, ExternalLink } from 'lucide-react';
import { getDesignTrends } from './services/geminiService';
import { Project, Product } from './types';

type ViewState = 'home' | 'privacy' | 'terms' | 'project-detail' | 'products' | 'product-detail';

const App: React.FC = () => {
  const [trends, setTrends] = useState<{ text: string; sources: any[] } | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewState>('home');

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const data = await getDesignTrends();
        setTrends(data);
      } catch (e) {
        console.error("Trends fetch failed", e);
      }
    };
    fetchTrends();

    const modalTimer = setTimeout(() => {
      setIsQuoteModalOpen(true);
    }, 4000);

    return () => clearTimeout(modalTimer);
  }, []);

  useEffect(() => {
    if (selectedCategory || currentView !== 'home' || selectedProject || selectedProduct) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedCategory, currentView, selectedProject, selectedProduct]);

  const handleBackToHome = () => {
    setSelectedCategory(null);
    setSelectedProject(null);
    setSelectedProduct(null);
    setCurrentView('home');
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentView('project-detail');
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product-detail');
  };

  const handleNavigate = (view: ViewState) => {
    setSelectedCategory(null);
    setSelectedProject(null);
    setSelectedProduct(null);
    setCurrentView(view);
  };

  const renderContent = () => {
    if (currentView === 'privacy') {
      return <PrivacyPolicy onBack={handleBackToHome} />;
    }
    if (currentView === 'terms') {
      return <TermsOfService onBack={handleBackToHome} />;
    }
    if (currentView === 'products') {
      return <ProductGallery onSelectProduct={handleSelectProduct} />;
    }
    if (currentView === 'product-detail' && selectedProduct) {
      return <ProductDetail product={selectedProduct} onBack={() => setCurrentView('products')} />;
    }
    if (currentView === 'project-detail' && selectedProject) {
      return <ProjectDetail project={selectedProject} onBack={() => {
        if (selectedCategory) {
          setCurrentView('home');
        } else {
          handleBackToHome();
        }
      }} />;
    }

    if (selectedCategory) {
      return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <section className="bg-stone-900 text-white py-20 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 to-stone-900 z-10"></div>
             <div className="container mx-auto px-6 relative z-20">
                <button 
                  onClick={handleBackToHome}
                  className="group flex items-center gap-2 text-stone-400 hover:text-white transition-colors mb-12"
                >
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm font-bold uppercase tracking-widest">Back to Gallery</span>
                </button>
                
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <LayoutGrid size={24} className="text-amber-500" />
                      <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">Design Collection</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
                      {selectedCategory} <span className="text-stone-500 italic">Portfolio</span>
                    </h1>
                    <p className="text-xl text-stone-400 max-w-2xl leading-relaxed">
                      Discover our most innovative {selectedCategory.toLowerCase()} solutions where ergonomics meet artistry. Every design is custom-built for high-performance living.
                    </p>
                  </div>
                </div>
             </div>
          </section>

          <div className="min-h-[800px] bg-white">
            <DesignExplorer 
              selectedCategory={selectedCategory} 
              onSelectProject={handleSelectProject} 
            />
          </div>

          <section className="py-20 bg-stone-50 border-t border-stone-200">
            <div className="container mx-auto px-6 text-center">
               <h3 className="text-3xl font-serif font-bold text-stone-900 mb-6">Love our {selectedCategory.toLowerCase()} designs?</h3>
               <p className="text-stone-600 mb-10 max-w-xl mx-auto">Our consultants are ready to help you plan your space today. Let's create something extraordinary together.</p>
               <a 
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-stone-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-stone-800 transition-all"
                >
                  Start {selectedCategory} Project
               </a>
            </div>
          </section>
        </div>
      );
    }

    return (
      <>
        <Hero onCtaClick={() => handleNavigate('products')} />
        
        <CategoryNav 
          onSelectCategory={(cat) => setSelectedCategory(cat)} 
          selectedCategory={selectedCategory} 
        />

        <div className="py-20 bg-stone-50">
           <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-serif font-bold text-stone-900 mb-2">Featured Designs</h2>
                <p className="text-stone-500">A curation of architectural excellence by {BUSINESS_INFO.name}.</p>
              </div>
           </div>
           <DesignExplorer 
            selectedCategory={null} 
            onSelectProject={handleSelectProject} 
           />
        </div>
        
        {trends && (
          <section id="trends" className="py-12 bg-amber-50 border-y border-amber-100">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="shrink-0 flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-amber-700">
                    <Star fill="currentColor" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-900">{BUSINESS_INFO.year} Trends</h4>
                    <p className="text-xs text-amber-600 font-bold uppercase tracking-widest">Powered by Smart AI</p>
                  </div>
                </div>
                <div className="flex-1 text-amber-800 text-sm italic leading-relaxed whitespace-pre-line bg-white/50 p-6 rounded-2xl border border-amber-200">
                  <div>{trends.text}</div>
                  
                  {trends.sources && trends.sources.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-amber-200/50">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-2">Research Sources:</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1">
                        {trends.sources.map((source, idx) => (
                          <a 
                            key={idx} 
                            href={source.uri} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[10px] text-amber-700 hover:underline flex items-center gap-1 font-medium"
                          >
                            {source.title} <ExternalLink size={10} />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}
        
        <Services />
        <AIAssistant />

        <section className="py-24 bg-white border-t border-stone-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">Happy Clients</h2>
              <p className="text-stone-500">Read what people say about their experience with {BUSINESS_INFO.name}.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="p-8 rounded-3xl bg-stone-50 border border-stone-100 relative group">
                  <Quote className="absolute top-6 right-8 text-stone-200 group-hover:text-stone-300 transition-colors" size={40} />
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className={i < t.rating ? 'fill-amber-400 text-amber-400' : 'text-stone-300'} />
                    ))}
                  </div>
                  <p className="text-stone-600 italic mb-8 leading-relaxed">"{t.content}"</p>
                  <div className="flex items-center gap-4">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                    <div>
                      <h4 className="font-bold text-stone-900">{t.name}</h4>
                      <p className="text-xs text-stone-500 font-medium uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-stone-100">
          <div className="container mx-auto px-6">
            <div className="bg-stone-900 rounded-[3rem] p-12 md:p-20 text-center text-white overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 italic">Ready to transform your home?</h2>
                <p className="text-stone-400 text-lg mb-12">
                  Join 1000+ happy homeowners who trust {BUSINESS_INFO.name} for their dream projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href={BUSINESS_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-stone-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-stone-50 transition-all flex items-center justify-center gap-3 group"
                  >
                    Book Free Consultation
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-transparent border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                    Call: +91 {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <div className="min-h-screen">
      <Header 
        onLogoClick={handleBackToHome} 
        onNavigate={(view) => handleNavigate(view as any)}
      />
      
      <main className="pt-20">
        {renderContent()}
      </main>

      <Footer onNavigate={(view) => handleNavigate(view as any)} />
      <FloatingContact />
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  );
};

export default App;
