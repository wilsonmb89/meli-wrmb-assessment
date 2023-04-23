import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ProductSelectedState } from './product-selected.entity';

const initialState: ProductSelectedState = {
  autor: {
    name: '',
    lastname: ''
  },
  categories: [],
  item: {
    id: '',
    title: '',
    price: {
      currency: '',
      amount: null,
      decimals: null,
    },
    picture: '',
    condition: '',
    freeShipping: null,
    soldQuantity: null,
    description: ''
  },
  fetchDone: false
};

export const productSelectedState = createSlice({
  name: 'ProductSelectedState',
  initialState,
  reducers: {
    fetchItemDetail(state, { payload }: PayloadAction<ProductSelectedState>) {
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

export const productSelectedActions = productSelectedState.actions;
