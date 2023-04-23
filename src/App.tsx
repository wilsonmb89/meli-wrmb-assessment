import Dashboard from './pages/dashboard/Dashboard';

/**
 * It is the root component of the application, its nature is not to
 * have or manage business logic, only to render core components of
 * the application
 */
function App() {
  return (
    <div
      data-testid="app-main"
      className="App"
    >
      <Dashboard />
    </div>
  );
}

export default App;
