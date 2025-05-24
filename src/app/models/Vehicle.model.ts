export type CarBrand = 'BMW' | 'Ford' | 'Mercedes-Benz';

export interface Car {
  id: number;
  brand: CarBrand;
  model: string;
  year: number;
  price: number;
  power: number;
  torque: number;
  motorization: string;
  motorizationL: number;
  acceleration: number;
  vmax: number;
  featured: boolean;
  mostSold: boolean;
  recent: boolean;
  salesMonth?: number;
  imageUrl: string;
  selected?: boolean;
}

export type CarroFilter = {
  tipo?: 'destaque' | 'mais-vendidos' | 'recem-chegados';
  marca?: string;
  precoMax?: number;
};