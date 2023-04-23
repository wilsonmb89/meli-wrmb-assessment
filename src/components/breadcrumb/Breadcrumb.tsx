import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';
import { useLocation } from 'react-router-dom';

import styles from './Breadcrumb.module.scss';
import { categoriesSelector } from '../../store/product-list/product-list.select';
import { productSelectedCategoriesSelector } from '../../store/product-selected/product-selected.select';

/**
 * Component that is responsible for displaying the different categories of a component or the most
 * common category in a product query, using Redux selectors to obtain the information
 */
const Breadcrumb = (): JSX.Element => {
  const productListItems = useSelector(categoriesSelector);
  const productSelectedItems = useSelector(productSelectedCategoriesSelector);

  const { pathname } = useLocation();

  const [breadcrumbItems , setBreadcrumbItems] = useState<string[]>([]);

  useEffect(() => {
    if (pathname.indexOf('/item/') !== -1 && productSelectedItems) {
      setBreadcrumbItems(productSelectedItems);
    } else if (pathname.indexOf('/items') !== -1 && productListItems) {
      setBreadcrumbItems(productListItems);
    } else {
      setBreadcrumbItems([]);
    }
  }, [pathname, productListItems, productSelectedItems]);

  return (
    <nav
      data-testid="breadcrumb-nav"
      className={styles['container']}
    >
      <Container style={{ maxWidth: '960px' }}>
        <Row
          align='center'
          justify='around'
          direction='row'
          nogutter
        >
          <Col>
            <div className={styles['container__items']}>
              {breadcrumbItems.map((item, index) => (
                <div key={item}>
                  <span>{item}</span> { index !== (breadcrumbItems.length - 1) ? '>' : '' }&nbsp;
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default Breadcrumb;