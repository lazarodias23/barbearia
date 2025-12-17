import React, { useState, useEffect, useRef } from 'react';
import { SectionHeading } from './SectionHeading';
import { SERVICES } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Services: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };
    
    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(SERVICES.length / itemsPerPage);
  
  // Need this to prevent empty spaces at the end if items aren't perfectly divisible
  // Or simpler: circular carousel logic
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= SERVICES.length - (itemsPerPage - 1) ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? SERVICES.length - itemsPerPage : prev - 1));
  };

  // Swipe handlers for mobile
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="services" className="py-24 bg-matte-950 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Nossos Serviços" 
          subtitle="Cortes de precisão e tratamentos tradicionais pensados para o homem moderno."
        />

        <div className="relative group/carousel">
          {/* Carousel Buttons - Desktop (Hidden on mobile usually better, or small overlay) */}
          <div className="hidden md:flex justify-end gap-2 mb-4">
            <button 
              onClick={prevSlide}
              className="p-3 bg-matte-900 border border-gold-500/30 rounded-full hover:bg-gold-500 hover:text-matte-900 text-gold-500 transition-all duration-300 hover:shadow-glow z-20"
              aria-label="Previous service"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 bg-matte-900 border border-gold-500/30 rounded-full hover:bg-gold-500 hover:text-matte-900 text-gold-500 transition-all duration-300 hover:shadow-glow z-20"
              aria-label="Next service"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Carousel Viewport */}
          <div 
            className="overflow-hidden pb-12 pt-4 px-2"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {SERVICES.map((service) => (
                <div 
                  key={service.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <div className="group h-full relative bg-metal rounded-xl p-[1px] shadow-3d hover:shadow-glow-lg transition-all duration-500 hover:-translate-y-2">
                    {/* Card Content Container */}
                    <div className="bg-matte-900 rounded-xl h-full p-8 flex flex-col items-center text-center relative overflow-hidden">
                      
                      {/* Subtle sheen effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                      {/* Icon Container with Glow */}
                      <div className="mb-6 relative">
                        <div className="absolute inset-0 bg-gold-500 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                        <div className="w-16 h-16 rounded-full bg-matte-800 border border-gold-500/20 flex items-center justify-center group-hover:border-gold-500 group-hover:bg-matte-800 transition-all duration-300 relative z-10 shadow-inner-light">
                          <service.icon className="w-7 h-7 text-gold-400 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-gold-300 transition-colors">{service.title}</h3>
                      <p className="text-gray-400 text-sm mb-8 leading-relaxed flex-grow">
                        {service.description}
                      </p>
                      
                      <div className="w-full pt-4 border-t border-white/5 flex justify-center">
                         <span className="text-2xl font-bold text-gold-400 drop-shadow-sm group-hover:scale-105 transition-transform duration-300">
                          {service.price}
                         </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Indicators */}
          <div className="flex md:hidden justify-center gap-2 mt-4">
             {Array.from({ length: SERVICES.length }).map((_, idx) => (
               <button
                 key={idx}
                 onClick={() => setCurrentIndex(idx)}
                 className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-gold-500 w-6' : 'bg-gray-700'}`}
                 aria-label={`Go to slide ${idx + 1}`}
               />
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};