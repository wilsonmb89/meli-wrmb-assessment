import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ProductListState } from './product-list.entity';

const initialState: ProductListState = {
  autor: {
    name: '',
    lastname: ''
  },
  categories: [],
  items: [],
  fetchDone: false
};

export const productListState = createSlice({
  name: 'ProductListState',
  initialState,
  reducers: {
    fetchProductList(state, { payload }: PayloadAction<ProductListState>) {
      return {
        fetchDone: true,
        ...payload
      };
    },
    reset(state) {
      return {...initialState}
    }
  }
});

export const productListActions = productListState.actions;
