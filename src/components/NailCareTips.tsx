import { useState } from 'react';
import { CARE_TIPS_DATA } from '../data';
import { ShieldAlert, Hammer, Droplets, CalendarDays, Scissors, ChevronDown, BookOpen, Lightbulb } from 'lucide-react';

export default function NailCareTips() {
  const [activeTipId, setActiveTipId] = useState<string | null>(CARE_TIPS_DATA[0].id);

  const getIcon = (name: string, active: boolean) => {
    const props = { className: `w-5 h-5 ${active ? 'text-pink-600' : 'text-gray-500'}` };
    switch (name) {
      case 'ShieldAlert': return <ShieldAlert {...props} />;
      case 'Hammer': return <Hammer {...props} />;
      case 'Droplets': return <Droplets {...props} />;
      case 'CalendarDays': return <CalendarDays {...props} />;
      case 'Scissors': return <Scissors {...props} />;
      default: return <Lightbulb {...props} />;
    }
  };

  return (
    <section id="cuidados" className="py-20 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono tracking-widest text-pink-500 uppercase font-semibold">
            Salud & Bienestar
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Cómo Cuidar tus Uñas
          </h2>
          <p className="text-sm text-gray-500 font-sans mt-3 leading-relaxed">
            Una manicura perfecta requiere un cuidado posterior adecuado. Sigue estos simples consejos profesionales de Johana para mantener tus diseños radiantes y saludables por mucho más tiempo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* FAQ/Accordion Selection List */}
          <div className="md:col-span-5 space-y-3">
            {CARE_TIPS_DATA.map((tip) => {
              const isActive = activeTipId === tip.id;
              return (
                <button
                  key={tip.id}
                  onClick={() => setActiveTipId(isActive ? null : tip.id)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all flex items-center justify-between gap-4 cursor-pointer ${
                    isActive 
                      ? 'border-pink-300 bg-pink-50/20 shadow-sm' 
                      : 'border-gray-100 hover:bg-gray-50/60 hover:border-pink-200'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2.5 rounded-xl transition-all ${isActive ? 'bg-pink-100/70 text-pink-600' : 'bg-gray-100 text-gray-400'}`}>
                      {getIcon(tip.icon, isActive)}
                    </div>
                    <div>
                      <h4 className={`font-sans font-semibold text-sm transition-colors ${isActive ? 'text-pink-900 font-bold' : 'text-gray-700'}`}>
                        {tip.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-0.5 line-clamp-1 font-sans">{tip.shortDescription}</p>
                    </div>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isActive ? 'rotate-180 text-pink-600' : ''}`} />
                </button>
              );
            })}
          </div>

          {/* Details Content Box */}
          <div className="md:col-span-7">
            {activeTipId ? (
              (() => {
                const activeTip = CARE_TIPS_DATA.find(t => t.id === activeTipId)!;
                return (
                  <div className="bg-gradient-to-b from-pink-50/30 to-pink-100/10 p-6 sm:p-8 rounded-3xl border border-pink-100/70 shadow-sm animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="flex items-center gap-3.5 mb-6">
                      <span className="p-3 bg-white rounded-2xl border border-pink-100 text-pink-600 shadow-sm">
                        {getIcon(activeTip.icon, true)}
                      </span>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-pink-500 font-mono font-semibold">Consejo Profesional</span>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-pink-950 mt-0.5">{activeTip.title}</h3>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {activeTip.content.map((paragraph, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5 font-sans">
                            {index + 1}
                          </span>
                          <p className="text-sm text-gray-600 leading-relaxed font-sans">{paragraph}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-pink-100/60 flex items-center gap-3 text-xs text-pink-700 font-sans italic bg-pink-50/40 p-4 rounded-xl border border-pink-50">
                      <BookOpen className="w-4.5 h-4.5 text-pink-500 shrink-0" />
                      <span>"La salud de tus uñas naturales es el mejor cimiento para un diseño hermoso y duradero. ¡Cuidalas!" — Johana</span>
                    </div>
                  </div>
                );
              })()
            ) : (
              <div className="bg-gray-50 border border-gray-200/60 p-12 rounded-3xl text-center h-full flex flex-col items-center justify-center">
                <BookOpen className="w-10 h-10 text-gray-400 mb-3 animate-bounce" />
                <h4 className="font-serif text-lg font-bold text-gray-700">Explorá los Cuidados</h4>
                <p className="text-xs text-gray-400 font-sans mt-1 max-w-sm mx-auto">
                  Seleccioná cualquiera de las recomendaciones de la izquierda para ver el detalle de los hábitos saludables para tus uñas.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
