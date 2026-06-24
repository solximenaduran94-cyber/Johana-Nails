import React, { useState, useEffect } from 'react';
import { GALLERY_DATA } from '../data';
import { GalleryItem } from '../types';
import { Heart, Maximize2, X, Sparkles, SlidersHorizontal } from 'lucide-react';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [items, setItems] = useState<GalleryItem[]>(GALLERY_DATA);
  const [likedIds, setLikedIds] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Load liked items from localStorage
  useEffect(() => {
    const storedLikes = localStorage.getItem('johana_nails_liked_gallery');
    if (storedLikes) {
      try {
        setLikedIds(JSON.parse(storedLikes));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Filter items
  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter(item => item.category === activeCategory);

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid triggering lightbox click
    let updatedLikes: string[];

    if (likedIds.includes(id)) {
      updatedLikes = likedIds.filter(likedId => likedId !== id);
      // Decrement like count in state
      setItems(items.map(item => item.id === id ? { ...item, likes: item.likes - 1 } : item));
    } else {
      updatedLikes = [...likedIds, id];
      // Increment like count in state
      setItems(items.map(item => item.id === id ? { ...item, likes: item.likes + 1 } : item));
    }

    setLikedIds(updatedLikes);
    localStorage.setItem('johana_nails_liked_gallery', JSON.stringify(updatedLikes));
  };

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'soft-gel', label: 'Soft Gel' },
    { id: 'capping', label: 'Capping Gel' },
    { id: 'semi', label: 'Semipermanente' },
    { id: 'art', label: 'Mano Alzada' },
    { id: 'braids', label: 'Peinados & Trenzas' }
  ];

  return (
    <section id="galeria" className="py-20 bg-pink-50/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono tracking-widest text-pink-500 uppercase font-semibold">
            Inspirate
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Galería de Diseños Reales
          </h2>
          <p className="text-sm text-gray-500 font-sans mt-3 leading-relaxed">
            Explorá algunos de los trabajos reales hechos por Johana. Desde la clásica elegancia hasta los diseños más osados a mano alzada. ¡Tu próximo diseño está acá!
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <span className="text-xs font-semibold text-gray-400 font-mono flex items-center gap-1.5 mr-2">
            <SlidersHorizontal className="w-3.5 h-3.5" /> Filtrar:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4.5 py-2 rounded-full font-sans text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md shadow-pink-200'
                  : 'bg-white text-gray-600 border border-gray-150 hover:border-pink-300 hover:text-pink-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isLiked = likedIds.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group bg-white rounded-3xl overflow-hidden border border-pink-100/50 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col relative"
              >
                {/* Image Wrap */}
                <div className="relative h-72 overflow-hidden bg-pink-50">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Hover action overlay */}
                  <div className="absolute inset-0 bg-pink-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <span className="p-3 bg-white/90 backdrop-blur-md text-pink-600 hover:text-pink-700 rounded-full transition-transform duration-300 scale-90 group-hover:scale-100 shadow-md">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>

                  {/* Like heart button top right */}
                  <button
                    onClick={(e) => toggleLike(item.id, e)}
                    className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/80 backdrop-blur-md hover:bg-white shadow-sm border border-pink-50 text-gray-500 hover:text-red-500 transition-all cursor-pointer"
                    title={isLiked ? 'Quitar Me gusta' : 'Me gusta'}
                  >
                    <Heart className={`w-4.5 h-4.5 transition-colors ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-500'}`} />
                  </button>

                  {/* Category label bottom left */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-pink-700 tracking-wider uppercase shadow-sm font-mono">
                    {item.categoryLabel}
                  </div>
                </div>

                {/* Info Bar */}
                <div className="p-4 flex items-center justify-between gap-4 border-t border-pink-50/50">
                  <p className="font-sans font-medium text-gray-700 text-xs sm:text-sm line-clamp-1">
                    {item.title}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-gray-400 shrink-0 font-medium font-sans">
                    <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                    <span>{item.likes}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-pink-200">
            <Sparkles className="w-10 h-10 text-pink-400 mx-auto mb-2 animate-pulse" />
            <p className="text-sm font-medium text-gray-500">Próximamente agregaremos más diseños en esta categoría.</p>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-gray-950/80 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedImage(null)}
          />

          <div className="relative bg-white rounded-3xl overflow-hidden max-w-3xl w-full border border-white/20 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white hover:text-pink-300 transition-all cursor-pointer"
              title="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content box */}
            <div className="flex flex-col md:flex-row h-full">
              {/* Photo */}
              <div className="md:w-3/5 bg-gray-900 aspect-square md:aspect-auto md:h-[500px]">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Info Sidebar */}
              <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-white">
                <div className="space-y-4">
                  <div>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-[10px] font-bold tracking-wider uppercase font-mono shadow-sm">
                      {selectedImage.categoryLabel}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 mt-3 leading-snug">
                      {selectedImage.title}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-500 leading-relaxed font-sans">
                    Diseño realizado con productos profesionales de alta calidad. El esculpido y pintado respeta los tiempos de curado específicos para asegurar la máxima durabilidad sin dañar tu uña natural.
                  </p>
                </div>

                {/* Footer details inside lightbox */}
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={(e) => toggleLike(selectedImage.id, e)}
                    className="flex items-center gap-2 px-4 py-2 bg-pink-50 hover:bg-pink-100 text-pink-700 rounded-xl transition-all cursor-pointer text-xs font-semibold"
                  >
                    <Heart className={`w-4 h-4 transition-colors ${likedIds.includes(selectedImage.id) ? 'fill-red-500 text-red-500' : 'text-pink-500'}`} />
                    <span>Me gusta ({selectedImage.likes})</span>
                  </button>
                  <span className="text-[10px] text-gray-400 font-mono uppercase">Johana Nails</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
