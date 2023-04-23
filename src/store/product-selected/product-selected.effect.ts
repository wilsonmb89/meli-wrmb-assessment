import { Dispatch } from 'redux';

import { fetchProductSelectedApi } from './product-selected.api';
import { productSelectedActions } from './product-selected.reducer';

export const fetchProductSelected = (itemId: string) => {
  const fetch = async (dispatch: Dispatch): Promise<void> => {
    try {
      const productSelectedData = await fetchProductSelectedApi(itemId);
      dispatch(productSelectedActions.fetchItemDetail(productSelectedData));
    } catch (error) {
      console.error('fetchProductSelected error:', JSON.stringify(error));
      dispatch(productSelectedActions.reset());
    }
  };
  return fetch;
};
