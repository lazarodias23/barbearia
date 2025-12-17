import React from 'react';
import { SectionHeading } from './SectionHeading';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-matte-950 border-t border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="O Que Dizem" 
          subtitle="A satisfação dos nossos clientes é a nossa maior garantia de qualidade."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-matte-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/5 relative group hover:-translate-y-2 transition-all duration-300 shadow-3d hover:shadow-glow hover:border-gold-500/30"
            >
              <div className="absolute -top-4 -right-2 bg-matte-800 p-3 rounded-full border border-gold-500 text-gold-500 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <Quote className="w-5 h-5 fill-current" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold-400 fill-current drop-shadow-sm" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-8 italic font-light leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-matte-900 font-bold font-serif">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold font-serif text-sm group-hover:text-gold-400 transition-colors">{testimonial.name}</h4>
                  <span className="text-gray-500 text-xs uppercase tracking-wider">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};