import React, { useState, useEffect } from 'react';
    import { Menu, X, Scissors } from 'lucide-react';
    import { NAV_ITEMS } from '../constants';
    
    export const Navbar: React.FC = () => {
      const [isScrolled, setIsScrolled] = useState(false);
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const [activeSection, setActiveSection] = useState('');
    
      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 20);
          
          // Simple scroll spy
          const sections = NAV_ITEMS.map(item => item.href.substring(1));
          const current = sections.find(section => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              return rect.top <= 100 && rect.bottom >= 100;
            }
            return false;
          });
          if (current) setActiveSection(`#${current}`);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      return (
        <nav 
          className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
            isScrolled 
              ? 'bg-matte-950/80 backdrop-blur-xl border-white/5 py-3 shadow-2xl' 
              : 'bg-transparent border-transparent py-6'
          }`}
        >
          <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group relative">
              <div className="absolute inset-0 bg-gold-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-2 border border-gold-500 bg-matte-900/50 rounded-sm group-hover:bg-gold-500 transition-colors duration-300">
                <Scissors className="w-6 h-6 text-gold-500 group-hover:text-matte-900" />
              </div>
              <div className="flex flex-col relative">
                <span className="text-xl font-serif font-bold text-white tracking-widest leading-none group-hover:text-gold-400 transition-colors">ÁUREA</span>
                <span className="text-[10px] text-gold-500 uppercase tracking-[0.2em] leading-none">Barbearia</span>
              </div>
            </a>
    
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm uppercase tracking-widest transition-all duration-300 font-sans font-medium relative py-1
                    ${activeSection === item.href ? 'text-gold-400' : 'text-gray-400 hover:text-white'}
                  `}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-gold-500 transform origin-left transition-transform duration-300 ${activeSection === item.href ? 'scale-x-100' : 'scale-x-0 hover:scale-x-50'}`}></span>
                </a>
              ))}
              <a 
                href="#contact"
                className="px-6 py-2 border border-gold-500/50 text-gold-400 text-sm uppercase tracking-wider hover:bg-gold-500 hover:text-matte-900 hover:shadow-glow transition-all duration-300 rounded-sm bg-matte-900/30 backdrop-blur-sm"
              >
                Agendar
              </a>
            </div>
    
            {/* Mobile Toggle */}
            <button 
              className="md:hidden text-gold-500 p-2 hover:bg-white/5 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
    
          {/* Mobile Menu Overlay */}
          <div 
            className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[-1] transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
    
          {/* Mobile Menu Content */}
          <div className={`md:hidden absolute top-full left-0 w-full bg-matte-900/95 backdrop-blur-xl border-b border-gold-500/20 shadow-2xl transition-all duration-300 overflow-hidden origin-top ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="flex flex-col p-6 gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-3 rounded-md uppercase text-sm tracking-wider flex justify-between items-center group ${activeSection === item.href ? 'bg-white/5 text-gold-400' : 'text-gray-300 hover:bg-white/5 hover:text-gold-400'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-gold-500">→</span>
                </a>
              ))}
            </div>
          </div>
        </nav>
      );
    };