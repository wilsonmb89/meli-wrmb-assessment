import App from './App';
import { Provider } from 'react-redux';
import { render, act, screen, waitFor } from './test-utils/provider-mock';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';

import { initialState } from './test-utils/store-mock';

describe('App component unit test', () => {
  const dataStore = initialState;
  const mockStore = configureStore();

  test('should load de App component', async () => {
    const store = mockStore(dataStore);
    act(() => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
    });
    const app = await waitFor(() => screen.getByTestId('app-main'));
    expect(app).toBeInTheDocument();
  });
});
