import React, { PropTypes } from 'react';

import Cart from './Cart';
import EmptyCart from './EmptyCart';

const Sidebar = ({ cart }) => {
  return (
    <div className="block">
      <div className="block-header block-title">Cart</div>
      <div className="block-content">
        {renderCart()}
      </div>
    </div>
  );

  function renderCart() {
    if (cart.length > 0) {
      return <Cart items={cart} />;
    }

    return <EmptyCart />;
  }
};

Sidebar.propTypes = {
  cart: PropTypes.array,
};

export default Sidebar;
