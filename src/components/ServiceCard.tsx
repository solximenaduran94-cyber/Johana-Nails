import React, { useState } from 'react';
import { Sparkles, Sparkle, ShieldCheck, Layers, Palette, Clock, Coins, Check, ArrowRight, X } from 'lucide-react';
import { NailService } from '../types';
import { WHATSAPP_PHONE } from '../data';

interface ServiceCardProps {
  key?: string;
  service: NailService;
  onSelectForCalculator?: (id: string) => void;
}

export default function ServiceCard({ service, onSelectForCalculator }: ServiceCardProps) {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // Map iconName to Lucide icon component
  const renderIcon = (name: string) => {
    const props = { className: "w-5 h-5 text-pink-600" };
    switch (name) {
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Sparkle': return <Sparkle {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Palette': return <Palette {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  const handleBookingRedirect = () => {
    const text = encodeURIComponent(`¡Hola Johana! Estuve viendo tu web y me encantaría reservar un turno para: *${service.name}*. ¿Tenés disponibilidad próximamente?`);
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Individual Card Layout */}
      <div 
        id={`card-${service.id}`}
        className="group bg-white rounded-3xl overflow-hidden border border-pink-100/80 shadow-md shadow-pink-50/50 hover:shadow-xl hover:shadow-pink-100/50 hover:border-pink-200 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
      >
        {/* Card Header Media */}
        <div className="relative h-56 overflow-hidden bg-pink-50">
          <img 
            src={service.image} 
            alt={service.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-pink-700 flex items-center gap-1 shadow-sm">
            {renderIcon(service.iconName)}
            {service.category === 'art' ? 'Adicional' : 'Servicio'}
          </div>
        </div>

        {/* Card Body content */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-xl font-bold text-gray-800 group-hover:text-pink-700 transition-colors mb-2">
              {service.name}
            </h3>
            <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed mb-4">
              {service.description}
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-pink-50">
            {/* Price & Duration details */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                <Clock className="w-4 h-4 text-pink-400" />
                <span>{service.durationMin} min</span>
              </div>
              <div className="flex items-center gap-1 text-sm font-semibold text-pink-700">
                <Coins className="w-4 h-4 text-pink-500" />
                <span>{service.estimatedPrice !== null ? `Desde $${service.estimatedPrice.toLocaleString('es-AR')}` : 'Precio a consultar'}</span>
              </div>
            </div>

            {/* Inclusions summary preview */}
            <ul className="space-y-1.5">
              {service.features.slice(0, 2).map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{feat}</span>
                </li>
              ))}
            </ul>

            {/* Interactive Actions */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                onClick={() => setIsDetailOpen(true)}
                className="py-2.5 px-3 bg-pink-50 hover:bg-pink-100/80 text-pink-700 font-medium text-xs rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer"
              >
                Ver detalles
              </button>
              {onSelectForCalculator ? (
                <button
                  onClick={() => onSelectForCalculator(service.id)}
                  className="py-2.5 px-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-medium text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  Calcular turnos
                </button>
              ) : (
                <button
                  onClick={handleBookingRedirect}
                  className="py-2.5 px-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-medium text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  Reservar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Full Modal Detail Overlay */}
      {isDetailOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          {/* Backdrop blur overlay */}
          <div 
            className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsDetailOpen(false)}
          />

          {/* Modal box */}
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden transform transition-all border border-pink-100 z-10 animate-in fade-in zoom-in duration-200">
            {/* Close button */}
            <button
              onClick={() => setIsDetailOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-gray-500 hover:text-gray-800 transition-all border border-pink-50 cursor-pointer"
              title="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Banner Photo */}
            <div className="relative h-64 sm:h-72 bg-pink-50">
              <img 
                src={service.image} 
                alt={service.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-900/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="p-1 rounded-full bg-pink-500 text-white">
                    {renderIcon(service.iconName)}
                  </span>
                  <span className="text-xs font-semibold tracking-wider text-pink-200 uppercase">
                    Servicio de Alta Gama
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide">
                  {service.name}
                </h3>
              </div>
            </div>

            {/* Modal Body Info */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs font-mono tracking-widest text-pink-500 uppercase font-semibold mb-2">
                  ¿En qué consiste el servicio?
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed font-sans">
                  {service.fullDescription}
                </p>
              </div>

              {/* Service details bar */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-pink-50/50 rounded-2xl border border-pink-50/80">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white text-pink-500 shadow-sm border border-pink-100/50">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase font-mono tracking-wide">Duración promedio</span>
                    <span className="font-sans text-sm font-semibold text-gray-700">{service.durationMin} minutos</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white text-pink-500 shadow-sm border border-pink-100/50">
                    <Coins className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase font-mono tracking-wide">Costo estimado</span>
                    <span className="font-sans text-sm font-semibold text-pink-700">
                      {service.estimatedPrice !== null ? `Desde $${service.estimatedPrice.toLocaleString('es-AR')}` : 'Precio a consultar'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Inclusions list */}
              <div>
                <h4 className="text-xs font-mono tracking-widest text-pink-500 uppercase font-semibold mb-3">
                  ¿Qué incluye este servicio?
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-600 font-sans leading-relaxed">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                <button
                  onClick={handleBookingRedirect}
                  className="flex-1 py-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-medium text-sm rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  Reserva este servicio por WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsDetailOpen(false)}
                  className="py-3 px-5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-sm rounded-xl transition-all cursor-pointer"
                >
                  Cerrar ventana
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
