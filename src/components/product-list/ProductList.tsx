import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './ProductList.module.scss';
import ProductListItem from '../product-list-item/ProductListItem';
import noResultIcon from '../../assets/images/no_results.svg';
import { fetchDoneSelector, productListSelector } from '../../store/product-list/product-list.select';
import { ProductListItemState } from '../../store/product-list/product-list.entity';
import { AppDispatch } from '../../store';
import { productSelectedActions } from '../../store/product-selected/product-selected.reducer';

/**
 * Component that is responsible for displaying the list of products obtained by consuming
 * the backend service, it also displays a message in case no results are found, it relies
 * on Redux selectors to obtain the information and uses dispatchers to make calls to
 * actions reset states and navigate to detail view when a list item is selected
 */
const ProductList = (): JSX.Element => {
  const navigate = useNavigate();

  const dispatch: AppDispatch = useDispatch();

  const productListState: ProductListItemState[] = useSelector(productListSelector);
  const fetchDone = useSelector(fetchDoneSelector);

  const [noResult, setNoResult] = useState<boolean>(false);

  useEffect(() => {
    dispatch(productSelectedActions.reset());
  }, [dispatch]);

  useEffect(() => {
    setNoResult(fetchDone && productListState.length === 0)
  }, [fetchDone, productListState]);

  const onClickItemHandler = ({ id }: ProductListItemState): void => {
    navigate(`/item/${id}`);
  };

  return (
    <section
      data-testid='product-list'
      className={styles['container']}
    >
      {productListState && productListState.map((item, index) =>
        <div
          key={index}
          className={styles['container__item']}
          onClick={() => onClickItemHandler(item)}
        >
          <ProductListItem data={item}/>
        </div>
      )}
      {noResult && (
        <div className={styles['container__empty-state']}>
          <div className={styles['container__empty-state__logo-wrapper']}>
            <img src={noResultIcon} alt="noResultIcon" />
          </div>
          <div className={styles['container__empty-state__details']}>
            <h3>No hay publicaciones que coincidan con tu búsqueda.</h3>
            <ul>
              <li><strong>Revisa la ortografía</strong> de la palabra.</li>
              <li>Utiliza <strong>palabras más genéricas</strong> o menos palabras</li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductList;