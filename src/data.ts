import { NailService, GalleryItem, CareTip, Testimonial } from './types';

export const J_NAILS_LOGO = "/src/assets/images/johana_nails_logo_1782259306117.jpg";
export const SOFT_GEL_SHOWCASE = "/src/assets/images/soft_gel_peluchito_1782262485364.jpg";
export const CAPPING_GEL_SHOWCASE = "/src/assets/images/capping_gel_peluchito_1782262495924.jpg";
export const BRAIDS_SHOWCASE = "/src/assets/images/braids_aesthetic_wall_1782262660982.jpg";
export const BRAIDS_WITH_CHARMS = "/src/assets/images/braids_with_charms_1782262922350.jpg";
export const BLUE_LEOPARD_NAILS = "/src/assets/images/blue_leopard_peluchito_1782262442579.jpg";
export const CRIMSON_VAMP_NAILS = "/src/assets/images/crimson_vamp_peluchito_1782262454534.jpg";
export const LILAC_ABSTRACT_NAILS = "/src/assets/images/lilac_abstract_peluchito_1782262463047.jpg";
export const PINK_LEOPARD_FRENCH = "/src/assets/images/pink_leopard_peluchito_1782262474340.jpg";

export const SERVICES_DATA: NailService[] = [
  {
    id: 'semi',
    name: 'Semipermanente a Domicilio',
    description: 'Esmaltado de larga duración con curado en cabina portátil UV/LED. Brillo impecable en la comodidad de tu casa.',
    fullDescription: 'El esmaltado semipermanente a domicilio es ideal para lucir uñas prolijas y brillantes sin salir de casa. Llevamos todo el equipamiento profesional, incluyendo cabina portátil UV/LED, base niveladora de alta gama y variedad de colores para que elijas tu preferido.',
    durationMin: 60,
    estimatedPrice: 6000,
    features: [
      'Duración garantizada de 15 a 21 días',
      'Atención 100% a domicilio en Berazategui',
      'Secado instantáneo con cabina portátil profesional',
      'Brillo de espejo de alta resistencia',
      'Incluye limpieza de cutículas y manicura combinada'
    ],
    iconName: 'Sparkles',
    image: CAPPING_GEL_SHOWCASE, // beautiful french tip
    category: 'semi'
  },
  {
    id: 'soft-gel',
    name: 'Soft Gel (Extensiones)',
    description: 'La técnica más moderna y ligera para lucir uñas largas de aspecto natural, hechas a domicilio.',
    fullDescription: 'Las extensiones de Soft Gel se adhieren sobre tu uña natural usando una base de gel especial. Al estar hechas de gel, son ligeras, flexibles, cómodas y tienen un aspecto sumamente natural. Realizado con todo el cuidado profesional directo en tu hogar.',
    durationMin: 90,
    estimatedPrice: 12000,
    features: [
      'Largo y forma perfectos al instante',
      'Estructura flexible, ultraligera y resistente',
      'Aspecto mucho más natural que el acrílico tradicional',
      'Realizado a domicilio con máxima higiene',
      'Incluye esmaltado semipermanente de tu elección'
    ],
    iconName: 'Sparkle',
    image: SOFT_GEL_SHOWCASE, // beautiful lilac nail art
    category: 'soft-gel'
  },
  {
    id: 'capping',
    name: 'Kapping / Capping Gel',
    description: 'Una capa protectora que acompaña el crecimiento de tu uña natural evitando que se quiebre.',
    fullDescription: 'El Kapping / Capping Gel consiste en aplicar una fina capa de gel fortalecedor sobre tu uña natural. No extiende el largo, sino que acompaña su crecimiento natural aportándole una estructura sólida para evitar roturas. Ideal para dejar crecer tus uñas naturales.',
    durationMin: 75,
    estimatedPrice: 8000,
    features: [
      'Fortalecimiento real para uñas débiles o quebradizas',
      'No añade volumen excesivo, luce 100% natural',
      'Protege la uña del agua, golpes y químicos diarios',
      'A domicilio con todas las medidas de bioseguridad',
      'Incluye manicura de cutículas y esmaltado semipermanente'
    ],
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1632345031435-8797b2d58045?auto=format&fit=crop&q=80&w=600',
    category: 'capping'
  },
  {
    id: 'dipping',
    name: 'Sistema Dipping',
    description: 'Sistema de inmersión en polvo acrílico que aporta dureza extrema y durabilidad sin cabina.',
    fullDescription: 'El Dipping es un sistema donde la uña se sumerge en polvo acrílico ultrafino después de aplicar una base adhesiva especial. Aporta una dureza impecable similar al acrílico pero de forma más rápida, sin olor y sin cabina.',
    durationMin: 70,
    estimatedPrice: null,
    features: [
      'Máxima dureza y resistencia a impactos',
      'No requiere secado en cabina UV/LED',
      'Fórmula enriquecida que respeta la uña natural',
      'Excelente durabilidad de hasta 4 semanas',
      'Atención profesional a domicilio'
    ],
    iconName: 'Layers',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=600',
    category: 'dipping'
  },
  {
    id: 'art',
    name: 'Nail Art Mano Alzada',
    description: 'Diseños personalizados pintados a mano alzada. Desde sutil minimalismo hasta obras de arte.',
    fullDescription: 'Nuestra especialidad y pasión: el arte 100% hecho a mano. Diseños personalizados pintados a pulso con pinceles finos: motivos botánicos, flores detalladas, líneas abstractas modernas, efectos holográficos, pedrería fina o glitters.',
    durationMin: 30, // Adicional al servicio base
    estimatedPrice: null,
    features: [
      'Diseños exclusivos y personalizados a tu gusto',
      'Pintado con pinceles ultrafinos y geles profesionales',
      'Variedad de efectos: matte, glitters, cromados, ojo de gato',
      'Adaptabilidad a cualquier largo de uña',
      'Atención cómoda en tu propio living'
    ],
    iconName: 'Palette',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=600',
    category: 'art'
  },
  {
    id: 'braids-peinados',
    name: 'Peinados & Trenzas a Domicilio',
    description: 'Hairstyling profesional con trenzas cosidas, bóxer braids, trenzas de raíz y recogidos modernos.',
    fullDescription: 'Complementá tu look con peinados modernos basados en trenzas. Desde las clásicas boxer braids ideales para eventos o entrenamientos, trenzas cosidas con cabello suelto y ondas suaves, hasta peinados elegantes con detalles trenzados. Nos adaptamos a tu tipo de cabello y evento especial sin que tengas que moverte de tu casa.',
    durationMin: 45,
    estimatedPrice: null,
    features: [
      'Boxer Braids, Trenza de Espiga y Trenza Cosida de raíz',
      'Peinados para fiestas, eventos especiales y cumpleaños',
      'Se puede combinar con apliques de hilos de colores o glitters',
      'Productos de fijación premium para alta durabilidad',
      'Llegamos a tu domicilio con todo lo necesario'
    ],
    iconName: 'Sparkles',
    image: BRAIDS_SHOWCASE,
    category: 'braids'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g-blue-leopard',
    title: 'Soft Gel azul noche y detalles animal print con plata',
    category: 'soft-gel',
    categoryLabel: 'Soft Gel',
    image: BLUE_LEOPARD_NAILS,
    likes: 215
  },
  {
    id: 'g-crimson-vamp',
    title: 'Kapping Gel rojo carmín profundo con glitter y curvas artísticas',
    category: 'capping',
    categoryLabel: 'Kapping Gel',
    image: CRIMSON_VAMP_NAILS,
    likes: 198
  },
  {
    id: 'g-lilac-abstract',
    title: 'Soft Gel lila pastel con ondas blancas y destellos',
    category: 'soft-gel',
    categoryLabel: 'Soft Gel',
    image: LILAC_ABSTRACT_NAILS,
    likes: 184
  },
  {
    id: 'g-pink-leopard',
    title: 'Semipermanente rosa soft con deco leopardo y piedras',
    category: 'semi',
    categoryLabel: 'Semipermanente',
    image: PINK_LEOPARD_FRENCH,
    likes: 167
  },
  {
    id: 'g-braids-charms',
    title: 'Trenzas cosidas con dijes plateados y anillos de cabello',
    category: 'braids',
    categoryLabel: 'Peinados & Trenzas',
    image: BRAIDS_WITH_CHARMS,
    likes: 289
  },
  {
    id: 'g1',
    title: 'Uñas Soft Gel con Nail Art botánico lila',
    category: 'soft-gel',
    categoryLabel: 'Soft Gel',
    image: SOFT_GEL_SHOWCASE,
    likes: 124
  },
  {
    id: 'g2',
    title: 'Elegante Capping Gel con francesita y detalles oro rosa',
    category: 'capping',
    categoryLabel: 'Kapping Gel',
    image: CAPPING_GEL_SHOWCASE,
    likes: 189
  },
  {
    id: 'g4',
    title: 'Peinado Boho Chic con trenzas cosidas y ondas naturales',
    category: 'braids',
    categoryLabel: 'Peinados & Trenzas',
    image: BRAIDS_SHOWCASE,
    likes: 243
  }
];

export const CARE_TIPS_DATA: CareTip[] = [
  {
    id: 'tip-1',
    title: 'Usá Guantes para Limpiar',
    shortDescription: 'Protege el brillo y la adherencia del material ante químicos y humedad.',
    content: [
      'Los productos de limpieza del hogar (detergente, lavandina, desengrasantes) contienen químicos que debilitan el esmaltado y resecan la piel.',
      'El agua caliente prolongada ablanda de a poco el gel. Lavar los platos con guantes prolonga notablemente la adherencia del servicio.',
      '¡Tus manos y cutículas también te lo van a agradecer!'
    ],
    icon: 'ShieldAlert'
  },
  {
    id: 'tip-2',
    title: 'No las uses como herramientas',
    shortDescription: 'Evitá palancas o golpes que puedan provocar desprendimientos o quiebres.',
    content: [
      'Tus uñas esculpidas o esmaltadas NO son destornilladores, abrelatas ni raspadores.',
      'Evitá usar la punta de la uña para abrir latas de gaseosa, rascar etiquetas o teclear de punta sobre superficies duras.',
      'Hacer fuerza excesiva con el extremo libre produce micro-fisuras imperceptibles que luego terminan en desprendimientos o filtraciones de agua.'
    ],
    icon: 'Hammer'
  },
  {
    id: 'tip-3',
    title: 'Hidratación Diaria de Cutículas',
    shortDescription: 'Mantiene las cutículas sanas y flexibles, evitando padrastros molestos.',
    content: [
      'Aplica una gota de aceite para cutículas (almendras, coco o jojoba) en la base de tus uñas todas las noches y masajeá suavemente.',
      'Las cutículas hidratadas previenen la formación de padrastros dolorosos que dan ganas de morder o arrancar.',
      'Una zona de la cutícula sana asegura que el crecimiento de la nueva uña sea fuerte y libre de irregularidades.'
    ],
    icon: 'Droplets'
  },
  {
    id: 'tip-4',
    title: 'Respetá los tiempos de service',
    shortDescription: 'Realizar el mantenimiento a tiempo evita filtraciones y cuida tu uña.',
    content: [
      'El service ideal se realiza entre los 21 y 28 días (máximo 4 semanas).',
      'A medida que la uña crece, el punto de equilibrio (ápice) se desplaza hacia adelante. Esto aumenta el riesgo de que la uña se quiebre ante un golpe.',
      'Esperar de más favorece el micro-desprendimiento trasero por donde se filtra humedad, lo que puede dar origen a hongos o bacterias.'
    ],
    icon: 'CalendarDays'
  },
  {
    id: 'tip-5',
    title: 'Retirá siempre con profesional',
    shortDescription: 'Nunca arranques el gel con los dientes o pinzas. ¡Daña capas de tu uña!',
    content: [
      'Arrancar el esmalte o las extensiones a la fuerza (tironeando o con los dientes) desprende capas enteras de queratina de tu propia uña natural, dejándola súper delgada, dolorida y "de papel".',
      'El retiro profesional se hace con torno de precisión o removedor específico sin lastimar la placa de la uña.',
      'Cuidar tu salud ungueal es tan importante para Johana como lucir un diseño hermoso.'
    ],
    icon: 'Scissors'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Milagros G.',
    date: 'Hace 3 días',
    rating: 5,
    comment: '¡La mejor manicurista de Villa España! Me hice Soft Gel con un diseño de margaritas a mano alzada y quedó espectacular. Johana trabaja con un nivel de detalle y prolijidad tremendo, además su espacio es súper limpio y cálido.',
    serviceType: 'Soft Gel + Mano Alzada'
  },
  {
    id: 't2',
    name: 'Sofía R.',
    date: 'Hace 1 semana',
    rating: 5,
    comment: 'Tengo las uñas muy finitas y quebradizas. Probé el Capping Gel recomendado por Johana y mis uñas naturales crecieron un montón sin quebrarse. Es súper simpática y amorosa, te hace sentir como en casa.',
    serviceType: 'Capping Gel'
  },
  {
    id: 't3',
    name: 'Camila F.',
    date: 'Hace 2 semanas',
    rating: 5,
    comment: 'El esmaltado semipermanente me dura impecable 25 días literales, sin levantarse ni perder brillo. Los pinceles y herramientas que usa están 100% esterilizados. La súper recomiendo en toda la zona de Berazategui.',
    serviceType: 'Semipermanente'
  },
  {
    id: 't4',
    name: 'Martina V.',
    date: 'Hace 1 mes',
    rating: 5,
    comment: 'Probé el sistema Dipping para mis uñas y me encantó la dureza que logré sin necesidad de cabina UV. El trato es un 10 de 10 y los precios son súper accesibles para semejante calidad de trabajo.',
    serviceType: 'Sistema Dipping'
  }
];

export const WHATSAPP_PHONE = "5491159695451"; // Arg phone code +54 9 11 5969-5451
export const INSTAGRAM_USER = "johananails2023";
