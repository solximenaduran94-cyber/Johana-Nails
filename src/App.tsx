import React, { useState } from 'react';
import Header from './components/Header';
import ServiceCard from './components/ServiceCard';
import PriceCalculator from './components/PriceCalculator';
import NailCareTips from './components/NailCareTips';
import GallerySection from './components/GallerySection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

import { SERVICES_DATA, WHATSAPP_PHONE, INSTAGRAM_USER, TESTIMONIALS_DATA, J_NAILS_LOGO, SOFT_GEL_SHOWCASE, CAPPING_GEL_SHOWCASE } from './data';
import { Sparkles, Star, Award, HeartHandshake, MapPin, Sparkle, ArrowRight, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'semi' | 'soft-gel' | 'capping' | 'dipping' | 'braids'>('all');

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_DATA.filter(s => s.id !== 'art') // Hide raw art additional from main services grid, as it is an add-on
    : SERVICES_DATA.filter(s => s.category === selectedCategory);

  const handleGeneralBooking = () => {
    const text = encodeURIComponent("¡Hola Johana! Estuve viendo tu sitio web y me gustaría reservar un turno a domicilio para uñas o peinado.");
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${text}`, '_blank');
  };

  const serviceCategories = [
    { id: 'all', label: 'Todos los Servicios' },
    { id: 'semi', label: 'Semipermanente' },
    { id: 'soft-gel', label: 'Soft Gel' },
    { id: 'capping', label: 'Capping Gel' },
    { id: 'dipping', label: 'Dipping' },
    { id: 'braids', label: 'Peinados & Trenzas' }
  ];

  return (
    <div className="min-h-screen bg-pink-50/10 font-sans text-gray-800 antialiased selection:bg-pink-100 selection:text-pink-800">
      
      {/* Sticky Header */}
      <Header />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 sm:pb-28 overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50/60 to-white">
        {/* Decorative blur elements resembling butterfly/floral watercolor shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Visual copy & CTA */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-100/70 border border-pink-200 text-pink-700 text-xs font-semibold uppercase tracking-wider font-mono animate-fade-in">
                <Sparkle className="w-3.5 h-3.5 animate-spin duration-3000" />
                <span>Manicura & Peinados a Domicilio • Berazategui</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-pink-950 tracking-tight leading-tight">
                Tus manos & peinados <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700 relative">
                  expresan tu esencia
                </span>
              </h1>

              <p className="font-sans text-sm sm:text-base text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Descubrí el cuidado de alta gama para tus uñas y peinados espectaculares con trenzas profesionales. Todo realizado con productos premium en la comodidad de tu hogar en Villa España, Berazategui y alrededores.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  onClick={handleGeneralBooking}
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-medium text-sm rounded-full shadow-lg shadow-pink-200 hover:shadow-xl hover:shadow-pink-300 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Reservar Mi Turno
                  <ArrowRight className="w-4.5 h-4.5" />
                </button>
                <a
                  href="#servicios"
                  className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-gray-50 text-pink-700 font-medium text-sm rounded-full border border-pink-200/60 shadow-sm transition-all text-center flex items-center justify-center gap-1"
                >
                  Ver Catálogo
                </a>
              </div>

              {/* Value Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-pink-100/60 max-w-md mx-auto lg:mx-0 text-left">
                <div>
                  <span className="block font-serif text-lg sm:text-xl font-bold text-pink-950">21+ Días</span>
                  <span className="block text-[10px] sm:text-xs text-gray-500 font-mono tracking-wide">De Duración</span>
                </div>
                <div>
                  <span className="block font-serif text-lg sm:text-xl font-bold text-pink-950">100% Pro</span>
                  <span className="block text-[10px] sm:text-xs text-gray-500 font-mono tracking-wide">Sanitizado</span>
                </div>
                <div>
                  <span className="block font-serif text-lg sm:text-xl font-bold text-pink-950">Freehand</span>
                  <span className="block text-[10px] sm:text-xs text-gray-500 font-mono tracking-wide">Mano Alzada</span>
                </div>
              </div>

            </div>

            {/* Right Column: High End Layout of Images */}
            <div className="lg:col-span-5 relative flex justify-center">
              
              {/* Circular rotating badge behind the photo */}
              <div className="absolute -top-6 -left-6 z-20 bg-white p-4 rounded-3xl border border-pink-100 shadow-xl max-w-[170px] hidden sm:block animate-pulse">
                <div className="flex items-center gap-2 text-pink-600 font-bold text-xs uppercase font-mono mb-1">
                  <Award className="w-4.5 h-4.5" />
                  <span>Calidad</span>
                </div>
                <p className="text-[10px] text-gray-500 leading-normal font-sans">
                  Uñas fuertes y cuidadas sin dañar la keratina natural.
                </p>
              </div>

              {/* Main Stacked Image Wrapper */}
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img 
                  src={SOFT_GEL_SHOWCASE} 
                  alt="Uñas pintadas por Johana" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-pink-100/50 shadow-md flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-pink-100 bg-white">
                    <img 
                      src={J_NAILS_LOGO} 
                      alt="Johana Profile Small" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-pink-950 text-xs sm:text-sm">Johana Nails</h4>
                    <p className="text-[10px] text-pink-500 font-mono tracking-wider font-semibold uppercase mt-0.5">Villa España, Berazategui</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono tracking-widest text-pink-500 uppercase font-semibold">
              Servicios Exclusivos
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Menu de Tratamientos
            </h2>
            <p className="text-sm text-gray-500 font-sans mt-3 leading-relaxed">
              Trabajamos con las técnicas más saludables del mercado. Seleccioná una categoría para ver los precios estimados y duraciones recomendadas.
            </p>
          </div>

          {/* Filtering Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {serviceCategories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-4.5 py-2 rounded-full font-sans text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md shadow-pink-200'
                    : 'bg-pink-50/50 text-gray-600 border border-pink-100/50 hover:border-pink-300 hover:text-pink-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onSelectForCalculator={(id) => {
                  const el = document.getElementById('calculadora');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              />
            ))}
          </div>

          {/* Special Custom Add-on Notice */}
          <div className="mt-12 p-6 bg-pink-50/30 rounded-3xl border border-pink-100/60 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <span className="p-3 bg-white rounded-2xl border border-pink-100 text-pink-600 hidden sm:block">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </span>
              <div>
                <h4 className="font-serif font-bold text-pink-950 text-sm sm:text-base">¿Querés un diseño único a mano alzada?</h4>
                <p className="text-xs text-gray-500 font-sans mt-0.5 leading-relaxed">
                  Realizamos flores, abstracciones, apliques de piedras o efecto cromado. Podés sumarlo a cualquier servicio de esmaltado base.
                </p>
              </div>
            </div>
            <a 
              href="#calculadora"
              className="px-5 py-2.5 bg-white hover:bg-pink-50 text-pink-700 font-bold text-xs rounded-xl border border-pink-200 transition-all whitespace-nowrap"
            >
              Calcular con Decoraciones
            </a>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE CALCULATOR */}
      <PriceCalculator />

      {/* 4. GALLERY SHOWCASE */}
      <GallerySection />

      {/* 5. TESTIMONIALS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono tracking-widest text-pink-500 uppercase font-semibold">
              Opiniones Reales
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Qué Dicen Nuestras Clientas
            </h2>
            <p className="text-sm text-gray-500 font-sans mt-3 leading-relaxed">
              La confianza se gana detalle a detalle. Leé los testimonios de quienes eligen a Johana Nails mes a mes para cuidar sus manos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS_DATA.map((t) => (
              <div 
                key={t.id}
                className="bg-pink-50/25 p-6 sm:p-8 rounded-3xl border border-pink-100/50 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-3">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans italic">
                    "{t.comment}"
                  </p>
                </div>

                {/* Client Profile and Details */}
                <div className="flex items-center justify-between border-t border-pink-100/50 pt-4 gap-4">
                  <div>
                    <h4 className="font-sans font-bold text-gray-800 text-xs sm:text-sm">{t.name}</h4>
                    <span className="text-[10px] text-gray-400 font-mono mt-0.5 block">{t.date} • Berazategui</span>
                  </div>
                  <span className="px-3 py-1 bg-white rounded-full text-[10px] font-bold text-pink-700 uppercase font-mono shadow-sm border border-pink-100">
                    {t.serviceType}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Satisfaction assurance note */}
          <div className="mt-12 text-center p-6 bg-gradient-to-r from-pink-50/50 to-rose-50/50 rounded-3xl border border-pink-100/60 max-w-xl mx-auto space-y-2">
            <HeartHandshake className="w-8 h-8 text-pink-500 mx-auto" />
            <h4 className="font-serif text-sm font-bold text-pink-950">Garantía de Satisfacción</h4>
            <p className="text-xs text-gray-500 font-sans max-w-md mx-auto leading-relaxed">
              Si tenés algún inconveniente menor con tu esmaltado dentro de las primeras 48 hs de tu turno, ¡escribinos y lo solucionamos sin cargo!
            </p>
          </div>

        </div>
      </section>

      {/* 6. CARE TIPS */}
      <NailCareTips />

      {/* 7. LOCATION & COVERAGE MAP */}
      <LocationSection />

      {/* 8. FOOTER */}
      <Footer />

    </div>
  );
}
