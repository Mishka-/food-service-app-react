import React, { PropTypes } from 'react';

import ProductsListItem from './ProductsListItem';

const ProductsList = ({ products, addToCart }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <ProductsListItem
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

ProductsList.propTypes = {
  products: PropTypes.array,
  addToCart: PropTypes.func,
};

export default ProductsList;
