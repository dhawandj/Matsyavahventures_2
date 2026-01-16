
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  location: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  priceRange: string;
  hasDemo?: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  additionalImages?: string[];
  description: string;
  specs: string[];
  amazonLink?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface StyleRecommendation {
  styleName: string;
  summary: string;
  colorPalette: string[];
  keyElements: string[];
  tips: string[];
}
