import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import _ from 'lodash';

import './styles';

import Navbar from './containers/Navbar';
import Sidebar from './containers/Sidebar';
import ProductsList from './containers/ProductsList';
import ProductDetails from './containers/ProductDetails';

import { getData } from './lib/api';

class Root extends Component {
  state = {
    cart: [],
    data: [],
    ready: false,
  };

  static childContextTypes = {
    addToCart: PropTypes.func,
    cart: PropTypes.array,
    data: PropTypes.array,
  };

  getChildContext() {
    const { cart, data } = this.state;

    return {
      cart,
      data,
      addToCart: this.addToCart,
    };
  }

  addToCart = (product) => {
    const cart = this.state.cart.slice();
    const index = _.findIndex(cart, ['product.id', product.id]);

    if (index >= 0) {
      const prevData = cart[index];

      cart[index] = {
        ...prevData,
        count: prevData.count + 1,
      };
    } else {
      cart.push({
        count: 1,
        product,
      });
    }

    this.setState({ cart });
  };

  componentDidMount() {
    getData().then(data => {
      this.setState({ data, ready: true });
    });
  }

  render() {
    return (
      <Router>
        <div className="root">
          <div className="root__navbar">
            <Navbar />
          </div>
          <div className="root__content">
            <div className="container">
              <div className="row">
                <div className="col-8">
                  {this.renderContent()}
                </div>
                <div className="col-4">
                  <Sidebar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }

  renderContent() {
    if (!this.state.ready) {
      return <div className="loading">Loading...</div>;
    }

    return (
      <Switch>
        <Route exact path="/" component={ProductsList} />
        <Route path="/products/:id" component={ProductDetails} />
      </Switch>
    );
  }
}

export default Root;
