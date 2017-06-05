import React, { PropTypes } from 'react';

const ProductImage = ({ image }) => (
  <div className="product-image">
    <img className="img-fluid img-thumbnail" src={image} />
  </div>
);

ProductImage.propTypes = {
  image: PropTypes.string,
};

export default ProductImage;
