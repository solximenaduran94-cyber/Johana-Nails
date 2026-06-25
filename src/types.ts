export interface NailService {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  durationMin: number;
  estimatedPrice: number | null;
  features: string[];
  iconName: string; // lucide-react icon identifier
  image: string;
  category: 'semi' | 'soft-gel' | 'capping' | 'dipping' | 'art' | 'braids' | 'alisados';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'semi' | 'soft-gel' | 'capping' | 'dipping' | 'art' | 'braids' | 'alisados';
  categoryLabel: string;
  image: string;
  likes: number;
}

export interface CareTip {
  id: string;
  title: string;
  shortDescription: string;
  content: string[];
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
  serviceType: string;
}

export interface BookingState {
  name: string;
  service: string;
  additionals: string[];
  date: string;
  timeSlot: string;
  notes: string;
}
