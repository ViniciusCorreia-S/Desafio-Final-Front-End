export interface dataCars extends Array<dataCars> {}

export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  imageUrl: string;
  description: string;
  selected?: boolean;
}

export interface VeiculosAPI {
  dataCars: Car;
}