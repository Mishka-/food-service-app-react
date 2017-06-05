import React, { PropTypes } from 'react';

import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import CartButton from './CartButton';

const ProductDetails = ({ product, addToCart }) => {
  const { image } = product;

  return (
    <div className="product">
      <ProductImage image={image} />
      <ProductInfo product={product}>
        <div className="toolbar">
          <CartButton product={product} addToCart={addToCart} />
        </div>
      </ProductInfo>
    </div>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
  }),
  addToCart: PropTypes.func,
};

export default ProductDetails;
