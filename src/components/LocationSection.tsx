import { MapPin, ShieldCheck, Clock, Navigation, CheckCircle2, Home, Car, Sparkles, Scissors } from 'lucide-react';

export default function LocationSection() {
  return (
    <section id="ubicacion" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono tracking-widest text-pink-500 uppercase font-semibold">
            Máxima Comodidad & Relax
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Servicio a Domicilio Premium
          </h2>
          <p className="text-sm text-gray-500 font-sans mt-3 leading-relaxed">
            Olvidate del viaje, el tráfico y las esperas. Johana Nails & Peinados lleva el salón de belleza directo al living de tu casa.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Info Details */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-pink-600 font-mono">
                ¿Cómo funciona el servicio?
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
                Tu casa, tu propio espacio de spa
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-sans">
                Johana se traslada con todo el equipamiento profesional necesario: cabina UV/LED inalámbrica de alta potencia, kit completo de limas y esmaltes importados, herramientas esterilizadas de grado médico y todos los implementos de peinado para tus trenzas. Vos solo tenés que sentarte, relajarte y disfrutar del cambio de look.
              </p>
            </div>

            {/* Travel details list */}
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-pink-50 text-pink-600 shrink-0 border border-pink-100">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-sm text-gray-800">Servicio 100% a Domicilio</h4>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed font-sans">
                    Ideal para quienes tienen agendas apretadas, cuidan de sus hijos, organizan un evento en grupo o simplemente prefieren la privacidad de su hogar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-pink-50 text-pink-600 shrink-0 border border-pink-100">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-sm text-gray-800">Zona de Cobertura Sin Cargo</h4>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed font-sans">
                    Cobertura directa sin viático en todo <b>Villa España</b> y zona céntrica de <b>Berazategui</b>. Por zonas aledañas más alejadas, consultanos un mínimo viático adicional.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-pink-50 text-pink-600 shrink-0 border border-pink-100">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-sm text-gray-800">Bioseguridad & Sanitización</h4>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed font-sans">
                    Máxima higiene en tu hogar. Desinfectamos el área de trabajo antes y después de iniciar el servicio. Herramientas de metal esterilizadas y limas descartables por clienta.
                  </p>
                </div>
              </div>
            </div>

            {/* Hours list */}
            <div className="p-4 bg-pink-50/40 rounded-2xl border border-pink-50/80 space-y-2">
              <div className="flex items-center gap-1.5 text-xs text-pink-800 font-bold uppercase font-mono tracking-wider">
                <Clock className="w-4 h-4 text-pink-500" /> Horarios de Visita
              </div>
              <ul className="text-xs text-gray-600 space-y-1 pl-5 list-disc leading-relaxed font-sans">
                <li><b>Lunes a Viernes:</b> 09:00 a 19:00 hs (último turno inicia 17:30 hs)</li>
                <li><b>Sábados:</b> 09:00 a 14:00 hs</li>
                <li>Domingos y feriados cerrado (salvo eventos de peinados previamente acordados).</li>
              </ul>
            </div>
          </div>

          {/* Right: Beautiful Visual Styled Map Mockup */}
          <div className="lg:col-span-6">
            <div className="relative bg-gradient-to-br from-pink-50 to-rose-100/50 p-8 rounded-3xl border border-pink-100/80 shadow-md aspect-square max-w-lg mx-auto flex flex-col items-center justify-center text-center overflow-hidden">
              
              {/* Fake abstract map rings and lines */}
              <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                <div className="w-[110%] h-[110%] border-4 border-dashed border-pink-900 rounded-full" />
                <div className="absolute w-[80%] h-[80%] border-2 border-solid border-pink-800 rounded-full" />
                <div className="absolute w-[50%] h-[50%] border border-dashed border-pink-800 rounded-full" />
              </div>

              {/* Styled pointer banner */}
              <div className="relative z-10 space-y-4 p-6 bg-white/95 backdrop-blur-md rounded-2xl border border-pink-200/50 shadow-lg max-w-xs">
                
                {/* Visual Pin Animation */}
                <div className="relative w-16 h-16 bg-gradient-to-tr from-pink-500 to-rose-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md shadow-pink-200 animate-bounce">
                  <MapPin className="w-8 h-8" />
                  <span className="absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-20" />
                </div>

                <div>
                  <h4 className="font-serif font-bold text-gray-800 text-base">Johana a Domicilio</h4>
                  <p className="text-xs text-pink-600 font-semibold font-mono tracking-wider mt-0.5 uppercase">Uñas, Peinados & Trenzas</p>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-sans mt-2">
                    Llevamos el salón completo a tu puerta. Cobertura activa en Berazategui y barrios vecinos.
                  </p>
                </div>

                {/* Coverage zones bubbles */}
                <div className="pt-2 flex flex-wrap gap-1.5 justify-center">
                  {['Villa España', 'Berazategui', 'Ranelagh', 'Plátanos', 'Hudson'].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-pink-50 text-pink-700 rounded-full text-[10px] font-bold font-sans">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footnote bar */}
              <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center px-4">
                <div className="flex items-center gap-1.5 bg-pink-950 text-white px-3.5 py-1.5 rounded-full text-[10px] font-mono tracking-wider uppercase font-semibold shadow-sm">
                  <Navigation className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
                  <span>Radio de cobertura a Domicilio</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
