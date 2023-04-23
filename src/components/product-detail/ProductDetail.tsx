import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';
import CurrencyFormat from 'react-currency-format';

import styles from './ProductDetail.module.scss';
import { AppDispatch } from '../../store';
import { fetchProductSelected } from '../../store/product-selected/product-selected.effect';
import { productSelectedStateSelector } from '../../store/product-selected/product-selected.select';

/**
 * Component that implements as a view and is responsible for displaying more detailed
 * information when a product is selected from the product list view, uses Redux
 * elements to obtain the information
 */
const ProductDetail = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate =  useNavigate(); 

  const { itemId } = useParams();
  const { item: productSelected, fetchDone } = useSelector(productSelectedStateSelector);

  useEffect(() => {
    if (itemId) {
      dispatch(fetchProductSelected(itemId));
    }
  }, [dispatch, itemId]);

  useEffect(() => {
    if (fetchDone && !productSelected) navigate('/items');
  }, [navigate, fetchDone, productSelected]);

  const buyClickHandler = (): void => {
    console.log('buyClickHandler clicked!');
  };

  return (
    <article
      data-testid='product-detail'
      className={styles['container']}
    >
      {productSelected && (
        <Container style={{ maxWidth: '960px' }}>
          <Row
            align='center'
            justify='around'
            direction='row'
            nogutter
            className={styles['container__row']}
          >
            <Col xs='content'>
              <Row nogutter>
                <Col xs={12} md={8}>
                  <figure className={styles['container__row__permalink-wrapper']}>
                    <img src={productSelected.picture} alt="permalink" />
                  </figure>
                </Col>
                <Col xs={12} md={4}>
                  <summary className={styles['container__row__prod-detail']}>
                    <div className={styles['container__row__prod-detail__sell-info']}>{productSelected.condition === 'new' ? 'Nuevo' : 'Usado'} - {productSelected.soldQuantity} vendidos</div>
                    <div className={styles['container__row__prod-detail__title']}>{productSelected.title}</div>
                    <div className={styles['container__row__prod-detail__price']}>
                      {productSelected.price.amount && (
                        <CurrencyFormat value={productSelected.price.amount} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                      )}
                    </div>
                    <button
                      data-testid='product-detail__buy-button'
                      className={styles['container__row__prod-detail__buy-button']}
                      type="button"
                      onClick={buyClickHandler}
                    >
                      Comprar
                    </button>
                  </summary>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={9}>
                  <div className={styles['container__row__description']}>
                    <div className={styles['container__row__description__title']}>Descripción del producto</div>
                    <div className={styles['container__row__description__info']}>{productSelected.description}</div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </article>
  );
};

export default ProductDetail;