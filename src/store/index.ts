import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { productSelectedState } from './product-selected/product-selected.reducer';
import { productListState } from './product-list/product-list.reducer';


const appReducer = combineReducers({
  productSelectedState: productSelectedState.reducer,
  productListState: productListState.reducer
});

const rootReducer = (state, action) => {
  if (action.type === 'UNMOUNT') {
    return appReducer(undefined, action);
  }

  if (action.type === 'MOUNT') {
    return appReducer(state, action);
  }

  return appReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  devTools: { name: 'meli-wrmb-assessment' }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

export type AppDispatch = typeof store.dispatch;
