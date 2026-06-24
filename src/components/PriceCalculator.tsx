import { useState } from 'react';
import { SERVICES_DATA, WHATSAPP_PHONE } from '../data';
import { HelpCircle, Calculator, Sparkles, Clock, Coins, Check, MessageSquare, Plus } from 'lucide-react';

interface AdditionalOption {
  id: string;
  name: string;
  price: number | null;
  durationMin: number;
  category: string;
  description: string;
}

const ADDITIONAL_OPTIONS: AdditionalOption[] = [
  {
    id: 'art-par',
    name: 'Diseño en Uña (Par)',
    price: 2000,
    durationMin: 15,
    category: 'deco',
    description: 'Pintado de diseño personalizado a mano alzada en dos uñas.'
  },
  {
    id: 'stones-par',
    name: 'Piedras en Uña (Par)',
    price: 500,
    durationMin: 10,
    category: 'deco',
    description: 'Gemas de brillo adheridas con gel de alta resistencia.'
  },
  {
    id: 'charm',
    name: 'Dije (Cada uno)',
    price: 1000,
    durationMin: 10,
    category: 'deco',
    description: 'Hermoso dije de diseño para lucir en tus uñas.'
  },
  {
    id: 'art-simple',
    name: 'Nail Art Simple (Líneas, puntos, stickers)',
    price: null,
    durationMin: 15,
    category: 'deco',
    description: 'Detalles minimalistas en varias uñas. Consultar precio.'
  },
  {
    id: 'art-completo',
    name: 'Nail Art Completo (Toda la mano)',
    price: null,
    durationMin: 40,
    category: 'deco',
    description: 'Diseños detallados pintados a pincel en cada uña. Consultar precio.'
  },
  {
    id: 'removal-other',
    name: 'Retiro de material de otro salón',
    price: null,
    durationMin: 20,
    category: 'prep',
    description: 'Retiramos tu esmaltado previo cuidando tu uña natural. Consultar precio.'
  },
  {
    id: 'removal-own',
    name: 'Retiro de mi material (Johana Nails)',
    price: null,
    durationMin: 15,
    category: 'prep',
    description: 'Precio bonificado para remoción de nuestro propio trabajo. Consultar precio.'
  },
  {
    id: 'french-classic',
    name: 'Diseño Francesita Clásica',
    price: null,
    durationMin: 15,
    category: 'deco',
    description: 'Línea de sonrisa blanca o de color. Consultar precio.'
  },
  {
    id: 'hair-braids-combo',
    name: 'Combo Peinado & Trenzas Cosidas',
    price: null,
    durationMin: 35,
    category: 'hair',
    description: '¡Aprovechá la visita a domicilio y sumá unas hermosas trenzas cosidas o recogido! Consultar precio.'
  },
  {
    id: 'viatico-lejano',
    name: 'Viático de Domicilio Lejano',
    price: null,
    durationMin: 0,
    category: 'travel',
    description: 'Aplica únicamente para traslados fuera de la zona de Villa España / Berazategui centro. Consultar precio.'
  }
];

export default function PriceCalculator() {
  const [selectedBaseId, setSelectedBaseId] = useState<string>(SERVICES_DATA[0].id);
  const [selectedAdditionals, setSelectedAdditionals] = useState<string[]>([]);
  const [clientName, setClientName] = useState<string>('');

  const selectedBase = SERVICES_DATA.find(s => s.id === selectedBaseId) || SERVICES_DATA[0];

  const toggleAdditional = (id: string) => {
    if (selectedAdditionals.includes(id)) {
      setSelectedAdditionals(selectedAdditionals.filter(item => item !== id));
    } else {
      setSelectedAdditionals([...selectedAdditionals, id]);
    }
  };

  // Calculate totals
  const basePrice = selectedBase.estimatedPrice !== null ? selectedBase.estimatedPrice : 0;
  const hasConsultableBase = selectedBase.estimatedPrice === null;

  const additionalsPrice = selectedAdditionals.reduce((total, id) => {
    const option = ADDITIONAL_OPTIONS.find(opt => opt.id === id);
    return total + (option && option.price !== null ? option.price : 0);
  }, 0);

  const selectedOpts = selectedAdditionals.map(id => ADDITIONAL_OPTIONS.find(opt => opt.id === id)).filter(Boolean);
  const hasConsultableAdditional = selectedOpts.some(opt => opt && opt.price === null);
  const hasConsultable = hasConsultableBase || hasConsultableAdditional;

  const totalPrice = basePrice + additionalsPrice;

  const baseDuration = selectedBase.durationMin;
  const additionalsDuration = selectedAdditionals.reduce((total, id) => {
    const option = ADDITIONAL_OPTIONS.find(opt => opt.id === id);
    return total + (option ? option.durationMin : 0);
  }, 0);
  const totalDuration = baseDuration + additionalsDuration;

  const handleBookingWithCalculator = () => {
    const formattedAdditionals = selectedAdditionals.map(id => {
      const opt = ADDITIONAL_OPTIONS.find(o => o.id === id);
      if (!opt) return '';
      const priceStr = opt.price !== null ? `+$${opt.price.toLocaleString('es-AR')}` : '(A consultar)';
      return `  • ${opt.name} (${priceStr})`;
    }).filter(Boolean).join('\n');

    const nameLine = clientName ? `Hola Johana, mi nombre es *${clientName}*` : '¡Hola Johana!';
    const basePriceStr = selectedBase.estimatedPrice !== null ? `$${selectedBase.estimatedPrice.toLocaleString('es-AR')}` : 'A consultar';
    const totalPriceStr = hasConsultable
      ? (totalPrice > 0 ? `Desde $${totalPrice.toLocaleString('es-AR')} + adicionales a consultar` : 'A consultar')
      : `$${totalPrice.toLocaleString('es-AR')}`;

    const message = `${nameLine}. Estuve usando el cotizador en tu web y armé este presupuesto para mi turno:

*Servicio Base:* ${selectedBase.name} (${basePriceStr})
${selectedAdditionals.length > 0 ? `*Adicionales seleccionados:*\n${formattedAdditionals}` : ''}

*Duración estimada:* ${totalDuration} min
*Total estimado:* ${totalPriceStr}

¿Tenés algún turno disponible para este servicio? ¡Muchas gracias!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="calculadora" className="py-20 bg-pink-50/40 relative overflow-hidden">
      {/* Background Decorative Wreath-like blur shapes */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-rose-200/30 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono tracking-widest text-pink-500 uppercase font-semibold">
            Presupuesto a Medida
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Cotizador de Servicios
          </h2>
          <p className="text-sm text-gray-500 font-sans mt-3 leading-relaxed">
            Armá tu combinación favorita de esmaltado, largo y decoraciones para conocer el costo y la duración estimada antes de agendar tu turno.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Options Column */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-pink-100/70 shadow-sm space-y-8">
            
            {/* Step 1: Base Service Selection */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-6 h-6 rounded-full bg-pink-500 text-white text-xs font-bold flex items-center justify-center">1</span>
                <h3 className="text-base font-semibold text-gray-800 font-serif">Seleccioná tu Servicio Base</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {SERVICES_DATA.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      setSelectedBaseId(service.id);
                      // If 'art' is selected as base, remove other art-completo additionals to avoid duplicate pricing
                      if (service.id === 'art') {
                        setSelectedAdditionals(selectedAdditionals.filter(id => id !== 'art-completo' && id !== 'art-simple'));
                      }
                    }}
                    className={`p-4 rounded-2xl border text-left transition-all relative flex flex-col justify-between cursor-pointer ${
                      selectedBaseId === service.id
                        ? 'border-pink-500 bg-pink-50/30 ring-2 ring-pink-500/10'
                        : 'border-gray-150 hover:border-pink-300 hover:bg-pink-50/10'
                    }`}
                  >
                    {selectedBaseId === service.id && (
                      <span className="absolute top-3 right-3 w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center text-white">
                        <Check className="w-3 h-3 stroke-[3px]" />
                      </span>
                    )}
                    <div>
                      <h4 className="font-sans font-semibold text-gray-800 text-sm">{service.name}</h4>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed">{service.description}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-2 w-full">
                      <span className="text-xs text-gray-400">{service.durationMin} min</span>
                      <span className="text-sm font-bold text-pink-700">
                        {service.estimatedPrice !== null ? `$${service.estimatedPrice.toLocaleString('es-AR')}` : 'Consultar'}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Additional Nail Art & Prep Options */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-6 h-6 rounded-full bg-pink-500 text-white text-xs font-bold flex items-center justify-center">2</span>
                <h3 className="text-base font-semibold text-gray-800 font-serif">Agregá Decoraciones y Preparación (Opcional)</h3>
              </div>
              <div className="space-y-2.5">
                {ADDITIONAL_OPTIONS.map((option) => {
                  const isChecked = selectedAdditionals.includes(option.id);
                  return (
                    <button
                      key={option.id}
                      onClick={() => toggleAdditional(option.id)}
                      className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between gap-4 cursor-pointer ${
                        isChecked
                          ? 'border-pink-400 bg-pink-50/20'
                          : 'border-gray-100 hover:bg-gray-50/80 hover:border-pink-200'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded border mt-0.5 flex items-center justify-center transition-colors ${
                          isChecked ? 'bg-pink-500 border-pink-500 text-white' : 'border-gray-300 bg-white'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3px]" />}
                        </div>
                        <div>
                          <h4 className="font-sans font-medium text-gray-800 text-xs sm:text-sm">{option.name}</h4>
                          <p className="text-xs text-gray-400 mt-0.5 font-sans">{option.description}</p>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="block font-semibold text-xs sm:text-sm text-pink-700">
                          {option.price !== null ? `+$${option.price.toLocaleString('es-AR')}` : 'Consultar'}
                        </span>
                        <span className="block text-[10px] text-gray-400">+{option.durationMin} min</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Enter Name for Personalized Booking */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-6 h-6 rounded-full bg-pink-500 text-white text-xs font-bold flex items-center justify-center">3</span>
                <h3 className="text-base font-semibold text-gray-800 font-serif">Tu Nombre</h3>
              </div>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Escribí tu nombre (ej: Jimena)"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-500 font-sans text-sm transition-all"
              />
            </div>

          </div>

          {/* Results Summary Box Sticky */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="bg-gradient-to-br from-pink-900 to-pink-950 text-white p-6 sm:p-8 rounded-3xl border border-pink-850 shadow-xl space-y-6">
              
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-pink-300 font-medium">Mi Presupuesto</span>
                <h3 className="font-serif text-2xl font-bold tracking-wide mt-1">Resumen del Turno</h3>
              </div>

              {/* Breakdown detail list */}
              <div className="space-y-4 py-4 border-y border-pink-800/40">
                <div className="flex justify-between gap-4 text-xs font-sans">
                  <span className="text-pink-200">Servicio Base ({selectedBase.name}):</span>
                  <span className="font-semibold text-white">
                    {selectedBase.estimatedPrice !== null ? `$${selectedBase.estimatedPrice.toLocaleString('es-AR')}` : 'A consultar'}
                  </span>
                </div>
                
                {selectedAdditionals.length > 0 && (
                  <div className="space-y-2">
                    <span className="block text-[10px] text-pink-300 uppercase tracking-wider font-mono font-semibold">Adicionales:</span>
                    {selectedAdditionals.map(id => {
                      const opt = ADDITIONAL_OPTIONS.find(o => o.id === id);
                      if (!opt) return null;
                      return (
                        <div key={id} className="flex justify-between gap-4 text-xs font-sans pl-2 border-l border-pink-700">
                          <span className="text-pink-200 line-clamp-1">{opt.name}</span>
                          <span className="font-medium text-white">
                            {opt.price !== null ? `$${opt.price.toLocaleString('es-AR')}` : 'A consultar'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Total Duration & Price display */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-1.5 text-pink-300 text-[10px] font-mono tracking-wider uppercase font-semibold">
                    <Clock className="w-3.5 h-3.5 text-pink-400" />
                    Duración
                  </div>
                  <span className="block text-lg font-bold mt-1 font-sans">{totalDuration} min</span>
                </div>

                <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-1.5 text-pink-300 text-[10px] font-mono tracking-wider uppercase font-semibold">
                    <Coins className="w-3.5 h-3.5 text-pink-400" />
                    Precio Total
                  </div>
                  <span className="block text-base sm:text-lg font-bold mt-1 text-pink-300 font-sans">
                    {hasConsultable 
                      ? (totalPrice > 0 ? `Desde $${totalPrice.toLocaleString('es-AR')}*` : 'A consultar')
                      : `$${totalPrice.toLocaleString('es-AR')}`}
                  </span>
                </div>
              </div>

              {/* Help tip */}
              <p className="text-[11px] text-pink-200/80 leading-relaxed font-sans">
                ⚠️ *Nota:* Los precios son estimados base. El presupuesto final se confirmará al momento de evaluar tus uñas de forma personalizada.
              </p>

              {/* WhatsApp Redirection */}
              <button
                onClick={handleBookingWithCalculator}
                className="w-full py-3.5 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-medium rounded-xl text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4.5 h-4.5" />
                Agendar Turno con esta Cotización
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
