
import React from 'react';
import { ArrowLeft, Scale, Gavel, FileText, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const TermsOfService: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-500">
      <div className="bg-stone-900 text-white py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-stone-400 hover:text-white transition-colors mb-12"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-widest">Back to Home</span>
          </button>
          <h1 className="text-5xl font-serif font-bold mb-6">Terms of <span className="text-stone-500 italic">Service</span></h1>
          <p className="text-stone-400 text-lg">Effective Date: January 1, {BUSINESS_INFO.year}</p>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-6 py-20">
        <div className="prose prose-stone max-w-none space-y-12">
          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center shrink-0">
              <Scale className="text-amber-600" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">Agreement to Terms</h2>
              <p className="text-stone-600 leading-relaxed">
                By accessing our website at {BUSINESS_INFO.name}, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
              </p>
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center shrink-0">
              <FileText className="text-stone-600" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">Service Description</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                {BUSINESS_INFO.name} provides interior design consultations, architectural planning, and modular furniture solutions. The website offers AI-based design recommendations which are for inspirational purposes only.
              </p>
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center shrink-0">
              <Gavel className="text-stone-600" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">Intellectual Property</h2>
              <p className="text-stone-600 leading-relaxed">
                All design concepts, images, and content displayed on this website are the property of {BUSINESS_INFO.name} unless otherwise stated. Unauthorized use, reproduction, or redistribution of our design portfolio is strictly prohibited.
              </p>
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center shrink-0">
              <AlertCircle className="text-stone-600" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">Limitations</h2>
              <p className="text-stone-600 leading-relaxed">
                In no event shall {BUSINESS_INFO.name} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
              </p>
            </div>
          </section>

          <div className="p-10 bg-stone-50 rounded-[2rem] border border-stone-100 mt-20 text-center">
            <h3 className="font-serif font-bold text-xl mb-4">Governing Law</h3>
            <p className="text-stone-600">
              These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in {BUSINESS_INFO.address.city}, Karnataka.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
