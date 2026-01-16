
import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, MapPin, LayoutGrid } from 'lucide-react';
import { Project } from '../types';

interface DesignExplorerProps {
  selectedCategory: string | null;
  onSelectProject: (project: Project) => void;
}

const DesignExplorer: React.FC<DesignExplorerProps> = ({ selectedCategory, onSelectProject }) => {
  const filteredProjects = selectedCategory 
    ? PROJECTS.filter(p => p.category === selectedCategory || (selectedCategory === 'Outdoor & Garden' && p.category === 'Outdoor'))
    : PROJECTS.slice(0, 6);

  return (
    <div className="container mx-auto px-6 py-12">
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => onSelectProject(project)}
              className="group bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-2xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                  <ArrowUpRight size={20} className="text-stone-900" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-stone-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-[10px] font-bold text-amber-600 uppercase tracking-[0.2em] mb-3">
                  <MapPin size={12} />
                  {project.location}
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3 group-hover:text-amber-800 transition-colors">
                  {project.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="pt-6 border-t border-stone-50 flex items-center justify-between">
                   <button className="text-xs font-black uppercase tracking-widest text-stone-900 flex items-center gap-2 hover:gap-3 transition-all">
                      Project Details <ArrowUpRight size={14} />
                   </button>
                   <span className="w-1.5 h-1.5 rounded-full bg-stone-200"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-32 text-center bg-stone-50 rounded-[3rem] border-2 border-dashed border-stone-200 mx-auto max-w-4xl">
          <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6 text-stone-400">
            <LayoutGrid size={32} />
          </div>
          <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">No projects yet</h3>
          <p className="text-stone-400 italic">We are currently documenting our latest {selectedCategory} works. Please check back soon!</p>
        </div>
      )}
    </div>
  );
};

export default DesignExplorer;
