import React, { Component, PropTypes } from 'react';

import ProductsList from '../components/ProductsList';

const ProductsListContainer = (props, context) => {
  const { data, addToCart } = context;

  return <ProductsList products={data} addToCart={addToCart} />;
};

ProductsListContainer.contextTypes = {
  data: PropTypes.array,
  addToCart: PropTypes.func,
};

export default ProductsListContainer;
