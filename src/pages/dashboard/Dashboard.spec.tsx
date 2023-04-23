import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { render, act, screen, waitFor } from '../../test-utils/provider-mock';
import Dashboard from './Dashboard';

describe('Dashboard page unit test', () => {

  test('should load the page', async () => {
    act(() => {
      render(
        <Dashboard />
      );
    });
    const dashboardPage = await waitFor(() => screen.getByTestId('dashboard'));
    expect(dashboardPage).toBeInTheDocument();
  });

  test('should search and select one item', async () => {
    const itemTitle = 'Pelota De Fútbol Dribbling Pelota De Fútbol Fifa Qatar 2022 Nº 5 Color Blanco Y Bordó';
    act(() => {
      render(
        <Dashboard />
      );
    });
    const dashboardPage = await waitFor(() => screen.getByTestId('dashboard'));
    expect(dashboardPage).toBeInTheDocument();

    const inputText = await waitFor(() => screen.findByTestId('search-bar__input-text')) as HTMLInputElement;
    expect(inputText).toBeInTheDocument();
    userEvent.type(inputText, 'pelota');
    expect(inputText.value).toBe('pelota');
    const searchButton = await waitFor(() => screen.findByTestId('search-bar__search-button'));
    expect(searchButton).toBeInTheDocument();
    userEvent.click(searchButton);
    const productList = await waitFor(() => screen.findByTestId('product-list'));
    expect(productList).toBeInTheDocument();
    await waitFor(() => screen.findByText(itemTitle));
    const itemsList = productList.firstChild as HTMLElement;
    userEvent.click(itemsList);
    const productDetail = await waitFor(() => screen.getByTestId('product-detail'));
    expect(productDetail).toBeInTheDocument();
    const title = await waitFor(() => screen.findByText(itemTitle));
    expect(title).toBeInTheDocument();
  });
});
