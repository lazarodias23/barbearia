import React from 'react';
import { Button } from './Button';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-matte-950">
      {/* Background Image with Slow Zoom Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 mix-blend-overlay animate-zoom-slow"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop")',
            }}
        ></div>
        {/* Advanced Gradients for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-matte-950 via-matte-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-matte-950/90 via-transparent to-matte-950/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(10,10,10,0.8)_100%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-block opacity-0 animate-fade-up [animation-delay:200ms]">
           <span className="inline-block py-1 px-4 border border-gold-500/30 rounded-full bg-matte-900/40 backdrop-blur-md text-gold-400 text-xs font-bold uppercase tracking-[0.3em] mb-8 shadow-glow hover:scale-105 transition-transform cursor-default">
            Est. 2024 • São Paulo
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl opacity-0 animate-fade-up [animation-delay:400ms]">
          Cortes <span className="italic text-gray-400">Lendários</span> <br />
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gold-300 to-gold-600 drop-shadow-sm">
              Estilo Áureo
            </span>
            {/* Pulsing Glow effect behind text */}
            <div className="absolute -inset-10 bg-gold-500/10 blur-3xl rounded-full z-[-1] animate-pulse-slow"></div>
          </span>
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-sans font-light leading-relaxed drop-shadow-md opacity-0 animate-fade-up [animation-delay:600ms]">
          Redefinindo a experiência da barbearia clássica com <span className="text-gold-200 font-normal">precisão moderna</span> e um ambiente exclusivo para cavalheiros que não abrem mão da excelência.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center perspective-1000 opacity-0 animate-fade-up [animation-delay:800ms]">
          <a href="#contact" className="w-full md:w-auto">
            <Button fullWidth className="md:w-auto min-w-[200px]">Agendar Horário</Button>
          </a>
          <a href="#services" className="w-full md:w-auto">
            <Button variant="outline" fullWidth className="md:w-auto min-w-[200px]">Nossos Serviços</Button>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#services" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gold-500/50 hover:text-gold-400 transition-all animate-bounce cursor-pointer p-4 opacity-0 animate-fade-up [animation-delay:1200ms]"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} className="drop-shadow-glow" />
      </a>
    </section>
  );
};