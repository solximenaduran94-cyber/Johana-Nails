import { J_NAILS_LOGO, INSTAGRAM_USER, WHATSAPP_PHONE } from '../data';
import { Instagram, Phone, Heart, Sparkles, MessageSquare } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBookingClick = () => {
    const text = encodeURIComponent("¡Hola Johana! Estuve navegando en tu web y me gustaría reservar un turno a domicilio para uñas o peinado.");
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${text}`, '_blank');
  };

  return (
    <footer className="bg-pink-950 text-pink-100/90 pt-16 pb-8 border-t border-pink-900 relative overflow-hidden">
      
      {/* Decorative floral glow overlays */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Brand details */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-pink-700 bg-white">
                <img 
                  src={J_NAILS_LOGO} 
                  alt="Johana Nails Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="block font-serif text-lg font-bold text-white tracking-wide">
                  Johana Nails & Peinados
                </span>
                <span className="block text-[10px] font-mono tracking-widest text-pink-400 uppercase">
                  Belleza a Domicilio
                </span>
              </div>
            </div>

            <p className="text-xs text-pink-200/70 leading-relaxed font-sans max-w-sm">
              Especialista en embellecimiento, cuidado de uñas y peinados modernos con trenzas profesionales. Llevamos el salón completo directo a tu domicilio en Villa España, Berazategui, Provincia de Buenos Aires.
            </p>

            {/* Social channels bar */}
            <div className="flex items-center gap-3.5 pt-2">
              <a 
                href={`https://instagram.com/${INSTAGRAM_USER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-pink-500/20 text-white rounded-full border border-white/10 hover:border-pink-500/50 transition-all"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={`https://wa.me/${WHATSAPP_PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-pink-500/20 text-white rounded-full border border-white/10 hover:border-pink-500/50 transition-all"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a 
                href={`tel:${WHATSAPP_PHONE}`}
                className="p-2 bg-white/5 hover:bg-pink-500/20 text-white rounded-full border border-white/10 hover:border-pink-500/50 transition-all"
                title="Llamar"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Service fast shortcuts */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase">
              Técnicas
            </h4>
            <ul className="space-y-2 text-xs text-pink-200/75 font-sans">
              <li><a href="#servicios" className="hover:text-white transition-colors">Esmaltado Semipermanente</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Extensiones en Soft Gel</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Fortalecimiento Capping Gel</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Nail Art Mano Alzada</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Peinados & Trenzas Cosidas</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Alisados & Baño de Keratina</a></li>
            </ul>
          </div>

          {/* Column 3: Contact quick CTA */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase">
              Agendar Turno
            </h4>
            <p className="text-xs text-pink-200/70 leading-relaxed font-sans">
              ¿Lista para lucir unas uñas increíbles? Consultá la agenda de turnos disponibles y reservá tu lugar hoy mismo de forma rápida.
            </p>
            <button
              onClick={handleBookingClick}
              className="w-full py-2.5 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white text-xs font-semibold rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <Sparkles className="w-4 h-4" />
              Consultar Disponibilidad
            </button>
          </div>

        </div>

        {/* Copyright banner */}
        <div className="mt-12 pt-8 border-t border-pink-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-pink-300/60 font-mono tracking-wider uppercase">
          <div>
            &copy; {currentYear} Johana Nails. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-1">
            <span>realizado para Johana con Amor</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
