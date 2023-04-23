import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import styles from './Dashboard.module.scss';
import SearchBar from '../../components/search-bar/SearchBar';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import RouterLoader from '../../components/router-loader/RouterLoader';

const ProductListLazy = lazy(() => import('../../components/product-list/ProductList'));
const ProductDetailLazy = lazy(() => import('../../components/product-detail/ProductDetail'));

/** 
 * Component that is responsible for managing the interaction of the search bar,
 * the browser and the navigation between the list and detail views, it can be
 * interpreted as the core of the application
 */
const Dashboard = (): JSX.Element => {
  return (
    <main
      data-testid='dashboard'
      className={styles['container']}
    >
      <BrowserRouter>
        <Suspense fallback={<RouterLoader />}>
          <SearchBar />
          <Breadcrumb />
          <Routes>
            <Route
              path='items'
              element={<ProductListLazy />}
            ></Route>
            <Route
              path='item/:itemId'
              element={<ProductDetailLazy />}
            ></Route>
            <Route path='*' element={<Navigate to='/items' />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </main>
  );
};

export default Dashboard;