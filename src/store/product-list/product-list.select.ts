import { RootState } from '..';

export const productListSelector = (state: RootState) => state.productListState.items;

export const fetchDoneSelector = (state: RootState) => state.productListState.fetchDone;

export const categoriesSelector = (state: RootState) => state.productListState.categories;
