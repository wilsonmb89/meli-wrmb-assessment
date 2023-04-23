import { Dispatch } from 'redux';

import { RootState } from '..';
import { fetchProductListApi } from './product-list.api';
import { productListActions } from './product-list.reducer';

export const fetchProductList = (query: string) => {
  const fetch = async (dispatch: Dispatch, getState: () => RootState): Promise<void> => {
    try {
      const productListData = await fetchProductListApi(query);
      dispatch(productListActions.fetchProductList(productListData));
    } catch (error) {
      console.error('fetchProductList error:', JSON.stringify(error));
      dispatch(productListActions.reset());
    }
  };
  return fetch;
};
