export interface ProductSelectedState {
  autor: {
    name: string;
    lastname: string;
  },
  categories: string[],
  item: ProductSelectedData,
  fetchDone: boolean
}

export interface ProductSelectedData {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  },
  picture: string;
  condition: string;
  freeShipping: boolean;
  soldQuantity: number;
  description: string;
}