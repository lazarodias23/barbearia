import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { Button } from './Button';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Info Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-4">Visite-nos</h2>
              <p className="text-gold-400 text-lg font-light tracking-wide">Experimente o verdadeiro tratamento real.</p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-matte-900 rounded-lg border border-white/5 text-gold-500 group-hover:border-gold-500/50 group-hover:shadow-glow transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 font-serif text-lg">Endereço</h4>
                  <p className="text-gray-400 font-light">Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-matte-900 rounded-lg border border-white/5 text-gold-500 group-hover:border-gold-500/50 group-hover:shadow-glow transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 font-serif text-lg">Contato</h4>
                  <p className="text-gray-400 font-light hover:text-gold-400 transition-colors cursor-pointer">(11) 99999-9999</p>
                  <p className="text-gray-400 font-light hover:text-gold-400 transition-colors cursor-pointer">contato@barbeariaaurea.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-matte-900 rounded-lg border border-white/5 text-gold-500 group-hover:border-gold-500/50 group-hover:shadow-glow transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 font-serif text-lg">Horários</h4>
                  <p className="text-gray-400 font-light">Seg - Sex: 09h às 20h</p>
                  <p className="text-gray-400 font-light">Sáb: 09h às 18h</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
               <a href="#" className="p-3 bg-matte-900 rounded-full border border-white/10 hover:border-gold-500 hover:text-gold-500 text-gray-400 hover:scale-110 hover:shadow-glow transition-all duration-300">
                 <Instagram size={20} />
               </a>
               <a href="#" className="p-3 bg-matte-900 rounded-full border border-white/10 hover:border-gold-500 hover:text-gold-500 text-gray-400 hover:scale-110 hover:shadow-glow transition-all duration-300">
                 <Facebook size={20} />
               </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-matte-900/30 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="text-2xl font-serif text-white mb-8 relative z-10">Agendamento <span className="text-gold-500">Rápido</span></h3>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <input 
                    type="text" 
                    placeholder="Nome" 
                    className="w-full bg-matte-950 border border-white/10 rounded-lg p-4 text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 focus:outline-none transition-all placeholder-gray-600"
                  />
                </div>
                <div className="group">
                  <input 
                    type="tel" 
                    placeholder="Telefone" 
                    className="w-full bg-matte-950 border border-white/10 rounded-lg p-4 text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 focus:outline-none transition-all placeholder-gray-600"
                  />
                </div>
              </div>
              
              <div className="relative">
                <select className="w-full bg-matte-950 border border-white/10 rounded-lg p-4 text-gray-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 focus:outline-none transition-all appearance-none cursor-pointer hover:bg-matte-900">
                  <option>Selecione o Serviço</option>
                  <option>Corte Clássico</option>
                  <option>Barba Real</option>
                  <option>Combo Imperial</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gold-500">
                  ▼
                </div>
              </div>

              <input 
                type="datetime-local"
                className="w-full bg-matte-950 border border-white/10 rounded-lg p-4 text-gray-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 focus:outline-none transition-all cursor-pointer [color-scheme:dark]" 
              />
              
              <Button fullWidth type="submit" className="mt-4 shadow-glow hover:shadow-glow-lg">
                Confirmar Pré-Reserva
              </Button>
              <p className="text-xs text-center text-gray-500 mt-4 font-light tracking-wide">*Entraremos em contato via WhatsApp para confirmar.</p>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Barbearia Áurea. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gold-500 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};