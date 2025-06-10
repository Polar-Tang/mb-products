
// lib/products.ts
export interface Product {
  id: number;
  title: string;
  price?: number;
  description: string;
  category: string;
  image: string;
  images?: string[]; // Additional images
  rating?: {
    rate: number;
    count: number;
  };
  tags?: string[],
  stock?: number
  weight?: number; // In kilograms
  dimensions: {
    length?: number; // In centimeters
    width?: number;
    height?: number;
    dosPersonas?: number
    cuatroPersonas?: number
    seisPersonas?: number
  };
  brand?: string;
  createdAt?: Date;
  updatedAt?: Date;
  isActive: boolean; // For soft deletes or hiding products
}
