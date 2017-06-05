import React, { Component, PropTypes } from 'react';

class CartButton extends Component {
  static propTypes = {
    product: PropTypes.object,
    addToCart: PropTypes.func,
  };

  addToCart = () => {
    const { product, addToCart } = this.props;

    addToCart(product);
  };

  render() {

    return (
      <button className="btn btn-secondary" onClick={this.addToCart}>
        Add to Cart
      </button>
    );
  }
}

export default CartButton;
