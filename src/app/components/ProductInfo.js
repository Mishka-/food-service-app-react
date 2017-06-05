import React, { PropTypes } from 'react';

const ProductInfo = ({ product, children }) => {
  const { title, description, price } = product;

  return (
    <div className="product-info">
      <h5 className="title">{title}</h5>
      <small className="description">{description}</small>
      <div className="price">${price}</div>
      {children}
    </div>
  );
};

ProductInfo.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }),
  children: PropTypes.node,
};

export default ProductInfo;

