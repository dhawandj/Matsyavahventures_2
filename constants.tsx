
import * as mock from './mockData';
import { Project, Service, Testimonial, Product } from './types';

export const CATEGORIES = mock.CATEGORIES;
export const PROJECTS: Project[] = mock.PROJECTS;
export const SERVICES: Service[] = mock.SERVICES;
export const TESTIMONIALS: Testimonial[] = mock.TESTIMONIALS;
// Exporting PRODUCTS from mock data to fix the missing export error in components/ProductGallery.tsx
export const PRODUCTS: Product[] = mock.PRODUCTS;
export const BUSINESS_INFO = mock.BUSINESS_INFO;
export const NAVIGATION = mock.NAVIGATION;
