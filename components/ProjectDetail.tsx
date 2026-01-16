
import React, { useEffect } from 'react';
import { ArrowLeft, MapPin, Tag, Calendar, Share2, MessageCircle, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';
import { BUSINESS_INFO } from '../constants';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  // Mock additional images for the project gallery based on category
  const galleryImages = [
    project.image,
    `https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800`,
    `https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&q=80&w=800`,
    `https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80&w=800`,
    `https://images.unsplash.com/photo-1615876234886-fd9a39faa97f?auto=format&fit=crop&q=80&w=800`,
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-transparent"></div>
        
        <div className="absolute top-8 left-6 md:left-12 z-20">
          <button 
            onClick={onBack}
            className="group flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-stone-900 transition-all shadow-xl"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-widest">Return to Gallery</span>
          </button>
        </div>

        <div className="absolute bottom-12 left-6 md:left-12 right-6 z-20">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-amber-500 text-stone-900 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                {project.category}
              </span>
              <span className="bg-white/10 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20">
                Residential Design
              </span>
            </div>
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-4 leading-tight">
              {project.title}
            </h1>
            <div className="flex items-center gap-6 text-stone-300">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-amber-500" />
                <span className="text-sm font-medium">{project.location}</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <Calendar size={16} className="text-amber-500" />
                <span className="text-sm font-medium">Completed in 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Description */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">Design Concept & Execution</h2>
            <div className="prose prose-stone max-w-none text-stone-600 space-y-6 text-lg leading-relaxed">
              <p>
                {project.description} This project represents our commitment to blending modern functionality with timeless aesthetic principles. We focused on maximizing natural light while maintaining a cozy, intimate atmosphere through carefully selected textures and a warm color palette.
              </p>
              <p>
                The space was reimagined to improve circulation and create clear functional zones without sacrificing the open-plan feel. Every piece of furniture and fixture was either custom-built or hand-selected to ensure they contribute to the cohesive design narrative.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {[
                  "Optimized space utilization for compact urban living.",
                  "Custom cabinetry with integrated smart-home features.",
                  "Sustainable material sourcing and eco-friendly finishes.",
                  "Advanced lighting design for multi-purpose usage."
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-stone-50 rounded-2xl border border-stone-100">
                    <CheckCircle2 className="text-amber-600 shrink-0" size={24} />
                    <span className="text-stone-800 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project Details Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-stone-900 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              
              <h3 className="text-xl font-serif font-bold mb-8 flex items-center gap-3">
                Project Facts
                <div className="h-px flex-1 bg-white/10"></div>
              </h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-white/5">
                  <span className="text-stone-500 text-xs font-bold uppercase tracking-widest">Location</span>
                  <span className="font-medium">{project.location}</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-white/5">
                  <span className="text-stone-500 text-xs font-bold uppercase tracking-widest">Type</span>
                  <span className="font-medium">Residential</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-white/5">
                  <span className="text-stone-500 text-xs font-bold uppercase tracking-widest">Size</span>
                  <span className="font-medium">1,250 Sq.Ft</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-stone-500 text-xs font-bold uppercase tracking-widest">Status</span>
                  <span className="text-amber-500 font-bold uppercase tracking-widest text-[10px]">Delivered</span>
                </div>
              </div>

              <div className="mt-12">
                <a 
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-stone-900 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-stone-50 transition-all group"
                >
                  Request Similar Design
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="p-8 border-2 border-dashed border-stone-200 rounded-[2.5rem] flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-400 mb-4">
                <Share2 size={20} />
              </div>
              <p className="text-stone-500 text-sm mb-6">Love this project? Share it with your architect or friends for inspiration.</p>
              <div className="flex gap-4">
                <button className="w-10 h-10 border border-stone-200 rounded-full flex items-center justify-center hover:bg-stone-900 hover:text-white transition-all">
                  <MessageCircle size={18} />
                </button>
                <button className="w-10 h-10 border border-stone-200 rounded-full flex items-center justify-center hover:bg-stone-900 hover:text-white transition-all">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-2">Lookbook Gallery</h2>
              <p className="text-stone-500">A detailed look into the materials and craftsmanship.</p>
            </div>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {galleryImages.map((img, i) => (
              <div key={i} className="break-inside-avoid rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group">
                <img 
                  src={img} 
                  alt={`Detail ${i}`} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Inspired by this project?</h2>
          <p className="text-stone-400 text-lg mb-12 max-w-2xl mx-auto">
            Let's discuss how we can bring a similar level of detail and quality to your space. Our consultations are free and tailored to your vision.
          </p>
          <a 
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-amber-500 text-stone-900 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20"
          >
            Start Your Transformation
            <ChevronRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
