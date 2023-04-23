import { render, act, screen, waitFor } from '../../test-utils/provider-mock';
import '@testing-library/jest-dom';

import { justProductListDataState } from '../../test-utils/store-mock';
import ProductListItem from './ProductListItem';

describe('ProductListItem component unit tests', () => {
  const { productListState: { items: [mockItemData] } } = justProductListDataState

  test('should load the component', async () => {
    act(() => {
      render(
        <ProductListItem data={mockItemData} />
      );
    });
    const productListItem = await waitFor(() => screen.findByTestId(`product-list-item-${mockItemData.id}`));
    expect(productListItem).toBeInTheDocument();
    const title = await waitFor(() => screen.findByText('Pelotita Pelota De Metegol X 10 Unidades'));
    expect(title).toBeInTheDocument();
  });
});
