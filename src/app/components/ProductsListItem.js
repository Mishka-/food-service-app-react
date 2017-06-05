import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

import CartButton from './CartButton';

const ProductsListItem = ({ product, addToCart }) => {
  const { id, image, title, description, price } = product;

  return (
    <div className="col-md-4 product-grid-item" >
      <Link to={`/products/${id}`}>
        <span className="image" >
          <img src={image} className="img-thumbnail" />
          <span className="title">
            {title}
          </span>
        </span>
      </Link>
      <div className="description">{description}</div>
      <div className="price">${price}</div>
      <CartButton product={product} addToCart={addToCart} />
    </div>
  );
};

ProductsListItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
  }),
  addToCart: PropTypes.func,
};

export default ProductsListItem;
