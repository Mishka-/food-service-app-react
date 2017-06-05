import React, { PropTypes } from 'react';

import Sidebar from '../components/Sidebar';

const SidebarContainer = (props, context) => {
  const { cart } = context;

  return <Sidebar cart={cart} />;
};

SidebarContainer.contextTypes = {
  cart: PropTypes.array,
};

export default SidebarContainer;
