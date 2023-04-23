import axios, { AxiosResponse } from 'axios';

import { ProductSelectedState } from './product-selected.entity';

interface FetchProductSelectedRq {
  itemId: string;
}

export const fetchProductSelectedApi = (itemId: string): Promise<ProductSelectedState> => {
  const body: FetchProductSelectedRq = { itemId };
  const searchItemUrl = 'http://localhost:8080/item/itemid';
  return axios.post<FetchProductSelectedRq, AxiosResponse<ProductSelectedState>>(
    searchItemUrl,
    body
  ).then(response => response.data);
};
