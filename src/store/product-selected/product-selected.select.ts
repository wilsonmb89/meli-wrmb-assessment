import { RootState } from '..';
import { ProductSelectedState } from './product-selected.entity';

export const productSelectedStateSelector = (state: RootState): ProductSelectedState => state.productSelectedState;

export const productSelectedCategoriesSelector  = (state: RootState): string[] => state.productSelectedState.categories;
