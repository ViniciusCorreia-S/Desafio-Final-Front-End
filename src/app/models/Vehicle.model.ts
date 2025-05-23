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
  imageUrl: string;
  description: string;
  selected?: boolean;
}