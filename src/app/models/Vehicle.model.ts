export interface dataCars extends Array<dataCars> {}

export interface Car {
  id: number;
  brand: string;
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

export interface VeiculosAPI {
  dataCars: Car;
}