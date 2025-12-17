import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Instagram } from 'lucide-react';

const IMAGES = [
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1976&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1634305886369-182eb6193796?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512690459411-b9245aed8e1c?q=80&w=2574&auto=format&fit=crop"
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-matte-900 relative">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Espaço & Estilo" 
          subtitle="Um ambiente projetado milimetricamente para o seu conforto e exclusividade."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Main Large Image */}
          <div className="lg:col-span-2 lg:row-span-2 group relative rounded-lg overflow-hidden shadow-2xl border border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop" 
              alt="Main Interior" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
               <span className="text-gold-400 font-serif text-2xl">Interior Premium</span>
            </div>
          </div>

          {/* Smaller Images */}
          {IMAGES.map((src, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden group rounded-lg shadow-lg border border-white/5 bg-matte-800"
            >
              <img 
                src={src} 
                alt={`Gallery Image ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gold-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay"></div>
              
              {/* Instagram Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-matte-900/80 p-3 rounded-full backdrop-blur-sm text-gold-400 shadow-glow hover:scale-110 transition-transform cursor-pointer">
                  <Instagram size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};