import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import * as router from 'react-router';
import '@testing-library/jest-dom';

import { render, act, screen, waitFor } from '../../test-utils/provider-mock';
import server from '../../test-utils/api-mock';
import SearchBar from './SearchBar';

describe('SearchBar component unit tests', () => {
  const mockLocation = jest.fn();
  const mockNavigate = jest.fn();
  const mockDispatch = jest.fn();

  const spyNavigate = jest.fn();

  beforeAll(() => {
    server.listen();
  });

  beforeEach(() => {
    jest.spyOn(router, 'useNavigate').mockImplementation(() => spyNavigate);
  });

  afterAll(() => {
    server.close();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => mockLocation,
    useNavigate: () => mockNavigate
  }));

  jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => mockDispatch
  }));

  test('should load the component', async () => {
    act(() => {
      render(
        <BrowserRouter>
          <SearchBar />
        </BrowserRouter>
      );
    });
    const searchBar = await waitFor(() => screen.findByTestId('search-bar'));
    expect(searchBar).toBeInTheDocument();
  });

  test('should go to the home page when meli logo is clicked', async () => {
    act(() => {
      render(
        <BrowserRouter>
          <SearchBar />
        </BrowserRouter>
      );
    });
    const searchBar = await waitFor(() => screen.findByTestId('search-bar'));
    expect(searchBar).toBeInTheDocument();

    const meliLogo = await waitFor(() => screen.findByTestId('search-bar__meli-logo'));
    expect(meliLogo).toBeInTheDocument();
    userEvent.click(meliLogo);
    expect(spyNavigate).toHaveBeenCalled();
  });

  test('should trigger the query from search button', async () => {
    act(() => {
      render(
        <BrowserRouter>
          <SearchBar />
        </BrowserRouter>
      );
    });
    const searchBar = await waitFor(() => screen.findByTestId('search-bar'));
    expect(searchBar).toBeInTheDocument();

    const inputText = await waitFor(() => screen.findByTestId('search-bar__input-text')) as HTMLInputElement;
    expect(inputText).toBeInTheDocument();
    userEvent.type(inputText, 'pelota');
    expect(inputText.value).toBe('pelota');
    const searchButton = await waitFor(() => screen.findByTestId('search-bar__search-button'));
    expect(searchButton).toBeInTheDocument();
    userEvent.click(searchButton);
  });

  test('should trigger the query from enter keydown', async () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={['/item/']}>
          <Routes>
            <Route path='/item/' element={<SearchBar />} />
          </Routes>
        </MemoryRouter>
      );
    });
    const searchBar = await waitFor(() => screen.findByTestId('search-bar'));
    expect(searchBar).toBeInTheDocument();

    const inputText = await waitFor(() => screen.findByTestId('search-bar__input-text')) as HTMLInputElement;
    expect(inputText).toBeInTheDocument();
    userEvent.type(inputText, 'pelota');
    expect(inputText.value).toBe('pelota');
    userEvent.type(inputText, '{enter}');
  });
});
