import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Phone, CalendarDays, Sparkles } from 'lucide-react';
import { J_NAILS_LOGO, WHATSAPP_PHONE, INSTAGRAM_USER } from '../data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookingClick = () => {
    const text = encodeURIComponent("¡Hola Johana! Vi tu página web y me gustaría consultar por un turno a domicilio para uñas o peinado.");
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${text}`, '_blank');
  };

  const menuItems = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Calculadora de Precios', href: '#calculadora' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Consejos de Cuidado', href: '#cuidados' },
    { label: 'Cobertura Domicilio', href: '#ubicacion' }
  ];

  return (
    <header 
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-pink-100 py-2' 
          : 'bg-gradient-to-b from-pink-50/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-pink-200 bg-white transition-transform duration-300 group-hover:scale-105">
              <img 
                src={J_NAILS_LOGO} 
                alt="Johana Nails Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-wide text-pink-900 group-hover:text-pink-600 transition-colors">
                Johana Nails & Peinados
              </span>
              <span className="text-[10px] font-mono tracking-widest text-pink-500 uppercase flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-pink-400 animate-pulse" /> Belleza a Domicilio
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-sans text-sm font-medium text-gray-600 hover:text-pink-600 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Call to Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href={`https://instagram.com/${INSTAGRAM_USER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-pink-600 rounded-full hover:bg-pink-50 transition-all"
              title="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <button
              onClick={handleBookingClick}
              className="px-5 py-2.5 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-medium text-sm rounded-full shadow-md shadow-pink-200 hover:shadow-lg hover:shadow-pink-300 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <CalendarDays className="w-4 h-4" />
              Reservar Turno
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <a 
              href={`https://instagram.com/${INSTAGRAM_USER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-gray-500 hover:text-pink-600 rounded-full hover:bg-pink-50 transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-pink-600 rounded-full hover:bg-pink-50 transition-colors cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-lg border-b border-pink-100 shadow-lg absolute top-full left-0 w-full overflow-hidden transition-all duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 font-sans text-base font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-xl transition-all"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3 px-4">
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleBookingClick();
                }}
                className="w-full py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <CalendarDays className="w-5 h-5" />
                Reservar Turno vía WhatsApp
              </button>
              <a
                href={`tel:${WHATSAPP_PHONE}`}
                className="w-full py-3 bg-gray-50 hover:bg-pink-50 text-gray-700 font-medium rounded-xl flex items-center justify-center gap-2 border border-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5 text-pink-500" />
                Llamar Directo
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
