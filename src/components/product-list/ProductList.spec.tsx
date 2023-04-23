import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import * as router from 'react-router';
import '@testing-library/jest-dom';

import { render, act, screen, waitFor } from '../../test-utils/provider-mock';
import { initialState, justProductListDataState, noProductListItems } from '../../test-utils/store-mock';
import ProductList from './ProductList';

describe('ProductList component unit tests', () => {
  const mockNavigate = jest.fn();
  const spyNavigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, 'useNavigate').mockImplementation(() => spyNavigate)
  })
  
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
  }));

  test('should load the component', async () => {
    const dataStore = initialState;
    const mockStore = configureStore();
    const store = mockStore(dataStore);
    act(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ProductList />
          </BrowserRouter>
        </Provider>
      );
    });
    const productList = await waitFor(() => screen.findByTestId('product-list'));
    expect(productList).toBeInTheDocument();
  });

  test('should load the component with some items and click someone', async () => {
    const dataStore = justProductListDataState;
    const mockStore = configureStore();
    const store = mockStore(dataStore);
    act(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ProductList />
          </BrowserRouter>
        </Provider>
      );
    });

    const productList = await waitFor(() => screen.findByTestId('product-list'));
    expect(productList).toBeInTheDocument();

    const { items } = dataStore.productListState;
    items.forEach(async (item) => {
      const productListItem = await waitFor(() => screen.findByTestId(`product-list-item-${item.id}`));
      expect(productListItem).toBeInTheDocument();
    });

    const firstItem = await waitFor(() => screen.findByTestId(`product-list-item-${items[0].id}`));
    expect(firstItem).toBeInTheDocument();
    userEvent.click(firstItem);
    expect(spyNavigate).toHaveBeenCalled();
  });

  test('should load the component with no result data message', async () => {
    const dataStore = noProductListItems;
    const mockStore = configureStore();
    const store = mockStore(dataStore);
    act(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ProductList />
          </BrowserRouter>
        </Provider>
      );
    });

    const productList = await waitFor(() => screen.findByTestId('product-list'));
    expect(productList).toBeInTheDocument();

    const noResultMessage = await waitFor(() => screen.findByText('No hay publicaciones que coincidan con tu búsqueda.'));
    expect(noResultMessage).toBeInTheDocument();
  });
});
