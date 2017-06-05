import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({ count, product }) => {
  const { id, image, title, price } = product;

  return (
    <tr>
      <td className="image">
        <img src={image} />
      </td>
      <td>
        <div className="title">
          <Link to={`/products/${id}`}>
            {title}
          </Link>
        </div>
        <div className="price">
          <span className="quantity">
            {count}
          </span> x ${price}
        </div>
        <div className="total">
          ${count * price}
        </div>
      </td>
    </tr>
  );
};

CartItem.propTypes = {
  count: PropTypes.number,
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default CartItem;
