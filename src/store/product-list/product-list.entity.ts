export interface ProductListState {
  autor: {
    name: string;
    lastname: string;
  },
  categories: string[],
  items: ProductListItemState[];
  fetchDone: boolean;
}

export interface ProductListItemState {
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
  location: string
}
