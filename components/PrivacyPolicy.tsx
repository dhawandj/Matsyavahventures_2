
import React from 'react';
import { ArrowLeft, ShieldCheck, Lock, Eye, Database } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const PrivacyPolicy: React.FC<{ onBack: () => void }> = ({ onBack }) => {
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
          <h1 className="text-5xl font-serif font-bold mb-6">Privacy <span className="text-stone-500 italic">Policy</span></h1>
          <p className="text-stone-400 text-lg">Last Updated: October 2023</p>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-6 py-20">
        <div className="prose prose-stone max-w-none space-y-12">
          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center shrink-0">
              <ShieldCheck className="text-amber-600" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">Introduction</h2>
              <p className="text-stone-600 leading-relaxed">
                At {BUSINESS_INFO.name}, we value your privacy and are committed to protecting your personal data. This privacy policy informs you about how we handle your personal data when you visit our website and interact with our services.
              </p>
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center shrink-0">
              <Eye className="text-stone-600" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">Data We Collect</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                We may collect, use, store and transfer different kinds of personal data about you, including:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Identity Data:</strong> Name, username or similar identifier.</li>
                <li><strong>Contact Data:</strong> Email address and telephone numbers (WhatsApp).</li>
                <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
                <li><strong>AI Interactions:</strong> Input provided to our Style Consultant to generate design recommendations.</li>
              </ul>
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center shrink-0">
              <Database className="text-stone-600" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">How We Use Your Data</h2>
              <p className="text-stone-600 leading-relaxed">
                We only use your personal data for the purpose for which it was collected, which includes providing design services, managing consultations via WhatsApp, and sending design trends through our newsletter if you have opted in.
              </p>
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center shrink-0">
              <Lock className="text-stone-600" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">Data Security</h2>
              <p className="text-stone-600 leading-relaxed">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way.
              </p>
            </div>
          </section>

          <div className="p-10 bg-stone-50 rounded-[2rem] border border-stone-100 mt-20">
            <h3 className="font-serif font-bold text-xl mb-4">Contact Us</h3>
            <p className="text-stone-500 mb-6">If you have any questions about this privacy policy or our privacy practices, please contact us:</p>
            <p className="text-stone-900 font-bold">Email: {BUSINESS_INFO.email}</p>
            <p className="text-stone-900 font-bold">Phone: +91 {BUSINESS_INFO.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
