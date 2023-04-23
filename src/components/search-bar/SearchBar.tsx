import { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Col, Container, Row } from 'react-grid-system';

import styles from './SearchBar.module.scss';
import meliLogo from '../../assets/images/Logo_ML.png'; 
import searchLogo from '../../assets/images/ic_Search.png';
import { AppDispatch } from '../../store';
import { fetchProductList } from '../../store/product-list/product-list.effect';
import { productListActions } from '../../store/product-list/product-list.reducer';
import { normalizeDiacriticText } from '../../utils/stringUtils';
import { productSelectedActions } from '../../store/product-selected/product-selected.reducer';

/**
 * Component that is in charge of carrying out the control of the search of the products
 * towards the backend, uses elements of the Redux pattern for the interaction with the
 * application data
 */
const SearchBar = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);

  const clickSearchHandler = (): void => {
    fetchProductListHandler();
  };

  const clickHomeHandler = (): void => {
    dispatch(productListActions.reset());
    dispatch(productSelectedActions.reset());
    inputRef.current.value = '';
    navigate('/items');
  };

  const keyupHandler = (event): void => {
    event.key === 'Enter' && fetchProductListHandler();
  };

  const fetchProductListHandler = (): void => {
    const searchValue = inputRef.current?.value || '';
    const normalizeValue = normalizeDiacriticText(searchValue);
    dispatch(fetchProductList(normalizeValue))
      .then(() => {
        const { pathname } = location;
        if (pathname.indexOf('/item/') !== -1) navigate('/items');
      }
    );
  };

  return (
    <header
      data-testid='search-bar'
      className={styles['container']}
    >
      <Container style={{ maxWidth: '960px' }}>
        <Row
          align='center'
          justify='around'
          direction='row'
          nogutter
        >
          <Col xs='content' sm={2}>
            <div
              data-testid='search-bar__meli-logo'
              onClick={clickHomeHandler}
              className={styles['container__logo-meli-wrapper']}
            >
              <img src={meliLogo} alt='meli-logo' />
            </div>
          </Col>
          <Col xs={12} sm={10}>
            <div className={styles['container__input-search']}>
              <input
                data-testid='search-bar__input-text'
                ref={inputRef}
                className={styles['container__input-search__input']}
                type='text'
                placeholder='Nunca dejes de buscar'
                onKeyUp={(event) => keyupHandler(event)}
              />
              <div
                data-testid='search-bar__search-button'
                className={styles['container__input-search__logo-wrapper']}
                onClick={clickSearchHandler}
              >
                <img src={searchLogo} alt='search-logo' />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default SearchBar;