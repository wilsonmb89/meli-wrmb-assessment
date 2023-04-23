import axios, { AxiosResponse } from 'axios';
import { ProductListState } from './product-list.entity';

interface FetchProductListRq {
  query: string;
}

export const fetchProductListApi = (query: string): Promise<ProductListState> => {
  const body: FetchProductListRq = { query };
  const searchProductsUrl = 'http://localhost:8080/products/search';
  return axios.post<FetchProductListRq, AxiosResponse<ProductListState>>(
    searchProductsUrl,
    body
  ).then(response => response.data);
};
