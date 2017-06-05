import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ count, total }) => {
  return (
    <nav className="navbar navbar-light navbar-toggleable-sm bg-faded fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Food Service App
        </Link>

        <div className="collapse navbar-collapse">
          <span className="navbar-text ml-auto">
            {renderContent()}
          </span>
        </div>
      </div>
    </nav>
  );

  function renderContent() {
    if (count) {
      const items = count === 1 ? 'item' : 'items';

      return (
        <span className="text-success">
          {count} {items} = ${total}
        </span>
      );
    }

    return (
      <span className="text-danger">
        Your cart is empty
      </span>
    );
  }
};

Navbar.propTypes = {
  count: PropTypes.number,
  total: PropTypes.number,
};

export default Navbar;
