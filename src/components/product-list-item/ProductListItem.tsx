import { Container, Row, Col } from 'react-grid-system';
import CurrencyFormat from 'react-currency-format';

import styles from './ProductListItem.module.scss';
import shippingLogo from '../../assets/images/ic_shipping@2x.png';
import { ProductListItemState } from '../../store/product-list/product-list.entity';

interface ProductListItemProps {
  data: ProductListItemState;
  onClickItem: () => void;
}

/**
 * Component that allows re-use using the information of a product,
 * thus optimizing code generation
 * @param data is the information of a product obtained in the query
 */
const ProductListItem = ({ data, onClickItem }: ProductListItemProps): JSX.Element => {
  return (
    <section
      data-testid={`product-list-item-${data.id}`}
      className={styles['container']}
    >
      <Container style={{ maxWidth: '960px' }}>
        <Row
          data-testid={`row-product-list-item-${data.id}`}
          align='center'
          justify='around'
          direction='row'
          nogutter
          className={styles['container__row']}
          onClick={onClickItem}
        >
          <Col xs={6} sm={3}>
            <figure className={styles['container__row__permalink-img-wrapper']}>
              <img src={data.picture} alt="thumbnail" />
            </figure>
          </Col>
          <Col xs={6} sm={7}>
            <div className={styles['container__row__data-wrapper']}>
              <div className={styles['container__row__data-wrapper__price']}>
                <span className={styles['container__row__data-wrapper__price__amt']}>
                  <CurrencyFormat value={data.price.amount} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                </span>
                {data.freeShipping && (
                  <div className={styles['container__row__data-wrapper__price__shipping-logo']}>
                    <img src={shippingLogo} alt="shipping" />
                  </div>
                )}
              </div>
              <span className={styles['container__row__data-wrapper__desc-text']}>
                { data.title }
              </span>
            </div>
          </Col>
          <Col xs={12} sm={2}>
            <div className={styles['container__row__location-wrapper']}>
              <span>{ data.location }</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductListItem;