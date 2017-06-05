import React, {  PropTypes } from 'react';
import _ from 'lodash';

import Navbar from '../components/Navbar';

const NavbarContainer = (props, { cart }) => {
  const count = _.sumBy(cart, 'count');
  const total = cart.reduce(
    (acc, item) => {
      const { count, product } = item;

      acc += count * product.price;

      return acc;
    },
    0,
  );

  return <Navbar count={count} total={total} />;
};

NavbarContainer.contextTypes = {
  cart: PropTypes.array,
};

export default NavbarContainer;
