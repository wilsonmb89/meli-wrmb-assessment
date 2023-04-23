import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import * as router from 'react-router';

import { render, act, screen, waitFor } from '../../test-utils/provider-mock';
import server from '../../test-utils/api-mock';
import ProductDetail from './ProductDetail';
import { rest } from 'msw';
import { noProductSelectedItem } from '../../test-utils/store-mock';

describe('ProductDetail component unit tests', () => {
  const mockDispatch = jest.fn();
  const mockNavigate = jest.fn();

  const spyNavigate = jest.fn();
  
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
  }));

  beforeEach(() => {
    jest.spyOn(router, 'useNavigate').mockImplementation(() => spyNavigate);
  });

  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => mockDispatch
  }));

  test('should load the component', async () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={['/item/MLA713100826']}>
          <Routes>
            <Route path='/item/:itemId' element={<ProductDetail />} />
          </Routes>
        </MemoryRouter>
      );
    });
    const productDetail = await waitFor(() => screen.getByTestId('product-detail'));
    expect(productDetail).toBeInTheDocument();
    const title = await waitFor(() => screen.findByText('Pelotita Pelota De Metegol X 10 Unidades'));
    expect(title).toBeInTheDocument();
  });

  test('should click in the buy button from the component', async () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={['/item/MLA713100826']}>
          <Routes>
            <Route path='/item/:itemId' element={<ProductDetail />} />
          </Routes>
        </MemoryRouter>
      );
    });
    const productDetail = await waitFor(() => screen.getByTestId('product-detail'));
    expect(productDetail).toBeInTheDocument();
    const title = await waitFor(() => screen.findByText('Pelotita Pelota De Metegol X 10 Unidades'));
    expect(title).toBeInTheDocument();

    const buyButton = await waitFor(() => screen.getByTestId('product-detail__buy-button'));
    expect(buyButton).toBeInTheDocument();
    userEvent.click(buyButton);
  });

  test('should navigate to search view by no found item query', async () => {
    server.use(
      rest.post('http://localhost:8080/item/itemid', (rq, rs, ctx) => rs(ctx.json(noProductSelectedItem)))
    );
    act(() => {
      render(
        <MemoryRouter initialEntries={['/item/MLA713100826']}>
          <Routes>
            <Route path='/item/:itemId' element={<ProductDetail />} />
          </Routes>
        </MemoryRouter>
      );
    });
    await waitFor(() => expect(spyNavigate).toHaveBeenCalled());
  });
});