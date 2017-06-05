import React, { PropTypes } from 'react';
import _find from 'lodash/find';

import ProductDetails from '../components/ProductDetails';

const ProductDetailsContainer = (props, context) => {
  const { match } = props;
  const { data, addToCart } = context;

  const product = _find(data, { id: +match.params.id });

  return <ProductDetails product={product} addToCart={addToCart} />;
};

ProductDetailsContainer.propTypes = {
  match: PropTypes.object,
};

ProductDetailsContainer.contextTypes = {
  data: PropTypes.array,
  addToCart: PropTypes.func,
};

export default ProductDetailsContainer;
