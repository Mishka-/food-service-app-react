import React, { PropTypes } from 'react';

import CartItem from './CartItem';

const Cart = ({ items }) => {
  return (
    <table className="cart">
      <tbody>
        {items.map(({ count, product }) => (
          <CartItem
            key={product.id}
            count={count}
            product={product}
          />
        ))}
      </tbody>
    </table>
  );
};

Cart.propTypes = {
  items: PropTypes.array,
};

export default Cart;
