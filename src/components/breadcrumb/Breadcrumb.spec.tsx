import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';

import Breadcrumb from './Breadcrumb';
import { render, act, screen, waitFor } from '../../test-utils/provider-mock';
import { justProductListDataState, justProductSelectedDataState } from '../../test-utils/store-mock';


describe('Breadcrumb component unit test', () => {
  const mockLocation = jest.fn();
  
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => mockLocation
  }));

  test('should load the component', async () => {
    act(() => {
      render(
        <BrowserRouter>
          <Breadcrumb />
        </BrowserRouter>
      );
    });
    const breadcrumb = await waitFor(() => screen.getByTestId('breadcrumb-nav'));
    expect(breadcrumb).toBeInTheDocument();
  });

  test('should load the breadcrumb items from product list state categories', async () => {
    const dataStore = justProductListDataState;
    const mockStore = configureStore();
    const store = mockStore(dataStore);
    act(() => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/items']}>
            <Routes>
              <Route path='/items' element={<Breadcrumb />} />
            </Routes>
          </MemoryRouter>
        </Provider>
      );
    });
    const breadcrumb = await waitFor(() => screen.getByTestId('breadcrumb-nav'));
    expect(breadcrumb).toBeInTheDocument();
    const item = await waitFor(() => screen.findByText('Pelotas'));
    expect(item).toBeInTheDocument();
  });

  test('should load the breadcrumb items from product selected item state categories', async () => {
    const dataStore = justProductSelectedDataState;
    const mockStore = configureStore();
    const store = mockStore(dataStore);
    act(() => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/item/MLA713100826']}>
            <Routes>
              <Route path='/item/MLA713100826' element={<Breadcrumb />} />
            </Routes>
          </MemoryRouter>
        </Provider>
      );
    });
    const breadcrumb = await waitFor(() => screen.getByTestId('breadcrumb-nav'));
    expect(breadcrumb).toBeInTheDocument();
    justProductSelectedDataState
      .productSelectedState
      .categories
        .forEach(async (category) => {
          const item = await waitFor(() => screen.findByText(category));
          expect(item).toBeInTheDocument();
        });
  });
});
